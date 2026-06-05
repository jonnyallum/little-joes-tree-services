import { cn } from "@/lib/utils";

/**
 * Seamless CSS marquee (no JS). Renders the track twice and slides -50%, so it
 * loops without a seam. Pauses on hover. Honours reduced-motion (globals.css).
 */
export function Marquee({
  children,
  reverse = false,
  speed = "default",
  className,
}: {
  children: React.ReactNode;
  reverse?: boolean;
  speed?: "default" | "slow";
  className?: string;
}) {
  const track = cn(
    "flex shrink-0 items-center gap-4 pr-4",
    speed === "slow" ? "animate-marquee-slow" : "animate-marquee",
    reverse && "[animation-direction:reverse]",
  );
  return (
    <div className={cn("group flex w-full overflow-hidden mask-fade-x", className)}>
      <div className={cn(track, "group-hover:[animation-play-state:paused]")}>{children}</div>
      <div className={cn(track, "group-hover:[animation-play-state:paused]")} aria-hidden>
        {children}
      </div>
    </div>
  );
}
