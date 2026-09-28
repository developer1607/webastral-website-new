"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const filters = [
  { href: "/portfolio", label: "All" },
  { href: "/portfolio/web-development", label: "Web Development" },
  { href: "/portfolio/web-design", label: "Web Design" },
  { href: "/portfolio/mobile-application", label: "Mobile Application" },
  { href: "/portfolio/seo", label: "SEO" },
  { href: "/portfolio/digital-marketing", label: "Digital Marketing" },
  { href: "/portfolio/graphic-designing", label: "Graphic Designing" },
];

export default function PortfolioFilters() {
  const pathname = usePathname();

  return (
    <div className="mb-10 flex flex-wrap justify-center gap-3">
      {filters.map((filter) => {
        const active = pathname === filter.href;
        return (
          <Link
            key={filter.href}
            href={filter.href}
            className={`rounded-full px-4 py-2 text-sm transition ${
              active
                ? "bg-[#2f6fd6] text-white"
                : "border border-zinc-200 text-zinc-700 hover:border-[#2f6fd6] hover:text-[#2f6fd6]"
            }`}
          >
            {filter.label}
          </Link>
        );
      })}
    </div>
  );
}
