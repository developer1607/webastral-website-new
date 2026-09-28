"use client";

import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import ServiceDeviceFrame from "@/components/services/ServiceDeviceFrame";
import {
  ServiceHeroEntrance,
  ServiceHeroVisualFrame,
} from "@/components/services/ServiceHeroMotion";
import ServiceStatValue from "@/components/services/ServiceStatValue";
import { splitHeading } from "@/components/ui/SectionHeading";
import { getServiceVisuals } from "@/lib/service-images";
import type { HeroVariant } from "@/lib/service-layout";
import { serviceStats } from "@/lib/service-landing";
import { getServiceAudience } from "@/lib/service-standard";
import type { ServiceDetail } from "@/lib/services";

function Breadcrumb({
  title,
  dark,
}: {
  title: string;
  dark?: boolean;
}) {
  const mute = dark ? "text-zinc-400" : "text-zinc-500";
  const current = dark ? "text-white" : "text-zinc-800";
  const hover = "hover:text-[#2f6fd6]";
  return (
    <p className={`mb-8 text-sm ${mute}`}>
      <Link href="/" className={hover}>
        Home
      </Link>
      <span className="mx-2 opacity-50">/</span>
      <Link href="/services" className={hover}>
        Services
      </Link>
      <span className="mx-2 opacity-50">/</span>
      <span className={current}>{title}</span>
    </p>
  );
}

function Copy({
  service,
  dark = false,
  align = "left",
}: {
  service: ServiceDetail;
  dark?: boolean;
  align?: "left" | "center";
}) {
  const heading = splitHeading(service.h1);
  const audience = getServiceAudience(service);
  const center = align === "center";
  const title = dark ? "text-zinc-100" : "text-zinc-800";
  const bold = dark ? "text-white" : "text-zinc-900";
  const body = dark ? "text-zinc-300" : "text-zinc-600";
  const border = dark ? "border-white/15" : "border-zinc-200";
  const ghost =
    dark
      ? "border-white/25 text-white hover:bg-white hover:text-zinc-900"
      : "border-zinc-200 text-zinc-800 hover:border-[#2f6fd6] hover:text-[#2f6fd6]";

  return (
    <div
      className={`mx-auto w-full max-w-xl ${center ? "text-center" : "text-center lg:mx-0 lg:max-w-none lg:text-left"}`}
    >
      <ServiceHeroEntrance delay={0.02}>
        <p className="mb-3 text-sm font-medium tracking-wide text-[#2f6fd6]">
          {audience.eyebrow}
        </p>
      </ServiceHeroEntrance>
      <ServiceHeroEntrance delay={0.05}>
        <h1 className={`text-2xl font-normal leading-snug sm:text-3xl sm:leading-[1.2] md:text-4xl lg:text-[2.75rem] ${title}`}>
          {heading.lead ? <>{heading.lead} </> : null}
          <span className={`font-bold ${bold}`}>{heading.rest}</span>
        </h1>
      </ServiceHeroEntrance>
      <ServiceHeroEntrance delay={0.12}>
        <p className={`mt-4 text-sm leading-relaxed sm:mt-6 sm:text-base ${body}`}>
          {service.p1}
        </p>
      </ServiceHeroEntrance>
      <ServiceHeroEntrance delay={0.22}>
        <div
          className={`mt-6 flex flex-wrap items-center gap-3 sm:mt-8 ${center ? "justify-center" : "justify-center lg:justify-start"}`}
        >
          <a
            href="#connect"
            className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#2f6fd6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563c7] sm:w-auto sm:max-w-none sm:px-8 sm:py-3.5"
          >
            Talk to a specialist
            <ArrowRight className="h-4 w-4" />
          </a>
          <Link
            href="/portfolio"
            className={`inline-flex items-center justify-center gap-2 rounded-full border px-6 py-3 text-sm font-medium transition sm:px-8 sm:py-3.5 ${ghost}`}
          >
            View work
          </Link>
        </div>
        <div className={`mt-10 grid grid-cols-3 gap-6 border-t pt-8 ${border}`}>
          {serviceStats.map((stat) => (
            <div key={stat.label}>
              <ServiceStatValue value={stat.value} />
              <p className={`mt-1 text-xs sm:text-sm ${dark ? "text-zinc-400" : "text-zinc-500"}`}>
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </ServiceHeroEntrance>
    </div>
  );
}

function Visual({ service }: { service: ServiceDetail }) {
  const visuals = getServiceVisuals(service);
  return (
    <ServiceHeroVisualFrame service={service} className="w-full">
      <ServiceDeviceFrame>
        <Image
          src={visuals.hero}
          alt={`${service.title} on a workstation`}
          fill
          className="object-cover"
          sizes="(max-width: 1024px) 100vw, 560px"
          priority
        />
      </ServiceDeviceFrame>
    </ServiceHeroVisualFrame>
  );
}

function Shell({
  dark,
  children,
}: {
  dark?: boolean;
  children: ReactNode;
}) {
  return (
    <section className={`overflow-hidden ${dark ? "bg-[#0b0d17] text-white" : "bg-white text-zinc-900"}`}>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        {children}
      </div>
    </section>
  );
}

export default function ServiceHero({
  service,
  variant = "split-right",
}: {
  service: ServiceDetail;
  variant?: HeroVariant;
}) {
  if (variant === "dark-split") {
    return (
      <Shell dark>
        <ServiceHeroEntrance>
          <Breadcrumb title={service.title} dark />
        </ServiceHeroEntrance>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <Copy service={service} dark />
          <Visual service={service} />
        </div>
      </Shell>
    );
  }

  if (variant === "split-left") {
    return (
      <Shell>
        <ServiceHeroEntrance>
          <Breadcrumb title={service.title} />
        </ServiceHeroEntrance>
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="order-2 lg:order-1">
            <Visual service={service} />
          </div>
          <div className="order-1 lg:order-2">
            <Copy service={service} />
          </div>
        </div>
      </Shell>
    );
  }

  if (variant === "centered") {
    return (
      <Shell>
        <ServiceHeroEntrance>
          <Breadcrumb title={service.title} />
        </ServiceHeroEntrance>
        <Copy service={service} align="center" />
        <div className="mx-auto mt-12 max-w-4xl">
          <Visual service={service} />
        </div>
      </Shell>
    );
  }

  if (variant === "image-first") {
    return (
      <Shell>
        <ServiceHeroEntrance>
          <Breadcrumb title={service.title} />
        </ServiceHeroEntrance>
        <div className="mx-auto max-w-5xl">
          <Visual service={service} />
        </div>
        <div className="mt-12">
          <Copy service={service} align="center" />
        </div>
      </Shell>
    );
  }

  if (variant === "editorial") {
    return (
      <Shell>
        <ServiceHeroEntrance>
          <Breadcrumb title={service.title} />
        </ServiceHeroEntrance>
        <div className="mx-auto max-w-3xl">
          <Copy service={service} align="center" />
        </div>
        <div className="mt-14">
          <Visual service={service} />
        </div>
      </Shell>
    );
  }

  return (
    <Shell>
      <ServiceHeroEntrance>
        <Breadcrumb title={service.title} />
      </ServiceHeroEntrance>
      <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
        <Copy service={service} />
        <Visual service={service} />
      </div>
    </Shell>
  );
}
