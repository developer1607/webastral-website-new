"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { FormEvent, useState } from "react";
import {
  brand,
  companyLinks,
  footerServiceLinks,
  socialLinks,
} from "@/lib/site";

const trustBadges = [
  { src: "/footer/iso-27001.png", alt: "ISO 27001:2013" },
  { src: "/footer/iso.png", alt: "ISO certified" },
  { src: "/footer/upwork.png", alt: "Upwork Top Rated Plus" },
  { src: "/footer/clutch.png", alt: "Clutch 5.0 reviews" },
];

function FooterHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="mb-4 text-sm font-semibold text-[#2f6fd6]">{children}</h3>;
}

export default function Footer() {
  const [subscribed, setSubscribed] = useState(false);

  const onSubscribe = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubscribed(true);
  };

  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          <div className="space-y-6">
            <Link href="/">
              <Image
                src="/logo-footer.png?v=20260924"
                alt="WebAstral"
                width={1040}
                height={253}
                className="h-auto max-h-[52px] w-auto max-w-[240px]"
              />
            </Link>
            <p className="text-sm leading-relaxed text-zinc-400 mt-5">
              {brand.description} We help brands grow with websites, apps, and
              digital marketing built around their goals.
            </p>
            <div>
              <FooterHeading>Contact Us</FooterHeading>
              <ul className="space-y-3 text-sm text-zinc-300">
                <li className="flex gap-3">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6fd6]" />
                  <a
                    href={brand.mapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {brand.address}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Phone className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6fd6]" />
                  <a href={brand.phoneHref} className="hover:text-white">
                    {brand.phone}
                  </a>
                </li>
                <li className="flex gap-3">
                  <Mail className="mt-0.5 h-4 w-4 shrink-0 text-[#2f6fd6]" />
                  <a href={`mailto:${brand.email}`} className="hover:text-white">
                    {brand.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div>
            <FooterHeading>Company</FooterHeading>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Our Services</FooterHeading>
            <ul className="space-y-2.5">
              {footerServiceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-zinc-400 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <FooterHeading>Subscribe Us</FooterHeading>
            <p className="mb-4 text-sm text-zinc-400">Make the right business move</p>
            <form
              onSubmit={onSubscribe}
              className="flex overflow-hidden rounded-full border border-zinc-700 bg-zinc-900"
            >
              <input
                type="email"
                required
                placeholder="Email Address"
                className="min-w-0 flex-1 bg-transparent px-4 py-2.5 text-sm text-white outline-none placeholder:text-zinc-500"
              />
              <button
                type="submit"
                className="bg-[#2f6fd6] px-5 text-xs font-semibold tracking-wide hover:bg-[#2563c7]"
              >
                SEND
              </button>
            </form>
            {subscribed ? (
              <p className="mt-2 text-xs text-emerald-400">Thanks for subscribing.</p>
            ) : null}
            <div className="mt-6 flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#2f6fd6] hover:opacity-90"
                >
                  {social.icon === "linkedin" ? (
                    <svg
                      viewBox="0 0 24 24"
                      className="h-4 w-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      aria-hidden
                    >
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
                      <rect width="4" height="12" x="2" y="9" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  ) : (
                    <Image
                      src={social.icon}
                      alt=""
                      width={18}
                      height={18}
                      className="size-[18px] object-contain"
                    />
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-wrap items-center justify-center gap-6 border-t border-zinc-800 pt-10">
          {trustBadges.map((badge) => (
            <Image
              key={badge.src}
              src={badge.src}
              alt={badge.alt}
              width={120}
              height={48}
              className="h-12 w-auto object-contain opacity-90"
            />
          ))}
        </div>
      </div>

      <div className="bg-[#2f6fd6]">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 py-3 text-sm sm:flex-row sm:px-6 lg:px-8">
          <p>© 2010–2026 WebAstral Infosystems. All Rights Reserved</p>
          <div className="flex gap-6">
            <Link href="/privacy-policy" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="/terms-of-use" className="hover:underline">
              Terms of Use
            </Link>
            <Link href="/sitemap" className="hover:underline">
              Site Map
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
