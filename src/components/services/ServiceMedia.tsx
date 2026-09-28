"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

export default function ServiceMedia({
  src,
  alt,
  className = "",
  priority = false,
}: {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div
      className={`relative overflow-hidden rounded-[28px] bg-zinc-100 shadow-[0_20px_50px_rgba(15,23,42,0.08)] ${className}`}
    >
      <motion.div
        className="relative aspect-[16/10] h-full w-full"
        initial={reduceMotion ? false : { scale: 1.04 }}
        whileInView={{ scale: 1 }}
        viewport={{ once: true, amount: 0.35 }}
        transition={{ duration: 1.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover transition duration-700 ease-out hover:scale-105"
          sizes="(max-width: 1024px) 100vw, 560px"
        />
      </motion.div>
    </div>
  );
}
