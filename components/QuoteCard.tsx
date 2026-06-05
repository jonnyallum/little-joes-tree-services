import Link from "next/link";
import { Check, Phone } from "lucide-react";
import { CallLink } from "./tracked";
import { buttonVariants } from "./ui/Button";
import { siteConfig } from "@/site-config";

/** Sticky aside: free-estimate CTA + credentials. Reused on service & area pages. */
export function QuoteCard({ location = "quote-card" }: { location?: string }) {
  return (
    <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-card">
      <p className="text-sm font-semibold uppercase tracking-brand text-emerald-600">
        Free estimates
      </p>
      <p className="mt-2 text-lg font-semibold text-forest-900">
        Get a clear price, no messing about
      </p>
      <p className="mt-2 text-sm leading-relaxed text-bone-700">
        Tell us about the job and we&rsquo;ll give you a free, no-obligation estimate.
        Send a few photos to get started.
      </p>
      <div className="mt-5 flex flex-col gap-3">
        <Link href="/contact" className={buttonVariants({ variant: "accent", size: "md" })}>
          Get a free quote
        </Link>
        <CallLink
          phone={siteConfig.phone}
          phoneHref={siteConfig.phoneHref}
          location={location}
          asButton
          variant="outline"
          size="md"
        >
          <Phone className="h-4 w-4" aria-hidden />
          {siteConfig.phone}
        </CallLink>
      </div>
      <hr className="my-5 border-forest-900/10" />
      <ul className="space-y-2.5 text-sm text-bone-700">
        {siteConfig.credentials.map((c) => (
          <li key={c} className="flex items-center gap-2">
            <Check className="h-4 w-4 text-emerald-600" aria-hidden />
            {c}
          </li>
        ))}
        <li className="flex items-center gap-2">
          <Check className="h-4 w-4 text-emerald-600" aria-hidden />
          {siteConfig.emergency.label}
        </li>
      </ul>
    </div>
  );
}
