export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export const navigation: NavItem[] = [
  {
    label: "Services",
    href: "/services",
    children: [
      { label: "New Pool Construction", href: "/services/pool-construction" },
      { label: "Pool Renovation & Remodeling", href: "/services/pool-renovation" },
      { label: "Pool Cleaning", href: "/services/pool-cleaning" },
      { label: "Pool Repair & Maintenance", href: "/services/pool-repair" },
    ],
  },
  {
    label: "Spas & Hot Tubs",
    href: "/spas",
  },
  {
    label: "Locations",
    href: "#",
    children: [
      { label: "Tucson", href: "/locations/tucson" },
      { label: "Sierra Vista", href: "/locations/sierra-vista" },
      { label: "Oro Valley", href: "/locations/oro-valley" },
    ],
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];
