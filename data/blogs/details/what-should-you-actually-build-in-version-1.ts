import card3 from "@/assets/images/blog/cards/card-3.webp";
import overlay3 from "@/assets/images/blog/cards/overlay-3.webp";
import type { BlogDetail } from "../types";

export const blogDetail: BlogDetail = {
  slug: "what-should-you-actually-build-in-version-1",
  title: "What Should You Actually Build in Version 1?",
  category: "Product Strategy",
  author: "TechForge Insights",
  date: "June 3, 2026",
  image: card3.src,
  overlay: overlay3.src,
  excerpt:
    "Version 1 should not aim to satisfy every stakeholder. It should answer the most important product question first.",
  content: [
    "Founders often scope Version 1 around ambition instead of evidence.",
    "The right first build usually looks smaller than expected and more focused than comfortable.",
    "That is not a weakness. That is product discipline.",
  ],
  sections: [
    {
      heading: "Start With The Decision",
      paragraphs: [
        "Every Version 1 should be built around a decision you need to make. If the product launches and you still do not know what to do next, the scope was wrong.",
      ],
    },
    {
      heading: "A Better Version 1 Filter",
      paragraphs: [
        "Choose features based on whether they help you learn about demand, usage, retention, or willingness to pay.",
      ],
      bullets: [
        "What core problem are we testing?",
        "Which user action matters most?",
        "What can we safely leave out for now?",
      ],
    },
    {
      heading: "What TechForge Recommends",
      paragraphs: [
        "We define Version 1 around clarity: one audience, one problem, one core workflow, and one useful learning loop after launch.",
      ],
    },
  ],
};
