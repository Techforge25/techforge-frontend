// import { portfolioDetail as neighbourly } from "./details/neighbourly";
import { portfolioDetail as goatfarming } from "./details/goatfarming";
import { portfolioDetail as swimnest } from "./details/Swimnest";
import { portfolioDetail as ispwn } from "./details/ispwn";
import { portfolioDetail as bmsauna } from "./details/b&m-sauna";
import { portfolioDetail as birdieGame } from "./details/golf-game";
import { portfolioDetail as nonprofit } from "./details/nonprofit-WP";
import { portfolioDetail as webirmingham } from "./details/webirmingham";
import { portfolioDetail as giocali } from "./details/giocali";
import { portfolioDetail as taxi247 } from "./details/taxiapp";
import type { PortfolioDetail } from "./types";

export const portfolioDetails: readonly PortfolioDetail[] = [goatfarming,
  // neighbourly,
  swimnest,
  ispwn,
  bmsauna,
  birdieGame,
  webirmingham,
  giocali,
  taxi247,
  nonprofit] as const;

export function getPortfolioBySlug(slug: string) {
  return portfolioDetails.find((item) => item.slug === slug);
}

export type { PortfolioDetail } from "./types";
