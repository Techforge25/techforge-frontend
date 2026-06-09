import { jobDetail as seniorFrontend } from "./details/senior-frontend-developer";
import { jobDetail as uiUx } from "./details/ui-ux-designer";
import { jobDetail as aiBackend } from "./details/ai-backend-engineer";
import type { JobPosition } from "./types";

export const jobPositions: readonly JobPosition[] = [
  seniorFrontend,
  uiUx,
  aiBackend,
] as const;

export function getJobBySlug(slug: string) {
  return jobPositions.find((job) => job.slug === slug);
}

export type { JobPosition } from "./types";
export { seniorFrontend, uiUx, aiBackend };
