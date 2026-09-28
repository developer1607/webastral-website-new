"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { testimonials } from "@/lib/content";

const SARAH_INDEX = testimonials.findIndex((item) => item.name === "Sarah Turner");

export default function TestimonialsSection() {
  const [index, setIndex] = useState(SARAH_INDEX >= 0 ? SARAH_INDEX : 0);
  const item = testimonials[index];

  const prev = () => setIndex((current) => (current === 0 ? testimonials.length - 1 : current - 1));
  const next = () => setIndex((current) => (current === testimonials.length - 1 ? 0 : current + 1));

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Our Happy"
            highlight="Clients"
            description="We always strive for the success of the client and their words here speak on their behalf."
          />
        </FadeIn>

        <FadeIn delay={0.1}>
          <div className="mt-10 flex flex-col items-center gap-8 rounded-[32px] bg-[#eaf3ff] p-6 sm:p-10 lg:flex-row lg:gap-12 lg:p-12">
            <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-[28px] border-4 border-white shadow-md sm:h-48 sm:w-48">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                    sizes="192px"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex-1 text-center lg:text-left">
              <AnimatePresence mode="wait">
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  transition={{ duration: 0.25 }}
                >
                  <p className="text-base leading-relaxed text-zinc-700 sm:text-lg">
                    “{item.content}”
                  </p>
                  <div className="mt-5 flex items-center justify-center gap-1 lg:justify-start">
                    {Array.from({ length: 5 }).map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        className="h-4 w-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <p className="mt-3 text-lg font-semibold text-zinc-900">{item.name}</p>
                  <p className="text-sm text-zinc-500">{item.designation}</p>
                </motion.div>
              </AnimatePresence>
            </div>
            <div className="flex gap-3 self-end">
              <button
                type="button"
                onClick={prev}
                aria-label="Previous testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f6fd6] text-white transition hover:bg-[#2563c7]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={next}
                aria-label="Next testimonial"
                className="flex h-11 w-11 items-center justify-center rounded-full bg-[#2f6fd6] text-white transition hover:bg-[#2563c7]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
