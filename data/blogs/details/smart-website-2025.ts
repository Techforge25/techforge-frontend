import card1 from "@/assets/images/blog/cards/card-1.webp";
import overlay1 from "@/assets/images/blog/cards/overlay-1.webp";
import type { BlogDetail } from "../types";

export const blogDetail: BlogDetail = {
  slug: "do-you-really-need-30-features-in-your-mvp",
  title: "Do You Really Need 30 Features in Your MVP?",
  category: "MVP",
  author: "TechForge Insights",
  date: "May 14, 2026",
  image: card1.src,
  overlay: overlay1.src,
  excerpt:
    "The fastest way to waste runway is to confuse a first release with a finished product.",
  content: [
    "Founders often overload Version 1 because they are trying to solve future problems before current ones are real.",
    "An MVP is not supposed to prove everything. It is supposed to help you learn the most important thing first.",
    "At TechForge, we reduce MVP scope until every feature has a reason to exist.",
  ],
  sections: [
    {
      heading: "Why This Happens",
      paragraphs: [
        "A long feature list feels safer because it creates the illusion of completeness. In reality, it usually creates more cost, slower learning, and less flexibility after launch.",
      ],
    },
    {
      heading: "What To Ask Instead",
      paragraphs: [
        "The better question is not, what can we include? The better question is, what is the smallest product that can prove whether this should exist at all?",
      ],
      bullets: [
        "Which user problem matters most right now?",
        "Which workflow creates the clearest learning signal?",
        "Which feature can wait until after real usage data exists?",
      ],
      closing:
        "If a feature does not improve your first learning loop, it probably does not belong in your MVP.",
    },
    {
      heading: "How TechForge Thinks About It",
      paragraphs: [
        "We treat early scope as a strategic decision, not a delivery checklist. A sharper MVP protects runway and gives founders more room to adapt.",
      ],
    },
  ],
};
