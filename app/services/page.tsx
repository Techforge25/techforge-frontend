import SiteHeader from "@/components/layout/site-header";
import ServicesGridSection from "./services-grid-section";
import FaqSection from "../home/faq-section";

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <ServicesGridSection />
      <FaqSection />
    </main>
  );
}
