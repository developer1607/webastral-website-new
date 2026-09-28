import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import { brand } from "@/lib/site";

export const metadata: Metadata = { title: "Terms of Use" };

export default function TermsPage() {
  return (
    <>
      <PageBanner title="Terms of Use" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-sm leading-relaxed text-zinc-600 sm:px-6 lg:px-8 sm:text-base">
          <p>
            Welcome to WebAstral Infosystems. By accessing this website, you agree to these
            terms of use. If you do not agree, please discontinue use of the site.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">1. Use of the website</h2>
          <p>
            The content on this website is provided for general information about our IT,
            design, and digital marketing services. You may not copy, modify, or redistribute
            materials without written permission.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">2. Intellectual property</h2>
          <p>
            All logos, designs, text, and other materials are owned by WebAstral Infosystems
            or our licensors and are protected by applicable intellectual property laws.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">3. Project engagements</h2>
          <p>
            Any proposal, estimate, or statement of work is governed by a separate agreement.
            Website content does not constitute a binding offer.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">4. Limitation of liability</h2>
          <p>
            We make reasonable efforts to keep information accurate, but we do not warrant
            completeness. WebAstral is not liable for damages arising from use of this site.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">5. Contact</h2>
          <p>
            Questions about these terms can be sent to {brand.email} or {brand.phone}.
          </p>
        </div>
      </section>
    </>
  );
}
