import glowLineAboutUs from "@/assets/images/glowline-aboutus.svg";

type GlowLineAboutUsPointerProps = {
  className?: string;
};

export default function GlowLineAboutUsPointer({
  className = "",
}: GlowLineAboutUsPointerProps) {
  return (
    <img
      src={glowLineAboutUs.src}
      alt=""
      aria-hidden="true"
      className={`pointer-events-none absolute object-contain ${className}`}
    />
  );
}
