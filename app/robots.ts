import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/site-config";

// Required for `output: export`, emit robots.txt as a static file.
export const dynamic = "force-static";

/**
 * robots.txt, allow all public pages (don't block CSS/JS/images), disallow
 * only the API route, and declare the sitemap. Matches the SEO brief.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: absoluteUrl("/"),
  };
}
