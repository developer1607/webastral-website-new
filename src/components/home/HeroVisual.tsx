"use client";

import Image from "next/image";
import { useState } from "react";

const W = 462;
const H = 452;

export default function HeroVisual() {
  const [ready, setReady] = useState(false);

  return (
    <div className="relative mx-auto aspect-[462/452] w-full max-w-[280px] sm:max-w-[380px] md:max-w-[420px] lg:max-w-[462px]">
      <Image
        src="/images/home/hero/hero-visual.png"
        alt="WebAstral team collaborating"
        width={W}
        height={H}
        onLoad={() => setReady(true)}
        onError={() => setReady(true)}
        className={`h-auto w-full transition-opacity duration-300 ${
          ready ? "opacity-100" : "opacity-0"
        }`}
        sizes="(max-width: 640px) 280px, (max-width: 1024px) 380px, 462px"
      />
    </div>
  );
}
