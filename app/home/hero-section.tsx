import type { CSSProperties } from "react";
import gridBg from "@/assets/images/home/hero/grid-bg.svg";
import GradientChip from "@/components/ui/gradient-chip";
import HeaderQuoteButton from "@/components/ui/header-quote-button";
import PrimaryButton from "@/components/ui/primary-button";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import {
  heroChipStyles,
  heroClients,
  heroCopy,
  heroDesktopChips,
  heroDesktopStairs,
  heroMobileStairs,
  heroTabletStairs,
  type HeroStairLayer,
} from "@/data/home-page";

const primaryCtaLabel = "view all services";
const quoteCtaLabel = "get a Quotes";

function HeroDescription({ className = "" }: { className?: string }) {
  return <p className={`text-[#cac6dd] ${className}`}>{heroCopy.description}</p>;
}

function StaircaseSet({
  className,
  layers,
  mirrored = false,
}: {
  className: string;
  layers: readonly HeroStairLayer[];
  mirrored?: boolean;
}) {
  return (
    <div
      className={`pointer-events-none absolute ${className} ${mirrored ? "scale-x-[-1]" : ""}`}
      aria-hidden="true"
    >
      {layers.map((layer) => (
        <img
          key={`${layer.src}-${layer.className}`}
          src={layer.src}
          alt=""
          className={`absolute ${layer.className}`}
        />
      ))}
    </div>
  );
}

function ClientLogoRow({
  list,
  itemClassName,
  keyPrefix,
}: {
  list: readonly string[];
  itemClassName: string;
  keyPrefix: string;
}) {
  return (
    <div className="flex flex-shrink-0 items-center gap-[16px]">
      {list.map((src, index) => (
        <img
          key={`${keyPrefix}-${index}`}
          src={src}
          alt={`Client ${index + 1}`}
          className={`${itemClassName} flex-shrink-0`}
        />
      ))}
    </div>
  );
}

function ClientStrip({
  list,
  wrapperClassName,
  textClassName,
  listClassName,
  itemClassName,
  keyPrefix = "",
}: {
  list: readonly string[];
  wrapperClassName: string;
  textClassName: string;
  listClassName: string;
  itemClassName: string;
  keyPrefix?: string;
}) {
  return (
    <div className={wrapperClassName}>
      <p className={textClassName}>Our client all over the world</p>
      <div className={`${listClassName} overflow-hidden`}>
        <div
          className="testimonials-track testimonials-track--left"
          style={{ "--marquee-duration": "30s" } as CSSProperties}
        >
          <ClientLogoRow list={list} itemClassName={itemClassName} keyPrefix={`a-${keyPrefix}`} />
          <ClientLogoRow list={list} itemClassName={itemClassName} keyPrefix={`b-${keyPrefix}`} />
        </div>
      </div>
    </div>
  );
}

function HeroDesktop() {
  return (
    <div className="relative hidden h-[883px] w-full overflow-hidden xl:block">
      <img
        src={gridBg.src}
        alt=""
        className="pointer-events-none absolute left-0 top-[483px] h-[400px] w-full"
      />

      <StaircaseSet className="left-0 top-[383px] h-[495px] w-[349px]" layers={heroDesktopStairs} />
      <StaircaseSet
        className="right-0 top-[383px] h-[495px] w-[349px]"
        layers={heroDesktopStairs}
        mirrored
      />

      <div className="absolute left-1/2 top-[197px] -translate-x-1/2">
        <SectionBadge label={heroCopy.badgeLabel} className="h-[28px] px-[11px] py-0 text-sm leading-none" />
      </div>

      <div className="absolute left-1/2 top-[245px] flex w-[920px] -translate-x-1/2 flex-col items-center gap-[22px] text-center">
        <div className="relative flex flex-col items-center gap-2">
          <SectionHeading
            line1={heroCopy.headingLine1}
            line2Before={heroCopy.headingLine2Before}
            line2Highlight={heroCopy.headingLine2Highlight}
            className="relative w-[980px] text-[72px] leading-[66px]"
            line1ClassName="whitespace-nowrap"
            line2ClassName="mt-2 whitespace-nowrap"
          />
          <HeroDescription className="w-[514px] text-base leading-[18px]" />
        </div>
        <PrimaryButton label={quoteCtaLabel} />
      </div>

      {heroDesktopChips.map((chip) => (
        <div key={chip.label} className={chip.className}>
          <GradientChip label={chip.label} style={chip.style} />
        </div>
      ))}

      <ClientStrip
        list={heroClients}
        wrapperClassName="absolute left-1/2 top-[689px] flex w-[614px] -translate-x-1/2 flex-col items-center gap-[18px]"
        textClassName="text-center text-[18px] uppercase leading-[18px] text-[#cecdcd]"
        listClassName="flex h-[75px] w-full items-center rounded-[140px] bg-[rgba(255,255,255,0.08)] px-[11px] py-[10px]"
        itemClassName="h-[43px] w-[106px] object-contain"
      />
    </div>
  );
}

