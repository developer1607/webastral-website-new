"use client";

import ServiceFeatureCard from "@/components/services/ServiceFeatureCard";
import { SectionReveal, StaggerItem, StaggerSection } from "@/components/services/ServiceMotion";
import { splitHeading } from "@/components/ui/SectionHeading";
import { getCardIcon, getWhyCards, getWhyHeading } from "@/lib/service-landing";
import type { ServiceDetail } from "@/lib/services";

export function ServiceWhy({ service }: { service: ServiceDetail }) {
  const cards = getWhyCards(service);
  const heading = splitHeading(getWhyHeading(service));

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            {heading.lead ? <>{heading.lead} </> : null}
            <span className="font-bold text-zinc-900">{heading.rest}</span>
          </h2>
        </SectionReveal>

        <StaggerSection className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
          {cards.map((item, index) => (
            <StaggerItem key={item.title}>
              <ServiceFeatureCard
                image={getCardIcon(service, index)}
                title={item.title}
                description={item.description}
                className="bg-white"
              />
            </StaggerItem>
          ))}
        </StaggerSection>
      </div>
    </section>
  );
}
