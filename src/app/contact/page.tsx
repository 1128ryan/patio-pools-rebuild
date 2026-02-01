import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { locations } from "@/data/locations";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Contact Patio Pools & Spas | Get a Free Quote | Tucson",
  description:
    "Contact Patio Pools & Spas for a free pool quote. Visit our Tucson or Sierra Vista showroom, call (520) 886-1211, or fill out our online form. We respond within 24 hours.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <Hero
        title="Contact"
        highlight="Patio Pools & Spas"
        subtitle="Get in touch for a free quote, schedule a service call, or visit one of our showrooms. We respond within 24 hours."
      />

      <Breadcrumbs items={[{ label: "Contact", href: "/contact" }]} />

      {/* Contact Form + Info */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Get In Touch"
                subtitle="Fill out the form and our team will get back to you within 24 hours."
                centered={false}
              />

              {/* Contact Methods */}
              <div className="mt-8 space-y-4">
                <a
                  href="tel:+15208861211"
                  className="flex items-center gap-3 rounded-lg border border-gray p-4 hover:bg-gray-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">(520) 886-1211</p>
                    <p className="text-xs text-navy-mid">Tucson Main Line</p>
                  </div>
                </a>

                <a
                  href="tel:+15204589291"
                  className="flex items-center gap-3 rounded-lg border border-gray p-4 hover:bg-gray-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">(520) 458-9291</p>
                    <p className="text-xs text-navy-mid">Sierra Vista</p>
                  </div>
                </a>

                <a
                  href="mailto:info@patiopoolsaz.com"
                  className="flex items-center gap-3 rounded-lg border border-gray p-4 hover:bg-gray-light transition-colors"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-navy">info@patiopoolsaz.com</p>
                    <p className="text-xs text-navy-mid">Email Us</p>
                  </div>
                </a>
              </div>
            </div>

            <ContactForm />
          </div>
        </Container>
      </section>

      {/* Store Locations */}
      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Our Locations"
            subtitle="Visit one of our showrooms in Southern Arizona."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {locations.map((location) => (
              <div
                key={location.id}
                className="rounded-xl bg-white p-6 shadow-md"
              >
                <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">
                  {location.city}
                </h3>
                <p className="mt-2 text-sm text-navy-mid">{location.address}</p>
                <div className="mt-4 space-y-1">
                  {location.hours.map((h) => (
                    <div key={h.days} className="flex justify-between text-sm">
                      <span className="text-navy-mid">{h.days}</span>
                      <span className="font-medium text-navy">{h.time}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-5 flex items-center justify-between">
                  <a
                    href={`tel:${location.phoneRaw}`}
                    className="font-heading text-lg font-bold text-blue hover:text-blue-dark transition-colors"
                  >
                    {location.phone}
                  </a>
                  <Link
                    href={`/locations/${location.slug}`}
                    className="text-sm font-semibold text-yellow hover:text-yellow-dark transition-colors"
                  >
                    Details →
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
