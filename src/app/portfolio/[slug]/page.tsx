import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import PortfolioFilters from "@/components/layout/PortfolioFilters";
import FadeIn from "@/components/ui/FadeIn";
import {
  categoryLabel,
  getPortfolioDetailHref,
  getProjectsByCategory,
  portfolioCategories,
  portfolioProjectDetails,
} from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return portfolioCategories.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  return { title: `${categoryLabel(slug)} Portfolio` };
}

export default async function PortfolioCategoryPage({ params }: Props) {
  const { slug } = await params;
  if (!portfolioCategories.includes(slug as (typeof portfolioCategories)[number])) {
    notFound();
  }

  const filtered = getProjectsByCategory(slug);
  const visible = filtered.length ? filtered : portfolioProjectDetails;
  const title = categoryLabel(slug);

  return (
    <>
      <PageBanner title={title} image="/assets/images/bg/portfolio-bg.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <PortfolioFilters />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((item, index) => (
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
                  </div>
                  <div className="p-5">
                    <p className="text-xs uppercase tracking-wide text-[#2f6fd6]">
                      {categoryLabel(item.category)}
                    </p>
                    <h2 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-[#2f6fd6]">
                      {item.title}
                    </h2>
                    <span className="mt-3 inline-block text-sm font-medium text-[#2f6fd6]">
                      Live Preview
                    </span>
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
