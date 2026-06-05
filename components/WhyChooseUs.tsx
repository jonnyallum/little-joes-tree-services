import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Container } from "./ui/Container";
import { Reveal } from "./ui/Reveal";
import { buttonVariants } from "./ui/Button";
import { cn } from "@/lib/utils";

/**
 * "Why choose us", approved copy + the four things customers actually want,
 * as an editorial numbered bento (alternating dark/light tiles), not a row of
 * generic icon circles.
 */
const points = [
  { n: "01", title: "We answer the phone", body: "A real person who listens and gives honest advice, not an answerphone and a long wait." },
  { n: "02", title: "We turn up when we say", body: "We show up when we say we will and keep you in the loop, so you're not left guessing." },
  { n: "03", title: "We work safely", body: "NPTC & City & Guilds qualified, fully insured, and sensible on site around your property." },
  { n: "04", title: "We leave it tidy", body: "We clear up properly and leave the job clean, the way we'd want it left at our own place." },
];

export function WhyChooseUs() {
  return (
    <section className="relative overflow-hidden py-20 sm:py-24 lg:py-28">
      <Container size="wide" className="relative">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Heading column */}
          <div className="lg:col-span-5 lg:sticky lg:top-28 lg:self-start">
            <Reveal>
              <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-leaf-300">
                <span className="h-px w-6 bg-leaf-300/60" aria-hidden />
                Why choose us
              </p>
            </Reveal>
            <Reveal delay={0.05}>
              <h2 className="text-shadow-forest text-balance font-display text-4xl font-semibold leading-[1.05] text-white sm:text-5xl">
                A local Hampshire tree team you can{" "}
                <span className="text-gradient">rely on</span>
              </h2>
            </Reveal>
            <div className="prose-brand mt-6 text-bone-100 text-shadow-forest [&_p]:text-bone-100">
              <Reveal delay={0.1}>
                <p>
                  We are not trying to dress it up as something it isn&rsquo;t. We are a
                  local tree team doing solid work for local people, and most customers
                  want the same things: someone who answers the phone, turns up when they
                  say they will, works safely, and leaves the job clean and tidy.
                </p>
              </Reveal>
              <Reveal delay={0.15}>
                <p>
                  We offer free estimates, we are fully insured, and we cover tree and
                  garden work across Hampshire, including Portsmouth, Havant, Fareham,
                  Southampton, Winchester, Emsworth, Waterlooville and Petersfield.
                </p>
              </Reveal>
            </div>
            <Reveal delay={0.2}>
              <Link
                href="/about"
                className={buttonVariants({ variant: "outline", size: "md", className: "mt-7" })}
              >
                More about us
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
              </Link>
            </Reveal>
          </div>

          {/* Bento */}
          <div className="grid gap-4 sm:grid-cols-2 lg:col-span-7">
            {points.map((p, i) => {
              const tone = i === 0 ? "emerald" : i === 3 ? "forest" : "light";
              const onColour = tone !== "light";
              return (
                <Reveal key={p.n} delay={(i % 2) * 0.08} scale className={cn(i === 0 && "sm:mt-8", i === 3 && "sm:-mt-8")}>
                  <div
                    className={cn(
                      "group h-full overflow-hidden rounded-3xl p-7 shadow-card transition-all duration-500 ease-spring hover:-translate-y-1.5",
                      tone === "emerald" && "bg-gradient-to-br from-emerald-400 via-emerald-500 to-emerald-700 text-white hover:shadow-glow-emerald",
                      tone === "forest" && "surface-mesh grain text-bone-50 hover:shadow-glow-leaf",
                      tone === "light" && "border border-forest-900/10 bg-white text-forest-900 hover:shadow-glow-leaf",
                    )}
                  >
                    <span
                      className={cn(
                        "font-display text-5xl font-semibold",
                        tone === "emerald" && "text-white/85",
                        tone === "forest" && "text-gradient",
                        tone === "light" && "text-gradient-static",
                      )}
                    >
                      {p.n}
                    </span>
                    <h3 className={cn("mt-4 font-display text-xl font-semibold", onColour ? "text-white" : "text-forest-900")}>
                      {p.title}
                    </h3>
                    <p className={cn("mt-2 text-[0.95rem] leading-relaxed", onColour ? "text-cream-50/90" : "text-bone-700")}>
                      {p.body}
                    </p>
                  </div>
                </Reveal>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
