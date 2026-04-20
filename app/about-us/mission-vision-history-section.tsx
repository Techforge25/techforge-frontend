import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import { aboutMissionVisionHistorySection } from "@/data/aboutUs-Page";

type AboutFeatureCardProps = {
  title: string;
  description: string;
  image: string;
  imageFirst?: boolean;
  className?: string;
};

function AboutFeatureCard({
  title,
  description,
  image,
  imageFirst = false,
  className = "",
}: AboutFeatureCardProps) {
  const textBlock = (
    <div className="px-[22px] py-[22px]">
      <h3 className="font-['Satoshi:Bold',sans-serif] text-[24px] capitalize leading-[34px] text-white">
        {title}
      </h3>
      <p className="mt-3 font-['Satoshi:Regular',sans-serif] text-base leading-[18px] text-[#cac6dd]">
        {description}
      </p>
    </div>
  );

  const imageBlock = (
    <div className="relative h-[255px] w-full overflow-hidden rounded-[12px] bg-white">
      <img src={image} alt={title} className="h-full w-full object-cover" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,12,0)_12%,#00000c_95%)]" />
    </div>
  );

  return (
    <article
      className={`flex h-auto min-h-[446px] w-full flex-col overflow-hidden rounded-[12px] border border-[#1c1e32] bg-[#121324] p-px lg:h-[446px] ${className}`}
    >
      {imageFirst ? imageBlock : textBlock}
      {imageFirst ? textBlock : imageBlock}
    </article>
  );
}

export default function MissionVisionHistorySection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">

      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative mx-auto w-full max-w-[1200px]">
            <div
              className="pointer-events-none absolute bottom-[0px] left-1/2 z-0 h-[130px] w-[min(62vw,560px)] -translate-x-1/2 rounded-full opacity-90 blur-[58px]"
              style={{
                background:
                  "radial-gradient(ellipse at center, rgba(66,86,255,0.62) 0%, rgba(43,61,214,0.46) 44%, rgba(13,24,90,0.16) 72%, rgba(0,0,12,0) 100%)",
              }}
              aria-hidden="true"
            />

            <div className="relative z-10 grid w-full grid-cols-1 gap-6 lg:grid-cols-3 lg:gap-8">
            {aboutMissionVisionHistorySection.cards.map((card) => (
              <AboutFeatureCard
                key={card.title}
                title={card.title}
                description={card.description}
                image={card.image}
                imageFirst={"imageFirst" in card ? card.imageFirst : false}
                className={"cardClassName" in card ? card.cardClassName : ""}
              />
            ))}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
