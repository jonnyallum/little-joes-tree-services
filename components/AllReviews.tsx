import { reviews, reviewCount } from "@/lib/reviews";
import { Container } from "./ui/Container";
import { TestimonialCard } from "./TestimonialCard";

/**
 * Every review, full text, in a masonry layout. Used on the /reviews page.
 * Rendered statically (no per-card scroll observers) since there are many.
 */
export function AllReviews() {
  return (
    <section className="bg-cream-50 py-20 sm:py-24">
      <Container size="wide">
        <div className="max-w-2xl">
          <p className="mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand text-emerald-600">
            <span className="h-px w-6 bg-emerald-500/50" aria-hidden />
            Every review
          </p>
          <h2 className="font-display text-4xl font-semibold leading-[1.05] text-forest-900 sm:text-5xl">
            All {reviewCount} reviews
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-bone-700">
            Genuine, verified reviews from Facebook, Google and Bark. Nothing invented,
            nothing cherry-picked, this is the lot.
          </p>
        </div>

        <div className="mt-12 gap-5 sm:columns-2 lg:columns-3">
          {reviews.map((review, i) => (
            <div key={`${review.author}-${i}`} className="mb-5 break-inside-avoid">
              <TestimonialCard review={review} />
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
