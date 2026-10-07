"use client";

import { motion, useReducedMotion } from "framer-motion";
import {
  getDeliverySteps,
  getProcessCaption,
  getProcessStyle,
} from "@/lib/service-landing";
import type { ProcessVariant } from "@/lib/service-layout";
import type { ServiceDetail } from "@/lib/services";
import { ServiceWhy } from "./ServiceWhy";

const ease = [0.22, 1, 0.36, 1] as const;

export default function ServiceSteps({
  service,
  variant = "timeline",
}: {
  service: ServiceDetail;
  variant?: ProcessVariant;
}) {
  const steps = getDeliverySteps(service);
  const style = getProcessStyle(service);
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            How a {service.title}{" "}
            <span className="font-bold text-zinc-900">engagement moves</span>
          </h2>

          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {getProcessCaption(style)}
          </p>
        </div>

        {/* Timeline */}
        <div className="relative mt-14">

          {/* Full horizontal connecting line */}
          <div
            aria-hidden
            className="absolute left-[10%] right-[10%] top-6 hidden h-px bg-zinc-200 lg:block"
          />

          <ol className="relative grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                className="relative px-2 text-center lg:px-5"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.45,
                  delay: index * 0.08,
                  ease,
                }}
              >
                {/* Number circle */}
                <div className="relative z-10 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[#2f6fd6] text-sm font-bold text-white ring-8 ring-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Content */}
                <h3 className="mt-5 text-base font-semibold text-zinc-900">
                  {step.title}
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-zinc-600">
                  {step.description}
                </p>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

export { ServiceWhy };