import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/forms/ContactForm";
import PageBanner from "@/components/layout/PageBanner";
import { jobs } from "@/lib/content";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return jobs.map((job) => ({ slug: job.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  return { title: job?.title ?? "Job details" };
}

export default async function JobDetailsPage({ params }: Props) {
  const { slug } = await params;
  const job = jobs.find((item) => item.slug === slug);
  if (!job) notFound();

  return (
    <>
      <PageBanner title={job.title} image="/assets/images/bg/office2.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.3fr_0.9fr] lg:px-8">
          <div>
            <p className="text-sm text-[#2f6fd6]">
              {job.location} · {job.type} · {job.posted}
            </p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900">{job.title}</h2>
            <p className="mt-6 text-sm leading-relaxed text-zinc-600 sm:text-base">{job.summary}</p>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">What you’ll do</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Collaborate with designers, developers, and project managers.</li>
              <li>Ship high-quality work for global clients across industries.</li>
              <li>Take ownership of features from idea to launch.</li>
            </ul>
            <h3 className="mt-8 text-xl font-semibold text-zinc-900">What we look for</h3>
            <ul className="mt-3 space-y-2 text-sm text-zinc-600">
              <li>Strong craft and attention to detail.</li>
              <li>Clear communication and a client-first mindset.</li>
              <li>Experience with modern tools in your discipline.</li>
            </ul>
          </div>
          <div className="rounded-3xl border border-zinc-100 p-6">
            <h3 className="mb-4 text-lg font-semibold text-zinc-900">Apply now</h3>
            <ContactForm compact />
          </div>
        </div>
      </section>
    </>
  );
}
