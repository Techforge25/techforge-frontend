import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { aboutOutstandingFeaturesSection, type AboutOutstandingFeatureItem } from "@/data/about";

function FeatureTextColumn({
  items,
  className = "",
}: {
  items: readonly AboutOutstandingFeatureItem[];
  className?: string;
}) {
  return (
    <div className={`flex w-full max-w-[333px] flex-col gap-16 lg:h-[515px] lg:justify-center lg:gap-[120px] ${className}`}>
      {items.map((item) => (
        <div key={`${item.title}-${item.description.slice(0, 16)}`} className="flex flex-col gap-3">
          <h3 className="font-['Satoshi:Bold',sans-serif] text-[24px] capitalize leading-[34px] text-white">
            {item.title}
          </h3>
          <p className="font-['Satoshi:Regular',sans-serif] text-base leading-[18px] text-[#cac6dd]">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function OutstandingFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">

      <div className="pointer-events-none absolute left-1/2 top-[190px] h-[180px] w-[220px] -translate-x-1/2 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(36,36,166,0.34)_0%,rgba(36,36,166,0.12)_46%,rgba(0,0,12,0)_100%)] blur-[56px]" />

      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-12 lg:gap-[62px]">
            <div className="flex w-full max-w-[790px] flex-col items-center gap-[22px] text-center">
              <SectionBadge
                label={aboutOutstandingFeaturesSection.badgeLabel}
                className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
              />
              <SectionHeading
                line1={aboutOutstandingFeaturesSection.headingLine1}
                line2Before={aboutOutstandingFeaturesSection.headingLine2Before}
                line2Highlight={aboutOutstandingFeaturesSection.headingLine2Highlight}
                className="w-full max-w-[672px] text-[36px] leading-[1.08] sm:text-[42px] lg:text-[48px] lg:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            <div className="flex w-full flex-col items-center justify-between gap-10 lg:flex-row lg:items-center lg:gap-8">
              <FeatureTextColumn items={aboutOutstandingFeaturesSection.leftItems} className="order-2 lg:order-1" />

              <div className="order-1 relative w-full max-w-[390px] shrink-0 lg:order-2">
                <div
                  className="pointer-events-none absolute left-1/2 top-[-36px] z-0 h-[190px] w-[min(72vw,620px)] -translate-x-1/2 rounded-full opacity-80 blur-[60px]"
                  style={{
                    background:
                      "radial-gradient(ellipse at center, rgba(66,86,255,0.62) 0%, rgba(43, 60, 214, 0.36) 44%, rgba(13,24,90,0.16) 72%, rgba(0,0,12,0) 100%)",
                  }}
                  aria-hidden="true"
                />
                <div className="relative z-10 overflow-hidden rounded-[12px] bg-[#121324] p-px">
                  <img
                    src={aboutOutstandingFeaturesSection.centerImage}
                    alt="Techforge team working together"
                    className="h-[515px] w-full rounded-[12px] object-cover"
                  />
                </div>
              </div>

              <FeatureTextColumn items={aboutOutstandingFeaturesSection.rightItems} className="order-3" />
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
