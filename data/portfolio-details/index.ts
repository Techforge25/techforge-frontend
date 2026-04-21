import { portfolioDetail as neighbourly } from "./details/neighbourly";
import { portfolioDetail as test } from "./details/test";
import type { PortfolioDetail } from "./types";

export const portfolioDetails: readonly PortfolioDetail[] = [neighbourly, test] as const;

export function getPortfolioBySlug(slug: string) {
  return portfolioDetails.find((item) => item.slug === slug);
}

export type { PortfolioDetail } from "./types";
