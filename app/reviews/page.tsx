import type { Metadata } from "next";
import { PageHero } from "@/components/PageHero";
import { ReviewsSection } from "@/components/ReviewsSection";
import { AllReviews } from "@/components/AllReviews";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Reviews", path: "/reviews" },
];

export const metadata: Metadata = pageMetadata({
  title: "Reviews | Little Joe's Tree Services Hampshire",
  description: `${siteConfig.reviews.recommendPercent}% of customers recommend Little Joe's Tree Services, based on ${siteConfig.reviews.count} reviews. See why Hampshire customers trust us, or leave your own review.`,
  path: "/reviews",
});

export default function ReviewsPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Reviews & trust"
        title="Trusted by local customers across Hampshire"
        intro="We let the work, and our customers, do the talking. Here's the trust we've built locally, and where to read and leave reviews."
        breadcrumbs={breadcrumbs}
      />
      <ReviewsSection showGrid={false} />
      <AllReviews />
      <CTASection />
    </>
  );
}
