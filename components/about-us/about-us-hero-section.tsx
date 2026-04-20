import aboutUsBg from "@/assets/images/aboutus-bg.webp";
import aboutUsMainImage from "@/assets/images/aboutus-main-images.webp";
import GlowLineAboutUsPointer from "@/components/ui/glowline-aboutus-pointer";
import PrimaryButton from "@/components/ui/primary-button";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingY72 } from "@/components/ui/section-padding";
import { aboutUsCopy } from "@/data/home-page";

type AboutUsHeroSectionProps = {
  ctaHref?: string;
};

export default function AboutUsHeroSection({ ctaHref }: AboutUsHeroSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-80"
        style={{ backgroundImage: `url(${aboutUsBg.src})` }}
        aria-hidden="true"
      />
      <GlowLineAboutUsPointer className="left-0 top-0 hidden h-[307px] w-[226px] md:block" />
      <GlowLineAboutUsPointer className="bottom-0 right-0 hidden h-[333px] w-[235px] rotate-[180deg] md:block" />

      <SectionPaddingY72 className="px-4 sm:px-6 lg:px-8">
        <div className="relative z-10 mx-auto flex w-full max-w-[990px] flex-col items-center gap-6 text-center sm:gap-8">
          <SectionBadge label={aboutUsCopy.badgeLabel} className="h-[28px] px-[11px] py-0 text-sm leading-none" />
          <SectionHeading
            line1={aboutUsCopy.headingLine1}
            line2Highlight={aboutUsCopy.headingLine2Highlight}
            line2After={aboutUsCopy.headingLine2After}
            className="max-w-[790px] text-[30px] font-normal leading-[1.04] sm:text-[38px] md:text-[48px] md:leading-[52px]"
            line2ClassName="mt-1"
          />

          <div className="relative w-full overflow-hidden rounded-xl sm:rounded-2xl">
            <img
              src={aboutUsMainImage.src}
              alt="Techforge team collaboration"
              className="h-[300px] w-full object-cover object-center sm:h-[390px] md:h-[460px]"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,#00000c_18%,rgba(0,0,114,0)_98%)]" />
            <p className="absolute bottom-5 left-1/2 w-[92%] max-w-[780px] -translate-x-1/2 text-center text-[15px] leading-[1.35] text-white sm:bottom-8 sm:w-[90%] sm:text-[20px] sm:leading-[1.28] md:text-[28px] md:leading-[33px]">
              {aboutUsCopy.leadPrefix} <span className="text-[#cac6dd]">{aboutUsCopy.leadText}</span>
            </p>
          </div>

          {ctaHref ? (
            <a href={ctaHref}>
              <PrimaryButton
                label={aboutUsCopy.ctaLabel}
                className="h-[44px] px-5 text-[15px] sm:h-[47px] sm:px-6 sm:text-base"
              />
            </a>
          ) : (
            <PrimaryButton
              label={aboutUsCopy.ctaLabel}
              className="h-[44px] px-5 text-[15px] sm:h-[47px] sm:px-6 sm:text-base"
            />
          )}
        </div>
      </SectionPaddingY72>
    </section>
  );
}
