import footerCtaOverlay from "@/assets/images/home/footer/footer-cta-overlay.webp";
import footerLinksBackground from "@/assets/images/home/footer/footer-links-bg.webp";
import footerLogo from "@/assets/images/home/footer/footer-logo.webp";
import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { footerCopy, footerQuickLinks, footerServices, type FooterQuickLink } from "@/data/footer";

function FooterLinksColumn({
  title,
  items,
  titleClassName = "capitalize",
}: {
  title: string;
  items: readonly FooterQuickLink[];
  titleClassName?: string;
}) {
  return (
    <div className="flex flex-col gap-8">
      <h3 className={`text-[22px] font-bold leading-5 text-white ${titleClassName}`}>{title}</h3>
      <ul className="flex flex-col gap-8 text-base leading-[18px] text-[#cac6dd]">
        {items.map((item) => (
          <li key={item.label}>
            <a href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function NewsletterBlock() {
  return (
    <div className="relative mx-auto flex w-full max-w-[1200px] flex-col items-center justify-center overflow-hidden rounded-[28px] border border-[#00000c] bg-[linear-gradient(1.35deg,#050517_3.37%,#00000c_101.31%)] px-4 pb-7 pt-7 sm:rounded-[32px] sm:px-6 sm:pb-8 sm:pt-8 lg:h-[384px] lg:rounded-[52px] lg:px-[25px] lg:pb-[35px] lg:pt-[25px]">
      <img
        src={footerCtaOverlay.src}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-100"
      />
      <div className="relative z-10 flex w-full flex-col items-center gap-7 sm:gap-8 lg:gap-12">
        <div className="flex w-full flex-col items-center gap-5 sm:gap-[22px]">
          <SectionBadge
            label={footerCopy.newsletterBadge}
            className="h-[28px] border border-[rgba(36,138,255,0.6)] px-[11px] py-0 text-sm leading-none"
          />
          <SectionHeading
            line1={footerCopy.newsletterHeadingLine1}
            line2Before={footerCopy.newsletterHeadingLine2Before}
            line2Highlight={footerCopy.newsletterHeadingLine2Highlight}
            className="w-full max-w-[540px] text-center text-[28px] leading-[1.08] sm:text-[34px] sm:leading-[1.05] md:text-[42px] lg:text-[48px] lg:leading-[52px]"
            line2ClassName="mt-1"
          />
        </div>

        <form className="flex w-full max-w-[640px] flex-col items-stretch gap-2 rounded-[22px] border border-[rgba(243,243,243,0.08)] bg-[rgba(10,10,33,0.76)] p-2.5 sm:h-[58px] sm:flex-row sm:items-center sm:gap-2 sm:rounded-[112px] sm:pl-4 sm:pr-[9px] sm:py-0">
          <input
            type="email"
            placeholder={footerCopy.newsletterPlaceholder}
            className="h-[56px] min-w-0 flex-1 bg-transparent px-3 text-[15px] leading-5 text-white placeholder:text-white focus:outline-none sm:h-[50px] sm:px-0 sm:text-sm"
          />
          <button
            type="submit"
            className="inline-flex h-[46px] items-center justify-center rounded-[140px] bg-[#2424a6] px-6 text-[15px] capitalize text-white sm:h-[38px] sm:text-base"
          >
            {footerCopy.newsletterSubmitLabel}
          </button>
        </form>
      </div>
    </div>
  );
}

export default function SiteFooter() {
  return (
    <footer className="relative overflow-hidden bg-[#00000c]">
      <div className="relative z-10 pt-[72px]">
        <div className="px-4 sm:px-8 lg:px-[120px]">
          <NewsletterBlock />
        </div>

        <section className="relative mt-[72px] overflow-hidden border-t border-[#5050ff] px-4 pb-[72px] pt-[72px] sm:px-8 lg:min-h-[532px] lg:px-[120px]">
          <img
            src={footerLinksBackground.src}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 h-full w-full object-cover opacity-40"
          />

          <div className="mx-auto flex w-full max-w-[1200px] flex-col gap-12 lg:gap-[72px]">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-3 md:gap-10 lg:gap-[170px]">
              <div className="flex flex-col gap-8">
                <div className="relative">
                  <div className="pointer-events-none absolute left-[10%] top-[0px] h-[170px] w-[150px] -translate-x-1/2 bg-[radial-gradient(circle,rgba(36,36,166,0.35)_0%,rgba(0,0,12,0)_72%)]" />
                  <img
                    src={footerLogo.src}
                    alt="Techforge Innovations"
                    className="relative z-10 h-[64px] w-[320px] object-contain object-left sm:h-[72px] sm:w-[370px] lg:h-[82px] lg:w-[430px]"
                  />
                </div>
                <p className="max-w-[340px] text-base leading-[24px] text-[#cac6dd]">
                  {footerCopy.companyDescription}
                </p>
              </div>

              <FooterLinksColumn title={footerCopy.quickLinksTitle} items={footerQuickLinks} />
              <FooterLinksColumn
                title={footerCopy.servicesTitle}
                items={footerServices}
                titleClassName=""
              />
            </div>

            <div className="border-t border-[#242435] pt-[18px]">
              <p className="text-center text-sm leading-[18px] text-[#cac6dd]">
                {footerCopy.copyright}
              </p>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
}
