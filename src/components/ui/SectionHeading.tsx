interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  as?: "h2" | "h3";
  className?: string;
}

export function SectionHeading({
  title,
  subtitle,
  centered = true,
  as: Tag = "h2",
  className = "",
}: SectionHeadingProps) {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      <Tag className="font-heading text-3xl font-bold text-navy uppercase tracking-wide sm:text-4xl">
        {title}
      </Tag>
      {subtitle && (
        <p className="mt-3 text-lg text-navy-mid max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      <div
        className={`mt-4 flex gap-1 ${centered ? "justify-center" : ""}`}
        aria-hidden="true"
      >
        <span className="h-1 w-8 rounded-full bg-yellow" />
        <span className="h-1 w-8 rounded-full bg-blue" />
        <span className="h-1 w-8 rounded-full bg-yellow" />
      </div>
    </div>
  );
}
