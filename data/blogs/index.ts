import type { BlogDetail } from "./types";
import { blogDetail as blog1 } from "./details/smart-website-2025";
import { blogDetail as blog2 } from "./details/ultimate-growth-engine-modern-businesses";
import { blogDetail as blog3 } from "./details/what-should-you-actually-build-in-version-1";
import { blogDetail as blog4 } from "./details/your-mvp-isnt-supposed-to-be-your-final-product";
import { blogDetail as blog5 } from "./details/how-to-validate-a-product-before-writing-code";
import { blogDetail as blog6 } from "./details/the-most-expensive-feature-is-the-one-nobody-uses";
import { blogDetail as blog7 } from "./details/when-should-you-stop-building-and-start-learning";
export const blogDetails: readonly BlogDetail[] = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
] as const;

export function getBlogBySlug(slug: string) {
  return blogDetails.find((blog) => blog.slug === slug);
}

export type { BlogCardItem, BlogDetail, BlogDetailSection } from "./types";
