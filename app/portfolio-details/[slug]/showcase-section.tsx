import type { PortfolioDetail } from "@/data/portfolio-details";

type PortfolioDetailShowcaseSectionProps = {
  portfolio: PortfolioDetail;
};

function deriveLaunch(portfolio: PortfolioDetail) {
  return (
    portfolio.launch ??
    `After launch, the product started generating real-world signal across ${portfolio.category.toLowerCase()} workflows, giving the founder clearer feedback about where users were getting value and where the product needed to evolve next.`
  );
}

function deriveLearning(portfolio: PortfolioDetail) {
  const firstFeature = portfolio.solutionFeatures[0]?.toLowerCase() ?? "the core workflow";
  return (
    portfolio.learning ??
    `Real users confirmed that ${firstFeature} mattered, but they also revealed where simplicity, visibility, and decision-support were more important than simply adding more functionality.`
  );
}

function deriveNextStep(portfolio: PortfolioDetail) {
  return (
    portfolio.nextStep ??
    `Version 2 could then be shaped by evidence: refining the highest-value workflows, strengthening adoption around proven use cases, and expanding only where user behavior justified more investment.`
  );
}

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
          What Happened After Launch
        </h2>

        <div className="grid w-full grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
          <article className="flex flex-col gap-4">
            <h3 className="font-['Neiko','Satoshi',sans-serif] text-[30px] leading-[1.1] text-white">The Launch</h3>
            <p className="text-[15px] leading-[1.6] text-[#cac6dd]">{deriveLaunch(portfolio)}</p>
          </article>
          <article className="flex flex-col gap-4">
            <h3 className="font-['Neiko','Satoshi',sans-serif] text-[30px] leading-[1.1] text-white">The Learning</h3>
            <p className="text-[15px] leading-[1.6] text-[#cac6dd]">{deriveLearning(portfolio)}</p>
          </article>
          <article className="flex flex-col gap-4">
            <h3 className="font-['Neiko','Satoshi',sans-serif] text-[30px] leading-[1.1] text-white">What&apos;s Next</h3>
            <p className="text-[15px] leading-[1.6] text-[#cac6dd]">{deriveNextStep(portfolio)}</p>
          </article>
        </div>

        <div className="grid w-full grid-cols-1 gap-8 sm:grid-cols-3 sm:gap-6 lg:gap-12">
          {portfolio.results.map((item) => (
            <article
              key={`${item.value}-${item.label}`}
              className="flex flex-col items-start gap-2 w-full"
            >
              <p className="font-['Neiko','Satoshi',sans-serif] text-[38px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-white">
                {item.value}
              </p>
              <p className="text-[15px] sm:text-[17px] md:text-[19px] lg:text-[22px] leading-[1.3] text-[#cac6dd]">
                {item.label}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
