"use client";

import { useState } from "react";
import Link from "next/link";
import { navigation } from "@/data/navigation";

interface MobileNavProps {
  open: boolean;
  onClose: () => void;
}

export function MobileNav({ open, onClose }: MobileNavProps) {
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60"
        onClick={onClose}
        aria-hidden="true"
      />

      {/* Panel */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-navy shadow-xl">
        <div className="flex items-center justify-between px-6 py-4 border-b border-navy-light">
          <span className="font-heading text-lg font-bold text-white uppercase tracking-wide">
            Menu
          </span>
          <button
            onClick={onClose}
            className="p-2 text-gray hover:text-yellow transition-colors"
            aria-label="Close menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <nav className="px-6 py-4 overflow-y-auto max-h-[calc(100vh-80px)]" aria-label="Mobile navigation">
          {navigation.map((item) => (
            <div key={item.label} className="border-b border-navy-light">
              {item.children ? (
                <>
                  <button
                    onClick={() =>
                      setExpandedItem(
                        expandedItem === item.label ? null : item.label
                      )
                    }
                    className="flex w-full items-center justify-between py-4 text-base font-semibold uppercase tracking-wider text-white hover:text-yellow transition-colors"
                  >
                    {item.label}
                    <svg
                      className={`w-4 h-4 transition-transform ${
                        expandedItem === item.label ? "rotate-180" : ""
                      }`}
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
                  </button>
                  {expandedItem === item.label && (
                    <div className="pl-4 pb-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={onClose}
                          className="block py-2.5 text-sm text-gray hover:text-yellow transition-colors"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </>
              ) : (
                <Link
                  href={item.href}
                  onClick={onClose}
                  className="block py-4 text-base font-semibold uppercase tracking-wider text-white hover:text-yellow transition-colors"
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          {/* Mobile CTA */}
          <div className="mt-6 space-y-3">
            <a
              href="tel:+15208861211"
              className="flex items-center justify-center gap-2 w-full rounded-lg bg-yellow px-6 py-3 text-base font-bold uppercase tracking-wider text-navy hover:bg-yellow-dark transition-colors font-heading"
            >
              <svg
                className="w-5 h-5"
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
            <Link
              href="/contact"
              onClick={onClose}
              className="flex items-center justify-center w-full rounded-lg bg-blue px-6 py-3 text-base font-bold uppercase tracking-wider text-white hover:bg-blue-dark transition-colors font-heading"
            >
              Get a Free Quote
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
}
