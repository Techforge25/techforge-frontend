import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";

const cultureItems = [
  {
    title: "Innovation First",
    description: "We work with cutting-edge tools, build custom AI systems, and encourage experiments. We don't just follow standards, we set them.",
    accent: "blue" as const,
  },
  {
    title: "Continuous Learning",
    description: "Every team member gets an annual learning stipend, active mentorship, and time dedicated solely to upskilling and research.",
    accent: "pink" as const,
  },
  {
    title: "Synergy & Autonomy",
    description: "We run a flat organization. Work directly with leaders, take ownership of products, and collaborate across engineering and design.",
    accent: "blue" as const,
  },
  {
    title: "Well-being & Flexibility",
    description: "Hybrid workspaces, flexible schedules, mental health check-ins, and office lunches ensure we work hard while staying happy.",
    accent: "pink" as const,
  },
 ] as const;

export default function CompanyCulture() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-[-10%] top-[20%] h-[400px] w-[400px] rounded-full bg-[radial-gradient(circle,rgba(36,36,166,0.18)_0%,rgba(0,0,12,0)_70%)]"
      />

      <SectionPaddingX120R72>
        <SectionPaddingY72 className="py-14 sm:py-[72px]">
          <div className="relative z-10 mx-auto flex max-w-[1200px] flex-col items-center gap-10 sm:gap-14">
            <div className="flex flex-col items-center gap-4 text-center">
              <SectionBadge label="our culture" className="h-[28px] px-[11px] py-0 text-sm leading-none" />
              <SectionHeading
                line1="Life at TechForge Innovations"
                line2Highlight="where ideas"
                line2After="turn into reality"
                className="max-w-[700px] text-[28px] leading-[1.1] sm:text-[36px] md:text-[44px] lg:text-[48px] md:leading-[52px]"
                line2ClassName="mt-1"
              />
              <p className="max-w-[620px] text-[15px] leading-[1.45] text-[#cac6dd] sm:text-base">
                We foster a premium engineering and design atmosphere where highly skilled builders work in tandem to craft digital masterpieces.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {cultureItems.map((item, index) => (
                <div
                  key={item.title}
                  className="group relative flex flex-col justify-between overflow-hidden rounded-[20px] border border-[#1c1e3d] bg-[rgba(19,20,38,0.4)] p-6 transition-all duration-300 hover:border-[#4e58ff] hover:bg-[rgba(29,31,60,0.6)]"
                >
                  <div className="space-y-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-[12px] border border-[rgba(255,255,255,0.1)] bg-[#131427]">
                      <span className="text-sm font-semibold text-[#5160ff]">0{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-semibold text-white group-hover:text-[#5160ff] transition-colors duration-200">
                      {item.title}
                    </h3>
                    <p className="text-sm leading-relaxed text-[#cac6dd]">
                      {item.description}
                    </p>
                  </div>
                  {/* Neon bottom glow line */}
                  <div
                    className={`absolute bottom-0 left-0 h-[2px] w-full origin-left scale-x-0 transition-transform duration-300 group-hover:scale-x-100 ${
                      item.accent === "pink" ? "bg-gradient-to-r from-pink-500 to-purple-500" : "bg-gradient-to-r from-blue-500 to-[#5160ff]"
                    }`}
                  />
                </div>
              ))}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
