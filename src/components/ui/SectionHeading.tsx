import Link from "next/link";
import type { ReactNode } from "react";

export function splitHeading(text: string, boldCount = 3) {
  const words = text.trim().split(/\s+/);
  if (words.length <= 1) return { lead: "", rest: text };
  const count = Math.min(boldCount, words.length - 1);
  return {
    lead: words.slice(0, -count).join(" "),
    rest: words.slice(-count).join(" "),
  };
}

export default function SectionHeading({
  eyebrow,
  title,
  highlight,
  description,
  align = "center",
}: {
  eyebrow?: string;
  title: string;
  highlight?: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-xl"}>
      {eyebrow ? (
        <p className="mb-3 text-sm font-medium tracking-wide text-[#2f6fd6]">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
        {title}{" "}
        {highlight ? (
          <span className="font-bold text-zinc-900">{highlight}</span>
        ) : null}
      </h2>
      {description ? (
        <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
          {description}
        </p>
      ) : null}
    </div>
  );
}

export function PrimaryButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-[#2f6fd6] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7] ${className}`}
    >
      {children}
    </Link>
  );
}

export function DarkButton({
  href,
  children,
  className = "",
}: {
  href: string;
  children: ReactNode;
  className?: string;
}) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full bg-black px-7 py-3 text-sm font-medium text-white transition hover:opacity-90 ${className}`}
    >
      {children}
    </Link>
  );
}
