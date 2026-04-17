import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import whyChooseSideImage from "@/assets/images/left-side-whyChooseUs.webp";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { whyChooseUsCopy } from "@/data/home";

const visualGlowStyle = {
  background: "linear-gradient(135deg, #4848FF 60%, #FA10BF 80%)",
} as const;

function SuccessRate() {
  return (
    <div className="flex flex-row items-center gap-4 pt-8 sm:gap-6 sm:pt-12">
      <div className="relative h-[80px] w-[80px] shrink-0 rounded-full bg-[conic-gradient(from_60deg,#2424A6_0deg,#3E63FF_335deg,rgba(255,255,255,0.14)_335deg,rgba(255,255,255,0.14)_360deg)] sm:h-[112px] sm:w-[112px]">
        <div className="absolute inset-[5px] sm:inset-[7px] rounded-full bg-[#050513]" />
        <div className="absolute inset-0 flex items-center justify-center text-[22px] font-bold uppercase leading-none text-[#cac6dd] sm:text-[36px]">
          {whyChooseUsCopy.successRate}
        </div>
      </div>
      <div className="flex flex-col text-left">
        <p className="text-[24px] font-semibold capitalize leading-[1.1] text-white sm:text-[36px] lg:text-[40px]">
          {whyChooseUsCopy.successTitle}
        </p>
        <p className="mt-1 text-[14px] leading-tight text-[#cac6dd] sm:text-base sm:leading-[1.3]">
          {whyChooseUsCopy.successDescription}
        </p>
      </div>
    </div>
  );
}

function WhyChooseVisual() {
  return (
    <div className="relative mx-auto mt-12 w-full max-w-[320px] shrink-0 sm:max-w-[400px] lg:mt-0 lg:max-w-[432px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 rounded-[26px] blur-[60px] sm:blur-[80px] opacity-10"
        style={visualGlowStyle}
      />
      <img
        src={whyChooseSideImage.src}
        alt="Why choose us visual"
        className="relative z-10 block h-auto w-full object-contain"
      />
    </div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section className="relative min-h-fit overflow-hidden bg-[#00000c] py-10 sm:py-0">
      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-12 md:py-20 lg:py-[100px]">
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10">
            <div className="w-full max-w-[600px] flex flex-col items-center lg:items-start text-center lg:text-left">
              <SectionBadge
                label={whyChooseUsCopy.badgeLabel}
                className="h-[28px] px-4 py-0 text-sm font-medium"
              />

              <SectionHeading
                line1={whyChooseUsCopy.headingLine1}
                line2Before={whyChooseUsCopy.headingLine2Before}
                line2Highlight={whyChooseUsCopy.headingLine2Highlight}
                line2After={whyChooseUsCopy.headingLine2After}
                className="mt-6 w-full text-[32px] leading-[1.2] sm:text-[42px] md:text-[48px] lg:leading-[56px]"
                line2ClassName="mt-2"
                highlightClassName="px-2"
              />

              <p className="mt-6 max-w-[514px] text-[16px] leading-relaxed text-[#cac6dd] sm:text-lg">
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
