import type { Metadata } from "next";
import Link from "next/link";
import { BadgeCheck, ShieldCheck, Clock, Leaf, ArrowRight } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { ServiceCard } from "@/components/ServiceCard";
import { Reveal } from "@/components/ui/Reveal";
import { JsonLd } from "@/components/ui/JsonLd";
import { services } from "@/lib/services";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
];

export const metadata: Metadata = pageMetadata({
  title: "About Little Joe's Tree Service | Hampshire Tree Team",
  description:
    "Local Hampshire tree team offering tree surgery, stump removal, hedge cutting, clearance and fencing. Qualified, insured and easy to deal with.",
  path: "/about",
});

const credentials = [
  { icon: BadgeCheck, label: "NPTC & City & Guilds qualified" },
  { icon: ShieldCheck, label: "Fully insured" },
  { icon: Leaf, label: "Free estimates before work starts" },
  { icon: Clock, label: "24/7 emergency call-outs" },
];

export default function AboutPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="About us"
        title="About Little Joe's Tree Service"
        intro="A Hampshire-based tree and outdoor services business, local, straightforward and easy to deal with."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="bone">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr] lg:gap-16">
            <div className="prose-brand">
              <p>
                Little Joe&rsquo;s Tree Service is a Hampshire-based tree and outdoor
                services business, helping customers with everything from tree surgery and
                stump removal to hedge cutting, clearance work and fencing. We&rsquo;re
                known locally as Hampshire&rsquo;s tree team: local, straightforward and
                easy to deal with.
              </p>
              <p>
                We know most people are not looking for fancy language when they need tree
                work done. They just want someone reliable who knows what they are doing,
                works safely and gets the job done properly. That is the standard we aim to
                keep on every job, whether it is a quick hedge cut or a larger tree removal.
              </p>
              <p>
                We are NPTC and City &amp; Guilds qualified and fully insured, and we offer
                free estimates before work starts. If something has come down in bad
                weather or a tree has suddenly become dangerous, we also provide 24/7
                emergency call-outs.
              </p>
            </div>

            <div className="space-y-5">
              <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-card">
                <h2 className="text-lg font-semibold text-forest-900">Our credentials</h2>
                <ul className="mt-4 space-y-3.5">
                  {credentials.map(({ icon: Icon, label }) => (
                    <li key={label} className="flex items-center gap-3 text-[0.95rem] text-bone-800">
                      <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                        <Icon className="h-4 w-4" aria-hidden />
                      </span>
                      {label}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-2xl border border-forest-600/20 surface-forest p-6 text-bone-100 shadow-card">
                <p className="text-4xl font-semibold text-bone-50">
                  {siteConfig.reviews.recommendPercent}%
                </p>
                <p className="mt-1 text-sm text-bone-300">
                  of customers recommend us, based on {siteConfig.reviews.count} reviews on{" "}
                  {siteConfig.reviews.source}.
                </p>
                <Link
                  href="/reviews"
                  className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-leaf-300 hover:text-bone-50"
                >
                  Read more about our reviews
                  <ArrowRight className="h-4 w-4" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </Section>

      <Section tone="stone">
        <Container size="wide">
          <h2 className="text-2xl font-semibold text-forest-900">What we do</h2>
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service, i) => (
              <Reveal key={service.slug} delay={(i % 4) * 0.05}>
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
