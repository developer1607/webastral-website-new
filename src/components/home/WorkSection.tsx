"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const slides = [
  {
    brand: (
      <>
        <span className="text-orange-500">X</span>presso
      </>
    ),
    title: "SEO Optimized Architecture",
    description:
      "We engineer high tech solutions for your software needs. Be it website development, digital marketing, or app development — we plan, design, and ship products that are fast, searchable, and built to convert.",
    image: "/assets/images/bg/work-speaks3.png",
  },
  {
    brand: (
      <>
        <span className="text-[#2f6fd6]">E</span>commerce
      </>
    ),
    title: "High Converting E-Commerce",
    description:
      "We create scalable e-commerce experiences with intuitive user journeys, optimized performance, secure integrations, and conversion-focused interfaces designed to help businesses grow.",
    image: "/assets/images/bg/work-speaks1.jpg",
  },
  {
    brand: (
      <>
        <span className="text-[#2f6fd6]">S</span>ocial
      </>
    ),
    title: "Engaging Social Platforms",
    description:
      "From community platforms to social applications, we design and develop experiences that make interaction simple, engaging, and intuitive across devices.",
    image: "/assets/images/bg/work-speaks2.jpg",
  },
  {
    brand: (
      <>
        <span className="text-orange-500">W</span>eb Apps
      </>
    ),
    title: "Sophisticated Web Applications",
    description:
      "We build modern web applications with clean architecture, responsive interfaces, powerful functionality, and a strong focus on performance and usability.",
    image: "/assets/images/bg/portfolio12.png",
  },
];

