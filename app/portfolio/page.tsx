import SiteHeader from "@/components/layout/site-header";
import PortfolioHeroSection from "./portfolio-hero-section";
import PortfolioGallerySection from "./portfolio-gallery-section";
import FunFactsSection from "../about-us/fun-facts-section";
import FaqSection from "../home/faq-section";

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <PortfolioHeroSection />
      <PortfolioGallerySection />
      <FunFactsSection />
      <FaqSection />
    </main>
  );
}
