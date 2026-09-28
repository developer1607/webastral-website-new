"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";
import { StaggerItem, StaggerSection } from "@/components/services/ServiceMotion";
import type { ServiceFaq } from "@/lib/services";

export default function ServiceFaq({ faqs }: { faqs: ServiceFaq[] }) {
  const [open, setOpen] = useState(0);

  if (!faqs.length) return null;

  return (
    <StaggerSection className="space-y-3" stagger={0.08}>
      {faqs.map((faq, index) => (
        <StaggerItem key={faq.title}>
          <div className="rounded-2xl border border-zinc-100 bg-white">
            <button
              type="button"
              className="flex w-full items-start justify-between gap-4 p-5 text-left"
              onClick={() => setOpen(open === index ? -1 : index)}
            >
              <span className="text-sm font-semibold text-zinc-900 sm:text-base">
                {faq.title}
              </span>
              <ChevronDown
                className={`mt-1 h-4 w-4 shrink-0 text-zinc-400 transition ${
                  open === index ? "rotate-180" : ""
                }`}
              />
            </button>
            {open === index ? (
              <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600">{faq.description}</p>
            ) : null}
          </div>
        </StaggerItem>
      ))}
    </StaggerSection>
  );
}
