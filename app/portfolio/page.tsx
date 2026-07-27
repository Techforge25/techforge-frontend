import SiteHeader from "@/components/layout/site-header";
import PortfolioHeroSection from "./portfolio-hero-section";
import PortfolioGallerySection from "./portfolio-gallery-section";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <PortfolioHeroSection />
      <PortfolioGallerySection />
    </main>
  );
}
