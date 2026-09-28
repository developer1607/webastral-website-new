import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import FadeIn from "@/components/ui/FadeIn";
import {
  categoryLabel,
  getAllPortfolioProjectSlugs,
  getPortfolioProject,
  getRelatedProjects,
} from "@/lib/portfolio";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllPortfolioProjectSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) return { title: "Project details" };
  return { title: project.title, description: project.p1 };
}

export default async function ProductDetailsPage({ params }: Props) {
  const { slug } = await params;
  const project = getPortfolioProject(slug);
  if (!project) notFound();

  const related = getRelatedProjects(slug, 3);
  const sections = [
    { heading: project.h2, body: project.p2 },
    { heading: project.h3, body: project.p3 },
    { heading: project.h4, body: project.p4 },
    { heading: project.h5, body: project.p5 },
    { heading: project.h6, body: project.p6 },
    { heading: project.h7, body: project.p7 },
  ].filter((section) => section.heading && section.body);

  return (
    <>
      <PageBanner
        title={project.title}
        image={project.main_Image}
        crumbs={[
          { href: "/portfolio", label: "Portfolio" },
          {
            href: `/portfolio/${project.category}`,
            label: categoryLabel(project.category),
          },
        ]}
      />

      <section className="bg-white py-14 sm:py-20" id="project-details">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <Link
              href={`/portfolio/${project.category}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 transition hover:text-[#2f6fd6]"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to {categoryLabel(project.category)}
            </Link>
          </FadeIn>

          <div className="mt-8 grid gap-10 lg:grid-cols-[1.55fr_0.75fr] lg:gap-12">
            {/* Main column — matches reference left stack */}
            <div>
              <FadeIn>
                <div className="relative aspect-[16/9] overflow-hidden rounded-[28px] bg-zinc-100">
                  <Image
                    src={project.main_Image}
                    alt={project.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 70vw"
                    priority
                  />
                </div>
              </FadeIn>

              <FadeIn delay={0.06}>
                <ul className="mt-8 grid gap-4 sm:grid-cols-3">
                  {[
                    {
                      icon: "/assets/images/icons/client-icon.svg",
                      label: "Client Name",
                      value: project.clientName,
                    },
                    {
                      icon: "/assets/images/icons/category-icon.svg",
                      label: "Category",
                      value: categoryLabel(project.category),
                    },
                    {
                      icon: "/assets/images/icons/calendar2.svg",
                      label: "Complete Date",
                      value: project.completeDate,
                    },
                  ].map((meta) => (
                    <li
                      key={meta.label}
                      className="flex items-start gap-3 rounded-2xl border border-zinc-100 bg-[#f7f8fb] p-4"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={meta.icon} alt="" width={28} height={28} className="mt-0.5" />
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-wide text-[#2f6fd6]">
                          {meta.label}
                        </p>
                        <p className="mt-1 text-sm font-medium text-zinc-900">{meta.value}</p>
                      </div>
                    </li>
                  ))}
                </ul>
              </FadeIn>

              <div className="mt-10 space-y-8">
                {sections.map((section, index) => (
                  <FadeIn key={section.heading} delay={index * 0.04}>
                    <h2 className="text-xl font-semibold text-zinc-900 sm:text-2xl">
                      {section.heading}
                    </h2>
                    <p className="mt-3 text-sm leading-relaxed text-zinc-600 sm:text-base">
                      {section.body}
                    </p>
                  </FadeIn>
                ))}
              </div>
            </div>

            {/* Sidebar — matches reference right column */}
            <aside className="lg:sticky lg:top-28 lg:self-start">
              <FadeIn delay={0.08}>
                <div className="rounded-[28px] border border-zinc-100 bg-white p-6 shadow-sm sm:p-8">
                  <p className="text-sm font-medium text-[#2f6fd6]">{project.companyName}</p>
                  <h2 className="mt-3 text-2xl font-semibold leading-snug text-zinc-900">
                    {project.h1}
                  </h2>
                  <p className="mt-4 text-sm leading-relaxed text-zinc-600">{project.p1}</p>

                  <div className="mt-6 grid grid-cols-2 gap-3">
                    {project.images.map((image) => (
                      <div
                        key={image.src}
                        className="relative aspect-[4/3] overflow-hidden rounded-2xl bg-zinc-100"
                      >
                        <Image
                          src={image.src}
                          alt={image.title}
                          fill
                          className="object-cover"
                          sizes="160px"
                        />
                      </div>
                    ))}
                  </div>

                  <h3 className="mt-8 text-lg font-semibold text-zinc-900">
                    Client Feedback This Project
                  </h3>
                  <div className="mt-4 rounded-2xl bg-[#f7f8fb] p-5">
                    <div className="flex items-center gap-3">
                      <div className="relative h-12 w-12 overflow-hidden rounded-full bg-zinc-200">
                        <Image
                          src={project.client_image}
                          alt={project.clientName}
                          fill
                          className="object-cover"
                        />
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900">{project.clientName}</p>
                        <p className="text-xs text-zinc-500">{project.clientPosition}</p>
                      </div>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-zinc-600">
                      {project.clientFeedback}
                    </p>
                  </div>

                  <Link
                    href="/contact"
                    className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#2f6fd6] px-6 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]"
                  >
                    Start a similar project
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </FadeIn>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-sm font-medium tracking-wide text-[#2f6fd6]">
              -Related Projects-
            </p>
            <h2 className="mt-2 text-center text-3xl font-semibold text-zinc-900">
              Best Work Showcase
            </h2>
          </FadeIn>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {related.map((item, index) => (
              <FadeIn key={item.slug} delay={index * 0.05}>
                <Link
                  href={`/productdetails/${item.slug}`}
                  className="group block overflow-hidden rounded-3xl bg-white shadow-sm"
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
                    <h3 className="mt-1 text-lg font-semibold text-zinc-900 group-hover:text-[#2f6fd6]">
                      {item.title}
                    </h3>
                    <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-[#2f6fd6]">
                      Live Preview
                      <ArrowRight className="h-3.5 w-3.5" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <JoinCta
        title="Want a case study like this for your product?"
        action="Discuss your project"
        href="/contact"
      />
    </>
  );
}
