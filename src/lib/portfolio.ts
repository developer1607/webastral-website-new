export type PortfolioProjectImage = {
  src: string;
  title: string;
};

/** Shape aligned with reference `portfolioProjectDetails` (webastralweb). */
export type PortfolioProjectDetail = {
  id: number;
  title: string;
  slug: string;
  category: string;
  showcase_image: string;
  h1: string;
  p1: string;
  h2: string;
  p2: string;
  h3: string;
  p3: string;
  h4?: string;
  p4?: string;
  h5?: string;
  p5?: string;
  h6?: string;
  p6?: string;
  h7?: string;
  p7?: string;
  completeDate: string;
  clientName: string;
  companyName: string;
  clientPosition: string;
  clientFeedback: string;
  main_Image: string;
  client_image: string;
  images: PortfolioProjectImage[];
};

/**
 * Seeded from extracted reference `data/portfolio.pages.Data.js`.
 * Expand this list as more case studies are wired.
 */
export const portfolioProjectDetails: PortfolioProjectDetail[] = [
  {
    id: 1,
    title: "Law firm",
    slug: "law-firm",
    category: "seo",
    showcase_image: "/assets/images/portfolio/lawoffice.jpg",
    h1: "Showcasing Excellence in SEO for Legal Websites",
    p1: "At WebAstral Infosystems, we pride ourselves on delivering exceptional SEO solutions tailored for the legal sector. Our project with Herbert Law, a firm specializing in estate planning and wills, stands as a testament to that commitment.",
    h2: "Our Advanced SEO Professionals implement Advanced Practices",
    p2: "Herbert Law’s website needed a comprehensive SEO overhaul to enhance visibility and attract a targeted audience seeking estate planning and will services. We executed on-page optimization, keyword targeting, and content enhancement to improve rankings and qualified leads.",
    h3: "Our Results Speak for Itself",
    p3: "The engagement delivered stronger organic traffic, higher search rankings, and a more robust online presence for Herbert Law — a model for customized SEO that meets and exceeds client expectations.",
    completeDate: "In Progress",
    clientName: "Herbert Law",
    companyName: "Law firm — SEO client",
    clientPosition: "Co Founder",
    clientFeedback:
      "Working with WebAstral has been a game-changer for our firm. Their SEO work transformed our website’s visibility and drove more qualified leads. Highly recommend them for anyone looking to elevate their online presence.",
    main_Image: "/assets/images/portfolio/lawoffice.jpg",
    client_image: "/assets/images/bg/testi11.png",
    images: [
      { src: "/assets/images/portfolio/law-firm1.png", title: "Law firm screen 1" },
      { src: "/assets/images/portfolio/law-firm2.png", title: "Law firm screen 2" },
    ],
  },
  {
    id: 2,
    title: "Nucleus Health",
    slug: "nucleus-health",
    category: "seo",
    showcase_image: "/assets/images/portfolio/nuclueshealth.jpg",
    h1: "High-Margin Healthcare Career Opportunities, Made Discoverable",
    p1: "Nucleus Health, a leader in medical job placement in Singapore, sought to amplify their online presence and streamline how jobseekers find critical healthcare roles.",
    h2: "Topping search results with a focused SEO program",
    p2: "We optimized site architecture, keyword targeting, and content relevancy so Nucleus Health reached the right audience efficiently — boosting visibility and driving qualified candidates to the platform.",
    h3: "Dedication that shows in the rankings",
    p3: "The work underscores how tailored SEO and IT support can move a specialized marketplace ahead in a competitive digital arena.",
    completeDate: "In Progress",
    clientName: "Marlin Lee",
    companyName: "Nucleus Health — SEO client",
    clientPosition: "Co Founder",
    clientFeedback:
      "WebAstral delivered exceptional SEO results for Nucleus Health, significantly enhancing visibility in Singapore’s competitive medical job market. Outstanding work by the team!",
    main_Image: "/assets/images/portfolio/nuclueshealth.jpg",
    client_image: "/assets/images/bg/testi11.png",
    images: [
      { src: "/assets/images/portfolio/nuclueshealth1.png", title: "Nucleus screen 1" },
      { src: "/assets/images/portfolio/nuclueshealth2.png", title: "Nucleus screen 2" },
    ],
  },
  {
    id: 3,
    title: "William Brandt",
    slug: "william-brandt",
    category: "seo",
    showcase_image: "/assets/images/portfolio/william-brandt.png",
    h1: "SEO strategies that elevate industrial digital presence",
    p1: "We partnered with Bertie Brandt / William Brandt Technology to elevate online visibility for a label printing and supply business through a tailored SEO program.",
    h2: "Strategy grounded in analysis",
    p2: "A full site review focused on on-page elements, keyword optimization, and UX refinements — improving rankings and engagement with industry best practices.",
    h3: "An all-in-one partner for SEO needs",
    p3: "The project shows how performance and search work together when the brief is clear and the execution is measured.",
    completeDate: "In Progress",
    clientName: "Herbert Law",
    companyName: "Bertie Brandt — SEO client",
    clientPosition: "Co Founder",
    clientFeedback:
      "Thrilled with WebAstral’s SEO work on William Brandt Technology Ltd. Visibility improved significantly — professional, responsive, and effective.",
    main_Image: "/assets/images/portfolio/Williambrandt.png",
    client_image: "/assets/images/bg/testi11.png",
    images: [
      { src: "/assets/images/portfolio/william-brandt1.png", title: "Brandt screen 1" },
      { src: "/assets/images/portfolio/william-brandt2.png", title: "Brandt screen 2" },
    ],
  },
  {
    id: 45,
    title: "Spoilt",
    slug: "spoilt",
    category: "web-development",
    showcase_image: "/assets/images/portfolio/spoilt.jpg",
    h1: "What we achieved",
    p1: "A user-friendly ecommerce experience focused on subscriptions, engagement, and sales — with simple booking and a smoother gift-shopping journey.",
    h2: "Challenge: designing a site that drives subscriptions, engagement, and sales",
    p2: "Spoilt Experience Gifts needed a significant redesign. We prioritized the most pressing shopper problems and optimized the elements that blocked conversion.",
    h3: "Solution: a profitable, modern commerce platform",
    p3: "We shipped on WordPress with a spontaneous UX and additional features that improved the interface without slowing the business down.",
    completeDate: "Active",
    clientName: "Spoilt Experience Gifts",
    companyName: "Spoilt — Web Development client",
    clientPosition: "Co Founder",
    clientFeedback:
      "We couldn’t be happier with WebAstral. The design is sleek, user-friendly, and tailored to our needs. Highly recommend their web development team.",
    main_Image: "/assets/images/portfolio/spoilt.jpg",
    client_image: "/assets/images/bg/testi11.png",
    images: [
      { src: "/assets/images/portfolio/voyage-healing2.png", title: "Spoilt detail 1" },
      { src: "/assets/images/portfolio/voyage-healing1.png", title: "Spoilt detail 2" },
    ],
  },
  {
    id: 46,
    title: "Indian Laces And Fabrics",
    slug: "indian-laces-and-fabrics",
    category: "web-development",
    showcase_image: "/assets/images/portfolio/indian-laces-and-fabrics.jpg",
    h1: "What we achieved",
    p1: "An ordering platform connected to social channels and multiple payment options — reducing mistakes and improving productivity for fabric and accessory collections.",
    h2: "Challenge: documenting the vision of Indian Laces and Fabrics",
    p2: "The platform had to feel simple while still offering strong discovery so customers could find and purchase products quickly.",
    h3: "Solution: a powerful platform and a happy client",
    p3: "We planned features carefully with the client before writing code, then delivered a storefront that matched how they sell.",
    completeDate: "Active",
    clientName: "Indian Laces And Fabrics",
    companyName: "Indian Laces And Fabrics — Web Development client",
    clientPosition: "Co Founder",
    clientFeedback:
      "WebAstral delivered a platform our team can actually run. Discovery is clearer and checkout is smoother for our customers.",
    main_Image: "/assets/images/portfolio/indian-laces-and-fabrics.jpg",
    client_image: "/assets/images/bg/testi11.png",
    images: [
      { src: "/assets/images/portfolio/voyage-healing2.png", title: "Fabrics detail 1" },
      { src: "/assets/images/portfolio/voyage-healing1.png", title: "Fabrics detail 2" },
    ],
  },
  {
    id: 47,
    title: "Club Mojo Circle",
    slug: "club-mojo-circle",
    category: "web-development",
    showcase_image: "/assets/images/portfolio/club-mojo-circle.jpg",
    h1: "What we achieved",
    p1: "Community features — searchable maps, local groups, forums, and events — so members can connect and find information in one place.",
    h2: "Challenge: project without FTP/cPanel access at the start",
    p2: "Early on, file access was limited. Shipping custom work without a full hosting handoff was the hardest part of the engagement.",
    h3: "Solution: custom work that still met the brief",
    p3: "We delivered searchable maps, local groups, information forums, and event flows so members could connect socially and professionally.",
    completeDate: "Active",
    clientName: "Club Mojo Circle",
    companyName: "Club Mojo Circle — Web Development client",
    clientPosition: "Co Founder",
    clientFeedback:
      "Despite a tricky kickoff, WebAstral shipped the community features we needed. Clear communication and solid delivery.",
    main_Image: "/assets/images/portfolio/club-mojo-circle.jpg",
    client_image: "/assets/images/bg/testi11.png",
    images: [
      { src: "/assets/images/portfolio/voyage-healing2.png", title: "Club Mojo detail 1" },
      { src: "/assets/images/portfolio/voyage-healing1.png", title: "Club Mojo detail 2" },
    ],
  },
];

export const portfolioCategories = [
  "web-development",
  "web-design",
  "mobile-application",
  "seo",
  "digital-marketing",
  "graphic-designing",
] as const;

export function categoryLabel(slug: string) {
  return slug
    .split(/[_-]/)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export function getPortfolioProject(slug: string) {
  return portfolioProjectDetails.find((project) => project.slug === slug);
}

export function getAllPortfolioProjectSlugs() {
  return portfolioProjectDetails.map((project) => project.slug);
}

export function getProjectsByCategory(category: string) {
  return portfolioProjectDetails.filter((project) => project.category === category);
}

export function getRelatedProjects(slug: string, limit = 3) {
  const current = getPortfolioProject(slug);
  if (!current) return portfolioProjectDetails.slice(0, limit);
  const same = portfolioProjectDetails.filter(
    (project) => project.category === current.category && project.slug !== slug,
  );
  const rest = portfolioProjectDetails.filter(
    (project) => project.category !== current.category && project.slug !== slug,
  );
  return [...same, ...rest].slice(0, limit);
}

/** Canonical detail URL — matches reference `/productdetails/{slug}`. */
export function getPortfolioDetailHref(slug: string) {
  return `/productdetails/${slug}`;
}
