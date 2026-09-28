"use client";

import { motion, useReducedMotion } from "framer-motion";
import { getDeliverySteps, getProcessCaption, getProcessStyle } from "@/lib/service-landing";
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
        <div className={variant === "stacked" ? "max-w-3xl" : "mx-auto max-w-3xl text-center"}>
          <h2 className="text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
            How a {service.title}{" "}
            <span className="font-bold text-zinc-900">engagement moves</span>
          </h2>
          <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
            {getProcessCaption(style)}
          </p>
        </div>

        {variant === "stacked" ? (
          <ol className="mt-12 max-w-3xl space-y-0">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                className="relative border-l-2 border-zinc-200 pb-10 pl-8 last:pb-0"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease }}
              >
                <span className="absolute -left-[9px] top-1 h-4 w-4 rounded-full border-2 border-white bg-[#2f6fd6]" />
                <p className="text-sm font-semibold uppercase tracking-[0.16em] text-[#2f6fd6]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-2 text-lg font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        ) : (
          <ol className="relative mt-12 grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0">
            {steps.map((step, index) => (
              <motion.li
                key={step.title}
                className="relative px-1 lg:px-4"
                initial={reduceMotion ? false : { opacity: 0, y: 18 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.45, delay: index * 0.08, ease }}
              >
                {index < steps.length - 1 ? (
                  <span
                    aria-hidden
                    className="absolute left-8 top-5 hidden h-px w-[calc(100%-1rem)] bg-zinc-200 lg:block"
                  />
                ) : null}
                <p className="relative z-10 text-3xl font-bold text-[#2f6fd6]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-base font-semibold text-zinc-900">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600">{step.description}</p>
              </motion.li>
            ))}
          </ol>
        )}
      </div>
    </section>
  );
}

export { ServiceWhy };
