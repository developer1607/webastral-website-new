import { notFound } from "next/navigation";
import ServicePageComposer from "@/components/services/ServicePageComposer";
import { getDedicatedPage } from "@/lib/dedicated-pages";
import { getServiceLayout } from "@/lib/service-layout";
import { getDeliverables } from "@/lib/service-standard";
import { getService } from "@/lib/services";

export default function DedicatedServicePage({ slug }: { slug: string }) {
  const service = getService(slug);
  if (!service) notFound();

  const layout = getServiceLayout(slug);
  const page = getDedicatedPage(slug) ?? {
    metadata: { title: service.title, description: service.p1 },
    headingLead: "What this",
    headingEmphasis: "engagement covers",
    intro: service.p2,
    pillars: getDeliverables(service),
    relatedCategory: service.category,
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: service.category,
    relatedIntro: `Other ${service.category.toLowerCase()} work we ship alongside ${service.title}.`,
    ctaTitle: `Ready to start a ${service.title} project?`,
    ctaAction: "Talk to a specialist",
  };

  return <ServicePageComposer service={service} page={page} layout={layout} />;
}
