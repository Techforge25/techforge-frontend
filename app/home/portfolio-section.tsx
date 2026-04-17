"use client";

import { useMemo, useState } from "react";
import PrimaryButton from "@/components/ui/primary-button";
import PortfolioCard from "@/components/ui/portfolio-card";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import {
  portfolioCards,
  portfolioCopy,
  portfolioFilters,
  type PortfolioFilterKey,
} from "@/data/home";

const filterButtonBaseClass =
  "inline-flex h-8 items-center justify-center whitespace-nowrap rounded-[200px] border border-transparent px-3 text-[13px] font-medium capitalize transition-colors sm:px-5 sm:text-base";
const filterButtonActiveClass =
  "bg-[#2424a6] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]";
const filterButtonDefaultClass = "bg-transparent text-[#999999] hover:text-white";

function getFilterButtonClass(isActive: boolean) {
  return `${filterButtonBaseClass} ${isActive ? filterButtonActiveClass : filterButtonDefaultClass}`;
}

function PortfolioFilters({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: PortfolioFilterKey;
  onFilterChange: (filter: PortfolioFilterKey) => void;
}) {
  return (
    <div className="flex w-full justify-center pb-1">
      <div className="inline-flex h-[48px] items-center rounded-[160px] border border-[rgba(255,255,255,0.18)] bg-[#131324] px-1.5 py-2 sm:px-3 sm:pr-4">
        {portfolioFilters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => onFilterChange(filter.key)}
            aria-pressed={activeFilter === filter.key}
            className={getFilterButtonClass(activeFilter === filter.key)}
          >
            {filter.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PortfolioSection() {
  const [activeFilter, setActiveFilter] = useState<PortfolioFilterKey>("all");

  const filteredCards = useMemo(
    () =>
      activeFilter === "all"
        ? portfolioCards
        : portfolioCards.filter((card) => card.category === activeFilter),
    [activeFilter],
  );

  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div className="pointer-events-none absolute left-1/2 top-[-40px] h-[360px] w-[360px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(36,36,166,0.35)_0%,rgba(0,0,12,0)_72%)] sm:top-[0px] sm:h-[420px] sm:w-[420px] lg:top-[20px] lg:h-[500px] lg:w-[500px]" />
      <div className="pointer-events-none absolute left-[-140px] top-[58%] h-[320px] w-[320px] bg-[radial-gradient(circle,rgba(36,36,166,0.3)_0%,rgba(0,0,12,0)_70%)] sm:left-[-110px] sm:h-[420px] sm:w-[420px] lg:left-[0%] lg:top-[55%] lg:h-[550px] lg:w-[550px]" />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="pb-[72px] pt-[34px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-7 sm:gap-10 lg:gap-[42px]">
            <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-[22px]">
              <SectionBadge
                label={portfolioCopy.badgeLabel}
                className="h-[28px] px-[11px] py-0 text-sm leading-none"
              />
              <SectionHeading
                line1={portfolioCopy.headingLine1}
                line2Before={portfolioCopy.headingLine2Before}
                line2Highlight={portfolioCopy.headingLine2Highlight}
                className="w-full max-w-[540px] text-[28px] leading-[1.08] sm:text-[38px] md:text-[42px] lg:text-[48px] lg:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            <div className="w-full px-1 sm:px-0">
              <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />
            </div>

            <div className="grid w-full grid-cols-1 gap-0 border border-[#121324] sm:grid-cols-2 xl:grid-cols-3">
              {filteredCards.map((card, index) => (
                <PortfolioCard
                  key={card.title + card.subtitle}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  arrowIcon={card.arrowIcon}
                  className={index > 2 ? "hidden sm:block" : ""}
                />
              ))}
            </div>

            <PrimaryButton
              label={portfolioCopy.ctaLabel}
              className="h-[44px] px-5 text-[15px] sm:h-[47px] sm:px-6 sm:text-base"
            />
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
