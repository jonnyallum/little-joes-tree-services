/**
 * GA4 event helpers (client-side).
 *
 * Tracking is lean by design (SEO brief): GA4 only loads when a Measurement ID
 * is set (see components/Analytics.tsx). These helpers no-op safely when GA4 is
 * absent, so call sites never need to guard.
 *
 * Tracked conversions: click-to-call, contact form submission, Google review
 * click, Facebook click, YouTube play, quote-CTA clicks.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

export type GaEvent =
  | "click_to_call"
  | "form_submission"
  | "google_review_click"
  | "facebook_click"
  | "youtube_play"
  | "quote_cta_click";

export function trackEvent(event: GaEvent, params: Record<string, unknown> = {}): void {
  if (typeof window === "undefined" || typeof window.gtag !== "function") return;
  window.gtag("event", event, params);
}
