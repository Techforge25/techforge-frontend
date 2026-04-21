import type { PortfolioDetail } from "@/data/portfolio-details";

type PortfolioDetailShowcaseSectionProps = {
  portfolio: PortfolioDetail;
};

export default function PortfolioDetailShowcaseSection({ portfolio }: PortfolioDetailShowcaseSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#00000c] px-4 py-16 sm:px-6 sm:py-20 lg:px-[120px] lg:py-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.2] [background-image:radial-gradient(rgba(81,96,255,0.4)_1px,transparent_1px)] [background-size:10px_10px]"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-[551px] w-[900px] -translate-x-1/2 -translate-y-[42%] opacity-40"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(81,96,255,0.5) 0%, rgba(81,96,255,0.18) 35%, rgba(0,0,12,0) 72%)",
        }}
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-[72px]">
        <h2 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text text-center font-['Neiko','Satoshi',sans-serif] text-[34px] uppercase leading-[1.08] text-transparent sm:text-[38px] sm:leading-[52px]">
          {portfolio.resultsHeading}
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-10 lg:gap-[151px]">
          {portfolio.results.map((item) => (
            <article
              key={`${item.value}-${item.label}`}
              className="flex flex-col items-start gap-2 whitespace-nowrap lg:w-[299px]"
            >
              <p className="font-['Neiko','Satoshi',sans-serif] text-[52px] leading-[52px] text-white">{item.value}</p>
              <p className="text-[28px] leading-[29px] text-[#cac6dd]">{item.label}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
