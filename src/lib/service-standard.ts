import type { ServiceDetail } from "./services";

export type AudienceSide = {
  title: string;
  body: string;
};

export type ServiceAudience = {
  eyebrow: string;
  statement: string;
  b2b: AudienceSide;
  b2c: AudienceSide;
  industries: string[];
};

const bySlug: Record<string, ServiceAudience> = {
  "shopify-development": {
    eyebrow: "DTC brands and B2B catalogues",
    statement:
      "Shopify is for merchants who sell to shoppers and for wholesalers who sell to other businesses. The theme, checkout, and admin have to match how you actually take orders.",
    b2b: {
      title: "B2B and wholesale",
      body: "Company accounts, price lists, and catalogues that still need a reliable checkout — not a consumer theme stretched over wholesale rules.",
    },
    b2c: {
      title: "Direct to consumer",
      body: "Brand storefronts, mobile carts, and abandoned-checkout recovery so a first-time shopper can buy without a sales call.",
    },
    industries: ["Fashion", "CPG", "Electronics", "Wholesale", "Specialty retail"],
  },
  "opencart-development": {
    eyebrow: "Merchants who want to own the cart",
    statement:
      "OpenCart suits teams that want an open-source shop — selling to the public, to trade accounts, or both — without a hosted platform lock-in.",
    b2b: {
      title: "Trade and catalogue sales",
      body: "Payment, shipping, and admin that purchasing teams can run, with room to customise PHP when the catalogue needs more than a starter shop.",
    },
    b2c: {
      title: "Public storefronts",
      body: "A search-friendly cart, one-page checkout, and a theme shoppers can use on a phone.",
    },
    industries: ["Electronics", "Parts", "Specialty retail", "Wholesale", "Regional brands"],
  },
  "magento-development": {
    eyebrow: "Enterprise catalogues and consumer stores",
    statement:
      "Magento is for teams whose catalogue, tax, or multi-store rules have outgrown a simple hosted cart — selling to purchasing teams and to the public from the same platform.",
    b2b: {
      title: "Complex B2B catalogues",
      body: "Company accounts, quotes, and store views for buyers who order by SKU, not by mood.",
    },
    b2c: {
      title: "High-volume storefronts",
      body: "Category and product pages that stay usable as the range grows, with a checkout shoppers can finish.",
    },
    industries: ["Manufacturing", "Fashion", "Electronics", "Wholesale", "Multi-brand retail"],
  },
  "woocommerce-development": {
    eyebrow: "WordPress shops, DTC and trade",
    statement:
      "WooCommerce is for teams already on WordPress who need a real cart — consumer checkout or account-based selling — without a second platform.",
    b2b: {
      title: "Account-based selling",
      body: "Role pricing, quotes, and catalogue rules that sit in the same WordPress admin as the rest of the site.",
    },
    b2c: {
      title: "Consumer checkout",
      body: "Products, payments, and shipping a shopper can finish on a phone, without a plugin pile.",
    },
    industries: ["Fashion", "Food & beverage", "Specialty retail", "Memberships", "Local makers"],
  },
  "custom-e-commerce-development": {
    eyebrow: "Catalogues that do not fit a boxed cart",
    statement:
      "Custom commerce is for teams whose pricing, kits, or warehouse flow fight Shopify, Magento, or WooCommerce — whether the buyer is a trade account or a shopper.",
    b2b: {
      title: "Rules-based wholesale",
      body: "Contracts, bundles, and fulfilment hooks that a theme marketplace will never ship.",
    },
    b2c: {
      title: "Own-the-stack storefronts",
      body: "A cart and checkout designed around your SKUs, not a plugin's idea of a product.",
    },
    industries: ["Industrial", "Configurators", "Subscriptions", "Marketplace", "Specialty retail"],
  },
  "wordpress-development": {
    eyebrow: "Editors, marketers, and store teams",
    statement:
      "WordPress is for teams that publish every week and for brands that also need a shop. The admin has to work for marketing, not only for developers.",
    b2b: {
      title: "Corporate and editorial",
      body: "Sites, portals, and content ops for companies that sell to other businesses — pages, permissions, and a CMS people will actually use.",
    },
    b2c: {
      title: "Brand sites and shops",
      body: "Public WordPress sites and WooCommerce stores where customers read, enquire, or buy.",
    },
    industries: ["Professional services", "Healthcare", "Publishing", "Education", "Retail"],
  },
  "drupal-development": {
    eyebrow: "Structured content for staff and the public",
    statement:
      "Drupal is for organisations that need roles, workflows, and multilingual pages — an intranet or partner site on one side, a public site on the other.",
    b2b: {
      title: "Enterprise and government",
      body: "Permissions, migrations, and editorial workflows for teams that publish to staff, partners, or other agencies.",
    },
    b2c: {
      title: "Public information sites",
      body: "Content people can find on a phone, with an editor experience that survives a change of staff.",
    },
    industries: ["Government", "Higher education", "Healthcare", "NGOs", "Publishing"],
  },
  "joomla-development": {
    eyebrow: "Sites with members, not only pages",
    statement:
      "Joomla suits organisations that need access levels and extensions — a members' area for partners, and a public site for everyone else.",
    b2b: {
      title: "Member and partner sites",
      body: "ACL, extensions, and templates for associations and companies that log people in.",
    },
    b2c: {
      title: "Public Joomla sites",
      body: "Marketing and content sites visitors can read without a login.",
    },
    industries: ["Associations", "Education", "Clubs", "SMEs", "Local government"],
  },
  "next-js-developement": {
    eyebrow: "Marketing sites and product UIs",
    statement:
      "Next.js is for teams that need pages search engines can index and interfaces operators or customers click through all day.",
    b2b: {
      title: "Dashboards and partner apps",
      body: "Authenticated App Router products for staff, vendors, and finance — fast enough to use between meetings.",
    },
    b2c: {
      title: "Public marketing and stores",
      body: "Server-rendered pages that still feel like an app when a shopper filters, books, or checks out.",
    },
    industries: ["SaaS", "Media", "Retail", "Fintech", "Marketplaces"],
  },
  "laravel-development": {
    eyebrow: "Products with an admin your team will run",
    statement:
      "Laravel is for teams that need queues, billing, and roles — an internal portal, a customer product, or both in one codebase.",
    b2b: {
      title: "Ops and partner portals",
      body: "Eloquent models, policies, and queues for the work staff actually do.",
    },
    b2c: {
      title: "Customer web products",
      body: "Accounts, notifications, and billing a person can finish without calling support.",
    },
    industries: ["SaaS", "Logistics", "Education", "Healthcare", "Marketplaces"],
  },
  "yii-development": {
    eyebrow: "High-traffic PHP products",
    statement:
      "Yii is for PHP teams that cannot afford slow requests — internal tools with heavy lists, and public products with concurrent users.",
    b2b: {
      title: "Internal high-load tools",
      body: "Caching, RBAC, and MVC modules for operators who live in the app.",
    },
    b2c: {
      title: "Public PHP products",
      body: "Forums, portals, and sites that stay responsive when traffic spikes.",
    },
    industries: ["Media", "Forums", "Fintech", "Operations", "Education"],
  },
  "angular-js-development": {
    eyebrow: "Dashboards and long-lived SPAs",
    statement:
      "Angular is for products with forms, tables, and live data — used by staff all day, or by customers managing an account.",
    b2b: {
      title: "Operator consoles",
      body: "Typed components and API contracts for the screens finance and ops repeat.",
    },
    b2c: {
      title: "Account and booking UIs",
      body: "Single-page flows a customer can finish without a page reload on every field.",
    },
    industries: ["Fintech", "Healthcare", "Logistics", "SaaS", "Utilities"],
  },
  "codelgniter-development": {
    eyebrow: "Lean PHP apps that stay readable",
    statement:
      "CodeIgniter suits teams that want a small PHP framework — admin tools for staff, and public sites that do not need a heavy CMS.",
    b2b: {
      title: "Internal PHP tools",
      body: "MVC apps for catalogues, CRMs, and reporting your operators already know.",
    },
    b2c: {
      title: "Public CodeIgniter sites",
      body: "Marketing and booking sites with a PHP core your next developer can read.",
    },
    industries: ["SMEs", "Agencies", "Education", "Local services", "Hospitality"],
  },
  "cakephp-development": {
    eyebrow: "Rapid PHP products with conventions",
    statement:
      "CakePHP is for teams that want scaffolding and conventions — a partner portal, a customer app, or both, without inventing structure from scratch.",
    b2b: {
      title: "Scaffolded business apps",
      body: "Bake, ORM, and auth for internal tools that need to ship this quarter.",
    },
    b2c: {
      title: "Customer CakePHP apps",
      body: "Public products that still follow the same conventions as the admin.",
    },
    industries: ["Startups", "Education", "Non-profits", "SMEs", "Marketplaces"],
  },
  "php-development": {
    eyebrow: "Server-side PHP for ops and the public web",
    statement:
      "PHP work covers CMS estates, custom apps, and APIs — used by staff behind a login, and by customers in the browser.",
    b2b: {
      title: "Line-of-business PHP",
      body: "Applications and APIs for operators, with a structure the next developer can keep.",
    },
    b2c: {
      title: "Public PHP sites",
      body: "Marketing, stores, and content sites that stay cheap to host and easy to patch.",
    },
    industries: ["Publishing", "Education", "Retail", "Public sector", "SMEs"],
  },
  "node-js-development": {
    eyebrow: "APIs, real-time, and JavaScript products",
    statement:
      "Node is for teams that want one language on the server — partner APIs and real-time features on one side, customer apps on the other.",
    b2b: {
      title: "Integration and ops APIs",
      body: "REST or GraphQL with timeouts, queues, and logging finance and ops can trust.",
    },
    b2c: {
      title: "Live customer products",
      body: "Chat, notifications, and storefronts that stay fast under concurrent use.",
    },
    industries: ["SaaS", "Fintech", "Media", "Marketplaces", "IoT"],
  },
  "asp-.net-development": {
    eyebrow: "Microsoft-stack portals and public sites",
    statement:
      "ASP.NET is for organisations already on Windows, SQL Server, or Azure — internal portals for staff, and public sites that share that identity model.",
    b2b: {
      title: "Enterprise .NET portals",
      body: "Role-based apps that talk to the line-of-business systems you already own.",
    },
    b2c: {
      title: "Public ASP.NET sites",
      body: "Marketing and account sites hosted on Windows or Azure, with the same security model.",
    },
    industries: ["Manufacturing", "Finance", "Public sector", "Healthcare", "Insurance"],
  },
  "web-development": {
    eyebrow: "Sites, stores, and internal tools",
    statement:
      "Web development covers the public product and the software staff use after hours — one engagement, two kinds of user.",
    b2b: {
      title: "Internal platforms",
      body: "Portals, APIs, and admin for partners and operators, with a process you can see.",
    },
    b2c: {
      title: "Public web products",
      body: "Marketing sites, stores, and apps customers use in the browser.",
    },
    industries: ["Manufacturing", "Finance", "Retail", "SaaS", "Public sector"],
  },
  "iphone-app-development": {
    eyebrow: "iOS for field teams and consumers",
    statement:
      "iPhone work is for apps employees open on the job and apps customers keep on the home screen. Both have to feel like they belong on iOS.",
    b2b: {
      title: "Workforce iPhone apps",
      body: "Catalogues, visits, and approvals built for the phone in a pocket, not a desktop squeezed down.",
    },
    b2c: {
      title: "Consumer iOS products",
      body: "Store-ready apps that match how people already tap, pay, and notify on iPhone.",
    },
    industries: ["Retail", "Healthcare", "Media", "Field service", "Marketplace"],
  },
  "ipad-app-development": {
    eyebrow: "Tablet apps for desks and showrooms",
    statement:
      "iPad products are for teams that need more room than a phone — catalogues and ops on one side, media and retail experiences on the other.",
    b2b: {
      title: "Field and showroom tools",
      body: "Split views, Pencil, and layouts for the tablet on a desk or in a van.",
    },
    b2c: {
      title: "Consumer iPad apps",
      body: "Reading, shopping, and media that use the screen instead of stretching a phone UI.",
    },
    industries: ["Retail", "Education", "Healthcare", "Hospitality", "Field service"],
  },
  "android-app-development": {
    eyebrow: "Android for ops fleets and Play Store users",
    statement:
      "Android work covers the devices your staff already carry and the phones your customers buy. QA has to include both.",
    b2b: {
      title: "Fleet and field Android",
      body: "Apps for mixed device estates — scanning, visits, and catalogues that survive cheap hardware.",
    },
    b2c: {
      title: "Play Store products",
      body: "Consumer Android apps that pass review and behave on the screen sizes people actually own.",
    },
    industries: ["Logistics", "Retail", "Healthcare", "Fintech", "Marketplace"],
  },
  "hybrid-app-development": {
    eyebrow: "One product on both stores",
    statement:
      "Hybrid apps are for teams that need iOS and Android without two native squads — internal tools and consumer apps from one codebase.",
    b2b: {
      title: "Shared ops apps",
      body: "Staff tools that ship to both stores, with native plugins for camera, offline, and payments.",
    },
    b2c: {
      title: "Cross-platform consumer apps",
      body: "One design system, two listings, updates that land together.",
    },
    industries: ["Startups", "Retail", "Healthcare", "Education", "Field service"],
  },
  "web-design": {
    eyebrow: "B2B operators and consumer brands",
    statement:
      "We design sites for companies that sell to other businesses and for brands that sell to the public. Same craft, different journeys — a layout people can finish a task on.",
    b2b: {
      title: "Service and lead sites",
      body: "Lead capture, service explanation, and layouts purchasing or operations teams can use without a walkthrough.",
    },
    b2c: {
      title: "Brand and campaign sites",
      body: "Sites where a visitor can browse, enquire, or buy on the device they already have.",
    },
    industries: ["SaaS", "Healthcare", "Retail", "Hospitality", "Professional services"],
  },
  "mobile-website": {
    eyebrow: "Phone-first sites for staff and customers",
    statement:
      "A mobile site has to work for a client checking a portal on the train and a shopper tapping a campaign. Neither should pinch-zoom.",
    b2b: {
      title: "On-the-go operators",
      body: "Mobile views of catalogues, tickets, and account tools for people who are not at a desk.",
    },
    b2c: {
      title: "Campaign and local customers",
      body: "Dedicated mobile sites and responsive pages for QR, geo, and social traffic.",
    },
    industries: ["Hospitality", "Retail", "Local services", "Events", "Healthcare"],
  },
  "responsive-web-design": {
    eyebrow: "One URL, every screen family",
    statement:
      "Responsive work is for teams that refuse a separate mobile site — staff at a monitor, and customers on a phone, sharing one URL.",
    b2b: {
      title: "Desktop-first operators",
      body: "Wide layouts and navigation for people working at a computer, without breaking the phone view.",
    },
    b2c: {
      title: "Phone and tablet visitors",
      body: "Single-column reading and tap-friendly actions — no zoom, no second domain.",
    },
    industries: ["SaaS", "Publishing", "Retail", "Education", "Professional services"],
  },
  "parallax-webdesign": {
    eyebrow: "Story sites for brands and campaigns",
    statement:
      "Parallax is for teams that need a page people keep scrolling — a product story for shoppers, or a flagship narrative for a B2B launch.",
    b2b: {
      title: "Flagship product stories",
      body: "Layered scenes for launches, investor pages, and campaigns aimed at other businesses.",
    },
    b2c: {
      title: "Campaign microsites",
      body: "Foreground copy that stays readable while the layers behind it hold attention.",
    },
    industries: ["Consumer brands", "Automotive", "Agencies", "Events", "Luxury"],
  },
  "user-experience-design": {
    eyebrow: "Research for operators and customers",
    statement:
      "UX is for teams that cannot afford a pretty screen nobody finishes — internal tools and public products, evidenced before we draw.",
    b2b: {
      title: "Operator journeys",
      body: "Task analysis and IA for the people who live in the product eight hours a day.",
    },
    b2c: {
      title: "Customer journeys",
      body: "Flows a first-time visitor can complete on a phone without a support call.",
    },
    industries: ["SaaS", "Fintech", "Healthcare", "Retail", "Public sector"],
  },
  "graphic-design": {
    eyebrow: "Brand, campaign, and sales teams",
    statement:
      "Visual work has to hold up in a pitch deck, a store, and a paid ad. We design for B2B sales kits and consumer campaigns from the same system.",
    b2b: {
      title: "Sales and corporate",
      body: "Brochures, decks, and identity for teams that sell to other businesses — files printers and PDFs can actually use.",
    },
    b2c: {
      title: "Campaign and retail",
      body: "Banners, logos, and campaign art for ads, packaging, and the website shoppers see.",
    },
    industries: ["Retail", "Hospitality", "Professional services", "Events", "Consumer goods"],
  },
  "logo-design": {
    eyebrow: "Marks for companies and consumer brands",
    statement:
      "A logo has to work on a van, a letterhead, and a phone. We design for B2B identity and consumer brands with the same constraint: it must still read small.",
    b2b: {
      title: "Corporate identity",
      body: "Marks for professional services and product companies that sit on proposals and signage.",
    },
    b2c: {
      title: "Consumer brands",
      body: "Packaging and app-icon ready marks people can recognise in a feed.",
    },
    industries: ["Startups", "Retail", "Hospitality", "Professional services", "Food & beverage"],
  },
  "banner-design": {
    eyebrow: "Ads and headers for pipeline and retail",
    statement:
      "Banners have a second to work. We design sets for B2B demand gen and for consumer retail — same brand, different offer.",
    b2b: {
      title: "Demand-gen display",
      body: "LinkedIn, Google Display, and site headers aimed at enquiries and demos.",
    },
    b2c: {
      title: "Retail and social ads",
      body: "Offer-first layouts for the sizes you actually buy.",
    },
    industries: ["Retail", "SaaS", "Events", "Ecommerce", "Local services"],
  },
  "brochure-design": {
    eyebrow: "Leave-behinds for sales and the shop floor",
    statement:
      "A brochure is still something a buyer can hold. We design for B2B sales kits and for consumer product stories.",
    b2b: {
      title: "Sales brochures",
      body: "Bi-folds and leave-behinds for teams that sell in the room.",
    },
    b2c: {
      title: "Product and retail print",
      body: "Covers and inside spreads a customer can take away from a counter.",
    },
    industries: ["Manufacturing", "Hospitality", "Professional services", "Education", "Retail"],
  },
  "digital-marketing": {
    eyebrow: "Demand gen and brand growth",
    statement:
      "Search, social, and paid media for teams that sell to businesses and teams that sell to shoppers. Reporting is against leads, pipeline, or revenue.",
    b2b: {
      title: "Pipeline and leads",
      body: "SEO and PPC aimed at enquiries, demos, and accounts — not traffic that never talks to sales.",
    },
    b2c: {
      title: "Traffic and sales",
      body: "Social, search, and ads that send people to a page they can buy or book from.",
    },
    industries: ["SaaS", "Retail", "Healthcare", "Education", "Local services"],
  },
  "seo-(search-engine-optimization)": {
    eyebrow: "Search for pipeline and for shoppers",
    statement:
      "SEO is for teams that need to be found when a buyer compares vendors, and when a shopper types a product. Technical work and content sit in the same loop.",
    b2b: {
      title: "Category and service queries",
      body: "Pages aimed at enquiries and RFPs — not blog traffic that never talks to sales.",
    },
    b2c: {
      title: "Product and local search",
      body: "Content and technical SEO for the queries that end in a purchase or a visit.",
    },
    industries: ["SaaS", "Ecommerce", "Healthcare", "Legal", "Local services"],
  },
  "smo-(social-media-optimization)": {
    eyebrow: "Profiles that support sales and brand",
    statement:
      "SMO is the layer under campaigns: complete listings for a B2B brand, and consumer profiles that send people somewhere useful.",
    b2b: {
      title: "Company pages",
      body: "LinkedIn and listing hygiene so a prospect finds the same brand as the website.",
    },
    b2c: {
      title: "Consumer profiles",
      body: "Bios, links, and creatives that match the shop or booking page.",
    },
    industries: ["Professional services", "Retail", "Hospitality", "Education", "Local services"],
  },
  "smm-(social-media-marketing)": {
    eyebrow: "Campaigns for accounts and for audiences",
    statement:
      "Social marketing is a calendar, creative, and replies — aimed at other businesses, at consumers, or both, with reporting that is not a follower count.",
    b2b: {
      title: "Thought-leadership and demand",
      body: "LinkedIn and community work that supports pipeline, not empty impressions.",
    },
    b2c: {
      title: "Organic and paid social",
      body: "Feeds and ads that send people to a page they can buy or book from.",
    },
    industries: ["Retail", "DTC", "Hospitality", "Education", "SaaS"],
  },
  "ppc-(pay-per-click)": {
    eyebrow: "Paid media from click to enquiry or sale",
    statement:
      "PPC only works if the query, the ad, and the page agree — for a demo request or for a cart. We build that chain and report cost per outcome.",
    b2b: {
      title: "Paid search for pipeline",
      body: "Campaigns aimed at enquiries and accounts, with landing pages sales can use.",
    },
    b2c: {
      title: "Paid search and shopping",
      body: "Ads that send shoppers to pages that convert, with waste cut weekly.",
    },
    industries: ["SaaS", "Ecommerce", "Legal", "Education", "Local services"],
  },
};

