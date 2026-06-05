import type { ReviewSource } from "@/lib/reviews";
import { cn } from "@/lib/utils";

/**
 * Small source badge for a review: Google "G", Bark wordmark (real logos), or a
 * Facebook blue "f". Plain <img> (tiny, cached) keeps the ticker lightweight.
 */
export function ReviewBadge({ source, className }: { source: ReviewSource; className?: string }) {
  if (source === "Facebook") {
    return (
      <span
        aria-label="Facebook review"
        className={cn(
          "flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#1877F2] text-[12px] font-bold leading-none text-white",
          className,
        )}
      >
        f
      </span>
    );
  }
  const src = source === "Google" ? "/badges/google.png" : "/badges/bark.png";
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt={`${source} review`}
      className={cn("h-5 w-auto shrink-0 rounded-[3px]", className)}
      decoding="async"
    />
  );
}
