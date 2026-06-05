import type { Metadata } from "next";
import { siteConfig } from "@/site-config";

/**
 * Per-page metadata helper. Produces a unique title + description, a
 * self-referencing canonical, and aligned Open Graph / Twitter tags.
 * `metadataBase` is set in app/layout.tsx, so `path` can be relative.
 */
export function pageMetadata({
  title,
  description,
  path,
  noindex = false,
}: {
  title: string;
  description: string;
  path: string;
  noindex?: boolean;
}): Metadata {
  const canonical = path === "/" ? "/" : path;
  return {
    // Absolute: the approved SEO titles already carry their own suffix, so we
    // don't want the layout's "%s | brand" template doubling it up.
    title: { absolute: title },
    description,
    alternates: { canonical },
    robots: noindex ? { index: false, follow: false } : undefined,
    openGraph: {
      type: "website",
      siteName: siteConfig.businessName,
      title,
      description,
      url: canonical,
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}
