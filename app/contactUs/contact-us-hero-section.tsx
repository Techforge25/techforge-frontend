"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { CountryPhoneInput } from "@/components/ui/country-phone-input";
import { SectionPaddingX120R72, SectionPaddingY72 } from "@/components/ui/section-padding";
import starImg from "@/assets/images/star.webp";
import dropdownIcon from "@/assets/images/dropdown.svg";
import {
  contactFormCopy,
  contactOptionCards,
  contactServiceOptions,
  contactUsAssets,
  contactUsHeroCopy,
} from "@/data/contact-us";

function HelpPoint({ title, description }: { title: string; description: string }) {
  return (
    <div className="flex flex-col gap-[10px]">
      <div className="flex items-center gap-3">
        <img src={starImg.src} alt="" aria-hidden="true" className="h-[32px] w-[32px]" />
        <p className="text-base font-medium leading-6 text-[#dfe1e6]">{title}</p>
      </div>
      <p className="text-base leading-6 text-[#a4abb8]">{description}</p>
    </div>
  );
}

function ContactMiniCard({
  icon,
  title,
  value,
}: {
  icon: string;
  title: string;
  value: string;
}) {
  return (
    <div className="relative overflow-hidden rounded-2xl border border-[#272835] bg-[#121324] p-[22px]">
      <img src={icon} alt="" aria-hidden="true" className="h-[38px] w-[38px] object-cover" />
      <div className="mt-[50px]">
        <p className="text-base font-medium leading-6 text-[#dfe1e6]">{title}</p>
        <p className="mt-1 text-sm leading-5 text-[#a4abb8]">{value}</p>
      </div>
      <img
        src={contactUsAssets.detailsPattern}
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute right-0 top-0 h-[150px] w-[251px] opacity-90"
      />
    </div>
  );
}

