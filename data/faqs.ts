export const faqCopy = {
  badgeLabel: "what we refuse to do",
  headingLine1: "We Don't Just",
  headingLine2Highlight: "Say Yes",
  headingLine2After: "",
  description:
    "Before you build more, let's figure out what you actually need.",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer?: string;
};

export const faqItems: readonly FaqItem[] = [
  {
    id: "services",
    question: "Will you build features just because they are on a list?",
    answer:
      "No. We want to understand what the feature is supposed to prove, change, or unlock before we recommend building it.",
  },
  {
    id: "process",
    question: "Will you encourage us to spend everything on Version 1?",
    answer:
      "No. Your first release should create learning and momentum, not consume the first version of your company.",
  },
  {
    id: "timeline",
    question: "Will you tell us every idea is a good idea?",
    answer:
      "No. Part of our role is to challenge weak assumptions early so your budget goes toward stronger decisions.",
  },
  {
    id: "pricing",
    question: "Do you operate like order-taking developers?",
    answer:
      "No. We collaborate as product-minded partners who care about the business outcome, not just the delivery checklist.",
  },
  {
    id: "startup",
    question: "Can you help if we only have an idea?",
    answer:
      "Yes. Early-stage founders are exactly where disciplined product thinking has the highest leverage.",
  },
  {
    id: "support",
    question: "Do you help after launch too?",
    answer:
      "Yes. Launch is where real evidence starts showing up, and that is when smart iteration becomes valuable.",
  },
  {
    id: "technology",
    question: "Do you start with code?",
    answer:
      "Not by default. We start with the founder, customer, problem, and validation path. Code is one of the last steps.",
  },
  {
    id: "difference",
    question: "What makes TechForge different?",
    answer:
      "We focus on reducing expensive product mistakes before development momentum makes them harder to fix.",
  },
  {
    id: "communication",
    question: "Can you help validate the idea before development?",
    answer:
      "Yes. Product discovery and validation are a core part of our process.",
  },
  {
    id: "start",
    question: "How do we get started?",
    answer:
      "Start with a conversation about the product, the customer, and what you are trying to learn before more gets built.",
  },
] as const;
