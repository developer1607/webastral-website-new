import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { insightCards } from "@/lib/content";

export default function InsightsSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="News and" highlight="Insights" />
        </FadeIn>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {insightCards.map((card, index) => (
            <FadeIn key={card.title} delay={index * 0.08}>
              <Link
                href={card.href}
                className="group relative block aspect-[3/4] overflow-hidden rounded-3xl"
              >
                {/* Image */}
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />

                {/* Bottom black gradient - ALWAYS visible */}
                <div
                  className="
                    absolute inset-x-0 bottom-0 h-1/2
                    bg-gradient-to-t
                    from-black/90
                    via-black/55
                    to-transparent
                    opacity-100
                  "
                />

                {/* Content */}
                <div className="absolute inset-x-0 bottom-0 p-6">
                  {/* Title - always visible */}
                  <h3
                    className="
                      text-2xl font-semibold text-white
                      transition-transform duration-500
                      group-hover:-translate-y-1
                    "
                  >
                    {card.title}
                  </h3>

                  {/* Description - visible only on hover */}
                  <p
                    className="
                      mt-2 max-h-0 overflow-hidden
                      text-sm leading-relaxed text-white/85
                      opacity-0
                      transition-all duration-500
                      group-hover:max-h-24
                      group-hover:opacity-100
                    "
                  >
                    {card.description}
                  </p>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}