import { Container } from "@/components/ui/Container";

const stats = [
  { value: "Since 1969", label: "Serving Southern Arizona" },
  { value: "15,000+", label: "Pools Built" },
  { value: "150+", label: "Design Awards" },
  { value: "AQUA 100", label: "2024 Inductee" },
];

export function StatsBar() {
  return (
    <section className="bg-blue py-10">
      <Container>
        <div className="grid grid-cols-2 gap-6 sm:grid-cols-4">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-heading text-2xl font-bold text-yellow uppercase tracking-wide sm:text-3xl">
                {stat.value}
              </div>
              <div className="mt-1 text-sm text-white/80">{stat.label}</div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
