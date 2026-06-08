import { portfolioDetail as neighbourly } from "./details/neighbourly";
import type { PortfolioDetail } from "./types";

export const portfolioDetails: readonly PortfolioDetail[] = [neighbourly] as const;

export function getPortfolioBySlug(slug: string) {
  return portfolioDetails.find((item) => item.slug === slug);
}

export type { PortfolioDetail } from "./types";
