"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type IndustryCard = {
  label: string;
  src: string;
  alt: string;
  width: number;
  height: number;
};

const industryCards: IndustryCard[] = [
  {
    label: "Real Estate",
    src: "/images/home/industries/real-estate.png",
    alt: "Real estate website design preview",
    width: 649,
    height: 391,
  },
  {
    label: "Healthcare",
    src: "/images/home/industries/healthcare.png",
    alt: "Healthcare platform design preview",
    width: 652,
    height: 391,
  },
  {
    label: "Ecommerce",
    src: "/images/home/industries/ecommerce.png",
    alt: "Ecommerce mobile app design preview",
    width: 222,
    height: 391,
  },
];

const SLIDE_COUNT = industryCards.length;
const AUTOPLAY_MS = 4500;

const navButtonClass =
  "flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 shadow-sm transition hover:bg-zinc-50 md:h-11 md:w-11";

const slideClass =
  "relative flex w-[min(82vw,340px)] shrink-0 snap-center justify-center overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm sm:w-[min(58vw,400px)] md:w-auto md:max-w-none md:snap-start md:rounded-2xl lg:snap-start";

const imageClass =
  "block h-[clamp(160px,42vw,220px)] w-auto max-w-full object-contain sm:h-[clamp(200px,32vw,260px)] md:h-[clamp(220px,28vw,280px)] lg:h-[clamp(240px,24vw,300px)]";

