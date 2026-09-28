import type { Metadata } from "next";
import Image from "next/image";
import JoinCta from "@/components/layout/JoinCta";
import PageBanner from "@/components/layout/PageBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FadeIn from "@/components/ui/FadeIn";
import { aboutStats } from "@/lib/content";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "At Webastral Infosystems, we aim to create sustainable software solutions while leaving a positive imprint on society.",
};

export default function AboutPage() {
  return (
    <>
      <PageBanner title="About Us" image="/assets/images/bg/office1.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <FadeIn>
            <p className="text-sm font-medium text-[#2f6fd6]">- About Our Company -</p>
            <h2 className="mt-3 text-3xl font-semibold text-zinc-900 sm:text-4xl">
              We Nurture Businesses By Maximizing Their Growth
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
              <p>
                Webastral Infosystem stands as a leader in IT services and solutions,
                driven by a passion for delivering results that ensure our clients’
                success. At Webastral we are dedicated to providing the highest quality
                services.
              </p>
              <p>
                Our client centric approach, affordable services, and out of the box
                solutions make us best in the business. We have served clients from
                India as well as countries like the US and UK.
              </p>
              <p>
                From social apps and e-commerce platforms to e-learning solutions and
                sophisticated web applications, we do it all. The client demands, we
                deliver!
              </p>
            </div>
            <ul className="mt-6 space-y-3 text-sm text-zinc-700">
              <li>Our advanced technological strategies take IT leaders towards the digital globe.</li>
              <li>We take a systematic approach, handling each step with utmost sophistication.</li>
              <li>We build strong and lasting relations and offer tailored solutions.</li>
            </ul>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl">
                <Image src="/assets/images/bg/about11.png" alt="WebAstral team" fill className="object-cover" />
              </div>
              <div className="space-y-4">
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src="/assets/images/bg/about12.webp" alt="Office collaboration" fill className="object-cover" />
                </div>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image src="/assets/images/bg/about13.webp" alt="Modern workspace" fill className="object-cover" />
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-[#f7f8fb] py-16">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-semibold text-zinc-900">What sets us apart?</h2>
          <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-zinc-600 sm:text-base">
            At Webastral, we cater to your needs with utmost care. By taking a client
            centric approach, we make sure that our solutions are in line with client
            needs. With experience and expertise in our pocket, we proudly make this
            claim of being the best in the business.
          </p>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {aboutStats.map((stat) => (
              <div key={stat.label} className="rounded-2xl bg-white p-6 shadow-sm">
                <p className="text-3xl font-bold text-[#2f6fd6]">{stat.value}</p>
                <p className="mt-2 text-sm text-zinc-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <TestimonialsSection />
      <JoinCta />
    </>
  );
}
