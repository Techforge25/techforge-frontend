import PortfolioGallery from "@/components/portfolio/portfolio-gallery";
import {
  homeRecentPortfolioCards,
  portfolioFilters,
  portfolioHomeCopy,
} from "@/data/portfolio";

export default function PortfolioSection() {
  return (
    <PortfolioGallery
      copy={portfolioHomeCopy}
      filters={portfolioFilters}
      cards={homeRecentPortfolioCards}
      mobilePreviewCount={3}
    />
  );
}
