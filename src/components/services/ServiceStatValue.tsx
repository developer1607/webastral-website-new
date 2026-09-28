"use client";

import { useInView, useReducedMotion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function parseStat(value: string) {
  const match = value.match(/^(\d+)(.*)$/);
  if (!match) return { n: 0, suffix: value, numeric: false };
  return { n: Number(match[1]), suffix: match[2] ?? "", numeric: true };
}

export default function ServiceStatValue({ value }: { value: string }) {
  const ref = useRef<HTMLParagraphElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.6 });
  const reduceMotion = useReducedMotion();
  const parsed = parseStat(value);
  const [shown, setShown] = useState(reduceMotion || !parsed.numeric ? value : "0");

  useEffect(() => {
    if (!inView || reduceMotion || !parsed.numeric) {
      setShown(value);
      return;
    }
    const duration = 900;
    const start = performance.now();
    let frame = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - (1 - t) ** 3;
      setShown(`${Math.round(parsed.n * eased)}${parsed.suffix}`);
      if (t < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, parsed.n, parsed.numeric, parsed.suffix, reduceMotion, value]);

  return (
    <p ref={ref} className="text-2xl font-bold text-[#2f6fd6] sm:text-3xl">
      {shown}
    </p>
  );
}
