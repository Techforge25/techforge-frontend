import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import {
  portfolioPageCards,
  portfolioFilters,
  portfolioHomeCopy,
} from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <PortfolioGallery
      copy={portfolioHomeCopy}
      filters={portfolioFilters}
      cards={portfolioPageCards}
      limit={6}
      mobilePreviewCount={3}
    />
  );
}
