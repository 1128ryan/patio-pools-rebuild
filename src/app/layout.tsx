import type { Metadata } from "next";
import { Oswald, Archivo } from "next/font/google";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { JsonLd, organizationSchema } from "@/components/seo/JsonLd";
import "./globals.css";

const oswald = Oswald({
  variable: "--font-oswald",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Patio Pools & Spas | Tucson Pool Builder & Pool Service Since 1969",
    template: "%s | Patio Pools & Spas",
  },
  description:
    "Tucson's trusted pool builder since 1969. New pool construction, renovation, cleaning, repair, and spa sales. 150+ design awards. Serving Tucson, Sierra Vista & Oro Valley. Call (520) 886-1211.",
  metadataBase: new URL("https://patiopoolsaz.com"),
  alternates: {
    canonical: "https://patiopoolsaz.com",
  },
  openGraph: {
    title: "Patio Pools & Spas | Tucson Pool Builder & Pool Service Since 1969",
    description:
      "Tucson's trusted pool builder since 1969. New pool construction, renovation, cleaning, repair, and spa sales. 150+ design awards.",
    url: "https://patiopoolsaz.com",
    siteName: "Patio Pools & Spas",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-US">
      <body className={`${oswald.variable} ${archivo.variable} antialiased`}>
        <JsonLd data={organizationSchema()} />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "Patio Pools & Spas",
            url: "https://patiopoolsaz.com",
          }}
        />
        <Header />
        <main id="main-content">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
