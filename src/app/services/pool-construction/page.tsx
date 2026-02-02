import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { FAQ } from "@/components/sections/FAQ";
import { CTABanner } from "@/components/sections/CTABanner";
import { Testimonials } from "@/components/sections/Testimonials";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd, serviceSchema } from "@/components/seo/JsonLd";
import { poolConstructionFAQs } from "@/data/faqs";
import { RelatedServices } from "@/components/sections/RelatedServices";

export const metadata: Metadata = generatePageMetadata({
  title: "Tucson Pool Builders | New Pool Construction | Patio Pools & Spas",
  description:
    "Award-winning Tucson pool builders since 1969. Custom residential and commercial pool design and construction with in-house crews and Lifetime Structural Warranty. Free 3D design consultation.",
  path: "/services/pool-construction",
});

const buildSteps = [
  { step: 1, title: "Design Consultation", description: "Meet with one of our designers to discuss your vision, walk the site, and explore possibilities for your backyard." },
  { step: 2, title: "3D Plan & Quote", description: "Receive a detailed 3D rendering of your pool design with transparent pricing tailored to your specifications." },
  { step: 3, title: "Contract & Scheduling", description: "Confirm your design with guaranteed start and finish dates provided in writing." },
  { step: 4, title: "Site Preparation", description: "Your project superintendent lays out the pool in your backyard for final review before breaking ground." },
  { step: 5, title: "Excavation", description: "Our crews clear the pool area, begin excavation, and remove all dirt and debris." },
  { step: 6, title: "Plumbing Installation", description: "PVC piping for filtration, cleaning systems, water lines, and lighting are installed within the pool walls." },
  { step: 7, title: "Steel Reinforcement", description: "Hundreds of feet of steel rebar are tied together in a reinforcing mesh pattern — a step we never rush." },
  { step: 8, title: "Gunite Application", description: "Specially blended concrete is air-placed at high pressure to create a durable, long-lasting pool shell." },
  { step: 9, title: "Tile Installation", description: "Your chosen tile is installed around the pool circumference and any additional sections." },
  { step: 10, title: "Deck Installation", description: "The deck is formed and installed in your chosen material — Kool Deck, flagstone, Travertine, or aggregate." },
  { step: 11, title: "Landscaping & Features", description: "Additional structures, water features, BBQ areas, landscaping, and other backyard elements are completed." },
  { step: 12, title: "Interior Finish", description: "Your chosen interior finish — plaster or Pebble Tec in 15+ colors — is hand-finished and the pool is filled." },
  { step: 13, title: "Systems Startup", description: "All mechanical systems are tested, stabilizing chemicals added, and water balanced for clarity and safety." },
  { step: 14, title: "Jump In!", description: "Your pool is complete — built without compromise, by skilled craftspeople using the finest materials." },
];

export default function PoolConstructionPage() {
  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: "New Pool Construction in Tucson",
          description:
            "Custom residential and commercial pool design and construction in Tucson, AZ. In-house crews, Lifetime Structural Warranty, and 150+ design awards.",
          url: "/services/pool-construction",
        })}
      />

      <Hero
        title="New Pool Design &"
        highlight="Construction"
        subtitle="Tucson's most awarded pool builder will design and build the pool of your dreams. In-house crews, premium materials, and a Lifetime Structural Warranty — fully transferable."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs
        items={[
          { label: "Services", href: "/services" },
          { label: "Pool Construction", href: "/services/pool-construction" },
        ]}
      />

      {/* Why Choose Us */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Why Build with Patio Pools?"
            subtitle="We're the only pool company in Southern Arizona with its own in-house construction crews — giving you complete quality control from start to finish."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { title: "Since 1969", desc: "55+ years building pools across Southern Arizona" },
              { title: "150+ Awards", desc: "National and international pool design recognition" },
              { title: "In-House Crews", desc: "Full control of workmanship and materials" },
              { title: "Lifetime Warranty", desc: "Structural warranty that transfers with your home" },
            ].map((item) => (
              <div key={item.title} className="text-center rounded-xl bg-gray-light p-6">
                <h3 className="font-heading text-lg font-bold text-blue uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-navy-mid">{item.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Build Process */}
      <section className="bg-navy py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Our 14-Step Build Process"
            subtitle="From dream to reality — here is how we build a Patio Pool."
            className="[&_h2]:text-white [&_p]:text-gray"
          />
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {buildSteps.map(({ step, title, description }) => (
              <div key={step} className="rounded-lg bg-navy-light p-5">
                <div className="flex items-center gap-3 mb-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow text-navy font-heading font-bold text-sm">
                    {step}
                  </span>
                  <h3 className="font-heading text-base font-semibold text-white uppercase tracking-wide">
                    {title}
                  </h3>
                </div>
                <p className="text-sm text-gray leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Financing */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Flexible Pool Financing"
                subtitle="Make your dream pool a reality with competitive financing options."
                centered={false}
              />
              <div className="mt-6 space-y-4">
                {[
                  { name: "Lyon Financial", features: "Low fixed rates, terms up to 30 years, amounts up to $200,000, 625+ FICO" },
                  { name: "LightStream", features: "Great rates for 700+ credit, up to 84-month terms, same-day funding" },
                  { name: "HFS Financial", features: "Unsecured loans up to $250,000, terms up to 15 years, fund in one day" },
                ].map((lender) => (
                  <div key={lender.name} className="rounded-lg border border-gray p-4">
                    <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-wide">
                      {lender.name}
                    </h3>
                    <p className="mt-1 text-sm text-navy-mid">{lender.features}</p>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-sm text-navy-mid">
                You are also welcome to use your own lender — bank, credit union, or line of credit.
              </p>
            </div>
            <div className="rounded-xl bg-blue p-8 text-center">
              <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
                Ready to Get Started?
              </h3>
              <p className="mt-3 text-white/80">
                Contact us for a free design consultation. Our team will meet with you at your home to discuss possibilities and provide a detailed 3D rendering with pricing.
              </p>
              <div className="mt-6">
                <Button href="/contact" variant="primary" size="lg">
                  Request Free Consultation
                </Button>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <FAQ
        title="Pool Construction FAQs"
        subtitle="Common questions about building a new pool in Tucson."
        faqs={poolConstructionFAQs}
      />

      <Testimonials />

      <RelatedServices currentServiceId="pool-construction" />

      <CTABanner
        title="Build Your Dream Pool Today"
        subtitle="From concept to completion, Patio Pools delivers award-winning quality. Get your free design consultation."
      />
    </>
  );
}
