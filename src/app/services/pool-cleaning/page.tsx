import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd, serviceSchema } from "@/components/seo/JsonLd";
import { poolCleaningFAQs } from "@/data/faqs";
import { RelatedServices } from "@/components/sections/RelatedServices";

export const metadata: Metadata = generatePageMetadata({
  title: "Pool Cleaning Service Tucson | $45/Week | Patio Pools & Spas",
  description:
    "Professional weekly pool cleaning in Tucson starting at $45/week with chemicals included. Skimming, brushing, chemical balancing, and equipment checks. Call (520) 886-1211.",
  path: "/services/pool-cleaning",
});

const serviceAreas = [
  "Tucson",
  "Oro Valley",
  "Marana",
  "Vail",
  "Sahuarita",
  "Green Valley",
  "Catalina Foothills",
  "Sierra Vista",
];

export default function PoolCleaningPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Pool Cleaning Service in Tucson",
          description:
            "Professional weekly pool cleaning in Tucson and Southern Arizona. Starting at $45/week with chemicals included.",
          url: "/services/pool-cleaning",
        })}
      />

      <Hero
        title="Professional Pool Cleaning"
        highlight="Services"
        subtitle="Keep your pool sparkling clean, safe, and swim-ready all year round. Weekly maintenance starting at $45/week with chemicals included."
        primaryCTA={{ label: "Schedule Service", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Pool Cleaning", href: "/services/pool-cleaning" },
        ]}
      />

      {/* Pricing */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-start">
            <div>
              <SectionHeading
                title="Weekly Pool Cleaning"
                subtitle="Everything your pool needs to stay clean, clear, and safe — handled by our expert technicians."
                centered={false}
              />
              <p className="mt-6 text-navy-mid leading-relaxed">
                Taking care of a swimming pool needs to be done regularly and carefully. Our team handles everything from routine cleaning and water balancing to equipment checks, so you do not have to lift a finger. We serve homeowners across Tucson, Oro Valley, Marana, Vail, Sahuarita, Green Valley, and Catalina Foothills.
              </p>
              <p className="mt-4 text-navy-mid leading-relaxed">
                Whether you need ongoing weekly service or vacation coverage while you are away, Patio Pools keeps your pool in top condition at the best prices in town.
              </p>
            </div>

            <div className="rounded-xl bg-blue p-8 text-white">
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-lg text-white/80">From</span>
                <span className="font-heading text-5xl font-bold text-yellow">
                  $45
                </span>
                <span className="font-heading text-lg text-white/80">/week</span>
              </div>
              <p className="mt-1 text-sm text-white/70 font-semibold uppercase tracking-wide">
                Chemicals Included
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Skim leaves and debris",
                  "Brush walls and steps",
                  "Test and balance pool chemicals",
                  "Empty skimmer & pump baskets",
                  "Check filtration systems",
                  "Backwash if needed",
                  "Visual equipment inspection",
                  "Water level monitoring",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm">
                    <svg
                      className="w-4 h-4 text-yellow flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-8">
                <Button href="/contact" variant="primary" size="lg" className="w-full">
                  Schedule Service
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      {/* Service Areas */}
      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Service Areas"
            subtitle="Our pool cleaning technicians serve the following communities across Southern Arizona."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-white px-5 py-2 text-sm font-medium text-navy shadow-sm border border-gray"
              >
                {area}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        title="Pool Cleaning FAQs"
        faqs={poolCleaningFAQs}
      />

      <RelatedServices currentServiceId="pool-cleaning" />

      <CTABanner
        title="Let Us Handle Pool Maintenance"
        subtitle="Enjoy your pool without the hassle. Professional cleaning from $45/week, chemicals included."
      />
    </>
  );
}
