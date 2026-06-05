import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Service } from "@/lib/services";
import { serviceIcons } from "./icons/ServiceIcons";
import { cn } from "@/lib/utils";

/**
 * Bold service card: custom tree-surgery icon on a gradient chip, a leaf-glow
 * wash and a spring lift on hover, gradient border reveal. Not a flat box.
 */
export function ServiceCard({ service, className }: { service: Service; className?: string }) {
  const Icon = serviceIcons[service.slug];
  return (
    <Link
      href={`/services/${service.slug}`}
      className={cn(
        "group relative flex flex-col overflow-hidden rounded-2xl border border-forest-900/10 bg-gradient-to-b from-white to-bone-100/70 p-6 shadow-card transition-all duration-500 ease-spring hover:-translate-y-1.5 hover:border-emerald-400/50 hover:shadow-glow-leaf",
        className,
      )}
    >
      {/* hover glow wash */}
      <span
        aria-hidden
        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-leaf-400/0 blur-2xl transition-all duration-500 group-hover:bg-leaf-400/25"
      />

      <span className="relative flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-forest-700 to-forest-950 text-bone-50 shadow-soft ring-1 ring-inset ring-white/10 transition-all duration-500 ease-spring group-hover:scale-105 group-hover:-rotate-[6deg] group-hover:shadow-glow-emerald">
        {Icon ? <Icon className="h-9 w-9" /> : null}
      </span>

      <h3 className="relative mt-5 font-display text-xl font-semibold text-forest-900">
        {service.navLabel}
      </h3>
      <p className="relative mt-2 flex-1 text-[0.95rem] leading-relaxed text-bone-700">
        {service.summary}
      </p>

      <span className="relative mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-emerald-700">
        Learn more
        <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1.5" aria-hidden />
      </span>
    </Link>
  );
}
