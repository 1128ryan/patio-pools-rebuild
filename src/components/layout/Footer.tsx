import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { locations, companyInfo } from "@/data/locations";
import { services } from "@/data/services";

export function Footer() {
  return (
    <footer className="bg-navy text-gray" role="contentinfo">
      {/* Main footer */}
      <Container className="py-12 lg:py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
          {/* Brand column */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-yellow rounded-full flex items-center justify-center">
                <span className="font-heading text-navy font-bold text-sm">PP</span>
              </div>
              <div>
                <span className="font-heading text-lg font-bold text-white uppercase tracking-wide">
                  Patio Pools
                </span>
                <span className="font-heading text-yellow text-lg font-bold uppercase tracking-wide">
                  {" "}
                  &amp; Spas
                </span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-4">
              Southern Arizona&apos;s trusted pool builder and full-service pool
              company since {companyInfo.foundedYear}. Proudly serving Tucson,
              Sierra Vista, Oro Valley, and surrounding communities.
            </p>
            {/* Social links */}
            <div className="flex gap-3">
              {[
                { label: "Facebook", href: "https://www.facebook.com/patiopools", icon: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" },
                { label: "Instagram", href: "https://www.instagram.com/patiopoolsspas", icon: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" },
                { label: "YouTube", href: "https://www.youtube.com/@patiopools", icon: "M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-navy-light flex items-center justify-center hover:bg-blue transition-colors"
                  aria-label={social.label}
                >
                  <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
                    <path d={social.icon} />
                  </svg>
                </a>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide mb-4">
              Services
            </h3>
            <ul className="space-y-2.5">
              {services.map((service) => (
                <li key={service.id}>
                  <Link
                    href={service.href}
                    className="text-sm hover:text-yellow transition-colors"
                  >
                    {service.shortTitle}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/spas"
                  className="text-sm hover:text-yellow transition-colors"
                >
                  Spas &amp; Hot Tubs
                </Link>
              </li>
            </ul>
          </div>

          {/* Locations column */}
          <div>
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide mb-4">
              Locations
            </h3>
            <ul className="space-y-4">
              {locations.map((loc) => (
                <li key={loc.id}>
                  <Link
                    href={`/locations/${loc.slug}`}
                    className="text-sm font-semibold text-yellow hover:text-white transition-colors"
                  >
                    {loc.city}
                  </Link>
                  <p className="text-xs mt-0.5">{loc.address}</p>
                  <a
                    href={`tel:${loc.phoneRaw}`}
                    className="text-xs hover:text-yellow transition-colors"
                  >
                    {loc.phone}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="font-heading text-base font-bold text-white uppercase tracking-wide mb-4">
              Contact Us
            </h3>
            <ul className="space-y-3 text-sm">
              <li>
                <a
                  href="tel:+15208861211"
                  className="flex items-center gap-2 hover:text-yellow transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-yellow flex-shrink-0"
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
              </li>
              <li>
                <a
                  href="mailto:info@patiopoolsaz.com"
                  className="flex items-center gap-2 hover:text-yellow transition-colors"
                >
                  <svg
                    className="w-4 h-4 text-yellow flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                  info@patiopoolsaz.com
                </a>
              </li>
            </ul>

            <div className="mt-6">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center w-full rounded-lg bg-yellow px-6 py-3 text-sm font-bold uppercase tracking-wider text-navy hover:bg-yellow-dark transition-colors font-heading"
              >
                Get a Free Quote
              </Link>
            </div>
          </div>
        </div>
      </Container>

      {/* Bottom bar */}
      <div className="border-t border-navy-light">
        <Container className="flex flex-col items-center justify-between gap-2 py-4 sm:flex-row">
          <p className="text-xs">
            &copy; {new Date().getFullYear()} Patio Pools &amp; Spas. All rights
            reserved. {companyInfo.licenseNumbers}
          </p>
          <div className="flex gap-4 text-xs">
            <Link href="/privacy-policy" className="hover:text-yellow transition-colors">
              Privacy Policy
            </Link>
            <Link href="/sitemap" className="hover:text-yellow transition-colors">
              Sitemap
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
}
