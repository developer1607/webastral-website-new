import Image from "next/image";
import Link from "next/link";
import type { ServiceDetail } from "@/lib/services";

export default function ServiceCard({
  service,
  featured = false,
}: {
  service: ServiceDetail;
  featured?: boolean;
}) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-zinc-100 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
      {featured ? (
        <div className="relative aspect-[16/10]">
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover transition duration-700 group-hover:scale-105"
            sizes="(max-width: 1024px) 50vw, 33vw"
          />
        </div>
      ) : null}
      <div className="flex flex-1 flex-col p-6">
        {service.icon ? (
          <span className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#e8f1ff]">
            <Image src={service.icon} alt="" width={22} height={22} />
          </span>
        ) : (
          <p className="mb-2 text-xs font-medium uppercase tracking-wide text-[#2f6fd6]">
            {service.category}
          </p>
        )}
        <h3 className="text-lg font-semibold text-zinc-900">
          <Link href={`/services/${service.slug}`} className="hover:text-[#2f6fd6]">
            {service.title}
          </Link>
        </h3>
        <p className="mt-3 flex-1 text-sm leading-relaxed text-zinc-600">
          {service.p1.length > 180 ? `${service.p1.slice(0, 177).trim()}…` : service.p1}
        </p>
        <Link
          href={`/services/${service.slug}`}
          className="mt-5 inline-flex text-sm font-medium text-[#2f6fd6] hover:underline"
        >
          Learn more
        </Link>
      </div>
    </article>
  );
}
