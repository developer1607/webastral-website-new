"use client";

import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useQuote } from "@/components/forms/QuoteProvider";
import { navItems } from "@/lib/site";

function isActive(pathname: string, href: string) {
  if (href === "/") return pathname === "/";
  return pathname === href || pathname.startsWith(`${href}/`);
}

export default function Header() {
  const pathname = usePathname();
  const { setOpen: setQuoteOpen } = useQuote();
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  useEffect(() => {
    setOpen(false);
    setOpenGroup(null);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-100 bg-white/95 backdrop-blur">
      <div className="relative mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8">
        <Link href="/" className="relative z-10 shrink-0">
          <Image
            src="/logo.png?v=20260924"
            alt="WebAstral"
            width={1040}
            height={253}
            priority
            style={{ height: "2.5rem", width: "auto" }}
            className="!h-10 w-auto sm:!h-11"
          />
        </Link>

        <nav className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 items-center gap-1 xl:flex">
          {navItems.map((item) => (
            <div key={item.href} className="group relative">
              <Link
                href={item.href}
                className={`flex items-center gap-1 rounded-full px-3 py-2 text-sm font-medium transition ${
                  isActive(pathname, item.href)
                    ? "text-[#2f6fd6]"
                    : "text-zinc-800 hover:text-[#2f6fd6]"
                }`}
              >
                {item.label}
                {item.children ? (
                  <ChevronDown className="h-3.5 w-3.5 opacity-70" />
                ) : null}
              </Link>

              {item.children ? (
                <div className="invisible absolute left-0 top-full z-40 pt-3 opacity-0 transition group-hover:visible group-hover:opacity-100">
                  <div
                    className={`rounded-2xl border border-zinc-100 bg-white p-4 shadow-xl ${
                      item.label === "Services"
                        ? "grid w-[720px] grid-cols-4 gap-4"
                        : "w-56 space-y-1"
                    }`}
                  >
                    {item.children.map((child) => (
                      <div key={child.label}>
                        <Link
                          href={child.href || item.href}
                          className="block text-sm font-semibold text-zinc-900 hover:text-[#2f6fd6]"
                        >
                          {child.label}
                        </Link>
                        {child.children ? (
                          <ul className="mt-2 space-y-1.5">
                            {child.children.map((sub) => (
                              <li key={sub.href}>
                                <Link
                                  href={sub.href}
                                  className="text-xs text-zinc-500 hover:text-[#2f6fd6]"
                                >
                                  {sub.label}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        ) : null}
                      </div>
                    ))}
                  </div>
                </div>
              ) : null}
            </div>
          ))}
        </nav>

        <div className="relative z-10 flex items-center gap-3">
          <button
            type="button"
            onClick={() => setQuoteOpen(true)}
            className="hidden rounded-full bg-black px-6 py-2.5 text-sm font-medium text-white transition hover:opacity-90 sm:inline-flex"
          >
            Consult Now
          </button>
          <button
            type="button"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200 xl:hidden"
            onClick={() => setOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </button>
        </div>
      </div>

      {open ? (
        <div className="fixed inset-0 z-50 bg-white xl:hidden">
          <div className="flex items-center justify-between border-b border-zinc-100 px-4 py-3">
            <Image
              src="/logo.png?v=20260924"
              alt="WebAstral"
              width={1040}
              height={253}
              style={{ height: "2.25rem", width: "auto" }}
              className="!h-9 w-auto"
            />
            <button
              type="button"
              onClick={() => setOpen(false)}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-zinc-200"
              aria-label="Close menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
          <div className="h-[calc(100vh-64px)] overflow-y-auto px-4 py-6 bg-[#eef2f7]">
            <ul className="space-y-2">
              {navItems.map((item) => (
                <li key={item.href}>
                  <div className="flex items-center justify-between">
                    <Link href={item.href} className="py-2 text-base font-medium text-zinc-900">
                      {item.label}
                    </Link>
                    {item.children ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenGroup(openGroup === item.label ? null : item.label)
                        }
                        className="p-2"
                        aria-label={`Toggle ${item.label} submenu`}
                      >
                        <ChevronDown
                          className={`h-4 w-4 transition ${
                            openGroup === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : null}
                  </div>
                  {item.children && openGroup === item.label ? (
                    <div className="mb-3 ml-3 space-y-3 border-l border-zinc-200 pl-3">
                      {item.children.map((child) => (
                        <div key={child.label}>
                          <Link
                            href={child.href || item.href}
                            className="text-sm font-semibold text-zinc-800"
                          >
                            {child.label}
                          </Link>
                          {child.children ? (
                            <ul className="mt-1 space-y-1">
                              {child.children.map((sub) => (
                                <li key={sub.href}>
                                  <Link href={sub.href} className="text-sm text-zinc-500">
                                    {sub.label}
                                  </Link>
                                </li>
                              ))}
                            </ul>
                          ) : null}
                        </div>
                      ))}
                    </div>
                  ) : null}
                </li>
              ))}
            </ul>
            <button
              type="button"
              onClick={() => {
                setOpen(false);
                setQuoteOpen(true);
              }}
              className="mt-6 flex w-full items-center justify-center rounded-full bg-black px-6 py-3 text-sm font-medium text-white"
            >
              Consult Now
            </button>
          </div>
        </div>
      ) : null}
    </header>
  );
}
