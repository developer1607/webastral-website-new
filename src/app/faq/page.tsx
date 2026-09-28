"use client";

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import ContactForm from "@/components/forms/ContactForm";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import { faqs } from "@/lib/content";

export default function FaqPage() {
  const [open, setOpen] = useState(0);

  return (
    <>
      <PageBanner title="FAQ" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 lg:grid-cols-[0.8fr_1.4fr] lg:px-8">
          <div className="rounded-3xl bg-[#2f6fd6] p-8 text-white">
            <h2 className="text-2xl font-semibold">Discover Frequently Asked Questions?</h2>
            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900"
            >
              Work Together
            </Link>
          </div>
          <div>
            <div className="space-y-3">
              {faqs.map((faq, index) => (
                <div key={faq.q} className="rounded-2xl border border-zinc-100">
                  <button
                    type="button"
                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                    onClick={() => setOpen(open === index ? -1 : index)}
                  >
                    <span className="text-sm font-semibold text-zinc-900 sm:text-base">
                      {String(index + 1).padStart(2, "0")}. {faq.q}
                    </span>
                    <ChevronDown
                      className={`mt-1 h-4 w-4 shrink-0 text-zinc-400 transition ${
                        open === index ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {open === index ? (
                    <p className="px-5 pb-5 text-sm leading-relaxed text-zinc-600">{faq.a}</p>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-12">
              <p className="text-sm font-medium text-[#2f6fd6]">- Your Question -</p>
              <h3 className="mt-2 text-2xl font-semibold text-zinc-900">Write A Question</h3>
              <div className="mt-6">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
      <JoinCta />
    </>
  );
}
