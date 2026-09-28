import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const journeyImages = [
  { src: "/assets/images/bg/office1.png", alt: "WebAstral office collaboration" },
  { src: "/assets/images/bg/about11.png", alt: "Team working together" },
  { src: "/assets/images/bg/office3.png", alt: "Modern workplace culture" },
];

export default function JourneySection() {
  return (
    <section className="bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Our Journey" highlight="Through Time" />
        </FadeIn>
        <div className="mt-10 grid gap-4 md:grid-cols-3 md:gap-0">
          {journeyImages.map((image, index) => (
            <FadeIn key={image.src} delay={index * 0.08}>
              <div
                className={`relative aspect-[4/5] overflow-hidden ${
                  index === 1 ? "md:-translate-y-6" : index === 2 ? "md:translate-y-4" : ""
                }`}
                style={{
                  clipPath: "polygon(10% 0, 100% 0, 90% 100%, 0 100%)",
                }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
