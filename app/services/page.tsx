import SiteHeader from "@/components/layout/site-header";
import ServicesGridSection from "./services-grid-section";
import FaqSection from "../home/faq-section";
import type { FaqItem } from "@/data/faqs";

const servicesCtaCopy = {
  badgeLabel: "start here",
  headingLine1: "Not Sure What You Need Yet?",
  headingLine2Highlight: "That's Exactly Where We Can Help.",
  headingLine2After: "",
  description: "Start a conversation and we'll help you figure out what should happen before more gets built.",
} as const;

const servicesCtaItems: readonly FaqItem[] = [];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <ServicesGridSection />
      <FaqSection copy={servicesCtaCopy} items={servicesCtaItems} ctaLabel="Start a Conversation" />
    </main>
  );
}
