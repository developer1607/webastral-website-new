"use client";

import Image from "next/image";
import FadeIn from "@/components/ui/FadeIn";
import SectionHeading from "@/components/ui/SectionHeading";

const journeyImages = [
  {
    src: "/assets/images/bg/office1.png",
    alt: "WebAstral office collaboration",
  },
  {
    src: "/assets/images/bg/about11.png",
    alt: "Team working together",
  },
  {
    src: "/assets/images/bg/office3.png",
    alt: "Modern workplace culture",
  },
];

export default function JourneySection() {
  return (
    <section className="overflow-hidden bg-white pb-16 sm:pb-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <SectionHeading
            title="Our Journey"
            highlight="Through Time"
          />
        </FadeIn>

        <div className="journey-wrapper mt-10 w-full overflow-hidden">
          <div className="journey-carousel relative h-[220px] w-full sm:h-[300px] lg:h-[365px]">
            {journeyImages.map((image, index) => (
              <div
                key={image.src}
                className={`journey-image journey-image-${index + 1} absolute left-0 top-0 h-[220px] w-1/4 overflow-hidden rounded-[20px] sm:h-[300px] lg:h-[365px]`}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  loading="lazy"
                  className="object-cover"
                  sizes="(max-width: 768px) 40vw, 30vw"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        /* =========================================
           WRAPPER
        ========================================= */

        .journey-wrapper {
          width: 100%;
          overflow: hidden;
        }

        /* =========================================
           CAROUSEL
        ========================================= */

        .journey-carousel {
          position: relative;
          width: 100%;
          height: 365px;

          /*
            Creates the smooth 3D depth
            without rotating the actual images.
          */
          perspective: 1200px;
        }

        /* =========================================
           COMMON IMAGE
        ========================================= */

        .journey-image {
          position: absolute;

          top: 0;

          height: 365px;

          overflow: hidden;

          border-radius: 20px;

          will-change:
            left,
            width,
            height,
            transform,
            clip-path;

          /*
            Smooth marquee-style movement
          */
          animation-name: journeyMarquee;
          animation-duration: 9s;
          animation-timing-function: ease-in-out;
          animation-iteration-count: infinite;

          /*
            IMPORTANT:
            Hover anywhere over carousel pauses
            all three images.
          */
        }

        .journey-carousel:hover .journey-image {
          animation-play-state: paused;
        }

        /* =========================================
           IMAGE 1
        ========================================= */

        .journey-image-1 {
          animation-delay: 0s;
        }

        /* =========================================
           IMAGE 2
        ========================================= */

        .journey-image-2 {
          animation-delay: -3s;
        }

        /* =========================================
           IMAGE 3
        ========================================= */

        .journey-image-3 {
          animation-delay: -6s;
        }

        /* =========================================
           EXACT POSITION / SHAPE ANIMATION
        ========================================= */

        @keyframes journeyMarquee {
          /*
            =====================================
            LEFT
            =====================================
          */

          0% {
            left: 0%;
            width: 25%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(0)
              scale(0.96);

            z-index: 1;

            /*
              LEFT IMAGE SHAPE
              Matches screenshot:
              straight top,
              straight left,
              angled bottom.
            */
            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 82%,
              88% 100%,
              0% 88%
            );

            box-shadow:
              8px 12px 25px rgba(0, 0, 0, 0.14);
          }

          /*
            Stay left briefly
          */

          22% {
            left: 0%;
            width: 25%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(0)
              scale(0.96);

            z-index: 1;

            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 82%,
              88% 100%,
              0% 88%
            );
          }

          /*
            =====================================
            MOVE TO CENTER
            =====================================
          */

          34% {
            left: 26%;
            width: 48%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(35px)
              scale(1);

            z-index: 3;

            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 100%,
              0% 100%
            );

            box-shadow:
              0 18px 35px rgba(0, 0, 0, 0.16);
          }

          /*
            Stay center
          */

          55% {
            left: 26%;
            width: 48%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(35px)
              scale(1);

            z-index: 3;

            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 100%,
              0% 100%
            );
          }

          /*
            =====================================
            MOVE TO RIGHT
            =====================================
          */

          67% {
            left: 75%;
            width: 25%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(0)
              scale(0.96);

            z-index: 1;

            /*
              RIGHT IMAGE SHAPE
              Mirrored version of left.
            */
            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 88%,
              12% 100%,
              0% 82%
            );

            box-shadow:
              -8px 12px 25px rgba(0, 0, 0, 0.14);
          }

          /*
            Stay right
          */

          88% {
            left: 75%;
            width: 25%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(0)
              scale(0.96);

            z-index: 1;

            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 88%,
              12% 100%,
              0% 82%
            );
          }

          /*
            =====================================
            BACK TO LEFT
            =====================================
          */

          100% {
            left: 0%;
            width: 25%;
            height: 365px;

            transform:
              translateX(0)
              translateZ(0)
              scale(0.96);

            z-index: 1;

            clip-path: polygon(
              0% 0%,
              100% 0%,
              100% 82%,
              88% 100%,
              0% 88%
            );

            box-shadow:
              8px 12px 25px rgba(0, 0, 0, 0.14);
          }
        }

        /* =========================================
           SUBTLE IMAGE ZOOM
        ========================================= */

        .journey-image :global(img) {
          transition: transform 0.8s ease;
        }

        .journey-image:hover :global(img) {
          transform: scale(1.03);
        }

        /* =========================================
           TABLET
        ========================================= */

        @media (max-width: 1024px) {
          .journey-carousel {
            height: 300px;
          }

          .journey-image {
            height: 300px;
          }

          @keyframes journeyMarquee {
            0%,
            22% {
              left: 0%;
              width: 25%;
              height: 300px;
              transform: scale(0.96);
            }

            34%,
            55% {
              left: 26%;
              width: 48%;
              height: 300px;
              transform: scale(1);
            }

            67%,
            88% {
              left: 75%;
              width: 25%;
              height: 300px;
              transform: scale(0.96);
            }

            100% {
              left: 0%;
              width: 25%;
              height: 300px;
              transform: scale(0.96);
            }
          }
        }

        /* =========================================
           MOBILE
        ========================================= */

        @media (max-width: 640px) {
          .journey-carousel {
            height: 220px;
          }

          .journey-image {
            height: 220px;
          }

          @keyframes journeyMarquee {
            0%,
            22% {
              left: 0%;
              width: 25%;
              height: 220px;
              transform: scale(0.94);
            }

            34%,
            55% {
              left: 26%;
              width: 48%;
              height: 220px;
              transform: scale(1);
            }

            67%,
            88% {
              left: 75%;
              width: 25%;
              height: 220px;
              transform: scale(0.94);
            }

            100% {
              left: 0%;
              width: 25%;
              height: 220px;
              transform: scale(0.94);
            }
          }
        }
      `}</style>
    </section>
  );
}