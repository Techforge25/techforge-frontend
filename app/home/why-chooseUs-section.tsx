import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import {
  SectionPaddingX120R72,
  SectionPaddingY72,
} from "@/components/ui/section-padding";
import { whyChooseUsCopy } from "@/data/home";
import whyChooseSideImage from "@/assets/images/left-side-whyChooseUs.png";

function SuccessRate() {
  return (
    <div className="flex items-center gap-4 pt-3 sm:gap-6 sm:pt-12">
      <div className="relative h-[128px] w-[128px] rounded-full bg-[conic-gradient(from_60deg,#2424A6_0deg,#3E63FF_335deg,rgba(255,255,255,0.14)_335deg,rgba(255,255,255,0.14)_360deg)] sm:h-[112px] sm:w-[112px]">
        <div className="absolute inset-[7px] rounded-full bg-[#050513]" />
        <div className="absolute inset-0 flex items-center justify-center text-[32px] uppercase leading-none text-[#cac6dd] sm:text-[40px]">
          {whyChooseUsCopy.successRate}
        </div>
      </div>
      <div className="max-w-[290px]">
        <p className="text-[32px] capitalize leading-[1.05] text-white sm:text-[40px]">
          {whyChooseUsCopy.successTitle}
        </p>
        <p className="mt-1 text-[16px] leading-[1.3] text-[#cac6dd] sm:text-base">
          {whyChooseUsCopy.successDescription}
        </p>
      </div>
    </div>
  );
}

function WhyChooseVisual() {
  return (
    <div className="relative mx-auto h-[502px] w-[432px] max-w-full shrink-0">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] blur-[80px] opacity-5"
        style={{
          background:
            "linear-gradient(135deg, #4848FF 60%, #FA10BF 80%)",
        }}
      />
      <img
        src={whyChooseSideImage.src}
        alt="Why choose us visual"
        className="relative z-10 block h-[502px] w-[432px] max-w-full object-contain"
      />
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c] h-[697px]">
      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-12 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-9 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="w-full max-w-[540px]">
              <SectionBadge
                label={whyChooseUsCopy.badgeLabel}
                className="h-[28px] px-[11px] py-0 text-sm leading-none"
              />

              <SectionHeading
                line1={whyChooseUsCopy.headingLine1}
                line2Before={whyChooseUsCopy.headingLine2Before}
                line2Highlight={whyChooseUsCopy.headingLine2Highlight}
                line2After={whyChooseUsCopy.headingLine2After}
                className="mt-8 w-full max-w-[540px] text-[36px] leading-[1.08] sm:text-[42px] md:text-[48px] md:leading-[52px]"
                line2ClassName="mt-1"
                highlightClassName="px-2 sm:px-3"
              />

              <p className="mt-8 max-w-[514px] text-[16px] leading-[1.35] text-[#cac6dd] sm:text-base sm:leading-[18px]">
                {whyChooseUsCopy.description}
              </p>

              <SuccessRate />
            </div>

            <WhyChooseVisual />
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}

