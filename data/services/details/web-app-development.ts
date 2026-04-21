import iconClipboard from "@/assets/images/home/services/icon-clipboard.svg";
import serviceMainVisual from "@/assets/images/services-details/service-main-visual.webp";
import type { ServiceDetail } from "../types";

export const serviceDetail: ServiceDetail = {
  slug: "web-app-development",
  icon: iconClipboard.src,
  title: "Web App Development",
  description:
    "Develop scalable web applications with robust architecture, clean UX, and maintainable codebases.",
  badgeLabel: "Our Latest Services",
  mainVisual: serviceMainVisual.src,
  overviewHeading: "What is Web App Development?",
  overviewContent:
    "Web App Development helps businesses deliver better digital experiences with structured execution, technical reliability, and user-focused outcomes.",
  benefitsHeading: "Benefits of Web App Development",
  benefitsContent:
    "With the right Web App Development strategy, businesses improve speed, quality, and long-term scalability across their digital operations.",
  benefits: [
    "Improves delivery speed with a clear and reusable execution framework.",
    "Enhances quality and consistency across design, development, and launch.",
    "Reduces operational risk through better planning and technical standards.",
    "Improves user satisfaction through performance-focused implementation.",
    "Supports future growth with scalable architecture and maintainable systems.",
  ],
  goalHeading: "What is the Goal of Web App Development?",
  goalContent:
    "The goal of Web App Development is to create reliable, scalable, and measurable results that support business growth and improve overall user experience.",
  ctaLabel: "Get A Quotes",
};
