"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { JsonLd, faqSchema } from "@/components/seo/JsonLd";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  title?: string;
  subtitle?: string;
  faqs: FAQItem[];
}

export function FAQ({
  title = "Frequently Asked Questions",
  subtitle,
  faqs,
}: FAQProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-16 lg:py-20">
      <JsonLd data={faqSchema(faqs)} />
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />

        <div className="mt-12 max-w-3xl mx-auto divide-y divide-gray">
          {faqs.map((faq, index) => (
            <div key={index}>
              <button
                className="flex w-full items-center justify-between py-5 text-left"
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                aria-expanded={openIndex === index}
              >
                <span className="font-heading text-lg font-semibold text-navy uppercase tracking-wide pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-5 h-5 text-blue flex-shrink-0 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="pb-5 text-navy-mid leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
