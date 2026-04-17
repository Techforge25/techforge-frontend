type PortfolioCardProps = {
  image: string;
  title: string;
  subtitle: string;
  arrowIcon: string;
};

export default function PortfolioCard({
  image,
  title,
  subtitle,
  arrowIcon,
}: PortfolioCardProps) {
  return (
    <article className="group relative h-[300px] overflow-hidden border border-[#121324] bg-[#050512] sm:h-[330px] lg:h-[346px]">
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,12,0)_26%,rgba(0,0,12,0.75)_72%,#00000c_100%)]" />

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-4 sm:inset-x-6">
        <div className="min-w-0">
          <p className="font-['Neiko','Satoshi',sans-serif] text-[22px] uppercase leading-[20px] tracking-[0.48px] text-white sm:text-[24px]">
            {title}
          </p>
          <p className="mt-2 truncate text-sm leading-[18px] text-[#cac6dd]">{subtitle}</p>
        </div>
        <img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className="h-10 w-10 shrink-0 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]"
        />
      </div>
    </article>
  );
}
