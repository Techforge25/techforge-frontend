"use client";

import { useEffect, useMemo, useState } from "react";
import SectionBadge from "@/components/ui/section-badge";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { aboutFunFactsSection } from "@/data/about";

type ParsedValue = {
  target: number;
  decimals: number;
  suffix: string;
};

function parseCounterValue(raw: string): ParsedValue {
  const trimmed = raw.trim().toUpperCase();
  if (trimmed.endsWith("K")) {
    const base = Number.parseFloat(trimmed.slice(0, -1));
    return {
      target: Number.isFinite(base) ? base * 1000 : 0,
      decimals: 0,
      suffix: "K",
    };
  }

  const decimalDigits = trimmed.includes(".") ? trimmed.split(".")[1]?.length ?? 0 : 0;
  const numeric = Number.parseFloat(trimmed);
  return {
    target: Number.isFinite(numeric) ? numeric : 0,
    decimals: decimalDigits,
    suffix: "",
  };
}

function formatCounterValue(value: number, parsed: ParsedValue) {
  if (parsed.suffix === "K") {
    return `${(value / 1000).toFixed(0)}K`;
  }
  return value.toFixed(parsed.decimals);
}

function useCountUp(rawValue: string, duration = 1400) {
  const parsed = useMemo(() => parseCounterValue(rawValue), [rawValue]);
  const [displayValue, setDisplayValue] = useState(() => formatCounterValue(0, parsed));

  useEffect(() => {
    let frameId = 0;
    let startTime = 0;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const currentValue = parsed.target * progress;
      setDisplayValue(formatCounterValue(currentValue, parsed));
      if (progress < 1) frameId = requestAnimationFrame(step);
    };

    frameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frameId);
  }, [duration, parsed]);

  return displayValue;
}

function FunFactStat({ value, label }: { value: string; label: string }) {
  const animatedValue = useCountUp(value);

  return (
    <div className="flex w-full flex-col items-center gap-2 text-center sm:items-start sm:text-left">
      <p className="font-['Neiko','Satoshi',sans-serif] text-[42px] leading-[1] text-white sm:text-[52px]">
        {animatedValue}
      </p>
      <p className="text-[22px] leading-[1.2] text-[#cac6dd] sm:text-[28px]">{label}</p>
    </div>
  );
}

export default function FunFactsSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <img
        src={aboutFunFactsSection.timelineImage}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-auto w-[170%] max-w-none -translate-x-1/2 -translate-y-1/2 opacity-40"
      />

      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 lg:gap-[72px]">
            <div className="relative flex w-full max-w-[790px] flex-col items-center gap-8 text-center">
              <div className="pointer-events-none absolute left-1/2 top-[-40px] h-[240px] w-[460px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,36,166,0.32)_0%,rgba(36,36,166,0.12)_42%,rgba(0,0,12,0)_100%)] blur-[78px]" />
              <SectionBadge
                label={aboutFunFactsSection.badgeLabel}
                className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
              />

              <h2 className="font-['Neiko','Satoshi',sans-serif] text-[36px] uppercase leading-[1.08] text-transparent bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
                <span>
                  {aboutFunFactsSection.headingLine1Before}{" "}
                  <span className="inline-block rounded-[130px] bg-[#2424A6] px-2.5 sm:px-3">
                    <span className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-transparent">
                      {aboutFunFactsSection.headingLine1Highlight}
                    </span>
                  </span>{" "}
                  {aboutFunFactsSection.headingLine1After}
                </span>
              </h2>
            </div>

            <div className="grid w-full grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8 lg:gap-[151px]">
              {aboutFunFactsSection.items.map((item) => (
                <FunFactStat key={item.label} value={item.value} label={item.label} />
              ))}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
