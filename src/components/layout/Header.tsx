"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";
import { Container } from "@/components/ui/Container";
import { MobileNav } from "./MobileNav";

export function Header() {
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-navy shadow-lg">
      {/* Top bar */}
      <div className="bg-navy-light text-sm text-gray hidden lg:block">
        <Container className="flex items-center justify-between py-1.5">
          <span>
            Trusted Tucson Pool Builder &amp; Pool Services Since 1969
          </span>
          <div className="flex items-center gap-4">
            <a
              href="mailto:info@patiopoolsaz.com"
              className="hover:text-yellow transition-colors"
            >
              info@patiopoolsaz.com
            </a>
            <span className="text-navy-mid">|</span>
            <a
              href="tel:+15208861211"
              className="font-semibold text-yellow hover:text-white transition-colors"
            >
              (520) 886-1211
            </a>
          </div>
        </Container>
      </div>

      {/* Main nav */}
      <Container className="flex items-center justify-between py-3">
        <Link href="/" className="flex-shrink-0" aria-label="Patio Pools & Spas Home">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-yellow rounded-full flex items-center justify-center">
              <span className="font-heading text-navy font-bold text-lg">PP</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                Patio Pools
              </span>
              <span className="font-heading text-yellow text-xl font-bold uppercase tracking-wide">
                {" "}
                &amp; Spas
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop navigation */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
          {navigation.map((item) => (
            <div
              key={item.label}
              className="relative"
              onMouseEnter={() =>
                item.children && setOpenDropdown(item.label)
              }
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                href={item.href}
                className="px-4 py-2 text-sm font-semibold uppercase tracking-wider text-white hover:text-yellow transition-colors font-body"
              >
                {item.label}
                {item.children && (
                  <svg
                    className="inline-block ml-1 w-3 h-3"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                )}
              </Link>

              {item.children && openDropdown === item.label && (
                <div className="absolute top-full left-0 mt-0 w-64 bg-white rounded-lg shadow-xl py-2 z-50">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block px-4 py-2.5 text-sm text-navy hover:bg-gray-light hover:text-blue transition-colors"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>

        {/* CTA + Mobile toggle */}
        <div className="flex items-center gap-3">
          <a
            href="tel:+15208861211"
            className="hidden md:inline-flex items-center gap-2 rounded-lg bg-yellow px-5 py-2.5 text-sm font-bold uppercase tracking-wider text-navy hover:bg-yellow-dark transition-colors font-heading"
          >
            <svg
              className="w-4 h-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
              />
            </svg>
            (520) 886-1211
          </a>

          <button
            className="lg:hidden p-2 text-white hover:text-yellow transition-colors"
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <svg
              className="w-7 h-7"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </Container>

      <MobileNav open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  );
}
