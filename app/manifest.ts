import type { MetadataRoute } from "next";
import { siteConfig } from "@/site-config";

// Required for `output: export`, emit manifest.webmanifest as a static file.
export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.businessName,
    short_name: siteConfig.shortName,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: siteConfig.brand.bone,
    theme_color: siteConfig.brand.forestDeep,
    icons: [
      { src: "/icon.png", sizes: "512x512", type: "image/png" },
      { src: "/apple-icon.png", sizes: "180x180", type: "image/png" },
    ],
  };
}
