import type { Metadata } from "next";
import {
  ChevronRight,
  Download,
  Facebook,
  Globe,
  Mail,
  MapPin,
  Phone,
  Star,
} from "lucide-react";
import { ReviewMarquee } from "@/components/ReviewTicker";
import { CallLink, TrackedExternal } from "@/components/tracked";
import { siteConfig, absoluteUrl } from "@/site-config";

/**
 * Joseph's digital business card — the page NFC taps and QR scans open.
 * Standalone (no site header/footer, see app/(site)/layout.tsx) so it reads as
 * a card, with the site's scrolling review strip built into it.
 */

export const metadata: Metadata = {
  title: `${siteConfig.card.person} — Digital Business Card`,
  description: `Save ${siteConfig.card.person}'s contact details. ${siteConfig.description}`,
  alternates: { canonical: "/card" },
  openGraph: {
    title: `${siteConfig.card.person} | ${siteConfig.businessName}`,
    description: siteConfig.description,
    url: absoluteUrl("/card"),
  },
};

const rowClass =
  "group flex w-full items-center gap-3.5 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3.5 text-left transition hover:bg-white/[0.12] tap-safe";

function RowBody({
  icon,
  label,
  sub,
}: {
  icon: React.ReactNode;
  label: string;
  sub: string;
}) {
  return (
    <>
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/15 text-leaf-300">
        {icon}
      </span>
      <span className="min-w-0 flex-1">
        <span className="block text-sm font-semibold text-bone-50">{label}</span>
        <span className="block truncate text-xs text-bone-300">{sub}</span>
      </span>
      <ChevronRight
        className="h-4 w-4 shrink-0 text-leaf-300 transition-transform group-hover:translate-x-0.5"
        aria-hidden
      />
    </>
  );
}

export default function CardPage() {
  const { card } = siteConfig;

  return (
    <main className="flex min-h-screen items-center justify-center px-4 py-10 sm:py-14">
      <article className="w-full max-w-md overflow-hidden rounded-3xl border border-white/10 surface-forest shadow-lift backdrop-blur-sm">
        {/* Identity */}
        <header className="px-6 pt-9 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/brand/little-joes-logo.png"
            alt={`${siteConfig.businessName} logo`}
            width={112}
            height={112}
            className="mx-auto h-28 w-28 rounded-full bg-forest-950/60 object-contain ring-1 ring-white/15"
          />
          <p className="mt-4 text-[0.65rem] font-bold uppercase tracking-brand text-leaf-300">
            Digital Business Card
          </p>
          <h1 className="mt-3 text-3xl font-semibold text-bone-50">{card.person}</h1>
          <p className="mt-1 text-sm font-medium text-leaf-300">
            {card.role} · {siteConfig.businessName}
          </p>
          <p className="mx-auto mt-3 max-w-xs text-[0.85rem] leading-relaxed text-bone-200/90">
            Tree surgery, hedge cutting, stump removal &amp; emergency callouts across
            Hampshire and surrounding areas.
          </p>

          {/* Verified aggregate from site-config — never invented. */}
          <p className="mt-4 flex items-center justify-center gap-2 text-xs text-bone-200/90">
            <span className="text-sm tracking-tight text-leaf-400" aria-label="5 out of 5 stars">
              ★★★★★
            </span>
            <span>
              <strong className="font-semibold text-bone-50">
                {siteConfig.reviews.fiveStarPercent}% 5-star
              </strong>{" "}
              · {siteConfig.reviews.count} reviews on {siteConfig.reviews.source}
            </span>
          </p>
        </header>

        {/* The site's scrolling reviews, built into the card. */}
        <div className="mt-6 border-y border-white/10 bg-forest-950/40">
          <ReviewMarquee />
        </div>

        {/* Location */}
        <div className="mx-5 mt-5 flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] px-4 py-3">
          <MapPin className="h-4 w-4 shrink-0 text-leaf-300" aria-hidden />
          <p className="text-sm text-bone-200">
            {card.location}, {card.country}
          </p>
        </div>

        {/* Actions */}
        <div className="flex flex-col gap-2.5 px-5 pb-7 pt-4">
          <CallLink
            phone={siteConfig.phone}
            phoneHref={siteConfig.phoneHref}
            location="card"
            className={rowClass}
          >
            <RowBody
              icon={<Phone size={18} aria-hidden />}
              label={`Call ${card.person.split(" ")[0]}`}
              sub={siteConfig.phone}
            />
          </CallLink>

          <a href={`mailto:${siteConfig.email}`} className={rowClass}>
            <RowBody
              icon={<Mail size={18} aria-hidden />}
              label="Email"
              sub={siteConfig.email}
            />
          </a>

          <a href={siteConfig.url} className={rowClass}>
            <RowBody
              icon={<Globe size={18} aria-hidden />}
              label="Visit Website"
              sub={siteConfig.url.replace(/^https?:\/\/(www\.)?/, "")}
            />
          </a>

          <a
            href={card.directionsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={rowClass}
          >
            <RowBody
              icon={<MapPin size={18} aria-hidden />}
              label="Get Directions"
              sub={card.location}
            />
          </a>

          <TrackedExternal
            href={siteConfig.googleReviewUrl}
            event="google_review_click"
            className={rowClass}
          >
            <RowBody
              icon={<Star size={18} aria-hidden />}
              label="Leave a Google Review"
              sub="Open the Google review page"
            />
          </TrackedExternal>

          <TrackedExternal
            href={siteConfig.facebookReviewUrl}
            event="facebook_click"
            className={rowClass}
          >
            <RowBody
              icon={<Facebook size={18} aria-hidden />}
              label="Leave a Facebook Review"
              sub="Open the Facebook reviews page"
            />
          </TrackedExternal>

          <a href={card.vcardPath} download className={rowClass}>
            <RowBody
              icon={<Download size={18} aria-hidden />}
              label="Save Contact"
              sub={`Download ${card.person.split(" ")[0]}'s vCard`}
            />
          </a>
        </div>

        {/* Credentials */}
        <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 px-6 pb-5 text-[0.7rem] text-bone-300">
          {siteConfig.credentials.map((c) => (
            <span key={c} className="flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-leaf-400" aria-hidden />
              {c}
            </span>
          ))}
          <span className="flex items-center gap-1.5">
            <span className="h-1 w-1 rounded-full bg-leaf-400" aria-hidden />
            {siteConfig.emergency.label}
          </span>
        </div>

        <footer className="border-t border-white/10 px-6 py-4 text-center text-[0.7rem] text-bone-400">
          Built for NFC cards, QR codes &amp; direct sharing.
        </footer>
      </article>
    </main>
  );
}
