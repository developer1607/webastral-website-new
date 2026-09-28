export type DedicatedPillar = {
  title: string;
  body: string;
};

export type DedicatedPageConfig = {
  metadata: { title: string; description: string };
  headingLead: string;
  headingEmphasis: string;
  intro: string;
  pillars: DedicatedPillar[];
  relatedCategory: string;
  relatedHeadingLead: string;
  relatedHeadingEmphasis: string;
  relatedIntro: string;
  ctaTitle: string;
  ctaAction: string;
};

/**
 * Extra copy for dedicated service pages.
 * Add a slug here, drop photos in public/assets/images/services/{slug}/,
 * and create src/app/services/{slug}/page.tsx that renders DedicatedServicePage.
 */
export const dedicatedPages: Record<string, DedicatedPageConfig> = {
  "mobile-website": {
    metadata: {
      title: "Mobile Website Design",
      description:
        "WebAstral builds dedicated mobile sites and responsive websites so customers can use your services from a phone without zooming or waiting.",
    },
    headingLead: "Two ways we extend your site",
    headingEmphasis: "to mobile",
    intro:
      "Keep your identity, improve readability, and let customers use your services from a phone — whether they are an SME visitor or a large-account client on the move.",
    pillars: [
      {
        title: "Dedicated mobile site",
        body: "A site built for phones first — campaigns, micro-payments, geo-location, QR codes, and social features that work in the hand.",
      },
      {
        title: "Responsive design",
        body: "The same website and brand, adapted to computer, tablet, and smartphone. The layout adjusts automatically so people never need to zoom.",
      },
    ],
    relatedCategory: "Web Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "Web Design",
    relatedIntro:
      "Mobile websites sit alongside parallax, responsive, UX, and full web design. Explore the rest of the category when you are ready.",
    ctaTitle: "Ready to take your website to every phone?",
    ctaAction: "Start a mobile project",
  },
  "parallax-webdesign": {
    metadata: {
      title: "Parallax Web Design",
      description:
        "WebAstral builds parallax sites with layered backgrounds, mid-ground scenes, and readable foreground copy so people keep scrolling.",
    },
    headingLead: "Layers that scroll at",
    headingEmphasis: "different speeds",
    intro:
      "We separate the visual elements of the background so they move independently. That depth keeps people sailing through the page instead of bouncing away.",
    pillars: [
      {
        title: "Background",
        body: "Distant graphics move slowly so the page feels deep instead of flat.",
      },
      {
        title: "Mid-ground",
        body: "Brand scenes and 2D–3D objects shift at a middle pace as visitors scroll.",
      },
      {
        title: "Foreground",
        body: "Headlines and actions stay readable while the layers behind them tell the story.",
      },
    ],
    relatedCategory: "Web Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "Web Design",
    relatedIntro:
      "Parallax sits with mobile, responsive, UX, and full web design. Open another page when you want a different kind of visual experience.",
    ctaTitle: "Want a site people cannot stop scrolling?",
    ctaAction: "Start a parallax project",
  },
  "responsive-web-design": {
    metadata: {
      title: "Responsive Web Design",
      description:
        "WebAstral designs one site that reflows for desktop, tablet, and smartphone — one URL, a layout built for each screen family.",
    },
    headingLead: "One site, mapped to",
    headingEmphasis: "3–4 screen families",
    intro:
      "We design templates for resolution families and let CSS reflow the page. Visitors stay in one URL, on every terminal, with a layout built for that screen.",
    pillars: [
      {
        title: "Desktop",
        body: "Wide layouts, full navigation, and multi-column content for people working at a monitor.",
      },
      {
        title: "Tablet",
        body: "The same brand, tightened into a comfortable touch layout without shrinking the desktop page.",
      },
      {
        title: "Smartphone",
        body: "Single-column reading, resized images, and tap-friendly navigation — no zoom, no extra mobile site.",
      },
    ],
    relatedCategory: "Web Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "Web Design",
    relatedIntro:
      "Responsive design sits with mobile websites, parallax, UX, and full web design. Open another page when you need a different kind of layout.",
    ctaTitle: "Need a site that works on every screen?",
    ctaAction: "Start a responsive project",
  },
  "user-experience-design": {
    metadata: {
      title: "User Experience Design",
      description:
        "WebAstral maps research, wireframes, and prototypes so people can buy, research, or finish a task without getting lost.",
    },
    headingLead: "From research to a",
    headingEmphasis: "usable product",
    intro:
      "UX is a full process — content, design, and architecture — so people can buy, research, or finish a task without getting lost. Feedback after launch is part of the same work.",
    pillars: [
      {
        title: "The right questions",
        body: "What should visitors find first? How does your audience actually behave? We ask those questions before we draw screens, so the layout answers a real need.",
      },
      {
        title: "Wireframes",
        body: "A wireframe is not a finished graphic. It places information areas on the page so business goals and audience expectations sit in the right order.",
      },
      {
        title: "Prototypes",
        body: "Clickable prototypes define the practices to adopt on the site or application while they are still cheap to change — before the full visual build.",
      },
    ],
    relatedCategory: "Web Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "Web Design",
    relatedIntro:
      "User experience sits with mobile, parallax, responsive, and full web design. Open another page when you need a different kind of layout.",
    ctaTitle: "Need a product people can actually use?",
    ctaAction: "Start a UX project",
  },
  "web-design": {
    metadata: {
      title: "Web Design",
      description:
        "WebAstral designs custom websites for performance, open-source platforms, and a measurable return — including WordPress, Joomla, and responsive layouts.",
    },
    headingLead: "Custom websites with",
    headingEmphasis: "a strategy attached",
    intro:
      "Specialists stay with you from the first brief to launch. Open-source platforms, responsive layouts, and a web strategy meant to produce tangible results — not just a pretty homepage.",
    pillars: [
      {
        title: "Custom sites",
        body: "We start from a blank screen, not a template. The design is built around performance, freedom, and independence — and around the return on your investment.",
      },
      {
        title: "Open source",
        body: "WordPress and Joomla keep you in control of the product. We also build high-level web software to sit on a corporate site when you need more than a theme.",
      },
      {
        title: "Responsive",
        body: "Advanced adaptive layouts give visitors a full experience on computer, tablet, or phone — without zooming and without a second mobile site.",
      },
    ],
    relatedCategory: "Web Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "Web Design",
    relatedIntro:
      "Full web design sits with mobile, parallax, responsive, and UX. Open another page when you need a more specific kind of layout.",
    ctaTitle: "Ready for a custom site that earns its keep?",
    ctaAction: "Start a web design project",
  },
  "wordpress-development": {
    metadata: {
      title: "WordPress Development",
      description:
        "WebAstral builds custom WordPress themes, plugins, and WooCommerce stores you can publish from the browser.",
    },
    headingLead: "The world’s most used CMS,",
    headingEmphasis: "built for your brand",
    intro:
      "From a simple blog to a full business site or a WooCommerce store. Everyday publishing stays in the browser — no HTML editor, no FTP client.",
    pillars: [
      {
        title: "Themes",
        body: "WordPress is the engine. The look can be 100% customized — custom themes so the brand shines through instead of a generic starter design.",
      },
      {
        title: "Plugins",
        body: "Add pages, posts, images, galleries, and documents from the browser. We customize plugins and add the features you actually need.",
      },
      {
        title: "WooCommerce",
        body: "The same CMS can run an online store. WooCommerce turns the site into a shop without leaving WordPress.",
      },
    ],
    relatedCategory: "CMS",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "CMS",
    relatedIntro:
      "WordPress sits with Shopify, OpenCart, Drupal, and Joomla. Open another page when a different CMS is a better fit.",
    ctaTitle: "Need a WordPress site you can actually run?",
    ctaAction: "Start a WordPress project",
  },
  "shopify-development": {
    metadata: {
      title: "Shopify Development",
      description:
        "WebAstral builds hosted Shopify stores with custom themes, checkout, and a mobile-ready cart — without the hosting fuss.",
    },
    headingLead: "A hosted store so you can",
    headingEmphasis: "focus on selling",
    intro:
      "Add products, pick a theme, take payments, and stay online — without fussing over servers. Shopify is built for start-ups and also has an enterprise version for larger catalogues.",
    pillars: [
      {
        title: "Themes",
        body: "Give the store a unique look from Shopify’s theme library, then customize it so the brand is not just another template. Every theme stays mobile responsive.",
      },
      {
        title: "Checkout",
        body: "Take card payments, track orders, and recover abandoned baskets. Shopify emails shoppers who leave without buying — more than two-thirds of visitors do.",
      },
      {
        title: "Hosted, mobile ready",
        body: "No servers to find and no software to install. Shopify hosts, updates, and scales with traffic spikes. A built-in mobile cart lets people shop from a phone.",
      },
    ],
    relatedCategory: "CMS",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "CMS",
    relatedIntro:
      "Shopify sits with WordPress, OpenCart, Drupal, and Joomla. Open another page when a different platform is a better fit.",
    ctaTitle: "Ready to launch a store without the hosting fuss?",
    ctaAction: "Start a Shopify project",
  },
  "opencart-development": {
    metadata: {
      title: "OpenCart Development",
      description:
        "WebAstral installs and customizes OpenCart — a free, search-friendly cart you own, with themes, payments, and shipping wired in.",
    },
    headingLead: "An open-source cart you",
    headingEmphasis: "actually control",
    intro:
      "OpenCart is free, search-friendly, and simple to run. We install the theme, wire payment and shipping, and customize the store when the catalog needs more than a starter shop.",
    pillars: [
      {
        title: "Simple setup",
        body: "Four steps get a shop live: pick a theme, add products, set payment and shipping, then take orders. The admin stays simple enough for everyday catalog work.",
      },
      {
        title: "Performance",
        body: "OpenCart is lightweight and uses AJAX so pages stay quick. A one-page checkout and handy search keep buying straightforward for shoppers.",
      },
      {
        title: "Complete control",
        body: "It is open source and written in PHP, so you own the store. We customize themes, extensions, and checkout when you need more than the default install.",
      },
    ],
    relatedCategory: "CMS",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "CMS",
    relatedIntro:
      "OpenCart sits with WordPress, Shopify, Drupal, and Joomla. Open another page when a different platform is a better fit.",
    ctaTitle: "Ready to launch an OpenCart store you control?",
    ctaAction: "Start an OpenCart project",
  },
  "drupal-development": {
    metadata: {
      title: "Drupal Development",
      description:
        "WebAstral customizes Drupal core, modules, and layout so editors can run the site and the brand is not stuck looking like a starter template.",
    },
    headingLead: "A CMS and a framework —",
    headingEmphasis: "not just a theme",
    intro:
      "Drupal core already covers accounts, menus, RSS, taxonomy, and admin. We customize modules and layout so editors can run the site, and the brand is not stuck looking like a starter template.",
    pillars: [
      {
        title: "Easy to manage",
        body: "Drupal can look harder than other CMS tools at first. Once the admin is explained, editors can work with pages, menus, and taxonomy without needing a developer for every change.",
      },
      {
        title: "Customization",
        body: "The source code can be changed, so the site is not locked to a template. We shape Drupal so the brand looks unlike another Drupal install somewhere else.",
      },
      {
        title: "SEO and mobile",
        body: "Markup and layout can be adjusted for search and phones. APIs connect the site to analytics, video, and social tools instead of boxing you into a fixed theme.",
      },
    ],
    relatedCategory: "CMS",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "CMS",
    relatedIntro:
      "Drupal sits with WordPress, Shopify, OpenCart, and Joomla. Open another page when a different platform is a better fit.",
    ctaTitle: "Ready to shape a Drupal site that is not just a template?",
    ctaAction: "Start a Drupal project",
  },
  "joomla-development": {
    metadata: {
      title: "Joomla Development",
      description:
        "WebAstral builds Joomla sites with custom templates, modules, and extensions — a free open-source CMS that is easy to set up.",
    },
    headingLead: "A free CMS that is",
    headingEmphasis: "quick to set up",
    intro:
      "Joomla publishes content through MySQL or PostgreSQL, with templates for visitors and editors. We install, customize, and extend it — new sites or a rebuild of an older one.",
    pillars: [
      {
        title: "Versatile",
        body: "Joomla is used for government, education, media, corporate sites, shops, and blogs. One CMS covers a wide range of site types instead of locking you into a single layout.",
      },
      {
        title: "Easy to use",
        body: "You do not need to program to set up and customize a site. When you do need something unique, the open codebase lets us add a custom module no other site has.",
      },
      {
        title: "Extensions",
        body: "Thousands of plugins, templates, and extensions extend the site without starting from scratch. Joomla stays 100% free, with front-end and back-end templates you can shape.",
      },
    ],
    relatedCategory: "CMS",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "CMS",
    relatedIntro:
      "Joomla sits with WordPress, Shopify, OpenCart, and Drupal. Open another page when a different platform is a better fit.",
    ctaTitle: "Ready to launch a Joomla site that stays free to run?",
    ctaAction: "Start a Joomla project",
  },
  "codelgniter-development": {
    metadata: {
      title: "CodeIgniter Development",
      description:
        "WebAstral builds lightweight CodeIgniter applications, portals, and APIs — MVC PHP that stays small, fast, and easy to maintain.",
    },
    headingLead: "A PHP framework that stays",
    headingEmphasis: "small and fast",
    intro:
      "CodeIgniter is easy to install, well documented, and built for speed. We use it for custom apps, portals, and APIs when a heavier framework would add more weight than the project needs.",
    pillars: [
      {
        title: "Lightweight",
        body: "CodeIgniter needs few resources while covering a lot of ground. Caching keeps page load down, so small and medium applications stay fast without a heavy stack.",
      },
      {
        title: "MVC",
        body: "Model-View-Controller keeps data, screens, and logic apart. The framework is fully object-oriented and easy to handle, which makes new features simpler to add and test.",
      },
      {
        title: "Libraries",
        body: "A strong library collection speeds up everyday work — forms, sessions, email, and APIs. We add custom libraries when a payment, CRM, or other system needs a direct hook.",
      },
    ],
    relatedCategory: "Framework",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "framework",
    relatedIntro:
      "CodeIgniter sits with CakePHP, Yii, Angular, Laravel, and Next.js. Open another page when a different stack is a better fit.",
    ctaTitle: "Ready to launch a CodeIgniter app that stays light to run?",
    ctaAction: "Start a CodeIgniter project",
  },
  "cakephp-development": {
    metadata: {
      title: "CakePHP Development",
      description:
        "WebAstral builds CakePHP applications with MVC, ORM, scaffolding, and CRUD so you code the product logic instead of reinventing the stack.",
    },
    headingLead: "Rapid PHP apps without",
    headingEmphasis: "reinventing the wheel",
    intro:
      "CakePHP is a free, open-source framework for fast, structured work that still stays flexible. We use it so you ship the specific logic of the application, with a tested core underneath.",
    pillars: [
      {
        title: "RAD",
        body: "Scaffolding, code generation, and built-in CRUD cut the repeat work. You spend time on the product, not on wiring another blank PHP project.",
      },
      {
        title: "MVC and ORM",
        body: "Model-View-Controller and object-relational mapping keep data, screens, and queries consistent. The app stays extendable from the first request to the last screen.",
      },
      {
        title: "Batteries included",
        body: "Helpers, email, cookies, sessions, ACL, caching, validation, and i18n ship with the framework. We add custom components when a payment or CRM needs a direct hook.",
      },
    ],
    relatedCategory: "Framework",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "framework",
    relatedIntro:
      "CakePHP sits with CodeIgniter, Yii, Angular, Laravel, and Next.js. Open another page when a different stack is a better fit.",
    ctaTitle: "Ready to ship a CakePHP app without the extra weight?",
    ctaAction: "Start a CakePHP project",
  },
  "yii-development": {
    metadata: {
      title: "Yii Development",
      description:
        "WebAstral builds Yii applications for high-traffic PHP products — portals, forums, and internal tools with caching, auth, and a clean MVC structure.",
    },
    headingLead: "A fast PHP core for",
    headingEmphasis: "high-traffic products",
    intro:
      "Yii is for large sites that cannot afford slow requests. We plan the data layer first, then scaffold the modules you need — DAO, RBAC, caching, and tests.",
    pillars: [
      {
        title: "Architecture",
        body: "MVC structure for portals and tools that stay maintainable after launch, instead of wrapping a CMS around a custom problem.",
      },
      {
        title: "Performance",
        body: "Caching, authentication, and query design aimed at real traffic — forums, social portals, and internal systems included.",
      },
      {
        title: "Handover",
        body: "Admin tools, APIs, and load checks so your team can keep running the product after go-live.",
      },
    ],
    relatedCategory: "Framework",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "framework",
    relatedIntro:
      "Yii sits with Laravel, CodeIgniter, CakePHP, Angular, and Next.js. Open another page when a different stack is a better fit.",
    ctaTitle: "Need a Yii app that stays fast under load?",
    ctaAction: "Start a Yii project",
  },
  "angular-js-development": {
    metadata: {
      title: "Angular JS Development",
      description:
        "WebAstral builds Angular applications with a clear component model for dashboards, SPAs, and operator tools.",
    },
    headingLead: "Front-end architecture,",
    headingEmphasis: "not a pile of widgets",
    intro:
      "Single-page products need forms, dashboards, and live data without a tangle of scripts. We map screens to modules and keep state predictable.",
    pillars: [
      {
        title: "Components",
        body: "A module structure for SPAs and dashboards that can grow without rewriting the first screens.",
      },
      {
        title: "APIs",
        body: "Typed contracts to the backend so operators and customers see consistent data.",
      },
      {
        title: "UX for the job",
        body: "Interfaces matched to the journeys people repeat every day — internal tools or public apps.",
      },
    ],
    relatedCategory: "Framework",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "framework",
    relatedIntro:
      "Angular sits with Next.js, Laravel, Yii, and the rest of the framework set.",
    ctaTitle: "Ready to structure an Angular product that can grow?",
    ctaAction: "Start an Angular project",
  },
  "laravel-development": {
    metadata: {
      title: "Laravel Development",
      description:
        "WebAstral builds Laravel web apps and portals with auth, queues, billing, and an admin your team can run.",
    },
    headingLead: "Eloquent models, queues, and an",
    headingEmphasis: "admin that matches the work",
    intro:
      "Laravel is the PHP framework we use when a product needs queues, auth, and billing. We build around your process — not a theme with a few fields bolted on.",
    pillars: [
      {
        title: "Domain first",
        body: "Users, roles, orders, or content modelled in Eloquent so the next feature does not fight the schema.",
      },
      {
        title: "Ops built in",
        body: "Queues, notifications, and policies so the application can run in production, not only in a demo.",
      },
      {
        title: "APIs and handover",
        body: "Endpoints for mobile or partners, plus a repo your developers can own after launch.",
      },
    ],
    relatedCategory: "Framework",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "framework",
    relatedIntro:
      "Laravel sits with Yii, CodeIgniter, CakePHP, and Next.js when the stack needs to change.",
    ctaTitle: "Need a Laravel product your team can operate?",
    ctaAction: "Start a Laravel project",
  },
  "next-js-developement": {
    metadata: {
      title: "Next.js Development",
      description:
        "WebAstral builds Next.js sites and apps with SEO-ready rendering, typed routes, and performance budgets.",
    },
    headingLead: "Server rendering where it helps,",
    headingEmphasis: "interactivity where it counts",
    intro:
      "Next.js is for marketing sites, dashboards, and product UIs that must rank and still feel like an app. We choose static or server rendering from how often the content changes.",
    pillars: [
      {
        title: "Rendering",
        body: "App Router, SEO-ready HTML, and client hydration only where the interface needs it.",
      },
      {
        title: "Product UI",
        body: "Reusable components and typed API routes for dashboards and customer-facing flows.",
      },
      {
        title: "Performance",
        body: "Core Web Vitals budgets, hosting setup, and a repo you can keep shipping.",
      },
    ],
    relatedCategory: "Framework",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "framework",
    relatedIntro:
      "Next.js sits with Angular, Laravel, and the rest of the framework work we ship.",
    ctaTitle: "Need a Next.js site that loads fast and still ranks?",
    ctaAction: "Start a Next.js project",
  },
  "android-app-development": {
    metadata: {
      title: "Android App Development",
      description:
        "WebAstral designs and ships Android apps from wireframe through Play Store — native screens, APIs, and QA on real devices.",
    },
    headingLead: "From concept to a",
    headingEmphasis: "store-ready Android build",
    intro:
      "We prototype the core journeys, then build against current Android tooling so the app behaves on the phones your customers own.",
    pillars: [
      {
        title: "Native UX",
        body: "Screens and navigation that match Android patterns — for field tools and consumer apps.",
      },
      {
        title: "Integrations",
        body: "APIs, payments, and device features the product actually needs, not a demo on one handset.",
      },
      {
        title: "Store and support",
        body: "QA, Play Store listing, and a path for the next release after go-live.",
      },
    ],
    relatedCategory: "Mobile App Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "mobile",
    relatedIntro:
      "Android sits with iPhone, iPad, and hybrid when you need another store or a shared codebase.",
    ctaTitle: "Ready to ship an Android app people can finish a task on?",
    ctaAction: "Start an Android project",
  },
  "ipad-app-development": {
    metadata: {
      title: "iPad App Development",
      description:
        "WebAstral builds iPad-first apps for field teams, catalogues, and internal tools — not a stretched iPhone layout.",
    },
    headingLead: "Tablet-first layouts,",
    headingEmphasis: "not a blown-up phone UI",
    intro:
      "An iPad product should use the screen: split views, Pencil, and layouts that work in the hand and on a desk.",
    pillars: [
      {
        title: "iPad IA",
        body: "Information architecture sized for Mini through full-size iPad, for catalogues and ops apps.",
      },
      {
        title: "Device features",
        body: "Camera, Handoff, and identity where they help the job — not as decoration.",
      },
      {
        title: "App Store",
        body: "Submission, assets, and updates so the tablet app can live next to your iPhone product.",
      },
    ],
    relatedCategory: "Mobile App Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "mobile",
    relatedIntro:
      "iPad work sits with iPhone, Android, and hybrid when the product needs more than one device family.",
    ctaTitle: "Need an iPad app that uses the screen?",
    ctaAction: "Start an iPad project",
  },
  "iphone-app-development": {
    metadata: {
      title: "iPhone App Development",
      description:
        "WebAstral builds iOS apps with system patterns, API integration, and App Store delivery for operators and customers.",
    },
    headingLead: "Native iOS craft plus a",
    headingEmphasis: "realistic release plan",
    intro:
      "We map the first release around one or two jobs that matter, then implement, test on device, and ship through the App Store.",
    pillars: [
      {
        title: "Product mapping",
        body: "Stack choice and UX that sit cleanly on the phone — for staff tools and consumer apps.",
      },
      {
        title: "Build",
        body: "Native development against your APIs, with testing on the devices people actually carry.",
      },
      {
        title: "Store path",
        body: "Listing assets and a version plan you can keep funding after launch.",
      },
    ],
    relatedCategory: "Mobile App Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "mobile",
    relatedIntro:
      "iPhone sits with iPad, Android, and hybrid when you need another platform.",
    ctaTitle: "Ready to ship an iPhone app people already know how to use?",
    ctaAction: "Start an iOS project",
  },
  "hybrid-app-development": {
    metadata: {
      title: "Hybrid App Development",
      description:
        "WebAstral builds cross-platform apps for iOS and Android with a shared UI and native plugins where the device requires it.",
    },
    headingLead: "One product for both stores,",
    headingEmphasis: "native where it counts",
    intro:
      "Hybrid makes sense when you need both stores without two fully native teams. We list what must be native, then share the rest.",
    pillars: [
      {
        title: "Shared UI",
        body: "One design system and codebase for iOS and Android, so features ship together.",
      },
      {
        title: "Native hooks",
        body: "Camera, payments, and offline storage as plugins — not faked in the web view.",
      },
      {
        title: "Updates",
        body: "Store listings for both platforms, plus over-the-air updates where the stack allows.",
      },
    ],
    relatedCategory: "Mobile App Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "mobile",
    relatedIntro:
      "Hybrid sits with native iPhone, iPad, and Android when part of the product must be fully native.",
    ctaTitle: "Need one app on both stores?",
    ctaAction: "Start a hybrid project",
  },
  "web-development": {
    metadata: {
      title: "Web Development",
      description:
        "WebAstral plans and builds websites and web applications for marketing sites, stores, and internal tools — with a process you can see.",
    },
    headingLead: "A transparent build from",
    headingEmphasis: "brief to handover",
    intro:
      "You get a scope, a stack that matches the problem, and regular builds. We work across PHP, Node, .NET, and modern front ends.",
    pillars: [
      {
        title: "Discovery",
        body: "Architecture and a written plan so B2B portals and public sites are not guessed in week six.",
      },
      {
        title: "Build",
        body: "Custom sites, apps, and integrations with performance, security, and QA in the same engagement.",
      },
      {
        title: "Launch",
        body: "Support, a maintainable repo, and hosting or handover your people can keep.",
      },
    ],
    relatedCategory: "Web Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "web development",
    relatedIntro:
      "General web development sits with PHP, Node, and ASP.NET when you already know the stack.",
    ctaTitle: "Need a web product that holds up after launch week?",
    ctaAction: "Start a web project",
  },
  "php-development": {
    metadata: {
      title: "PHP Development",
      description:
        "WebAstral builds PHP applications, CMS work, and APIs that stay reliable to operate — with a structure the next developer can read.",
    },
    headingLead: "Server-side PHP with a",
    headingEmphasis: "front end people can use",
    intro:
      "We write business logic in PHP and keep HTML, CSS, and JavaScript in their place. Frameworks are chosen when they reduce work, not as a badge.",
    pillars: [
      {
        title: "Applications and APIs",
        body: "Custom PHP for products and integrations, not a single template stuffed with logic.",
      },
      {
        title: "CMS and frameworks",
        body: "Laravel, Yii, or CodeIgniter when they fit — WordPress and others when the problem is content.",
      },
      {
        title: "Run and patch",
        body: "Database design, server setup, and security updates after launch.",
      },
    ],
    relatedCategory: "Web Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "web development",
    relatedIntro:
      "PHP sits with Node, ASP.NET, and general web development when the estate is mixed.",
    ctaTitle: "Need PHP software that stays boring to operate?",
    ctaAction: "Start a PHP project",
  },
  "node-js-development": {
    metadata: {
      title: "Node.js Development",
      description:
        "WebAstral builds Node.js APIs and real-time services with explicit errors, timeouts, and a handover your team can run.",
    },
    headingLead: "APIs and real-time features",
    headingEmphasis: "without a mystery box",
    intro:
      "Node fits APIs, sockets, and JavaScript teams that want one language on the server. We design around actual load, not a hello-world process.",
    pillars: [
      {
        title: "APIs",
        body: "REST or GraphQL with auth and rate limits for partner and customer traffic.",
      },
      {
        title: "Jobs and realtime",
        body: "Queues and sockets scoped to the events the product actually emits.",
      },
      {
        title: "Observability",
        body: "Logging, environments, and runbooks so the next change does not need the original author.",
      },
    ],
    relatedCategory: "Web Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "web development",
    relatedIntro:
      "Node sits with PHP, ASP.NET, and Next.js when the front end and API share a language.",
    ctaTitle: "Need Node services that stay fast under concurrent work?",
    ctaAction: "Start a Node project",
  },
  "asp-.net-development": {
    metadata: {
      title: "ASP.NET Development",
      description:
        "WebAstral builds ASP.NET web apps and APIs for teams already on Windows, SQL Server, or Azure.",
    },
    headingLead: "Custom .NET software that talks to",
    headingEmphasis: "the systems you already own",
    intro:
      "When the estate is Microsoft, ASP.NET is often the honest choice. Identity, roles, and SQL Server sit in the plan — not as change requests.",
    pillars: [
      {
        title: "Portals and apps",
        body: "Internal and customer-facing .NET applications with a clear data model.",
      },
      {
        title: "APIs and data",
        body: "SQL Server layers and services that line-of-business tools can call.",
      },
      {
        title: "Identity",
        body: "Roles and audit-friendly access, hosted on Windows or Azure.",
      },
    ],
    relatedCategory: "Web Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "web development",
    relatedIntro:
      "ASP.NET sits with PHP and Node when part of the business is already on Microsoft.",
    ctaTitle: "Need ASP.NET software that fits the Microsoft estate?",
    ctaAction: "Start a .NET project",
  },
  "magento-development": {
    metadata: {
      title: "Magento Development",
      description:
        "WebAstral implements Magento (Adobe Commerce) themes, checkout, and ops for catalogues that have outgrown a simple hosted cart.",
    },
    headingLead: "Catalogue, checkout, and ops on",
    headingEmphasis: "one Magento platform",
    intro:
      "We start with how you sell — simple products, configurables, B2B quotes, or multi-store — then shape Magento around that, including performance as the catalogue grows.",
    pillars: [
      {
        title: "Catalogue",
        body: "Theme and product architecture for DTC shelves and B2B lists on the same platform.",
      },
      {
        title: "Checkout",
        body: "Payments, tax, and shipping that match how orders actually land.",
      },
      {
        title: "Run",
        body: "Performance, upgrades, and admin training so the store can keep taking orders.",
      },
    ],
    relatedCategory: "Ecommerce Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "commerce",
    relatedIntro:
      "Magento sits with WooCommerce, custom commerce, and Shopify when the catalogue needs a different platform.",
    ctaTitle: "Need a Magento store that can actually sell?",
    ctaAction: "Start a Magento project",
  },
  "woocommerce-development": {
    metadata: {
      title: "WooCommerce Development",
      description:
        "WebAstral sets up WooCommerce on WordPress — products, payments, shipping, and the extras a theme never covers.",
    },
    headingLead: "A shop that fits WordPress",
    headingEmphasis: "instead of fighting it",
    intro:
      "Catalogue, checkout, and content stay in one admin. Custom product types and ERP hooks are focused extensions so updates stay possible.",
    pillars: [
      {
        title: "Store setup",
        body: "Theme, checkout, payments, tax, and shipping a merchant team can run.",
      },
      {
        title: "Custom flows",
        body: "Product types, memberships, or integrations without turning the site into a plugin pile.",
      },
      {
        title: "Admin",
        body: "A WordPress back office marketing and ops can share.",
      },
    ],
    relatedCategory: "Ecommerce Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "commerce",
    relatedIntro:
      "WooCommerce sits with Magento, custom commerce, and WordPress when the CMS is the centre of the brand.",
    ctaTitle: "Need a WooCommerce store your team can run?",
    ctaAction: "Start a WooCommerce project",
  },
  "custom-e-commerce-development": {
    metadata: {
      title: "Custom E-commerce Development",
      description:
        "WebAstral builds custom commerce when boxed carts cannot hold your pricing, SKUs, or warehouse rules.",
    },
    headingLead: "Commerce software shaped around",
    headingEmphasis: "how you actually sell",
    intro:
      "We model products, carts, payments, and fulfilment first, then choose the stack. The storefront and admin match your channels.",
    pillars: [
      {
        title: "Rules first",
        body: "Product, cart, and checkout designed for your SKUs and pricing — B2B accounts or consumer carts.",
      },
      {
        title: "Operations",
        body: "Payments, orders, and warehouse or ERP hooks your ops team already uses.",
      },
      {
        title: "Ownership",
        body: "A storefront and admin you own, with room for marketing and reporting later.",
      },
    ],
    relatedCategory: "Ecommerce Development",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "commerce",
    relatedIntro:
      "Custom commerce sits with Magento, WooCommerce, and Shopify when a boxed cart is close but not enough.",
    ctaTitle: "Need a store that fits rules a boxed cart cannot?",
    ctaAction: "Start a custom commerce project",
  },
  "graphic-design": {
    metadata: {
      title: "Graphic Design",
      description:
        "WebAstral designs print and digital assets that share one voice with the website and the logo — for sales kits and consumer campaigns.",
    },
    headingLead: "Campaign, print, and digital from",
    headingEmphasis: "one system",
    intro:
      "We start with how the brand should feel, then produce web, social, packaging, or print in the colour spaces those channels require.",
    pillars: [
      {
        title: "Brand-led art",
        body: "Work for pitch decks, stores, and ads so B2B and consumer pieces do not look like two companies.",
      },
      {
        title: "Production",
        body: "Files sized and specified for printers and platforms, not just a screen mock.",
      },
      {
        title: "System",
        body: "A visual system your team can keep using on the next campaign.",
      },
    ],
    relatedCategory: "Graphic Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "graphic design",
    relatedIntro:
      "Graphic design sits with logo, banner, and brochure when you need a specific format next.",
    ctaTitle: "Need visuals that carry the brand into every asset?",
    ctaAction: "Start a design project",
  },
  "banner-design": {
    metadata: {
      title: "Banner Design",
      description:
        "WebAstral designs web, social, display, and print banners that read in a second and stay on-brand.",
    },
    headingLead: "Formats for ads, sites, and",
    headingEmphasis: "in-store use",
    intro:
      "We produce sets for the placements you buy. Copy, colour, and hierarchy stay locked so a campaign can scale without a new look every week.",
    pillars: [
      {
        title: "Offer first",
        body: "Layouts that show the name, the offer, and the next step at the sizes you actually run.",
      },
      {
        title: "Resizes",
        body: "Web, social, Display, and print from one system — B2B campaigns and consumer ads.",
      },
      {
        title: "Source files",
        body: "Handover for the next flight, not a locked JPEG.",
      },
    ],
    relatedCategory: "Graphic Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "graphic design",
    relatedIntro:
      "Banners sit with logo, brochure, and full graphic design when the campaign needs more than ads.",
    ctaTitle: "Need banners that still look like your brand?",
    ctaAction: "Start a banner project",
  },
  "logo-design": {
    metadata: {
      title: "Logo Design",
      description:
        "WebAstral designs logos that work small, in one colour, and across print and digital — with files you own.",
    },
    headingLead: "A mark built from research,",
    headingEmphasis: "not a trend pack",
    intro:
      "We look at the category, the name, and where the mark will sit. Concepts come with rationale, then we refine lockup, colour, and clear space.",
    pillars: [
      {
        title: "Distinctive concepts",
        body: "Marks that identify you on a phone, a van, and a letterhead — for B2B firms and consumer brands.",
      },
      {
        title: "Practical files",
        body: "One-colour and small-size versions, with full ownership of the finals.",
      },
      {
        title: "Usage notes",
        body: "Simple rules so the next designer does not rebuild the mark.",
      },
    ],
    relatedCategory: "Graphic Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "graphic design",
    relatedIntro:
      "Logo work sits with banners, brochures, and full graphic design when identity has to travel.",
    ctaTitle: "Need a logo that still works years later?",
    ctaAction: "Start a logo project",
  },
  "brochure-design": {
    metadata: {
      title: "Brochure Design",
      description:
        "WebAstral designs bi-folds, tri-folds, and leave-behinds so the offer is easy to take away from a meeting or a shop.",
    },
    headingLead: "Print that matches the",
    headingEmphasis: "quality you sell",
    intro:
      "We plan folds, type, and photography around the story you need in the room — sales kits and consumer leave-behinds.",
    pillars: [
      {
        title: "Formats",
        body: "Corporate, product, and sales brochures with a cover that earns a second look.",
      },
      {
        title: "Print specs",
        body: "Grid, colour, and press-ready files, plus a review round before ink.",
      },
      {
        title: "Direction",
        body: "Photography and icons so the inside pages explain the product without a pitch.",
      },
    ],
    relatedCategory: "Graphic Design",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "graphic design",
    relatedIntro:
      "Brochures sit with logo, banner, and graphic design when the brand needs a held piece.",
    ctaTitle: "Need a brochure buyers can take away?",
    ctaAction: "Start a brochure project",
  },
  "digital-marketing": {
    metadata: {
      title: "Digital Marketing",
      description:
        "WebAstral plans SEO, social, and paid media as one system — reported against traffic, leads, and revenue.",
    },
    headingLead: "SEO, social, and paid media",
    headingEmphasis: "under one plan",
    intro:
      "We start with the funnel you already have, then assign channels to the jobs they are good at. The next month is a decision, not a guess.",
    pillars: [
      {
        title: "Channel plan",
        body: "SEO, SMO, SMM, and PPC on one calendar for B2B pipeline and consumer sales.",
      },
      {
        title: "Creative support",
        body: "Landing pages and assets so ads and posts have somewhere useful to send people.",
      },
      {
        title: "Reporting",
        body: "Traffic, leads, and sales — not vanity dashboards.",
      },
    ],
    relatedCategory: "Digital Marketing",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "marketing",
    relatedIntro:
      "Full-funnel work sits with SEO, SMO, SMM, and PPC when you need a single channel next.",
    ctaTitle: "Need marketing tied to leads and revenue?",
    ctaAction: "Start a marketing engagement",
  },
  "seo-(search-engine-optimization)": {
    metadata: {
      title: "SEO",
      description:
        "WebAstral runs technical SEO, content, and measurement so pages can rank for queries you can actually win.",
    },
    headingLead: "Technical SEO, content, and",
    headingEmphasis: "measurement in one loop",
    intro:
      "We audit crawlability and indexation first, then plan content and internal links. Reporting shows movement, not vanity charts.",
    pillars: [
      {
        title: "Technical",
        body: "Crawl, speed, and on-page work with your developers so B2B and consumer URLs can rank.",
      },
      {
        title: "Content",
        body: "Keyword and page planning aimed at the SERPs you can win.",
      },
      {
        title: "Reporting",
        body: "Rank, traffic, and conversion — so the next month is a decision.",
      },
    ],
    relatedCategory: "Digital Marketing",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "marketing",
    relatedIntro:
      "SEO sits with SMO, SMM, PPC, and full digital marketing when search is only one part of the funnel.",
    ctaTitle: "Need SEO connected to queries you can win?",
    ctaAction: "Start an SEO engagement",
  },
  "smo-(social-media-optimization)": {
    metadata: {
      title: "SMO (Social Media Optimization)",
      description:
        "WebAstral sets up social profiles, naming, and links so people can find and trust the brand — and so SEO is not leaking into dead ends.",
    },
    headingLead: "Profiles and hygiene search",
    headingEmphasis: "engines notice",
    intro:
      "SMO is the layer under campaigns: complete profiles and pages that send people somewhere useful.",
    pillars: [
      {
        title: "Listings",
        body: "Bios, links, and creatives aligned across the networks you actually use.",
      },
      {
        title: "Rhythm",
        body: "A posting cadence marketing can keep, for B2B presence and consumer brand pages.",
      },
      {
        title: "Measurement",
        body: "Reach and referral traffic — not empty follower counts.",
      },
    ],
    relatedCategory: "Digital Marketing",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "marketing",
    relatedIntro:
      "SMO sits with SMM, SEO, and PPC when the profiles are in order and campaigns need to run.",
    ctaTitle: "Need social profiles people can actually trust?",
    ctaAction: "Start an SMO engagement",
  },
  "smm-(social-media-marketing)": {
    metadata: {
      title: "SMM (Social Media Marketing)",
      description:
        "WebAstral plans social content, community, and paid amplification around a real audience — with monthly reporting on reach and leads.",
    },
    headingLead: "Content, community, and ads on",
    headingEmphasis: "the networks that matter",
    intro:
      "We learn the brand voice, then build organic and paid campaigns. Replies are part of the job.",
    pillars: [
      {
        title: "Calendar",
        body: "Channel strategy and content for B2B audiences and consumer feeds.",
      },
      {
        title: "Community",
        body: "Creative, scheduling, and replies — a feed that never answers is not marketing.",
      },
      {
        title: "Amplify",
        body: "Paid social and reporting on reach and leads.",
      },
    ],
    relatedCategory: "Digital Marketing",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "marketing",
    relatedIntro:
      "SMM sits with SMO, SEO, and PPC when you need the rest of the funnel in the same plan.",
    ctaTitle: "Need social campaigns aimed at a real audience?",
    ctaAction: "Start an SMM engagement",
  },
  "ppc-(pay-per-click)": {
    metadata: {
      title: "PPC (Pay Per Click)",
      description:
        "WebAstral builds paid search and paid social you can trace from click to enquiry — account structure, copy, and landing pages in one loop.",
    },
    headingLead: "Account structure, copy, and",
    headingEmphasis: "landing pages in one loop",
    intro:
      "Paid media only works if the query, the ad, and the page agree. Budgets are explicit. You see where spend went.",
    pillars: [
      {
        title: "Architecture",
        body: "Campaigns around intent for B2B enquiries and consumer sales.",
      },
      {
        title: "Ads and audiences",
        body: "Copy, extensions, and targeting that match the search or the feed.",
      },
      {
        title: "Conversion",
        body: "Landing-page recommendations, budget control, and cost-per-lead reporting.",
      },
    ],
    relatedCategory: "Digital Marketing",
    relatedHeadingLead: "More from our",
    relatedHeadingEmphasis: "marketing",
    relatedIntro:
      "PPC sits with SEO, SMM, and full digital marketing when paid is one channel, not the whole plan.",
    ctaTitle: "Need PPC you can trace to an enquiry?",
    ctaAction: "Start a PPC engagement",
  },
};

export const dedicatedRouteSlugs = [
  "mobile-website",
  "parallax-webdesign",
  "responsive-web-design",
  "user-experience-design",
  "web-design",
  "wordpress-development",
  "shopify-development",
  "opencart-development",
  "drupal-development",
  "joomla-development",
  "codelgniter-development",
  "cakephp-development",
] as const;

export const dedicatedServiceSlugs = Object.keys(dedicatedPages);

export function isDedicatedService(slug: string) {
  return (dedicatedRouteSlugs as readonly string[]).includes(slug);
}

export function getDedicatedPage(slug: string) {
  return dedicatedPages[slug];
}
