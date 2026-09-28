"use client";

import Image from "next/image";
import QuoteButton from "@/components/services/QuoteButton";
import ServiceFeatureCard from "@/components/services/ServiceFeatureCard";
import { SectionReveal, StaggerItem, StaggerSection } from "@/components/services/ServiceMotion";
import { splitHeading } from "@/components/ui/SectionHeading";
import { getServiceVisuals } from "@/lib/service-images";
import type { ServiceDetail } from "@/lib/services";
import {
  getBannerIntro,
  getBannerTitle,
  getCardIcon,
  getServiceHighlights,
} from "@/lib/service-landing";

export default function ServiceHighlights({ service }: { service: ServiceDetail }) {
  const highlights = getServiceHighlights(service);
  const visuals = getServiceVisuals(service);
  const banner = splitHeading(getBannerTitle(service));

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-3xl bg-zinc-900">
            <Image
              src={visuals.banner}
              alt=""
              fill
              className="object-cover opacity-50"
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0b0d17]/90 via-[#0b0d17]/70 to-transparent" />
            <div className="relative px-6 py-10 sm:px-10 sm:py-12 lg:max-w-2xl">
              <h2 className="text-2xl font-normal leading-snug text-white sm:text-3xl lg:text-4xl">
                {banner.lead ? <>{banner.lead} </> : null}
                <span className="font-bold">{banner.rest}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-200 sm:text-base">
                {getBannerIntro(service)}
              </p>
              <QuoteButton className="mt-6 inline-flex rounded-full bg-[#2f6fd6] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]">
                Hire a Developer
              </QuoteButton>
            </div>
          </div>
        </SectionReveal>

        <StaggerSection className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5" stagger={0.1}>
          {highlights.map((item, index) => (
            <StaggerItem key={item.title}>
              <ServiceFeatureCard
                image={getCardIcon(service, index)}
                title={item.title}
                description={item.body}
              />
            </StaggerItem>
          ))}
        </StaggerSection>
      </div>
    </section>
  );
}
