import projectHeroImage from "@/assets/images/home/portfolio/card-1.webp";

export default function PortfolioDetailHeroSection() {
  return (
    <section className="relative h-[743px] w-full overflow-hidden bg-[#00000c]">
      <img
        src={projectHeroImage.src}
        alt="Neighbourly project mockup"
        className="absolute inset-0 h-full w-full object-cover"
      />

      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(178.79deg,rgba(0,0,12,0)_4.58%,#00000c_96.08%)]" />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-[-77px] h-[301px] w-[1200px] -translate-x-1/2 bg-[radial-gradient(ellipse_at_center,rgba(90,108,255,0.42)_0%,rgba(90,108,255,0.16)_46%,rgba(0,0,12,0)_76%)]"
      />

      <div className="absolute left-1/2 top-[54px] z-10 -translate-x-1/2 rounded-[140px] border border-[rgba(36,138,255,0.6)] bg-[linear-gradient(81.02deg,rgba(231,61,196,0.66)_15.78%,rgba(9,14,219,0.66)_102.06%)] px-[11px] py-[10px]">
        <div className="flex items-center gap-[6px]">
          <span className="flex h-4 w-4 items-center justify-center">
            <span className="h-[11px] w-[11px] rotate-45 bg-white" />
          </span>
          <p className="text-white">
            <span className="font-['Manrope',sans-serif] text-2xl font-normal lowercase leading-8">Neighbourly</span>
          </p>
        </div>
      </div>
    </section>
  );
}
