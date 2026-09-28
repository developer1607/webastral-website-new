"use client";

import FadeIn from "@/components/ui/FadeIn";
import type { AudienceVariant } from "@/lib/service-layout";
import { getServiceAudience } from "@/lib/service-standard";
import type { ServiceDetail } from "@/lib/services";

function Heading({
  eyebrow,
  statement,
  light,
}: {
  eyebrow: string;
  statement: string;
  light?: boolean;
}) {
  const parts = eyebrow.split(" and ");
  return (
    <>
      <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Who this is for</p>
      <h2
        className={`mt-3 max-w-3xl text-2xl font-normal leading-snug sm:text-3xl lg:text-4xl ${light ? "text-zinc-200" : "text-zinc-700"}`}
      >
        {parts.length > 1 ? (
          <>
            {parts[0]} and{" "}
            <span className={`font-bold ${light ? "text-white" : "text-zinc-900"}`}>
              {parts.slice(1).join(" and ")}
            </span>
          </>
        ) : (
          <span className={`font-bold ${light ? "text-white" : "text-zinc-900"}`}>{eyebrow}</span>
        )}
      </h2>
      <p className={`mt-4 max-w-3xl text-sm leading-relaxed sm:text-base ${light ? "text-zinc-300" : "text-zinc-600"}`}>
        {statement}
      </p>
    </>
  );
}

export default function ServiceAudience({
  service,
  variant = "cards",
}: {
  service: ServiceDetail;
  variant?: AudienceVariant;
}) {
  const audience = getServiceAudience(service);
  const sides = [audience.b2b, audience.b2c];

  if (variant === "dark") {
    return (
      <section className="bg-[#0b0d17] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Heading eyebrow={audience.eyebrow} statement={audience.statement} light />
          </FadeIn>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {sides.map((side, index) => (
              <FadeIn key={side.title} delay={index * 0.08}>
                <article className="h-full rounded-[28px] border border-white/10 bg-white/5 p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#7aa4ea]">
                    {index === 0 ? "B2B" : "B2C"}
                  </p>
                  <h3 className="mt-3 text-lg font-semibold">{side.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-zinc-300 sm:text-base">{side.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.12}>
            <p className="mt-10 text-sm font-medium text-zinc-400">Industries we ship in</p>
            <ul className="mt-4 flex flex-wrap gap-2">
              {audience.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-medium text-zinc-200"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    );
  }

  if (variant === "stacked") {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Heading eyebrow={audience.eyebrow} statement={audience.statement} />
          </FadeIn>
          <div className="mt-10 space-y-8">
            {sides.map((side, index) => (
              <FadeIn key={side.title} delay={index * 0.08}>
                <article className="border-l-2 border-[#2f6fd6] pl-5">
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                    {index === 0 ? "B2B" : "B2C"}
                  </p>
                  <h3 className="mt-2 text-lg font-semibold text-zinc-900">{side.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-base">{side.body}</p>
                </article>
              </FadeIn>
            ))}
          </div>
          <FadeIn delay={0.12}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {audience.industries.map((industry) => (
                <li
                  key={industry}
                  className="rounded-full bg-[#f7f8fb] px-4 py-2 text-sm font-medium text-zinc-700"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    );
  }

  if (variant === "inline") {
    return (
      <section className="border-y border-zinc-100 bg-white py-14 sm:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <FadeIn>
              <Heading eyebrow={audience.eyebrow} statement={audience.statement} />
            </FadeIn>
            <FadeIn delay={0.08}>
              <div className="grid gap-4 sm:grid-cols-2">
                {sides.map((side, index) => (
                  <p key={side.title} className="text-sm leading-relaxed text-zinc-600">
                    <span className="font-semibold text-[#2f6fd6]">
                      {index === 0 ? "B2B. " : "B2C. "}
                    </span>
                    {side.body}
                  </p>
                ))}
              </div>
            </FadeIn>
          </div>
          <FadeIn delay={0.12}>
            <ul className="mt-8 flex flex-wrap gap-2">
              {audience.industries.map((industry) => (
                <li
                  key={industry}
                  className="text-sm font-medium text-zinc-500 after:ml-2 after:text-zinc-300 after:content-['/'] last:after:content-none"
                >
                  {industry}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <Heading eyebrow={audience.eyebrow} statement={audience.statement} />
        </FadeIn>
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          {sides.map((side, index) => (
            <FadeIn key={side.title} delay={index * 0.08}>
              <article className="h-full rounded-[28px] bg-white p-8 shadow-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                  {index === 0 ? "B2B" : "B2C"}
                </p>
                <h3 className="mt-3 text-lg font-semibold text-zinc-900">{side.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">{side.body}</p>
              </article>
            </FadeIn>
          ))}
        </div>
        <FadeIn delay={0.12}>
          <p className="mt-10 text-sm font-medium text-zinc-500">Industries we ship in</p>
          <ul className="mt-4 flex flex-wrap gap-2">
            {audience.industries.map((industry) => (
              <li
                key={industry}
                className="rounded-full border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-700"
              >
                {industry}
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
}
