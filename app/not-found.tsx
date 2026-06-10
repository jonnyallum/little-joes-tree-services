import Link from "next/link";
import { Home, Phone, TreeDeciduous } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { buttonVariants } from "@/components/ui/Button";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewTicker } from "@/components/ReviewTicker";
import { siteConfig } from "@/site-config";

// The root not-found renders outside the (site) route group, so it brings the
// site chrome along itself to look like every other page.
export default function NotFound() {
  return (
    <div className="pb-12 sm:pb-14">
      <Header />
      <main>
        <NotFoundBody />
      </main>
      <Footer />
      <ReviewTicker />
    </div>
  );
}

function NotFoundBody() {
  return (
    <section className="surface-forest">
      <Container size="narrow">
        <div className="flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
          <TreeDeciduous className="h-12 w-12 text-leaf-300" aria-hidden />
          <p className="mt-6 text-sm font-semibold uppercase tracking-brand text-leaf-300">
            Page not found
          </p>
          <h1 className="mt-3 text-4xl font-semibold text-bone-50 sm:text-5xl">
            We couldn&rsquo;t find that page
          </h1>
          <p className="mt-4 max-w-md text-bone-200/90">
            The page may have moved or never existed. Head back home, or give us a call and
            we&rsquo;ll point you in the right direction.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link href="/" className={buttonVariants({ variant: "accent", size: "lg" })}>
              <Home className="h-4 w-4" aria-hidden />
              Back to home
            </Link>
            <a
              href={siteConfig.phoneHref}
              className={buttonVariants({ variant: "onDark", size: "lg" })}
            >
              <Phone className="h-4 w-4" aria-hidden />
              Call {siteConfig.phone}
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

