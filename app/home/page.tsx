import HeroSection from "./hero-section";
import HomeScrollAnimations from "./home-scroll-animations";
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
      <HomeScrollAnimations />
      <SiteHeader />
      <div data-gsap-hero data-section-name="hero">
        <HeroSection />
      </div>
      <div data-gsap-section data-section-name="about">
        <AboutUsHeroSection ctaHref="/about-us" />
      </div>
      <div data-gsap-section data-section-name="services">
        <OurServicesSection />
      </div>
      <div data-gsap-section data-section-name="why">
        <WhyChooseUsSection />
      </div>
      <div data-gsap-section data-section-name="process">
        <OurWorkProcessSection />
      </div>
      <div data-gsap-section data-section-name="testimonials">
        <TestimonialsSection />
      </div>
      <div data-gsap-section data-section-name="portfolio">
        <PortfolioSection />
      </div>
      <div data-gsap-section data-section-name="faq">
        <FaqSection />
      </div>
    </main>
  );
}
