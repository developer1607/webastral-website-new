import Image from "next/image";
import Link from "next/link";

export default function PageBanner({
  title,
  image = "/assets/images/bg/office1.png",
  crumbs,
}: {
  title: string;
  image?: string;
  crumbs?: { href: string; label: string }[];
}) {
  const trail = crumbs ?? [];

  return (
    <section style={{
  background: `
    linear-gradient(90deg, rgba(22, 184, 100, 0.08) 1px, transparent 1px) 0px 0px / 92px 100%, linear-gradient(135deg, rgb(47, 111, 214), rgb(14 59 144))
  `,
}} className="relative isolate overflow-hidden  py-20 sm:py-28">
      {/* <Image
        src={image}
        alt=""
        fill
        className="object-cover opacity-40"
        sizes="100vw"
        priority
      /> */}
      {/* <div className="absolute inset-0 bg-black/55" /> */}
      <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
        <p className="mb-4 text-sm text-white/80">
          <Link href="/" className="hover:text-white">
            Home
          </Link>
          {trail.map((crumb) => (
            <span key={crumb.href}>
              <span className="mx-2 text-white/40">/</span>
              <Link href={crumb.href} className="hover:text-white">
                {crumb.label}
              </Link>
            </span>
          ))}
          <span className="mx-2 text-white/40">/</span>
          <span className="text-white">{title}</span>
        </p>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl lg:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  );
}
