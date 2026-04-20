import { type Country } from "react-phone-number-input";
import flags from "react-phone-number-input/flags";

function countryCodeToEmoji(code: string) {
  const normalized = code.toUpperCase();
  if (normalized.length !== 2) return "🌐";
  return String.fromCodePoint(
    normalized.charCodeAt(0) + 127397,
    normalized.charCodeAt(1) + 127397,
  );
}

export function CountryFlag({
  country,
  title,
  className = "h-3 w-4",
}: {
  country: Country;
  title: string;
  className?: string;
}) {
  const FlagIcon = flags[country];

  if (!FlagIcon) {
    return (
      <span
        aria-label={title}
        role="img"
        className={`inline-flex items-center justify-center text-[12px] leading-none ${className}`}
      >
        {countryCodeToEmoji(country)}
      </span>
    );
  }

  return (
    <span className={`inline-flex shrink-0 items-center justify-center ${className} [&_svg]:h-full [&_svg]:w-full`}>
      <FlagIcon title={title} />
    </span>
  );
}
