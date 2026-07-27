import SiteHeader from "@/components/layout/site-header";
import AboutUsHeroSection from "@/components/about-us/about-us-hero-section";
import MissionVisionHistorySection from "./mission-vision-history-section";
import WhyChooseAboutSection from "./why-choose-about-section";
import FunFactsSection from "./fun-facts-section";
import OutstandingFeaturesSection from "./outstanding-features-section";
import { aboutPageHeroCopy } from "@/data/aboutUs-Page";

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <AboutUsHeroSection copy={aboutPageHeroCopy} />
      <MissionVisionHistorySection />
      <WhyChooseAboutSection />
      <FunFactsSection />
      <OutstandingFeaturesSection />
    </main>
  );
}
