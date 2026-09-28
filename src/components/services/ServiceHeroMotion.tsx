"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";
import type { ServiceDetail } from "@/lib/services";

export function ServiceHeroEntrance({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  const reduceMotion = useReducedMotion();
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

export function ServiceHeroVisualFrame({
  service,
  children,
  className,
}: {
  service: ServiceDetail;
  children: ReactNode;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  void service;

  return (
    <motion.div
      className={`relative overflow-hidden ${className ?? ""}`}
      initial={reduceMotion ? false : { opacity: 0, y: 28, scale: 0.97 }}
      animate={
        reduceMotion
          ? { opacity: 1, y: 0, scale: 1 }
          : { opacity: 1, y: [0, -10, 0], scale: 1 }
      }
      transition={
        reduceMotion
          ? { duration: 0.4 }
          : {
              opacity: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              scale: { duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] },
              y: { duration: 7, delay: 0.8, repeat: Infinity, ease: "easeInOut" },
            }
      }
    >
      {children}
    </motion.div>
  );
}
