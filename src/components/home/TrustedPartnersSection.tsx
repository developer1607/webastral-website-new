"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type PartnerLogo = {
  src: string;
  alt: string;
};

type FadePhase = "idle" | "out" | "in";

const partnerLogos: PartnerLogo[] = [
  { src: "/images/home/partners/bonds.png", alt: "Bonds" },
  { src: "/images/home/partners/drivel.png", alt: "Drivel" },
  { src: "/images/home/partners/logo-3.png", alt: "Partner 3" },
  { src: "/images/home/partners/edplace.png", alt: "ed place" },
  { src: "/images/home/partners/fourfourtwo.png", alt: "FourFourTwo" },
  { src: "/images/home/partners/mymobileauction.png", alt: "MyMobileAuction" },
  { src: "/images/home/partners/jaypore.png", alt: "Jaypore" },
  { src: "/images/home/partners/avance.png", alt: "Avance" },
  { src: "/images/home/partners/logo-9.png", alt: "Partner 9" },
  { src: "/images/home/partners/hubpix.png", alt: "hubpix" },
  { src: "/images/home/partners/voylegal.png", alt: "Voylegal" },
  { src: "/images/home/partners/medicalplus.png", alt: "Medical Plus" },
];

const FADE_DURATION = 0.5;
const FADE_MS = FADE_DURATION * 1000;
const HOLD_MS = 2800;

const fadeTransition = {
  duration: FADE_DURATION,
  ease: [0.22, 1, 0.36, 1] as const,
};

function pickSwapIndices(length: number): [number, number] {
  const i = Math.floor(Math.random() * length);
  let j = Math.floor(Math.random() * length);
  while (j === i) {
    j = Math.floor(Math.random() * length);
  }
  return [i, j];
}

export default function TrustedPartnersSection() {
  const reduceMotion = useReducedMotion();
  const [logos, setLogos] = useState(partnerLogos);
  const [activePair, setActivePair] = useState<[number, number] | null>(null);
  const [fadePhase, setFadePhase] = useState<FadePhase>("idle");
  const logosRef = useRef(logos);

  useEffect(() => {
    logosRef.current = logos;
  }, [logos]);

  useEffect(() => {
    if (reduceMotion) return;

    let cancelled = false;
    let timeoutId: ReturnType<typeof setTimeout>;

    const schedule = (fn: () => void, ms: number) => {
      timeoutId = setTimeout(() => {
        if (!cancelled) fn();
      }, ms);
    };

    const runCycle = () => {
      const current = logosRef.current;
      if (current.length < 2) return;

      const [i, j] = pickSwapIndices(current.length);
      setActivePair([i, j]);
      setFadePhase("out");

      schedule(() => {
        setLogos((prev) => {
          const next = [...prev];
          [next[i], next[j]] = [next[j], next[i]];
          return next;
        });
        setFadePhase("in");

        schedule(() => {
          setActivePair(null);
          setFadePhase("idle");
          schedule(runCycle, HOLD_MS);
        }, FADE_MS);
      }, FADE_MS);
    };

    schedule(runCycle, HOLD_MS);

    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, [reduceMotion]);

  return (
    <section className="bg-[#eef1f7] py-12 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="mx-auto max-w-3xl text-center text-2xl font-medium leading-snug text-zinc-800 sm:text-3xl">
          Over 15+ Years of{" "}
          <span className="font-semibold text-[#2f6fd6]">Trusted Partnership</span>
          <br />
          with Leading Global Companies
        </h2>

        <div className="mt-10 grid grid-cols-2 items-center gap-x-8 gap-y-8 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((logo, index) => {
            const isSwapping =
              activePair !== null &&
              (index === activePair[0] || index === activePair[1]);
            const opacity =
              !isSwapping || fadePhase === "idle"
                ? 1
                : fadePhase === "out"
                  ? 0
                  : 1;

            return (
              <motion.div
                key={index}
                animate={{ opacity }}
                transition={fadeTransition}
                className="flex min-h-12 items-center justify-center"
              >
                <Image
                  src={logo.src}
                  alt={logo.alt}
                  width={150}
                  height={52}
                  className="h-10 w-auto object-contain opacity-90 grayscale transition-[filter] duration-300 hover:grayscale-0"
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
