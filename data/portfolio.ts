import portfolioArrowCircle from "@/assets/images/home/portfolio/arrow-circle.svg";
import { portfolioDetails } from "@/data/portfolio-details";

export const portfolioHeroSection = {
  badgeLabel: "our portfolio",
  heading: "Our Projects",
} as const;

function normalizeCategoryKey(category: string) {
  return category.trim().toLowerCase().replace(/\s+/g, "-");
}

const categoryEntries = Array.from(
  new Map(
    portfolioDetails.map((item) => [normalizeCategoryKey(item.category), item.category.toLowerCase()]),
  ).entries(),
);

export const portfolioFilters = [
  { key: "all", label: "all" },
  ...categoryEntries.map(([key, label]) => ({ key, label })),
] as const;

export type PortfolioCardItem = {
  slug: string;
  href: string;
  image: string;
  title: string;
  subtitle: string;
  arrowIcon: string;
  category: string;
};

const allPortfolioCards: readonly PortfolioCardItem[] = portfolioDetails.map((item) => ({
  slug: item.slug,
  href: `/portfolio-details/${item.slug}`,
  image: item.heroImage,
  title: item.projectName,
  subtitle: item.category,
  arrowIcon: portfolioArrowCircle.src,
  category: normalizeCategoryKey(item.category),
}));

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
