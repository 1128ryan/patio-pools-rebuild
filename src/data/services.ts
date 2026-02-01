export interface Service {
  id: string;
  title: string;
  shortTitle: string;
  slug: string;
  description: string;
  href: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "pool-construction",
    title: "New Pool Construction",
    shortTitle: "Pool Construction",
    slug: "pool-construction",
    description:
      "Custom residential and commercial pool design and construction. From concept to completion, our in-house crews deliver award-winning pools backed by a Lifetime Structural Warranty.",
    href: "/services/pool-construction",
    icon: "🏊",
    features: [
      "Custom 3D pool design",
      "In-house construction crews",
      "Lifetime Structural Warranty",
      "Residential & commercial",
      "Flexible financing options",
    ],
  },
  {
    id: "pool-renovation",
    title: "Pool Renovation & Remodeling",
    shortTitle: "Pool Renovation",
    slug: "pool-renovation",
    description:
      "Transform your existing pool with new finishes, decking, water features, and energy-efficient equipment. Free estimates available Monday through Saturday.",
    href: "/services/pool-renovation",
    icon: "🔧",
    features: [
      "Pebble Tec resurfacing",
      "New decking & coping",
      "Water feature additions",
      "Equipment upgrades",
      "Complete backyard overhauls",
    ],
  },
  {
    id: "pool-cleaning",
    title: "Pool Cleaning Services",
    shortTitle: "Pool Cleaning",
    slug: "pool-cleaning",
    description:
      "Professional weekly pool cleaning starting at $45/week with chemicals included. We handle skimming, brushing, chemical balancing, and equipment checks.",
    href: "/services/pool-cleaning",
    icon: "✨",
    features: [
      "Weekly cleaning from $45/week",
      "Chemicals included",
      "Water testing & balancing",
      "Skimming & brushing",
      "Equipment inspections",
    ],
  },
  {
    id: "pool-repair",
    title: "Pool Repair & Maintenance",
    shortTitle: "Pool Repair",
    slug: "pool-repair",
    description:
      "Expert pool equipment repair and preventive maintenance. From pump and filter service to leak detection, our certified technicians keep your pool running efficiently.",
    href: "/services/pool-repair",
    icon: "⚙️",
    features: [
      "Pump & motor repair",
      "Filter maintenance",
      "Leak detection & repair",
      "Equipment replacement",
      "Preventive maintenance plans",
    ],
  },
];
