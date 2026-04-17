import HeroSection from "./hero-section";
import AboutUsHeroSection from "@/components/about-us/about-us-hero-section";
import OurServicesSection from "./our-services-section";
import OurWorkProcessSection from "./our-work-process-section";
import WhyChooseUsSection from "./why-chooseUs-section";
import TestimonialsSection from "./testimonials-section";
import PortfolioSection from "./portfolio-section";
import FaqSection from "./faq-section";
import SiteHeader from "@/components/layout/site-header";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <HeroSection />
      <AboutUsHeroSection ctaHref="/about-us" />
      <OurServicesSection />
      <WhyChooseUsSection />
      <OurWorkProcessSection />
      <TestimonialsSection />
      <PortfolioSection />
      <FaqSection />
    </main>
  );
}
