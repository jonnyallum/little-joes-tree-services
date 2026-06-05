import Link from "next/link";
import { ArrowRight, Phone, Star, Check } from "lucide-react";
import { CallLink } from "./tracked";
import { buttonVariants } from "./ui/Button";
import { AnimatedCounter } from "./AnimatedCounter";
import { LeafIcon } from "./icons/ServiceIcons";
import { siteConfig } from "@/site-config";

/**
 * Hero — the photorealistic Hampshire woodland (site-wide backdrop) shows
 * through a light green scrim, with a bold white headline (green-accented words)
 * and a floating WHITE trust card carrying the aggregate, credentials and a
 * prominent green "call us" bar. Mobile-first; all motion is CSS.
 */
export function HeroSection() {
  const usps = [
    "NPTC & City & Guilds qualified",
    "Fully insured",
    "Free, no-obligation estimates",
    "24/7 emergency call-outs",
  ];

  return (
    <section className="surface-mesh relative overflow-hidden">
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-6 sm:py-20 lg:grid-cols-12 lg:gap-10 lg:px-8 lg:py-28">
        {/* Copy */}
        <div className="lg:col-span-7 lg:pr-6">
          <p className="animate-fade-up inline-flex items-center gap-2 rounded-full bg-forest-950/85 px-4 py-1.5 text-xs font-semibold uppercase tracking-brand text-[#e9b94e] shadow-soft ring-1 ring-[#e9b94e]/40 backdrop-blur-sm">
            <LeafIcon className="h-4 w-4 text-[#e9b94e]" />
            Hampshire&rsquo;s local tree team
          </p>

          <h1
            className="animate-fade-up text-shadow-forest mt-6 text-balance font-display text-5xl font-semibold leading-[1.02] text-white sm:text-6xl lg:text-7xl"
            style={{ animationDelay: "60ms" }}
          >
            <span className="text-gradient">Tree surgery</span> &amp; garden{" "}
            <span className="text-gradient">clearance</span> across Hampshire
          </h1>

          <p
            className="animate-fade-up text-shadow-forest mt-7 max-w-xl text-lg leading-relaxed text-bone-100"
            style={{ animationDelay: "130ms" }}
          >
            We do proper tree work for homeowners, landlords and businesses across
            Hampshire. Whether you need a tree reduced, a stump ground out, hedges cut
            back or a site cleared, we turn up, get it sorted safely and leave the place
            tidy.
          </p>

          <div
            className="animate-fade-up mt-9 flex flex-col gap-3 sm:flex-row sm:items-center"
            style={{ animationDelay: "200ms" }}
          >
            <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
              Get a free quote
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
            </Link>
            <CallLink
              phone={siteConfig.phone}
              phoneHref={siteConfig.phoneHref}
              location="hero"
              asButton
              variant="onDark"
              size="lg"
            >
              <Phone className="h-4 w-4" aria-hidden />
              {siteConfig.phone}
            </CallLink>
          </div>

          {/* Inline mini trust row */}
          <div
            className="animate-fade-up text-shadow-forest mt-9 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-bone-100"
            style={{ animationDelay: "260ms" }}
          >
            <span className="flex items-center gap-1.5">
              <span className="flex" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-4 w-4 fill-leaf-400 text-leaf-400" />
                ))}
              </span>
              <span className="font-semibold text-white">
                <AnimatedCounter to={siteConfig.reviews.fiveStarPercent} suffix="%" /> rated us 5&#9733;
              </span>
            </span>
            <span className="hidden h-4 w-px bg-white/25 sm:block" />
            <span>NPTC &amp; City &amp; Guilds qualified · Fully insured</span>
          </div>
        </div>

        {/* White trust card */}
        <div className="lg:col-span-5">
          <div
            className="surface-card animate-fade-up relative overflow-hidden rounded-3xl p-6 shadow-lift sm:p-8"
            style={{ animationDelay: "320ms" }}
          >
            <div className="flex items-center gap-3">
              <span className="flex" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-5 w-5 fill-leaf-500 text-leaf-500" />
                ))}
              </span>
              <span className="text-sm font-medium text-bone-600">{siteConfig.reviews.source} reviews</span>
            </div>

            <p className="mt-5 font-display text-6xl font-semibold leading-none text-forest-900">
              <AnimatedCounter to={siteConfig.reviews.fiveStarPercent} suffix="%" />
            </p>
            <p className="mt-2 text-bone-700">
              of customers rated us 5 stars, across{" "}
              <AnimatedCounter to={siteConfig.reviews.count} className="font-semibold text-forest-900" /> reviews.
            </p>

            <div className="my-6 h-px bg-forest-900/10" />

            <ul className="space-y-3.5">
              {usps.map((label) => (
                <li key={label} className="flex items-center gap-3 text-[0.95rem] font-medium text-forest-800">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-500/12">
                    <Check className="h-4 w-4 text-emerald-600" aria-hidden />
                  </span>
                  {label}
                </li>
              ))}
            </ul>

            {/* Prominent green call bar */}
            <CallLink
              phone={siteConfig.phone}
              phoneHref={siteConfig.phoneHref}
              location="hero_card"
              className="mt-7 flex w-full items-center justify-center gap-2.5 rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-500 px-5 py-4 text-base font-semibold text-white shadow-glow-emerald transition-transform duration-300 ease-spring hover:-translate-y-0.5"
            >
              <Phone className="h-5 w-5" aria-hidden />
              Call us: {siteConfig.phone}
            </CallLink>
          </div>
        </div>
      </div>
    </section>
  );
}
