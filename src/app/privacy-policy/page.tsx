import type { Metadata } from "next";
import PageBanner from "@/components/layout/PageBanner";
import { brand } from "@/lib/site";

export const metadata: Metadata = { title: "Privacy Policy" };

export default function PrivacyPage() {
  return (
    <>
      <PageBanner title="Privacy Policy" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-4xl space-y-6 px-4 text-sm leading-relaxed text-zinc-600 sm:px-6 lg:px-8 sm:text-base">
          <p>
            At Webastral Infosystems, we value your privacy. This statement outlines how we
            collect, manage, utilize, safeguard, and share your personal data, as well as
            the privacy rights you have under relevant privacy regulations.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">1. Information We Collect</h2>
          <p>
            We collect your information directly from you through the interactions that we
            have; we only collect information voluntarily provided by you, like your name,
            email, contact, job title, etc.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">2. How We Use Your Information</h2>
          <ul className="list-disc space-y-2 pl-5">
            <li>Enhance your experience and improve our products and services.</li>
            <li>Communicate with you regarding inquiries, support requests, or updates.</li>
            <li>Send you updates or newsletters if you have opted in.</li>
            <li>Comply with legal regulations.</li>
          </ul>
          <h2 className="text-2xl font-semibold text-zinc-900">3. Cookies and Tracking Technologies</h2>
          <p>
            Cookies are small files stored on your device that help us recognize you when
            you return to our site. You can always opt out whenever you want.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">4. Data Sharing and Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information to third parties.</p>
          <h2 className="text-2xl font-semibold text-zinc-900">5. Third-Party Links</h2>
          <p>Our website doesn’t contain links to third-party websites.</p>
          <h2 className="text-2xl font-semibold text-zinc-900">6. Changes to This Privacy Statement</h2>
          <p>
            We reserve the right to change or update this statement at any time. Changes
            will be updated on this page with the updated effective date.
          </p>
          <h2 className="text-2xl font-semibold text-zinc-900">7. Contact Us</h2>
          <p>
            {brand.address}
            <br />
            Phone: {brand.phone}
            <br />
            Email: {brand.email}, {brand.hrEmail}
          </p>
        </div>
      </section>
    </>
  );
}
