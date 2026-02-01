import { Card } from "@/components/ui/Card";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

export function ServiceCards() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          title="Our Services"
          subtitle="Patio Pools & Spas is a full-service pool company. From new construction to weekly cleaning, we do it all."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.id} href={service.href}>
              <div className="p-6">
                <div className="text-4xl mb-4" aria-hidden="true">
                  {service.icon}
                </div>
                <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">
                  {service.shortTitle}
                </h3>
                <p className="mt-2 text-sm text-navy-mid leading-relaxed">
                  {service.description}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-blue">
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
  );
}
