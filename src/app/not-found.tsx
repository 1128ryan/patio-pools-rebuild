import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <section className="py-20 lg:py-32">
      <Container>
        <div className="text-center max-w-xl mx-auto">
          <p className="font-heading text-6xl font-bold text-yellow">404</p>
          <h1 className="mt-4 font-heading text-3xl font-bold text-navy uppercase tracking-wide sm:text-4xl">
            Page Not Found
          </h1>
          <p className="mt-4 text-navy-mid leading-relaxed">
            The page you are looking for may have been moved or no longer exists.
            Use the links below to find what you need.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="/" variant="primary" size="lg">
              Back to Home
            </Button>
            <Button href="/contact" variant="secondary" size="lg">
              Contact Us
            </Button>
          </div>
          <div className="mt-12 text-left">
            <h2 className="font-heading text-lg font-bold text-navy uppercase tracking-wide text-center">
              Popular Pages
            </h2>
            <ul className="mt-4 grid grid-cols-1 gap-2 sm:grid-cols-2">
              {[
                { label: "New Pool Construction", href: "/services/pool-construction" },
                { label: "Pool Renovation", href: "/services/pool-renovation" },
                { label: "Pool Cleaning ($45/wk)", href: "/services/pool-cleaning" },
                { label: "Pool Repair", href: "/services/pool-repair" },
                { label: "Spas & Hot Tubs", href: "/spas" },
                { label: "About Us", href: "/about" },
                { label: "Our Locations", href: "/contact" },
                { label: "Tucson Location", href: "/locations/tucson" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="block rounded-lg border border-gray px-4 py-3 text-sm text-navy hover:bg-gray-light hover:text-blue transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <p className="mt-10 text-sm text-navy-mid">
            Need help? Call us at{" "}
            <a href="tel:+15208861211" className="text-blue font-semibold hover:text-blue-dark">
              (520) 886-1211
            </a>
          </p>
        </div>
      </Container>
    </section>
  );
}
