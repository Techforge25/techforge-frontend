import chipNoise from "@/assets/images/home/hero/chip-noise.webp";
import type { CSSProperties } from "react";

type GradientChipProps = {
  label: string;
  className?: string;
  style?: CSSProperties;
};

export default function GradientChip({ label, className = "", style }: GradientChipProps) {
  return (
    <div
      className={`relative inline-flex h-[47px] items-center justify-center rounded-[140px] border border-[#248aff] px-6 text-base font-normal capitalize text-white ${className}`}
      style={style}
    >
      {/* Gradient and subtle noise texture match the Figma chip style. */}
      <div className="pointer-events-none absolute inset-0 rounded-[140px] bg-[image:var(--chip-gradient)]" />
      <div
        className="pointer-events-none absolute inset-0 rounded-[140px] bg-cover opacity-10"
        style={{ backgroundImage: `url(${chipNoise.src})` }}
      />
      <span className="relative z-10">{label}</span>
    </div>
  );
}
