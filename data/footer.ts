export const footerCopy = {
  newsletterBadge: "subscribe newsletters",
  newsletterHeadingLine1: "Looking for the best it",
  newsletterHeadingLine2Before: "business",
  newsletterHeadingLine2Highlight: "solutions?",
  newsletterPlaceholder: "Enter your email",
  newsletterSubmitLabel: "submit",
  companyDescription:
    "TechForge Innovations - your partner for cutting-edge technology, software development, and digital transformation solutions tailored to your business.",
  quickLinksTitle: "quick links",
  servicesTitle: "Services",
  copyright: "(c) Copyright 2025, All Rights Reserved by TechForge Innovations",
} as const;

export type FooterQuickLink = {
  label: string;
  href: string;
};

export const footerQuickLinks = [
  { label: "Home", href: "/" },
  { label: "About us", href: "/about-us" },
  { label: "services", href: "/services" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Blogs", href: "/blog" },
  { label: "Contact", href: "/contactUs" },
] as const satisfies readonly FooterQuickLink[];

export const footerServices = [
  { label: "Mobile App Development", href: "/services" },
  { label: "Website Development", href: "/services" },
  { label: "Digital Marketing | SEO", href: "/services" },
  { label: "Social Media Marketing", href: "/services" },
  { label: "Google Ads | PPC", href: "/services" },
  { label: "Graphic Design", href: "/services" },
  { label: "UIUX Design", href: "/services" },
] as const satisfies readonly FooterQuickLink[];
