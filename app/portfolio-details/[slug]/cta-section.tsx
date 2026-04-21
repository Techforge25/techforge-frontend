import type { PortfolioDetail } from "@/data/portfolio-details";

type PortfolioDetailCtaSectionProps = {
  portfolio: PortfolioDetail;
};

export default function PortfolioDetailCtaSection({ portfolio }: PortfolioDetailCtaSectionProps) {
  const loopStacks = [...portfolio.techStacks, ...portfolio.techStacks];

  return (
    <section className="relative w-full overflow-hidden bg-[#00000c] py-12 sm:py-14 lg:py-[72px]">
      <div className="relative z-10 mx-auto w-full px-4 sm:px-6 lg:px-10">
        <div className="relative mx-auto overflow-hidden py-8 sm:py-10 lg:h-[197px] lg:max-w-[1288px] lg:py-0">
          <div
            className="flex w-max items-center gap-8 will-change-transform sm:gap-10 lg:h-[197px] lg:gap-[22px]"
            style={{ animation: "testimonials-left 34s linear infinite" }}
          >
            {loopStacks.map((stack, index) => {
              return (
              <article
                key={`${stack.id}-${index}`}
                className="flex shrink-0 items-center gap-[14px] lg:w-[240px] lg:gap-[21px]"
              >
                <div className="inline-flex h-[38px] w-[38px] items-center justify-center lg:h-[53px] lg:w-[53px]">
                  <img src={stack.icon} alt="" aria-hidden="true" className="h-[53.48px] w-[53.48px] object-contain" />
                </div>
                <p className="text-[24px] font-medium leading-[1.2] text-[#eeeff2] lg:text-[30px] lg:leading-[46px]">
                  {stack.label}
                </p>
              </article>
              );
            })}
          </div>

          <div className="pointer-events-none absolute left-0 top-0 hidden h-[197px] w-[180px] bg-[linear-gradient(90deg,#00000c_4.68%,rgba(0,0,12,0)_85.09%)] lg:block" />
          <div className="pointer-events-none absolute right-0 top-0 hidden h-[197px] w-[180px] bg-[linear-gradient(90deg,rgba(0,0,12,0)_14.91%,#00000c_95.32%)] lg:block" />
        </div>
      </div>
    </section>
  );
}
