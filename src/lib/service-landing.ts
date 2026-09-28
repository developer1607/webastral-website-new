import type { ServiceDetail } from "@/lib/services";

export const serviceStats = [
  { value: "500+", label: "Projects delivered" },
  { value: "80+", label: "Digital experts" },
  { value: "11+", label: "Years experience" },
];

const quoteByCategory: Record<string, string> = {
  "Web Design": "Web Design",
  CMS: "Web Development",
  Framework: "Web Development",
  "Mobile App Development": "Mobile app development",
  "Web Development": "Web Development",
  "Ecommerce Development": "Ecommerce Development",
  "Graphic Design": "Graphic Design",
  "Digital Marketing": "Digital Marketing",
};

export function getQuoteService(service: ServiceDetail) {
  return quoteByCategory[service.category] ?? "Web Design";
}

export function getBannerTitle(service: ServiceDetail) {
  return service.h2;
}

export function getBannerIntro(service: ServiceDetail) {
  const dot = service.p2.indexOf(". ");
  return dot > 60 ? service.p2.slice(0, dot + 1) : service.p2;
}

export function getProwessIntro(service: ServiceDetail) {
  return service.p2;
}

const extraCards = [
  {
    title: "Dedicated Support",
    body: "We stay available after launch for updates, fixes, and ongoing improvements.",
  },
  {
    title: "On-time Delivery",
    body: "We plan the work in clear stages so the project ships on the agreed timeline.",
  },
  {
    title: "Quality Assurance",
    body: "Every release is reviewed for usability, performance, and device compatibility.",
  },
];

function padToFive<T extends { title: string }>(
  items: T[],
  extras: T[],
): T[] {
  const out = [...items];
  const used = new Set(out.map((item) => item.title.toLowerCase()));
  for (const extra of extras) {
    if (out.length >= 5) break;
    if (used.has(extra.title.toLowerCase())) continue;
    out.push(extra);
    used.add(extra.title.toLowerCase());
  }
  return out.slice(0, 5);
}

export function getServiceHighlights(service: ServiceDetail) {
  const p2Parts = service.p2.split(". ").filter(Boolean);

  const items = service.points.map((point, index) => ({
    title: point.replace(/\.$/, "").trim(),
    body:
      p2Parts[index] ??
      p2Parts[index % p2Parts.length] ??
      service.p2,
  })).map((item) => ({
    ...item,
    body: item.body.endsWith(".") ? item.body : `${item.body}.`,
  }));

  return padToFive(
    items,
    extraCards.map((card) => ({
      title: card.title,
      body: card.body,
    })),
  );
}

const processDescriptions: Record<string, () => string> = {
  Research: () =>
    "We study your brand, audience, and competitors to define clear project goals.",
  Story: () =>
    "We structure sections so each scroll beat reveals the next layer of the brand narrative.",
  Breakpoints: () =>
    "We map 3 to 4 templates to resolution families so the layout reflows cleanly instead of shrinking in place.",
  Strategy: () =>
    "We turn research into a clear plan covering sitemap, features, and creative direction.",
  Develop: () =>
    "Our team builds and integrates the design with clean code ready for production.",
  Development: () =>
    "We code and assemble the product with quality checks so the build stays stable.",
  Launch: () =>
    "We test, deploy, and hand over a polished experience ready for real users.",
  Delivery: () =>
    "We ship the final build, share documentation, and support a smooth go-live.",
  Deliver: () =>
    "We complete QA, deploy the release, and support a clean handoff.",
  Design: () =>
    "We craft layouts, visuals, and interactions that match your brand goals.",
  Designing: () =>
    "We create wireframes and polished UI that make the product easy to use.",
  Wireframes: () =>
    "We place information areas on the page so business goals and audience needs sit in the right order.",
  Prototyping: () =>
    "We build clickable prototypes so you can review the flow before full build.",
  Testing: () =>
    "We run QA across devices and browsers so the launch is reliable.",
  "QA Test": () =>
    "We validate features, performance, and usability before go-live.",
  QA: () =>
    "We catch bugs early and refine the release so the experience stays solid.",
  Analyze: () =>
    "We analyze requirements and constraints to shape the right approach.",
  Analysis: () =>
    "We break down business needs and technical scope for a focused plan.",
  Plan: () =>
    "We map milestones, resources, and deliverables for a predictable timeline.",
  Planning: () =>
    "We outline scope, timeline, and priorities before development begins.",
  Implement: () =>
    "We implement features and integrations according to the approved plan.",
  Define: () =>
    "We define scope, success metrics, and requirements for the engagement.",
  Roadmap: () =>
    "We set a practical roadmap covering phases, risks, and deliverables.",
  Resources: () =>
    "We assign the right specialists and tools to keep delivery on track.",
  Support: () =>
    "We stay available after launch for fixes, updates, and performance tweaks.",
};

