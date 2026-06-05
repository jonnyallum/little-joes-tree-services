import Link from "next/link";
import { MapPin } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { locations } from "@/lib/locations";
import { siteConfig } from "@/site-config";
import { cn } from "@/lib/utils";

/** Homepage "areas we cover", links to every (uniquely-written) location page. */
export function AreasSection() {
  return (
    <section id="areas" className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container size="wide" className="relative">
        <div className="max-w-2xl">
          <Reveal>
            <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-leaf-300">
              <span className="h-px w-6 bg-leaf-300/60" aria-hidden />
              Where we work
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-shadow-forest text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
              Tree services across{" "}
              <span className="text-gradient">Hampshire</span> &amp; nearby
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="text-shadow-forest mt-4 text-lg leading-relaxed text-bone-100">
              We carry out tree surgery and outdoor work right across the county. Tap your
              town for local detail, or just give us a call.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <ul className="mt-10 flex flex-wrap gap-2.5">
            {locations.map((loc) => (
              <li key={loc.slug}>
                <Link
                  href={`/areas/${loc.slug}`}
                  className={cn(
                    "group inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-300 ease-spring hover:-translate-y-0.5",
                    loc.primary
                      ? "border-white/20 bg-white text-forest-900 shadow-soft hover:shadow-glow-emerald"
                      : "border-white/20 bg-white/10 text-bone-100 backdrop-blur-sm hover:bg-white/20 hover:text-white hover:shadow-glow-leaf",
                  )}
                >
                  <MapPin className={cn("h-3.5 w-3.5 transition-transform duration-300 group-hover:-translate-y-0.5", loc.primary ? "text-emerald-600" : "text-leaf-300")} aria-hidden />
                  {loc.name}
                </Link>
              </li>
            ))}
          </ul>
        </Reveal>

        <p className="text-shadow-forest mt-8 max-w-2xl text-bone-100">
          Just outside these areas? Still get in touch, call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-white underline decoration-leaf-400/70 underline-offset-4 hover:text-leaf-300">
            {siteConfig.phone}
          </a>{" "}
          and we&rsquo;ll quickly let you know whether we can help.
        </p>
      </Container>
    </section>
  );
}
