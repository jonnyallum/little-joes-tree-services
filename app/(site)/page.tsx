import type { Metadata } from "next";
import { HeroSection } from "@/components/HeroSection";
import { TrustBar } from "@/components/TrustBar";
import { IntroStatement } from "@/components/IntroStatement";
import { ServicesSection } from "@/components/ServicesSection";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Gallery } from "@/components/Gallery";
import { VideoSection } from "@/components/VideoSection";
import { ReviewsSection } from "@/components/ReviewsSection";
import { AreasSection } from "@/components/AreasSection";
import { CTASection } from "@/components/CTASection";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

export const metadata: Metadata = pageMetadata({
  title: `${siteConfig.businessName} | Tree Surgery in Hampshire`,
  description: siteConfig.description,
  path: "/",
});

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <IntroStatement />
      <ServicesSection />
      <Gallery />
      <WhyChooseUs />
      <VideoSection />
      <ReviewsSection />
      <AreasSection />
      <CTASection />
    </>
  );
}
