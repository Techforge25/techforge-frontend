import SiteHeader from "@/components/layout/site-header";
import FaqSection from "@/app/home/faq-section";
import CareersHero from "@/components/careers/careers-hero";
import CompanyCulture from "@/components/careers/company-culture";
import Benefits from "@/components/careers/benefits";
import OpenPositions from "@/components/careers/open-positions";
import HiringProcess from "@/components/careers/hiring-process";
import CareersCta from "@/components/careers/careers-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | TechForge Innovations",
  description: "Join TechForge Innovations and shape the future of AI agents, software development, and digital transformation systems.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <CareersHero />
      <CompanyCulture />
      <Benefits />
      <OpenPositions />
      <HiringProcess />
      <CareersCta />
      <FaqSection />
    </main>
  );
}
