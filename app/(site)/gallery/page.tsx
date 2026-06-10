import { Metadata } from "next";
import { GalleryClient } from "@/components/gallery/gallery-client";
import { siteConfig, absoluteUrl } from "@/site-config";

export const metadata: Metadata = {
  title: "Gallery | Little Joe's Tree Services",
  description: "See our recent tree surgery, stump grinding, and garden clearance work across Hampshire.",
  openGraph: {
    title: "Gallery | Little Joe's Tree Services",
    description: "See our recent tree surgery, stump grinding, and garden clearance work across Hampshire.",
    url: absoluteUrl("/gallery"),
    type: "website",
  },
};

export default function GalleryPage() {
  return (
    <main className="min-h-screen bg-bone">
      <GalleryClient />
    </main>
  );
}
