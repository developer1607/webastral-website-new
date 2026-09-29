"use client";

import { ArrowRight, Code2, Megaphone, MonitorSmartphone, Palette, Smartphone, Workflow } from "lucide-react";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { homeServiceCards } from "@/lib/content";

const icons = [MonitorSmartphone, Palette, Smartphone, Megaphone, Code2, Workflow];

export default function DigitalServicesSection() {
  return (
    <section className="bg-[#0b0d17] py-16 text-white sm:py-20 lg:py-24">
      <div className="mx-auto grid max-w-7xl items-start gap-10 px-4 sm:px-6 lg:grid-cols-[0.9fr_1.4fr] lg:gap-14 lg:px-8">
        <FadeIn>
          <h2 className="text-2xl font-normal leading-snug sm:text-3xl lg:text-4xl">
            Our Comprehensive{" "}
            <span className="font-bold">Digital Services</span>
          </h2>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-zinc-300 sm:text-base">
            From social apps and e-commerce platforms to e-learning solutions and
            sophisticated web applications, we do it all. Whatever your project
            requires, we have the expertise to bring it to life.
          </p>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-white px-7 py-3 text-sm font-medium text-white transition hover:bg-white hover:text-zinc-900"
          >
            View all Services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </FadeIn>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-2">
          {homeServiceCards.map((service, index) => {
            const Icon = icons[index];
            return (
              <FadeIn key={service.slug} delay={index * 0.06}>
                <Link
                  href={`/services/${service.slug}`}
                  className="group relative flex h-full flex-col rounded-2xl bg-white p-5 text-center text-zinc-900 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="relative mb-4 flex w-full items-center justify-center">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f1ff] text-[#2f6fd6]">
                      <Icon className="h-6 w-6" />
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-zinc-900">
                    {service.title}
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                    {service.description}
                  </p>
                </Link>
              </FadeIn>
            );
          })}
        </div>
      </div>
    </section>
  );
}
