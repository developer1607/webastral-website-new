import Image from "next/image";

export default function ServiceFeatureCard({
  image,
  title,
  description,
  className = "bg-[#f7f8fb]",
}: {
  image: string;
  title: string;
  description: string;
  className?: string;
}) {
  return (
    <article
      className={`h-full rounded-2xl border border-zinc-100 p-5 text-center shadow-sm ${className}`}
    >
      <div className="mx-auto mb-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#e8f1ff]">
        <Image src={image} alt="" width={28} height={28} />
      </div>
      <h3 className="text-sm font-semibold text-zinc-900">{title}</h3>
      {description ? (
        <p className="mt-2 text-xs leading-relaxed text-zinc-600 sm:text-sm">{description}</p>
      ) : null}
    </article>
  );
}
