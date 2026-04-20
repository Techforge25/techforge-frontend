export const faqCopy = {
  badgeLabel: "need more information",
  headingLine1: "Frequently",
  headingLine2Highlight: "asked",
  headingLine2After: "questions",
  description:
    "When we talk to clients about our IT services for their company, a few of the same questions come up.",
} as const;

export type FaqItem = {
  id: string;
  question: string;
  answer?: string;
};

export const faqItems: readonly FaqItem[] = [
  {
    id: "services",
    question: "What services does TechForge Innovations provide?",
    answer:
      "TechForge Innovations offers complete digital solutions including custom website development, mobile app development, UI/UX design, SEO, branding, and digital marketing. We handle everything from idea validation to final product launch and scaling.",
  },
  {
    id: "process",
    question: "What is your project development process?",
    answer:
      "Our process starts with understanding your business goals, followed by strategy planning, design, development, testing, and deployment. We use agile methodologies and keep you involved at every stage to ensure transparency and high-quality results.",
  },
  {
    id: "timeline",
    question: "How long does it take to complete a project?",
    answer:
      "Project timelines vary depending on complexity. A standard website may take 1â€“3 weeks, while custom platforms or mobile apps can take several weeks. We always provide a clear timeline before starting the project.",
  },
  {
    id: "pricing",
    question: "How much does a project cost?",
    answer:
      "Pricing depends on your requirements, features, and project scope. We provide flexible and customized pricing to ensure you get the best value for your investment without compromising quality.",
  },
  {
    id: "startup",
    question: "Can you help if I only have an idea?",
    answer:
      "Absolutely. We specialize in turning ideas into real products. From planning and design to development and launch, we guide you through every step to bring your vision to life.",
  },
  {
    id: "support",
    question: "Do you offer support after project completion?",
    answer:
      "Yes, we provide ongoing support and maintenance services to ensure your product stays secure, updated, and performs smoothly as your business grows.",
  },
  {
    id: "technology",
    question: "What technologies do you use?",
    answer:
      "We use modern and scalable technologies like React, Next.js, Node.js, Flutter, and WordPress, ensuring fast, secure, and future-ready solutions for your business.",
  },
  {
    id: "difference",
    question: "What makes TechForge Innovations different?",
    answer:
      "We focus on delivering not just designs or code, but real business results. Our approach combines strategy, creativity, and technology to build solutions that drive growth, improve user experience, and maximize ROI.",
  },
  {
    id: "communication",
    question: "How do you communicate during the project?",
    answer:
      "We maintain clear and regular communication through meetings, progress updates, and collaboration tools. Youâ€™ll always know the status of your project at every stage.",
  },
  {
    id: "start",
    question: "How can I get started with TechForge Innovations?",
    answer:
      "Getting started is simple. Just reach out to us with your idea or requirements, and our team will analyze your needs and provide a tailored plan to move forward.",
  },
] as const;
