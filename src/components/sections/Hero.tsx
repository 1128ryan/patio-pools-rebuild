import { Button } from "@/components/ui/Button";

interface HeroProps {
  title: string;
  highlight?: string;
  subtitle: string;
  primaryCTA?: { label: string; href: string };
  secondaryCTA?: { label: string; href: string };
  backgroundImage?: string;
  overlay?: boolean;
}

export function Hero({
  title,
  highlight,
  subtitle,
  primaryCTA,
  secondaryCTA,
  backgroundImage,
  overlay = true,
}: HeroProps) {
  return (
    <section
      className="relative min-h-[500px] flex items-center lg:min-h-[600px]"
      style={
        backgroundImage
          ? {
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Gradient fallback when no image */}
      {!backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-blue" />
      )}

      {/* Overlay */}
      {overlay && backgroundImage && (
        <div className="absolute inset-0 bg-gradient-to-r from-navy/85 via-navy/70 to-navy/40" />
      )}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
        <div className="max-w-2xl">
          <h1 className="font-heading text-4xl font-bold text-white uppercase tracking-wide sm:text-5xl lg:text-6xl">
            {title}
            {highlight && (
              <>
                {" "}
                <span className="text-yellow">{highlight}</span>
              </>
            )}
          </h1>
          <p className="mt-4 text-lg text-gray sm:text-xl leading-relaxed">
            {subtitle}
          </p>
          {(primaryCTA || secondaryCTA) && (
            <div className="mt-8 flex flex-wrap gap-4">
              {primaryCTA && (
                <Button href={primaryCTA.href} variant="primary" size="lg">
                  {primaryCTA.label}
                </Button>
              )}
              {secondaryCTA && (
                <Button href={secondaryCTA.href} variant="outline" size="lg">
                  {secondaryCTA.label}
                </Button>
              )}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
