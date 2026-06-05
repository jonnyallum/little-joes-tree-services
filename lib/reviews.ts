/**
 * Customer reviews — all genuine, sourced from the verified exports in /reviews
 * and compiled by scripts/build-reviews.mjs into lib/reviews-data.ts.
 * Re-run `node scripts/build-reviews.mjs` after updating the source text files.
 *
 * We never invent reviews.
 */
import { allReviews } from "./reviews-data";

export type ReviewSource = "Facebook" | "Google" | "Bark";

export type Review = {
  author: string;
  /** Optional town/area for local relevance */
  location?: string;
  quote: string;
  /** 1-5 */
  rating?: number;
  source: ReviewSource;
};

export const reviews: Review[] = allReviews;
export const hasReviews = reviews.length > 0;
export const reviewCount = reviews.length;

/** A short, marquee-friendly selection (prefers punchy reviews, mixes sources). */
export const tickerReviews: Review[] = reviews.filter((r) => r.quote.length <= 220);

/** A curated handful for the homepage grid (a mix across platforms). */
export const featuredReviews: Review[] = [
  ...reviews.filter((r) => r.source === "Google"),
  ...reviews.filter((r) => r.source === "Facebook"),
  ...reviews.filter((r) => r.source === "Bark"),
]
  .filter((r) => r.quote.length >= 60 && r.quote.length <= 320)
  .slice(0, 9);
