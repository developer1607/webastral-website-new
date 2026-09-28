import type { DedicatedPageConfig } from "./dedicated-pages";
import type { ServiceDetail } from "./services";

export type HeroVariant =
  | "split-right"
  | "split-left"
  | "dark-split"
  | "centered"
  | "image-first"
  | "editorial";

export type AudienceVariant = "cards" | "stacked" | "dark" | "inline";
export type MediaSide = "left" | "right" | "stack";
export type IncludedVariant = "split" | "bento" | "numbered";
export type ProcessVariant = "timeline" | "stacked";
export type TechVariant = "split" | "centered" | "dark";
export type WorkVariant = "split" | "full";
export type SignatureKind =
  | "merch"
  | "editorial"
  | "stack"
  | "devices"
  | "funnel"
  | "principles"
  | "layers"
  | "screens"
  | "research";

export type ServiceSectionId =
  | "hero"
  | "partners"
  | "audience"
  | "overview"
  | "included"
  | "signature"
  | "related"
  | "steps"
  | "tech"
  | "work"
  | "testimonials"
  | "contact"
  | "faq"
  | "cta";

export type ServiceLayout = {
  slug: string;
  /** Sector reference used only in code — never shown on the site. */
  sector: string;
  hero: HeroVariant;
  audience: AudienceVariant;
  overview: MediaSide;
  included: IncludedVariant;
  includedMedia: MediaSide;
  process: ProcessVariant;
  tech: TechVariant;
  work: WorkVariant;
  signature: SignatureKind;
  sections: ServiceSectionId[];
};

const BASE: ServiceSectionId[] = [
  "hero",
  "partners",
  "audience",
  "overview",
  "included",
  "signature",
  "related",
  "steps",
  "tech",
  "work",
  "testimonials",
  "contact",
  "faq",
  "cta",
];

function L(
  slug: string,
  sector: string,
  patch: Partial<Omit<ServiceLayout, "slug" | "sector" | "sections">> & {
    sections?: ServiceSectionId[];
  },
): ServiceLayout {
  return {
    slug,
    sector,
    hero: "split-right",
    audience: "cards",
    overview: "right",
    included: "split",
    includedMedia: "left",
    process: "timeline",
    tech: "split",
    work: "split",
    signature: "principles",
    sections: BASE,
    ...patch,
  };
}

/**
 * One layout per service. Colours stay WebAstral; structure follows
 * how leading firms in that sector present a service page.
 */
