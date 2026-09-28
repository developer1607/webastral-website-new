import type { Metadata } from "next";
import { notFound } from "next/navigation";
import DedicatedServicePage from "@/components/services/DedicatedServicePage";
import { isDedicatedService } from "@/lib/dedicated-services";
import { getAllServiceSlugs, getService } from "@/lib/services";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return getAllServiceSlugs()
    .filter((slug) => !isDedicatedService(slug))
    .map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) return { title: "Service" };
  return { title: service.h1, description: service.p1 };
}

export default async function ServiceDetailPage({ params }: Props) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service || isDedicatedService(slug)) notFound();

  return <DedicatedServicePage slug={slug} />;
}
