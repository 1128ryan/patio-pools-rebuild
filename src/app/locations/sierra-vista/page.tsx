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
  title: "Patio Pools & Spas Sierra Vista | Pool Service & Repair",
  description:
    "Patio Pools & Spas in Sierra Vista, AZ. Pool cleaning, repair, renovation, and construction serving Cochise County. 4148 Industry Drive. Call (520) 458-9291.",
  path: "/locations/sierra-vista",
});

export default function SierraVistaLocationPage() {
  return (
    <>
      <JsonLd
        data={localBusinessSchema({
          name: "Patio Pools & Spas — Sierra Vista",
          address: "4148 Industry Drive, Ste. 1108-1109, Sierra Vista, AZ 85635",
          city: "Sierra Vista",
          phone: "+15204589291",
          lat: 31.5455,
          lng: -110.2773,
        })}
      />

      <Hero
        title="Patio Pools & Spas"
        highlight="Sierra Vista"
        subtitle="Serving the Sierra Vista and Cochise County communities with full pool services since 1995. The same award-winning quality trusted across Southern Arizona."
        primaryCTA={{ label: "Schedule Service", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 458-9291", href: "tel:+15204589291" }}
      />

      <Breadcrumbs
        items={[
          { label: "Locations", href: "/contact" },
          { label: "Sierra Vista", href: "/locations/sierra-vista" },
        ]}
      />

      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            <div>
              <SectionHeading title="Store Information" centered={false} />
              <div className="mt-6 space-y-6">
                <div>
                  <h3 className="font-semibold text-navy">Address</h3>
                  <p className="text-navy-mid mt-1">
                    4148 Industry Drive, Ste. 1108-1109<br />
                    Sierra Vista, AZ 85635
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Phone</h3>
                  <a href="tel:+15204589291" className="text-blue hover:text-blue-dark text-lg font-heading font-bold">
                    (520) 458-9291
                  </a>
                </div>
                <div>
                  <h3 className="font-semibold text-navy">Hours</h3>
                  <p className="text-navy-mid mt-1">By appointment — call for service appointments</p>
                </div>
              </div>
            </div>

            <div className="rounded-xl bg-gray-light p-6">
              <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-wide">
                Services Available in Sierra Vista
              </h3>
              <p className="mt-3 text-sm text-navy-mid leading-relaxed">
                Our Sierra Vista location provides the same trusted, professional pool services that have made Patio Pools the top choice in Tucson for over 55 years. From routine cleaning to complete renovations, our team delivers quality workmanship backed by warranty.
              </p>
              <ul className="mt-4 space-y-2">
                {[
                  "Pool cleaning & weekly maintenance",
                  "Equipment repair & replacement",
                  "Pool renovation & resurfacing",
                  "New pool construction",
                  "Water testing & chemical supplies",
                  "Spa service & repair",
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
          </div>
        </Container>
      </section>

      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading title="All Services" />
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
        title="Need Pool Service in Sierra Vista?"
        subtitle="Call our Sierra Vista team or schedule online. We deliver the same award-winning quality across all of Southern Arizona."
        secondaryCTA={{ label: "Call (520) 458-9291", href: "tel:+15204589291" }}
      />
    </>
  );
}
