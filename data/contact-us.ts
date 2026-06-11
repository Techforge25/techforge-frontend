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
  heading: "We're Here to Help You Grow",
  description:
    "From web development to custom software solutions, let's discuss how TechForge Innovations can help achieve your goals.",
  helpItems: [
    {
      title: "Project Consultation",
      description:
        "Discuss your ideas, requirements, and business goals with our experts to find the right digital solution.",
    },
    {
      title: "Dedicated Support",
      description:
        "Get assistance with technical questions, ongoing projects, service inquiries, or platform-related support.",
    },
  ],
} as const;

export const contactOptionCards = [
  {
    icon: emailImage.src,
    title: "Email Support",
    value: "info@techforrgeinovation.com",
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
  fullNameLabel: "Full Name",
  phoneLabel: "Phone Number",
  emailLabel: "Email Address",
  ServicesLabel: "Services",
  messageLabel: "Message",
  privacyLabel: "Privacy policy",
  privacyText:
    "I’m okay with receiving follow-up emails and updates from NextDB. I can unsubscribe anytime.",
  submitLabel: "Get A Quotes",
} as const;

export const contactServiceOptions = [
  "Web Development",
  "Mobile App Development",
  "UI/UX Design",
  "SEO Optimization",
  "Digital Marketing",
  "Branding",
  "E-commerce Solutions",
  "Custom Software Development",
] as const;

export const contactUsAssets = {
  sectionBg: sectionBg.src,
  detailsPattern: detailsPattern.src,
  flagUS: iconFlagUS.src,
  chevronDown: iconChevronDown.src,
  eye: iconEye.src,
} as const;
