import Image from "next/image";
import Link from "next/link";
import FadeIn from "@/components/ui/FadeIn";
import { getServiceVisuals } from "@/lib/service-images";
import type { WorkVariant } from "@/lib/service-layout";
import { getWorkProof } from "@/lib/service-standard";
import type { ServiceDetail } from "@/lib/services";

export default function ServiceWorkTeaser({
  service,
  variant = "split",
}: {
  service: ServiceDetail;
  variant?: WorkVariant;
}) {
  const visuals = getServiceVisuals(service);
  const proof = getWorkProof(service);

  if (variant === "full") {
    return (
      <section className="bg-[#0b0d17] py-16 text-white sm:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="relative overflow-hidden rounded-[32px]">
              <div className="relative min-h-[320px] aspect-[16/9] sm:min-h-[420px] lg:min-h-[520px]">
                <Image
                  src={visuals.contact}
                  alt={`${service.title} delivery example`}
                  fill
                  className="object-cover"
                  sizes="100vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d17] via-[#0b0d17]/55 to-transparent" />
              </div>
              <div className="absolute inset-x-0 bottom-0 p-8 sm:p-12">
                <p className="text-sm font-medium tracking-wide text-[#7aa4ea]">Proof of delivery</p>
                <h2 className="mt-3 max-w-2xl text-2xl font-normal leading-snug sm:text-3xl">
                  {proof.lead} <span className="font-bold">{proof.rest}</span>
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 sm:text-base">
                  {proof.body}
                </p>
                <Link
                  href="/portfolio"
                  className="mt-6 inline-flex w-fit rounded-full bg-[#2f6fd6] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]"
                >
                  View portfolio
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="group overflow-hidden rounded-[32px] bg-[#f7f8fb] shadow-sm lg:grid lg:grid-cols-2">
            <div className="flex flex-col justify-center p-8 sm:p-12">
              <p className="text-sm font-medium tracking-wide text-[#2f6fd6]">Proof of delivery</p>
              <h2 className="mt-3 text-2xl font-normal leading-snug text-zinc-700 sm:text-3xl">
                {proof.lead}{" "}
                <span className="font-bold text-zinc-900">{proof.rest}</span>
              </h2>
              <p className="mt-4 text-sm leading-relaxed text-zinc-600 sm:text-base">
                {proof.body}
              </p>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex w-fit rounded-full bg-[#2f6fd6] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]"
              >
                View portfolio
              </Link>
            </div>
            <div className="relative min-h-[260px] aspect-[16/11] overflow-hidden lg:aspect-auto lg:min-h-[420px]">
              <Image
                src={visuals.contact}
                alt={`${service.title} delivery example`}
                fill
                className="object-cover transition duration-700 ease-out group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
