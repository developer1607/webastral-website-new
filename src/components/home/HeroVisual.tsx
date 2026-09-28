import Image from "next/image";

const W = 462;
const H = 452;

export default function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[462px]">
      <Image
        src="/images/home/hero/hero-visual.png"
        alt="WebAstral team collaborating"
        width={W}
        height={H}
        quality={100}
        priority
        className="h-auto w-full"
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 462px"
      />
    </div>
  );
}
