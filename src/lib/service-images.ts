import type { ServiceDetail } from "./services";

export type ServiceVisuals = {
  hero: string;
  overview: string;
  detail: string;
  stack: string;
  contact: string;
  banner: string;
  prowess: string;
  process: string;
};

export type ImageDimensions = {
  width: number;
  height: number;
};

/** Public path for a service-page asset: /assets/images/services/{slug}/{file} */
export function serviceImage(slug: string, file = "hero.jpg") {
  return `/assets/images/services/${slug}/${file}`;
}

/** Known asset dimensions — used to avoid upscaling small icons into blurry hero blocks. */
export const IMAGE_DIMENSIONS: Record<string, ImageDimensions> = {
  "/assets/images/bg/service41.png": { width: 140, height: 140 },
  "/assets/images/bg/service42.png": { width: 140, height: 140 },
  "/assets/images/bg/service43.png": { width: 140, height: 140 },
  "/assets/images/bg/service44.png": { width: 140, height: 140 },
  "/assets/images/bg/service-details2.png": { width: 370, height: 200 },
  "/assets/images/bg/servc-details.png": { width: 370, height: 200 },
  "/assets/images/bg/service11.png": { width: 420, height: 188 },
  "/assets/images/bg/service12.png": { width: 420, height: 188 },
  "/assets/images/bg/service13.png": { width: 420, height: 188 },
  "/assets/images/bg/services-1.png": { width: 626, height: 280 },
  "/assets/images/bg/services-2.png": { width: 626, height: 280 },
  "/assets/images/bg/services-3.png": { width: 626, height: 280 },
  "/assets/images/bg/services-4.png": { width: 626, height: 280 },
  "/assets/images/bg/services-5.png": { width: 626, height: 280 },
  "/assets/images/bg/services-6.png": { width: 626, height: 280 },
  "/assets/images/bg/services-7.png": { width: 626, height: 280 },
  "/assets/images/bg/services-8.png": { width: 626, height: 280 },
  "/assets/images/bg/office1.png": { width: 370, height: 200 },
  "/assets/images/bg/office2.png": { width: 370, height: 200 },
  "/assets/images/bg/office3.png": { width: 370, height: 200 },
};

const MIN_PROCESS_WIDTH = 480;
const MIN_PROCESS_HEIGHT = 200;

export function getImageDimensions(src: string): ImageDimensions | null {
  return IMAGE_DIMENSIONS[src] ?? null;
}

export function isLargeEnoughForBanner(src: string) {
  const size = getImageDimensions(src);
  if (!size) return true;
  return size.width >= MIN_PROCESS_WIDTH && size.height >= MIN_PROCESS_HEIGHT;
}

/**
 * Every service page uses its own folder:
 * public/assets/images/services/{slug}/
 *   hero.jpg           — hero and related-card thumb
 *   overview.jpg       — overview laptop / product photo
 *   detail.jpg         — included-section workstation photo
 *   stack.jpg          — tools / code photo
 *   contact.jpg        — work teaser and contact photo
 */
export function getServiceVisuals(service: ServiceDetail): ServiceVisuals {
  const hero = service.image || serviceImage(service.slug);
  const overview = serviceImage(service.slug, "overview.jpg");
  const detail = serviceImage(service.slug, "detail.jpg");
  const stack = serviceImage(service.slug, "stack.jpg");
  const contact = serviceImage(service.slug, "contact.jpg");

  return {
    hero,
    overview,
    detail,
    stack,
    contact,
    banner: hero,
    prowess: overview,
    process: overview,
  };
}

export function getProcessImageProps(src: string) {
  const known = getImageDimensions(src);
  if (known && isLargeEnoughForBanner(src)) {
    return { src, width: known.width, height: known.height, show: true as const };
  }
  return { src, width: 626, height: 280, show: false as const };
}
