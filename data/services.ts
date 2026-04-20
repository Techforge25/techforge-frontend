import iconClipboard from "@/assets/images/home/services/icon-clipboard.svg";
import iconLogomark from "@/assets/images/home/services/icon-logomark.svg";
import iconDesign from "@/assets/images/home/services/icon-design.svg";

export type ServiceCardItem = {
  icon: string;
  iconClassName?: string;
  title: string;
  description: string;
  accent?: "pink" | "blue";
};

const allServiceCards: readonly ServiceCardItem[] = [
  {
    icon: iconClipboard.src,
    title: "Mobile App Development",
    description:
      "Build secure, high-performance iOS and Android apps with user-focused designs tailored to meet your business and customer needs.",
  },
  {
    icon: iconLogomark.src,
    iconClassName: "h-[24px] w-[24px]",
    title: "Website Development",
    description:
      "We create fast, SEO-optimized websites that are fully responsive and custom-built to reflect your brand and grow your business.",
  },
  {
    icon: iconDesign.src,
    title: "UI/UX Design",
    description:
      "We craft intuitive, user-centered UI/UX designs that enhance experience, boost engagement, and drive conversions across all platforms.",
    accent: "pink",
  },
  {
    icon: iconClipboard.src,
    title: "Digital Marketing",
    description:
      "Drive measurable growth with strategic digital campaigns tailored for performance and sustained customer acquisition.",
  },
  {
    icon: iconLogomark.src,
    title: "SEO Optimization",
    description:
      "Improve search visibility and organic traffic with technical SEO, content strategy, and continuous optimization.",
    accent: "pink",
  },
  {
    icon: iconDesign.src,
    title: "Brand Identity Design",
    description:
      "Build a memorable brand presence with cohesive visual identity, brand guidelines, and creative direction.",
  },
  {
    icon: iconClipboard.src,
    title: "Web App Development",
    description:
      "Develop scalable web applications with robust architecture, clean UX, and maintainable codebases.",
  },
  {
    icon: iconLogomark.src,
    title: "E-Commerce Solutions",
    description:
      "Launch conversion-focused online stores with secure payments, fast performance, and smooth checkout flows.",
  },
  {
    icon: iconDesign.src,
    title: "Landing Page Design",
    description:
      "Create high-impact landing pages optimized for campaigns, lead generation, and conversion goals.",
    accent: "pink",
  },
  {
    icon: iconClipboard.src,
    title: "Social Media Marketing",
    description:
      "Scale your social presence through platform strategy, content planning, and data-backed campaign execution.",
  },
  {
    icon: iconLogomark.src,
    title: "Google Ads Management",
    description:
      "Maximize ad ROI with full-funnel PPC strategy, keyword targeting, and continuous performance optimization.",
    accent: "pink",
  },
  {
    icon: iconDesign.src,
    title: "Product Design",
    description:
      "Turn product ideas into usable digital experiences with user research, prototyping, and iterative design.",
  },
  {
    icon: iconClipboard.src,
    title: "CMS Development",
    description:
      "Build easy-to-manage CMS websites that empower your team to publish and scale content independently.",
  },
  {
    icon: iconLogomark.src,
    title: "API Integration",
    description:
      "Integrate third-party services and internal systems with secure, reliable, and maintainable API workflows.",
  },
  {
    icon: iconDesign.src,
    title: "Conversion Optimization",
    description:
      "Improve user journeys and conversion rates using UX testing, funnel analysis, and rapid design improvements.",
    accent: "pink",
  },
] as const;

export const homeServicesCopy = {
  badgeLabel: "Our latest services",
  headingLine1: "Web development,",
  headingLine2Highlight: "Mobile App, SEO,",
  headingLine2After: "and Marketing Solutions",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
  ctaLabel: "view all services",
} as const;

export const servicesPageCopy = {
  badgeLabel: "Our latest services",
  headingLine1: "Web development,",
  headingLine2Highlight: "Mobile App, SEO,",
  headingLine2After: "and Marketing Solutions",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
  loadMoreLabel: "load more",
} as const;

export const homeRecentServicesCards = allServiceCards.slice(0, 3);
export const servicesPageCards = allServiceCards;
