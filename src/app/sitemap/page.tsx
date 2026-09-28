import type { Metadata } from "next";
import Link from "next/link";
import PageBanner from "@/components/layout/PageBanner";
import { companyLinks, footerServiceLinks, navItems } from "@/lib/site";
import { allServices } from "@/lib/services";

export const metadata: Metadata = { title: "Site Map" };

export default function SitemapPage() {
  return (
    <>
      <PageBanner title="Site Map" />
      <section className="bg-white py-16 sm:py-20">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 sm:px-6 md:grid-cols-3 lg:px-8">
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Main pages</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li><Link href="/">Home</Link></li>
              {navItems.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
              {companyLinks.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Services</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              {footerServiceLinks.map((item) => (
                <li key={item.href}><Link href={item.href}>{item.label}</Link></li>
              ))}
              {allServices.slice(0, 12).map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}`}>{item.title}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h2 className="text-lg font-semibold text-zinc-900">Legal</h2>
            <ul className="mt-4 space-y-2 text-sm text-zinc-600">
              <li><Link href="/privacy-policy">Privacy Policy</Link></li>
              <li><Link href="/terms-of-use">Terms of Use</Link></li>
              <li><Link href="/faq">FAQ</Link></li>
              <li><Link href="/contact">Contact Us</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
