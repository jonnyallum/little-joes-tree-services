import type { Metadata } from "next";
import Link from "next/link";
import { MapPin, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { locations } from "@/lib/locations";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Areas", path: "/areas" },
];

export const metadata: Metadata = pageMetadata({
  title: "Areas We Cover in Hampshire | Little Joe's Tree Services",
  description:
    "Tree surgery, hedge cutting, stump grinding, clearance and fencing across Hampshire, from Portsmouth and Southampton to Petersfield, Winchester and beyond. Free estimates.",
  path: "/areas",
});

export default function AreasIndexPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Where we work"
        title="Tree services across Hampshire and nearby areas"
        intro="We cover a wide stretch of Hampshire and the surrounding areas. Find your town below for local detail, and if you're just outside, get in touch anyway."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="bone">
        <Container size="wide">
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((loc, i) => (
              <Reveal key={loc.slug} delay={(i % 3) * 0.05}>
                <Link
                  href={`/areas/${loc.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-forest-900/10 bg-white p-6 shadow-card transition-all duration-300 ease-brand hover:-translate-y-1 hover:border-emerald-400/40 hover:shadow-lift"
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex items-center gap-2 text-lg font-semibold text-forest-900">
                      <MapPin className="h-4 w-4 text-emerald-600" aria-hidden />
                      {loc.name}
                    </span>
                    <span className="text-xs font-medium uppercase tracking-wide text-bone-500">
                      {loc.postcodeArea}
                    </span>
                  </div>
                  <p className="mt-3 flex-1 text-[0.95rem] leading-relaxed text-bone-700 line-clamp-3">
                    {loc.intro}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
                    Tree services in {loc.name}
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <p className="mt-10 max-w-2xl text-bone-700">
            Just outside these areas? Still get in touch, call{" "}
            <a href={siteConfig.phoneHref} className="font-semibold text-forest-900 underline decoration-emerald-400/60 underline-offset-2 hover:text-emerald-700">
              {siteConfig.phone}
            </a>{" "}
            and we&rsquo;ll quickly let you know whether we can help.
          </p>
        </Container>
      </Section>

      <CTASection />
    </>
  );
}
