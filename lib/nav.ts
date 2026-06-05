/** Primary site navigation. Service/area children are derived from data. */

import { services } from "./services";
import { primaryLocations } from "./locations";

export type NavLink = { label: string; href: string };

export const mainNav: { label: string; href: string; children?: NavLink[] }[] = [
  { label: "Home", href: "/" },
  {
    label: "Services",
    href: "/services",
    children: services.map((s) => ({ label: s.navLabel, href: `/services/${s.slug}` })),
  },
  {
    label: "Areas",
    href: "/areas",
    children: primaryLocations.map((l) => ({ label: l.name, href: `/areas/${l.slug}` })),
  },
  { label: "Reviews", href: "/reviews" },
  { label: "About", href: "/about" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
];

export const footerServiceLinks: NavLink[] = services.map((s) => ({
  label: s.navLabel,
  href: `/services/${s.slug}`,
}));