const byCategory: Record<string, ServiceAudience> = {
  "Web Design": {
    eyebrow: "B2B operators and consumer brands",
    statement:
      "We design sites for companies that sell to other businesses and for brands that sell to the public. Same craft, different journeys — a layout people can finish a task on.",
    b2b: {
      title: "Business to business",
      body: "Lead capture, service explanation, and portals that purchasing or operations teams can use without a walkthrough.",
    },
    b2c: {
      title: "Business to consumer",
      body: "Brand sites and campaigns where a visitor can browse, enquire, or buy on the device they already have.",
    },
    industries: ["SaaS", "Healthcare", "Retail", "Hospitality", "Professional services"],
  },
  CMS: {
    eyebrow: "Publishing teams and digital operators",
    statement:
      "CMS work is for organisations that need editors to ship content without a developer for every page — corporate sites, public brands, and the portals in between.",
    b2b: {
      title: "Enterprise and editorial",
      body: "Permissions, structured content, and admin workflows for teams that publish to staff, partners, or other businesses.",
    },
    b2c: {
      title: "Public websites",
      body: "Brand and content sites visitors read on a phone, with an editor experience marketing can keep up.",
    },
    industries: ["Publishing", "Education", "Healthcare", "Government", "Professional services"],
  },
  Framework: {
    eyebrow: "Product, ops, and customer platforms",
    statement:
      "Framework work sits under internal tools and under products customers log into. We build the application around the process, whether the user is staff or a shopper.",
    b2b: {
      title: "Internal and partner systems",
      body: "Portals, admin, and APIs for operators, vendors, and finance — auth, roles, and a data model that matches the work.",
    },
    b2c: {
      title: "Customer-facing products",
      body: "Apps and sites people use to buy, book, or manage an account, with a UI they can finish without training.",
    },
    industries: ["Fintech", "Logistics", "Healthcare", "Marketplace", "Operations"],
  },
  "Mobile App Development": {
    eyebrow: "Field teams and consumer apps",
    statement:
      "We ship apps employees use on the job and apps customers keep on the home screen. The journeys differ; store-ready quality does not.",
    b2b: {
      title: "Workforce and field",
      body: "iPad, Android, and hybrid tools for catalogues, visits, and ops — built for the device in the van or on the desk.",
    },
    b2c: {
      title: "Consumer apps",
      body: "iPhone and Android products that pass store review and match how people already use the phone.",
    },
    industries: ["Retail", "Healthcare", "Field service", "Media", "Marketplace"],
  },
  "Web Development": {
    eyebrow: "Enterprise systems and public products",
    statement:
      "Web development covers internal platforms, partner portals, and customer-facing sites. The stack follows the problem — PHP, Node, .NET, or a modern front end.",
    b2b: {
      title: "Line-of-business software",
      body: "Portals, APIs, and admin for staff and partners, including Microsoft and PHP estates that already exist.",
    },
    b2c: {
      title: "Public web products",
      body: "Marketing sites, stores, and apps customers use in the browser, with performance and SEO in the same plan.",
    },
    industries: ["Manufacturing", "Finance", "Public sector", "Retail", "SaaS"],
  },
  "Ecommerce Development": {
    eyebrow: "DTC brands and B2B catalogues",
    statement:
      "Commerce work is for brands selling to shoppers and for wholesalers with price lists, quotes, and account rules. Checkout has to match how you sell.",
    b2b: {
      title: "Wholesale and B2B",
      body: "Account pricing, quotes, and fulfilment hooks so purchasing teams can order without a consumer checkout in the way.",
    },
    b2c: {
      title: "Direct to consumer",
      body: "Catalogue, cart, and payments a first-time buyer can finish on a phone.",
    },
    industries: ["Fashion", "Wholesale", "CPG", "Electronics", "Specialty retail"],
  },
  "Graphic Design": {
    eyebrow: "Brand, campaign, and sales teams",
    statement:
      "Visual work has to hold up in a pitch deck, a store, and a paid ad. We design for B2B sales kits and consumer campaigns from the same system.",
    b2b: {
      title: "Sales and corporate",
      body: "Brochures, decks, and identity for teams that sell to other businesses — files printers and PDFs can actually use.",
    },
    b2c: {
      title: "Campaign and retail",
      body: "Banners, logos, and campaign art for ads, packaging, and the website shoppers see.",
    },
    industries: ["Retail", "Hospitality", "Professional services", "Events", "Consumer goods"],
  },
  "Digital Marketing": {
    eyebrow: "Demand gen and brand growth",
    statement:
      "Search, social, and paid media for teams that sell to businesses and teams that sell to shoppers. Reporting is against leads, pipeline, or revenue.",
    b2b: {
      title: "Pipeline and leads",
      body: "SEO and PPC aimed at enquiries, demos, and accounts — not traffic that never talks to sales.",
    },
    b2c: {
      title: "Traffic and sales",
      body: "Social, search, and ads that send people to a page they can buy or book from.",
    },
    industries: ["SaaS", "Retail", "Healthcare", "Education", "Local services"],
  },
};