const fallbackIcons = [
  "/assets/images/icons/work-procs1.svg",
  "/assets/images/icons/work-procs2.svg",
  "/assets/images/icons/work-procs3.svg",
  "/assets/images/icons/work-procs4.svg",
];

function stepCopy(title: string, image: string, description?: string) {
  const builder = processDescriptions[title];
  return {
    title,
    image,
    description:
      description ??
      builder?.() ??
      `We complete the ${title.toLowerCase()} stage carefully so the project moves forward smoothly.`,
  };
}

function padToFiveSteps(
  steps: { title: string; image: string; description: string }[],
) {
  const out = [...steps];
  const blob = out.map((step) => step.title.toLowerCase()).join(" ");

  const insert = (title: string, image: string, index?: number) => {
    const step = stepCopy(title, image);
    if (index == null) out.push(step);
    else out.splice(index, 0, step);
  };

  if (out.length < 5 && !/research|analy|defin|discover/.test(blob)) {
    insert("Research", fallbackIcons[0], 0);
  }
  if (out.length < 5 && !/design|prototyp/.test(blob)) {
    const developAt = out.findIndex((step) =>
      /develop|implement|build/.test(step.title.toLowerCase()),
    );
    insert("Design", fallbackIcons[1], developAt >= 0 ? developAt : 2);
  }
  if (out.length < 5 && !/test|launch|deliver|qa/.test(blob)) {
    insert("Launch", fallbackIcons[3]);
  }
  if (out.length < 5) {
    insert("Support", fallbackIcons[2]);
  }

  return out.slice(0, 5);
}

export function getCardIcon(service: ServiceDetail, index: number) {
  const images = service.workProcess.map((step) => step.image).filter(Boolean);
  if (images.length) return images[index % images.length];
  return fallbackIcons[index % fallbackIcons.length];
}

