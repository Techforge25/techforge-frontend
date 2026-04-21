import type { PortfolioDetail } from "@/data/portfolio-details";

type PortfolioDetailOverviewSectionProps = {
  portfolio: PortfolioDetail;
};

function ChallengeItem({ text }: { text: string }) {
  return (
    <li className="flex items-start gap-[6px]">
      <span className="mt-[2px] inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-[6px] bg-[rgba(251,251,253,0.03)] text-[#a4abb8]">
        <svg width="13" height="13" viewBox="0 0 16 16" aria-hidden="true">
          <path d="M4 4L12 12M12 4L4 12" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
        </svg>
      </span>
      <span className="text-sm leading-[17px] text-[#cac6dd]">{text}</span>
    </li>
  );
}

function FeatureItem({ text }: { text: string }) {
  return (
    <li className="rounded-[6px] border border-[#121324] bg-[rgba(251,251,253,0.03)] px-2 py-2 text-base leading-7 text-[#e9e9f6]">
      {text}
    </li>
  );
}

export default function PortfolioDetailOverviewSection({ portfolio }: PortfolioDetailOverviewSectionProps) {
  return (
    <section className="relative overflow-hidden bg-[#00000c] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-[72px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-[0.16] [background-image:radial-gradient(rgba(81,96,255,0.35)_1px,transparent_1px)] [background-size:9px_9px]"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1200px] space-y-[56px]">
        <div className="grid gap-8 lg:grid-cols-[1fr_514px] lg:gap-[83px]">
          <h2 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[34px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
            {portfolio.briefTitle}
          </h2>
          <p className="text-base leading-[18px] text-[#cac6dd]">{portfolio.briefDescription}</p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[394px_1fr] lg:gap-8">
          <article className="rounded-2xl bg-[#121324] p-[22px]">
            <div className="space-y-5">
              <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border border-[rgba(187,187,227,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(90deg,#2424A6_0%,#2424A6_100%)] text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 8V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <circle cx="12" cy="17" r="1" fill="currentColor" />
                  <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" fill="none" />
                </svg>
              </span>

              <div className="space-y-3">
                <h3 className="text-[30px] font-medium leading-7 text-[#eeeff2]">{portfolio.challengeTitle}</h3>
                <ul className="space-y-2">
                  {portfolio.challenges.map((item) => (
                    <ChallengeItem key={item} text={item} />
                  ))}
                </ul>
              </div>
            </div>
          </article>

          <article className="rounded-2xl border border-[#272835] p-[22px]">
            <div className="space-y-[22px]">
              <div className="space-y-5">
                <span className="inline-flex h-[52px] w-[52px] items-center justify-center rounded-[13px] border border-[rgba(187,187,227,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%),linear-gradient(90deg,#2424A6_0%,#2424A6_100%)] text-white">
                  <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>

                <div className="space-y-3">
                  <h3 className="text-[30px] font-medium leading-7 text-[#eeeff2]">{portfolio.solutionTitle}</h3>
                  <p className="text-sm leading-[17px] text-[#cac6dd]">{portfolio.solutionDescription}</p>
                </div>
              </div>

              <ul className="grid gap-3 sm:grid-cols-2">
                {portfolio.solutionFeatures.map((item) => (
                  <FeatureItem key={item} text={item} />
                ))}
              </ul>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