export function getServiceAudience(service: ServiceDetail): ServiceAudience {
  return (
    bySlug[service.slug] ??
    byCategory[service.category] ?? {
      eyebrow: "B2B operators and consumer brands",
      statement:
        "We work with teams that sell to other businesses and teams that sell to the public. The engagement is scoped to the users who will actually live in the product.",
      b2b: {
        title: "Business to business",
        body: "Platforms, portals, and campaigns for operators, partners, and purchasing teams.",
      },
      b2c: {
        title: "Business to consumer",
        body: "Sites, apps, and campaigns customers can finish on the device they already have.",
      },
      industries: ["SaaS", "Retail", "Healthcare", "Finance", "Professional services"],
    }
  );
}

export function getIncludedIntro(service: ServiceDetail) {
  return `What a ${service.title} engagement covers — scoped for the operators and the customers who will use it, then built and handed over.`;
}

export function getDeliverables(service: ServiceDetail) {
  const tails = [
    "scoped in discovery so it matches the people who will actually use it.",
    "built in the delivery sprints, not left as a post-launch extra.",
    "tested on the devices and browsers your customers use.",
    "handed over with admin notes your operators can follow.",
    "supported after launch if you want us to stay on.",
  ];
  return service.points.slice(0, 5).map((title, index) => ({
    title,
    body: `${title.replace(/\.$/, "")} is ${tails[index] ?? tails[0]}`,
  }));
}

export function getWorkProof(service: ServiceDetail) {
  const audience = getServiceAudience(service);
  return {
    lead: `${service.title} for`,
    rest: `${audience.b2b.title.toLowerCase()} and ${audience.b2c.title.toLowerCase()}`,
    body: `${audience.statement} The portfolio has launches in ${audience.industries.slice(0, 3).join(", ")}, and more.`,
  };
}
