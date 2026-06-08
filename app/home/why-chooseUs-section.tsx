import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import whyChooseSideImage from "@/assets/images/left-side-whyChooseUs.webp";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { whyChooseUsCopy } from "@/data/home-page";

const visualGlowStyle = {
  background: "linear-gradient(135deg, #4848FF 60%, #FA10BF 80%)",
} as const;

function SuccessRate() {
  return (
    <div data-why-success className="flex flex-row items-center gap-4 pt-8 sm:gap-6 sm:pt-12">
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
    <div data-parallax-item="why-visual" className="relative mx-auto mt-12 w-full max-w-[320px] shrink-0 sm:max-w-[400px] lg:mt-0 lg:max-w-[432px]">
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
    <section data-home-why className="relative min-h-[100svh] overflow-hidden bg-[#00000c] py-10 sm:py-0 lg:min-h-screen">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-80px] top-1/2 hidden h-[280px] w-[280px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(62,99,255,0.18)_0%,rgba(24,30,78,0.08)_42%,rgba(0,0,12,0)_72%)] blur-[36px] lg:block"
      />
      <div
        data-why-progress-rail
        className="pointer-events-none absolute left-4 top-1/2 hidden h-[260px] w-[2px] -translate-y-1/2 rounded-full bg-[rgba(255,255,255,0.08)] md:block lg:left-6 xl:left-8"
        aria-hidden="true"
      >
        <div
          data-why-progress-glow
          className="absolute left-1/2 top-1/2 h-[320px] w-[28px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(72,72,255,0.22)_0%,rgba(72,72,255,0.08)_42%,rgba(0,0,12,0)_75%)] opacity-0 blur-[10px]"
        />
        <div
          data-why-progress-fill
          className="absolute inset-x-0 top-0 h-full origin-top scale-y-0 rounded-full bg-[linear-gradient(180deg,#7f8cff_0%,#3a56ff_58%,#fa10bf_100%)] shadow-[0_0_18px_rgba(90,110,255,0.55)]"
        />
        <div
          data-why-progress-dot
          className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 rounded-full border border-[rgba(255,255,255,0.45)] bg-[#d9e0ff] shadow-[0_0_22px_rgba(100,120,255,0.85)]"
        />
      </div>

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="flex min-h-[100svh] items-center py-12 md:py-20 lg:min-h-screen lg:py-[100px]">
          <div
            data-why-shell
            className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 lg:flex-row lg:items-center lg:justify-between lg:gap-10"
          >
            <div data-why-copy className="flex w-full max-w-[600px] flex-col items-center text-center lg:items-start lg:text-left">
              <div data-why-badge>
                <SectionBadge
                  label={whyChooseUsCopy.badgeLabel}
                  className="h-[28px] px-4 py-0 text-sm font-medium"
                />
              </div>

              <div data-why-heading>
                <SectionHeading
                  line1={whyChooseUsCopy.headingLine1}
                  line2Highlight={whyChooseUsCopy.headingLine2Highlight}
                  className="mt-6 w-full text-[32px] leading-[1.2] sm:text-[42px] md:text-[48px] lg:leading-[56px]"
                  line2ClassName="mt-2"
                  highlightClassName="px-2"
                />
              </div>

              <p data-why-description className="mt-6 max-w-[514px] text-[16px] leading-relaxed text-[#cac6dd] sm:text-lg">
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
