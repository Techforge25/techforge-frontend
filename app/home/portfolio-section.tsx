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

function PortfolioFilters({
  activeFilter,
  onFilterChange,
}: {
  activeFilter: PortfolioFilterKey;
  onFilterChange: (filter: PortfolioFilterKey) => void;
}) {
  return (
    <div className="inline-flex h-[48px] items-center rounded-[160px] border border-[rgba(255,255,255,0.18)] bg-[#131324] pl-2 pr-5 py-2">
      <div className="flex items-center gap-8">
        {portfolioFilters.map((filter) => (
          <button
            key={filter.key}
            type="button"
            onClick={() => onFilterChange(filter.key)}
            aria-pressed={activeFilter === filter.key}
            className={
              activeFilter === filter.key
                ? "inline-flex h-8 items-center justify-center rounded-[200px] border border-transparent bg-[#2424a6] px-6 text-base font-medium capitalize text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)] transition-colors"
                : "inline-flex h-8 items-center justify-center rounded-[200px] border border-transparent bg-transparent px-6 text-base font-medium capitalize text-[#999999] transition-colors hover:text-white"
            }
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
      <div className="pointer-events-none absolute left-1/2 top-[20px] h-[500px] w-[500px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(36,36,166,0.35)_0%,rgba(0,0,12,0)_72%)]" />
      <div className="pointer-events-none absolute left-[0%] top-[55%] h-[550px] w-[550px] bg-[radial-gradient(circle,rgba(36,36,166,0.3)_0%,rgba(0,0,12,0)_70%)]" />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="pb-[72px] pt-[34px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[42px]">
            <div className="flex w-full flex-col items-center gap-[22px] text-center">
              <SectionBadge
                label={portfolioCopy.badgeLabel}
                className="h-[28px] px-[11px] py-0 text-sm leading-none"
              />
              <SectionHeading
                line1={portfolioCopy.headingLine1}
                line2Before={portfolioCopy.headingLine2Before}
                line2Highlight={portfolioCopy.headingLine2Highlight}
                className="w-full max-w-[540px] text-[34px] leading-[1.06] sm:text-[42px] lg:text-[48px] lg:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            <PortfolioFilters activeFilter={activeFilter} onFilterChange={setActiveFilter} />

            <div className="grid w-full grid-cols-1 gap-0 border border-[#121324] sm:grid-cols-2 lg:grid-cols-3">
              {filteredCards.map((card) => (
                <PortfolioCard
                  key={card.title + card.subtitle}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  arrowIcon={card.arrowIcon}
                />
              ))}
            </div>

            <PrimaryButton label={portfolioCopy.ctaLabel} className="h-[47px] px-6 text-base" />
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
