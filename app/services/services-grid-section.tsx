import ServicesGrid from "@/components/services/services-grid";
import type { ServiceCardItem } from "@/data/services";
import { serviceDetails } from "@/data/services";

const servicesPageCopy = {
  badgeLabel: "What we do",
  headingLine1: "From Product Thinking to Product",
  headingLine2Highlight: "Building.",
  headingLine2After: "",
  description:
    "We help founders move from uncertain ideas to focused, validated products.",
} as const;

const servicesPageCards: readonly ServiceCardItem[] = [
  {
    icon: serviceDetails[4]?.icon ?? serviceDetails[0].icon,
    iconClassName: serviceDetails[4]?.iconClassName,
    title: "Product Strategy",
    description:
      "Before we build, we think: product discovery, business model thinking, user research, feature prioritization, product roadmap.",
    accent: "blue",
    href: "/services-details/mvp-development",
  },
  {
    icon: serviceDetails[4]?.icon ?? serviceDetails[0].icon,
    iconClassName: serviceDetails[4]?.iconClassName,
    title: "Validation & MVP",
    description:
      "Build the smallest thing that can teach you something: MVP definition, validation strategy, prototype development, MVP planning.",
    accent: "pink",
    href: "/services-details/mvp-development",
  },
  {
    icon: serviceDetails[3]?.icon ?? serviceDetails[0].icon,
    iconClassName: serviceDetails[3]?.iconClassName,
    title: "Product Design",
    description:
      "Design around the user, not the feature list: UX research, user flows, wireframes, UI design, design systems.",
    accent: "blue",
    href: "/services-details/website-development",
  },
  {
    icon: serviceDetails[2]?.icon ?? serviceDetails[0].icon,
    iconClassName: serviceDetails[2]?.iconClassName,
    title: "Development",
    description:
      "When it's time to build, we build to learn: web applications, mobile applications, SaaS products, backend systems, APIs, AI products, automation.",
    accent: "pink",
    href: "/services-details/web-app-development",
  },
  {
    icon: serviceDetails[1]?.icon ?? serviceDetails[0].icon,
    iconClassName: serviceDetails[1]?.iconClassName,
    title: "Launch & Improve",
    description:
      "Launch is where learning begins: product launch, analytics, user feedback, performance monitoring, Version 2 planning, continuous improvement.",
    accent: "blue",
    href: "/services-details/ai-integrations",
  },
] as const;

export default function ServicesGridSection() {
  return <ServicesGrid copy={servicesPageCopy} cards={servicesPageCards} />;
}
