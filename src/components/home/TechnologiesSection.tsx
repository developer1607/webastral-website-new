"use client";

import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { technologies } from "@/lib/site";

function MarqueeRow({
  items,
  reverse = false,
}: {
  items: string[];
  reverse?: boolean;
}) {
  const reduceMotion = useReducedMotion();
  const loop = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex w-max gap-10 py-3"
        animate={reduceMotion ? undefined : { x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
      >
        {loop.map((tech, index) => (
          <span
            key={`${tech}-${index}`}
            className="text-2xl font-medium tracking-wide text-zinc-400 sm:text-3xl"
          >
            {tech}
          </span>
        ))}
      </motion.div>
    </div>
  );
}

export default function TechnologiesSection() {
  const first = technologies.slice(0, 7);
  const second = technologies.slice(7);

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Our Technologies" highlight="Expertise" />
        </FadeIn>
        <div className="mt-10 space-y-2">
          <MarqueeRow items={first} />
          <MarqueeRow items={second} reverse />
        </div>
      </div>
    </section>
  );
}
