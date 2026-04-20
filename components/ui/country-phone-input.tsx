"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import PhoneInput from "react-phone-number-input/input";
import {
  getCountries,
  getCountryCallingCode,
  type Country,
} from "react-phone-number-input";
import countryLabels from "react-phone-number-input/locale/en";
import { CountryFlag } from "@/components/ui/country-flag";
import dropdownIcon from "@/assets/images/dropdown.svg";

type CountryOption = {
  code: Country;
  name: string;
  callingCode: string;
};

const countryOptions: CountryOption[] = getCountries().map((code) => ({
  code,
  name: countryLabels[code] ?? code,
  callingCode: `+${getCountryCallingCode(code)}`,
}));

export function CountryPhoneInput({
  label,
  value,
  onChange,
  required = true,
}: {
  label: string;
  value: string | undefined;
  onChange: (value: string) => void;
  required?: boolean;
}) {
  const [selectedCountry, setSelectedCountry] = useState<Country>("US");
  const [isOpen, setIsOpen] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const selectedOption = useMemo(
    () => countryOptions.find((item) => item.code === selectedCountry) ?? countryOptions[0],
    [selectedCountry],
  );

  const filteredCountries = useMemo(() => {
    const query = searchValue.trim().toLowerCase();
    if (!query) return countryOptions;
    return countryOptions.filter(
      (item) =>
        item.name.toLowerCase().includes(query) ||
        item.code.toLowerCase().includes(query) ||
        item.callingCode.includes(query),
    );
  }, [searchValue]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <label className="flex w-full flex-col gap-[6px]">
      <p className="font-['Inter','Satoshi',sans-serif] text-[16px] font-medium leading-[24px] text-[#f5f5f5]">
        {label} {required ? <span className="text-[#5160ff]">*</span> : null}
      </p>

      <div className="relative h-[50px] rounded-[12px] border border-[rgba(255,255,255,0.2)] bg-[#1d1f38] px-[12px]">
        <div className="flex h-full items-center gap-[10px]">
          <div ref={dropdownRef} className="relative shrink-0">
            <button
              type="button"
              onClick={() => setIsOpen((prev) => !prev)}
              className="inline-flex h-[34px] max-w-[120px] items-center gap-1.5 rounded-[8px] border border-[rgba(255,255,255,0.14)] bg-[#17192f] px-2 text-[#dfe1e6]"
              aria-haspopup="listbox"
              aria-expanded={isOpen}
            >
              <CountryFlag
                country={selectedOption.code}
                title={selectedOption.name}
                className="h-[10px] w-[14px] shrink-0"
              />
              <span className="whitespace-nowrap text-[12px] font-medium leading-[16px]">
                {selectedOption.callingCode}
              </span>
              <img
                src={dropdownIcon.src}
                alt=""
                aria-hidden="true"
                className={`ml-auto h-4 w-4 shrink-0 transition-transform duration-200 ${
                  isOpen ? "rotate-180" : ""
                }`}
              />
            </button>

            {isOpen ? (
              <div className="absolute left-0 top-[calc(100%+8px)] z-50 w-[290px] overflow-hidden rounded-2xl border border-[rgba(124,136,188,0.35)] bg-[#121324] shadow-[0_18px_46px_rgba(0,0,0,0.5)]">
                <div className="border-b border-[rgba(255,255,255,0.1)] p-2">
                  <input
                    type="text"
                    value={searchValue}
                    onChange={(event) => setSearchValue(event.target.value)}
                    placeholder="Search country"
                    className="h-9 w-full rounded-lg border border-[rgba(255,255,255,0.14)] bg-[#1b1d35] px-3 text-sm text-[#dfe1e6] placeholder:text-[#8f96a6] focus:border-[#4e58ff] focus:outline-none"
                  />
                </div>

                <ul className="contact-dropdown-scroll max-h-[240px] overflow-y-auto py-1 pr-1" role="listbox">
                  {filteredCountries.length ? (
                    filteredCountries.map((country) => {
                      const isActive = country.code === selectedCountry;
                      return (
                        <li key={country.code}>
                          <button
                            type="button"
                            onClick={() => {
                              setSelectedCountry(country.code);
                              setIsOpen(false);
                              setSearchValue("");
                            }}
                            className={`flex w-full items-center justify-between gap-2 px-3 py-2 text-left transition-colors ${
                              isActive
                                ? "bg-[#2424a6] text-white"
                                : "text-[#d5d9e3] hover:bg-[#1f2140]"
                            }`}
                            role="option"
                            aria-selected={isActive}
                          >
                            <span className="flex min-w-0 items-center gap-2">
                              <CountryFlag
                                country={country.code}
                                title={country.name}
                                className="h-[10px] w-[14px] shrink-0"
                              />
                              <span className="truncate whitespace-nowrap text-sm">
                                {country.name}
                              </span>
                            </span>
                            <span className="whitespace-nowrap text-xs text-[#9fa8bc]">
                              {country.callingCode}
                            </span>
                          </button>
                        </li>
                      );
                    })
                  ) : (
                    <li className="px-3 py-2 text-sm text-[#8f96a6]">No country found</li>
                  )}
                </ul>
              </div>
            ) : null}
          </div>

          <PhoneInput
            country={selectedCountry}
            international={false}
            value={value}
            onChange={(nextValue) => onChange(nextValue ?? "")}
            placeholder="(000) 000-0000"
            className="h-[20px] w-full min-w-0 bg-transparent font-['Inter','Satoshi',sans-serif] text-[14px] font-normal leading-[20px] text-[#c4c4ff] placeholder:text-[#c4c4ff] focus:outline-none"
          />
        </div>
      </div>
    </label>
  );
}
