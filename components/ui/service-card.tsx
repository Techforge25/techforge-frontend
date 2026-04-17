import iconArrowRight from "@/assets/images/home/services/icon-arrow-right.svg";

type ServiceCardProps = {
  icon: string;
  iconClassName?: string;
  title: string;
  description: string;
  accent?: "pink" | "blue";
};

export default function ServiceCard({
  icon,
  iconClassName = "",
  title,
  description,
  accent = "blue",
}: ServiceCardProps) {
  const iconBg =
    accent === "pink"
      ? "bg-[linear-gradient(90deg,#5925dc_0%,#5925dc_100%)]"
      : "bg-[linear-gradient(90deg,#2424a6_0%,#175cd3_100%)]";
  const cardClipPath =
    "polygon(0 0, calc(100% - 60px) 0, calc(100% - 44px) 6px, calc(100% - 6px) 44px, 100% 60px, 100% 100%, 0 100%)";

  return (
    <article
      className="group relative min-h-[320px] w-full overflow-hidden rounded-[24px] sm:min-h-[348px]"
      style={{
        clipPath: cardClipPath,
        borderRadius: "24px",
      }}
    >
      <div className="absolute inset-0 bg-[linear-gradient(160deg,rgba(18,19,36,0.92)_0%,rgba(8,10,29,0.95)_100%)]" />
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full opacity-0 transition-opacity duration-300 group-hover:opacity-100"
        viewBox="0 0 377 348"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="service-card-hover-stroke" x1="-60.4622" y1="377.627" x2="399.019" y2="359.803" gradientUnits="userSpaceOnUse">
            <stop offset="0.66" stopColor="rgba(9,14,219,1)" />
            <stop offset="1" stopColor="rgba(231,61,196,1)" />
          </linearGradient>
        </defs>
        <path
          d="M313.679 1H32C14.8792 1 1 14.8792 1 32V316C1 333.121 14.8792 347 32 347H345C362.121 347 376 333.121 376 316V64.4541C376 56.4232 372.883 48.7055 367.307 42.9268L335.985 10.4727C330.143 4.41927 322.091 1 313.679 1Z"
          fill="none"
          stroke="url(#service-card-hover-stroke)"
          strokeWidth="2"
        />
      </svg>
      <div className="absolute left-[calc(50%+29px)] top-[calc(50%-20px)] h-[210px] w-[210px] -translate-x-1/2 -translate-y-1/2 rounded-[200px] bg-[radial-gradient(circle,_#907CFF_16.31%,_#6B05B4_72%,_#FFFFFF_100%)] opacity-40 blur-[56px] mix-blend-color-dodge sm:h-[242px] sm:w-[242px] sm:blur-[60px]" />

      <div className="relative z-10 flex h-full flex-col p-6 sm:p-8">
        <div className={`inline-flex h-[48px] w-[48px] items-center justify-center rounded-[13px] border border-[rgba(187,187,227,0.2)] bg-[linear-gradient(180deg,rgba(255,255,255,0.12)_0%,rgba(255,255,255,0)_100%)] sm:h-[52px] sm:w-[52px] ${iconBg}`}>
          <img src={icon} alt="" aria-hidden="true" className={`h-7 w-7 object-contain sm:h-[30px] sm:w-[30px] ${iconClassName}`} />
        </div>

        <div className="mt-6 sm:mt-8">
          <h3 className="text-[24px] leading-[1.2] text-[#d6ddf8] sm:text-[28px]">{title}</h3>
          <p className="mt-3 max-w-[286px] text-[15px] leading-[1.45] text-[#cac6dd] sm:text-base sm:leading-[1.4]">{description}</p>
        </div>

        <button type="button" className="mt-auto inline-flex items-center gap-2 text-white">
          <span className="text-[18px] capitalize leading-none sm:text-[20px]">Read more</span>
          <img src={iconArrowRight.src} alt="" aria-hidden="true" className="h-6 w-6 object-contain sm:h-7 sm:w-7" />
        </button>
      </div>
    </article>
  );
}
