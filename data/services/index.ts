import type { ServiceCardItem, ServiceDetail } from "./types";
import serviceMainVisual from "@/assets/images/services-details/service-main-visual.png";
import { serviceDetail as mobile_app_development } from "./details/mobile-app-development";
import { serviceDetail as website_development } from "./details/website-development";
import { serviceDetail as ui_ux_design } from "./details/ui-ux-design";
import { serviceDetail as digital_marketing } from "./details/digital-marketing";
import { serviceDetail as seo_optimization } from "./details/seo-optimization";
import { serviceDetail as brand_identity_design } from "./details/brand-identity-design";
import { serviceDetail as web_app_development } from "./details/web-app-development";
import { serviceDetail as e_commerce_solutions } from "./details/e-commerce-solutions";
import { serviceDetail as landing_page_design } from "./details/landing-page-design";
import { serviceDetail as social_media_marketing } from "./details/social-media-marketing";
import { serviceDetail as google_ads_management } from "./details/google-ads-management";
import { serviceDetail as product_design } from "./details/product-design";
import { serviceDetail as cms_development } from "./details/cms-development";
import { serviceDetail as api_integration } from "./details/api-integration";
import { serviceDetail as conversion_optimization } from "./details/conversion-optimization";

export const serviceDetails: readonly ServiceDetail[] = [
  mobile_app_development,
  website_development,
  ui_ux_design,
  digital_marketing,
  seo_optimization,
  brand_identity_design,
  web_app_development,
  e_commerce_solutions,
  landing_page_design,
  social_media_marketing,
  google_ads_management,
  product_design,
  cms_development,
  api_integration,
  conversion_optimization,
] as const;

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((item) => item.slug === slug);
}

export const serviceDetailPageDefaults = {
  badgeLabel: "Our Latest Services",
  mainVisual: serviceMainVisual.src,
  overviewHeading: "What is This Service?",
  overviewContent:
    "This service is designed to deliver practical outcomes through modern product execution, technical quality, and user-focused experience.",
  benefitsHeading: "Benefits",
  benefits: [
    "Increased Accessibility: Keeps users connected to your services anytime, anywhere.",
    "Enhanced User Engagement: Push notifications and in-app features keep users active.",
    "Brand Visibility: Strengthens your brand presence directly on users' devices.",
    "Revenue Generation: Offers monetization options like in-app purchases or ads.",
    "Data Insights: Collects valuable user data to inform business decisions.",
  ],
  goalHeading: "What is the Goal?",
  goalContent:
    "The goal is to provide responsive, scalable, and high-performance digital solutions that solve business problems and improve customer engagement.",
} as const;

export const homeServicesCopy = {
  badgeLabel: "Our latest services",
  headingLine1: "Web development,",
  headingLine2Highlight: "Mobile App, SEO,",
  headingLine2After: "and Marketing Solutions",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
  ctaLabel: "view all services",
} as const;

export const servicesPageCopy = {
  badgeLabel: "Our latest services",
  headingLine1: "Web development,",
  headingLine2Highlight: "Mobile App, SEO,",
  headingLine2After: "and Marketing Solutions",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
  loadMoreLabel: "load more",
} as const;

export const servicesPageCards: readonly ServiceCardItem[] = serviceDetails.map((service) => ({
  icon: service.icon,
  iconClassName: service.iconClassName,
  title: service.title,
  description: service.description,
  accent: service.accent,
  href: `/services-details/${service.slug}`,
}));

export const homeRecentServicesCards = servicesPageCards.slice(0, 3);

export type { ServiceCardItem, ServiceDetail } from "./types";
