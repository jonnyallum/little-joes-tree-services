import Link from "next/link";
import { ArrowRight, Camera } from "lucide-react";
import { Container } from "./ui/Container";
import { ServiceCard } from "./ServiceCard";
import { Reveal } from "./ui/Reveal";
import { buttonVariants } from "./ui/Button";
import { services } from "@/lib/services";

/** Homepage services overview, approved copy, bold cards, dark prompt panel. */
export function ServicesSection() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container size="wide" className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-leaf-300">
              <span className="h-px w-6 bg-leaf-300/60" aria-hidden />
              What we do
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-shadow-forest text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              Our tree &amp; <span className="text-gradient">outdoor services</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-shadow-forest mt-4 text-lg leading-relaxed text-bone-100">
              From single-tree work in a back garden to larger clearance jobs, tree
              surgery, stump removal, hedge cutting, garden or site clearance, fencing,
              and emergency tree work.
            </p>
          </Reveal>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.slug} delay={(i % 4) * 0.07}>
              <ServiceCard service={service} className="h-full" />
            </Reveal>
          ))}
        </div>

        {/* Bold prompt panel (emerald gradient, not a flat box) */}
        <Reveal>
          <div className="grain relative mt-8 overflow-hidden rounded-3xl bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 p-8 shadow-lift sm:p-10">
            <div className="relative flex flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="max-w-2xl">
                <h3 className="font-display text-2xl font-semibold text-white sm:text-3xl">
                  Not sure what the job needs?
                </h3>
                <p className="mt-2 text-cream-50/90">
                  That&rsquo;s fine. Send over a few photos or ask us to come and have a
                  look, and we&rsquo;ll talk you through the best option without
                  overcomplicating it.
                </p>
              </div>
              <Link
                href="/contact"
                className={buttonVariants({ variant: "primary", size: "lg", className: "shrink-0" })}
              >
                <Camera className="h-4 w-4" aria-hidden />
                Send photos for a quote
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
