import Link from "next/link";

type PortfolioCardProps = {
  href: string;
  image: string;
  title: string;
  subtitle: string;
  industry: string;
  challenge: string;
  approach: string;
  built: string;
  arrowIcon: string;
  className?: string;
};

export default function PortfolioCard({
  href,
  image,
  title,
  subtitle,
  industry,
  challenge,
  approach,
  built,
  arrowIcon,
  className = "",
}: PortfolioCardProps) {
  return (
    <Link
      href={href}
      data-portfolio-card
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
          <div className="mt-3 space-y-1.5 text-[11px] leading-[1.35] text-[#d3d6e7] sm:text-[12px]">
            <p><span className="text-white">Industry:</span> {industry}</p>
            <p><span className="text-white">Challenge:</span> {challenge}</p>
            <p><span className="text-white">Our Approach:</span> {approach}</p>
            <p><span className="text-white">What We Built:</span> {built}</p>
          </div>
          <p className="mt-2 text-[11px] uppercase tracking-[0.18em] text-[#8e95db] sm:text-[12px]">{subtitle}</p>
        </div>
        <img
          src={arrowIcon}
          alt=""
          aria-hidden="true"
          className="h-9 w-9 shrink-0 transition-transform duration-200 group-hover:translate-x-[2px] group-hover:-translate-y-[2px] sm:h-10 sm:w-10"
        />
      </div>
    </Link>
  );
}
