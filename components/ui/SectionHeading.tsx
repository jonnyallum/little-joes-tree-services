import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

/**
 * Editorial section heading: a small emerald eyebrow, a display-serif title and
 * an optional lead line. Used to give every section a consistent, premium rhythm.
 */
export function SectionHeading({
  eyebrow,
  title,
  lead,
  align = "left",
  onDark = false,
  className,
}: {
  eyebrow?: string;
  title: React.ReactNode;
  lead?: React.ReactNode;
  align?: "left" | "center";
  onDark?: boolean;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {eyebrow && (
        <Reveal>
          <p
            className={cn(
              "mb-3 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-brand",
              onDark ? "text-leaf-300" : "text-emerald-600",
            )}
          >
            <span
              className={cn(
                "h-px w-6",
                onDark ? "bg-leaf-300/60" : "bg-emerald-500/50",
              )}
              aria-hidden
            />
            {eyebrow}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2
          className={cn(
            "text-balance text-3xl font-semibold leading-[1.1] sm:text-4xl lg:text-[2.75rem]",
            onDark ? "text-bone-50" : "text-forest-900",
          )}
        >
          {title}
        </h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.1}>
          <p
            className={cn(
              "mt-4 text-lg leading-relaxed",
              onDark ? "text-bone-200/80" : "text-bone-800",
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  );
}
