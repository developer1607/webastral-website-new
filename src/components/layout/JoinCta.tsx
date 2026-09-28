import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";

export default function JoinCta({
  title = "We would love to see you grow with us!",
  href = "/contact",
  action = "Join Us",
}: {
  title?: string;
  href?: string;
  action?: string;
}) {
  return (
    <section className="bg-white py-10 sm:py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="flex flex-col items-center justify-between gap-6 rounded-3xl bg-[#2f6fd6] px-8 py-10 text-white sm:flex-row sm:px-12">
            <h2 className="max-w-xl text-center text-2xl font-semibold sm:text-left sm:text-3xl">
              {title}
            </h2>
            <Link
              href={href}
              className="inline-flex rounded-full bg-white px-8 py-3 text-sm font-semibold text-zinc-900 transition hover:bg-zinc-100"
            >
              {action}
            </Link>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
