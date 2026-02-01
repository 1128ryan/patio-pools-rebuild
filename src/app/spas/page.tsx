import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = generatePageMetadata({
  title: "Spas & Hot Tubs Tucson | HotSpring Dealer | Patio Pools & Spas",
  description:
    "Shop hot tubs, swim spas, and custom in-ground spas in Tucson. Authorized HotSpring dealer featuring HighLife, Limelight, Hot Spot, and Freeflow collections. Visit our showroom.",
  path: "/spas",
});

const collections = [
  {
    name: "HighLife Collection",
    tagline: "The Ultimate in Luxury",
    description:
      "Premium hot tubs with the most advanced hydrotherapy, exclusive jet systems, and top-tier energy efficiency. The gold standard for those who want the very best.",
    features: ["Wireless control via app", "Patented jet systems", "FreshWater salt system", "Full-foam insulation"],
  },
  {
    name: "Limelight Collection",
    tagline: "Style Meets Performance",
    description:
      "Feature-rich hot tubs that combine striking design with powerful hydrotherapy. A perfect balance of luxury and value for the modern homeowner.",
    features: ["LED lighting", "Comfort Control system", "Easy-to-use controls", "Contemporary design"],
  },
  {
    name: "Hot Spot Collection",
    tagline: "Value You Can Feel",
    description:
      "Reliable, affordable hot tubs built with quality HotSpring engineering. Ideal for families looking for great hydrotherapy at an accessible price point.",
    features: ["Moto-Massage DX jet", "Comfortable seating", "Energy efficient", "Easy maintenance"],
  },
  {
    name: "Freeflow Collection",
    tagline: "Plug-and-Play Simplicity",
    description:
      "Portable, plug-and-play spas that deliver relaxation without the complexity. Simply plug into a standard outlet and enjoy. Perfect for patios and smaller spaces.",
    features: ["No electrician needed", "Lightweight & portable", "Standard outlet power", "Affordable entry point"],
  },
];

export default function SpasPage() {
  return (
    <>
      <Hero
        title="Spas & Hot Tubs"
        highlight="Tucson"
        subtitle="From custom in-ground spas to premium HotSpring hot tubs and swim spas, we have the perfect relaxation solution for every lifestyle and budget."
        primaryCTA={{ label: "Visit Our Showroom", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <Breadcrumbs items={[{ label: "Spas & Hot Tubs", href: "/spas" }]} />

      {/* Custom In-Ground Spas */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Custom In-Ground Spas"
                subtitle="Designed and built by our expert team to seamlessly integrate with your pool and backyard."
                centered={false}
              />
              <p className="mt-6 text-navy-mid leading-relaxed">
                Our design consultants will create an in-ground spa tailored to your space and wellness needs — with personalized jet placement, seating configuration, lighting, and water features that turn your backyard into a private oasis.
              </p>
              <ul className="mt-6 space-y-3">
                {[
                  "Integrated pool & spa combos",
                  "Custom jet placement for targeted hydrotherapy",
                  "LED mood lighting and water features",
                  "Automatic temperature and controls",
                  "Covered by our construction warranty",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm text-navy-mid">
                    <svg className="w-4 h-4 text-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button href="/contact" variant="secondary">
                  Request Design Consultation
                </Button>
              </div>
            </div>
            <div className="rounded-xl bg-gradient-to-br from-blue to-navy p-10 text-center">
              <h3 className="font-heading text-2xl font-bold text-white uppercase tracking-wide">
                Built by Patio Pools
              </h3>
              <p className="mt-3 text-white/80">
                The same award-winning craftsmanship and in-house crews that build our pools create your custom spa. Quality guaranteed.
              </p>
            </div>
          </div>
        </Container>
      </section>

      {/* Hot Tub Collections */}
      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Above-Ground Hot Tub Collections"
            subtitle="As an authorized HotSpring dealer, we carry a full selection of hot tubs for every lifestyle and budget."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-2">
            {collections.map((collection) => (
              <div
                key={collection.name}
                className="rounded-xl bg-white p-6 shadow-md hover:shadow-lg transition-shadow"
              >
                <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">
                  {collection.name}
                </h3>
                <p className="text-sm font-semibold text-blue mt-1">
                  {collection.tagline}
                </p>
                <p className="mt-3 text-sm text-navy-mid leading-relaxed">
                  {collection.description}
                </p>
                <ul className="mt-4 grid grid-cols-2 gap-2">
                  {collection.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-1.5 text-xs text-navy-mid">
                      <svg className="w-3 h-3 text-yellow flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Swim Spas */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Swim Spas & Aquatic Training"
            subtitle="Combine the benefits of a pool and spa in one versatile, compact unit."
          />
          <div className="mt-10 max-w-3xl mx-auto text-center">
            <p className="text-navy-mid leading-relaxed">
              Swim spas provide a continuous current for swimming, aquatic exercise, and hydrotherapy — all in a space-efficient footprint. Perfect for homeowners who want the fitness benefits of a pool and the relaxation of a spa without the space requirements of a full-size pool.
            </p>
            <div className="mt-8">
              <Button href="/contact" variant="primary" size="lg">
                Explore Swim Spas
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <CTABanner
        title="Visit Our Spa Showroom"
        subtitle="See and test our full selection of hot tubs, swim spas, and spa accessories at our Tucson showroom."
        primaryCTA={{ label: "Get Directions", href: "/locations/tucson" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />
    </>
  );
}
