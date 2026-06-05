"use client";

import { buttonVariants } from "./ui/Button";
import { trackEvent, type GaEvent } from "@/lib/analytics";
import { cn } from "@/lib/utils";

/**
 * Client-side tracked links for conversion events. These fire GA4 events
 * (no-op when GA4 isn't configured) and otherwise behave like normal links.
 */

type Variant = "primary" | "accent" | "outline" | "ghost" | "onDark" | "facebook";

type CallLinkProps = {
  phone: string;
  phoneHref: string;
  /** Render as a styled button (true) or inline link (false) */
  asButton?: boolean;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  location?: string;
  children?: React.ReactNode;
};

export function CallLink({
  phone,
  phoneHref,
  asButton = false,
  variant = "primary",
  size = "md",
  className,
  location = "unknown",
  children,
}: CallLinkProps) {
  return (
    <a
      href={phoneHref}
      onClick={() => trackEvent("click_to_call", { location })}
      className={asButton ? buttonVariants({ variant, size, className }) : className}
    >
      {children ?? phone}
    </a>
  );
}

type TrackedExternalProps = {
  href: string;
  event: GaEvent;
  asButton?: boolean;
  variant?: Variant;
  size?: "sm" | "md" | "lg";
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
};

/** External link that fires a GA4 event and opens in a new tab safely. */
export function TrackedExternal({
  href,
  event,
  asButton = false,
  variant = "outline",
  size = "md",
  className,
  ariaLabel,
  children,
}: TrackedExternalProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={ariaLabel}
      onClick={() => trackEvent(event)}
      className={cn(asButton ? buttonVariants({ variant, size }) : "", className)}
    >
      {children}
    </a>
  );
}
