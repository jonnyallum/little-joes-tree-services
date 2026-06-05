import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowRight, Phone, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { QuoteCard } from "@/components/QuoteCard";
import { CallLink } from "@/components/tracked";
import { buttonVariants } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { getLocation, locationSlugs, locations } from "@/lib/locations";
import { services } from "@/lib/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

export function generateStaticParams() {
  return locationSlugs.map((town) => ({ town }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ town: string }>;
}): Promise<Metadata> {
  const { town } = await params;
  const loc = getLocation(town);
  if (!loc) return {};
  return pageMetadata({
    title: loc.metaTitle,
    description: loc.metaDescription,
    path: `/areas/${loc.slug}`,
  });
}

export default async function AreaPage({
  params,
}: {
  params: Promise<{ town: string }>;
}) {
  const { town } = await params;
  const loc = getLocation(town);
  if (!loc) notFound();

  // Resolve nearby town names to their pages where one exists.
  const nearby = loc.nearby
    .map((name) => locations.find((l) => l.name === name))
    .filter((l): l is NonNullable<typeof l> => Boolean(l));

  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Areas", path: "/areas" },
    { name: loc.name, path: `/areas/${loc.slug}` },
  ];

  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />

      <PageHero
        eyebrow={`${loc.county} · ${loc.postcodeArea}`}
        title={`Tree surgery in ${loc.name}`}
        intro={loc.intro}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
            Get a free quote in {loc.name}
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <CallLink
            phone={siteConfig.phone}
            phoneHref={siteConfig.phoneHref}
            location={`area-hero:${loc.slug}`}
            asButton
            variant="primary"
            size="lg"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {siteConfig.phone}
          </CallLink>
        </div>
      </PageHero>

      <Section tone="bone">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
            <div>
              <div className="prose-brand">
                <p>{loc.localContext}</p>
                <p>
                  If you are looking for tree surgery in {loc.name},{" "}
                  {siteConfig.businessName} provides practical, reliable help with tree
                  work, stump grinding, hedge cutting, clearance and fencing across{" "}
                  {siteConfig.serviceArea}.
                </p>
                <p>
                  We help homeowners, landlords and commercial customers with everything
                  from overgrown hedges and unwanted stumps to larger tree jobs and urgent
                  call-outs. The aim is always the same: turn up, assess the job properly,
                  carry out the work safely and leave the place tidy afterwards.
                </p>
              </div>

              {/* Services in this town */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-forest-900">
                  What we do in {loc.name}
                </h2>
                <div className="mt-5 grid gap-3 sm:grid-cols-2">
                  {services.map((s) => {
                    const Icon = serviceIcons[s.slug];
                    return (
                      <Link
                        key={s.slug}
                        href={`/services/${s.slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-forest-900/10 bg-white p-4 shadow-soft transition-all duration-300 ease-spring hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-glow-leaf"
                      >
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-forest-700 to-forest-950 text-bone-50">
                          {Icon ? <Icon className="h-6 w-6" /> : null}
                        </span>
                        <span className="font-medium text-forest-900">{s.navLabel}</span>
                        <ArrowRight className="ml-auto h-4 w-4 text-bone-500 transition-transform group-hover:translate-x-1" aria-hidden />
                      </Link>
                    );
                  })}
                </div>
              </div>

              {/* Free estimate line */}
              <p className="mt-10 rounded-xl border border-forest-900/10 bg-white p-6 text-bone-700 shadow-soft">
                For a free estimate in {loc.name}, give us a ring on{" "}
                <a
                  href={siteConfig.phoneHref}
                  className="font-semibold text-forest-900 underline decoration-emerald-400/60 underline-offset-2 hover:text-emerald-700"
                >
                  {siteConfig.phone}
                </a>{" "}
                or send over a few photos of the job.
              </p>

              {/* Nearby areas */}
              {nearby.length > 0 && (
                <div className="mt-12">
                  <h2 className="flex items-center gap-2 text-xl font-semibold text-forest-900">
                    <MapPin className="h-5 w-5 text-emerald-600" aria-hidden />
                    Nearby areas we also cover
                  </h2>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {nearby.map((n) => (
                      <li key={n.slug}>
                        <Link
                          href={`/areas/${n.slug}`}
                          className="inline-flex items-center rounded-lg border border-forest-900/10 bg-white px-3 py-1.5 text-sm text-forest-800 transition-colors hover:border-emerald-400/40 hover:text-forest-900"
                        >
                          {n.name}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        href="/areas"
                        className="inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-medium text-emerald-700 hover:text-forest-900"
                      >
                        All areas →
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </div>

            <aside className="lg:sticky lg:top-28 lg:self-start">
              <Reveal>
                <QuoteCard location={`area-aside:${loc.slug}`} />
              </Reveal>
            </aside>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Need tree work in ${loc.name}?`}
        location={`area-cta:${loc.slug}`}
      />
    </>
  );
}
