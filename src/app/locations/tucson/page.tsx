import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd, localBusinessSchema } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Patio Pools & Spas Tucson | Pool Builder & Store | 22nd & Pantano",
  description:
    "Visit Patio Pools & Spas Tucson at 7960 E 22nd Street. Full-service pool store, showroom, and service center. Pool construction, renovation, cleaning, spas. Mon-Sat open. Call (520) 886-1211.",
  path: "/locations/tucson",
});

export default function TucsonLocationPage() {
  return (
    <>
      <JsonLd
        data={localBusinessSchema({
          name: "Patio Pools & Spas — Tucson",
          address: "7960 East 22nd Street, Tucson, AZ 85710",
          city: "Tucson",
          phone: "+15208861211",
          lat: 32.2065,
          lng: -110.8472,
        })}
      />

      <Hero
        title="Patio Pools & Spas"
        highlight="Tucson"
        subtitle="Our flagship location at 22nd & Pantano. Full-service pool store, hot tub showroom, and service center — serving the Tucson metro area since 1969."
        primaryCTA={{ label: "Get Directions", href: "https://www.google.com/maps/place/Patio+Pools+%26+Spas/@32.2065,-110.8472,15z" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/contact" },
          { label: "Tucson", href: "/locations/tucson" },
        ]}
      />

      {/* Store Info */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Store Information" centered={false} />
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-navy">Address</h3>
                  <p className="text-navy-mid mt-1">
                    7960 East 22nd Street<br />
                    Tucson, AZ 85710
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <a href="tel:+15208861211" className="text-blue hover:text-blue-dark text-lg font-heading font-bold">
                    (520) 886-1211
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Store Hours</h3>
                  <div className="mt-2 space-y-1">
                    <div className="flex justify-between text-sm max-w-xs">
                      <span className="text-navy-mid">Monday – Friday</span>
                      <span className="font-medium text-navy">8:00 AM – 6:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm max-w-xs">
                      <span className="text-navy-mid">Saturday</span>
                      <span className="font-medium text-navy">9:00 AM – 5:00 PM</span>
                    </div>
                    <div className="flex justify-between text-sm max-w-xs">
                      <span className="text-navy-mid">Sunday</span>
                      <span className="font-medium text-navy">10:00 AM – 4:00 PM</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Email</h3>
                  <a href="mailto:info@patiopoolsaz.com" className="text-blue hover:text-blue-dark">
                    info@patiopoolsaz.com
                  </a>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-gray-light p-6">
                <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-wide">
                  What You Will Find at Our Tucson Store
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Hot tub showroom with working models to test",
                    "Pool chemical supplies and water testing",
                    "Pool equipment (pumps, filters, heaters, cleaners)",
                    "Design consultation center for new pools",
                    "Free water analysis with purchase",
                    "Expert staff to answer any pool or spa question",
                  ].map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-navy-mid">
                      <svg className="w-4 h-4 text-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="rounded-xl bg-blue p-6 text-center">
                <h3 className="font-heading text-xl font-bold text-white uppercase tracking-wide">
                  Free Water Testing
                </h3>
                <p className="mt-2 text-white/80 text-sm">
                  Bring a water sample to our store and our experts will test it and recommend the right products to keep your pool or spa crystal clear.
                </p>
                <div className="mt-4">
                  <Button href="tel:+15208861211" variant="primary">
                    Call to Schedule
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Services in Tucson */}
      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Services Available in Tucson"
            subtitle="Full-service pool and spa solutions from Southern Arizona's most experienced team."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.id}
                href={service.href}
                className="rounded-xl bg-white p-5 shadow-sm hover:shadow-md transition-shadow text-center"
              >
                <div className="text-3xl mb-3" aria-hidden="true">{service.icon}</div>
                <h3 className="font-heading text-base font-bold text-navy uppercase tracking-wide">
                  {service.shortTitle}
                </h3>
                <p className="mt-1 text-xs text-navy-mid">{service.description.slice(0, 80)}...</p>
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <Testimonials />

      <CTABanner
        title="Visit Our Tucson Showroom"
        subtitle="Located at 22nd & Pantano — stop by for a free consultation, water test, or to browse our hot tub selection."
      />
    </>
  );
}
