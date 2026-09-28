"use client";

import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { useState } from "react";
import ServiceMedia from "@/components/services/ServiceMedia";
import { SectionReveal } from "@/components/services/ServiceMotion";
import { getServiceVisuals } from "@/lib/service-images";
import type { TechVariant } from "@/lib/service-layout";
import type { ServiceDetail } from "@/lib/services";
import { getServiceTech } from "@/lib/service-landing";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceTech({
  service,
  variant = "split",
}: {
  service: ServiceDetail;
  variant?: TechVariant;
}) {
  const groups = getServiceTech(service);
  const visuals = getServiceVisuals(service);
  const [active, setActive] = useState(0);
  const current = groups[active] ?? groups[0];
  const reduceMotion = useReducedMotion();
  const dark = variant === "dark";

  const chips = (
    <>
          <div className={`mt-8 flex flex-wrap gap-2 ${variant === "centered" ? "justify-center" : ""}`}>
        {groups.map((group, index) => (
          <button
            key={group.label}
            type="button"
            onClick={() => setActive(index)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition ${
              active === index
                ? "bg-[#2f6fd6] text-white"
                : dark
                  ? "bg-white/10 text-zinc-200 hover:bg-white/15"
                  : "bg-white text-zinc-700 hover:text-[#2f6fd6]"
            }`}
          >
            {group.label}
          </button>
        ))}
      </div>
      <AnimatePresence mode="wait">
        <motion.div
          key={current.label}
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduceMotion ? undefined : { opacity: 0, y: -6 }}
          transition={{ duration: 0.28, ease }}
          className="mt-5 flex flex-wrap gap-2.5"
        >
          {current.items.map((item, index) => (
            <motion.div
              key={item}
              initial={reduceMotion ? false : { opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.28, delay: reduceMotion ? 0 : index * 0.05, ease }}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold shadow-sm ${
                dark ? "bg-white/10 text-white" : "bg-white text-zinc-800"
              }`}
            >
              {item}
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>
    </>
  );

  const copy = (
    <SectionReveal>
      <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Stack for this service</p>
      <h2
        className={`mt-3 text-2xl font-normal leading-snug sm:text-3xl lg:text-4xl ${dark ? "text-zinc-200" : "text-zinc-700"}`}
      >
        Tools we use for{" "}
        <span className={`font-bold ${dark ? "text-white" : "text-zinc-900"}`}>{service.title}</span>
      </h2>
      <p className={`mt-3 max-w-xl text-sm leading-relaxed ${dark ? "text-zinc-300" : "text-zinc-600"}`}>
        A focused stack for this service — not a dump of every technology we have ever touched.
      </p>
      {chips}
    </SectionReveal>
  );

  if (variant === "centered") {
    return (
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
          {copy}
        </div>
      </section>
    );
  }

  if (dark) {
    return (
      <section className="bg-[#0b0d17] py-16 text-white sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
          <SectionReveal>
            <ServiceMedia src={visuals.stack} alt={`Tools used for ${service.title}`} />
          </SectionReveal>
          {copy}
        </div>
      </section>
    );
  }

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto grid max-w-7xl items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:gap-16 lg:px-8">
        <SectionReveal>
          <ServiceMedia src={visuals.stack} alt={`Tools used for ${service.title}`} />
        </SectionReveal>
        {copy}
      </div>
    </section>
  );
}
