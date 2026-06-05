import { GoogleAnalytics } from "@next/third-parties/google";
import { siteConfig } from "@/site-config";

/**
 * GA4, loaded only when a Measurement ID is configured (NEXT_PUBLIC_GA4_ID).
 * @next/third-parties loads gtag.js efficiently (off the critical path) and
 * handles SPA page views automatically. No ID => nothing is injected, so there
 * is zero tracking overhead and no duplicate/dummy hits before go-live.
 */
export function Analytics() {
  if (!siteConfig.ga4MeasurementId) return null;
  return <GoogleAnalytics gaId={siteConfig.ga4MeasurementId} />;
}
