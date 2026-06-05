"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Phone } from "lucide-react";
import { Logo } from "./Logo";
import { CallLink } from "./tracked";
import { buttonVariants } from "./ui/Button";
import { mainNav } from "@/lib/nav";
import { siteConfig } from "@/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close mobile menu on route change.
  useEffect(() => {
    setMobileOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  // Lock body scroll when the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300 ease-brand",
        scrolled
          ? "border-b border-forest-900/10 bg-cream-50/95 backdrop-blur-md shadow-soft"
          : "border-b border-white/10 bg-cream-50/80 backdrop-blur-md",
      )}
    >
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 sm:h-20 sm:px-6 lg:px-8">
        <Logo priority />

        {/* Desktop nav */}
        <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary">
          {mainNav.map((item) =>
            item.children ? (
              <div key={item.href} className="group relative">
                <Link
                  href={item.href}
                  className={cn(
                    "flex items-center gap-1 rounded-md px-3 py-2 text-sm font-medium transition-colors",
                    isActive(item.href)
                      ? "text-forest-900"
                      : "text-bone-800 hover:text-forest-900",
                  )}
                >
                  {item.label}
                  <ChevronDown className="h-3.5 w-3.5 transition-transform group-hover:rotate-180" aria-hidden />
                </Link>
                {/* Dropdown, appears on hover/focus-within */}
                <div className="invisible absolute left-0 top-full pt-2 opacity-0 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-focus-within:visible group-focus-within:opacity-100">
                  <ul className="min-w-[15rem] overflow-hidden rounded-xl border border-forest-900/10 bg-white p-1.5 shadow-lift">
                    {item.children.map((child) => (
                      <li key={child.href}>
                        <Link
                          href={child.href}
                          className="block rounded-lg px-3 py-2 text-sm text-bone-800 transition-colors hover:bg-bone-100 hover:text-forest-900"
                        >
                          {child.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                  isActive(item.href)
                    ? "text-forest-900"
                    : "text-bone-800 hover:text-forest-900",
                )}
              >
                {item.label}
              </Link>
            ),
          )}
        </nav>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 lg:flex">
          <CallLink
            phone={siteConfig.phone}
            phoneHref={siteConfig.phoneHref}
            location="header"
            className="flex items-center gap-2 text-sm font-semibold text-forest-900 transition-colors hover:text-emerald-600"
          >
            <Phone className="h-4 w-4" aria-hidden />
            {siteConfig.phone}
          </CallLink>
          <Link href="/contact" className={buttonVariants({ variant: "accent", size: "sm" })}>
            Get a free quote
          </Link>
        </div>

        {/* Mobile toggle */}
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg text-forest-900 hover:bg-forest-900/5 lg:hidden"
        >
          {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden">
          <nav
            className="max-h-[calc(100vh-4rem)] overflow-y-auto border-t border-forest-900/10 bg-bone-50 px-5 pb-8 pt-2"
            aria-label="Mobile"
          >
            {mainNav.map((item) => (
              <div key={item.href} className="border-b border-forest-900/5 last:border-0">
                {item.children ? (
                  <>
                    <button
                      type="button"
                      onClick={() =>
                        setOpenGroup((g) => (g === item.label ? null : item.label))
                      }
                      aria-expanded={openGroup === item.label}
                      className="flex w-full items-center justify-between py-3.5 text-left text-base font-medium text-forest-900"
                    >
                      {item.label}
                      <ChevronDown
                        className={cn(
                          "h-4 w-4 transition-transform",
                          openGroup === item.label && "rotate-180",
                        )}
                        aria-hidden
                      />
                    </button>
                    {openGroup === item.label && (
                      <ul className="pb-3 pl-3">
                        <li>
                          <Link
                            href={item.href}
                            className="block py-2 text-sm font-medium text-emerald-700"
                          >
                            All {item.label.toLowerCase()}
                          </Link>
                        </li>
                        {item.children.map((child) => (
                          <li key={child.href}>
                            <Link
                              href={child.href}
                              className="block py-2 text-sm text-bone-800"
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </>
                ) : (
                  <Link
                    href={item.href}
                    className="block py-3.5 text-base font-medium text-forest-900"
                  >
                    {item.label}
                  </Link>
                )}
              </div>
            ))}

            <div className="mt-6 flex flex-col gap-3">
              <CallLink
                phone={siteConfig.phone}
                phoneHref={siteConfig.phoneHref}
                location="mobile-menu"
                asButton
                variant="primary"
                size="lg"
              >
                <Phone className="h-4 w-4" aria-hidden />
                Call {siteConfig.phone}
              </CallLink>
              <Link href="/contact" className={buttonVariants({ variant: "accent", size: "lg" })}>
                Get a free quote
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
