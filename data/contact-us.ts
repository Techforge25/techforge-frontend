import sectionBg from "@/assets/images/contact-us/section-bg.png";
import detailsPattern from "@/assets/images/contact-us/details.svg";
import iconLightbulb from "@/assets/images/contact-us/icons/lightbulb.svg";
import iconPhone from "@/assets/images/contact-us/icons/phone.svg";
import iconMapPin from "@/assets/images/contact-us/icons/map-pin.svg";
import iconPaperPlane from "@/assets/images/contact-us/icons/paper-plane.svg";
import iconFlagUS from "@/assets/images/contact-us/icons/flag-us.svg";
import iconChevronDown from "@/assets/images/contact-us/icons/chevron-down.svg";
import iconEye from "@/assets/images/contact-us/icons/eye.svg";
import emailImage from "@/assets/images/email.png";
import phoneImage from "@/assets/images/phone.png";
import messageImage from "@/assets/images/message.png";
import locationImage from "@/assets/images/location.png";

export const contactUsHeroCopy = {
  heading: "How can we help?",
  description:
    "Get in touch with our team for demos, onboarding support, or any questions about NextDB.",
  helpItems: [
    {
      title: "Get a Custom Demo",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      title: "Talk to Sales",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
  ],
} as const;

export const contactOptionCards = [
  {
    icon: emailImage.src,
    title: "Email Support",
    value: "info@techforrgeinovation",
  },
  {
    icon: phoneImage.src,
    title: "Sales Phone",
    value: "+1 (433) 555-0123",
  },
  {
    icon: locationImage.src,
    title: "Office Location",
    value: "karachi, pakistan",
  },
  {
    icon: messageImage.src,
    title: "General Inquiries",
    value: "hallo@nextdb.app",
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
