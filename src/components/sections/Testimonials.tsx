import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { testimonials } from "@/data/testimonials";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-yellow" : "text-gray"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section className="bg-gray-light py-16 lg:py-20">
      <Container>
        <SectionHeading
          title="What Our Clients Say"
          subtitle="Hear from homeowners across Southern Arizona who trust Patio Pools & Spas."
        />

        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.slice(0, 3).map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-xl bg-white p-6 shadow-md"
            >
              <StarRating rating={testimonial.rating} />
              <blockquote className="mt-4 text-sm text-navy-mid leading-relaxed">
                &ldquo;{testimonial.text}&rdquo;
              </blockquote>
              <div className="mt-4 border-t border-gray-light pt-4">
                <p className="font-semibold text-navy">{testimonial.name}</p>
                <p className="text-xs text-navy-mid">{testimonial.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
