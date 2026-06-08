import { portfolioDetail as neighbourly } from "./details/neighbourly";
import { portfolioDetail as test } from "./details/test";
import { portfolioDetail as test1 } from "./details/test";
import { portfolioDetail as test2 } from "./details/test";
import { portfolioDetail as test3 } from "./details/test";
import { portfolioDetail as test4 } from "./details/test";
import { portfolioDetail as test5 } from "./details/test";
import { portfolioDetail as test6 } from "./details/test";
import { portfolioDetail as test7} from "./details/test";
import type { PortfolioDetail } from "./types";

export const portfolioDetails: readonly PortfolioDetail[] = [neighbourly, test,test1,test2,test3,test4,test5,test6,test7] as const;

export function getPortfolioBySlug(slug: string) {
  return portfolioDetails.find((item) => item.slug === slug);
}

export type { PortfolioDetail } from "./types";
