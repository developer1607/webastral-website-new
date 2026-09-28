import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import PortfolioFilters from "@/components/layout/PortfolioFilters";
import FadeIn from "@/components/ui/FadeIn";
import {
  categoryLabel,
  getPortfolioDetailHref,
  portfolioProjectDetails,
} from "@/lib/portfolio";

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Explore WebAstral Infosystems portfolio of web, mobile, SEO, and design work.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageBanner title="Portfolio" image="/assets/images/bg/portfolio-bg.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioFilters />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {portfolioProjectDetails.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.04}>
                <Link
                  href={getPortfolioDetailHref(item.slug)}
                  className="group block overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm"
                >
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={item.showcase_image}
                      alt={item.title}
                      fill
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                    <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-wide text-[#2f6fd6] shadow-sm">
                      Case study
                    </span>
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wide text-[#2f6fd6]">
                      {categoryLabel(item.category)}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-[#2f6fd6]">
                      {item.title}
                    </h2>
                    <p className="mt-2 line-clamp-2 text-sm text-zinc-600">{item.p1}</p>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
      <JoinCta />
    </>
  );
}
