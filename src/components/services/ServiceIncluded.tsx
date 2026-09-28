import FadeIn from "@/components/ui/FadeIn";
import ServiceMedia from "@/components/services/ServiceMedia";
import { splitHeading } from "@/components/ui/SectionHeading";
import { getDedicatedPage } from "@/lib/dedicated-pages";
import { getServiceVisuals } from "@/lib/service-images";
import type { IncludedVariant, MediaSide } from "@/lib/service-layout";
import { getDeliverables, getIncludedIntro } from "@/lib/service-standard";
import type { ServiceDetail } from "@/lib/services";

function getIncludedCopy(service: ServiceDetail) {
  const extra = getDedicatedPage(service.slug);
  const fromExtra = extra?.pillars ?? [];
  const fromPoints = getDeliverables(service);
  const seen = new Set(fromExtra.map((item) => item.title.toLowerCase()));
  const items = [
    ...fromExtra,
    ...fromPoints.filter((item) => !seen.has(item.title.toLowerCase())),
  ].slice(0, 5);
  const heading = extra
    ? { lead: extra.headingLead, rest: extra.headingEmphasis }
    : splitHeading(service.h3 || "What you get");
  const intro = extra?.intro ?? getIncludedIntro(service);
  return { items, heading, intro };
}

export default function ServiceIncluded({
  service,
  variant = "split",
  media = "left",
}: {
  service: ServiceDetail;
  variant?: IncludedVariant;
  media?: MediaSide;
}) {
  const visuals = getServiceVisuals(service);
  const { items, heading, intro } = getIncludedCopy(service);

  const title = (
    <>
      <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Scope of work</p>
      <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
        {heading.lead ? <>{heading.lead} </> : null}
        <span className="font-bold text-zinc-900">{heading.rest}</span>
      </h2>
      <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">{intro}</p>
    </>
  );

  if (variant === "bento") {
    return (
      <section className="bg-[#f7f8fb] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">{title}</div>
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-6">
            {items.map((item, index) => (
              <FadeIn
                key={item.title}
                delay={index * 0.05}
                className={
                  index === 0
                    ? "sm:col-span-2 lg:col-span-3 lg:row-span-2"
                    : "lg:col-span-3"
                }
              >
                <article
                  className={`h-full rounded-[28px] bg-white p-6 shadow-sm sm:p-8 ${
                    index === 0 ? "lg:p-10" : ""
                  }`}
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <h3
                    className={`mt-3 font-semibold text-zinc-900 ${index === 0 ? "text-xl sm:text-2xl" : "text-base sm:text-lg"}`}
                  >
                    {item.title}
                  </h3>
                  {item.body ? (
                    <p className="mt-2 text-sm leading-relaxed text-zinc-600">{item.body}</p>
                  ) : null}
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    );
  }

  if (variant === "numbered") {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="max-w-3xl">{title}</div>
          </FadeIn>
          <div className="mt-12 divide-y divide-zinc-100 border-y border-zinc-100">
            {items.map((item, index) => (
              <FadeIn key={item.title} delay={index * 0.04}>
                <article className="grid gap-4 py-8 sm:grid-cols-[7rem_1fr] sm:items-start sm:gap-10">
                  <p className="text-4xl font-bold tabular-nums text-[#2f6fd6] sm:text-5xl">
                    {String(index + 1).padStart(2, "0")}
                  </p>
                  <div>
                    <h3 className="text-lg font-semibold text-zinc-900">{item.title}</h3>
                    {item.body ? (
                      <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">
                        {item.body}
                      </p>
                    ) : null}
                  </div>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    );
  }

  const image = (
    <FadeIn>
      <ServiceMedia src={visuals.detail} alt={`${service.title} engagement`} />
    </FadeIn>
  );
  const copy = (
    <FadeIn delay={0.08}>
      {title}
      <ul className="mt-8 space-y-5">
        {items.map((item) => (
          <li key={item.title} className="border-l-2 border-[#2f6fd6] pl-4">
            <p className="text-sm font-semibold text-zinc-900 sm:text-base">{item.title}</p>
            {item.body ? (
              <p className="mt-1 text-sm leading-relaxed text-zinc-600">{item.body}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </FadeIn>
  );

  if (media === "stack") {
    return (
      <section className="bg-[#f7f8fb] py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">{copy}</div>
        <div className="mx-auto mt-10 max-w-5xl px-4 sm:px-6 lg:px-8">{image}</div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        {media === "right" ? (
          <>
            {copy}
            {image}
          </>
        ) : (
          <>
            {image}
            {copy}
          </>
        )}
      </div>
    </section>
  );
}
