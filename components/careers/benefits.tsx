import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";

const benefitsList = [
  {
    title: "Flexible & Hybrid Setup",
    desc: "Choose from a comfortable hybrid setup at our Islamabad office or complete remote flexibility for design roles.",
  },
  {
    title: "Premium Tech Stack",
    desc: "Get equipped with top-tier hardware (MacBook Pros, ultra-wide monitors) and paid licenses for all professional software.",
  },
  {
    title: "Learning Stipends",
    desc: "An annual budget set aside for you to purchase books, online courses, global certifications, or attend events.",
  },
  {
    title: "Comprehensive Healthcare",
    desc: "Top-tier health coverage policies covering hospitalization and outpatient requirements for you and your dependents.",
  },
  {
    title: "Paid Annual Retreats",
    desc: "Every year we gather the entire team for retreats, gaming tournaments, and digital brainstorming hackathons.",
  },
  {
    title: "Bonuses & Equity",
    desc: "Earn performance bonuses twice a year, and qualify for stock option pools depending on contribution levels.",
  },
];

export default function Benefits() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      {/* Decorative gradient glow background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-[-10%] top-[40%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle,rgba(81,96,255,0.12)_0%,rgba(0,0,12,0)_70%)]"
      />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 sm:gap-14">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionBadge label="perks & benefits" className="h-[28px] px-[11px] py-0 text-sm leading-none" />
              <SectionHeading
                line1="Everything you need"
                line2Highlight="to perform at"
                line2After="your absolute best"
                className="max-w-[700px] text-[28px] leading-[1.1] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[52px]"
                line2ClassName="mt-1"
              />
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {benefitsList.map((perk, index) => (
                <div
                  key={perk.title}
                  className="flex gap-4 rounded-[16px] border border-[#121324] bg-[rgba(19,19,36,0.3)] p-6 transition-all duration-300 hover:border-[#2424a6] hover:bg-[rgba(19,19,36,0.5)]"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[rgba(81,96,255,0.1)] text-[#5160ff] font-mono text-sm">
                    {index + 1}
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">{perk.title}</h4>
                    <p className="text-sm leading-relaxed text-[#cac6dd]">{perk.desc}</p>
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
