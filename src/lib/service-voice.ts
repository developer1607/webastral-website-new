import type { ServiceDetail, ServiceFaq } from "./services";

type ServiceVoice = Partial<
  Pick<ServiceDetail, "h1" | "p1" | "h2" | "p2" | "h3" | "points">
> & {
  faqs?: ServiceFaq[];
};

/**
 * Outcome-led copy for service pages.
 * Inspired by how Shopify Plus partners, Laravel/Vercel product pages,
 * Magento agencies, and search/PPC specialists write — rephrased for WebAstral.
 */
export const serviceVoice: Record<string, ServiceVoice> = {
  "shopify-development": {
    h1: "Shopify stores for DTC brands and B2B catalogues",
    p1: "Shopify is the hosted commerce platform we use when a brand needs to sell without owning servers — and when a wholesale catalogue still has to take real orders. We shape the theme, checkout, and admin around how you actually sell.",
    h2: "Theme, checkout, and ops on a platform that stays online",
    p2: "You do not hunt for hosting or patch the cart yourself. We customise the storefront, payments, and abandoned-checkout recovery so the shop can run on desktop and phone. Shopify handles the servers; we handle the product.",
  },
  "wordpress-development": {
    h1: "WordPress sites your marketing team can actually run",
    p1: "WordPress still powers a large share of the web because editors can publish without a developer for every page. We build custom themes, plugins, and WooCommerce stores for B2B sites and consumer brands — then leave you with an admin people will use.",
  },
  "web-design": {
    h1: "Custom websites designed around the return, not the template",
    p1: "The site has to work for the people who buy from you and the people who work in it. We design custom websites on open-source platforms — including WordPress and Joomla — with performance, responsive layout, and a strategy attached.",
  },
  "yii-development": {
    h1: "Yii applications built for high-traffic PHP products",
    p1: "Yii is a PHP framework made for large sites that cannot afford slow requests. We use it for portals, forums, and internal tools that need caching, authentication, and a clean MVC structure from day one.",
    h2: "A fast PHP core without a bloated stack",
    p2: "We plan the data layer first, then scaffold the modules you actually need — DAO, RBAC, caching, and tests — instead of wrapping a generic CMS around a custom problem. The result is a Yii app that stays maintainable after launch.",
    h3: "What a Yii engagement includes",
    points: [
      "Architecture for high-traffic PHP products",
      "MVC modules with authentication and caching",
      "Admin tools and APIs your team can keep running",
      "Load and security checks before go-live",
    ],
  },
  "angular-js-development": {
    h1: "Angular apps that stay structured as they grow",
    p1: "Single-page products need a front end that can hold complex forms, dashboards, and live data without turning into a tangle of scripts. We build Angular applications with a clear component model, typed contracts, and an interface people can actually finish a task in.",
    h2: "Front-end architecture, not a pile of widgets",
    p2: "We map screens to modules, wire APIs once, and keep state predictable. Whether you are extending an existing AngularJS product or moving toward a current Angular stack, the work is scoped to the journeys your users repeat every day.",
    h3: "What an Angular engagement includes",
    points: [
      "Component architecture for dashboards and SPAs",
      "API integration with typed contracts",
      "UX that matches how operators actually work",
      "Build, test, and handover documentation",
    ],
  },
  "laravel-development": {
    h1: "Laravel products with a clean backend and a clear admin",
    p1: "Laravel is the PHP framework we reach for when a product needs queues, auth, billing, and an admin your team can run. We build the application around your process — not a theme with a few custom fields bolted on.",
    h2: "Eloquent models, queues, and an admin that matches the work",
    p2: "We start with the domain: users, roles, orders, content, or whatever the product actually moves. Then we use Laravel’s tools — Eloquent, queues, notifications, policies — so the code stays readable when the next feature lands six months later.",
    h3: "What a Laravel engagement includes",
    points: [
      "Custom web apps and internal portals",
      "Auth, roles, queues, and reporting",
      "APIs for mobile or partner systems",
      "Deployment and a handover your developers can own",
    ],
  },
  "next-js-developement": {
    h1: "Next.js sites that load fast and still rank",
    p1: "Next.js lets us render the pages search engines need and keep the interface as interactive as a React app. We use it for marketing sites, dashboards, and product UIs where speed, SEO, and a modern stack have to live together.",
    h2: "Server rendering where it helps, client interactivity where it counts",
    p2: "We choose static generation, server rendering, or a mix based on how often the content changes. Routing, data fetching, and forms are designed so the first paint is useful — then the app hydrates for the work that needs to happen in the browser.",
    h3: "What a Next.js engagement includes",
    points: [
      "App Router sites with SEO-ready rendering",
      "Reusable UI and typed API routes",
      "Performance budgets for Core Web Vitals",
      "Hosting setup and a maintainable repo",
    ],
  },
  "android-app-development": {
    h1: "Android apps people can finish a task on",
    p1: "We design and ship Android products from first wireframe through Play Store release. The work covers native screens, device APIs, and the backend hooks a real app needs — not a demo that only looks good on one phone.",
    h2: "From concept to a store-ready Android build",
    p2: "We prototype the core journeys, then build against current Android tooling so the app behaves on the devices your customers actually own. QA, store assets, and a maintenance plan sit in the same engagement so you are not left with a binary and no path forward.",
    h3: "What an Android engagement includes",
    points: [
      "UX and native Android development",
      "API, payments, and device integrations",
      "QA across common screen sizes",
      "Play Store listing and post-launch support",
    ],
  },
  "ipad-app-development": {
    h1: "iPad apps that use the screen instead of stretching a phone layout",
    p1: "An iPad product should feel designed for the tablet — split views, Apple Pencil, and layouts that work in the hand and on a desk. We build iPad apps for field teams, catalogues, and internal tools that need more room than a phone.",
    h2: "Tablet-first layouts, not a blown-up iPhone UI",
    p2: "We size navigation, forms, and media for iPad Mini through full-size iPad. Where it helps, we use platform features such as Handoff, camera controls, and Touch ID / Face ID so the app behaves like something that belongs on iOS.",
    h3: "What an iPad engagement includes",
    points: [
      "iPad-first information architecture",
      "Native UI for catalogue, ops, or content apps",
      "Device features that match the job",
      "App Store submission and updates",
    ],
  },
  "iphone-app-development": {
    h1: "iPhone apps that fit the way people already use iOS",
    p1: "We build iOS products that sit cleanly on the phone: clear navigation, system patterns, and integrations with the rest of your stack. The aim is an app operators and customers can pick up without a training deck.",
    h2: "Native iOS craft plus a realistic delivery plan",
    p2: "We help you choose the stack, map the first release, and design the screens around one or two jobs that matter. Then we implement, test on device, and ship through the App Store with a path for the next version.",
    h3: "What an iPhone engagement includes",
    points: [
      "Product mapping and iOS UX",
      "Native development against your APIs",
      "Device testing and store assets",
      "A release plan you can keep funding",
    ],
  },
  "hybrid-app-development": {
    h1: "One codebase for iOS and Android when the product allows it",
    p1: "Hybrid apps make sense when you need both stores without two fully native teams. We build with current cross-platform tools so updates ship together, while keeping native plugins for the device features you cannot fake.",
    h2: "Shared UI, native hooks where they are required",
    p2: "We start by listing what must be native — camera, payments, offline storage — and what can stay in the shared layer. You get one product to design, test, and update, with store listings for both platforms.",
    h3: "What a hybrid engagement includes",
    points: [
      "A single product for both app stores",
      "Native plugins for device-critical features",
      "Shared design system and QA",
      "Over-the-air updates where the stack allows",
    ],
  },
  "web-development": {
    h1: "Web products that hold up after the launch week",
    p1: "We plan, design, and build websites and web applications for teams that need more than a brochure. That includes marketing sites, stores, and internal tools — with a process you can see, and code your people can keep.",
    h2: "A transparent build from brief to handover",
    p2: "You get a scope, a stack that matches the problem, and regular builds instead of a big reveal. We work across PHP, Node, .NET, and modern front ends, and we stay on for hosting, fixes, and the next set of features.",
    h3: "What a web development engagement includes",
    points: [
      "Discovery, architecture, and a written plan",
      "Custom sites, apps, and integrations",
      "Performance, security, and QA",
      "Launch support and a maintainable repo",
    ],
  },
  "php-development": {
    h1: "PHP applications that stay boring to operate",
    p1: "PHP still runs a large share of the web. We use it for CMS work, custom applications, and APIs that need to be reliable rather than fashionable — with current language features and a structure your next developer can read.",
    h2: "Server-side PHP with a front end people can use",
    p2: "We write the business logic in PHP, keep HTML, CSS, and JavaScript in their place, and avoid stuffing everything into one template. Frameworks such as Laravel, Yii, or CodeIgniter are chosen when they reduce work, not as a default badge.",
    h3: "What a PHP engagement includes",
    points: [
      "Custom PHP applications and APIs",
      "CMS and framework work where it fits",
      "Database design and server setup",
      "Security patches and ongoing support",
    ],
  },
  "node-js-development": {
    h1: "Node.js services that stay fast under concurrent work",
    p1: "Node is a strong fit for APIs, real-time features, and JavaScript teams that want one language on the server. We build Node services that are explicit about errors, timeouts, and how they talk to the rest of your stack.",
    h2: "APIs and real-time features without a mystery box",
    p2: "We design the endpoints, queues, and sockets around actual load — not a hello-world server. You get logging, environments, and a handover so the next change does not require the original author.",
    h3: "What a Node.js engagement includes",
    points: [
      "REST or GraphQL APIs",
      "Real-time and background jobs",
      "Auth, rate limits, and observability",
      "Deployment and runbooks",
    ],
  },
  "asp-.net-development": {
    h1: "ASP.NET applications for teams already on the Microsoft stack",
    p1: "When the rest of the business runs on Windows, SQL Server, or Azure, ASP.NET is often the honest choice. We build web apps and APIs that fit that estate — with the security and identity model enterprises already expect.",
    h2: "Custom .NET software that talks to the systems you already own",
    p2: "We deliver ASP.NET sites, portals, and services with a clear data model and role-based access. Integrations with existing line-of-business tools are part of the plan, not an afterthought billed as change requests.",
    h3: "What an ASP.NET engagement includes",
    points: [
      "Web apps and internal portals",
      "APIs and SQL Server data layers",
      "Identity, roles, and audit-friendly access",
      "Hosting on Windows or Azure",
    ],
  },
  "magento-development": {
    h1: "Magento stores built to sell, not just to look like a catalogue",
    p1: "Magento (Adobe Commerce) is for catalogues that outgrow a simple hosted cart. We implement themes, checkout, and the operational pieces — catalog, tax, shipping, and admin — so the store can take real orders and keep doing so.",
    h2: "Catalogue, checkout, and ops on one Magento platform",
    p2: "We start with how you sell: simple products, configurables, B2B quotes, or multi-store. Then we shape Magento around that, including performance work so category and product pages stay usable as the catalogue grows.",
    h3: "What a Magento engagement includes",
    points: [
      "Theme and catalogue architecture",
      "Checkout, payments, and shipping",
      "Performance and Magento upgrades",
      "Admin training and ongoing support",
    ],
  },
  "woocommerce-development": {
    h1: "WooCommerce stores on WordPress you can actually run",
    p1: "WooCommerce is the open-source cart for teams that already live in WordPress. We set up products, payments, and shipping, then extend the shop with the extras a theme never covers — without turning the site into a plugin pile.",
    h2: "A shop that fits WordPress instead of fighting it",
    p2: "We keep the catalogue, checkout, and content in one admin. Custom product types, memberships, or ERP hooks are built as focused extensions so updates stay possible after launch.",
    h3: "What a WooCommerce engagement includes",
    points: [
      "Store setup, theme, and checkout",
      "Payments, tax, and shipping rules",
      "Custom product flows and integrations",
      "A WordPress admin your team can use",
    ],
  },
  "custom-e-commerce-development": {
    h1: "Custom commerce when a boxed cart gets in the way",
    p1: "Some catalogues, pricing rules, or warehouse flows do not fit Shopify, Magento, or WooCommerce cleanly. We build a store around those rules — SKUs, checkout, and the back-office tools your operations team already uses.",
    h2: "Commerce software shaped around how you actually sell",
    p2: "We model products, carts, payments, and fulfilment first, then choose the stack. You get a storefront and an admin that match your SKUs and channels, with room to add marketing and reporting without starting over.",
    h3: "What a custom commerce engagement includes",
    points: [
      "Product, cart, and checkout designed for your rules",
      "Payments and order operations",
      "Integrations with ERP, CRM, or warehouse tools",
      "A storefront and admin your team owns",
    ],
  },
  "graphic-design": {
    h1: "Graphic design that carries the brand into every asset",
    p1: "Strategy does not land if the visuals are generic. We design the print and digital pieces people actually see — from campaign art to product sheets — so they share one voice with the website and the logo.",
    h2: "Campaign, print, and digital assets from one system",
    p2: "We start with how the brand should feel, then produce the formats you need: web, social, packaging, or print. Files are delivered in the sizes and colour spaces your printers and platforms require.",
    h3: "What a graphic design engagement includes",
    points: [
      "Brand-led art for print and digital",
      "Campaign and product visuals",
      "Production-ready file handover",
      "A system your team can keep using",
    ],
  },
  "banner-design": {
    h1: "Banners that read in a second and still look like your brand",
    p1: "Display, retail, and web banners have a short window. We design them so the offer, the name, and the next step are clear at the sizes you actually run — without looking like a stock template.",
    h2: "Formats for ads, sites, and in-store use",
    p2: "We produce sets for the placements you buy: web headers, social, Google Display, and print. Copy, colour, and hierarchy are locked to the brand so a campaign can scale without a new look every week.",
    h3: "What a banner engagement includes",
    points: [
      "Web, social, and print banner sets",
      "Offer-first layouts that stay on-brand",
      "Resizes for the channels you run",
      "Source files for the next campaign",
    ],
  },
  "logo-design": {
    h1: "Logos that still work small, in one colour, and years later",
    p1: "A logo has to identify you on a phone, a van, and a letterhead. We design marks that are simple enough to remember and flexible enough to live across print and digital — with files you fully own.",
    h2: "A mark built from research, not a trend pack",
    p2: "We look at the category, the name, and where the mark will sit. Concepts are presented with rationale, then refined until the lockup, colour, and clear space are production-ready.",
    h3: "What a logo engagement includes",
    points: [
      "Research and distinctive concepts",
      "A mark that works in one colour and at small sizes",
      "Full ownership of the final files",
      "Basic usage notes for your team",
    ],
  },
  "brochure-design": {
    h1: "Brochures that make the offer easy to take away",
    p1: "A brochure is still one of the few pieces a buyer can hold. We design bi-folds, tri-folds, and leave-behinds so the cover earns a second look and the inside pages make the product easy to understand.",
    h2: "Print that matches the quality you sell",
    p2: "We plan folds, type, and photography around the story you need in the room. From first concepts through print-ready files, you stay in the loop so the brochure sounds like the rest of the brand.",
    h3: "What a brochure engagement includes",
    points: [
      "Corporate, product, and sales brochures",
      "Cover, grid, and print specifications",
      "Photography and icon direction",
      "Press-ready files and a review round",
    ],
  },
  "digital-marketing": {
    h1: "Digital marketing tied to traffic, leads, and revenue",
    p1: "We plan search, social, and paid media as one system instead of four disconnected retainers. You see what ran, what it cost, and what came back — so the next month is a decision, not a guess.",
    h2: "SEO, social, and paid media under one plan",
    p2: "We start with the funnel you already have, then assign SEO, SMO, SMM, and PPC to the jobs they are good at. Reporting is built around the numbers a founder or marketing lead actually uses.",
    h3: "What a digital marketing engagement includes",
    points: [
      "A channel plan mapped to your funnel",
      "SEO, social, and PPC in one calendar",
      "Creative and landing-page support",
      "Reporting against traffic, leads, and sales",
    ],
  },
  "seo-(search-engine-optimization)": {
    h1: "SEO that connects pages, content, and the queries you can win",
    p1: "Search is where people compare you with everyone else. We fix the technical base, then build pages and content around queries you can realistically rank for — with reporting that shows movement, not vanity dashboards.",
    h2: "Technical SEO, content, and measurement in the same loop",
    p2: "We audit crawlability, speed, and indexation first. Then we plan the content and internal links that give those pages a reason to rank. Competitors are watched so the work stays aimed at the SERPs you care about.",
    h3: "What an SEO engagement includes",
    points: [
      "Technical and on-page audits",
      "Keyword and content planning",
      "Implementation support with your developers",
      "Rank, traffic, and conversion reporting",
    ],
  },
  "smo-(social-media-optimization)": {
    h1: "Social profiles set up so people can find and trust the brand",
    p1: "Social media optimization is the layer under campaigns: complete profiles, consistent naming, and pages that send people somewhere useful. We put that house in order so SEO and ads are not leaking into dead ends.",
    h2: "Profiles, content hygiene, and signals search engines notice",
    p2: "We align bios, links, and posting hygiene across the networks you actually use. The goal is a brand that looks the same everywhere and earns the kind of engagement that supports search, not empty follower counts.",
    h3: "What an SMO engagement includes",
    points: [
      "Profile and listing cleanup",
      "On-brand bios, links, and creatives",
      "A posting rhythm your team can keep",
      "Measurement of reach and referral traffic",
    ],
  },
  "smm-(social-media-marketing)": {
    h1: "Social campaigns that speak to a real audience, not a vanity metric",
    p1: "We plan content, community, and paid social around the people you want to reach. The work is a calendar, creative, and reporting — not a promise that you will be famous by Friday.",
    h2: "Content, community, and ads on the networks that matter",
    p2: "We learn the brand voice, then build campaigns that can run in organic and paid. Comments and messages are part of the job, because a feed that never answers is not marketing.",
    h3: "What an SMM engagement includes",
    points: [
      "Channel strategy and content calendar",
      "Creative production and scheduling",
      "Community replies and paid amplification",
      "Monthly reporting on reach and leads",
    ],
  },
  "ppc-(pay-per-click)": {
    h1: "PPC campaigns you can trace from click to enquiry",
    p1: "Paid search and paid social only work if the query, the ad, and the landing page agree. We build that chain, watch the waste, and report on cost per lead — not just impressions.",
    h2: "Account structure, copy, and landing pages in one loop",
    p2: "We set campaigns around intent, write ads that match the search, and send traffic to pages that can convert. Budgets are explicit. You see where spend went and what came back.",
    h3: "What a PPC engagement includes",
    points: [
      "Account and campaign architecture",
      "Ad copy, extensions, and audiences",
      "Landing-page recommendations",
      "Budget control and conversion reporting",
    ],
  },
};

export function applyServiceVoice(service: ServiceDetail): ServiceDetail {
  const voice = serviceVoice[service.slug];
  const faqs = voice?.faqs ?? (service.faqs.length ? service.faqs : defaultFaqs(service));

  if (!voice) {
    return {
      ...service,
      faqs,
    };
  }

  return {
    ...service,
    ...voice,
    summary: voice.p1 ?? service.p1,
    faqs,
  };
}

function defaultFaqs(service: ServiceDetail): ServiceFaq[] {
  return [
    {
      title: `How do you scope a ${service.title} engagement?`,
      description: `We start with the outcome, the users — B2B operators, consumers, or both — and the systems this has to talk to. You get a written plan, a timeline, and a quote before build starts.`,
    },
    {
      title: "How long does a first release take?",
      description:
        "A focused first release is usually measured in weeks. Larger catalogues, apps, or integrations take longer because data, admin, and QA sit in the same plan — not as surprise change requests.",
    },
    {
      title: "What do we own after launch?",
      description:
        "You own the product, the platform admin or repository, and the handover. We can stay on for support, or your team can run it. The work is structured so either path is possible.",
    },
  ];
}