const processCopyBySlug: Record<string, { title: string; description: string }[]> = {
  "shopify-development": [
    { title: "Catalogue", description: "Products, collections, and B2B price lists mapped before a theme is chosen." },
    { title: "Theme", description: "Liquid templates and checkout UX for shoppers and for trade accounts." },
    { title: "Apps", description: "Payments, shipping, subscriptions, and ERP hooks that the store actually needs." },
    { title: "QA", description: "Cart, tax, and mobile checkout tested on the devices your customers use." },
    { title: "Handover", description: "Admin training and a runbook so merchandisers can keep selling." },
  ],
  "opencart-development": [
    { title: "Setup", description: "Host, PHP, and the catalogue model for an owned OpenCart shop." },
    { title: "Theme", description: "A storefront that is not the default template, with a checkout people finish." },
    { title: "Extensions", description: "Payment, shipping, and admin modules without a plugin pile." },
    { title: "Data", description: "Products, customers, and orders imported cleanly." },
    { title: "Go-live", description: "SSL, backups, and a handover your team can run." },
  ],
  "magento-development": [
    { title: "Architecture", description: "Store views, websites, and catalogue types for Adobe Commerce." },
    { title: "Theme", description: "Luma or a custom theme shaped around how you sell." },
    { title: "Checkout", description: "Payments, tax, and shipping that match B2B quotes or DTC carts." },
    { title: "Performance", description: "Indexers, cache, and Elasticsearch so category pages stay usable." },
    { title: "Run", description: "Admin training, patches, and a path to the next upgrade." },
  ],
  "woocommerce-development": [
    { title: "WordPress", description: "A stable WP install before the cart is added." },
    { title: "Catalogue", description: "Products, variations, and tax that live in the same admin as content." },
    { title: "Checkout", description: "Payments and shipping a phone shopper can finish." },
    { title: "Extend", description: "Memberships or ERP hooks as focused plugins, not a stack of junk." },
    { title: "Handover", description: "An admin marketing and ops can share." },
  ],
  "custom-e-commerce-development": [
    { title: "Rules", description: "SKUs, kits, contracts, and warehouse flow written down first." },
    { title: "Cart", description: "A checkout designed around those rules, not a boxed theme." },
    { title: "Ops", description: "Admin, inventory, and the ERP or CRM you already use." },
    { title: "Storefront", description: "Search, PDP, and mobile UX for shoppers or trade buyers." },
    { title: "Own", description: "Code and a runbook your team can keep." },
  ],
  "wordpress-development": [
    { title: "IA", description: "Pages, posts, and who is allowed to publish." },
    { title: "Theme", description: "A custom theme so the brand is not a starter kit." },
    { title: "Plugins", description: "Only the features editors will use — ACF, SEO, forms, shop." },
    { title: "Editor QA", description: "The people who will run the site try it before launch." },
    { title: "Handover", description: "Training and notes so marketing does not need FTP." },
  ],
  "drupal-development": [
    { title: "Content model", description: "Types, taxonomy, and roles before a theme is drawn." },
    { title: "Modules", description: "Core plus the modules editors and APIs actually need." },
    { title: "Theme", description: "Twig layouts that do not look like another Drupal install." },
    { title: "Migrate", description: "Users, URLs, and nodes moved without a silent 404 wave." },
    { title: "Train", description: "Editors walk through pages, menus, and workflows." },
  ],
  "joomla-development": [
    { title: "Plan", description: "Public pages vs member areas and the ACL that separates them." },
    { title: "Template", description: "Front-end and admin templates that fit the brand." },
    { title: "Extensions", description: "Modules and components you will keep, not a directory dump." },
    { title: "Content", description: "Articles, menus, and users imported or built." },
    { title: "Launch", description: "SEO, SSL, and a handover for non-developers." },
  ],
  "next-js-developement": [
    { title: "Routes", description: "App Router map for marketing pages and product UI." },
    { title: "Data", description: "Server components, actions, and APIs where they belong." },
    { title: "UI", description: "Typed React that still ranks and still feels instant." },
    { title: "Vitals", description: "LCP, CLS, and INP budgets before go-live." },
    { title: "Ship", description: "Hosting, env, and a repo your developers can own." },
  ],
  "laravel-development": [
    { title: "Domain", description: "Users, roles, and the records the product actually moves." },
    { title: "Build", description: "Eloquent, policies, queues, and an admin that matches the work." },
    { title: "API", description: "Endpoints for mobile or partner systems when needed." },
    { title: "Test", description: "Feature tests and a staging pass with real operators." },
    { title: "Deploy", description: "Horizon, backups, and a handover." },
  ],
  "yii-development": [
    { title: "Load", description: "Traffic and caching needs written down first." },
    { title: "MVC", description: "Modules, RBAC, and Active Record for the real data." },
    { title: "UI", description: "Admin and public screens operators can finish." },
    { title: "Tune", description: "Query and cache work aimed at real load." },
    { title: "Handover", description: "A Yii app the next developer can read." },
  ],
  "angular-js-development": [
    { title: "Screens", description: "Dashboards and forms mapped to modules." },
    { title: "State", description: "Typed contracts and predictable data flow." },
    { title: "Build", description: "Components, lazy routes, and API wiring." },
    { title: "QA", description: "The journeys operators repeat every day." },
    { title: "Ship", description: "CI, environments, and docs." },
  ],
  "codelgniter-development": [
    { title: "Scope", description: "A lean PHP app, not a CMS forced into the job." },
    { title: "MVC", description: "Controllers, models, and libraries you will keep." },
    { title: "Admin", description: "The screens staff already expect." },
    { title: "QA", description: "Forms, auth, and the public pages." },
    { title: "Support", description: "A readable CodeIgniter codebase." },
  ],
  "cakephp-development": [
    { title: "Bake", description: "Conventions first so scaffolding is not thrown away." },
    { title: "ORM", description: "Models and auth that match the domain." },
    { title: "UI", description: "Admin and customer screens on the same conventions." },
    { title: "Test", description: "CRUD paths and ACL." },
    { title: "Handover", description: "A CakePHP app that still looks like CakePHP." },
  ],
  "php-development": [
    { title: "Brief", description: "CMS, custom app, or API — picked for the problem." },
    { title: "Data", description: "Schema and PHP 8 code that the next developer can read." },
    { title: "Build", description: "Business logic out of the templates." },
    { title: "Secure", description: "Patches, auth, and a hosting plan." },
    { title: "Run", description: "Support after launch." },
  ],
  "node-js-development": [
    { title: "Contracts", description: "REST or GraphQL shaped around real consumers." },
    { title: "Services", description: "Auth, queues, and sockets with timeouts made explicit." },
    { title: "Observe", description: "Logs and environments before traffic." },
    { title: "Load", description: "Concurrent work tested, not assumed." },
    { title: "Runbooks", description: "So the next change does not need the original author." },
  ],
  "asp-.net-development": [
    { title: "Estate", description: "Windows, SQL Server, or Azure — the stack you already own." },
    { title: "Identity", description: "Roles and audit-friendly access." },
    { title: "Build", description: "Portals, APIs, and the data layer." },
    { title: "Integrate", description: "Line-of-business tools in the plan, not as change requests." },
    { title: "Host", description: "IIS or Azure with a handover." },
  ],
  "web-development": [
    { title: "Discover", description: "Outcome, users, and systems written down." },
    { title: "Architect", description: "A stack that matches the problem." },
    { title: "Build", description: "Regular releases instead of a big reveal." },
    { title: "QA", description: "Performance, security, and devices." },
    { title: "Launch", description: "Repo, hosting, and the next features." },
  ],
  "iphone-app-development": [
    { title: "Jobs", description: "The one or two tasks the first iOS release must finish." },
    { title: "UX", description: "Screens that feel like they belong on iPhone." },
    { title: "Build", description: "Swift against your APIs, payments, and notifications." },
    { title: "Device QA", description: "On the phones your customers actually own." },
    { title: "Store", description: "Listing, review, and a path for version two." },
  ],
  "ipad-app-development": [
    { title: "Layout", description: "Split views and Pencil — not a stretched iPhone UI." },
    { title: "Build", description: "UIKit or SwiftUI for the tablet job." },
    { title: "Features", description: "Camera, CloudKit, or Handoff where they earn their place." },
    { title: "QA", description: "Mini through full-size iPad." },
    { title: "Store", description: "App Store assets and updates." },
  ],
  "android-app-development": [
    { title: "Journeys", description: "The core Android tasks prototyped first." },
    { title: "Native", description: "Kotlin and Jetpack on the devices in the fleet." },
    { title: "Integrate", description: "APIs, payments, and push." },
    { title: "QA", description: "Common screen sizes, not one flagship." },
    { title: "Play", description: "Store listing and a maintenance plan." },
  ],
  "hybrid-app-development": [
    { title: "Split", description: "What must be native vs what can stay shared." },
    { title: "UI", description: "One design system for both stores." },
    { title: "Plugins", description: "Camera, payments, and offline done properly." },
    { title: "QA", description: "iOS and Android on the same release train." },
    { title: "Ship", description: "Two listings, one product to update." },
  ],
  "web-design": [
    { title: "Research", description: "Brand, audience, and the task the homepage must finish." },
    { title: "Strategy", description: "Sitemap and a visual direction you can approve." },
    { title: "Design", description: "Layouts for desktop and phone, not a squeezed mock." },
    { title: "Build", description: "Front-end that matches the comps." },
    { title: "Measure", description: "A site you can host, edit, and track." },
  ],
  "mobile-website": [
    { title: "Audit", description: "Where the current site fails on a phone." },
    { title: "IA", description: "Thumb-zone nav and the pages that matter on the move." },
    { title: "Design", description: "Dedicated mobile or a true responsive pass." },
    { title: "Build", description: "Speed, tap targets, and campaign URLs." },
    { title: "QA", description: "Real phones, not only a resized desktop." },
  ],
  "responsive-web-design": [
    { title: "Families", description: "Desktop, tablet, and phone templates — not one layout shrunk." },
    { title: "Grid", description: "Fluid columns and images that reflow." },
    { title: "Nav", description: "A pattern that works with a mouse and a thumb." },
    { title: "Build", description: "CSS that holds the design at the breakpoints you named." },
    { title: "QA", description: "One URL, every screen family." },
  ],
  "parallax-webdesign": [
    { title: "Story", description: "The scroll beats before any motion is added." },
    { title: "Layers", description: "Background, mid-ground, and readable foreground." },
    { title: "Motion", description: "GSAP or CSS that does not fight the copy." },
    { title: "Perf", description: "Depth that still loads on a phone." },
    { title: "Launch", description: "A campaign page people keep scrolling." },
  ],
  "user-experience-design": [
    { title: "Research", description: "Interviews and task analysis before screens." },
    { title: "IA", description: "Flows for operators and for first-time visitors." },
    { title: "Wireframes", description: "Structure you can argue with, cheaply." },
    { title: "Prototype", description: "Clickable paths for usability tests." },
    { title: "Handoff", description: "A system developers can build without guessing." },
  ],
  "graphic-design": [
    { title: "Brief", description: "Where the asset has to work — deck, pack, or ad." },
    { title: "System", description: "Type, colour, and art that match the brand." },
    { title: "Produce", description: "The formats printers and platforms actually take." },
    { title: "Review", description: "Rounds until sales and marketing can both use it." },
    { title: "Files", description: "A kit your team can keep using." },
  ],
  "logo-design": [
    { title: "Research", description: "Category, name, and where the mark will sit." },
    { title: "Concepts", description: "Distinctive options with a reason, not a trend pack." },
    { title: "Refine", description: "Small size, one colour, and lockups." },
    { title: "Files", description: "SVG, print, and app-icon ready." },
    { title: "Notes", description: "Clear space and misuse so the mark lasts." },
  ],
  "banner-design": [
    { title: "Offer", description: "The one thing that has to read in a second." },
    { title: "Master", description: "A layout that still looks like the brand." },
    { title: "Resizes", description: "The sizes you actually buy." },
    { title: "Export", description: "Web, social, and print specs." },
    { title: "Source", description: "Files for the next campaign." },
  ],
  "brochure-design": [
    { title: "Story", description: "Cover that earns a second look, inside that explains." },
    { title: "Grid", description: "Folds, type, and photography planned together." },
    { title: "Print", description: "Bleed, colour, and paper the printer can run." },
    { title: "Proof", description: "A review round before plates." },
    { title: "Press", description: "Files that match the brand in the room." },
  ],
  "digital-marketing": [
    { title: "Funnel", description: "Leads, pipeline, or sales — named before channels." },
    { title: "Plan", description: "SEO, social, and paid in one calendar." },
    { title: "Creative", description: "Landing pages and ads that agree with each other." },
    { title: "Run", description: "Budgets and publishing you can see." },
    { title: "Report", description: "Cost and return, not vanity charts." },
  ],
  "seo-(search-engine-optimization)": [
    { title: "Audit", description: "Crawl, index, speed, and the queries you can win." },
    { title: "Fix", description: "Technical work developers can actually ship." },
    { title: "Content", description: "Pages aimed at B2B enquiries or product search." },
    { title: "Earn", description: "Internal links and authority that match the SERP." },
    { title: "Report", description: "Rank, traffic, and conversions — not a vanity dashboard." },
  ],
  "smo-(social-media-optimization)": [
    { title: "Audit", description: "Profiles, names, and dead links." },
    { title: "Align", description: "Bios and creatives that match the website." },
    { title: "Listings", description: "NAP and the networks you actually use." },
    { title: "Rhythm", description: "A posting cadence the team can keep." },
    { title: "Measure", description: "Referral traffic, not empty followers." },
  ],
  "smm-(social-media-marketing)": [
    { title: "Audience", description: "Accounts you sell to, or shoppers — named first." },
    { title: "Calendar", description: "Organic and paid in the same plan." },
    { title: "Create", description: "Assets that sound like the brand." },
    { title: "Community", description: "Replies treated as part of the work." },
    { title: "Report", description: "Reach and leads, monthly." },
  ],
  "ppc-(pay-per-click)": [
    { title: "Intent", description: "Queries and audiences that match the offer." },
    { title: "Structure", description: "Campaigns, ads, and landing pages that agree." },
    { title: "Track", description: "Conversions before spend scales." },
    { title: "Optimise", description: "Waste cut weekly, not quarterly." },
    { title: "Report", description: "Cost per enquiry or sale." },
  ],
};

