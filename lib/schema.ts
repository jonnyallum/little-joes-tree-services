/**
 * JSON-LD structured data generators.
 *
 * Rule from the SEO brief: schema must match VISIBLE page content and never be
 * misleading. Notably we do NOT emit an aggregateRating, the verified figure is
 * a 94% "recommendation rate", not an average star rating, so inventing a
 * ratingValue would be misleading. Add aggregateRating only when a genuine
 * average star rating exists (see README → manual items).
 */

import { siteConfig, absoluteUrl } from "@/site-config";
import { locations } from "./locations";
import type { Service } from "./services";

const LOGO = absoluteUrl("/brand/little-joes-logo.png");

/** Stable @id for the business node so other nodes can reference it. */
export const businessId = `${siteConfig.url}/#business`;

export function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": businessId,
    name: siteConfig.businessName,
    description: siteConfig.description,
    url: siteConfig.url,
    telephone: siteConfig.phone,
    email: siteConfig.email,
    image: LOGO,
    logo: LOGO,
    priceRange: "££",
    address: {
      "@type": "PostalAddress",
      // No street address confirmed, region + country only (see README).
      addressRegion: "Hampshire",
      addressCountry: "GB",
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Hampshire" },
      ...locations.map((l) => ({ "@type": "City", name: l.name })),
    ],
    sameAs: [siteConfig.facebookUrl],
    knowsAbout: [
      "Tree surgery",
      "Tree removal",
      "Stump grinding",
      "Hedge cutting",
      "Site clearance",
      "Garden clearance",
      "Fencing",
      "Emergency tree work",
    ],
    // Honest, factual trust signals (no invented star rating).
    hasCredential: ["NPTC", "City & Guilds"],
  };
}

export function serviceSchema(service: Service) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.navLabel,
    serviceType: service.navLabel,
    description: service.metaDescription,
    url: absoluteUrl(`/services/${service.slug}`),
    provider: { "@id": businessId },
    areaServed: { "@type": "AdministrativeArea", name: "Hampshire" },
  };
}

export function faqPageSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; path: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.businessName,
    url: siteConfig.url,
    publisher: { "@id": businessId },
    inLanguage: "en-GB",
  };
}
