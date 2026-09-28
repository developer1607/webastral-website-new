export const brand = {
  name: "WebAstral Infosystems",
  shortName: "WebAstral",
  tagline: "Unlock your business potential with cutting edge technology and creativity",
  description:
    "Webastral is an 11-year-old technology company delivering innovative IT and web solutions to global clients.",
  phone: "+91-9815611553",
  phoneHref: "tel:+919815611553",
  email: "info@webastral.com",
  hrEmail: "hr@webastral.com",
  skype: "webastral",
  address:
    "D-151, 2nd Floor, Industrial Area, Phase-8, SAS Nagar (Mohali), Punjab",
  mapsUrl: "https://maps.app.goo.gl/FzZQux2Vrf41APJQ9",
  teamsUrl:
    "https://teams.microsoft.com/l/chat/0/0?users=info@webastral.com",
};

export const socialLinks = [
  { href: "https://www.facebook.com/", label: "Facebook", icon: "/icons/facebook.png" },
  { href: "https://www.twitter.com/", label: "X", icon: "/icons/x.png" },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: "linkedin" },
  { href: "https://www.instagram.com/", label: "Instagram", icon: "/icons/instagram.png" },
];

export type NavChild = { href: string; label: string };

export type NavItem = {
  href: string;
  label: string;
  children?: { href?: string; label: string; children?: NavChild[] }[];
};

export const serviceMenu: NavItem["children"] = [
  {
    href: "/services/web-design",
    label: "Web Design",
    children: [
      { href: "/services/mobile-website", label: "Mobile Website" },
      { href: "/services/parallax-webdesign", label: "Parallax Web Design" },
      { href: "/services/responsive-web-design", label: "Responsive Web Design" },
      { href: "/services/user-experience-design", label: "User Experience Design" },
    ],
  },
  {
    href: "/services",
    label: "CMS",
    children: [
      { href: "/services/wordpress-development", label: "WordPress Development" },
      { href: "/services/shopify-development", label: "Shopify Development" },
      { href: "/services/opencart-development", label: "OpenCart Development" },
      { href: "/services/drupal-development", label: "Drupal Development" },
      { href: "/services/joomla-development", label: "Joomla Development" },
    ],
  },
  {
    href: "/services",
    label: "Framework",
    children: [
      { href: "/services/codelgniter-development", label: "CodeIgniter Development" },
      { href: "/services/cakephp-development", label: "CakePHP Development" },
      { href: "/services/yii-development", label: "Yii Development" },
      { href: "/services/angular-js-development", label: "Angular JS Development" },
      { href: "/services/laravel-development", label: "Laravel Development" },
      { href: "/services/next-js-developement", label: "Next.js Development" },
    ],
  },
  {
    href: "/services",
    label: "Mobile App Development",
    children: [
      { href: "/services/android-app-development", label: "Android App Development" },
      { href: "/services/ipad-app-development", label: "iPad App Development" },
      { href: "/services/iphone-app-development", label: "iPhone App Development" },
      { href: "/services/hybrid-app-development", label: "Hybrid App Development" },
    ],
  },
  {
    href: "/services/web-development",
    label: "Web Development",
    children: [
      { href: "/services/php-development", label: "PHP Development" },
      { href: "/services/node-js-development", label: "Node.js Development" },
      { href: "/services/asp-.net-development", label: "ASP.NET Development" },
    ],
  },
  {
    href: "/services",
    label: "Ecommerce Development",
    children: [
      { href: "/services/magento-development", label: "Magento Development" },
      { href: "/services/woocommerce-development", label: "WooCommerce Development" },
      { href: "/services/custom-e-commerce-development", label: "Custom E-commerce Development" },
    ],
  },
  {
    href: "/services/graphic-design",
    label: "Graphic Design",
    children: [
      { href: "/services/banner-design", label: "Banner Design" },
      { href: "/services/logo-design", label: "Logo Design" },
      { href: "/services/brochure-design", label: "Brochure Design" },
    ],
  },
  {
    href: "/services/digital-marketing",
    label: "Digital Marketing",
    children: [
      { href: "/services/seo-(search-engine-optimization)", label: "SEO" },
      { href: "/services/smo-(social-media-optimization)", label: "SMO" },
      { href: "/services/smm-(social-media-marketing)", label: "SMM" },
      { href: "/services/ppc-(pay-per-click)", label: "PPC" },
    ],
  },
];

export const navItems: NavItem[] = [
  { href: "/about-us", label: "About Us" },
  { href: "/services", label: "Services", children: serviceMenu },
  {
    href: "/portfolio",
    label: "Portfolio",
    children: [
      { href: "/portfolio/web-development", label: "Web Development" },
      { href: "/portfolio/web-design", label: "Web Design" },
      { href: "/portfolio/mobile-application", label: "Mobile Application" },
      { href: "/portfolio/seo", label: "SEO" },
      { href: "/portfolio/digital-marketing", label: "Digital Marketing" },
      { href: "/portfolio/graphic-designing", label: "Graphic Designing" },
    ],
  },
  { href: "/contact", label: "Contact Us" },
];

export const companyLinks = [
  { href: "/about-us", label: "About Company" },
  { href: "/services", label: "Our Services" },
  { href: "/portfolio", label: "Our Portfolio" },
  { href: "/job-list", label: "Careers" },
  { href: "/blog", label: "Our Blog" },
  { href: "/team", label: "Our Team" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact Us" },
];

export const footerServiceLinks = [
  { href: "/services/wordpress-development", label: "WordPress Development" },
  { href: "/services/web-development", label: "Web Development" },
  { href: "/services/web-design", label: "Web Design" },
  { href: "/services/digital-marketing", label: "Digital Marketing" },
  { href: "/services/iphone-app-development", label: "iOS App Development" },
  { href: "/services/android-app-development", label: "Android App Development" },
];

export const quoteServices = [
  "Web Design",
  "Web Development",
  "Mobile app development",
  "Ecommerce Development",
  "Graphic Design",
  "Digital Marketing",
];

export const technologies = [
  "C#",
  "Python",
  ".NET",
  "React",
  "Java",
  "Node.js",
  "Swift",
  "Android",
  "JavaScript",
  "PHP",
  "Laravel",
  "WordPress",
  "Shopify",
  "Next.js",
];
