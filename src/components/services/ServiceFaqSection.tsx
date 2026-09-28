import ServiceFaq from "@/components/services/ServiceFaq";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { getServiceAudience } from "@/lib/service-standard";
import type { ServiceDetail, ServiceFaq as ServiceFaqItem } from "@/lib/services";

export default function ServiceFaqSection({
  service,
  faqs,
}: {
  service: ServiceDetail;
  faqs: ServiceFaqItem[];
}) {
  const audience = getServiceAudience(service);
  const alreadyCovers = faqs.some((faq) => /b2b|b2c|wholesale|consumer/i.test(faq.title));
  const items = alreadyCovers
    ? faqs
    : [
        ...faqs,
        {
          title: `Is ${service.title} for B2B, B2C, or both?`,
          description: `${audience.statement} On the B2B side: ${audience.b2b.body} On the B2C side: ${audience.b2c.body}`,
        },
      ];

  return (
    <section className="bg-[#f7f8fb] py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading title="Frequently asked" highlight="questions" />
        </FadeIn>
        <div className="mt-10">
          <ServiceFaq faqs={items} />
        </div>
      </div>
    </section>
  );
}
