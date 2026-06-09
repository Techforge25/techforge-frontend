"use client";

import { useRef, useState } from "react";
import { CountryPhoneInput } from "@/components/ui/country-phone-input";

type JobApplicationFormProps = {
  jobTitle: string;
};

export default function JobApplicationForm({ jobTitle }: JobApplicationFormProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState<string | undefined>("");
  const [portfolioUrl, setPortfolioUrl] = useState("");
  const [linkedinUrl, setLinkedinUrl] = useState("");
  const [expectedSalary, setExpectedSalary] = useState("");
  const [resume, setResume] = useState<File | null>(null);
  const [coverLetter, setCoverLetter] = useState("");

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isDragActive, setIsDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setIsDragActive(true);
    } else if (e.type === "dragleave") {
      setIsDragActive(false);
    }
  };

  const validateFile = (file: File): string | null => {
    const validExtensions = [".pdf", ".docx", ".doc"];
    const fileExtension = file.name.substring(file.name.lastIndexOf(".")).toLowerCase();
    
    if (!validExtensions.includes(fileExtension)) {
      return "Only PDF or Word documents (.pdf, .docx, .doc) are allowed.";
    }
    
    const maxSizeBytes = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSizeBytes) {
      return "Resume size must be less than 5MB.";
    }

    return null;
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      const droppedFile = e.dataTransfer.files[0];
      const fileError = validateFile(droppedFile);
      
      if (fileError) {
        setErrors((prev) => ({ ...prev, resume: fileError }));
        setResume(null);
      } else {
        setResume(droppedFile);
        setErrors((prev) => {
          const next = { ...prev };
          delete next.resume;
          return next;
        });
      }
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const selectedFile = e.target.files[0];
      const fileError = validateFile(selectedFile);
      
      if (fileError) {
        setErrors((prev) => ({ ...prev, resume: fileError }));
        setResume(null);
      } else {
        setResume(selectedFile);
        setErrors((prev) => {
          const next = { ...prev };
          delete next.resume;
          return next;
        });
      }
    }
  };

  const triggerFileSelect = () => {
    fileInputRef.current?.click();
  };

  const removeResume = () => {
    setResume(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  const validateForm = () => {
    const nextErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      nextErrors.fullName = "Full Name is required";
    }

    if (!email.trim()) {
      nextErrors.email = "Email Address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      nextErrors.email = "Please enter a valid email address";
    }

    if (!phone || phone.trim().length < 6) {
      nextErrors.phone = "A valid phone number is required";
    }

    if (!resume) {
      nextErrors.resume = "Resume is required";
    }

    // Optional URL checks
    if (portfolioUrl.trim() && !/^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([\/\w .-]*)*\/?$/.test(portfolioUrl.trim())) {
      nextErrors.portfolioUrl = "Please enter a valid URL";
    }

    if (linkedinUrl.trim() && !/^(https?:\/\/)?(www\.)?linkedin\.com\/.*$/.test(linkedinUrl.trim())) {
      nextErrors.linkedinUrl = "Please enter a valid LinkedIn URL";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    try {
      // Mock API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubmitted(true);
    } catch (err) {
      console.error("Failed to submit career application", err);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-[#2424a6] bg-[rgba(19,19,36,0.6)] p-6 text-center sm:p-10 shadow-[0_10px_30px_rgba(0,0,12,0.4)]">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-[rgba(81,96,255,0.15)] text-[#5160ff] border border-[#2424a6]">
          <svg width="28" height="28" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <path d="M12.67 4.67L6.56 10.78L3.33 7.56" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="mt-6 text-2xl font-semibold text-white">Application Received!</h3>
        <p className="mt-3 text-sm leading-relaxed text-[#cac6dd] max-w-md mx-auto">
          Thank you for applying for the <strong className="text-white">{jobTitle}</strong> position. Our recruiting team will review your application and get in touch with you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6 rounded-2xl border border-[#272835] bg-[#121324] p-5 sm:p-8 shadow-[0_20px_50px_rgba(0,0,12,0.55)]">
      <div className="border-b border-[#272835] pb-4">
        <h3 className="text-xl font-semibold text-white">Apply for this Role</h3>
        <p className="text-xs text-[#8f96a6] mt-1">Please complete the form below. Required fields are marked with *</p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Full Name */}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-[#f5f5f5]">
            Full Name <span className="text-[#5160ff]">*</span>
          </span>
          <div className={`flex h-11 items-center rounded-xl border bg-[#1d1f38] px-3 transition-colors ${
            errors.fullName ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
          }`}>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="e.g. Ali Ahmed"
              className="w-full bg-transparent text-sm text-[#c4c4ff] placeholder:text-[#9ea7bf]/50 focus:outline-none"
            />
          </div>
          {errors.fullName && <span className="text-xs text-red-400 mt-1">{errors.fullName}</span>}
        </label>

        {/* Email Address */}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-[#f5f5f5]">
            Email Address <span className="text-[#5160ff]">*</span>
          </span>
          <div className={`flex h-11 items-center rounded-xl border bg-[#1d1f38] px-3 transition-colors ${
            errors.email ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
          }`}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="e.g. ali@domain.com"
              className="w-full bg-transparent text-sm text-[#c4c4ff] placeholder:text-[#9ea7bf]/50 focus:outline-none"
            />
          </div>
          {errors.email && <span className="text-xs text-red-400 mt-1">{errors.email}</span>}
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Phone Number (Reusing shared CountryPhoneInput) */}
        <div>
          <CountryPhoneInput
            label="Phone Number"
            value={phone}
            onChange={(val) => setPhone(val)}
            required={true}
            error={errors.phone}
          />
        </div>

        {/* Expected Salary */}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-[#f5f5f5]">Expected Salary</span>
          <div className="flex h-11 items-center rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#1d1f38] px-3 focus-within:border-[#5160ff] transition-colors">
            <input
              type="text"
              value={expectedSalary}
              onChange={(e) => setExpectedSalary(e.target.value)}
              placeholder="e.g. PKR 250,000"
              className="w-full bg-transparent text-sm text-[#c4c4ff] placeholder:text-[#9ea7bf]/50 focus:outline-none"
            />
          </div>
        </label>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        {/* Portfolio URL */}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-[#f5f5f5]">Portfolio URL</span>
          <div className={`flex h-11 items-center rounded-xl border bg-[#1d1f38] px-3 transition-colors ${
            errors.portfolioUrl ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
          }`}>
            <input
              type="text"
              value={portfolioUrl}
              onChange={(e) => setPortfolioUrl(e.target.value)}
              placeholder="e.g. https://portfolio.com"
              className="w-full bg-transparent text-sm text-[#c4c4ff] placeholder:text-[#9ea7bf]/50 focus:outline-none"
            />
          </div>
          {errors.portfolioUrl && <span className="text-xs text-red-400 mt-1">{errors.portfolioUrl}</span>}
        </label>

        {/* LinkedIn URL */}
        <label className="flex flex-col gap-1.5">
          <span className="text-sm font-medium text-[#f5f5f5]">LinkedIn URL</span>
          <div className={`flex h-11 items-center rounded-xl border bg-[#1d1f38] px-3 transition-colors ${
            errors.linkedinUrl ? "border-red-500" : "border-[rgba(255,255,255,0.2)] focus-within:border-[#5160ff]"
          }`}>
            <input
              type="text"
              value={linkedinUrl}
              onChange={(e) => setLinkedinUrl(e.target.value)}
              placeholder="e.g. https://linkedin.com/in/username"
              className="w-full bg-transparent text-sm text-[#c4c4ff] placeholder:text-[#9ea7bf]/50 focus:outline-none"
            />
          </div>
          {errors.linkedinUrl && <span className="text-xs text-red-400 mt-1">{errors.linkedinUrl}</span>}
        </label>
      </div>

      {/* Custom Drag-and-Drop Resume Dropzone */}
      <div className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-[#f5f5f5]">
          Resume Upload <span className="text-[#5160ff]">*</span>
        </span>
        <div
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
          onClick={resume ? undefined : triggerFileSelect}
          className={`flex min-h-[120px] flex-col items-center justify-center rounded-xl border border-dashed p-4 text-center transition-colors cursor-pointer ${
            errors.resume ? "border-red-500 bg-red-950/10" : "border-[rgba(255,255,255,0.2)] bg-[#1d1f38] hover:border-[#5160ff] hover:bg-[#1d1f38]/80"
          } ${isDragActive ? "border-[#5160ff] bg-[#1d1f38]/90" : ""}`}
        >
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept=".pdf,.docx,.doc"
            className="hidden"
          />

          {!resume ? (
            <div className="space-y-1.5">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="mx-auto text-[#5160ff]" aria-hidden="true">
                <path d="M12 5v14M5 12h14" strokeLinecap="round" />
              </svg>
              <p className="text-sm text-[#c4c4ff]">
                Drag & drop your resume here, or <span className="text-[#5160ff] font-semibold underline">browse</span>
              </p>
              <p className="text-xs text-[#8f96a6]">Supports PDF, DOCX, DOC up to 5MB</p>
            </div>
          ) : (
            <div className="flex items-center gap-3 rounded-lg border border-[rgba(255,255,255,0.1)] bg-[#121324] px-4 py-2 text-left">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-[#5160ff]" aria-hidden="true">
                <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z" />
                <path d="M14 2v6h6" />
              </svg>
              <div className="min-w-0 max-w-[200px] sm:max-w-[320px]">
                <p className="truncate text-sm font-medium text-white">{resume.name}</p>
                <p className="text-xs text-[#8f96a6]">{(resume.size / (1024 * 1024)).toFixed(2)} MB</p>
              </div>
              <button
                type="button"
                onClick={removeResume}
                className="ml-2 h-6 w-6 rounded-full hover:bg-[rgba(255,255,255,0.15)] flex items-center justify-center text-red-400 hover:text-red-500"
                aria-label="Remove uploaded resume"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                  <path d="M18 6L6 18M6 6l12 12" />
                </svg>
              </button>
            </div>
          )}
        </div>
        {errors.resume && <span className="text-xs text-red-400 mt-1">{errors.resume}</span>}
      </div>

      {/* Cover Letter */}
      <label className="flex flex-col gap-1.5">
        <span className="text-sm font-medium text-[#f5f5f5]">Cover Letter / Additional Notes</span>
        <div className="flex min-h-[140px] rounded-xl border border-[rgba(255,255,255,0.2)] bg-[#1d1f38] px-3 py-2.5 focus-within:border-[#5160ff] transition-colors">
          <textarea
            value={coverLetter}
            onChange={(e) => setCoverLetter(e.target.value)}
            placeholder="Tell us why you're interested in this role and what makes you a great fit..."
            className="h-full min-h-[120px] w-full resize-none bg-transparent text-sm text-[#c4c4ff] placeholder:text-[#9ea7bf]/50 focus:outline-none"
          />
        </div>
      </label>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex h-[47px] w-full items-center justify-center whitespace-nowrap rounded-[140px] border border-[#2424a6] bg-[#00000c] px-6 text-base font-semibold capitalize leading-none text-white transition-[box-shadow,filter,background-color,border-color] duration-200 hover:border-[#248aff] hover:bg-[#2424a6] hover:shadow-[0_6px_26px_0_rgba(55,118,255,0.72)] hover:[filter:brightness(1.06)] disabled:opacity-50 disabled:pointer-events-none"
      >
        {isSubmitting ? "Submitting Application..." : "Submit Application"}
      </button>
    </form>
  );
}
