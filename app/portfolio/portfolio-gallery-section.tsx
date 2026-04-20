"use client";

import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import {
  portfolioPageCards,
  portfolioPageCopy,
  portfolioFilters,
} from "@/data/portfolio";

export default function PortfolioGallerySection() {
  return (
    <PortfolioGallery
      copy={portfolioPageCopy}
      filters={portfolioFilters}
      cards={portfolioPageCards}
      loadMoreConfig={{ initialCount: 12, step: 6 }}
    />
  );
}
