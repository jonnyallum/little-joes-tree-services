import { Quote, Star } from "lucide-react";
import type { Review } from "@/lib/reviews";
import { ReviewBadge } from "./ReviewBadge";

/** Renders a single GENUINE review, with its source badge and star rating. */
export function TestimonialCard({ review }: { review: Review }) {
  const rating = review.rating ?? 5;
  return (
    <figure className="flex h-full flex-col rounded-2xl border border-forest-900/10 bg-white p-6 shadow-card">
      <div className="flex items-center justify-between">
        <Quote className="h-7 w-7 text-emerald-400" aria-hidden />
        <div className="flex items-center gap-2">
          <div className="flex" aria-label={`${rating} out of 5 stars`}>
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                className={i < rating ? "h-4 w-4 fill-leaf-500 text-leaf-500" : "h-4 w-4 text-bone-300"}
                aria-hidden
              />
            ))}
          </div>
          <ReviewBadge source={review.source} className="h-6" />
        </div>
      </div>

      <blockquote className="mt-4 flex-1 text-[1.0625rem] leading-relaxed text-forest-900">
        &ldquo;{review.quote}&rdquo;
      </blockquote>

      <figcaption className="mt-5 border-t border-forest-900/5 pt-4 text-sm">
        <span className="font-semibold text-forest-900">{review.author}</span>
        {review.location && <span className="text-bone-600"> · {review.location}</span>}
        <span className="text-bone-600"> · via {review.source}</span>
      </figcaption>
    </figure>
  );
}
