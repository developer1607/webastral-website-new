import FadeIn from "@/components/ui/FadeIn";
import ServiceMedia from "@/components/services/ServiceMedia";
import { splitHeading } from "@/components/ui/SectionHeading";
import { getServiceVisuals } from "@/lib/service-images";
import type { MediaSide } from "@/lib/service-layout";
import type { ServiceDetail } from "@/lib/services";

export default function ServiceOverview({
  service,
  media = "right",
}: {
  service: ServiceDetail;
  media?: MediaSide;
}) {
  const heading = splitHeading(service.h2);
  const visuals = getServiceVisuals(service);
  const sentences = service.p2.split(/(?<=\.)\s+/).filter(Boolean);
  const paragraphs = [sentences[0], sentences.slice(1).join(" ")].filter(Boolean);

  const copy = (
    <FadeIn>
      <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Approach</p>
      <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
        {heading.lead ? <>{heading.lead} </> : null}
        <span className="font-bold text-zinc-900">{heading.rest}</span>
      </h2>
      {paragraphs.map((paragraph) => (
        <p
          key={paragraph.slice(0, 24)}
          className="mt-4 text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-base"
        >
          {paragraph}
        </p>
      ))}
    </FadeIn>
  );

  const image = (
    <FadeIn delay={0.1}>
      <ServiceMedia src={visuals.overview} alt={`${service.title} in delivery`} />
    </FadeIn>
  );

  if (media === "stack") {
    return (
      <section className="bg-white py-12 sm:py-16 lg:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          {copy}
        </div>
        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">{image}</div>
      </section>
    );
  }

  return (
    <section className="bg-white py-12 sm:py-16 lg:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {media === "left" ? (
          <>
            {image}
            {copy}
          </>
        ) : (
          <>
            {copy}
            {image}
          </>
        )}
      </div>
    </section>
  );
}
