import { cn } from "@/lib/utils";

type Tone = "bone" | "white" | "stone" | "forest" | "transparent";

const tones: Record<Tone, string> = {
  bone: "bg-bone-50",
  white: "bg-white",
  stone: "bg-bone-100",
  forest: "surface-forest text-bone-100",
  // Lets the site-wide woodland backdrop show through (content floats on top).
  transparent: "",
};

/** Vertical rhythm wrapper with layered surface tones for section separation. */
export function Section({
  tone = "bone",
  className,
  children,
  id,
}: {
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
  id?: string;
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-20 lg:py-28", tones[tone], className)}
    >
      {children}
    </section>
  );
}
