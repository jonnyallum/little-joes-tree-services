import { Star, Facebook, ArrowUpRight } from "lucide-react";
import { Container } from "./ui/Container";
import { TestimonialCard } from "./TestimonialCard";
import { TrackedExternal } from "./tracked";
import { Reveal } from "./ui/Reveal";
import { AnimatedCounter } from "./AnimatedCounter";
import { featuredReviews, hasReviews } from "@/lib/reviews";
import { siteConfig } from "@/site-config";

/**
 * Reviews & trust, bold aggregate centrepiece (animated 5-star %) + review CTAs.
 * Individual testimonials render only when genuine ones exist in lib/reviews.ts.
 */
export function ReviewsSection({ showGrid = true }: { showGrid?: boolean } = {}) {
  const { fiveStarPercent, count, source } = siteConfig.reviews;

  return (
    <section id="reviews" className="py-20 sm:py-24 lg:py-28">
      <Container size="wide">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <p className="mb-3 inline-flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-brand text-leaf-300">
              <span className="h-px w-6 bg-leaf-300/60" aria-hidden />
              Reviews &amp; trust
            </p>
          </Reveal>
          <Reveal delay={0.05}>
            <h2 className="text-shadow-forest font-display text-4xl font-semibold leading-tight text-white sm:text-5xl">
              Trusted by <span className="text-gradient">local customers</span>
            </h2>
          </Reveal>
        </div>

        {/* Aggregate centrepiece */}
        <Reveal scale>
          <div className="border-gradient relative mx-auto mt-12 max-w-4xl overflow-hidden rounded-[2rem] bg-cream-100 p-10 text-center shadow-card sm:p-14">
            <div className="relative">
              <div className="flex items-center justify-center gap-1.5" aria-hidden>
                {[0, 1, 2, 3, 4].map((i) => (
                  <Star key={i} className="h-7 w-7 fill-leaf-500 text-leaf-500" />
                ))}
              </div>
              <p className="mt-6 font-display text-7xl font-semibold leading-none sm:text-8xl">
                <span className="text-gradient-static">
                  <AnimatedCounter to={fiveStarPercent} suffix="%" />
                </span>
              </p>
              <p className="mt-3 text-xl font-medium text-forest-900">rated us 5 stars</p>
              <p className="mx-auto mt-4 max-w-xl text-bone-700">
                Across <AnimatedCounter to={count} className="font-semibold text-forest-900" /> reviews
                on {source}. Customers want to know the person doing the work is qualified,
                insured, sensible on site and respectful of their property, that&rsquo;s
                exactly what we aim to give you.
              </p>

              <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                <TrackedExternal
                  href={siteConfig.googleReviewUrl}
                  event="google_review_click"
                  asButton
                  variant="accent"
                  size="lg"
                  ariaLabel="Leave us a Google review"
                >
                  <Star className="h-4 w-4" aria-hidden />
                  Leave us a Google review
                </TrackedExternal>
                <TrackedExternal
                  href={siteConfig.facebookUrl}
                  event="facebook_click"
                  asButton
                  variant="facebook"
                  size="lg"
                  ariaLabel="See our reviews on Facebook"
                >
                  <Facebook className="h-4 w-4" aria-hidden />
                  See us on Facebook
                  <ArrowUpRight className="h-4 w-4" aria-hidden />
                </TrackedExternal>
              </div>
            </div>
          </div>
        </Reveal>

        {showGrid && hasReviews && (
          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
            {featuredReviews.map((review, i) => (
              <Reveal key={`${review.author}-${i}`} delay={(i % 3) * 0.06}>
                <TestimonialCard review={review} />
              </Reveal>
            ))}
          </div>
        )}
      </Container>
    </section>
  );
}
