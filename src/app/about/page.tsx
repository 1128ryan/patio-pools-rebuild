import type { Metadata } from "next";
import { generatePageMetadata } from "@/lib/metadata";
import { Hero } from "@/components/sections/Hero";
import { StatsBar } from "@/components/sections/StatsBar";
import { CTABanner } from "@/components/sections/CTABanner";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = generatePageMetadata({
  title: "About Patio Pools & Spas | Tucson Pool Company Since 1969",
  description:
    "Family-owned pool company serving Tucson since 1969. 15,000+ pools built, 150+ design awards, AQUA 100 inductee. Learn about our history, team, and community commitment.",
  path: "/about",
});

const timeline = [
  { year: "1946", title: "The Beginning", description: "Gene Ragel Sr. begins pool construction alongside Johnny Austad, laying the foundation for what would become Southern Arizona's premier pool company." },
  { year: "1958", title: "Ragel-Wilson Pools", description: "The partnership formalizes as Ragel-Wilson Pools, establishing a reputation for quality pool construction in Tucson." },
  { year: "1969", title: "Patio Pools is Born", description: "The Patio Pools brand launches. Gene Ragel Sr. and Jon Evans acquire the company in 1970 and rapidly grow it into the region's dominant builder." },
  { year: "1972", title: "Master Pools Guild", description: "Patio Pools joins the prestigious Master Pools Guild, an invitation-only group for the highest quality pool builders worldwide." },
  { year: "1978", title: "Record Year", description: "Patio Pools completes 817 pool projects in a single year — a company record that demonstrates the trust the community places in us." },
  { year: "1995", title: "Sierra Vista Expansion", description: "A new location opens in Sierra Vista, extending our services to the growing communities of Cochise County." },
  { year: "2013", title: "Largest Pebble Tec Pool", description: "We build the largest Pebble Tec pool in Southern Arizona, showcasing our ability to handle projects of any scale." },
  { year: "2024", title: "AQUA 100 Inductee", description: "Patio Pools & Spas is inducted into the AQUA 100 — an exclusive honor given to just 10 North American pool and spa retailers each year." },
];

const communityPartners = [
  "American Liver Foundation",
  "Arizona Heart Foundation",
  "Children's Miracle Network",
  "Boys & Girls Clubs",
  "Special Olympics",
  "Make-A-Wish Foundation",
  "Drowning Prevention Programs",
  "Local Youth Sports Leagues",
];

export default function AboutPage() {
  return (
    <>
      <Hero
        title="About"
        highlight="Patio Pools & Spas"
        subtitle="Southern Arizona's largest and most awarded custom pool and spa company. Family-owned and operated since 1969."
      />

      <Breadcrumbs items={[{ label: "About", href: "/about" }]} />

      <StatsBar />

      {/* Mission */}
      <section className="py-16 lg:py-20">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading title="Our Story" />
            <p className="mt-8 text-lg text-navy-mid leading-relaxed">
              For over five decades, Patio Pools &amp; Spas has proudly served Tucson, Sierra Vista, and the entire Southern Arizona region as a locally owned and operated company specializing in pool and spa construction, retail, and service.
            </p>
            <p className="mt-4 text-lg text-navy-mid leading-relaxed">
              Our commitment to quality, customer satisfaction, and attention to detail has made us the trusted choice for pools and spas in the area. We are not just a business — we are a family. Over 50% of our team has been with us for 10 or more years, and we actively engage with and support our local community.
            </p>
          </div>
        </Container>
      </section>

      {/* Timeline */}
      <section className="bg-navy py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Our History"
            subtitle="From humble beginnings to Southern Arizona's premier pool company."
            className="[&_h2]:text-white [&_p]:text-gray"
          />
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-yellow sm:left-1/2 sm:-translate-x-0.5" />

              {timeline.map((item, index) => (
                <div key={item.year} className={`relative flex gap-6 pb-10 ${index % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}>
                  {/* Dot */}
                  <div className="absolute left-4 w-3 h-3 rounded-full bg-yellow ring-4 ring-navy sm:left-1/2 sm:-translate-x-1.5 mt-1.5" />

                  {/* Content */}
                  <div className={`ml-12 sm:ml-0 sm:w-[calc(50%-2rem)] ${index % 2 === 0 ? "sm:pr-8" : "sm:pl-8"}`}>
                    <span className="font-heading text-lg font-bold text-yellow">
                      {item.year}
                    </span>
                    <h3 className="font-heading text-base font-semibold text-white uppercase tracking-wide mt-1">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-gray leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      {/* Awards */}
      <section className="py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Awards & Recognition"
            subtitle="Our dedication to quality has been recognized at the highest levels of the pool and spa industry."
          />
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {[
              { title: "AQUA 100 Inductee", year: "2024", desc: "An exclusive honor bestowed to just 10 North American pool and spa retailers each year." },
              { title: "150+ Design Awards", year: "1969–Present", desc: "National and international recognition for pool design excellence across residential and commercial projects." },
              { title: "A+ BBB Rating", year: "Since 1970", desc: "Maintaining the highest Better Business Bureau rating for over 50 consecutive years." },
              { title: "Master Pools Guild", year: "Since 1972", desc: "Member of the prestigious invitation-only group for the world's finest pool builders." },
              { title: "15,000+ Pools Built", year: "1969–Present", desc: "More pools built than any other company in Southern Arizona history." },
              { title: "20+ Certified Operators", year: "Current", desc: "The largest team of certified pool operators in the region, ensuring expert service." },
            ].map((award) => (
              <div key={award.title} className="rounded-xl bg-gray-light p-6 text-center">
                <h3 className="font-heading text-lg font-bold text-blue uppercase tracking-wide">
                  {award.title}
                </h3>
                <p className="text-xs font-semibold text-yellow mt-1">{award.year}</p>
                <p className="mt-2 text-sm text-navy-mid">{award.desc}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* Community */}
      <section className="bg-gray-light py-16 lg:py-20">
        <Container>
          <SectionHeading
            title="Community Involvement"
            subtitle="We believe in giving back to the communities that have supported us for over five decades."
          />
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {communityPartners.map((partner) => (
              <span
                key={partner}
                className="rounded-full bg-white px-5 py-2.5 text-sm font-medium text-navy shadow-sm border border-gray"
              >
                {partner}
              </span>
            ))}
          </div>
        </Container>
      </section>

      <CTABanner
        title="Join the Patio Pools Family"
        subtitle="Experience the difference that 55+ years of dedication, quality, and community commitment makes."
        variant="navy"
      />
    </>
  );
}
