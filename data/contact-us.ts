import sectionBg from "@/assets/images/contact-us/section-bg.webp";
import detailsPattern from "@/assets/images/contact-us/details.svg";
import iconLightbulb from "@/assets/images/contact-us/icons/lightbulb.svg";
import iconPhone from "@/assets/images/contact-us/icons/phone.svg";
import iconMapPin from "@/assets/images/contact-us/icons/map-pin.svg";
import iconPaperPlane from "@/assets/images/contact-us/icons/paper-plane.svg";
import iconFlagUS from "@/assets/images/contact-us/icons/flag-us.svg";
import iconChevronDown from "@/assets/images/contact-us/icons/chevron-down.svg";
import iconEye from "@/assets/images/contact-us/icons/eye.svg";
import emailImage from "@/assets/images/email.webp";
import phoneImage from "@/assets/images/phone.webp";
import messageImage from "@/assets/images/message.webp";
import locationImage from "@/assets/images/location.webp";

export const contactUsHeroCopy = {
  heading: "Have a Product Idea? Let's Talk Before You Build It.",
  description:
    "Tell us what you're thinking about. You don't need a complete specification or a finalized roadmap. We'll start by understanding the problem, the customer, and what you're trying to achieve.",
  helpItems: [
    {
      title: "Start With The Problem",
      description:
        "We begin by understanding the product idea, the customer, and the decision you need to make before more gets built.",
    },
    {
      title: "Talk Before You Build",
      description:
        "Whether you're just validating an idea or already shaping an MVP, we'll help clarify the next smartest move.",
    },
  ],
} as const;

export const contactOptionCards = [
  {
    icon: emailImage.src,
    title: "Email Support",
    value: "info@techforgeinnovations.com",
  },
  {
    icon: phoneImage.src,
    title: "Sales Phone",
    value: "+92 370 2816085",
  },
  {
    icon: locationImage.src,
    title: "Office Location",
    value: "karachi, pakistan",
  },
  {
    icon: messageImage.src,
    title: "General Inquiries",
    value: "hello@techforgeinnovation.com",
  },
] as const;

export const contactFormCopy = {
  fullNameLabel: "Name",
  emailLabel: "Work Email",
  companyLabel: "Company / Startup",
  productLabel: "What are you building?",
  journeyLabel: "Where are you in the journey?",
  helpLabel: "What would you like help with?",
  budgetLabel: "Estimated Budget",
  messageLabel: "Message",
  submitLabel: "Start the Conversation",
} as const;

export const contactJourneyOptions = [
  "Just an idea",
  "Validating an idea",
  "Planning an MVP",
  "Already have an MVP",
  "Existing product",
] as const;

export const contactHelpOptions = [
  "Product strategy",
  "Validation & MVP planning",
  "UX / UI design",
  "Web development",
  "Mobile app development",
  "AI & automation",
  "Launch & improvement",
] as const;

export const contactBudgetOptions = [
  "Under $5k",
  "$5k - $15k",
  "$15k - $30k",
  "$30k - $60k",
  "$60k+",
] as const;

export const contactUsAssets = {
  sectionBg: sectionBg.src,
  detailsPattern: detailsPattern.src,
  flagUS: iconFlagUS.src,
  chevronDown: iconChevronDown.src,
  eye: iconEye.src,
} as const;
