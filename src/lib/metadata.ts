import type { Metadata } from "next";

const SITE_URL = "https://patiopoolsaz.com";
const SITE_NAME = "Patio Pools & Spas";

interface PageMetadataOptions {
  title: string;
  description: string;
  path: string;
  ogImage?: string;
}

export function generatePageMetadata({
  title,
  description,
  path,
  ogImage = "/images/og-default.jpg",
}: PageMetadataOptions): Metadata {
  const url = `${SITE_URL}${path}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SITE_NAME,
      images: [
        {
          url: `${SITE_URL}${ogImage}`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [`${SITE_URL}${ogImage}`],
    },
  };
}
