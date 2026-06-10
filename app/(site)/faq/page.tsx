import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { FaqAccordion } from "@/components/FaqAccordion";
import { CTASection } from "@/components/CTASection";
import { JsonLd } from "@/components/ui/JsonLd";
import { faqs } from "@/lib/faqs";
import { faqPageSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "FAQ", path: "/faq" },
];

export const metadata: Metadata = pageMetadata({
  title: "FAQs | Little Joe's Tree Services Hampshire",
  description:
    "Common questions about our Hampshire tree surgery, stump grinding, hedge cutting and clearance, quotes, insurance, qualifications, areas covered and emergencies.",
  path: "/faq",
});

export default function FaqPage() {
  return (
    <>
      {/* FAQPage schema matches the visible accordion content exactly. */}
      <JsonLd data={[faqPageSchema(faqs), breadcrumbSchema(breadcrumbs)]} />
      <PageHero
        eyebrow="Good to know"
        title="Frequently asked questions"
        intro="Quick answers to the things customers ask us most. If your question isn't here, just give us a call."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="bone">
        <Container size="narrow">
          <FaqAccordion faqs={faqs} />
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
