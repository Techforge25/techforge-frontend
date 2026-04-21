import { notFound } from "next/navigation";
import SiteHeader from "@/components/layout/site-header";
import {
  getPortfolioBySlug,
  portfolioDetails,
} from "@/data/portfolio-details";
import PortfolioDetailHeroSection from "./hero-section";
import PortfolioDetailOverviewSection from "./overview-section";
import PortfolioDetailShowcaseSection from "./showcase-section";
import PortfolioDetailCtaSection from "./cta-section";

type PortfolioDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return portfolioDetails.map((item) => ({ slug: item.slug }));
}

export default async function PortfolioDetailPage({ params }: PortfolioDetailPageProps) {
  const { slug } = await params;
  const portfolio = getPortfolioBySlug(slug);

  if (!portfolio) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#060716]">
      <SiteHeader />
      <PortfolioDetailHeroSection portfolio={portfolio} />
      <PortfolioDetailOverviewSection portfolio={portfolio} />
      <PortfolioDetailShowcaseSection portfolio={portfolio} />
      <PortfolioDetailCtaSection portfolio={portfolio} />
    </main>
  );
}
