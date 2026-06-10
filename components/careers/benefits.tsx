import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";

const benefitsList = [
  {
    title: "Competitive Salary",
    desc: "Rewarding compensation packages designed to recognize your skills, performance, and contributions.",
  },
  {
    title: "Career Growth",
    desc: "Advance your career through challenging projects, mentorship, and continuous development opportunities.",
  },
  {
    title: "Flexible Work Environment",
    desc: "Work efficiently with flexible schedules that support productivity and work-life balance.",
  },
  {
    title: "Learning & Development",
    desc: "Access resources, training, and certifications to continuously expand your knowledge and expertise.",
  },
  {
    title: "Global Projects",
    desc: "Collaborate on innovative projects for clients across different industries and international markets.",
  },
  {
    title: "Collaborative Culture",
    desc: "Join a supportive team that values creativity, teamwork, knowledge sharing, and innovation.",
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
                    <h4 className="text-base font-semibold tracking-widest text-white">{perk.title}</h4>
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
