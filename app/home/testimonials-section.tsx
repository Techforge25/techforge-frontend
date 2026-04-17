import SectionBadge from "@/components/ui/section-badge";
import SectionHeading from "@/components/ui/section-heading";
import { SectionPaddingY72 } from "@/components/ui/section-padding";
import { testimonialColumns, testimonialsCopy, type TestimonialItem } from "@/data/home";

const testimonialRows: readonly TestimonialItem[][] = [0, 1, 2].map((rowIndex) =>
  testimonialColumns
    .map((column) => column[rowIndex])
    .filter((item): item is TestimonialItem => Boolean(item)),
);

function TestimonialCard({
  avatar,
  handle,
  quote,
  className = "w-[297px]",
}: {
  avatar: string;
  handle: string;
  quote: string;
  className?: string;
}) {
  return (
    <article className={`${className} shrink-0 rounded-[16px] border border-[#121324] bg-[rgba(19,19,36,0.5)] px-6 pb-[34px] pt-6`}>
      <div className="flex items-center gap-3">
        <div className="relative h-10 w-10 overflow-hidden rounded-full bg-[#575757]">
          <img src={avatar} alt="" className="h-full w-full object-cover" />
        </div>
        <p className="text-base font-medium leading-6 text-[#fbfbfd]">{handle}</p>
      </div>
      <p className="mt-3 text-base leading-[18px] text-[#cac6dd]">{quote}</p>
    </article>
  );
}

function MarqueeRow({
  items,
  direction,
  duration,
}: {
  items: readonly { avatar: string; handle: string; quote: string }[];
  direction: "left" | "right";
  duration: number;
}) {
  const loopItems = [...items, ...items];
  const animationName = direction === "left" ? "testimonials-left" : "testimonials-right";

  return (
    <div className="overflow-hidden">
      <div
        className="flex w-max gap-4 will-change-transform"
        style={{
          animation: `${animationName} ${duration}s linear infinite`,
        }}
      >
        {loopItems.map((item, idx) => (
          <TestimonialCard
            key={`${item.handle}-${idx}`}
            avatar={item.avatar}
            handle={item.handle}
            quote={item.quote}
          />
        ))}
      </div>
    </div>
  );
}

function TestimonialsDesktop() {
  return (
    <div className="relative hidden w-full overflow-hidden lg:block">
      <div className="pointer-events-none absolute inset-y-0 left-0 z-20 w-[220px] bg-[linear-gradient(90deg,rgba(0,0,12,0.95)_0%,rgba(0,0,12,0.6)_45%,rgba(0,0,12,0)_100%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-0 z-20 w-[220px] bg-[linear-gradient(270deg,rgba(0,0,12,0.95)_0%,rgba(0,0,12,0.6)_45%,rgba(0,0,12,0)_100%)]" />
      <div className="space-y-4">
        <MarqueeRow items={testimonialRows[0]} direction="left" duration={38} />
        <MarqueeRow items={testimonialRows[1]} direction="right" duration={36} />
        <MarqueeRow items={testimonialRows[2]} direction="left" duration={40} />
      </div>
    </div>
  );
}

function TestimonialsMobile() {
  const cards = testimonialColumns.flat();
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:hidden">
      {cards.map((item, idx) => (
        <TestimonialCard
          key={`m-${item.handle}-${idx}`}
          avatar={item.avatar}
          handle={item.handle}
          quote={item.quote}
          className="w-full"
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(45%_70%_at_50%_40%,rgba(76,76,255,0.2)_0%,rgba(0,0,12,0)_52%,rgba(0,0,12,0.88)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,12,0.1)_0%,rgba(0,0,12,0.55)_58%,rgba(0,0,12,0.9)_100%)]" />

      <SectionPaddingY72 className="px-0">
        <div className="relative z-10 flex w-full max-w-none flex-col items-center gap-10 lg:gap-16">
          <div className="relative flex w-full flex-col items-center">
            <SectionBadge
              label={testimonialsCopy.badgeLabel}
              className="h-[28px] px-[11px] py-0 text-sm leading-none"
            />

            <SectionHeading
              line1={testimonialsCopy.headingLine1}
              line2Highlight={testimonialsCopy.headingLine2Highlight}
              line2After={testimonialsCopy.headingLine2After}
              className="mt-6 max-w-[540px] text-center text-[36px] leading-[1.08] sm:text-[42px] md:text-[48px] md:leading-[52px]"
              line2ClassName="mt-1"
              highlightClassName="!bg-[linear-gradient(90deg,#4848FF_0%,#2424A6_100%)] !px-2.5 sm:!px-3"
            />
          </div>

          <div className="w-full">
            <TestimonialsDesktop />
            <div className="px-4 sm:px-8">
              <TestimonialsMobile />
            </div>
          </div>
        </div>
      </SectionPaddingY72>
    </section>
  );
}
