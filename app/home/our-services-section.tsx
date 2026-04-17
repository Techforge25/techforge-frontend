import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import PrimaryButton from "@/components/ui/primary-button";
import ServiceCard from "@/components/ui/service-card";
import {
  SectionPaddingX120R72,
  SectionPaddingY72,
} from "@/components/ui/section-padding";
import { ourServicesCards, ourServicesCopy } from "@/data/home";

export default function OurServicesSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-7 sm:gap-8">
            <SectionBadge
              label={ourServicesCopy.badgeLabel}
              className="h-[28px] px-[11px] py-0 text-sm leading-none"
            />

            <div className="flex flex-col items-center gap-4 text-center sm:gap-[22px]">
              <SectionHeading
                line1={ourServicesCopy.headingLine1}
                line2Highlight={ourServicesCopy.headingLine2Highlight}
                line2After={ourServicesCopy.headingLine2After}
                line1WithHighlightSameLine
                className="w-full max-w-[1000px] text-[28px] leading-[1.08] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[1.06]"
                line1ClassName="leading-[1.1]"
                line2ClassName="mt-1"
                highlightClassName="px-2 sm:px-3"
              />
              <p className="max-w-[620px] text-[15px] leading-[1.45] text-[#cac6dd] sm:text-base sm:leading-[1.35]">
                {ourServicesCopy.description}
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-2 xl:grid-cols-3">
              {ourServicesCards.map((service) => (
                <ServiceCard
                  key={service.title}
                  icon={service.icon}
                  iconClassName={service.iconClassName}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>

            <PrimaryButton
              label={ourServicesCopy.ctaLabel}
              className="h-[44px] px-5 text-[15px] sm:h-[47px] sm:px-6 sm:text-base"
            />
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}

