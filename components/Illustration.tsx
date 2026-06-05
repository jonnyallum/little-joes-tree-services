import { cn } from "@/lib/utils";

/**
 * Hand-built illustrated imagery (flat, on-brand, performant — no stock photos).
 *  - OakTree: a stylised layered-canopy oak in all-green tones (deep-forest
 *    trunk, emerald/leaf canopy). Used as a hero/section focal image.
 *  - TreeLine: a rolling tree-line silhouette for landscape section dividers.
 */

export function OakTree({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 400 440" fill="none" aria-hidden className={className}>
      {/* ground shadow */}
      <ellipse cx="200" cy="404" rx="120" ry="14" fill="#04190f" opacity="0.22" />

      {/* trunk + roots, deep forest green (green-only palette) */}
      <path
        d="M186 250 C184 300 176 350 168 398 C176 402 196 402 200 396 C204 402 224 402 232 398 C224 350 216 300 214 250 Z"
        fill="#073020"
      />
      <path d="M200 300 L200 250" stroke="#06281a" strokeWidth="3" strokeLinecap="round" />
      {/* branches into canopy */}
      <path d="M200 252 L156 206 M200 244 L248 198 M200 260 L210 226" stroke="#06281a" strokeWidth="7" strokeLinecap="round" />

      {/* canopy, layered greens (deep forest → emerald → leaf) */}
      <circle cx="200" cy="150" r="112" fill="#0a3d2a" />
      <circle cx="132" cy="150" r="66" fill="#184c3a" />
      <circle cx="268" cy="142" r="72" fill="#184c3a" />
      <circle cx="200" cy="104" r="74" fill="#1e5a44" />
      <circle cx="160" cy="120" r="42" fill="#15a06a" />
      <circle cx="244" cy="150" r="40" fill="#15a06a" />
      <circle cx="206" cy="86" r="34" fill="#2bbd7e" />
      <circle cx="176" cy="100" r="22" fill="#6cbf45" />
      <circle cx="236" cy="120" r="20" fill="#6cbf45" />
    </svg>
  );
}

export function TreeLine({ className, flip = false }: { className?: string; flip?: boolean }) {
  return (
    <svg
      viewBox="0 0 1440 130"
      fill="none"
      preserveAspectRatio="none"
      aria-hidden
      className={cn(flip && "rotate-180", className)}
    >
      {/* back ridge */}
      <path
        d="M0 90 C120 70 180 96 280 86 C360 78 420 60 520 72 C620 84 700 64 820 74 C940 84 1020 66 1140 78 C1260 90 1340 72 1440 84 V130 H0 Z"
        fill="currentColor"
        opacity="0.45"
      />
      {/* front ridge with little trees */}
      <path
        d="M0 108 C140 96 220 112 340 104 C460 96 540 86 660 98 C780 110 880 92 1000 102 C1120 112 1240 96 1440 106 V130 H0 Z"
        fill="currentColor"
      />
      <g fill="currentColor">
        <path d="M210 104 l10 -26 10 26 z" />
        <path d="M520 98 l9 -22 9 22 z" />
        <path d="M880 96 l11 -28 11 28 z" />
        <path d="M1180 100 l9 -22 9 22 z" />
      </g>
    </svg>
  );
}
