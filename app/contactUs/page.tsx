import SiteHeader from "@/components/layout/site-header";
import ContactUsHeroSection from "./contact-us-hero-section";
import FaqSection from "../home/faq-section";

export default function ContactUsPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <ContactUsHeroSection />
      <FaqSection />
    </main>
  );
}
