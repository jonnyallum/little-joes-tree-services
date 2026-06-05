import { LeafIcon } from "./icons/ServiceIcons";
import { cn } from "@/lib/utils";

/**
 * Decorative background layers for depth, all procedural, GPU-cheap (CSS
 * gradients, not blur filters or live SVG turbulence, which jank low-end mobiles
 * and stall rasterisation). No stock imagery; minimal client JS.
 */

/** Wood-grain depth, fine vertical streaks via a repeating gradient (cheap). */
export function WoodGrain({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        backgroundImage:
          "repeating-linear-gradient(90deg, rgba(0,0,0,0.22) 0px, rgba(0,0,0,0) 2px, rgba(255,255,255,0.05) 3px, rgba(0,0,0,0) 6px), repeating-linear-gradient(90deg, rgba(0,0,0,0.10) 0px, rgba(0,0,0,0) 11px)",
      }}
    />
  );
}

/** Soft colour glows, static radial gradients (no blur filter). */
export function MeshBlobs({ className }: { className?: string }) {
  return (
    <div
      aria-hidden
      className={cn("pointer-events-none absolute inset-0", className)}
      style={{
        background:
          "radial-gradient(38% 48% at 10% 16%, rgba(108,191,69,0.24), transparent 62%), radial-gradient(34% 42% at 90% 6%, rgba(43,189,126,0.22), transparent 58%), radial-gradient(48% 54% at 52% 110%, rgba(30,90,68,0.40), transparent 62%)",
      }}
    />
  );
}

/** Faint floating leaves, gentle motion (lightweight transforms). */
export function FloatingLeaves({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("pointer-events-none absolute inset-0 hidden overflow-hidden sm:block", className)}>
      <LeafIcon className="absolute left-[6%] top-[18%] h-10 w-10 text-leaf-400/30 animate-float-slow [transform:rotate(-18deg)]" />
      <LeafIcon className="absolute right-[10%] top-[30%] h-8 w-8 text-leaf-300/30 animate-float-x" />
      <LeafIcon className="absolute left-[16%] bottom-[14%] h-7 w-7 text-leaf-300/25 animate-float [transform:rotate(28deg)]" />
      <LeafIcon className="absolute right-[18%] bottom-[22%] h-12 w-12 text-emerald-400/20 animate-float-slow [transform:rotate(12deg)]" />
    </div>
  );
}

/** Concentric "log end" rings, subtle organic geometry for corners. */
export function LogRings({ className }: { className?: string }) {
  return (
    <svg aria-hidden viewBox="0 0 400 400" fill="none" className={cn("pointer-events-none absolute", className)}>
      <g stroke="currentColor" strokeWidth="1.1">
        <circle cx="200" cy="200" r="170" />
        <circle cx="200" cy="200" r="132" />
        <circle cx="200" cy="200" r="96" />
        <circle cx="200" cy="200" r="62" />
        <circle cx="200" cy="200" r="32" />
        <path d="M200 30 V370 M30 200 H370 M82 82 L318 318 M318 82 L82 318" opacity="0.5" />
      </g>
    </svg>
  );
}
