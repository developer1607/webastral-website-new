import serviceContent from "./service-content.json";
import { applyServiceVoice } from "./service-voice";

export type ServiceFaq = {
  title: string;
  description: string;
};

export type WorkProcessStep = {
  title: string;
  image: string;
  description?: string;
};

export type ServiceDetail = {
  slug: string;
  title: string;
  category: string;
  image: string;
  icon?: string;
  h1: string;
  p1: string;
  h2: string;
  p2: string;
  h3: string;
  points: string[];
  workProcess: WorkProcessStep[];
  faqs: ServiceFaq[];
  summary: string;
};

export const featuredServiceSlugs = [
  "web-development",
  "web-design",
  "graphic-design",
  "iphone-app-development",
  "android-app-development",
  "seo-(search-engine-optimization)",
  "digital-marketing",
  "wordpress-development",
] as const;

export const serviceCategories = [
  "Web Design",
  "CMS",
  "Framework",
  "Mobile App Development",
  "Web Development",
  "Ecommerce Development",
  "Graphic Design",
  "Digital Marketing",
] as const;

export const allServices: ServiceDetail[] = (
  serviceContent as Omit<ServiceDetail, "summary">[]
).map((service) =>
  applyServiceVoice({
    ...service,
    summary: service.p1,
  }),
);

export const featuredServices = featuredServiceSlugs
  .map((slug) => allServices.find((service) => service.slug === slug))
  .filter((service): service is ServiceDetail => Boolean(service));

export function getService(slug: string) {
  return allServices.find((service) => service.slug === slug);
}

export function getAllServiceSlugs() {
  return allServices.map((service) => service.slug);
}

export function getServicesByCategory(category: string) {
  return allServices.filter((service) => service.category === category);
}

export function getRelatedServices(slug: string, limit = 6) {
  const current = getService(slug);
  if (!current) return allServices.slice(0, limit);

  const sameCategory = allServices.filter(
    (service) => service.category === current.category && service.slug !== slug,
  );
  const rest = allServices.filter(
    (service) => service.category !== current.category && service.slug !== slug,
  );
  return [...sameCategory, ...rest].slice(0, limit);
}
