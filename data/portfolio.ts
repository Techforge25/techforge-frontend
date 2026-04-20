import portfolioCard1 from "@/assets/images/home/portfolio/card-1.webp";
import portfolioCard2 from "@/assets/images/home/portfolio/card-2.webp";
import portfolioCard3 from "@/assets/images/home/portfolio/card-3.webp";
import portfolioCard4 from "@/assets/images/home/portfolio/card-4.webp";
import portfolioCard5 from "@/assets/images/home/portfolio/card-5.webp";
import portfolioCard6 from "@/assets/images/home/portfolio/card-6.webp";
import portfolioArrowCircle from "@/assets/images/home/portfolio/arrow-circle.svg";

export const portfolioHeroSection = {
  badgeLabel: "our portfolio",
  heading: "Our Projects",
} as const;

export const portfolioFilters = [
  { key: "all", label: "all" },
  { key: "websites", label: "websites" },
  { key: "app", label: "app" },
  { key: "dashboards", label: "dashboards" },
] as const;

export type PortfolioFilterKey = (typeof portfolioFilters)[number]["key"];

export type PortfolioCardItem = {
  image: string;
  title: string;
  subtitle: string;
  arrowIcon: string;
  category: Exclude<PortfolioFilterKey, "all">;
};

const allPortfolioCards: readonly PortfolioCardItem[] = [
  {
    image: portfolioCard1.src,
    title: "Neighbourly",
    subtitle: "Neighbourly website design",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard2.src,
    title: "Goat farming app",
    subtitle: "Goat farming app design",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
  {
    image: portfolioCard3.src,
    title: "Admin dashboard",
    subtitle: "360 GMP admin dashboard",
    arrowIcon: portfolioArrowCircle.src,
    category: "dashboards",
  },
  {
    image: portfolioCard4.src,
    title: "E-SIM website",
    subtitle: "E-SIM website design",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard5.src,
    title: "NextDB website",
    subtitle: "SaaS website design",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard6.src,
    title: "Crypto app",
    subtitle: "Mobile app interface",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
  {
    image: portfolioCard3.src,
    title: "Analytics dashboard",
    subtitle: "Real-time analytics dashboard",
    arrowIcon: portfolioArrowCircle.src,
    category: "dashboards",
  },
  {
    image: portfolioCard1.src,
    title: "Corporate website",
    subtitle: "Business website revamp",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard2.src,
    title: "Fintech app",
    subtitle: "Cross-platform mobile app",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
  {
    image: portfolioCard4.src,
    title: "Travel booking website",
    subtitle: "Responsive booking platform",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard6.src,
    title: "Healthcare app",
    subtitle: "Patient engagement mobile app",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
  {
    image: portfolioCard5.src,
    title: "Product dashboard",
    subtitle: "SaaS admin control panel",
    arrowIcon: portfolioArrowCircle.src,
    category: "dashboards",
  },
  {
    image: portfolioCard1.src,
    title: "Education website",
    subtitle: "LMS marketing website",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard2.src,
    title: "Delivery app",
    subtitle: "Food delivery app design",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
  {
    image: portfolioCard3.src,
    title: "CRM dashboard",
    subtitle: "Sales CRM dashboard UI",
    arrowIcon: portfolioArrowCircle.src,
    category: "dashboards",
  },
  {
    image: portfolioCard4.src,
    title: "Real estate website",
    subtitle: "Property listing website",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard5.src,
    title: "Agency website",
    subtitle: "Creative agency portfolio site",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard6.src,
    title: "Fitness app",
    subtitle: "Workout tracker app design",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
] as const;

export const portfolioHomeCopy = {
  badgeLabel: "some of our work",
  headingLine1: "Thousands of projects",
  headingLine2Before: "have been",
  headingLine2Highlight: "completed",
  ctaLabel: "view more",
} as const;

export const portfolioPageCopy = {
  badgeLabel: "some of our work",
  headingLine1: "Thousands of projects",
  headingLine2Before: "have been",
  headingLine2Highlight: "completed",
  loadMoreLabel: "load more",
} as const;

export const homeRecentPortfolioCards = allPortfolioCards.slice(0, 6);
export const portfolioPageCards = allPortfolioCards;
