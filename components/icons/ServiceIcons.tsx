/**
 * Custom tree-surgery iconography, hand-drawn, on-brand, two-tone.
 *
 * Main strokes use `currentColor` (so they inherit forest on light surfaces and
 * bone on dark). Accent strokes/fills use emerald (#15a06a) for a branded,
 * premium green look that reads well on both. These replace the generic set.
 *
 * 32×32 viewBox, 1.6 stroke, round caps/joins.
 */
import type { ComponentType } from "react";

export type IconProps = { className?: string };
const ACCENT = "#15a06a";

function Svg({ className, children }: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.6}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {children}
    </svg>
  );
}

/** Tree surgery, shaped canopy + trunk + a bronze climbing rope & arborist (echoes the logo). */
export function TreeSurgeryIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 3c-5 0-9 3.5-9 8 0 4 3.5 6.5 9 6.5s9-2.5 9-6.5c0-4.5-4-8-9-8Z" />
      <path d="M16 17.5V27M11.5 27h9" />
      <path d="M16 22l-3.5-2.8M16 24l3.5-2.6" />
      <path d="M20.5 8.5c1.6 3 1.4 7-1 9.4" stroke={ACCENT} />
      <circle cx="19" cy="19.5" r="1.7" stroke={ACCENT} />
    </Svg>
  );
}

/** Tree removal, chainsaw. */
export function ChainsawIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M5 15.5h6.5a2 2 0 0 1 2 2v3.5a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2v-3.5a1.5 1.5 0 0 1 1-1.5Z" />
      <path d="M6.5 15.5v-1.5a3 3 0 0 1 6 0v1.5" />
      <path d="M13.5 17.8h12.5a1.8 1.8 0 0 1 0 3.6H13.5Z" stroke={ACCENT} />
      <path d="M16 17.8v-.8M19 17.8v-.8M22 17.8v-.8M25 17.8v-.8" stroke={ACCENT} />
    </Svg>
  );
}

/** Stump grinding, cut stump with growth rings. */
export function StumpIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <ellipse cx="16" cy="13" rx="8" ry="3" />
      <path d="M8 13v9c0 1.7 3.6 3 8 3s8-1.3 8-3v-9" />
      <ellipse cx="16" cy="13" rx="4.4" ry="1.5" stroke={ACCENT} />
      <ellipse cx="16" cy="13" rx="1.6" ry="0.6" stroke={ACCENT} />
      <path d="M5 26l3-2M27 26l-3-2" stroke={ACCENT} />
    </Svg>
  );
}

/** Hedge cutting, hedge + open shears. */
export function HedgeShearsIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 27v-8c0-3 2.2-5 5-5h10c2.8 0 5 2 5 5v8Z" />
      <path d="M12 17v3M16 16v4M20 17v3" />
      <path d="M11 4l5 7M21 4l-5 7" stroke={ACCENT} />
      <circle cx="10" cy="3.4" r="1.5" stroke={ACCENT} />
      <circle cx="22" cy="3.4" r="1.5" stroke={ACCENT} />
    </Svg>
  );
}

/** Site clearance, stacked, cleared timber. */
export function TimberIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <rect x="5" y="20" width="22" height="5" rx="2.5" />
      <rect x="8" y="15" width="16" height="5" rx="2.5" />
      <rect x="11" y="10" width="10" height="5" rx="2.5" />
      <circle cx="8" cy="22.5" r="1.3" stroke={ACCENT} />
      <circle cx="11" cy="17.5" r="1.1" stroke={ACCENT} />
      <path d="M4 28h24" />
    </Svg>
  );
}

/** Garden clearance, rake + falling leaves. */
export function RakeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M16 4v12" />
      <path d="M9 16h14" />
      <path d="M10 16v5M14 16v5M18 16v5M22 16v5" />
      <path d="M7 24c.4-2 2.6-2.6 3.4-.6.6 1.8-1.6 2.8-3.4.6Z" stroke={ACCENT} fill="none" />
      <path d="M25 26c-.4-2-2.6-2.6-3.4-.6-.6 1.8 1.6 2.8 3.4.6Z" stroke={ACCENT} fill="none" />
    </Svg>
  );
}

/** Fencing, pickets + rails. */
export function FenceIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M8 26V12l2-2.5L12 12v14M20 26V12l2-2.5L24 12v14" />
      <path d="M5 15.5h22M5 21h22" stroke={ACCENT} />
    </Svg>
  );
}

/** Emergency, storm-struck tree + lightning. */
export function StormTreeIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M13 5c-4 0-7 2.8-7 6.5 0 3.3 2.8 5.5 7 5.5s7-2.2 7-5.5C20 7.8 17 5 13 5Z" />
      <path d="M13 17v3l-2 2 2.5 2-2 3" />
      <path d="M25 5l-4 7h3l-4 7" stroke={ACCENT} />
    </Svg>
  );
}

/** Decorative leaf, for floating accents / dividers. */
export function LeafIcon(props: IconProps) {
  return (
    <Svg {...props}>
      <path d="M6 26C5 16 12 6 26 6c0 14-10 21-20 20Z" />
      <path d="M10 22C14 16 19 12 24 10" stroke={ACCENT} />
    </Svg>
  );
}

/** Map a service slug to its icon (keeps lib/services.ts free of JSX imports). */
export const serviceIcons: Record<string, ComponentType<IconProps>> = {
  "tree-surgery": TreeSurgeryIcon,
  "tree-removal": ChainsawIcon,
  "stump-grinding": StumpIcon,
  "hedge-cutting": HedgeShearsIcon,
  "site-clearance": TimberIcon,
  "garden-clearance": RakeIcon,
  fencing: FenceIcon,
  "emergency-tree-work": StormTreeIcon,
};
