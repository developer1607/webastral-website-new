"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import { jobs } from "@/lib/content";

const tabs = ["All Job", "UI/UX", "Troubleshoot", "Wordpress"] as const;

export default function JobListPage() {
  const [tab, setTab] = useState<(typeof tabs)[number]>("All Job");
  const visible = useMemo(
    () => (tab === "All Job" ? jobs : jobs.filter((job) => job.category === tab)),
    [tab],
  );

  return (
    <>
      <PageBanner title="Careers" image="/assets/images/bg/office2.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap justify-center gap-3">
            {tabs.map((item) => (
              <button
                key={item}
                type="button"
                onClick={() => setTab(item)}
                className={`rounded-full px-5 py-2 text-sm ${
                  tab === item
                    ? "bg-[#2f6fd6] text-white"
                    : "border border-zinc-200 text-zinc-700"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {visible.map((job) => (
              <article key={job.slug} className="rounded-3xl border border-zinc-100 p-6 shadow-sm">
                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={job.icon} alt="" width={40} height={40} />
                  <h2 className="text-lg font-semibold text-zinc-900">
                    <Link href={`/job-details/${job.slug}`}>{job.title}</Link>
                  </h2>
                </div>
                <p className="mt-4 text-sm leading-relaxed text-zinc-600">{job.summary}</p>
                <p className="mt-4 text-sm text-zinc-500">
                  {job.location} · {job.type}
                </p>
                <div className="mt-6 flex items-center justify-between">
                  <span className="text-xs text-[#2f6fd6]">{job.posted}</span>
                  <Link
                    href={`/job-details/${job.slug}`}
                    className="rounded-full bg-[#2f6fd6] px-4 py-2 text-xs font-medium text-white"
                  >
                    Apply Now
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <JoinCta title="We would love to see you grow with us!" action="Join Us" />
    </>
  );
}
