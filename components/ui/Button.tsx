import Link from "next/link";
import { cn } from "@/lib/utils";

/**
 * Button styling system, bold edition. Gradient fills, coloured glow, a
 * gradient that shifts on hover, and a spring lift. Returns a className so it
 * can apply to a Next <Link>, an <a> (tel:/external) or a <button>.
 */

type Variant = "primary" | "accent" | "outline" | "ghost" | "onDark" | "facebook";
type Size = "sm" | "md" | "lg";

const base =
  "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight tap-safe focus-visible:outline-none disabled:opacity-60 disabled:pointer-events-none transition-[transform,box-shadow,background-position,filter] duration-500 ease-spring bg-[length:200%_auto] bg-[position:0%_50%] hover:bg-[position:100%_50%]";

const variants: Record<Variant, string> = {
  // Vivid emerald gradient, the primary "get a quote" action — white text.
  accent:
    "bg-gradient-to-r from-emerald-600 via-emerald-500 to-emerald-400 text-white shadow-glow-emerald hover:-translate-y-0.5 hover:shadow-lift hover:brightness-105",
  // Deep forest gradient with a leaf glint.
  primary:
    "bg-gradient-to-r from-forest-800 via-forest-700 to-forest-600 text-bone-50 shadow-soft hover:-translate-y-0.5 hover:shadow-glow-leaf",
  // Outlined — solid white so it reads cleanly over the woodland backdrop.
  outline:
    "border border-forest-800/15 bg-white text-forest-800 hover:-translate-y-0.5 hover:border-emerald-400/60 hover:shadow-card",
  ghost: "text-forest-800 hover:bg-forest-800/5",
  // Glass on dark surfaces.
  onDark:
    "glass text-bone-50 hover:-translate-y-0.5 hover:shadow-glow-leaf hover:border-white/30",
  // Facebook brand blue, instantly recognisable.
  facebook:
    "bg-[#1877F2] text-white shadow-soft hover:-translate-y-0.5 hover:shadow-lift hover:brightness-110",
};

const sizes: Record<Size, string> = {
  sm: "h-9 px-4 text-sm",
  md: "h-11 px-5 text-[0.95rem]",
  lg: "h-[3.4rem] px-8 text-base",
};

export function buttonVariants({
  variant = "accent",
  size = "md",
  className,
}: {
  variant?: Variant;
  size?: Size;
  className?: string;
} = {}): string {
  return cn(base, variants[variant], sizes[size], className);
}

type ButtonLinkProps = {
  href: string;
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
} & Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "href">;

export function ButtonLink({ href, variant, size, className, children, ...props }: ButtonLinkProps) {
  const classes = buttonVariants({ variant, size, className });
  if (href.startsWith("/")) {
    return (
      <Link href={href} className={classes} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <a href={href} className={classes} {...props}>
      {children}
    </a>
  );
}
