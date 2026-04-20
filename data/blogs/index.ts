import sectionBg from "@/assets/images/blog/section-bg.png";
import type { BlogCardItem, BlogDetail } from "./types";
import { blogDetail as blog1 } from "./details/smart-website-2025";
import { blogDetail as blog2 } from "./details/ultimate-growth-engine-modern-businesses";
import { blogDetail as blog3 } from "./details/genai-digital-transformation";
import { blogDetail as blog4 } from "./details/build-successful-mobile-app-2025";
import { blogDetail as blog5 } from "./details/ai-transforming-businesses-2025";
import { blogDetail as blog6 } from "./details/top-5-emerging-tech-trends-2026";
import { blogDetail as blog7 } from "./details/grow-business-instagram-2025";
import { blogDetail as blog8 } from "./details/digital-revolution-techforge-innovations";
import { blogDetail as blog9 } from "./details/building-future-today-with-ai";

export const blogDetails: readonly BlogDetail[] = [
  blog1,
  blog2,
  blog3,
  blog4,
  blog5,
  blog6,
  blog7,
  blog8,
  blog9,
] as const;

export function getBlogBySlug(slug: string) {
  return blogDetails.find((blog) => blog.slug === slug);
}

export const blogPageCopy = {
  badgeLabel: "blogs",
  heading: "Our blog",
  description:
    "Articles on Starts up, tech, technology, digital marketing and google ads PPC practices.",
  listHeading: "All categories",
} as const;

export const blogFilterOptions = [
  "All Categories",
  "Starts up",
  "Tech",
  "Technology",
  "Digital marketing",
  "Google ads PPC",
] as const;

export const blogPosts: readonly BlogCardItem[] = blogDetails.map((blog) => ({
  slug: blog.slug,
  title: blog.title,
  category: blog.category,
  author: blog.author,
  date: blog.date,
  image: blog.image,
  overlay: blog.overlay,
}));

export const homeRecentBlogCards = blogPosts.slice(0, 3);

export const blogSectionBg = sectionBg.src;

export type { BlogCardItem, BlogDetail, BlogDetailSection } from "./types";
