import Link from "next/link";
import { Phone, Mail, MapPin, Facebook, Youtube, Star, ShieldCheck } from "lucide-react";
import { Wordmark } from "./Logo";
import { CallLink, TrackedExternal } from "./tracked";
import { footerServiceLinks } from "@/lib/nav";
import { primaryLocations } from "@/lib/locations";
import { siteConfig } from "@/site-config";

const companyLinks = [
  { label: "About us", href: "/about" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export function Footer() {
  const year = 2026; // Date.now() is unavailable here; bump as needed.

  return (
    <footer className="surface-forest text-bone-200">
      <div className="mx-auto max-w-7xl px-5 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1.2fr]">
          {/* Brand + contact */}
          <div>
            <Wordmark />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-bone-300">
              A local Hampshire tree team doing proper tree surgery, clearance and
              fencing, safely, fairly and tidily. Fully insured, qualified, free
              estimates.
            </p>
            <ul className="mt-6 space-y-3 text-sm">
              <li>
                <CallLink
                  phone={siteConfig.phone}
                  phoneHref={siteConfig.phoneHref}
                  location="footer"
                  className="inline-flex items-center gap-2.5 font-semibold text-bone-50 transition-colors hover:text-leaf-300"
                >
                  <Phone className="h-4 w-4 text-leaf-300" aria-hidden />
                  {siteConfig.phone}
                </CallLink>
              </li>
              <li>
                <a
                  href={`mailto:${siteConfig.email}`}
                  className="inline-flex items-center gap-2.5 text-bone-300 transition-colors hover:text-bone-50"
                >
                  <Mail className="h-4 w-4 text-leaf-300" aria-hidden />
                  {siteConfig.email}
                </a>
              </li>
              <li className="inline-flex items-center gap-2.5 text-bone-300">
                <MapPin className="h-4 w-4 text-leaf-300" aria-hidden />
                {siteConfig.serviceArea}
              </li>
            </ul>
          </div>

          {/* Services */}
          <nav aria-label="Services">
            <h3 className="text-sm font-semibold uppercase tracking-brand text-leaf-300">
              Services
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bone-300 transition-colors hover:text-bone-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Areas */}
          <nav aria-label="Areas we cover">
            <h3 className="text-sm font-semibold uppercase tracking-brand text-leaf-300">
              Areas we cover
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {primaryLocations.map((loc) => (
                <li key={loc.slug}>
                  <Link
                    href={`/areas/${loc.slug}`}
                    className="text-bone-300 transition-colors hover:text-bone-50"
                  >
                    {loc.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/areas"
                  className="font-medium text-leaf-300 transition-colors hover:text-leaf-300"
                >
                  All areas →
                </Link>
              </li>
            </ul>
          </nav>

          {/* Company + social */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-brand text-leaf-300">
              Company
            </h3>
            <ul className="mt-5 space-y-2.5 text-sm">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-bone-300 transition-colors hover:text-bone-50"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap items-center gap-3">
              <TrackedExternal
                href={siteConfig.facebookUrl}
                event="facebook_click"
                ariaLabel="Little Joe's Tree Services on Facebook"
                className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#1877F2] px-4 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:brightness-110"
              >
                <Facebook className="h-4 w-4" aria-hidden />
                Facebook
              </TrackedExternal>
              <TrackedExternal
                href={siteConfig.youtubePlaylistUrl}
                event="youtube_play"
                ariaLabel="Watch our work on YouTube"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/15 text-bone-200 transition-colors hover:border-white/40 hover:text-white"
              >
                <Youtube className="h-5 w-5" aria-hidden />
              </TrackedExternal>
              <TrackedExternal
                href={siteConfig.googleReviewUrl}
                event="google_review_click"
                ariaLabel="Leave us a Google review"
                className="inline-flex h-10 items-center gap-2 rounded-lg border border-white/15 px-3 text-sm font-medium text-bone-200 transition-colors hover:border-white/40 hover:text-white"
              >
                <Star className="h-4 w-4 text-leaf-300" aria-hidden />
                Review us
              </TrackedExternal>
            </div>
          </div>
        </div>

        {/* Credentials strip */}
        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-2 border-t border-white/10 pt-8 text-xs text-bone-300">
          <span className="inline-flex items-center gap-2">
            <ShieldCheck className="h-4 w-4 text-leaf-300" aria-hidden />
            {siteConfig.credentials.join(" · ")}
          </span>
          <span className="text-leaf-300">·</span>
          <span>{siteConfig.emergency.label}</span>
          <span className="text-leaf-300">·</span>
          <span>Free estimates</span>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 flex flex-col items-start justify-between gap-3 border-t border-white/10 pt-6 text-xs text-bone-400 sm:flex-row sm:items-center">
          <p>
            &copy; {year} {siteConfig.businessName}. All rights reserved.
          </p>
          <p>
            Tree surgery &amp; garden services across {siteConfig.serviceAreaRegion}.
          </p>
        </div>
      </div>
    </footer>
  );
}
