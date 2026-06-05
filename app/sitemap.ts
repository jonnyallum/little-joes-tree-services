import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/site-config";
import { serviceSlugs } from "@/lib/services";
import { locationSlugs } from "@/lib/locations";

// Required for `output: export`, emit sitemap.xml as a static file.
export const dynamic = "force-static";

/**
 * XML sitemap, only canonical, indexable pages (SEO brief). URLs here match the
 * self-referencing canonicals set per page, with no parameters or duplicates.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const staticPaths: { path: string; priority: number; freq: MetadataRoute.Sitemap[number]["changeFrequency"] }[] = [
    { path: "/", priority: 1.0, freq: "weekly" },
    { path: "/services", priority: 0.9, freq: "monthly" },
    { path: "/areas", priority: 0.8, freq: "monthly" },
    { path: "/about", priority: 0.6, freq: "yearly" },
    { path: "/reviews", priority: 0.6, freq: "monthly" },
    { path: "/faq", priority: 0.5, freq: "yearly" },
    { path: "/contact", priority: 0.8, freq: "yearly" },
  ];

  const servicePaths = serviceSlugs.map((slug) => ({
    path: `/services/${slug}`,
    priority: 0.8,
    freq: "monthly" as const,
  }));

  const areaPaths = locationSlugs.map((slug) => ({
    path: `/areas/${slug}`,
    priority: 0.7,
    freq: "monthly" as const,
  }));

  return [...staticPaths, ...servicePaths, ...areaPaths].map((entry) => ({
    url: absoluteUrl(entry.path),
    lastModified,
    changeFrequency: entry.freq,
    priority: entry.priority,
  }));
}
