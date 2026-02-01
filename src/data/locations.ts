export interface Location {
  id: string;
  name: string;
  city: string;
  address: string;
  phone: string;
  phoneRaw: string;
  hours: { days: string; time: string }[];
  mapUrl: string;
  coordinates: { lat: number; lng: number };
  slug: string;
}

export const locations: Location[] = [
  {
    id: "tucson",
    name: "Patio Pools & Spas — Tucson",
    city: "Tucson",
    address: "7960 East 22nd Street, Tucson, AZ 85710",
    phone: "(520) 886-1211",
    phoneRaw: "+15208861211",
    hours: [
      { days: "Monday – Friday", time: "8:00 AM – 6:00 PM" },
      { days: "Saturday", time: "9:00 AM – 5:00 PM" },
      { days: "Sunday", time: "10:00 AM – 4:00 PM" },
    ],
    mapUrl:
      "https://www.google.com/maps/place/Patio+Pools+%26+Spas/@32.2065,-110.8472,15z",
    coordinates: { lat: 32.2065, lng: -110.8472 },
    slug: "tucson",
  },
  {
    id: "sierra-vista",
    name: "Patio Pools & Spas — Sierra Vista",
    city: "Sierra Vista",
    address: "4148 Industry Drive, Ste. 1108-1109, Sierra Vista, AZ 85635",
    phone: "(520) 458-9291",
    phoneRaw: "+15204589291",
    hours: [
      { days: "By Appointment", time: "Call for service appointments" },
    ],
    mapUrl:
      "https://www.google.com/maps/place/Patio+Pools+%26+Spas/@31.5455,-110.2773,15z",
    coordinates: { lat: 31.5455, lng: -110.2773 },
    slug: "sierra-vista",
  },
  {
    id: "oro-valley",
    name: "Patio Pools & Spas — Oro Valley",
    city: "Oro Valley",
    address: "Oro Valley, AZ",
    phone: "(520) 886-1211",
    phoneRaw: "+15208861211",
    hours: [
      { days: "By Appointment", time: "Call for service appointments" },
    ],
    mapUrl:
      "https://www.google.com/maps/place/Oro+Valley,+AZ",
    coordinates: { lat: 32.3909, lng: -110.9665 },
    slug: "oro-valley",
  },
];

export const companyInfo = {
  name: "Patio Pools & Spas",
  email: "info@patiopoolsaz.com",
  licenseNumbers: "ROC# B6-32554 / A19-72589 / CS-239033",
  foundedYear: 1969,
  poolsBuilt: "15,000+",
  designAwards: "150+",
  website: "https://patiopoolsaz.com",
};