export function getDeliverySteps(service: ServiceDetail) {
  const custom = processCopyBySlug[service.slug];
  if (custom) {
    return custom.map((step, index) => ({
      title: step.title,
      image: service.workProcess[index]?.image ?? fallbackIcons[index % fallbackIcons.length],
      description: step.description,
    }));
  }

  return padToFiveSteps(
    service.workProcess.map((step) =>
      stepCopy(step.title, step.image, step.description),
    ),
  );
}

export type ProcessStyle =
  | "journey"
  | "layers"
  | "devices"
  | "screens"
  | "campaign"
  | "checkout"
  | "compose"
  | "build"
  | "timeline";

export function getProcessStyle(service: ServiceDetail): ProcessStyle {
  const { slug, category } = service;

  if (slug.includes("user-experience") || slug.includes("ux")) return "journey";
  if (slug.includes("parallax")) return "layers";
  if (slug.includes("responsive") || slug === "mobile-website") return "devices";
  if (
    category === "Mobile App Development" ||
    slug.includes("iphone") ||
    slug.includes("android") ||
    slug.includes("ipad") ||
    slug.includes("hybrid")
  ) {
    return "screens";
  }
  if (
    category === "Digital Marketing" ||
    slug.includes("seo") ||
    slug.includes("smo") ||
    slug.includes("smm") ||
    slug.includes("ppc")
  ) {
    return "campaign";
  }
  if (
    category === "Ecommerce Development" ||
    slug.includes("shopify") ||
    slug.includes("magento") ||
    slug.includes("woocommerce") ||
    slug.includes("opencart") ||
    slug.includes("e-commerce")
  ) {
    return "checkout";
  }
  if (
    category === "Graphic Design" ||
    slug.includes("logo") ||
    slug.includes("banner") ||
    slug.includes("brochure") ||
    slug.includes("graphic")
  ) {
    return "compose";
  }
  if (
    category === "CMS" ||
    category === "Framework" ||
    category === "Web Development" ||
    slug.includes("wordpress") ||
    slug.includes("laravel") ||
    slug.includes("node")
  ) {
    return "build";
  }
  return "timeline";
}

