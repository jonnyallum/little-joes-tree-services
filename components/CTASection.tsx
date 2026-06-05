import Link from "next/link";
import { ArrowRight, Phone } from "lucide-react";
import { CallLink } from "./tracked";
import { buttonVariants } from "./ui/Button";
import { siteConfig } from "@/site-config";

/**
 * Reusable high-value CTA band over the woodland backdrop — a green scrim with
 * soft emerald glows and floating leaves for depth, white text. Not an ad banner.
 */
export function CTASection({
  title = "Need a quote for tree work?",
  body = "If you need tree surgery, stump grinding, hedge cutting, clearance or fencing, get in touch for a free estimate. We are happy to come out, look at the job properly and give you a clear price with no messing about.",
  location = "cta_band",
}: {
  title?: string;
  body?: string;
  location?: string;
}) {
  return (
    <section className="surface-mesh relative overflow-hidden">
      <div className="relative mx-auto max-w-4xl px-5 py-20 text-center sm:px-6 sm:py-24 lg:py-28">
        <h2 className="text-shadow-forest text-balance font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          {title.includes("?") ? (
            <>
              {title.replace(/\?$/, "")}
              <span className="text-gradient">?</span>
            </>
          ) : (
            title
          )}
        </h2>
        <p className="text-shadow-forest mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-bone-100">{body}</p>
        <p className="text-shadow-forest mt-3 text-bone-200">
          Call{" "}
          <a href={siteConfig.phoneHref} className="font-semibold text-leaf-300 underline-offset-4 hover:underline">
            {siteConfig.phone}
          </a>{" "}
          or use the contact form to send your details and a few photos of the job.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
            Get a free quote
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" aria-hidden />
          </Link>
          <CallLink
            phone={siteConfig.phone}
            phoneHref={siteConfig.phoneHref}
            location={location}
            asButton
            variant="onDark"
            size="lg"
          >
            <Phone className="h-4 w-4" aria-hidden />
            Call {siteConfig.phone}
          </CallLink>
        </div>
      </div>
    </section>
  );
}
