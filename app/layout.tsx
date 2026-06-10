import type { Metadata, Viewport } from "next";
import { Inter, Fraunces } from "next/font/google";
import "./globals.css";
import { ForestBackdrop } from "@/components/ForestBackdrop";
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
      <body className="min-h-screen bg-forest-950 font-sans antialiased">
        {/* Site-wide structured data (LocalBusiness + WebSite). */}
        <JsonLd data={[localBusinessSchema(), websiteSchema()]} />

        {/* Full-bleed photorealistic woodland backdrop behind every section. */}
        <ForestBackdrop />

        {/* Header/footer/ticker live in app/(site)/layout.tsx so standalone
            pages like /card render without the site chrome. */}
        {children}

        <Analytics />
      </body>
    </html>
  );
}
