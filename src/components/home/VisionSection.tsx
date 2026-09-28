import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";

export default function VisionSection() {
  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid items-stretch gap-8 lg:grid-cols-2 lg:gap-12">
          <div className="flex flex-col gap-8 lg:gap-10">
            <FadeIn>
              <div className="max-w-xl">
                <h2 className="text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
                  We Envision, Design and Create{" "}
                  <span className="font-bold text-zinc-900">
                    Vision that speaks for itself.
                  </span>
                </h2>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-base">
                  We are a world renowned IT company based out of India. We engineer
                  high tech solutions for your software needs. Be it website
                  development, digital marketing, app development, you name it, we
                  do it!
                </p>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                  From discovery to launch, our team plans, designs, and ships
                  products that help brands grow with clarity, speed, and lasting
                  impact.
                </p>
              </div>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl">
                <Image
                  src="/images/home/vision/team-horizontal.png"
                  alt="WebAstral team collaborating at a planning table"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.15} className="h-full">
            <div className="relative min-h-[280px] w-full overflow-hidden rounded-2xl sm:min-h-[360px] lg:min-h-full lg:h-full">
              <Image
                src="/images/home/vision/team-vertical.png"
                alt="WebAstral team working in a modern office"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
