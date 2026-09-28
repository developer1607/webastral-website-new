import type { Metadata } from "next";
import Image from "next/image";
import ContactForm from "@/components/forms/ContactForm";
import PageBanner from "@/components/layout/PageBanner";
import { brand } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with WebAstral Infosystems for top-notch IT solutions. Our team is ready to assist you.",
};

export default function ContactPage() {
  return (
    <>
      <PageBanner title="Contact Us" image="/assets/images/bg/contact-us-dowanload.png" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-medium text-[#2f6fd6]">- Get in Touch -</p>
            <h2 className="mt-2 text-3xl font-semibold text-zinc-900">Let’s Get in Touch</h2>
            <p className="mt-4 text-sm text-zinc-600">
              Get the most of reduction in your team’s operating costs for the whole
              product which creates amazing UI/UX experiences.
            </p>
          </div>
          <div className="mt-12 grid gap-8 lg:grid-cols-[0.9fr_1.3fr]">
            <div className="overflow-hidden rounded-3xl bg-[#f7f8fb]">
              <div className="p-6">
                <h3 className="text-xl font-semibold text-zinc-900">Mohali</h3>
                <ul className="mt-4 space-y-3 text-sm text-zinc-600">
                  <li>
                    <span className="font-medium text-zinc-900">Address: </span>
                    {brand.address}
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">Phone: </span>
                    {brand.phone}, Skype: {brand.skype}
                  </li>
                  <li>
                    <span className="font-medium text-zinc-900">Email: </span>
                    {brand.email}, {brand.hrEmail}
                  </li>
                </ul>
              </div>
              <div className="relative aspect-[16/10]">
                <Image src="/assets/images/bg/office1.png" alt="WebAstral Mohali office" fill className="object-cover" />
              </div>
            </div>
            <div className="rounded-3xl border border-zinc-100 p-6 sm:p-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
      <div className="h-[380px] w-full">
        <iframe
          title="WebAstral Infosystems location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3430.1966318967325!2d76.70794719999999!3d30.7128721!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390fee5f9cd3559d%3A0xcd97cdf70cd19201!2sWebAstral%20InfoSystems!5e0!3m2!1sen!2sin!4v1734676393446!5m2!1sen!2sin"
          className="h-full w-full border-0"
          loading="lazy"
        />
      </div>
    </>
  );
}
