import type { BlogDetail } from "./types";
import { blogDetail as blog1 } from "./details/smart-website-2025";
import { blogDetail as blog2 } from "./details/ultimate-growth-engine-modern-businesses";
export const blogDetails: readonly BlogDetail[] = [
  blog1,
  blog2,
] as const;

export function getBlogBySlug(slug: string) {
  return blogDetails.find((blog) => blog.slug === slug);
}

export type { BlogCardItem, BlogDetail, BlogDetailSection } from "./types";
