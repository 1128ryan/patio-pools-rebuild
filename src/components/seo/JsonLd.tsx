interface JsonLdProps {
  data: Record<string, unknown>;
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Patio Pools & Spas",
    url: "https://patiopoolsaz.com",
    logo: "https://patiopoolsaz.com/images/logo.webp",
    foundingDate: "1969",
    description:
      "Southern Arizona's trusted pool builder and full-service pool company since 1969. New pool construction, renovation, cleaning, repair, and spa sales in Tucson, Sierra Vista, and Oro Valley.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "7960 East 22nd Street",
      addressLocality: "Tucson",
      addressRegion: "AZ",
      postalCode: "85710",
      addressCountry: "US",
    },
    telephone: "+15208861211",
    email: "info@patiopoolsaz.com",
    sameAs: [
      "https://www.facebook.com/patiopools",
      "https://x.com/patiopools",
      "https://www.linkedin.com/company/patio-pools-spas",
      "https://www.instagram.com/patiopoolsspas",
      "https://www.youtube.com/@patiopools",
    ],
    areaServed: [
      { "@type": "City", name: "Tucson" },
      { "@type": "City", name: "Sierra Vista" },
      { "@type": "City", name: "Oro Valley" },
      { "@type": "City", name: "Marana" },
      { "@type": "City", name: "Sahuarita" },
      { "@type": "City", name: "Green Valley" },
      { "@type": "City", name: "Vail" },
      { "@type": "City", name: "Catalina Foothills" },
    ],
  };
}

export function localBusinessSchema(location: {
  name: string;
  address: string;
  city: string;
  phone: string;
  lat: number;
  lng: number;
  hours?: string[];
}) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `https://patiopoolsaz.com/locations/${location.city.toLowerCase().replace(/ /g, "-")}`,
    name: location.name,
    image: "https://patiopoolsaz.com/images/logo.webp",
    telephone: location.phone,
    email: "info@patiopoolsaz.com",
    address: {
      "@type": "PostalAddress",
      streetAddress: location.address.split(",")[0],
      addressLocality: location.city,
      addressRegion: "AZ",
      addressCountry: "US",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.lat,
      longitude: location.lng,
    },
    url: "https://patiopoolsaz.com",
    priceRange: "$$",
    ...(location.hours && {
      openingHoursSpecification: location.hours,
    }),
  };
}

export function serviceSchema(service: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.name,
    description: service.description,
    url: `https://patiopoolsaz.com${service.url}`,
    provider: {
      "@type": "Organization",
      name: "Patio Pools & Spas",
    },
    areaServed: {
      "@type": "State",
      name: "Arizona",
    },
  };
}

export function faqSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}

export function breadcrumbSchema(
  items: { name: string; href: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `https://patiopoolsaz.com${item.href}`,
    })),
  };
}