export const serviceLayouts: Record<string, ServiceLayout> = {
  "shopify-development": L("shopify-development", "Shopify Plus / commerce OS", {
    hero: "dark-split",
    audience: "dark",
    overview: "left",
    included: "bento",
    signature: "merch",
    tech: "dark",
    work: "full",
    sections: [
      "hero", "partners", "audience", "included", "overview", "signature",
      "steps", "tech", "work", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "opencart-development": L("opencart-development", "Open-source commerce", {
    hero: "split-left",
    included: "numbered",
    includedMedia: "right",
    signature: "merch",
    process: "stacked",
  }),
  "magento-development": L("magento-development", "Adobe Commerce enterprise", {
    hero: "editorial",
    audience: "stacked",
    overview: "stack",
    included: "numbered",
    signature: "merch",
    tech: "centered",
    sections: [
      "hero", "partners", "overview", "audience", "included", "signature",
      "tech", "steps", "work", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "woocommerce-development": L("woocommerce-development", "Woo / Automattic commerce", {
    hero: "image-first",
    audience: "inline",
    overview: "right",
    includedMedia: "right",
    signature: "editorial",
    work: "full",
  }),
  "custom-e-commerce-development": L("custom-e-commerce-development", "Custom commerce platforms", {
    hero: "centered",
    audience: "cards",
    included: "bento",
    signature: "merch",
    process: "stacked",
    tech: "dark",
  }),
  "wordpress-development": L("wordpress-development", "Automattic / WordPress.com", {
    hero: "editorial",
    audience: "stacked",
    overview: "right",
    included: "split",
    signature: "editorial",
    tech: "centered",
    sections: [
      "hero", "partners", "overview", "audience", "included", "signature",
      "steps", "related", "tech", "work", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "drupal-development": L("drupal-development", "Acquia / Drupal", {
    hero: "split-left",
    audience: "cards",
    included: "numbered",
    signature: "editorial",
    process: "stacked",
  }),
  "joomla-development": L("joomla-development", "Joomla CMS", {
    hero: "image-first",
    audience: "inline",
    overview: "left",
    signature: "editorial",
    work: "full",
  }),
  "next-js-developement": L("next-js-developement", "Vercel / Next.js", {
    hero: "dark-split",
    audience: "dark",
    overview: "right",
    included: "bento",
    signature: "stack",
    tech: "dark",
    sections: [
      "hero", "tech", "partners", "audience", "overview", "included",
      "signature", "steps", "work", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "laravel-development": L("laravel-development", "Laravel.com / Tighten", {
    hero: "split-right",
    audience: "cards",
    includedMedia: "right",
    signature: "stack",
    process: "stacked",
    tech: "split",
  }),
  "yii-development": L("yii-development", "Yii high-performance PHP", {
    hero: "split-left",
    audience: "stacked",
    included: "numbered",
    signature: "stack",
    tech: "centered",
  }),
  "angular-js-development": L("angular-js-development", "Angular.io", {
    hero: "centered",
    audience: "inline",
    overview: "stack",
    included: "bento",
    signature: "stack",
    work: "full",
  }),
  "codelgniter-development": L("codelgniter-development", "CodeIgniter PHP", {
    hero: "image-first",
    included: "split",
    signature: "stack",
    process: "timeline",
  }),
  "cakephp-development": L("cakephp-development", "CakePHP RAD", {
    hero: "editorial",
    audience: "cards",
    overview: "left",
    signature: "stack",
    tech: "dark",
  }),
  "php-development": L("php-development", "PHP platform engineering", {
    hero: "split-right",
    audience: "dark",
    included: "numbered",
    signature: "stack",
    process: "stacked",
  }),
  "node-js-development": L("node-js-development", "Node.js services", {
    hero: "dark-split",
    audience: "dark",
    included: "bento",
    signature: "stack",
    tech: "dark",
    work: "split",
  }),
  "asp-.net-development": L("asp-.net-development", "Microsoft .NET", {
    hero: "split-left",
    audience: "stacked",
    overview: "right",
    signature: "stack",
    tech: "centered",
  }),
  "web-development": L("web-development", "Thoughtworks / EPAM delivery", {
    hero: "editorial",
    audience: "cards",
    included: "numbered",
    signature: "principles",
    process: "timeline",
    sections: [
      "hero", "partners", "audience", "steps", "overview", "included",
      "signature", "tech", "work", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "iphone-app-development": L("iphone-app-development", "Apple product pages", {
    hero: "centered",
    audience: "inline",
    overview: "stack",
    included: "split",
    signature: "devices",
    work: "full",
    sections: [
      "hero", "partners", "signature", "audience", "overview", "included",
      "steps", "work", "tech", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "ipad-app-development": L("ipad-app-development", "Apple iPad", {
    hero: "image-first",
    audience: "cards",
    overview: "left",
    signature: "devices",
    process: "stacked",
  }),
  "android-app-development": L("android-app-development", "Google Play / Material", {
    hero: "split-right",
    audience: "cards",
    included: "bento",
    signature: "devices",
    tech: "split",
  }),
  "hybrid-app-development": L("hybrid-app-development", "Expo / Flutter-style cross-platform", {
    hero: "split-left",
    audience: "stacked",
    included: "numbered",
    signature: "devices",
    tech: "dark",
  }),
  "web-design": L("web-design", "Linear / Stripe marketing", {
    hero: "centered",
    audience: "inline",
    overview: "right",
    included: "bento",
    signature: "principles",
    work: "full",
    sections: [
      "hero", "partners", "work", "audience", "overview", "included",
      "signature", "steps", "tech", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "mobile-website": L("mobile-website", "Apple mobile web", {
    hero: "image-first",
    audience: "cards",
    signature: "screens",
    includedMedia: "right",
    process: "stacked",
  }),
  "responsive-web-design": L("responsive-web-design", "Responsive / multi-device", {
    hero: "split-right",
    audience: "inline",
    signature: "screens",
    included: "numbered",
    tech: "centered",
  }),
  "parallax-webdesign": L("parallax-webdesign", "Awwwards / motion studios", {
    hero: "dark-split",
    audience: "dark",
    overview: "stack",
    signature: "layers",
    work: "full",
    sections: [
      "hero", "signature", "partners", "audience", "overview", "included",
      "steps", "tech", "work", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "user-experience-design": L("user-experience-design", "NN/g / Figma UX", {
    hero: "editorial",
    audience: "stacked",
    included: "numbered",
    signature: "research",
    process: "timeline",
    sections: [
      "hero", "partners", "audience", "signature", "overview", "included",
      "steps", "work", "tech", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "graphic-design": L("graphic-design", "Pentagram / studio systems", {
    hero: "editorial",
    audience: "inline",
    overview: "left",
    included: "bento",
    signature: "principles",
    work: "full",
  }),
  "logo-design": L("logo-design", "Identity studios", {
    hero: "centered",
    audience: "stacked",
    overview: "stack",
    included: "split",
    signature: "principles",
    process: "stacked",
  }),
  "banner-design": L("banner-design", "Display / campaign studios", {
    hero: "split-left",
    audience: "cards",
    includedMedia: "right",
    signature: "principles",
    tech: "centered",
  }),
  "brochure-design": L("brochure-design", "Print / editorial design", {
    hero: "image-first",
    audience: "dark",
    included: "numbered",
    signature: "principles",
    work: "split",
  }),
  "digital-marketing": L("digital-marketing", "HubSpot / full-funnel", {
    hero: "split-right",
    audience: "cards",
    included: "bento",
    signature: "funnel",
    process: "timeline",
    sections: [
      "hero", "partners", "audience", "signature", "included", "overview",
      "steps", "work", "tech", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
  "seo-(search-engine-optimization)": L("seo-(search-engine-optimization)", "Ahrefs / technical SEO", {
    hero: "editorial",
    audience: "stacked",
    included: "numbered",
    signature: "funnel",
    tech: "centered",
    process: "stacked",
  }),
  "smo-(social-media-optimization)": L("smo-(social-media-optimization)", "Profile / presence ops", {
    hero: "image-first",
    audience: "inline",
    overview: "left",
    signature: "funnel",
    work: "full",
  }),
  "smm-(social-media-marketing)": L("smm-(social-media-marketing)", "Meta Business / social", {
    hero: "split-left",
    audience: "cards",
    included: "split",
    signature: "funnel",
    tech: "split",
  }),
  "ppc-(pay-per-click)": L("ppc-(pay-per-click)", "Google Ads / performance", {
    hero: "dark-split",
    audience: "dark",
    included: "bento",
    signature: "funnel",
    tech: "dark",
    sections: [
      "hero", "audience", "partners", "signature", "included", "overview",
      "steps", "tech", "work", "related", "testimonials", "contact", "faq", "cta",
    ],
  }),
};

export function getServiceLayout(slug: string): ServiceLayout {
  return (
    serviceLayouts[slug] ??
    L(slug, "Digital / IT services", {})
  );
}

export type ComposedServicePage = {
  service: ServiceDetail;
  page: DedicatedPageConfig;
  layout: ServiceLayout;
};
