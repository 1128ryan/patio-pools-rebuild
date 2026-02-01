import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { Card } from "@/components/ui/Card";
import { services } from "@/data/services";

export const metadata: Metadata = generatePageMetadata({
  title: "Pool Services in Tucson & Southern Arizona | Patio Pools & Spas",
  description:
    "Full-service pool company in Tucson, AZ. New pool construction, renovation, cleaning, repair, and spa sales. 55+ years of experience. Call (520) 886-1211 for a free quote.",
  path: "/services",
});

export default function ServicesPage() {
  return (
    <>
      <Hero
        title="Swimming Pool Services"
        highlight="Near You"
        subtitle="Patio Pools & Spas is the only full-service pool company in Southern Arizona. From new construction to weekly cleaning, we handle everything — with our own in-house crews."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
      />

      <Breadcrumbs items={[{ label: "Services", href: "/services" }]} />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {services.map((service) => (
              <Card key={service.id} href={service.href} className="flex flex-col">
                <div className="p-8 flex-1">
                  <div className="text-4xl mb-4" aria-hidden="true">
                    {service.icon}
                  </div>
                  <h2 className="font-heading text-2xl font-bold text-navy uppercase tracking-wide">
                    {service.title}
                  </h2>
                  <p className="mt-3 text-navy-mid leading-relaxed">
                    {service.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {service.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center gap-2 text-sm text-navy-mid"
                      >
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
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <span className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-blue">
                    Learn more
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
                        d="M9 5l7 7-7 7"
                      />
                    </svg>
                  </span>
                </div>
              </Card>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner />
    </>
  );
}
