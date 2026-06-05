import { tickerReviews, type Review } from "@/lib/reviews";
import { ReviewBadge } from "./ReviewBadge";

/**
 * Continuously-scrolling review strip fixed to the bottom of every page.
 * Real reviews (Facebook / Google / Bark) with a source badge, 5 stars and a
 * trimmed quote. Pure CSS marquee (one track, content rendered twice, slides
 * -50% for a seamless loop). Pauses on hover; honours reduced-motion.
 */
function trim(s: string, n = 110) {
  return s.length > n ? s.slice(0, n - 1).trimEnd() + "…" : s;
}

function Pill({ review }: { review: Review }) {
  return (
    <span className="mx-1.5 inline-flex items-center gap-2.5 whitespace-nowrap rounded-full bg-white px-3.5 py-1.5 text-[0.8rem] shadow-soft">
      <ReviewBadge source={review.source} />
      <span className="text-[0.7rem] tracking-tight text-leaf-500" aria-label="5 out of 5 stars">
        ★★★★★
      </span>
      <span className="text-forest-900">
        <span className="font-semibold">{review.author}</span>
        <span className="text-bone-700">: {trim(review.quote)}</span>
      </span>
    </span>
  );
}

export function ReviewTicker() {
  const items = tickerReviews;
  // Slower for more items so it stays readable; clamped to a sane range.
  const duration = Math.min(600, Math.max(120, items.length * 5));

  return (
    <aside
      aria-label="What our customers say"
      className="fixed inset-x-0 bottom-0 z-40 border-t border-white/10 surface-forest print:hidden"
    >
      <div className="group flex w-full overflow-hidden py-2 mask-fade-x">
        <div
          className="flex shrink-0 items-center group-hover:[animation-play-state:paused]"
          style={{ animation: `marquee ${duration}s linear infinite` }}
        >
          {items.map((r, i) => (
            <Pill key={`a-${i}`} review={r} />
          ))}
          {items.map((r, i) => (
            <Pill key={`b-${i}`} review={r} />
          ))}
        </div>
      </div>
    </aside>
  );
}
