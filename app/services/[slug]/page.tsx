import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Check, Phone, ArrowRight, MapPin } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { CTASection } from "@/components/CTASection";
import { CallLink } from "@/components/tracked";
import { buttonVariants } from "@/components/ui/Button";
import { JsonLd } from "@/components/ui/JsonLd";
import { Reveal } from "@/components/ui/Reveal";
import { services, getService, serviceSlugs } from "@/lib/services";
import { serviceIcons } from "@/components/icons/ServiceIcons";
import { primaryLocations } from "@/lib/locations";
import { serviceSchema, breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

// Real branded photos for the services we have imagery for.
const serviceImages: Record<string, { src: string; alt: string }> = {
  "tree-surgery": {
    src: "/services/tree-surgery.jpg",
    alt: "Little Joe's arborist roped up and dismantling a tall tree with a chainsaw",
  },
  "stump-grinding": {
    src: "/services/stump-removal.jpg",
    alt: "A large tree stump cut low and ground out, ready for removal",
  },
  "hedge-cutting": {
    src: "/services/hedge-cutting.jpg",
    alt: "A tall garden hedge cut straight and tidy",
  },
};

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return {};
  return pageMetadata({
    title: service.metaTitle,
    description: service.metaDescription,
    path: `/services/${service.slug}`,
  });
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) notFound();

  const related = services.filter((s) => s.slug !== service.slug).slice(0, 4);
  const heroImg = serviceImages[service.slug];
  const breadcrumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: service.navLabel, path: `/services/${service.slug}` },
  ];

  return (
    <>
      <JsonLd data={[serviceSchema(service), breadcrumbSchema(breadcrumbs)]} />

      <PageHero
        eyebrow="Tree & garden services"
        title={service.title}
        intro={service.intro[0]}
        breadcrumbs={breadcrumbs}
      >
        <div className="flex flex-col gap-3 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
            Get a free quote
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <CallLink
            phone={siteConfig.phone}
            phoneHref={siteConfig.phoneHref}
            location={`service-hero:${service.slug}`}
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
          {heroImg && (
            <Reveal scale className="mb-12 block overflow-hidden rounded-2xl border border-forest-900/10 shadow-lift">
              <Image
                src={heroImg.src}
                alt={heroImg.alt}
                width={1400}
                height={788}
                sizes="(max-width: 1200px) 100vw, 1100px"
                className="h-auto w-full"
              />
            </Reveal>
          )}
          <div className="grid gap-12 lg:grid-cols-[1fr_20rem] lg:gap-16">
            {/* Main content */}
            <div>
              <div className="prose-brand">
                {service.intro.slice(1).map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </div>

              {/* When people need it */}
              <div className="mt-10">
                <h2 className="text-2xl font-semibold text-forest-900">
                  When people call us about {service.navLabel.toLowerCase()}
                </h2>
                <ul className="mt-5 grid gap-3 sm:grid-cols-2">
                  {service.whenYouNeedIt.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-3 rounded-lg border border-forest-900/10 bg-white p-4 shadow-soft"
                    >
                      <Check className="mt-0.5 h-5 w-5 shrink-0 text-emerald-600" aria-hidden />
                      <span className="text-[0.95rem] text-forest-900">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Editorial sections */}
              <div className="mt-12 space-y-8">
                {service.sections.map((sec) => (
                  <Reveal key={sec.heading}>
                    <div className="border-l-2 border-emerald-400/40 pl-5">
                      <h2 className="text-xl font-semibold text-forest-900">{sec.heading}</h2>
                      <p className="mt-2 max-w-prose leading-relaxed text-bone-700">{sec.body}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Areas covered */}
              <div className="mt-12 rounded-2xl border border-forest-900/10 bg-white p-6 shadow-soft sm:p-8">
                <h2 className="flex items-center gap-2 text-xl font-semibold text-forest-900">
                  <MapPin className="h-5 w-5 text-emerald-600" aria-hidden />
                  Areas we cover
                </h2>
                <p className="mt-3 text-bone-700">
                  We carry out {service.navLabel.toLowerCase()} across {siteConfig.serviceArea},
                  including:
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {primaryLocations.map((loc) => (
                    <li key={loc.slug}>
                      <Link
                        href={`/areas/${loc.slug}`}
                        className="inline-flex items-center rounded-lg border border-forest-900/10 bg-bone-50 px-3 py-1.5 text-sm text-forest-800 transition-colors hover:border-emerald-400/40 hover:text-forest-900"
                      >
                        {loc.name}
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

              {/* Related services */}
              <div className="mt-12">
                <h2 className="text-xl font-semibold text-forest-900">Related services</h2>
                <div className="mt-4 grid gap-3 sm:grid-cols-2">
                  {related.map((r) => {
                    const Icon = serviceIcons[r.slug];
                    return (
                      <Link
                        key={r.slug}
                        href={`/services/${r.slug}`}
                        className="group flex items-center gap-3 rounded-xl border border-forest-900/10 bg-white p-4 shadow-soft transition-all duration-300 ease-spring hover:-translate-y-1 hover:border-emerald-400/50 hover:shadow-glow-leaf"
                      >
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-gradient-to-br from-forest-700 to-forest-950 text-bone-50">
                          {Icon ? <Icon className="h-6 w-6" /> : null}
                        </span>
                        <span className="font-medium text-forest-900">{r.navLabel}</span>
                        <ArrowRight className="ml-auto h-4 w-4 text-bone-500 transition-transform group-hover:translate-x-1" aria-hidden />
                      </Link>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Sticky aside */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-card">
                <p className="text-sm font-semibold uppercase tracking-brand text-emerald-600">
                  Free estimates
                </p>
                <p className="mt-2 text-lg font-semibold text-forest-900">
                  Get a clear price, no messing about
                </p>
                <p className="mt-2 text-sm leading-relaxed text-bone-700">
                  Tell us about the job and we&rsquo;ll give you a free, no-obligation
                  estimate. Send a few photos to get started.
                </p>
                <div className="mt-5 flex flex-col gap-3">
                  <Link href="/contact" className={buttonVariants({ variant: "accent", size: "md" })}>
                    Get a free quote
                  </Link>
                  <CallLink
                    phone={siteConfig.phone}
                    phoneHref={siteConfig.phoneHref}
                    location={`service-aside:${service.slug}`}
                    asButton
                    variant="outline"
                    size="md"
                  >
                    <Phone className="h-4 w-4" aria-hidden />
                    {siteConfig.phone}
                  </CallLink>
                </div>
                <hr className="my-5 border-forest-900/10" />
                <ul className="space-y-2.5 text-sm text-bone-700">
                  {siteConfig.credentials.map((c) => (
                    <li key={c} className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                      {c}
                    </li>
                  ))}
                  <li className="flex items-center gap-2">
                    <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                    {siteConfig.emergency.label}
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </Container>
      </Section>

      <CTASection
        title={`Need ${service.navLabel.toLowerCase()} in Hampshire?`}
        location={`service-cta:${service.slug}`}
      />
    </>
  );
}
