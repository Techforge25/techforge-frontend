import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import headingGlow from "@/assets/images/home/work-process/heading-glow.svg";
import ourWorkBg from "@/assets/images/our-work-bg.webp";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { processSteps } from "@/data/home";

const timelineLineClass =
  "pointer-events-none absolute left-1/2 top-[152px] h-[2px] w-[1112px] -translate-x-1/2 bg-[linear-gradient(90deg,rgba(80,95,251,0)_0%,#505FFB_3.6%,#7F8AFF_21.7%,#505FFB_38.4%,#505FFB_65.4%,#7F8AFF_83.1%,#505FFB_96%,rgba(80,95,251,0)_100%)]";

function TimelineStep({ step }: { step: (typeof processSteps)[number] }) {
  return (
    <div className="absolute inset-y-0" style={{ left: step.left }}>
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute -translate-x-1/2 -translate-y-1/2 ${step.glowClassName}`}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(ellipse_at_center,rgba(87,105,255,0.42)_0%,rgba(77,94,251,0.18)_40%,rgba(77,94,251,0)_100%)] blur-[18px]" />
      </div>

      <div className={`absolute left-1/2 z-10 ${step.numberClassName}`}>
        <span className="font-black text-[75px] uppercase leading-[75px] text-[rgba(70,70,255,0.31)]">
          {step.id}
        </span>
      </div>

      <div className={`absolute left-1/2 h-[48px] w-[1px] -translate-x-1/2 ${step.stemClassName}`}>
        <div className={`h-full w-[1px] ${step.stemGradient}`} />
      </div>

      <div className="absolute left-1/2 top-[145px] z-20 h-[16px] w-[16px] -translate-x-1/2">
        <div className="absolute left-1/2 top-1/2 h-[36px] w-[36px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(96,113,255,0.36)_0%,rgba(96,113,255,0)_74%)]" />
        <div className="absolute left-1/2 top-1/2 h-[15px] w-[15px] -translate-x-1/2 -translate-y-1/2 rounded-full border-[2.5px] border-[#0A0A0A] bg-[linear-gradient(180deg,#5160FF_0%,#AEB5FF_100%)]" />
      </div>

      <div className={`absolute left-1/2 w-[216px] ${step.textClassName}`}>
        <p className="font-normal text-[24px] leading-[20px] text-white">{step.title}</p>
        <p className="mt-2 text-[14px] leading-[18px] text-[#cac6dd]">{step.description}</p>
      </div>
    </div>
  );
}

function TimelineTrack() {
  return (
    <div className="relative h-[300px] w-full max-w-[1200px]">
      <div className={timelineLineClass} />
      {processSteps.map((step) => (
        <TimelineStep key={step.id} step={step} />
      ))}
    </div>
  );
}

function ProcessTimelineDesktop() {
  return (
    <div className="hidden w-full items-center justify-center lg:flex">
      <TimelineTrack />
    </div>
  );
}

function ProcessTimelineMobile() {
  return (
    <div className="relative block h-[860px] w-full overflow-hidden lg:hidden">
      <div className="absolute left-1/2 top-1/2 h-[300px] w-[1112px] -translate-x-1/2 -translate-y-1/2 rotate-[90deg] scale-[0.72]">
        <TimelineTrack />
      </div>
    </div>
  );
}

export default function OurWorkProcessSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center opacity-30"
        style={{ backgroundImage: `url(${ourWorkBg.src})` }}
        aria-hidden="true"
      />

      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col items-center gap-8 sm:gap-10 lg:gap-[72px]">
            <div className="relative flex w-full flex-col items-center text-center">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-[120px] h-[300px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-45 blur-[88px]"
                style={{
                  background:
                    "radial-gradient(ellipse at center, rgba(72,72,255,0.4) 0%, rgba(72,72,255,0.16) 42%, rgba(72,72,255,0) 100%)",
                }}
              />
              <SectionBadge
                label="Our work process"
                className="h-[28px] px-[11px] py-0 text-sm leading-none"
              />
              <div className="relative mt-6">
                <img
                  src={headingGlow.src}
                  alt=""
                  aria-hidden="true"
                  className="pointer-events-none absolute left-1/2 top-1/2 h-[220px] w-[220px] -translate-x-1/2 -translate-y-1/2 opacity-55"
                />
                <SectionHeading
                  line1="A Clear, Results Driven"
                  line2Highlight="Approach"
                  line2After="to Delivering Excellence"
                  line1WithHighlightSameLine={false}
                  className="relative z-10 mx-auto max-w-[540px] text-center text-[36px] leading-[1.08] sm:text-[42px] md:text-[48px] md:leading-[52px]"
                  line2ClassName="mt-1 "
                />
              </div>
            </div>

            <ProcessTimelineDesktop />
            <ProcessTimelineMobile />
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