function HeroMobileFallback() {
  const mobileClients = heroClients.slice(0, 3);

  return (
    <div className="relative block overflow-hidden px-4 pb-8 pt-10 text-center sm:px-6 sm:pt-12 md:hidden">
      <img
        src={gridBg.src}
        alt=""
        className="pointer-events-none absolute bottom-12 left-1/2 h-[220px] w-[1100px] max-w-none -translate-x-1/2 opacity-90 sm:h-[260px]"
      />

      <div className="relative z-10 mx-auto">
        <SectionBadge label={heroCopy.badgeLabel} />
      </div>

      <SectionHeading
        line1={heroCopy.headingLine1}
        line2Before={heroCopy.headingLine2Before}
        line2Highlight={heroCopy.headingLine2Highlight}
        className="relative z-10 mx-auto mt-5 max-w-[980px] text-[46px] leading-[1.02] sm:text-[54px]"
        line1ClassName="text-[42px] leading-[1.04] sm:text-[50px]"
        line2ClassName="mt-1 text-[43px] leading-[1.02] sm:text-[50px]"
      />

      <HeroDescription className="relative z-10 mx-auto mt-4 max-w-[700px] text-[15px] leading-[1.4] sm:text-base" />

      <div className="relative z-10 mt-7 flex items-center justify-center gap-3">
        <PrimaryButton className="h-[46px] min-w-[150px] px-5" label={primaryCtaLabel} />
        <HeaderQuoteButton className="h-[46px] min-w-[150px] px-5" label={quoteCtaLabel} />
      </div>

      <div className="pointer-events-none absolute bottom-[128px] left-0 right-0 h-[210px]">
        <StaircaseSet className="bottom-0 left-0 h-[210px] w-[132px]" layers={heroMobileStairs} />
        <StaircaseSet
          className="bottom-0 right-0 h-[210px] w-[132px]"
          layers={heroMobileStairs}
          mirrored
        />

        <div className="absolute left-[45px] top-[-4px] w-[150px] origin-left scale-[0.55] rotate-[24deg]">
          <GradientChip label="UX/UI design" style={heroChipStyles.green} />
        </div>
        <div className="absolute left-[93px] top-[56px] origin-left scale-[0.55] rotate-[19deg]">
          <GradientChip label="web development" style={heroChipStyles.pink} />
        </div>
        <div className="absolute right-[46px] top-[-6px] origin-right scale-[0.55] -rotate-[28deg]">
          <GradientChip label="Mobile app" style={heroChipStyles.cyan} />
        </div>
        <div className="absolute right-[92px] top-[53px] origin-right scale-[0.55] -rotate-[26deg]">
          <GradientChip label="software development" style={heroChipStyles.yellow} />
        </div>
      </div>

      <ClientStrip
        list={mobileClients}
        keyPrefix="m-"
        wrapperClassName="relative z-10 mx-auto mt-[250px] max-w-[760px] sm:mt-20"
        textClassName="text-center text-[25px] uppercase leading-[1] text-[#cecdcd] sm:text-base"
        listClassName="mt-4 flex w-full items-center rounded-[28px] bg-[rgba(255,255,255,0.08)] px-4 py-3"
        itemClassName="mx-auto h-[30px] w-[90px] object-contain sm:h-[36px] sm:w-[100px]"
      />
    </div>
  );
}

