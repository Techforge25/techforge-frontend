type SectionBadgeProps = {
  label: string;
  className?: string;
};

export default function SectionBadge({ label, className = "" }: SectionBadgeProps) {
  return (
    <div
      className={`inline-flex items-center gap-2 rounded-[140px] bg-[rgba(255,255,255,0.08)] px-3 py-1.5 text-xs font-medium capitalize leading-none text-white sm:text-sm ${className}`}
    >
      <span className="h-[7px] w-[7px] rotate-45 bg-white sm:h-[8px] sm:w-[8px]" />
      <span>{label}</span>
    </div>
  );
}
