import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { aboutWhyChooseSection } from "@/data/about";

function SuccessRate() {
  return (
    <div className="flex items-center gap-4 py-4 sm:gap-6">
      <div className="relative h-[96px] w-[96px] shrink-0 rounded-full bg-[conic-gradient(from_64deg,#2424A6_0deg,#3E63FF_335deg,rgba(255,255,255,0.14)_335deg,rgba(255,255,255,0.14)_360deg)] sm:h-[128px] sm:w-[128px]">
        <div className="absolute inset-[6px] sm:inset-[7px] rounded-full bg-[#050513]" />
        <div className="absolute inset-0 flex items-center justify-center font-['Neiko','Satoshi',sans-serif] text-[40px] uppercase leading-none text-[#cac6dd] sm:text-[42px]">
          {aboutWhyChooseSection.successRate}
        </div>
      </div>
      <div className="text-left">
        <p className="font-['Neiko','Satoshi',sans-serif] text-[28px] capitalize leading-[1.2] text-white sm:text-[32px]">
          {aboutWhyChooseSection.successTitle}
        </p>
        <p className="mt-1 text-base leading-[18px] text-[#cac6dd]">
          {aboutWhyChooseSection.successDescription}
        </p>
      </div>
    </div>
  );
}

function ProgressBar({ label, value }: { label: string; value: number }) {
  return (
    <div className="flex w-full flex-col gap-4 sm:gap-[22px]">
      <div className="flex items-end justify-between gap-3">
        <p className="text-[24px] font-medium leading-[1.2] text-[#d6ddf8] sm:text-[28px]">{label}</p>
        <p className="text-[16px] leading-[1.4] text-[#cac6dd] sm:text-[18px]">{value}%</p>
      </div>
      <div className="h-[14px] w-full overflow-hidden rounded-[50px] bg-[#121324] sm:h-[18px]">
        <div
          className="h-full rounded-r-[140px] bg-[#2424A6]"
          style={{ width: `${value}%` }}
          aria-hidden="true"
        />
      </div>
    </div>
  );
}

export default function WhyChooseAboutSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">

      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-12 lg:gap-[62px]">
            <div className="flex flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-[120px]">
              <div className="flex w-full max-w-[648px] flex-col gap-8">
                <div className="flex flex-col gap-[22px]">
                  <SectionBadge
                    label={aboutWhyChooseSection.badgeLabel}
                    className="h-[28px] w-fit border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
                  />
                  <SectionHeading
                    line1={aboutWhyChooseSection.headingLine1}
                    line2Before={aboutWhyChooseSection.headingLine2Before}
                    line2Highlight={aboutWhyChooseSection.headingLine2Highlight}
                    line2After={aboutWhyChooseSection.headingLine2After}
                    className="w-full max-w-[540px] text-[36px] leading-[1.08] md:text-[42px] lg:text-[48px] lg:leading-[52px]"
                    line2ClassName="mt-1"
                  />
                  <p className="max-w-[514px] text-base leading-[18px] text-[#cac6dd]">
                    {aboutWhyChooseSection.description}
                  </p>
                </div>
                <SuccessRate />
              </div>

              <div className="relative mx-auto w-full max-w-[432px] lg:mx-0">
                <div
                  aria-hidden="true"
                  className="pointer-events-none absolute inset-0 rounded-[26px] opacity-10 blur-[80px]"
                  style={{ background: "linear-gradient(135deg, #4848FF 60%, #FA10BF 80%)" }}
                />
                <img
                  src={aboutWhyChooseSection.visualImage}
                  alt="Why choose us visual"
                  className="relative z-10 block h-auto w-full object-contain"
                />
              </div>
            </div>

            <div className="flex w-full flex-col gap-10 sm:gap-12">
              {aboutWhyChooseSection.progressItems.map((item) => (
                <ProgressBar key={item.label} label={item.label} value={item.value} />
              ))}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
