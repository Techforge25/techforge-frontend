type HeaderQuoteButtonProps = {
  className?: string;
  label?: string;
};

const headerQuoteButtonBase =
  "inline-flex h-[47px] items-center justify-center whitespace-nowrap rounded-[140px] border border-[#248aff] bg-[#2424a6] px-6 text-base font-normal capitalize leading-none text-white";
const headerQuoteButtonInteraction =
  "transition-[box-shadow,filter,background-color,border-color] duration-200 hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] focus-visible:[filter:brightness(1.06)] focus-visible:outline-none";

export default function HeaderQuoteButton({
  className = "",
  label = "get a Quotes",
}: HeaderQuoteButtonProps) {
  return (
    <button
      type="button"
      className={[headerQuoteButtonBase, headerQuoteButtonInteraction, className].join(" ")}
    >
      {label}
    </button>
  );
}
