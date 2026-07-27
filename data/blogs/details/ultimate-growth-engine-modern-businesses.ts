import card2 from "@/assets/images/blog/cards/card-2.webp";
import overlay2 from "@/assets/images/blog/cards/overlay-2.webp";
import type { BlogDetail } from "../types";

export const blogDetail: BlogDetail = {
  slug: "why-founders-run-out-of-money-before-product-market-fit",
  title: "Why Founders Run Out of Money Before Product-Market Fit",
  category: "Startup",
  author: "TechForge Insights",
  date: "April 29, 2026",
  image: card2.src,
  overlay: overlay2.src,
  excerpt:
    "Many startups do not fail because they built badly. They fail because they spent too much before they learned enough.",
  content: [
    "Runway disappears quickly when Version 1 is treated like a full product instead of a tool for learning.",
    "The wrong roadmap can lock a founder into expensive assumptions long before the market responds.",
    "Good product strategy is often more valuable than more development hours.",
  ],
  sections: [
    {
      heading: "The Real Pattern",
      paragraphs: [
        "Founders usually run out of money before product-market fit because they commit too early to features, systems, and plans that have not earned that level of investment yet.",
      ],
    },
    {
      heading: "Where The Budget Goes",
      paragraphs: [
        "Budget disappears into unnecessary complexity: too much scope, too many edge cases, too much polish, and too little evidence.",
      ],
      bullets: [
        "Large Version 1 builds",
        "Roadmaps based on assumptions",
        "Post-launch changes that should have been discovered earlier",
      ],
      closing:
        "The earlier you learn, the longer your capital can keep working for you.",
    },
    {
      heading: "A Better Founder Constraint",
      paragraphs: [
        "Ask whether this decision increases clarity or just increases burn. That question alone changes how teams scope, prioritize, and launch.",
      ],
    },
  ],
};
