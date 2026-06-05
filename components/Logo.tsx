import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/site-config";

// Real dimensions of the generated transparent logo (set by scripts/process-logo.mjs).
// Used for aspect ratio / CLS prevention; display size is controlled via className.
const LOGO_W = 1000;
const LOGO_H = 976;

/**
 * Full crest logo for LIGHT surfaces (it includes the wordmark already).
 * Wrapped in a link to home unless `asLink={false}`.
 */
export function Logo({
  className,
  priority = false,
  asLink = true,
}: {
  className?: string;
  priority?: boolean;
  asLink?: boolean;
}) {
  const img = (
    <Image
      src="/brand/little-joes-logo.png"
      alt={`${siteConfig.businessName} logo`}
      width={LOGO_W}
      height={LOGO_H}
      priority={priority}
      className={cn("h-12 w-auto sm:h-14", className)}
    />
  );

  if (!asLink) return img;
  return (
    <Link href="/" aria-label={`${siteConfig.businessName}, home`} className="inline-flex">
      {img}
    </Link>
  );
}

/**
 * Type-only wordmark for DARK surfaces (footer), where the colour logo's deep
 * green elements would disappear. Reads as a deliberate, premium lockup.
 */
export function Wordmark({ className }: { className?: string }) {
  return (
    <Link href="/" aria-label={`${siteConfig.businessName}, home`} className={cn("group inline-block", className)}>
      <span className="block font-display text-2xl font-semibold leading-none text-bone-50">
        Little Joe&rsquo;s
      </span>
      <span className="mt-1 block text-[0.7rem] font-semibold uppercase tracking-brand text-leaf-300">
        Tree Services
      </span>
    </Link>
  );
}
