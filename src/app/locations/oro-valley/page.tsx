import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, localBusinessSchema } from "@/components/seo/JsonLd";
import { services } from "@/data/services";
import Link from "next/link";

export const metadata: Metadata = generatePageMetadata({
  title: "Oro Valley Pool Builder & Pool Service | Patio Pools & Spas",
  description:
    "Pool construction, renovation, cleaning, and repair in Oro Valley, AZ. Patio Pools & Spas — Southern Arizona's trusted pool company since 1969. Call (520) 886-1211.",
  path: "/locations/oro-valley",
});

export default function OroValleyLocationPage() {
  return (
    <>
      <JsonLd
        data={localBusinessSchema({
          name: "Patio Pools & Spas — Oro Valley",
          address: "Oro Valley, AZ",
          city: "Oro Valley",
          phone: "+15208861211",
          lat: 32.3909,
          lng: -110.9665,
        })}
      />

      <Hero
        title="Pool Services in"
        highlight="Oro Valley"
        subtitle="Award-winning pool construction, renovation, cleaning, and repair for Oro Valley homeowners. Backed by 55+ years of experience and a Lifetime Structural Warranty."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/contact" },
          { label: "Oro Valley", href: "/locations/oro-valley" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading
                title="Serving Oro Valley Homeowners"
                centered={false}
              />
              <p className="mt-6 text-navy-mid leading-relaxed">
                Oro Valley residents enjoy some of the most beautiful homes and backyards in Southern Arizona — and Patio Pools &amp; Spas has been helping them build, maintain, and improve their pools for decades.
              </p>
              <p className="mt-4 text-navy-mid leading-relaxed">
                Whether you need a new custom pool designed for your Oro Valley property, a renovation to update your existing pool, or reliable weekly cleaning service, our experienced team delivers the same award-winning quality that has earned us 150+ design awards and the trust of 15,000+ pool owners across the region.
              </p>
              <div className="mt-6">
                <h3 className="font-semibold text-navy">Contact</h3>
                <a href="tel:+15208861211" className="text-blue hover:text-blue-dark text-lg font-heading font-bold block mt-1">
                  (520) 886-1211
                </a>
                <p className="text-sm text-navy-mid mt-1">Served from our Tucson headquarters</p>
              </div>
            </div>

            <div className="space-y-6">
              <div className="rounded-xl bg-gray-light p-6">
                <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-wide">
                  Available Services
                </h3>
                <ul className="mt-4 space-y-2">
                  {[
                    "Custom pool design & construction",
                    "Pool renovation & resurfacing",
                    "Weekly pool cleaning from $45/week",
                    "Equipment repair & maintenance",
                    "Spa & hot tub installation",
                    "Water testing & chemical delivery",
                    "Energy-efficient equipment upgrades",
                    "Complete backyard overhauls",
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
                  Free On-Site Estimates
                </h3>
                <p className="mt-2 text-white/80 text-sm">
                  Our team will visit your Oro Valley property for a free consultation and estimate — no obligation.
                </p>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading title="Our Services" />
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
              </Link>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Ready to Get Started in Oro Valley?"
        subtitle="Contact us for a free consultation. We'll visit your property and help you plan your perfect pool project."
      />
    </>
  );
}
