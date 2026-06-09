import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";

const steps = [
  {
    phase: "01",
    title: "Application Review",
    description: "Submit your resume, portfolio, or GitHub repositories. Our hiring managers review each submission personally within 3 working days.",
  },
  {
    phase: "02",
    title: "Technical Conversation",
    description: "A 45-minute discussion focusing on code structure, architecture design, design systems, or algorithms based on the targeted role.",
  },
  {
    phase: "03",
    title: "Synergy & Culture Match",
    description: "Talk with our cross-functional teams to explore collaborative patterns, visual design preferences, or vector indexing challenges.",
  },
  {
    phase: "04",
    title: "Formal Offer",
    description: "Receive a transparent compensation proposal, equity detail guidelines, premium health cards, and set up your remote desktop schedules.",
  },
] as const;

export default function HiringProcess() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 sm:gap-14">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionBadge label="our process" className="h-[28px] px-[11px] py-0 text-sm leading-none" />
              <SectionHeading
                line1="A Transparent Journey"
                line2Highlight="how we recruit"
                line2After="top-tier talent"
                className="max-w-[700px] text-[28px] leading-[1.1] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            {/* Stepper Grid */}
            <div className="relative grid w-full grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
              {/* Optional timeline link line for desktop sizes */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-[40px] top-[40px] hidden h-[2px] w-[calc(100%-80px)] bg-gradient-to-r from-[#5160ff]/40 via-purple-500/20 to-[#5160ff]/40 lg:block"
              />

              {steps.map((step, idx) => (
                <div key={step.phase} className="relative flex flex-col gap-4">
                  {/* Step counter button layout */}
                  <div className="relative z-10 flex h-16 w-16 items-center justify-center rounded-full border border-[#2424a6] bg-[#00000c] shadow-[0_0_15px_rgba(36,36,166,0.35)]">
                    <span className="font-mono text-xl font-bold text-white bg-gradient-to-b from-white to-[rgba(255,255,255,0.4)] bg-clip-text text-transparent">
                      {step.phase}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-white">
                      {step.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#cac6dd]">
                      {step.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
