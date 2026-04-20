import SectionBadge from "@/components/ui/section-badge";
import { SectionPaddingX120R72 } from "@/components/ui/section-padding";
import portfolioHeroImage from "@/assets/images/portfolio-hero.png";
import { portfolioHeroSection } from "@/data/portfolio";

const visualGlowStyle = {
  background: "linear-gradient(135deg, #4848FF 60%, #FA10BF 80%)",
} as const;

function PortfolioHeroVisual() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-[320px] shrink-0 sm:max-w-[360px] lg:mt-0 lg:max-w-[302px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] blur-[60px] sm:blur-[80px] opacity-10"
        style={visualGlowStyle}
      />
      <img
        src={portfolioHeroImage.src}
        alt="Portfolio hero visual"
        className="relative z-10 block h-auto w-full object-contain"
      />
    </div>
  );
}

export default function PortfolioHeroSection() {
  return (
    <section className="relative h-[500px] overflow-hidden bg-[#00000c]">
      <SectionPaddingX120R72>
        <div className="flex h-full items-center py-6">
          <div className="relative z-10 mx-auto mt-4 flex w-full max-w-[1200px] flex-col items-center gap-6">
            <div className="flex w-full max-w-[790px] flex-col items-center gap-[22px] text-center">
              <SectionBadge
                label={portfolioHeroSection.badgeLabel}
                className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
              />
              <h1 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[36px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
                {portfolioHeroSection.heading}
              </h1>
            </div>
            <PortfolioHeroVisual />
          </div>
        </div>
      </SectionPaddingX120R72>
    </section>
  );
}
