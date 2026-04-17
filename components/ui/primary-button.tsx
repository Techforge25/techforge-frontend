type PrimaryButtonProps = {
  className?: string;
  label?: string;
};

const primaryButtonBase =
  "inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-normal capitalize leading-none text-white";
const primaryButtonInteraction =
  "transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:border-[#248aff] focus-visible:bg-[#2424a6] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none";

export default function PrimaryButton({
  className = "",
  label = "get a Quotes",
}: PrimaryButtonProps) {
  return (
    <button
      type="button"
      className={[primaryButtonBase, primaryButtonInteraction, className].join(" ")}
    >
      {label}
    </button>
  );
}
