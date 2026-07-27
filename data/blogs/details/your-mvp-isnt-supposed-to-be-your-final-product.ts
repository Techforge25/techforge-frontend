import card4 from "@/assets/images/blog/cards/card-4.webp";
import type { BlogDetail } from "../types";

export const blogDetail: BlogDetail = {
  slug: "your-mvp-isnt-supposed-to-be-your-final-product",
  title: "Your MVP Isn't Supposed to Be Your Final Product",
  category: "MVP",
  author: "TechForge Insights",
  date: "March 18, 2026",
  image: card4.src,
  excerpt:
    "If your MVP tries to feel complete, it usually becomes too expensive to change when real users arrive.",
  content: [
    "An MVP should be useful, not final.",
    "Its job is to generate feedback that improves decision quality, not to impress everyone with completeness.",
  ],
  sections: [
    {
      heading: "Why Founders Miss This",
      paragraphs: [
        "Founders naturally want the first release to represent the long-term vision. But early products are more valuable when they behave like learning tools.",
      ],
    },
    {
      heading: "What An MVP Should Do",
      paragraphs: [
        "It should help you observe how users behave, what they ignore, what they return to, and what they ask for after experiencing the core value.",
      ],
      bullets: [
        "Teach you what matters",
        "Expose weak assumptions",
        "Protect capital for iteration",
      ],
    },
    {
      heading: "The Better Goal",
      paragraphs: [
        "Instead of asking whether your MVP feels finished, ask whether it teaches you what Version 2 should become.",
      ],
    },
  ],
};
