import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

interface CTABannerProps {
  title?: string;
  subtitle?: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  variant?: "blue" | "navy";
}

export function CTABanner({
  title = "Ready to Build Your Dream Pool?",
  subtitle = "Contact us today for a free, no-obligation quote. Our team is ready to help you create the perfect backyard oasis.",
  primaryCTA = { label: "Get a Free Quote", href: "/contact" },
  secondaryCTA = { label: "Call (520) 886-1211", href: "tel:+15208861211" },
  variant = "blue",
}: CTABannerProps) {
  const bg = variant === "blue" ? "bg-blue" : "bg-navy";

  return (
    <section className={`${bg} py-14 lg:py-16`}>
      <Container className="text-center">
        <h2 className="font-heading text-3xl font-bold text-white uppercase tracking-wide sm:text-4xl">
          {title}
        </h2>
        <p className="mt-3 text-lg text-white/80 max-w-2xl mx-auto">
          {subtitle}
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Button href={primaryCTA.href} variant="primary" size="lg">
            {primaryCTA.label}
          </Button>
          <Button href={secondaryCTA.href} variant="outline" size="lg">
            {secondaryCTA.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
