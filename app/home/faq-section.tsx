"use client";

import { useState } from "react";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { faqCopy, faqItems, type FaqItem } from "@/data/home";

const faqOpenBorderStyle = {
  backgroundImage:
    "linear-gradient(rgba(5,5,18,0.96), rgba(5,5,18,0.96)), linear-gradient(88deg, rgba(231, 61, 196, 0.66) -15.78%, rgba(9, 14, 219, 0.66) 102.06%)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
} as const;

const faqItemClosedClass = "overflow-hidden rounded-[14px] border border-[#121324]";
const faqItemOpenClass = "rounded-[12px] border border-transparent bg-[rgba(5,5,18,0.96)] pb-[10px]";
const faqButtonClosedClass = "flex w-full items-center justify-between gap-3 px-4 py-4 text-left sm:p-6";
const faqButtonOpenClass =
  "flex w-full items-center justify-between gap-3 rounded-[12px] border border-[rgba(243,243,243,0.08)] bg-[#2424a6] px-4 py-3 text-left sm:h-[52px] sm:py-0";

function FaqChevron({ isOpen }: { isOpen: boolean }) {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      aria-hidden="true"
      className={`shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
    >
      <path
        d="M6.25 8.94L11 13.68L15.75 8.94"
        fill="none"
        stroke="#A4ABB8"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <article className={isOpen ? faqItemOpenClass : faqItemClosedClass} style={isOpen ? faqOpenBorderStyle : undefined}>
      <button type="button" onClick={onToggle} className={isOpen ? faqButtonOpenClass : faqButtonClosedClass}>
        <span className="flex-1 pr-2 text-[15px] font-medium leading-[1.35] tracking-[0.01em] text-white sm:text-[18px] sm:leading-7 sm:tracking-normal">
          {item.question}
        </span>
        <FaqChevron isOpen={isOpen} />
      </button>

      {isOpen && item.answer ? (
        <div className="px-4 py-[10px]">
          <p className="text-base leading-[18px] text-[#cac6dd]">{item.answer}</p>
        </div>
      ) : null}
    </article>
  );
}

export default function FaqSection() {
  const [openId, setOpenId] = useState("services");

  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div className="pointer-events-none absolute left-[60%] top-[120px] h-[300px] w-[300px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(36,36,166,0.35)_0%,rgba(0,0,12,0)_72%)]" />

      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8">
            <div className="flex w-full max-w-[790px] flex-col items-center gap-[22px] text-center">
              <SectionBadge
                label={faqCopy.badgeLabel}
                className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
              />
              <div className="flex flex-col items-center pb-[7px]">
                <SectionHeading
                  line1={faqCopy.headingLine1}
                  line2Highlight={faqCopy.headingLine2Highlight}
                  line2After={faqCopy.headingLine2After}
                  line1WithHighlightSameLine
                  className="w-full max-w-[540px] text-[34px] leading-[1.06] sm:text-[42px] lg:text-[48px] lg:leading-[52px]"
                />
                <p className="mt-4 max-w-[514px] text-base leading-[18px] text-[#cac6dd]">
                  {faqCopy.description}
                </p>
              </div>
            </div>

            <div className="flex w-full max-w-[800px] flex-col gap-[18px]">
              {faqItems.map((item) => {
                const isOpen = item.id === openId;
                return (
                  <FaqAccordionItem
                    key={item.id}
                    item={item}
                    isOpen={isOpen}
                    onToggle={() => setOpenId(isOpen ? "" : item.id)}
                  />
                );
              })}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