function HeroTabletFallback() {
  return (
    <div className="relative hidden h-[900px] overflow-hidden px-8 pb-10 pt-14 text-center md:block xl:hidden lg:px-12">
      <img
        src={gridBg.src}
        alt=""
        className="pointer-events-none absolute bottom-[150px] left-1/2 h-[320px] w-[1400px] max-w-none -translate-x-1/2 opacity-90"
      />

      <div className="relative z-10 mx-auto">
        <SectionBadge label={heroCopy.badgeLabel} />
      </div>

      <SectionHeading
        line1={heroCopy.headingLine1}
        line2Before={heroCopy.headingLine2Before}
        line2Highlight={heroCopy.headingLine2Highlight}
        className="relative z-10 mx-auto mt-6 max-w-[900px] text-[56px] leading-[0.98] lg:text-[62px]"
        line2ClassName="mt-2"
      />

      <HeroDescription className="relative z-10 mx-auto mt-5 max-w-[700px] text-base leading-[1.4]" />

      <div className="relative z-10 mt-8 flex items-center justify-center gap-4">
        <PrimaryButton className="h-[46px] min-w-[170px] px-6" label={primaryCtaLabel} />
        <HeaderQuoteButton className="h-[46px] min-w-[170px] px-6" label={quoteCtaLabel} />
      </div>

      <StaircaseSet className="bottom-[190px] left-0 h-[260px] w-[170px]" layers={heroTabletStairs} />
      <StaircaseSet
        className="bottom-[190px] right-0 h-[260px] w-[170px]"
        layers={heroTabletStairs}
        mirrored
      />

      <div className="pointer-events-none absolute left-[24px] top-[500px] origin-left scale-[0.7] rotate-[24deg] lg:left-[42px]">
        <GradientChip label="UX/UI design" style={heroChipStyles.green} />
      </div>
      <div className="pointer-events-none absolute left-[92px] top-[594px] origin-left scale-[0.7] rotate-[19deg] lg:left-[118px]">
        <GradientChip label="web development" style={heroChipStyles.pink} />
      </div>
      <div className="pointer-events-none absolute right-[24px] top-[500px] origin-right scale-[0.7] -rotate-[24deg] lg:right-[42px]">
        <GradientChip label="Mobile app" style={heroChipStyles.cyan} />
      </div>
      <div className="pointer-events-none absolute right-[92px] top-[594px] origin-right scale-[0.7] -rotate-[24deg] lg:right-[118px]">
        <GradientChip label="software development" style={heroChipStyles.yellow} />
      </div>

      <ClientStrip
        list={heroClients}
        keyPrefix="t-"
        wrapperClassName="absolute bottom-10 left-1/2 z-10 flex w-[min(92vw,760px)] -translate-x-1/2 flex-col items-center gap-4"
        textClassName="text-center text-[18px] uppercase leading-[1] text-[#cecdcd]"
        listClassName="flex w-full items-center rounded-[28px] bg-[rgba(255,255,255,0.08)] px-3 py-4"
        itemClassName="mx-auto h-[34px] w-[96px] object-contain"
      />
    </div>
  );
}

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-[#030313]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 z-0 h-[520px] bg-[radial-gradient(52%_58%_at_50%_28%,rgba(58,59,145,0.58)_0%,rgba(41,42,101,0.38)_38%,rgba(14,15,31,0.16)_72%,rgba(3,3,19,0)_100%)] md:h-[620px]"
      />

      <HeroDesktop />
      <HeroTabletFallback />
      <HeroMobileFallback />
    </section>
  );
}
