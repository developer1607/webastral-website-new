import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import type { DedicatedPageConfig } from "@/lib/dedicated-pages";
import { getRelatedServices } from "@/lib/services";

export default function ServiceRelatedBand({
  slug,
  page,
}: {
  slug: string;
  page: DedicatedPageConfig;
}) {
  const related = getRelatedServices(slug, 4).filter(
    (service) => service.category === page.relatedCategory,
  );
  if (!related.length) return null;

  return (
    <section className="bg-[#0b0d17] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-normal leading-snug sm:text-3xl lg:text-4xl">
            {page.relatedHeadingLead}{" "}
            <span className="font-bold">{page.relatedHeadingEmphasis}</span>{" "}
            work
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
            {page.relatedIntro}
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-zinc-900"
          >
            View all Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2">
          {related.map((service, index) => (
            <FadeIn key={service.slug} delay={index * 0.06}>
              <Link
                href={`/services/${service.slug}`}
                className="group flex h-full flex-col overflow-hidden rounded-2xl bg-white text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition duration-700 group-hover:scale-105"
                    sizes="(max-width: 1024px) 50vw, 280px"
                  />
                </div>
                <div className="p-5">
                  <h3 className="text-base font-semibold">{service.title}</h3>
                  <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-zinc-600">
                    {service.p1}
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
