import type { Metadata } from "next";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import QuoteButton from "@/components/services/QuoteButton";
import ServiceCard from "@/components/services/ServiceCard";
import ServiceFeatureCard from "@/components/services/ServiceFeatureCard";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";
import { whyChooseUs } from "@/lib/content";
import {
  featuredServices,
  getServicesByCategory,
  serviceCategories,
} from "@/lib/services";

export const metadata: Metadata = {
  title: "IT Solutions & Digital Marketing Services at Affordable Rates",
  description:
    "Discover WebAstral Infosystem's expert team delivering innovative IT solutions tailored to your business needs, ensuring effective marketing strategies.",
};

export default function ServicesPage() {
  return (
    <>
      <PageBanner title="Services" image="/assets/images/bg/services-1.png" />

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Our Comprehensive"
              highlight="Digital Services"
              description="From social apps and e-commerce platforms to e-learning solutions and sophisticated web applications, we do it all. Whatever your project requires, we have the expertise to bring it to life."
            />
          </FadeIn>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {featuredServices.map((service, index) => (
              <FadeIn key={service.slug} delay={index * 0.05}>
                <ServiceCard service={service} featured />
              </FadeIn>
            ))}
          </div>
          <div className="mt-12 text-center">
            <QuoteButton className="inline-flex rounded-full bg-[#2f6fd6] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]">
              Get Started
            </QuoteButton>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              title="Explore services"
              highlight="by category"
              description="Every capability from the WebAstral menu, grouped the same way you browse it in the header."
            />
          </FadeIn>
          <div className="mt-12 space-y-12">
            {serviceCategories.map((category) => {
              const items = getServicesByCategory(category);
              if (!items.length) return null;
              return (
                <div key={category} id={category.toLowerCase().replace(/\s+/g, "-")}>
                  <h3 className="text-xl font-semibold text-zinc-900">{category}</h3>
                  <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {items.map((service) => (
                      <ServiceCard
                        key={service.slug}
                        service={service}
                        featured={false}
                      />
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <SectionHeading
              eyebrow="- Free Bonus -"
              title="Why You Should"
              highlight="Choose Us"
              description="Clients come first for us and we offer a range of custom development services that saves your time and money. Along with this, the business demands, technological needs, and even budget are also taken into consideration."
            />
          </FadeIn>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {whyChooseUs.slice(0, 5).map((item) => (
              <ServiceFeatureCard
                key={item.title}
                image={item.image}
                title={item.title}
                description={item.description}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0b0d17] py-16 text-white sm:py-20">
        <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-8 px-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
          <div className="max-w-2xl">
            <p className="text-sm text-zinc-400">Welcome to WebAstral Infosystems</p>
            <h2 className="mt-3 text-2xl font-normal leading-snug sm:text-3xl">
              Unlock your business potential with{" "}
              <span className="font-bold">cutting edge technology and creativity</span>
            </h2>
          </div>
          <QuoteButton className="inline-flex rounded-full bg-[#2f6fd6] px-8 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]">
            Get a Quote
          </QuoteButton>
        </div>
      </section>

      <JoinCta />
    </>
  );
}
