"use client";

import { useMemo, useState } from "react";
import PrimaryButton from "@/components/ui/primary-button";
import PortfolioCard from "@/components/ui/portfolio-card";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";

type PortfolioFilterItem = {
  key: string;
  label: string;
};

type PortfolioCardItem = {
  image: string;
  title: string;
  subtitle: string;
  arrowIcon: string;
  category: string;
};

type PortfolioSectionCopy = {
  badgeLabel: string;
  headingLine1: string;
  headingLine2Before: string;
  headingLine2Highlight: string;
  ctaLabel?: string;
  loadMoreLabel?: string;
};

type PortfolioGalleryProps = {
  copy: PortfolioSectionCopy;
  filters: readonly PortfolioFilterItem[];
  cards: readonly PortfolioCardItem[];
  mobilePreviewCount?: number;
  loadMoreConfig?: {
    initialCount: number;
    step: number;
  };
};

const filterButtonBaseClass =
  "inline-flex h-8 items-center justify-center whitespace-nowrap rounded-[200px] border border-transparent px-3 text-[13px] font-medium capitalize transition-colors sm:px-5 sm:text-base";
const filterButtonActiveClass =
  "bg-[#2424a6] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.14)]";
const filterButtonDefaultClass = "bg-transparent text-[#999999] hover:text-white";
const loadMoreButtonClass =
  "inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-normal capitalize leading-none text-white transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:border-[#248aff] focus-visible:bg-[#2424a6] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none";

function getFilterButtonClass(isActive: boolean) {
  return `${filterButtonBaseClass} ${isActive ? filterButtonActiveClass : filterButtonDefaultClass}`;
}

export default function PortfolioGallery({
  copy,
  filters,
  cards,
  mobilePreviewCount,
  loadMoreConfig,
}: PortfolioGalleryProps) {
  const [activeFilter, setActiveFilter] = useState<string>(filters[0]?.key ?? "all");
  const [visibleCardsCount, setVisibleCardsCount] = useState(loadMoreConfig?.initialCount ?? cards.length);

  const filteredCards = useMemo(
    () =>
      activeFilter === "all"
        ? cards
        : cards.filter((card) => card.category === activeFilter),
    [activeFilter, cards],
  );

  const visibleCards = loadMoreConfig ? filteredCards.slice(0, visibleCardsCount) : filteredCards;
  const hasMoreCards = Boolean(loadMoreConfig && visibleCardsCount < filteredCards.length);

  function handleFilterChange(filterKey: string) {
    setActiveFilter(filterKey);
    if (loadMoreConfig) {
      setVisibleCardsCount(loadMoreConfig.initialCount);
    }
  }

  function handleLoadMore() {
    if (!loadMoreConfig) return;
    setVisibleCardsCount((previous) => previous + loadMoreConfig.step);
  }

  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div className="pointer-events-none absolute left-1/2 top-[-40px] h-[360px] w-[360px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(36,36,166,0.35)_0%,rgba(0,0,12,0)_72%)] sm:top-[0px] sm:h-[420px] sm:w-[420px] lg:top-[20px] lg:h-[500px] lg:w-[500px]" />
      <div className="pointer-events-none absolute left-[-140px] top-[58%] h-[320px] w-[320px] bg-[radial-gradient(circle,rgba(36,36,166,0.3)_0%,rgba(0,0,12,0)_70%)] sm:left-[-110px] sm:h-[420px] sm:w-[420px] lg:left-[0%] lg:top-[55%] lg:h-[550px] lg:w-[550px]" />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="pb-[72px] pt-[34px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-7 sm:gap-10 lg:gap-[42px]">
            <div className="flex w-full flex-col items-center gap-4 text-center sm:gap-[22px]">
              <SectionBadge label={copy.badgeLabel} className="h-[28px] px-[11px] py-0 text-sm leading-none" />
              <SectionHeading
                line1={copy.headingLine1}
                line2Before={copy.headingLine2Before}
                line2Highlight={copy.headingLine2Highlight}
                className="w-full max-w-[540px] text-[28px] leading-[1.08] sm:text-[38px] md:text-[42px] lg:text-[48px] lg:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            <div className="w-full px-1 sm:px-0">
              <div className="flex w-full justify-center pb-1">
                <div className="inline-flex h-[48px] items-center rounded-[160px] border border-[rgba(255,255,255,0.18)] bg-[#131324] px-1.5 py-2 sm:px-3 sm:pr-4">
                  {filters.map((filter) => (
                    <button
                      key={filter.key}
                      type="button"
                      onClick={() => handleFilterChange(filter.key)}
                      aria-pressed={activeFilter === filter.key}
                      className={getFilterButtonClass(activeFilter === filter.key)}
                    >
                      {filter.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            <div className="grid w-full grid-cols-1 gap-0 border border-[#121324] sm:grid-cols-2 xl:grid-cols-3">
              {visibleCards.map((card, index) => (
                <PortfolioCard
                  key={`${card.title}-${card.subtitle}`}
                  image={card.image}
                  title={card.title}
                  subtitle={card.subtitle}
                  arrowIcon={card.arrowIcon}
                  className={mobilePreviewCount && index >= mobilePreviewCount ? "hidden sm:block" : ""}
                />
              ))}
            </div>

            {hasMoreCards ? (
              <button type="button" onClick={handleLoadMore} className={loadMoreButtonClass}>
                {copy.loadMoreLabel ?? "load more"}
              </button>
            ) : null}

            {!loadMoreConfig && copy.ctaLabel ? (
              <PrimaryButton
                label={copy.ctaLabel}
                className="h-[44px] px-5 text-[15px] sm:h-[47px] sm:px-6 sm:text-base"
              />
            ) : null}
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
