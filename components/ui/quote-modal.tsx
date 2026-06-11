"use client";

import { useEffect, useRef, useState } from "react";
import { CountryPhoneInput } from "@/components/ui/country-phone-input";
import dropdownIcon from "@/assets/images/dropdown.svg";
import { quoteModalCopy, quoteServiceOptions } from "@/data/quote-modal";

function TextField({
  label,
  placeholder,
  value,
  onChange,
  multiline = false,
  error,
}: {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
  multiline?: boolean;
  error?: string;
}) {
  return (
    <label className="flex w-full flex-col gap-[6px]">
      <p className="text-[16px] font-medium leading-[24px] text-[#f5f5f5]">
        {label} <span className="text-[#5160ff]">*</span>
      </p>
      <div
        className={`flex rounded-[12px] border bg-[#1d1f38] px-[12px] transition-colors ${
          error ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
        } ${
          multiline ? "min-h-[150px] py-[10px]" : "h-[50px] items-center"
        }`}
      >
        {multiline ? (
          <textarea
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="h-full min-h-[130px] w-full resize-none bg-transparent text-[14px] leading-[20px] text-[#c4c4ff] placeholder:text-[#c4c4ff] focus:outline-none"
          />
        ) : (
          <input
            type="text"
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full bg-transparent text-[14px] leading-[20px] text-[#c4c4ff] placeholder:text-[#c4c4ff] focus:outline-none"
          />
        )}
      </div>
      {error && <span className="text-xs text-red-400 mt-1">{error}</span>}
    </label>
  );
}

function ServicesSelect({
  value,
  onChange,
  error,
}: {
  value: string;
  onChange: (value: string) => void;
  error?: string;
}) {
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!rootRef.current?.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <label className="flex w-full flex-col gap-[6px]">
      <p className="text-[16px] font-medium leading-[24px] text-[#f5f5f5]">
        {quoteModalCopy.servicesLabel} <span className="text-[#5160ff]">*</span>
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
            {value || "Select Services"}
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
            className="contact-dropdown-scroll absolute left-0 top-[calc(100%+8px)] z-50 max-h-[220px] w-full overflow-y-auto rounded-2xl border border-[rgba(124,136,188,0.35)] bg-[#121324] p-1 shadow-[0_18px_46px_rgba(0,0,0,0.5)]"
            role="listbox"
          >
            {quoteServiceOptions.map((option) => {
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
                      isSelected ? "bg-[#2424a6] text-white" : "text-[#d5d9e3] hover:bg-[#1f2140]"
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

export default function QuoteModal({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const dialogRef = useRef<HTMLDivElement | null>(null);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneValue, setPhoneValue] = useState<string | undefined>("");
  const [serviceValue, setServiceValue] = useState("");
  const [message, setMessage] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (!open) {
      setFullName("");
      setEmail("");
      setPhoneValue("");
      setServiceValue("");
      setMessage("");
      setErrors({});
      setIsSubmitted(false);
      setIsSubmitting(false);
      return;
    }

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose, open]);

  useEffect(() => {
    if (!open) return;
    dialogRef.current?.focus();
  }, [open]);

  if (!open) return null;

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
    if (!serviceValue) {
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
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 sm:p-6" aria-hidden={!open}>
      <button
        type="button"
        aria-label="Close quote modal"
        className="absolute inset-0 bg-[rgba(0,0,12,0.78)] backdrop-blur-[2px]"
        onClick={onClose}
      />

      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label="Get a quotes form"
        tabIndex={-1}
        className="contact-dropdown-scroll relative z-10 w-full max-w-[760px] max-h-[calc(100vh-40px)] overflow-y-auto rounded-[24px] border border-[rgba(78,88,167,0.45)] bg-[#121324] p-5 shadow-[0_40px_90px_rgba(0,0,0,0.55)] sm:p-8 transition-all duration-300"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.14)] bg-[#17192f] text-[#d9dcef] transition-colors hover:bg-[#222648]"
        >
          ×
        </button>

        {isSubmitted ? (
          <div className="flex flex-col items-center justify-center py-10 px-4 text-center">
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
            <h2 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.35)] bg-clip-text text-[28px] font-bold uppercase leading-[1.1] text-transparent sm:text-[34px]">
              Thank You!
            </h2>
            <p className="mt-4 max-w-[480px] text-sm leading-6 text-[#aeb5c5] sm:text-base">
              Your quote request has been received. Our team will review your project requirements and reach out to you with a detailed estimate shortly.
            </p>
            <button
              type="button"
              onClick={onClose}
              className="mt-8 inline-flex h-[45px] w-full max-w-[200px] items-center justify-center rounded-[140px] border border-[#248aff] bg-[#2424a6] px-6 text-sm capitalize text-white transition-[box-shadow,filter] duration-200 hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)]"
            >
              Close Window
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-6 pr-10 sm:mb-7">
              <h2 className="bg-gradient-to-b from-white to-[rgba(255,255,255,0.35)] bg-clip-text text-[30px] uppercase leading-[1.04] text-transparent sm:text-[40px]">
                {quoteModalCopy.heading}
              </h2>
              <p className="mt-2 max-w-[560px] text-sm leading-6 text-[#aeb5c5] sm:text-base">
                {quoteModalCopy.description}
              </p>
            </div>

            <div className="space-y-[18px] sm:space-y-[22px]">
              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <TextField
                  label={quoteModalCopy.fullNameLabel}
                  placeholder="John"
                  value={fullName}
                  onChange={setFullName}
                  error={errors.fullName}
                />
                <TextField
                  label={quoteModalCopy.emailLabel}
                  placeholder="example@mail.com"
                  value={email}
                  onChange={setEmail}
                  error={errors.email}
                />
              </div>

              <div className="grid grid-cols-1 gap-[18px] sm:grid-cols-2">
                <CountryPhoneInput
                  label={quoteModalCopy.phoneLabel}
                  value={phoneValue}
                  onChange={setPhoneValue}
                  error={errors.phone}
                />
                <ServicesSelect
                  value={serviceValue}
                  onChange={setServiceValue}
                  error={errors.service}
                />
              </div>

              <TextField
                label={quoteModalCopy.messageLabel}
                placeholder="Enter your project details"
                multiline
                value={message}
                onChange={setMessage}
                error={errors.message}
              />
            </div>

            <div className="mt-7 sm:mt-8">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex h-[47px] w-full items-center justify-center rounded-[140px] border border-[#248aff] bg-[#2424a6] px-6 text-base capitalize text-white transition-[box-shadow,filter] duration-200 hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] focus-visible:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Submitting..." : quoteModalCopy.submitLabel}
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