export function getProcessCaption(style: ProcessStyle) {
  switch (style) {
    case "journey":
      return "A user-centered path from discovery to validation.";
    case "layers":
      return "Depth built layer by layer for scroll storytelling.";
    case "devices":
      return "Designed once, refined for every screen size.";
    case "screens":
      return "App flows shaped screen by screen.";
    case "campaign":
      return "Channel steps that compound into growth.";
    case "checkout":
      return "Commerce flow from catalog to conversion.";
    case "compose":
      return "Visual pieces assembled into a clear brand story.";
    case "build":
      return "Structured delivery from setup to ship.";
    default:
      return "A clear sequence from kickoff to delivery.";
  }
}

export function getWhyCards(service: ServiceDetail) {
  const p1Parts = service.p1.split(". ").filter(Boolean);

  const items = service.points.map((point, index) => ({
    title: point.replace(/\.$/, "").trim(),
    description:
      p1Parts[index] ??
      p1Parts[index % p1Parts.length] ??
      service.p1,
  })).map((item) => ({
    ...item,
    description: item.description.endsWith(".")
      ? item.description
      : `${item.description}.`,
  }));

  return padToFive(
    items,
    extraCards.map((card) => ({
      title: card.title,
      description: card.body,
    })),
  );
}

export function getWhyHeading(service: ServiceDetail) {
  return service.h3.replace(/:$/, "").trim();
}