function ContactInput({
  label,
  placeholder,
  value,
  onChange,
  required = true,
  trailing,
  multiline = false,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
  trailing?: ReactNode;
  multiline?: boolean;
  error?: string;
}) {
  return (
    <label className="flex w-full flex-col gap-[6px]">
      <p className="font-['Inter','Satoshi',sans-serif] text-[16px] font-medium leading-[24px] text-[#f5f5f5]">
        {label} {required ? <span className="text-[#5160ff]">*</span> : null}
      </p>
      <div
        className={`flex rounded-[12px] border bg-[#1d1f38] px-[12px] py-[10px] transition-colors ${
          error ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
        } ${
          multiline
            ? "min-h-[184px] items-start gap-[12px]"
            : "h-[50px] items-center gap-[12px] py-0"
        }`}
      >
        {multiline ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-full min-h-[160px] w-full resize-none bg-transparent font-['Inter','Satoshi',sans-serif] text-[14px] font-normal leading-[20px] text-[#c4c4ff] placeholder:text-[#c4c4ff] focus:outline-none"
          />
        ) : (
          <div className="flex h-full w-full items-center">
            <input
              type="text"
              placeholder={placeholder}
              value={value}
              onChange={(e) => onChange(e.target.value)}
              className="w-full bg-transparent font-['Inter','Satoshi',sans-serif] text-[14px] font-normal leading-[20px] text-[#c4c4ff] placeholder:text-[#c4c4ff] focus:outline-none"
            />
          </div>
        )}
        {trailing}
      </div>
      {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
    </label>
  );
}

function ContactServicesSelect({
  label,
  placeholder,
  options,
  value,
  onChange,
  error,
}: {
  label: string;
  placeholder: string;
  options: readonly string[];
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  return (
    <label className="flex w-full flex-col gap-[6px]">
      <p className="font-['Inter','Satoshi',sans-serif] text-[16px] font-medium leading-[24px] text-[#f5f5f5]">
        {label} <span className="text-[#5160ff]">*</span>
      </p>
      <div ref={rootRef} className="relative">
        <button
          type="button"
          onClick={() => setIsOpen((prev) => !prev)}
          className={`flex h-[50px] w-full items-center justify-between gap-3 rounded-[12px] border bg-[#1d1f38] px-[12px] text-left transition-colors ${
            error ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
          }`}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <span className={`truncate text-[14px] leading-[20px] ${value ? "text-[#c4c4ff]" : "text-[#9ea7bf]"}`}>
            {value || placeholder}
          </span>
          <img
            src={dropdownIcon.src}
            alt=""
            aria-hidden="true"
            className={`h-4 w-4 shrink-0 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>

        {isOpen ? (
          <ul
            className="contact-dropdown-scroll absolute left-0 top-[calc(100%+8px)] z-40 max-h-[220px] w-full overflow-y-auto rounded-2xl border border-[rgba(124,136,188,0.35)] bg-[#121324] p-1 pr-1 shadow-[0_18px_46px_rgba(0,0,0,0.5)]"
            role="listbox"
          >
            {options.map((option) => {
              const isSelected = option === value;
              return (
                <li key={option}>
                  <button
                    type="button"
                    onClick={() => {
                      onChange(option);
                      setIsOpen(false);
                    }}
                    className={`w-full rounded-lg px-3 py-2 text-left text-sm transition-colors ${
                      isSelected
                        ? "bg-[#2424a6] text-white"
                        : "text-[#d5d9e3] hover:bg-[#1f2140]"
                    }`}
                    role="option"
                    aria-selected={isSelected}
                  >
                    <span className="block truncate whitespace-nowrap">{option}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        ) : null}
      </div>
      {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
    </label>
  );
}

export default function ContactUsHeroSection() {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");
  const [selectedService, setSelectedService] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!fullName.trim()) {
      newErrors.fullName = "Full Name is required";
    }
    if (!email.trim()) {
      newErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!phoneValue || phoneValue.trim().length < 6) {
      newErrors.phone = "A valid phone number is required";
    }
    if (!selectedService) {
      newErrors.service = "Please select a service";
    }
    if (!message.trim()) {
      newErrors.message = "Message details are required";
    } else if (message.trim().length < 5) {
      newErrors.message = "Message must be at least 5 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="relative overflow-hidden bg-[#00000c]">
      <SectionPaddingX120R72>
        <SectionPaddingY72>
          <div className="relative z-10 mx-auto flex w-full max-w-[1200px] flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="flex w-full flex-col gap-8 lg:w-[560px] lg:gap-[42px]">
              <div className="flex flex-col gap-[42px]">
                <div className="space-y-[6px]">
                  <h1 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.2)] bg-clip-text font-['Neiko','Satoshi',sans-serif] text-[36px] uppercase leading-[1.08] text-transparent sm:text-[42px] lg:text-[48px] lg:leading-[52px]">
                    {contactUsHeroCopy.heading}
                  </h1>
                  <p className="max-w-[560px] text-lg leading-7 text-[#c1c7cf]">
                    {contactUsHeroCopy.description}
                  </p>
                </div>

                <div className="space-y-8">
                  {contactUsHeroCopy.helpItems.map((item) => (
                    <HelpPoint
                      key={item.title}
                      title={item.title}
                      description={item.description}
                    />
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {contactOptionCards.map((card) => (
                  <ContactMiniCard
                    key={card.title}
                    icon={card.icon}
                    title={card.title}
                    value={card.value}
                  />
                ))}
              </div>
            </div>

            <div className="w-full rounded-2xl border border-[#272835] bg-[#121324] p-6 pb-8 sm:p-8 sm:pb-10 lg:w-[540px] lg:shrink-0 transition-all duration-300">
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-16 text-center">
                  <div className="relative mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#1b1c3d] border border-[#248aff] shadow-[0_0_24px_rgba(36,138,255,0.3)]">
                    <svg
                      className="h-10 w-10 text-[#5160ff] animate-[pulse_2s_infinite]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2.5"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <h2 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.35)] bg-clip-text text-[26px] font-bold uppercase leading-[1.1] text-transparent sm:text-[32px]">
                    Message Sent!
                  </h2>
                  <p className="mt-4 max-w-[400px] text-sm leading-6 text-[#a4abb8] sm:text-base">
                    Thank you for contacting TechForge Innovations. Your message has been sent successfully. Our team will get back to you shortly.
                  </p>
                  <button
                    type="button"
                    onClick={() => {
                      setFullName("");
                      setEmail("");
                      setPhoneValue("");
                      setSelectedService("");
                      setMessage("");
                      setErrors({});
                      setIsSubmitted(false);
                    }}
                    className="mt-8 inline-flex h-[45px] w-full max-w-[200px] items-center justify-center rounded-[140px] border border-[#248aff] bg-[#2424a6] px-6 text-sm capitalize text-white transition-[box-shadow,filter] duration-200 hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)]"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="space-y-[30px]">
                    <ContactInput
                      label={contactFormCopy.fullNameLabel}
                      placeholder="John"
                      value={fullName}
                      onChange={setFullName}
                      error={errors.fullName}
                    />

                    <CountryPhoneInput
                      label={contactFormCopy.phoneLabel}
                      value={phoneValue}
                      onChange={setPhoneValue}
                      error={errors.phone}
                    />

                    <ContactInput
                      label={contactFormCopy.emailLabel}
                      placeholder="example@mail.com"
                      value={email}
                      onChange={setEmail}
                      error={errors.email}
                    />

                    <ContactServicesSelect
                      label={contactFormCopy.ServicesLabel}
                      placeholder="Select Services"
                      options={contactServiceOptions}
                      value={selectedService}
                      onChange={setSelectedService}
                      error={errors.service}
                    />

                    <ContactInput
                      label={contactFormCopy.messageLabel}
                      placeholder="Enter here"
                      multiline
                      value={message}
                      onChange={setMessage}
                      error={errors.message}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="mt-[50px] inline-flex h-[47px] w-full items-center justify-center rounded-[140px] border border-[#248aff] bg-[#2424a6] px-6 text-base capitalize text-white transition-[box-shadow,filter] duration-200 hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? "Sending..." : contactFormCopy.submitLabel}
                  </button>
                </form>
              )}
            </div>
          </div>
        </SectionPaddingY72>
      </SectionPaddingX120R72>
    </section>
  );
}
