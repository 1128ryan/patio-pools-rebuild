import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { ServiceCards } from "@/components/sections/ServiceCards";
import { Testimonials } from "@/components/sections/Testimonials";
import { LocationCards } from "@/components/sections/LocationCards";
import { CTABanner } from "@/components/sections/CTABanner";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Button } from "@/components/ui/Button";
import { JsonLd, localBusinessSchema } from "@/components/seo/JsonLd";

export default function HomePage() {
  return (
    <>
      {/* Local Business Schema for each location */}
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
        title="Southern Arizona's Most Awarded"
        highlight="Pool Builder"
        subtitle="New construction, renovation, cleaning, and repair — built by our own in-house crews since 1969. Serving Tucson, Oro Valley, and Sierra Vista. 150+ design awards. 15,000+ pools built."
        primaryCTA={{ label: "Get a Free Quote", href: "/contact" }}
        secondaryCTA={{ label: "Call (520) 886-1211", href: "tel:+15208861211" }}
      />

      <StatsBar />

      <ServiceCards />

      {/* Spas & Hot Tubs Section */}
      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Spas & Hot Tubs"
            subtitle="From custom in-ground spas to premium above-ground hot tubs from HotSpring, we have the perfect fit for your lifestyle."
          />

          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                title: "Custom In-Ground Spas",
                description:
                  "Designed and built to your specifications with personalized jet placement, seating, lighting, and water features.",
              },
              {
                title: "Above-Ground Hot Tubs",
                description:
                  "Full selection from top brands including HighLife, Limelight, Hot Spot, and Freeflow collections.",
              },
              {
                title: "Swim Spas",
                description:
                  "Aquatic training vessels that combine the benefits of a pool and spa in a compact, versatile package.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl bg-white p-6 shadow-md text-center"
              >
                <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm text-navy-mid leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <Button href="/spas" variant="secondary">
              Explore Spas &amp; Hot Tubs
            </Button>
          </div>
        </Container>
      </section>

      {/* Weekly Cleaning Highlight */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 items-center">
            <div>
              <SectionHeading
                title="Expert Pool Care"
                subtitle="Leave the hassle of pool maintenance to us. Our team ensures your pool remains in top condition all year round."
                centered={false}
              />
              <div className="mt-8 rounded-xl bg-blue p-8 text-white">
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
                <ul className="mt-5 space-y-2">
                  {[
                    "Skim leaves and debris",
                    "Brush walls and steps",
                    "Test and balance pool chemicals",
                    "Empty skimmer & pump baskets",
                    "Check filtration systems",
                    "Backwash if needed",
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
                <div className="mt-6">
                  <Button
                    href="/services/pool-cleaning"
                    variant="primary"
                    size="md"
                  >
                    Schedule Service
                  </Button>
                </div>
              </div>
            </div>

            <div>
              <div className="rounded-xl bg-gray-light p-8">
                <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">
                  Why Choose Patio Pools?
                </h3>
                <ul className="mt-6 space-y-4">
                  {[
                    {
                      title: "55+ Years of Experience",
                      desc: "Family-owned and operated since 1969, serving the Tucson community for over five decades.",
                    },
                    {
                      title: "In-House Crews",
                      desc: "The only pool company in Southern Arizona with its own construction and service crews — full quality control.",
                    },
                    {
                      title: "Award-Winning Quality",
                      desc: "150+ national and international design awards, and a 2024 AQUA 100 inductee.",
                    },
                    {
                      title: "Community Commitment",
                      desc: "Over 50% of our team has been with us 10+ years. We support local charities and community events.",
                    },
                  ].map((item) => (
                    <li key={item.title}>
                      <h4 className="font-semibold text-navy">
                        {item.title}
                      </h4>
                      <p className="text-sm text-navy-mid mt-0.5">
                        {item.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Testimonials />

      <LocationCards />

      <CTABanner />
    </>
  );
}
