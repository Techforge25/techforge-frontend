import SiteHeader from "@/components/layout/site-header";
import AboutUsHeroSection from "@/components/about-us/about-us-hero-section";
import MissionVisionHistorySection from "./mission-vision-history-section";
import WhyChooseAboutSection from "./why-choose-about-section";
import FunFactsSection from "./fun-facts-section";
import OutstandingFeaturesSection from "./outstanding-features-section";
import TestimonialsSection from "../home/testimonials-section";
import FaqSection from "../home/faq-section";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <AboutUsHeroSection />
      <MissionVisionHistorySection />
      <FunFactsSection />
      <WhyChooseAboutSection />
      <OutstandingFeaturesSection />
      <TestimonialsSection />
      <FaqSection />
    </main>
  );
}
