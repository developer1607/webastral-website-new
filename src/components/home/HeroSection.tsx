"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import HeroVisual from "./HeroVisual";

export default function HeroSection() {
  const reduceMotion = useReducedMotion();
  const initial = reduceMotion ? false : { opacity: 0, y: 24 };

  return (
    <section className="overflow-hidden bg-white text-zinc-900">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-16 lg:px-8 lg:py-24">
        <div className="grid items-center gap-8 sm:gap-10 lg:grid-cols-2 lg:gap-16">
          <div className="mx-auto w-full max-w-xl text-center lg:mx-0 lg:max-w-none lg:text-left">
            <motion.h1
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="text-2xl font-normal leading-snug text-zinc-800 sm:text-3xl sm:leading-[1.2] md:text-4xl lg:text-[2.75rem]"
            >
              Unlock Your Business Potential With{" "}
              <span className="font-bold text-zinc-900">
                Cutting Edge Technology And Creativity
              </span>
            </motion.h1>
            <motion.p
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="mt-4 text-sm leading-relaxed text-zinc-600 sm:mt-6 sm:text-base"
            >
              We catapult your online presence to a whole new level. With top notch
              website designing and development, App development and internet
              marketing, we offer best services in the field.
            </motion.p>
            <motion.div
              initial={initial}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
              className="mt-6 sm:mt-8"
            >
              <Link
                href="/services"
                className="inline-flex w-full max-w-xs items-center justify-center gap-2 rounded-full bg-[#2f6fd6] px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-[#2563c7] sm:w-auto sm:max-w-none sm:px-8 sm:py-3.5"
              >
                Click to get our services
                <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={reduceMotion ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex w-full justify-center lg:justify-end"
          >
            <HeroVisual />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
