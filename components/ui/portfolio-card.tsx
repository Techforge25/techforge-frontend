type PortfolioCardProps = {
  image: string;
  title: string;
  subtitle: string;
  arrowIcon: string;
  className?: string;
};

export default function PortfolioCard({
  image,
  title,
  subtitle,
  arrowIcon,
  className = "",
}: PortfolioCardProps) {
  return (
    <article
      className={`group relative h-[270px] overflow-hidden border border-[#121324] bg-[#050512] sm:h-[300px] md:h-[330px] lg:h-[346px] ${className}`}
    >
      <img
        src={image}
        alt={title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
      />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,12,0)_26%,rgba(0,0,12,0.75)_72%,#00000c_100%)]" />

      <div className="absolute inset-x-4 bottom-4 flex items-end justify-between gap-3 sm:inset-x-6 sm:gap-4">
        <div className="min-w-0">
          <p className="font-['Neiko','Satoshi',sans-serif] text-[20px] uppercase leading-[1] tracking-[0.42px] text-white sm:text-[22px] md:text-[24px]">
            {title}
          </p>
          <p className="mt-2 text-[13px] leading-[17px] text-[#cac6dd] sm:text-sm sm:leading-[18px]">{subtitle}</p>
        </div>
        <img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] sm:h-10 sm:w-10"
        />
      </div>
    </article>
  );
}