export default function WorkSection() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [direction, setDirection] = useState<"up" | "down">("down");
  const [isAnimating, setIsAnimating] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const touchStartY = useRef<number | null>(null);

  const totalSlides = slides.length;

  /*
   * Check if the slider section is currently occupying
   * the viewport.
   */
  const isSectionInView = () => {
    const section = sectionRef.current;

    if (!section) return false;

    const rect = section.getBoundingClientRect();

    return (
      rect.top <= window.innerHeight * 0.35 &&
      rect.bottom >= window.innerHeight * 0.65
    );
  };

  /*
   * Change slide.
   *
   * direction:
   * down = scrolling from top to bottom
   * up   = scrolling from bottom to top
   */
  const changeSlide = (nextSlide: number, slideDirection: "up" | "down") => {
    if (isAnimating) return;

    setDirection(slideDirection);
    setIsAnimating(true);
    setActiveSlide(nextSlide);
  };

  /*
   * Desktop wheel scrolling.
   */
  useEffect(() => {
    const handleWheel = (event: WheelEvent) => {
      if (!isSectionInView()) return;

      const scrollingDown = event.deltaY > 0;
      const scrollingUp = event.deltaY < 0;

      /*
       * DOWN
       *
       * If slides are available:
       * prevent page scroll and move to next slide.
       *
       * If we're already on slide 4:
       * DO NOT preventDefault().
       *
       * This allows the browser to immediately continue
       * scrolling to the next section.
       */
      if (scrollingDown) {
        if (activeSlide < totalSlides - 1) {
          event.preventDefault();

          changeSlide(activeSlide + 1, "down");
        }

        return;
      }

      /*
       * UP
       *
       * If slides are available:
       * prevent page scroll and move to previous slide.
       *
       * If we're already on slide 1:
       * DO NOT preventDefault().
       *
       * This allows the browser to immediately continue
       * scrolling to the previous section.
       */
      if (scrollingUp) {
        if (activeSlide > 0) {
          event.preventDefault();

          changeSlide(activeSlide - 1, "up");
        }
      }
    };

    window.addEventListener("wheel", handleWheel, {
      passive: false,
    });

    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, [activeSlide, totalSlides, isAnimating]);

  /*
   * Mobile / tablet touch support.
   */
  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    const handleTouchStart = (event: TouchEvent) => {
      touchStartY.current = event.touches[0].clientY;
    };

    const handleTouchEnd = (event: TouchEvent) => {
      if (touchStartY.current === null) return;

      const touchEndY = event.changedTouches[0].clientY;

      /*
       * Positive = swipe up
       * Negative = swipe down
       */
      const difference = touchStartY.current - touchEndY;

      touchStartY.current = null;

      /*
       * Ignore small movements.
       */
      if (Math.abs(difference) < 50) return;

      if (!isSectionInView()) return;

      if (isAnimating) return;

      /*
       * Swipe UP
       * → next slide
       */
      if (difference > 0) {
        if (activeSlide < totalSlides - 1) {
          changeSlide(activeSlide + 1, "down");
        }

        return;
      }

      /*
       * Swipe DOWN
       * → previous slide
       */
      if (difference < 0) {
        if (activeSlide > 0) {
          changeSlide(activeSlide - 1, "up");
        }
      }
    };

    section.addEventListener("touchstart", handleTouchStart, {
      passive: true,
    });

    section.addEventListener("touchend", handleTouchEnd, {
      passive: true,
    });

    return () => {
      section.removeEventListener("touchstart", handleTouchStart);
      section.removeEventListener("touchend", handleTouchEnd);
    };
  }, [activeSlide, totalSlides, isAnimating]);

  /*
   * Release the animation lock after the CSS animation.
   */
  useEffect(() => {
    if (!isAnimating) return;

    const timer = window.setTimeout(() => {
      setIsAnimating(false);
    }, 550);

    return () => {
      window.clearTimeout(timer);
    };
  }, [activeSlide, isAnimating]);

  return (
    <section
      ref={sectionRef}
      className="relative bg-white"
      style={{
        minHeight: `${totalSlides * 100}vh`,
      }}
    >
      {/* Sticky slider */}
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden bg-white py-16 sm:py-20">
        <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Heading */}
          <FadeIn>
            <SectionHeading
              title="Our Work"
              highlight="Speaks for Itself"
              description="From social apps and e-commerce platforms to sophisticated web applications, our portfolio shows how we turn ideas into products people use."
            />
          </FadeIn>

          {/* Slider */}
          <div className="relative mt-10 sm:mt-12">
            <div className="overflow-hidden rounded-[32px] bg-[#f7f8fb] shadow-sm">
              <div
                className="relative min-h-[690px] sm:min-h-[700px] lg:min-h-[500px]"
              >
                {slides.map((slide, index) => {
                  const isActive = index === activeSlide;

                  /*
                   * Determine where the slide should enter from.
                   */
                  let transform = "translateY(100%)";

                  if (isActive) {
                    transform = "translateY(0)";
                  } else if (
                    direction === "down" &&
                    index === activeSlide - 1
                  ) {
                    /*
                     * When scrolling DOWN:
                     * old slide moves to TOP.
                     */
                    transform = "translateY(-100%)";
                  } else if (
                    direction === "up" &&
                    index === activeSlide + 1
                  ) {
                    /*
                     * When scrolling UP:
                     * old slide moves to BOTTOM.
                     */
                    transform = "translateY(100%)";
                  }

                  return (
                    <div
                      key={index}
                      className={`absolute inset-0 lg:grid lg:grid-cols-2 ${
                        isActive
                          ? "z-20"
                          : "pointer-events-none z-10"
                      }`}
                      style={{
                        transform,
                        transition:
                          "transform 550ms cubic-bezier(0.22, 1, 0.36, 1)",
                      }}
                    >
                      {/* Content */}
                      <div className="flex min-h-[430px] flex-col justify-center p-8 sm:p-12 lg:min-h-[500px]">
                        <p className="text-2xl font-bold tracking-tight text-zinc-900 sm:text-3xl">
                          {slide.brand}
                        </p>

                        <h3 className="mt-4 max-w-xl text-2xl font-semibold leading-tight text-zinc-900 sm:text-3xl lg:text-4xl">
                          {slide.title}
                        </h3>

                        <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-600 sm:text-base">
                          {slide.description}
                        </p>

                        <Link
                          href="/portfolio"
                          className="mt-6 inline-flex w-fit rounded-full bg-[#2f6fd6] px-7 py-3 text-sm font-medium text-white transition hover:bg-[#2563c7]"
                        >
                          View Portfolio
                        </Link>
                      </div>

                      {/* Image */}
                      <div className="relative min-h-[260px] aspect-[16/11] lg:aspect-auto lg:min-h-[500px]">
                        <Image
                          src={slide.image}
                          alt={slide.title}
                          fill
                          loading="lazy"
                          className="object-cover"
                          sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Bottom navigation */}
            <div className="mt-6 flex items-center justify-between">
              {/* Slide indicators */}
              <div className="flex items-center gap-2">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => {
                      if (isAnimating || index === activeSlide) return;

                      setDirection(
                        index > activeSlide ? "down" : "up"
                      );

                      setIsAnimating(true);
                      setActiveSlide(index);
                    }}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      activeSlide === index
                        ? "w-8 bg-[#2f6fd6]"
                        : "w-2 bg-zinc-300 hover:bg-zinc-400"
                    }`}
                  />
                ))}
              </div>

              {/* Slide counter */}
              <span className="text-sm font-medium text-zinc-500">
                {String(activeSlide + 1).padStart(2, "0")} /{" "}
                {String(totalSlides).padStart(2, "0")}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}