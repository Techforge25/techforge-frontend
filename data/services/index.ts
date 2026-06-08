import { serviceDetail as aiAgents } from "./details/ai-agents";
import { serviceDetail as aiIntegrations } from "./details/ai-integrations";
import type { ServiceDetail } from "./types";
import { serviceDetail as mvpDevelopment } from "./details/mvp-development";
import { serviceDetail as saasBasedProductDevelopment } from "./details/saas-based-product-development";
import { serviceDetail as webAppDevelopment } from "./details/web-app-development";
import { serviceDetail as website } from "./details/website-development";

export const serviceDetails: readonly ServiceDetail[] = [
  aiAgents,
  aiIntegrations,
  webAppDevelopment,
  website,
  mvpDevelopment,
  saasBasedProductDevelopment,
] as const;

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((item) => item.slug === slug);
}

export type { ServiceCardItem, ServiceDetail } from "./types";
