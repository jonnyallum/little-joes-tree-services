/**
 * JSON-LD structured data generators.
 *
 * Rule from the SEO brief: schema must match VISIBLE page content and never be
 * misleading. We deliberately do NOT emit an aggregateRating: only the Google
 * reviews carry a verified per-review star rating (Facebook is "recommends",
 * Bark doesn't expose stars), and self-serving aggregateRating markup on a
 * business's own site is discouraged by Google. The on-page figure ("98% rated
 * us 5 stars") is for humans, not a schema ratingValue.
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
