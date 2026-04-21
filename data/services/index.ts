import type { ServiceDetail } from "./types";
import { serviceDetail as webAppDevelopment } from "./details/web-app-development";
import { serviceDetail as website } from "./details/website-development";

export const serviceDetails: readonly ServiceDetail[] = [webAppDevelopment, website] as const;

export function getServiceBySlug(slug: string) {
  return serviceDetails.find((item) => item.slug === slug);
}

export type { ServiceCardItem, ServiceDetail } from "./types";
