import type { Metadata } from "next";
import { Phone, Mail, MapPin, Leaf, Clock, Facebook, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { Container } from "@/components/ui/Container";
import { PageHero } from "@/components/PageHero";
import { ContactForm } from "@/components/ContactForm";
import { CallLink, TrackedExternal } from "@/components/tracked";
import { JsonLd } from "@/components/ui/JsonLd";
import { breadcrumbSchema } from "@/lib/schema";
import { pageMetadata } from "@/lib/seo";
import { siteConfig } from "@/site-config";

const breadcrumbs = [
  { name: "Home", path: "/" },
  { name: "Contact", path: "/contact" },
];

export const metadata: Metadata = pageMetadata({
  title: "Contact Little Joe's Tree Services | Free Estimates in Hampshire",
  description:
    "Get a free quote for tree surgery, stump grinding, hedge cutting, clearance or fencing in Hampshire. Call 07519 744 790 or send a few photos of the job.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <JsonLd data={breadcrumbSchema(breadcrumbs)} />
      <PageHero
        eyebrow="Get in touch"
        title="Contact Little Joe's Tree Service"
        intro="If you need a quote for tree surgery, stump removal, hedge cutting, clearance, fencing or emergency tree work, get in touch and we'll come back to you as soon as we can."
        breadcrumbs={breadcrumbs}
      />

      <Section tone="bone">
        <Container size="wide">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
            {/* Details */}
            <div>
              <h2 className="text-2xl font-semibold text-forest-900">Contact details</h2>
              <p className="mt-3 text-bone-700">
                The easiest way to get started is to send a few photos of the job, your
                postcode, and a short note about what you need done. That helps us work out
                whether we can give you a rough idea straight away or whether it&rsquo;s
                better to arrange a visit.
              </p>

              <ul className="mt-7 space-y-4">
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                    <Phone className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-bone-600">Phone</span>
                    <CallLink
                      phone={siteConfig.phone}
                      phoneHref={siteConfig.phoneHref}
                      location="contact-page"
                      className="text-lg font-semibold text-forest-900 hover:text-emerald-700"
                    />
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                    <Mail className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-bone-600">Email</span>
                    <a
                      href={`mailto:${siteConfig.email}`}
                      className="text-lg font-semibold text-forest-900 hover:text-emerald-700"
                    >
                      {siteConfig.email}
                    </a>
                  </span>
                </li>
                <li className="flex items-start gap-3.5">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-700">
                    <MapPin className="h-5 w-5" aria-hidden />
                  </span>
                  <span>
                    <span className="block text-sm text-bone-600">Service area</span>
                    <span className="text-lg font-semibold text-forest-900">
                      {siteConfig.serviceArea}
                    </span>
                  </span>
                </li>
              </ul>

              <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-2 rounded-xl border border-forest-900/10 bg-white p-4 text-sm text-bone-700 shadow-soft">
                <span className="inline-flex items-center gap-2 font-medium text-forest-900">
                  <Leaf className="h-4 w-4 text-emerald-600" aria-hidden /> Free estimates
                </span>
                <span className="inline-flex items-center gap-2 font-medium text-forest-900">
                  <Clock className="h-4 w-4 text-emerald-600" aria-hidden />{" "}
                  {siteConfig.emergency.label}
                </span>
              </div>

              {/* Social proof links */}
              <div className="mt-7 flex flex-wrap gap-3">
                <TrackedExternal
                  href={siteConfig.facebookUrl}
                  event="facebook_click"
                  asButton
                  variant="outline"
                  size="md"
                  ariaLabel="Little Joe's Tree Services on Facebook"
                >
                  <Facebook className="h-4 w-4 text-emerald-600" aria-hidden />
                  Find us on Facebook
                </TrackedExternal>
                <TrackedExternal
                  href={siteConfig.googleReviewUrl}
                  event="google_review_click"
                  asButton
                  variant="outline"
                  size="md"
                  ariaLabel="Leave us a Google review"
                >
                  <Star className="h-4 w-4 text-emerald-600" aria-hidden />
                  Leave a Google review
                </TrackedExternal>
              </div>
            </div>

            {/* Form */}
            <div className="rounded-2xl border border-forest-900/10 bg-white p-6 shadow-card sm:p-8">
              <h2 className="text-2xl font-semibold text-forest-900">Send us a message</h2>
              <p className="mt-2 text-bone-700">
                Fill in a few details and we&rsquo;ll get back to you. Fields marked with{" "}
                <span className="text-emerald-600">*</span> are required.
              </p>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}
