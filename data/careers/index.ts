import { jobDetail as nodeJsDeveloper } from "./details/senior-frontend-developer";
import { jobDetail as uiUx } from "./details/ui-ux-designer";
import { jobDetail as aiEngineer } from "./details/ai-backend-engineer";
import { jobDetail as flutterDeveloper } from "./details/flutter-developer";
import { jobDetail as productManager } from "./details/product-manager";
import { jobDetail as businessDevelopment } from "./details/business-development";
import type { JobPosition } from "./types";

export const jobPositions: readonly JobPosition[] = [
  flutterDeveloper,
  nodeJsDeveloper,
  uiUx,
  productManager,
  aiEngineer,
  businessDevelopment,
] as const;

export function getJobBySlug(slug: string) {
  return jobPositions.find((job) => job.slug === slug);
}

export type { JobPosition } from "./types";
export { flutterDeveloper, nodeJsDeveloper, uiUx, productManager, aiEngineer, businessDevelopment };
