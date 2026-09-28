import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

export default function WorkSection() {
  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Our Work"
            highlight="Speaks for Itself"
            description="From social apps and e-commerce platforms to sophisticated web applications, our portfolio shows how we turn ideas into products people use."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-12 overflow-hidden rounded-[32px] bg-[#f7f8fb] shadow-sm lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-2xl font-bold tracking-tight text-zinc-900">
                <span className="text-orange-500">X</span>presso
              </p>
              <h3 className="mt-4 text-2xl font-semibold text-zinc-900 sm:text-3xl">
                SEO Optimized Architecture
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                We engineer high tech solutions for your software needs. Be it website
                development, digital marketing, or app development — we plan, design,
                and ship products that are fast, searchable, and built to convert.
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex w-fit rounded-full bg-[#2f6fd6] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]"
              >
                View Portfolio
              </Link>
            </div>
            <div className="relative min-h-[260px] aspect-[16/11] lg:aspect-auto lg:min-h-[420px]">
              <Image
                src="/assets/images/bg/portfolio12.png"
                alt="Xpresso featured client project"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
