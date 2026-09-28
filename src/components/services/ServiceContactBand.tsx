import ContactForm from "@/components/forms/ContactForm";
import FadeIn from "@/components/ui/FadeIn";
import ServiceMedia from "@/components/services/ServiceMedia";
import { getServiceVisuals } from "@/lib/service-images";
import type { ServiceDetail } from "@/lib/services";
import { getQuoteService } from "@/lib/service-landing";

export default function ServiceContactBand({ service }: { service: ServiceDetail }) {
  const visuals = getServiceVisuals(service);

  return (
    <section id="connect" className="scroll-mt-24 bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-[#2f6fd6]">
              Start a conversation
            </p>
            <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
              Tell us the outcome.{" "}
              <span className="font-bold text-zinc-900">We’ll come back with a plan.</span>
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-zinc-600">
              Share your {service.title.toLowerCase()} brief — B2B platform, consumer product, or both.
              You get a timeline, a stack recommendation, and a quote.
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid items-start gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-12">
          <FadeIn>
            <ServiceMedia
              src={visuals.contact}
              alt={`${service.title} conversation`}
            />
          </FadeIn>

          <FadeIn delay={0.08}>
            <div className="rounded-[32px] border border-zinc-100 bg-[#f7f8fb] p-6 sm:p-8">
              <h3 className="text-xl font-semibold text-zinc-900">Request a proposal</h3>
              <p className="mt-2 text-sm text-zinc-600">
                A specialist replies with next steps — not a generic brochure.
              </p>
              <div className="mt-6">
                <ContactForm defaultService={getQuoteService(service)} />
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
