import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { ForestBackdrop } from "@/components/ForestBackdrop";
import { ReviewTicker } from "@/components/ReviewTicker";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/ui/JsonLd";
import { localBusinessSchema, websiteSchema } from "@/lib/schema";
import { siteConfig } from "@/site-config";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.businessName} | Tree Surgery in Hampshire`,
    template: `%s | ${siteConfig.businessName}`,
  },
  description: siteConfig.description,
  applicationName: siteConfig.businessName,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    type: "website",
    siteName: siteConfig.businessName,
    locale: "en_GB",
    url: siteConfig.url,
    title: `${siteConfig.businessName} | Tree Surgery in Hampshire`,
    description: siteConfig.description,
  },
  // Google Search Console verification (HTML tag method), optional.
  verification: siteConfig.gscVerification
    ? { google: siteConfig.gscVerification }
    : undefined,
};

export const viewport: Viewport = {
  themeColor: siteConfig.brand.forestDeep,
  colorScheme: "light",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-GB" className={`${inter.variable} ${fraunces.variable}`}>
      <body className="min-h-screen bg-forest-950 font-sans antialiased pb-12 sm:pb-14">
        {/* Site-wide structured data (LocalBusiness + WebSite). */}
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />

        {/* Full-bleed photorealistic woodland backdrop behind every section. */}
        <ForestBackdrop />

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

        <Analytics />
      </body>
    </html>
  );
}
