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
                <Image
                  src={card.image}
                  alt={card.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-105"
                  sizes="(max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <h3 className="text-2xl font-semibold text-white">{card.title}</h3>
                  {"description" in card && card.description ? (
                    <p className="mt-2 text-sm leading-relaxed text-white/85">
                      {card.description}
                    </p>
                  ) : null}
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
