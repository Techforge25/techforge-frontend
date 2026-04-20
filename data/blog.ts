import sectionBg from "@/assets/images/blog/section-bg.png";
import card1 from "@/assets/images/blog/cards/card-1.png";
import card2 from "@/assets/images/blog/cards/card-2.png";
import card3 from "@/assets/images/blog/cards/card-3.png";
import card4 from "@/assets/images/blog/cards/card-4.png";
import card5 from "@/assets/images/blog/cards/card-5.png";
import card6 from "@/assets/images/blog/cards/card-6.png";
import card7 from "@/assets/images/blog/cards/card-7.png";
import overlay1 from "@/assets/images/blog/cards/overlay-1.png";
import overlay2 from "@/assets/images/blog/cards/overlay-2.png";
import overlay3 from "@/assets/images/blog/cards/overlay-3.png";

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

export type BlogPostItem = {
  title: string;
  category: string;
  author: string;
  date: string;
  image: string;
  overlay?: string;
};

export const blogPosts: readonly BlogPostItem[] = [
  {
    category: "Tech",
    title: "Why Every Business Needs a Smart Website in 2025",
    author: "James Laurent",
    date: "October 28, 2025",
    image: card1.src,
  },
  {
    category: "Digital marketing",
    title: "The Ultimate Growth Engine for Modern Businesses",
    author: "Alex John",
    date: "October 10, 2025",
    image: card2.src,
  },
  {
    category: "Tech",
    title: "The Power of GenAI for Smarter Digital Transformation",
    author: "Mike",
    date: "December 10, 2025",
    image: card3.src,
    overlay: overlay1.src,
  },
  {
    category: "Tech",
    title: "Build Successful Mobile App 2025",
    author: "Rayan",
    date: "Jan 28, 2025",
    image: card4.src,
  },
  {
    category: "Digital marketing",
    title: "How AI Transforming Businesses in 2025",
    author: "Ali",
    date: "October 10, 2025",
    image: card5.src,
  },
  {
    category: "Tech",
    title: "Top 5 Emerging Tech Trends in 2026",
    author: "Joseph",
    date: "December 10, 2025",
    image: card3.src,
    overlay: overlay2.src,
  },
  {
    category: "Tech",
    title: "How to Grow Your Business on Instagram in 2025",
    author: "James Laurent",
    date: "August 6, 2025",
    image: card6.src,
  },
  {
    category: "Tech",
    title: "Digital Revolution with TechForge Innovations",
    author: "James Laurent",
    date: "October 28, 2025",
    image: card7.src,
  },
  {
    category: "Tech",
    title: "Building the Future Today With AI",
    author: "James Laurent",
    date: "October 28, 2025",
    image: card3.src,
    overlay: overlay3.src,
  },
] as const;

export const blogSectionBg = sectionBg.src;
