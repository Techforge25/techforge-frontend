"use client";

import { useState } from "react";
import PrimaryButton from "@/components/ui/primary-button";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import ServiceCard from "@/components/ui/service-card";
import type { ServiceCardItem } from "@/data/services";

type ServicesSectionCopy = {
  badgeLabel: string;
  headingLine1: string;
  headingLine2Highlight: string;
  headingLine2After: string;
  description: string;
  ctaLabel?: string;
  ctaHref?: string;
  loadMoreLabel?: string;
};

type ServicesGridProps = {
  copy: ServicesSectionCopy;
  cards: readonly ServiceCardItem[];
  loadMoreConfig?: {
    initialCount: number;
    step: number;
  };
  desktopScrollGroupSize?: number;
};

const loadMoreButtonClass =
  "inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-normal capitalize leading-none text-white transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:border-[#248aff] focus-visible:bg-[#2424a6] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none";

function chunkCards(cards: readonly ServiceCardItem[], size: number) {
  const chunks: ServiceCardItem[][] = [];

  for (let index = 0; index < cards.length; index += size) {
    chunks.push(cards.slice(index, index + size) as ServiceCardItem[]);
  }

  return chunks;
}

export default function ServicesGrid({ copy, cards, loadMoreConfig, desktopScrollGroupSize }: ServicesGridProps) {
  const [visibleCardsCount, setVisibleCardsCount] = useState(loadMoreConfig?.initialCount ?? cards.length);
  const visibleCards = loadMoreConfig ? cards.slice(0, visibleCardsCount) : cards;
  const hasMoreCards = Boolean(loadMoreConfig && visibleCardsCount < cards.length);
  const desktopScrollGroups =
    desktopScrollGroupSize && !loadMoreConfig ? chunkCards(cards, desktopScrollGroupSize).filter((group) => group.length > 0) : [];
  const hasDesktopScrollGroups = desktopScrollGroups.length > 1;

  function handleLoadMore() {
    if (!loadMoreConfig) return;
    setVisibleCardsCount((previous) => previous + loadMoreConfig.step);
  }

  return (
    <section data-home-services className="relative overflow-hidden bg-[#00000c]">
      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-7 sm:gap-8">
            <SectionBadge label={copy.badgeLabel} className="h-[28px] px-[11px] py-0 text-sm leading-none" />

            <div className="flex flex-col items-center gap-4 text-center sm:gap-[22px]">
              <SectionHeading
                line1={copy.headingLine1}
                line2Highlight={copy.headingLine2Highlight}
                line2After={copy.headingLine2After}
                line1WithHighlightSameLine
                className="w-full max-w-[1000px] text-[28px] leading-[1.08] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[1.06]"
                line1ClassName="leading-[1.1]"
                line2ClassName="mt-1"
                highlightClassName="px-2 sm:px-3"
              />
              <p className="max-w-[620px] text-[15px] leading-[1.45] text-[#cac6dd] sm:text-base sm:leading-[1.35]">
                {copy.description}
              </p>
            </div>

            {hasDesktopScrollGroups ? (
              <>
                <div
                  data-services-cards
                  className="grid w-full grid-cols-1 gap-4 will-change-transform sm:gap-6 md:grid-cols-2 lg:hidden xl:grid-cols-3"
                >
                  {visibleCards.map((service) => (
                    <ServiceCard
                      key={service.href}
                      icon={service.icon}
                      iconClassName={service.iconClassName}
                      title={service.title}
                      description={service.description}
                      accent={service.accent}
                      href={service.href}
                    />
                  ))}
                </div>

                <div
                  data-services-scroll-shell
                  className="relative hidden w-full min-h-[348px] overflow-hidden lg:block"
                >
                  {desktopScrollGroups.map((group, groupIndex) => (
                    <div
                      key={`services-group-${groupIndex}`}
                      data-services-group
                      className="absolute inset-0 grid grid-cols-3 gap-6 will-change-transform"
                    >
                      {group.map((service) => (
                        <ServiceCard
                          key={`${service.href}-${groupIndex}`}
                          icon={service.icon}
                          iconClassName={service.iconClassName}
                          title={service.title}
                          description={service.description}
                          accent={service.accent}
                          href={service.href}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </>
            ) : (
              <div
                data-services-cards
                className="grid w-full grid-cols-1 gap-4 will-change-transform sm:gap-6 md:grid-cols-2 xl:grid-cols-3"
              >
                {visibleCards.map((service) => (
                  <ServiceCard
                    key={service.href}
                    icon={service.icon}
                    iconClassName={service.iconClassName}
                    title={service.title}
                    description={service.description}
                    accent={service.accent}
                    href={service.href}
                  />
                ))}
              </div>
            )}

            {hasMoreCards ? (
              <button type="button" onClick={handleLoadMore} className={loadMoreButtonClass}>
                {copy.loadMoreLabel ?? "load more"}
              </button>
            ) : null}

            {!loadMoreConfig && copy.ctaLabel ? (
              <PrimaryButton
                label={copy.ctaLabel}
                href={copy.ctaHref}
                className="h-[44px] px-5 text-[15px] sm:h-[47px] sm:px-6 sm:text-base"
              />
            ) : null}
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
