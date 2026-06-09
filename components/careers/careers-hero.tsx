"use client";

import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingY72 } from "@/components/ui/section-padding";

export default function CareersHero() {
  const handleScrollToPositions = () => {
    const element = document.getElementById("open-positions");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative flex min-h-[80svh] items-center overflow-hidden bg-[#00000c] lg:min-h-[85vh]">
      {/* Background glow effects matching the design language */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_25%,rgba(70,82,220,0.24)_0%,rgba(18,22,58,0.12)_45%,rgba(0,0,12,0)_75%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.12] [background-image:radial-gradient(rgba(81,96,255,0.3)_1px,transparent_1px)] [background-size:10px_10px]"
      />

      <SectionPaddingY72 className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="mx-auto flex w-full max-w-[990px] flex-col items-center gap-8 text-center sm:gap-10 lg:gap-12">
          <SectionBadge label="Careers" className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none" />
          
          <SectionHeading
            line1="Join the team forging"
            line2Highlight="The Next Gen"
            line2After="of AI & Web Tech"
            className="max-w-[850px] text-[34px] font-normal leading-[1.05] sm:text-[44px] md:text-[56px] md:leading-[60px]"
            line2ClassName="mt-1"
          />

          <p className="max-w-[620px] text-[15px] leading-[1.45] text-[#cac6dd] sm:text-base sm:leading-[1.35]">
            At TechForge Innovations, we build scalable software, intelligent AI agents, and stunning digital designs. Join us in shaping tomorrow&apos;s technology stack.
          </p>

          <button
            type="button"
            onClick={handleScrollToPositions}
            data-magnetic="true"
            className="inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-normal capitalize leading-none text-white transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:border-[#248aff] focus-visible:bg-[#2424a6] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none"
          >
            Explore Open Positions
          </button>
        </div>
      </SectionPaddingY72>
    </section>
  );
}
