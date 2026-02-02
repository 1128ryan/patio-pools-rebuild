import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { services } from "@/data/services";

interface RelatedServicesProps {
  currentServiceId: string;
}

export function RelatedServices({ currentServiceId }: RelatedServicesProps) {
  const related = services.filter((s) => s.id !== currentServiceId);

  return (
    <section className="bg-gray-light py-16 lg:py-20">
      <Container>
        <SectionHeading
          title="Other Services"
          subtitle="Explore our full range of pool and spa services."
        />
        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-3">
          {related.map((service) => (
            <Link
              key={service.id}
              href={service.href}
              className="group rounded-xl bg-white p-6 shadow-sm hover:shadow-md transition-all text-center"
            >
              <div className="text-3xl mb-3" aria-hidden="true">
                {service.icon}
              </div>
              <h3 className="font-heading text-lg font-bold text-navy uppercase tracking-wide group-hover:text-blue transition-colors">
                {service.shortTitle}
              </h3>
              <p className="mt-2 text-sm text-navy-mid leading-relaxed">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </Container>
    </section>
  );
}
