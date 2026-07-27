import portfolioArrowCircle from "@/assets/images/home/portfolio/arrow-circle.svg";
import { portfolioDetails } from "@/data/portfolio-details";

export const portfolioHeroSection = {
  badgeLabel: "our work",
  heading: "Our Work",
  description:
    "We don't measure our work by the number of features shipped. We measure it by the decisions those products helped founders make.",
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
  industry: string;
  challenge: string;
  approach: string;
  built: string;
  arrowIcon: string;
  category: string;
};

function firstSentence(text: string) {
  const [sentence] = text.split(/(?<=[.!?])\s+/);
  return sentence ?? text;
}

const allPortfolioCards: readonly PortfolioCardItem[] = portfolioDetails.map((item) => ({
  slug: item.slug,
  href: `/portfolio-details/${item.slug}`,
  image: item.heroImage,
  title: item.projectName,
  subtitle: item.category,
  industry: item.industry ?? item.category,
  challenge: item.challenges[0] ?? item.briefDescription,
  approach: firstSentence(item.decision ?? item.solutionDescription),
  built: item.solutionFeatures.slice(0, 3).join(", "),
  arrowIcon: portfolioArrowCircle.src,
  category: normalizeCategoryKey(item.category),
}));

export const portfolioHomeCopy = {
  badgeLabel: "products we've helped bring to life",
  headingLine1: "Products We've Helped Bring",
  headingLine2Before: "to",
  headingLine2Highlight: "Life",
  ctaLabel: "view our portfolio",
  ctaHref: "/portfolio",
} as const;

export const portfolioPageCopy = {
  badgeLabel: "products we've helped bring to life",
  headingLine1: "Products We've Helped Bring",
  headingLine2Before: "to",
  headingLine2Highlight: "Life",
  loadMoreLabel: "load more",
} as const;

export const homeRecentPortfolioCards = allPortfolioCards.slice(0, 6);
export const portfolioPageCards = allPortfolioCards;
