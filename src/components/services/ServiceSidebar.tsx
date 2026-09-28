import Image from "next/image";
import Link from "next/link";
import QuoteButton from "@/components/services/QuoteButton";
import { allServices, serviceCategories, type ServiceDetail } from "@/lib/services";

export default function ServiceSidebar({ current }: { current: ServiceDetail }) {
  return (
    <aside className="space-y-5 lg:sticky lg:top-24">
      <div className="rounded-3xl bg-[#f7f8fb] p-6">
        <h3 className="text-lg font-semibold text-zinc-900">All Services</h3>
        <div className="mt-4 max-h-[420px] space-y-4 overflow-y-auto pr-1">
          {serviceCategories.map((category) => {
            const items = allServices.filter((service) => service.category === category);
            if (!items.length) return null;
            return (
              <div key={category}>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-[#2f6fd6]">
                  {category}
                </p>
                <ul className="space-y-1.5">
                  {items.map((service) => (
                    <li key={service.slug}>
                      <Link
                        href={`/services/${service.slug}`}
                        className={`block rounded-xl px-3 py-2 text-sm transition ${
                          service.slug === current.slug
                            ? "bg-white font-medium text-[#2f6fd6] shadow-sm"
                            : "text-zinc-600 hover:bg-white hover:text-[#2f6fd6]"
                        }`}
                      >
                        {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>

      <div className="overflow-hidden rounded-3xl bg-[#0b0d17] p-6 text-white">
        <p className="text-sm text-zinc-300">Have a project in mind?</p>
        <h3 className="mt-2 text-2xl font-semibold">Let’s build it together</h3>
        <p className="mt-3 text-sm leading-relaxed text-zinc-400">
          Tell us what you need. Our team will come back with a clear plan, timeline, and quote.
        </p>
        <QuoteButton className="mt-6 inline-flex rounded-full bg-[#2f6fd6] px-6 py-2.5 text-sm font-medium text-white transition hover:bg-[#2563c7]">
          Get a Quote
        </QuoteButton>
      </div>
    </aside>
  );
}
