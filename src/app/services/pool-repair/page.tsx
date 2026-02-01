import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, serviceSchema } from "@/components/seo/JsonLd";
import { poolRepairFAQs } from "@/data/faqs";

export const metadata: Metadata = generatePageMetadata({
  title: "Pool Repair & Maintenance Tucson | Patio Pools & Spas",
  description:
    "Expert pool equipment repair and maintenance in Tucson. Pumps, filters, heaters, leak detection, and more. Certified technicians service all brands. Call (520) 886-1211.",
  path: "/services/pool-repair",
});

const repairServices = [
  {
    title: "Pump & Motor Repair",
    description: "Diagnosis and repair of pool pump issues including motor replacement, impeller repair, and seal replacement.",
  },
  {
    title: "Filter Maintenance",
    description: "Regular inspection, cleaning, and replacement of cartridge, sand, and DE filters to maintain water clarity.",
  },
  {
    title: "Heater Service",
    description: "Repair and maintenance of gas, electric, and heat pump pool heaters to keep your water at the perfect temperature.",
  },
  {
    title: "Leak Detection & Repair",
    description: "Advanced leak detection methods to locate and repair leaks in pool shells, plumbing, and equipment.",
  },
  {
    title: "Salt System Service",
    description: "Maintenance and repair of salt chlorine generators including cell cleaning, calibration, and replacement.",
  },
  {
    title: "Automation & Controls",
    description: "Programming, repair, and upgrades for pool automation systems, timers, and remote control systems.",
  },
  {
    title: "Lighting Repair",
    description: "Replacement and repair of underwater pool lights, landscape lighting, and fiber optic lighting systems.",
  },
  {
    title: "Preventive Maintenance",
    description: "Scheduled equipment inspections and maintenance plans that catch problems early and extend equipment life.",
  },
];

export default function PoolRepairPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "Pool Repair & Maintenance in Tucson",
          description:
            "Expert pool equipment repair and preventive maintenance in Tucson. Certified technicians service pumps, filters, heaters, and all pool equipment.",
          url: "/services/pool-repair",
        })}
      />

      <Hero
        title="Pool Repair &"
        highlight="Maintenance"
        subtitle="Our certified technicians keep your pool equipment running efficiently. We service all brands and all pool types — regardless of who built your pool."
        primaryCTA={{ label: "Schedule Repair", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Pool Repair", href: "/services/pool-repair" },
        ]}
      />

      {/* Repair Services */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Pool Repair Services"
            subtitle="From routine maintenance to emergency repairs, our experienced technicians handle it all."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {repairServices.map((service) => (
              <div
                key={service.title}
                className="rounded-xl bg-white border border-gray p-5 shadow-sm hover:shadow-md transition-shadow"
              >
                <h3 className="font-heading text-base font-bold text-navy uppercase tracking-wide">
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

      {/* Why Choose Us */}
      <section className="bg-navy py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Why Choose Our Repair Team"
            className="[&_h2]:text-white"
          />
          <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "Certified Technicians", desc: "Over 20 certified pool operators on staff with training on all major equipment brands." },
              { title: "All Brands Serviced", desc: "We repair pools and equipment regardless of who built your pool or what brand of equipment you have." },
              { title: "55+ Years Experience", desc: "Backed by decades of experience diagnosing and solving every type of pool equipment issue." },
              { title: "Fair, Transparent Pricing", desc: "Upfront quotes with no hidden fees. You know the cost before we start any work." },
              { title: "Warranty on Repairs", desc: "Our repair work is backed by warranty — on both parts and labor." },
              { title: "Fast Response Times", desc: "We understand pool issues are urgent. Our team responds quickly to get your pool back in service." },
            ].map((item) => (
              <div key={item.title} className="rounded-lg bg-navy-light p-5">
                <h3 className="font-heading text-base font-semibold text-yellow uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-gray leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      <FAQ
        title="Pool Repair FAQs"
        faqs={poolRepairFAQs}
      />

      <CTABanner
        title="Need Pool Repair?"
        subtitle="Call our service department or schedule online. Our certified technicians are ready to help."
      />
    </>
  );
}
