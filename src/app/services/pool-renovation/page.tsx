import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";
import { JsonLd, serviceSchema } from "@/components/seo/JsonLd";
import { poolRenovationFAQs } from "@/data/faqs";
import { RelatedServices } from "@/components/sections/RelatedServices";

export const metadata: Metadata = generatePageMetadata({
  title: "Pool Renovation & Remodeling Tucson | Patio Pools & Spas",
  description:
    "Transform your pool with Tucson's most experienced renovation team. Resurfacing, new decking, water features, equipment upgrades, and complete backyard overhauls. Free estimates.",
  path: "/services/pool-renovation",
});

const renovationServices = [
  {
    title: "Pool Resurfacing",
    description:
      "Refresh your pool interior with premium plaster or Pebble Tec finishes available in 15+ colors. A new surface restores beauty and extends your pool's lifespan.",
  },
  {
    title: "Decking & Coping",
    description:
      "Upgrade your pool deck with flagstone, Travertine, brick, colored concrete, or aggregate. New coping completes the look and improves safety.",
  },
  {
    title: "Water Features",
    description:
      "Add waterfalls, fountains, sheer descents, bubblers, or custom rock water sculptures to transform your pool into a backyard resort.",
  },
  {
    title: "Equipment Upgrades",
    description:
      "Replace outdated pumps, filters, heaters, and automation with energy-efficient equipment that lowers operating costs and improves performance.",
  },
  {
    title: "Tile Replacement",
    description:
      "Update worn or dated waterline tile with modern glass, porcelain, or natural stone tile that refreshes your pool's appearance.",
  },
  {
    title: "Complete Backyard Overhaul",
    description:
      "Reimagine your entire outdoor space — new pool shape, expanded patio, outdoor kitchen, fire features, lighting, and landscaping.",
  },
];

export default function PoolRenovationPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Pool Renovation & Remodeling in Tucson",
          description:
            "Complete pool renovation services in Tucson including resurfacing, decking, water features, equipment upgrades, and full backyard overhauls.",
          url: "/services/pool-renovation",
        })}
      />

      <Hero
        title="Modernize Your Pool with"
        highlight="Expert Renovation"
        subtitle="Give your pool a stunning new look while increasing your home's value and reducing maintenance costs. Free estimates available Monday through Saturday."
        primaryCTA={{ label: "Get Free Estimate", href: "#quote" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Pool Renovation", href: "/services/pool-renovation" },
        ]}
      />

      {/* Services Grid */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Our Pool Renovation Services"
            subtitle="Whether you need a simple resurface or a complete backyard transformation, we have the expertise to deliver results."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {renovationServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white border border-gray p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-wide">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-navy-mid leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Quote Form */}
      <section id="quote" className="bg-gray-light py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Request a Renovation Estimate"
                subtitle="Fill out the form and our renovation team will contact you within 24 hours to schedule a free on-site estimate."
                centered={false}
              />
              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-navy-mid">Free, no-obligation on-site estimates</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-navy-mid">Detailed proposals with transparent pricing</p>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-yellow flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                  <p className="text-navy-mid">Flexible financing options available</p>
                </div>
              </div>
            </div>
            <ContactForm
              heading="Renovate My Pool"
              subtitle="Tell us about your renovation project."
            />
          </div>
        </Container>
      </section>

      <FAQ
        title="Pool Renovation FAQs"
        subtitle="Common questions about pool remodeling in Tucson."
        faqs={poolRenovationFAQs}
      />

      <RelatedServices currentServiceId="pool-renovation" />

      <CTABanner
        title="Transform Your Pool Today"
        subtitle="From a fresh resurface to a complete backyard overhaul — Patio Pools makes it happen."
      />
    </>
  );
}
