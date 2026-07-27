import SiteHeader from "@/components/layout/site-header";
import CareersHero from "@/components/careers/careers-hero";
import CompanyCulture from "@/components/careers/company-culture";
import Benefits from "@/components/careers/benefits";
import OpenPositions from "@/components/careers/open-positions";
import CareersCta from "@/components/careers/careers-cta";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers | TechForge Innovations",
  description: "Join TechForge Innovations and help founders make better product decisions through thoughtful design, engineering, AI, and business work.",
};

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <CareersHero />
      <CompanyCulture />
      <Benefits />
      <OpenPositions />
      <CareersCta />
    </main>
  );
}
