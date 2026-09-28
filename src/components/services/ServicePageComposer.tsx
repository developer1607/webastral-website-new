import type { ReactNode } from "react";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import TrustedPartnersSection from "@/components/home/TrustedPartnersSection";
import JoinCta from "@/components/layout/JoinCta";
import ServiceAudience from "@/components/services/ServiceAudience";
import ServiceContactBand from "@/components/services/ServiceContactBand";
import ServiceFaqSection from "@/components/services/ServiceFaqSection";
import ServiceHero from "@/components/services/ServiceHero";
import ServiceIncluded from "@/components/services/ServiceIncluded";
import ServiceOverview from "@/components/services/ServiceOverview";
import ServiceRelatedBand from "@/components/services/ServiceRelatedBand";
import ServiceSignature from "@/components/services/signatures/ServiceSignature";
import ServiceSteps from "@/components/services/ServiceSteps";
import ServiceTech from "@/components/services/ServiceTech";
import ServiceWorkTeaser from "@/components/services/ServiceWorkTeaser";
import type { DedicatedPageConfig } from "@/lib/dedicated-pages";
import type { ServiceLayout, ServiceSectionId } from "@/lib/service-layout";
import type { ServiceDetail } from "@/lib/services";

export default function ServicePageComposer({
  service,
  page,
  layout,
}: {
  service: ServiceDetail;
  page: DedicatedPageConfig;
  layout: ServiceLayout;
}) {
  const blocks: Record<ServiceSectionId, ReactNode> = {
    hero: <ServiceHero service={service} variant={layout.hero} />,
    partners: <TrustedPartnersSection />,
    audience: <ServiceAudience service={service} variant={layout.audience} />,
    overview: <ServiceOverview service={service} media={layout.overview} />,
    included: (
      <ServiceIncluded
        service={service}
        variant={layout.included}
        media={layout.includedMedia}
      />
    ),
    signature: <ServiceSignature service={service} kind={layout.signature} />,
    related: <ServiceRelatedBand slug={service.slug} page={page} />,
    steps: <ServiceSteps service={service} variant={layout.process} />,
    tech: <ServiceTech service={service} variant={layout.tech} />,
    work: <ServiceWorkTeaser service={service} variant={layout.work} />,
    testimonials: <TestimonialsSection />,
    contact: <ServiceContactBand service={service} />,
    faq: <ServiceFaqSection service={service} faqs={service.faqs} />,
    cta: <JoinCta title={page.ctaTitle} href="/contact" action={page.ctaAction} />,
  };

  return (
    <>
      {layout.sections.map((id) => (
        <div key={id}>{blocks[id]}</div>
      ))}
    </>
  );
}