export default function IndustriesSection() {
  const trackRef = useRef<HTMLDivElement>(null);
  const activeIndexRef = useRef(0);
  const isJumpingRef = useRef(false);
  const scrollEndTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isReady, setIsReady] = useState(false);

  const loopSlides = useMemo(
    () => [...industryCards, ...industryCards, ...industryCards],
    [],
  );

  useEffect(() => {
    activeIndexRef.current = activeIndex;
  }, [activeIndex]);

  const getSlideOffsets = useCallback(() => {
    const track = trackRef.current;
    if (!track) return [];

    return Array.from(track.children).map(
      (child) => (child as HTMLElement).offsetLeft - track.offsetLeft,
    );
  }, []);

  const getNearestDomIndex = useCallback(() => {
    const track = trackRef.current;
    const offsets = getSlideOffsets();
    if (!track || offsets.length === 0) return SLIDE_COUNT;

    let nearest = 0;
    let minDistance = Number.POSITIVE_INFINITY;
    offsets.forEach((offset, index) => {
      const distance = Math.abs(track.scrollLeft - offset);
      if (distance < minDistance) {
        minDistance = distance;
        nearest = index;
      }
    });
    return nearest;
  }, [getSlideOffsets]);

  const scrollToDomIndex = useCallback(
    (domIndex: number, behavior: ScrollBehavior = "smooth") => {
      const track = trackRef.current;
      if (!track) return;

      const offsets = getSlideOffsets();
      const target = offsets[domIndex];
      if (target === undefined) return;

      track.scrollTo({ left: target, behavior });
    },
    [getSlideOffsets],
  );

  const normalizeLoopPosition = useCallback(() => {
    if (isJumpingRef.current) return;

    const nearest = getNearestDomIndex();
    const logical = nearest % SLIDE_COUNT;
    setActiveIndex(logical);
    activeIndexRef.current = logical;

    if (nearest < SLIDE_COUNT) {
      isJumpingRef.current = true;
      scrollToDomIndex(nearest + SLIDE_COUNT, "instant");
      isJumpingRef.current = false;
      return;
    }

    if (nearest >= SLIDE_COUNT * 2) {
      isJumpingRef.current = true;
      scrollToDomIndex(nearest - SLIDE_COUNT, "instant");
      isJumpingRef.current = false;
    }
  }, [getNearestDomIndex, scrollToDomIndex]);

  const scrollByStep = useCallback(
    (direction: "prev" | "next") => {
      const nearest = getNearestDomIndex();
      scrollToDomIndex(
        direction === "next" ? nearest + 1 : nearest - 1,
        "smooth",
      );
    },
    [getNearestDomIndex, scrollToDomIndex],
  );

  const initCarousel = useCallback(
    (preserveSlide = false) => {
      const logical = preserveSlide ? activeIndexRef.current : 0;
      scrollToDomIndex(SLIDE_COUNT + logical, "instant");
      setActiveIndex(logical);
      activeIndexRef.current = logical;
      setIsReady(true);
    },
    [scrollToDomIndex],
  );

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      requestAnimationFrame(() => initCarousel(false));
    });

    let resizeTimer: ReturnType<typeof setTimeout>;
    const onResize = () => {
      clearTimeout(resizeTimer);
      resizeTimer = setTimeout(() => initCarousel(true), 150);
    };

    window.addEventListener("resize", onResize);

    return () => {
      cancelAnimationFrame(frame);
      clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [initCarousel]);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const onScroll = () => {
      if (isJumpingRef.current) return;

      const nearest = getNearestDomIndex();
      const logical = nearest % SLIDE_COUNT;
      setActiveIndex(logical);
      activeIndexRef.current = logical;

      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
      scrollEndTimerRef.current = setTimeout(normalizeLoopPosition, 120);
    };

    track.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      track.removeEventListener("scroll", onScroll);
      if (scrollEndTimerRef.current) {
        clearTimeout(scrollEndTimerRef.current);
      }
    };
  }, [getNearestDomIndex, normalizeLoopPosition]);

  useEffect(() => {
    if (isPaused || !isReady) return;

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const intervalId = window.setInterval(() => {
      const nearest = getNearestDomIndex();
      scrollToDomIndex(nearest + 1, "smooth");
    }, AUTOPLAY_MS);

    return () => window.clearInterval(intervalId);
  }, [getNearestDomIndex, isPaused, isReady, scrollToDomIndex]);

  const goToSlide = useCallback(
    (index: number) => {
      const nearest = getNearestDomIndex();
      const currentLogical = nearest % SLIDE_COUNT;
      const offset = index - currentLogical;
      scrollToDomIndex(nearest + offset, "smooth");
    },
    [getNearestDomIndex, scrollToDomIndex],
  );

  const dotButtons = (
    <div className="flex items-center justify-center gap-2">
      {industryCards.map((card, index) => (
        <button
          key={card.src}
          type="button"
          aria-label={`Go to slide ${index + 1}`}
          aria-current={activeIndex === index ? "true" : undefined}
          onClick={() => goToSlide(index)}
          className={`h-2 rounded-full transition-all ${
            activeIndex === index
              ? "w-6 bg-[#2f6fd6]"
              : "w-2 bg-zinc-300 hover:bg-zinc-400"
          }`}
        />
      ))}
    </div>
  );

  return (
    <section
      className="overflow-x-hidden bg-white py-10 sm:py-16 lg:py-20"
      aria-roledescription="carousel"
      aria-label="Industries we serve"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-xl font-normal leading-snug text-zinc-700 sm:text-3xl lg:text-4xl">
          Industries <span className="font-bold text-zinc-900">We Serve</span>
        </h2>

        <div className="relative mt-8 sm:mt-10">
          <button
            type="button"
            onClick={() => scrollByStep("prev")}
            aria-label="Previous industry slide"
            className={`${navButtonClass} absolute left-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex lg:-left-5`}
          >
            <ChevronLeft className="h-5 w-5" aria-hidden />
          </button>

          <button
            type="button"
            onClick={() => scrollByStep("next")}
            aria-label="Next industry slide"
            className={`${navButtonClass} absolute right-0 top-1/2 z-10 hidden -translate-y-1/2 md:flex lg:-right-5`}
          >
            <ChevronRight className="h-5 w-5" aria-hidden />
          </button>

          <div className="overflow-hidden">
            <div
              ref={trackRef}
              className={`flex touch-pan-x items-stretch gap-3 overflow-x-auto scroll-smooth overscroll-x-contain [scrollbar-width:none] sm:gap-5 lg:gap-6 [&::-webkit-scrollbar]:hidden ${
                isReady ? "opacity-100" : "opacity-0"
              } snap-x snap-proximity max-md:scroll-pl-0 md:snap-none`}
            >
              {loopSlides.map((card, index) => (
                <article
                  key={`${index}-${card.src}`}
                  aria-roledescription="slide"
                  aria-hidden={index % SLIDE_COUNT !== activeIndex}
                  aria-label={`${(index % SLIDE_COUNT) + 1} of ${SLIDE_COUNT}`}
                  className={slideClass}
                >
                  <span className="absolute left-2 top-2 z-10 rounded-full bg-zinc-800/90 px-2.5 py-0.5 text-[11px] font-medium text-white sm:left-3 sm:top-3 sm:px-3 sm:py-1 sm:text-xs">
                    {card.label}
                  </span>
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={card.width}
                    height={card.height}
                    className={imageClass}
                    sizes="(max-width: 640px) 82vw, (max-width: 1024px) 58vw, 33vw"
                    priority={index === SLIDE_COUNT}
                  />
                </article>
              ))}
            </div>
          </div>

          <div className="mt-5 flex items-center justify-between gap-3 md:hidden">
            <button
              type="button"
              onClick={() => scrollByStep("prev")}
              aria-label="Previous industry slide"
              className={navButtonClass}
            >
              <ChevronLeft className="h-5 w-5" aria-hidden />
            </button>
            <div className="min-w-0 flex-1">{dotButtons}</div>
            <button
              type="button"
              onClick={() => scrollByStep("next")}
              aria-label="Next industry slide"
              className={navButtonClass}
            >
              <ChevronRight className="h-5 w-5" aria-hidden />
            </button>
          </div>
        </div>

        <div className="mt-6 hidden md:block">{dotButtons}</div>
      </div>
    </section>
  );
}