type TechGroup = { label: string; items: string[] };

const techBySlug: Record<string, TechGroup[]> = {
  "mobile-website": [
    { label: "Mobile UX", items: ["Touch-friendly UI", "Thumb-zone layout", "Fast tap targets"] },
    { label: "Front-end", items: ["HTML5", "CSS3", "JavaScript", "Responsive CSS"] },
    { label: "Performance", items: ["Mobile-first", "Lazy loading", "Core Web Vitals"] },
  ],
  "parallax-webdesign": [
    { label: "Parallax", items: ["Scroll effects", "Layered sections", "2D/3D animation"] },
    { label: "Design", items: ["Figma", "Adobe XD", "Illustrator", "Storyboarding"] },
    { label: "Front-end", items: ["HTML5", "CSS3", "JavaScript", "GSAP", "ScrollTrigger"] },
  ],
  "responsive-web-design": [
    { label: "Responsive", items: ["Mobile-first", "Fluid grids", "Flexible images", "Media queries"] },
    { label: "Design", items: ["Figma", "Adobe XD", "Wireframes", "Device mockups"] },
    { label: "Front-end", items: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "Tailwind"] },
  ],
  "user-experience-design": [
    { label: "UX Research", items: ["User interviews", "Persona mapping", "Journey maps", "Usability testing"] },
    { label: "Design", items: ["Wireframes", "Prototypes", "Figma", "Adobe XD"] },
    { label: "Delivery", items: ["Interactive flows", "Design systems", "Handoff docs", "A/B insights"] },
  ],
  "iphone-app-development": [
    { label: "Languages", items: ["Swift", "Objective-C"] },
    {
      label: "Frameworks & kits",
      items: ["Cocoa Touch", "SwiftUI", "Push Notifications", "In-App Purchases", "SiriKit", "HealthKit"],
    },
    { label: "Data", items: ["Core Data", "SQLite", "Realm"] },
  ],
  "ipad-app-development": [
    { label: "Languages", items: ["Swift", "Objective-C"] },
    { label: "Frameworks", items: ["UIKit", "SwiftUI", "PencilKit", "CloudKit"] },
    { label: "Data", items: ["Core Data", "SQLite"] },
  ],
  "android-app-development": [
    { label: "Languages", items: ["Kotlin", "Java"] },
    { label: "Frameworks", items: ["Jetpack", "Android SDK", "Firebase", "Room"] },
    { label: "Data", items: ["SQLite", "Realm", "Room"] },
  ],
  "hybrid-app-development": [
    { label: "Frameworks", items: ["React Native", "Flutter", "Ionic"] },
    { label: "Languages", items: ["JavaScript", "TypeScript", "Dart"] },
    { label: "Services", items: ["Firebase", "REST APIs", "Push Notifications"] },
  ],
  "web-development": [
    { label: "Languages", items: ["PHP", "JavaScript", "C#", "Python"] },
    { label: "Frameworks", items: ["Laravel", "Next.js", "Node.js", "ASP.NET"] },
    { label: "Platforms", items: ["WordPress", "Shopify", "Custom CMS"] },
  ],
  "web-design": [
    { label: "Design", items: ["Figma", "Adobe XD", "Photoshop", "Illustrator"] },
    { label: "Front-end", items: ["HTML5", "CSS3", "JavaScript", "Responsive UI"] },
    { label: "UX", items: ["Wireframes", "Prototypes", "User testing"] },
  ],
  "wordpress-development": [
    { label: "CMS", items: ["WordPress", "WooCommerce", "Custom themes"] },
    { label: "Stack", items: ["PHP", "MySQL", "JavaScript"] },
    { label: "Tools", items: ["ACF", "Elementor", "REST API"] },
  ],
  "shopify-development": [
    { label: "Platform", items: ["Shopify", "Shopify Plus", "Hydrogen"] },
    { label: "Stack", items: ["Liquid", "JavaScript", "GraphQL"] },
    { label: "Commerce", items: ["Checkout", "Apps", "Payments"] },
  ],
  "opencart-development": [
    { label: "Platform", items: ["OpenCart", "Extensions", "Custom themes"] },
    { label: "Stack", items: ["PHP", "MySQL", "JavaScript", "AJAX"] },
    { label: "Commerce", items: ["Checkout", "Payments", "Shipping"] },
  ],
  "drupal-development": [
    { label: "CMS", items: ["Drupal", "Drupal core", "Custom modules"] },
    { label: "Stack", items: ["PHP", "MySQL", "Twig", "JavaScript"] },
    { label: "Capabilities", items: ["Taxonomy", "APIs", "Migrations"] },
  ],
  "joomla-development": [
    { label: "CMS", items: ["Joomla", "Templates", "Extensions"] },
    { label: "Stack", items: ["PHP", "MySQL", "MVC", "PostgreSQL"] },
    { label: "Capabilities", items: ["Modules", "SEO", "Migrations"] },
  ],
  "codelgniter-development": [
    { label: "Framework", items: ["CodeIgniter", "MVC", "HMVC"] },
    { label: "Stack", items: ["PHP", "MySQL", "JavaScript", "jQuery"] },
    { label: "Capabilities", items: ["REST APIs", "Caching", "Libraries"] },
  ],
  "cakephp-development": [
    { label: "Framework", items: ["CakePHP", "MVC", "ORM"] },
    { label: "Stack", items: ["PHP", "MySQL", "JavaScript", "AJAX"] },
    { label: "Capabilities", items: ["CRUD", "Scaffolding", "ACL", "Caching"] },
  ],
  "digital-marketing": [
    { label: "Channels", items: ["SEO", "PPC", "SMM", "Content"] },
    { label: "Tools", items: ["Google Ads", "Meta Ads", "Analytics", "Search Console"] },
    { label: "Outcomes", items: ["Traffic", "Leads", "ROI"] },
  ],
  "seo-(search-engine-optimization)": [
    { label: "On-page", items: ["Technical SEO", "Content", "Core Web Vitals"] },
    { label: "Off-page", items: ["Link building", "Local SEO", "Authority"] },
    { label: "Tools", items: ["Search Console", "Analytics", "Ahrefs"] },
  ],
  "yii-development": [
    { label: "Framework", items: ["Yii 2", "MVC", "Active Record"] },
    { label: "Stack", items: ["PHP", "MySQL", "Redis", "Composer"] },
    { label: "Ops", items: ["RBAC", "Caching", "REST", "Gii"] },
  ],
  "laravel-development": [
    { label: "Framework", items: ["Laravel", "Eloquent", "Livewire", "Inertia"] },
    { label: "Stack", items: ["PHP 8", "MySQL", "Redis", "Queue workers"] },
    { label: "Ops", items: ["Policies", "Horizon", "Sail", "Forge / Vapor"] },
  ],
  "next-js-developement": [
    { label: "Framework", items: ["Next.js", "App Router", "React", "TypeScript"] },
    { label: "Rendering", items: ["SSR", "SSG", "ISR", "Server Actions"] },
    { label: "Ops", items: ["Vercel", "Core Web Vitals", "Edge"] },
  ],
  "angular-js-development": [
    { label: "Framework", items: ["Angular", "RxJS", "NgRx", "TypeScript"] },
    { label: "UI", items: ["Angular Material", "Reactive forms", "Lazy modules"] },
    { label: "Delivery", items: ["REST / GraphQL", "Karma / Jest", "CI builds"] },
  ],
  "php-development": [
    { label: "Language", items: ["PHP 8", "Composer", "PSR"] },
    { label: "Frameworks", items: ["Laravel", "Yii", "CodeIgniter", "Symfony"] },
    { label: "Data", items: ["MySQL", "PostgreSQL", "Redis"] },
  ],
  "node-js-development": [
    { label: "Runtime", items: ["Node.js", "TypeScript", "Express", "NestJS"] },
    { label: "Data", items: ["PostgreSQL", "MongoDB", "Redis", "Prisma"] },
    { label: "Ops", items: ["Queues", "WebSockets", "Docker"] },
  ],
  "asp-.net-development": [
    { label: "Platform", items: ["ASP.NET Core", "C#", "Blazor"] },
    { label: "Data", items: ["SQL Server", "Entity Framework", "Azure SQL"] },
    { label: "Identity", items: ["Entra ID", "Identity", "Roles"] },
  ],
  "magento-development": [
    { label: "Platform", items: ["Adobe Commerce", "Magento 2", "GraphQL"] },
    { label: "Stack", items: ["PHP", "MySQL", "Elasticsearch", "Redis"] },
    { label: "Commerce", items: ["Configurable products", "B2B quotes", "Checkout"] },
  ],
  "woocommerce-development": [
    { label: "Platform", items: ["WooCommerce", "WordPress", "HPOS"] },
    { label: "Stack", items: ["PHP", "MySQL", "JavaScript"] },
    { label: "Commerce", items: ["Payments", "Shipping", "Subscriptions"] },
  ],
  "custom-e-commerce-development": [
    { label: "Storefront", items: ["Custom cart", "Checkout", "Search"] },
    { label: "Ops", items: ["Pricing rules", "ERP hooks", "Inventory"] },
    { label: "Stack", items: ["PHP / Node", "PostgreSQL", "Redis"] },
  ],
  "graphic-design": [
    { label: "Identity", items: ["Logo systems", "Colour", "Type"] },
    { label: "Collateral", items: ["Campaign art", "Packaging", "Social"] },
    { label: "Tools", items: ["Illustrator", "Photoshop", "InDesign", "Figma"] },
  ],
  "banner-design": [
    { label: "Formats", items: ["Display", "Social", "Web headers", "Print"] },
    { label: "Tools", items: ["Photoshop", "Illustrator", "Figma"] },
    { label: "Delivery", items: ["Resizes", "Source files", "Brand lock"] },
  ],
  "logo-design": [
    { label: "Craft", items: ["Wordmarks", "Symbols", "Lockups"] },
    { label: "Files", items: ["SVG", "EPS", "PNG", "One-colour"] },
    { label: "Tools", items: ["Illustrator", "Figma"] },
  ],
  "brochure-design": [
    { label: "Formats", items: ["Bi-fold", "Tri-fold", "Leave-behind"] },
    { label: "Print", items: ["CMYK", "Bleed", "Paper spec"] },
    { label: "Tools", items: ["InDesign", "Illustrator", "Photoshop"] },
  ],
  "smo-(social-media-optimization)": [
    { label: "Profiles", items: ["LinkedIn", "Instagram", "Facebook", "YouTube"] },
    { label: "Hygiene", items: ["Bios", "NAP consistency", "UTM links"] },
    { label: "Measure", items: ["Search Console", "Analytics", "Native insights"] },
  ],
  "smm-(social-media-marketing)": [
    { label: "Networks", items: ["Meta", "LinkedIn", "Instagram", "YouTube"] },
    { label: "Work", items: ["Calendar", "Creative", "Community"] },
    { label: "Paid", items: ["Boosts", "Retargeting", "Lead ads"] },
  ],
  "ppc-(pay-per-click)": [
    { label: "Channels", items: ["Google Ads", "Microsoft Ads", "Meta Ads"] },
    { label: "Setup", items: ["Search", "PMax", "Shopping", "Remarketing"] },
    { label: "Measure", items: ["Conversions", "GA4", "Call tracking"] },
  ],
};

