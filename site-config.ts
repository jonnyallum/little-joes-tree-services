/**
 * site-config.ts, SINGLE SOURCE OF TRUTH for Little Joe's Tree Services.
 *
 * Every piece of business data, every URL and every brand fact lives here.
 * Do not hardcode these values anywhere else in the codebase, import from here.
 *
 * Everything in this file is drawn from CONFIRMED sources only:
 *   - the brand logo (business name styling, colours)
 *   - the approved homepage copy (content/homepage.md)
 *   - the live business links (docs reference / live-site-links)
 *   - the project brief (PROJECT-BRIEF.md)
 *
 * Items marked "CONFIRM" need the client to verify before go-live (see README).
 */

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.littlejoestreeservices.co.uk").replace(/\/$/, "");

export const siteConfig = {
  /* ---------------------------------------------------------------- identity */
  // The logo reads "LITTLE JOES TREE SERVICES". Approved body copy uses the
  // singular possessive "Little Joe's Tree Service". We use the possessive
  // plural as the brand name and keep approved copy verbatim where it appears.
  // CONFIRM exact legal/trading name and apostrophe style with the client.
  businessName: "Little Joe's Tree Services",
  shortName: "Little Joe's",
  tagline: "Tree surgery and garden clearance across Hampshire",
  description:
    "Tree surgery, stump grinding, hedge cutting, clearance and fencing across Hampshire. Fully insured, qualified, free estimates, 24/7 emergency call-outs.",

  /* ----------------------------------------------------------------- contact */
  phone: "07519 744 790",
  // tel: href uses no spaces, used wherever the number is clickable.
  phoneHref: "tel:07519744790",
  // WhatsApp deep link (same mobile number) with a friendly prefilled opener.
  whatsappHref:
    "https://wa.me/447519744790?text=Hi%20Joe%2C%20I%27d%20like%20a%20quote%20please.",
  email: "info@littlejoestreeservices.co.uk",
  // Where the contact form delivers (kept in sync with CONTACT_TO_EMAIL env).
  enquiryEmail: "info@littlejoestreeservices.co.uk",

  /* ------------------------------------------------------------- credentials */
  // All confirmed via the Facebook business profile / approved copy.
  credentials: ["NPTC qualified", "City & Guilds qualified", "Fully insured"] as const,
  emergency: {
    available: true,
    label: "24/7 emergency call-outs",
  },
  freeEstimates: true,

  /* ----------------------------------------------------------------- reviews */
  // Verified aggregate from the Facebook business page (see homepage.md).
  // We do NOT invent individual reviews, real quotes go in lib/reviews.ts
  // once supplied. Until then the UI leans on this aggregate + review CTAs.
  // Aggregate shown in the hero/reviews. `count` tracks the number of genuine
  // reviews compiled into lib/reviews-data.ts (re-run scripts/build-reviews.mjs
  // and bump this if the source files change).
  reviews: {
    // % of customers who rated us 5 stars. Derived from the reviews with a
    // VERIFIED per-review star rating (the 41 Google reviews: 40 of 41 = 5★ =
    // 98%). Facebook reviews are "recommends" and Bark doesn't expose per-review
    // stars, so we use the conservative, verifiable Google figure. Re-check after
    // running scripts/build-reviews.mjs (it prints the counted figures).
    fiveStarPercent: 98,
    // Total genuine reviews across platforms: Facebook 23 + Bark 65 + Google 45
    // (41 written incl. the existing 5, minus cross-platform duplicates, + 4
    // star-only ratings). 125 carry a written comment and are shown as
    // testimonials; the rest left a star rating only. Re-run build-reviews.mjs
    // (it prints the counted figures) after editing reviews/*.
    count: 129,
    source: "Google, Facebook & Bark",
  },

  /* ------------------------------------------------------------- service area */
  serviceArea: "Hampshire and surrounding areas",
  serviceAreaRegion: "Hampshire",

  /* ------------------------------------------------------------------- links */
  // Live business links, do not change without confirming with the client.
  url: SITE_URL,
  facebookUrl: "https://www.facebook.com/profile.php?id=100064091166943",
  facebookReviewUrl:
    "https://www.facebook.com/p/Little-Joes-Tree-Service-100064091166943/reviews/",
  googleReviewUrl:
    "https://search.google.com/local/writereview?placeid=ChIJ1TFyb_2GlSwRhFQt81c3w0Q",
  youtubePlaylistUrl:
    "https://youtube.com/playlist?list=PLmh5zDJCEdDclDC5r8phPDsO_RzpeB4m0&si=iOLHsJ8RfU0odqb-",
  youtubePlaylistId: "PLmh5zDJCEdDclDC5r8phPDsO_RzpeB4m0",
  youtubePlaylistEmbedUrl:
    "https://www.youtube.com/embed/videoseries?list=PLmh5zDJCEdDclDC5r8phPDsO_RzpeB4m0",

  /* -------------------------------------------------- digital business card */
  // The shareable card at /card — what NFC taps and QR scans open. Details
  // match the vCard served from public/card/joseph-ennis.vcf.
  card: {
    person: "Joseph Ennis",
    role: "Owner & Tree Surgeon",
    location: "Havant, Hampshire",
    country: "United Kingdom",
    directionsUrl: "https://maps.google.com/?q=Little+Joes+Tree+Services+Havant+Hampshire",
    vcardPath: "/card/joseph-ennis.vcf",
  },

  /* --------------------------------------------------------------- analytics */
  // Empty string => GA4 is not loaded at all (no duplicate/dummy tracking).
  ga4MeasurementId: process.env.NEXT_PUBLIC_GA4_ID ?? "",
  gscVerification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ?? "",

  /* ------------------------------------------------------------------- brand */
  // Mirrors tailwind.config.ts, used for theme-color, schema, OG images.
  // Green-only palette (no browns/golds): deep forest, emerald accent, soft cream.
  brand: {
    forest: "#0a3d2a",
    forestDeep: "#04190f",
    emerald: "#15a06a",
    bone: "#f8f7f4",
  },
} as const;

export type SiteConfig = typeof siteConfig;

/** Absolute URL helper, joins a path to the canonical site URL. */
export function absoluteUrl(path = ""): string {
  const clean = path.startsWith("/") ? path : `/${path}`;
  return `${siteConfig.url}${clean === "/" ? "" : clean}`;
}
