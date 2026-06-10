import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ReviewTicker } from "@/components/ReviewTicker";

/**
 * Site chrome — header, footer and the fixed bottom review ticker — for every
 * standard page. Standalone pages (e.g. /card, the digital business card) live
 * outside this group so they render chrome-free.
 */
export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    // Bottom padding keeps the fixed review ticker from covering page content.
    <div className="pb-12 sm:pb-14">
      {/* Skip link for keyboard / screen-reader users. */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-lg focus:bg-forest-800 focus:px-4 focus:py-2 focus:text-bone-50"
      >
        Skip to content
      </a>

      <Header />
      <main id="main">{children}</main>
      <Footer />
      <ReviewTicker />
    </div>
  );
}
