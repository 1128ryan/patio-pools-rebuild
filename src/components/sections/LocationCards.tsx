import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { locations } from "@/data/locations";

export function LocationCards() {
  return (
    <section className="py-16 lg:py-20">
      <Container>
        <SectionHeading
          title="Our Locations"
          subtitle="Visit one of our stores in Southern Arizona."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {locations.map((location) => (
            <div
              key={location.id}
              className="rounded-xl border border-gray bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="font-heading text-xl font-bold text-navy uppercase tracking-wide">
                {location.city}
              </h3>
              <p className="mt-2 text-sm text-navy-mid">{location.address}</p>

              <div className="mt-4 space-y-1">
                {location.hours.map((h) => (
                  <div key={h.days} className="flex justify-between text-sm">
                    <span className="text-navy-mid">{h.days}</span>
                    <span className="font-medium text-navy">{h.time}</span>
                  </div>
                ))}
              </div>

              <div className="mt-5 flex items-center justify-between">
                <a
                  href={`tel:${location.phoneRaw}`}
                  className="font-heading text-lg font-bold text-blue hover:text-blue-dark transition-colors"
                >
                  {location.phone}
                </a>
                <Link
                  href={`/locations/${location.slug}`}
                  className="text-sm font-semibold text-yellow hover:text-yellow-dark transition-colors"
                >
                  View Store →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
