import Link from "next/link";
import { JsonLd, breadcrumbSchema } from "@/components/seo/JsonLd";

interface BreadcrumbItem {
  label: string;
  href: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export function Breadcrumbs({ items }: BreadcrumbsProps) {
  const allItems = [{ label: "Home", href: "/" }, ...items];

  return (
    <>
      <JsonLd
        data={breadcrumbSchema(
          allItems.map((item) => ({ name: item.label, href: item.href }))
        )}
      />
      <nav aria-label="Breadcrumb" className="bg-gray-light py-3">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-navy-mid">
            {allItems.map((item, index) => (
              <li key={item.href} className="flex items-center gap-1.5">
                {index > 0 && (
                  <svg
                    className="w-3.5 h-3.5 text-gray"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                )}
                {index === allItems.length - 1 ? (
                  <span className="font-medium text-navy" aria-current="page">
                    {item.label}
                  </span>
                ) : (
                  <Link
                    href={item.href}
                    className="hover:text-blue transition-colors"
                  >
                    {item.label}
                  </Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
}
