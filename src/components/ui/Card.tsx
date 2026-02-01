import Link from "next/link";

interface CardProps {
  children: React.ReactNode;
  href?: string;
  className?: string;
  hover?: boolean;
}

export function Card({
  children,
  href,
  className = "",
  hover = true,
}: CardProps) {
  const baseClasses = `rounded-xl bg-white shadow-md overflow-hidden ${
    hover ? "transition-all duration-300 hover:shadow-xl hover:-translate-y-1" : ""
  } ${className}`;

  if (href) {
    return (
      <Link href={href} className={`block ${baseClasses}`}>
        {children}
      </Link>
    );
  }

  return <div className={baseClasses}>{children}</div>;
}
