import type { Metadata } from "next";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { ServiceCard } from "@/components/ServiceCard";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path: "/services" },
];

export const metadata: Metadata = pageMetadata({
  title: "Our Tree & Garden Services in Hampshire | Little Joe's Tree Services",
  description:
    "Tree surgery, tree removal, stump grinding, hedge cutting, site and garden clearance, fencing and 24/7 emergency tree work across Hampshire. Free estimates.",
  path: "/services",
});

export default function ServicesIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="What we do"
        title="Tree and outdoor services across Hampshire"
        intro="From single-tree work in a back garden to larger clearance jobs, we cover all the main jobs people usually ring about, safely, fairly and tidily."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="bone">
        <Container size="wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 3) * 0.06}>
                <ServiceCard service={service} className="h-full" />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