const techByCategory: Record<string, TechGroup[]> = {
  "Web Design": [
    { label: "Design", items: ["Figma", "Photoshop", "Illustrator"] },
    { label: "Front-end", items: ["HTML5", "CSS3", "JavaScript"] },
    { label: "UX", items: ["Wireframes", "Prototypes", "Usability testing"] },
  ],
  CMS: [
    { label: "Platforms", items: ["WordPress", "Shopify", "Drupal", "Joomla"] },
    { label: "Stack", items: ["PHP", "MySQL", "JavaScript"] },
    { label: "Capabilities", items: ["Custom themes", "Plugins", "Migrations"] },
  ],
  Framework: [
    { label: "PHP", items: ["Laravel", "CodeIgniter", "CakePHP", "Yii"] },
    { label: "JavaScript", items: ["Next.js", "Angular", "Node.js"] },
    { label: "Practices", items: ["MVC", "REST APIs", "Testing"] },
  ],
  "Mobile App Development": [
    { label: "Native", items: ["Swift", "Kotlin", "Java"] },
    { label: "Cross-platform", items: ["React Native", "Flutter"] },
    { label: "Services", items: ["Push", "Payments", "Analytics"] },
  ],
  "Web Development": [
    { label: "Languages", items: ["PHP", "JavaScript", "C#", "Node.js"] },
    { label: "Frameworks", items: ["Laravel", "Next.js", "ASP.NET"] },
    { label: "Delivery", items: ["APIs", "Cloud", "QA"] },
  ],
  "Ecommerce Development": [
    { label: "Platforms", items: ["Magento", "WooCommerce", "Shopify", "Custom"] },
    { label: "Commerce", items: ["Catalog", "Checkout", "Payments"] },
    { label: "Growth", items: ["SEO", "Speed", "Integrations"] },
  ],
  "Graphic Design": [
    { label: "Identity", items: ["Logo", "Brand kits", "Typography"] },
    { label: "Collateral", items: ["Banners", "Brochures", "Social creatives"] },
    { label: "Tools", items: ["Illustrator", "Photoshop", "InDesign"] },
  ],
  "Digital Marketing": [
    { label: "Search", items: ["SEO", "PPC", "Analytics"] },
    { label: "Social", items: ["SMO", "SMM", "Content"] },
    { label: "Paid", items: ["Google Ads", "Meta Ads", "Retargeting"] },
  ],
};

export function getServiceTech(service: ServiceDetail): TechGroup[] {
  return techBySlug[service.slug] ?? techByCategory[service.category] ?? techByCategory["Web Development"];
}
