import ServicesGrid from "@/components/services/services-grid";
import type { ServiceCardItem } from "@/data/services";
import { serviceDetails } from "@/data/services";

const servicesPageCopy = {
  badgeLabel: "Our latest services",
  headingLine1: "Web development,",
  headingLine2Highlight: "Mobile App, SEO,",
  headingLine2After: "and Marketing Solutions",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
  loadMoreLabel: "load more",
} as const;

const servicesPageCards: readonly ServiceCardItem[] = serviceDetails.map((service) => {
  const sourceDescription = service.description ?? "";
  const description20Words = sourceDescription.split(/\s+/).filter(Boolean).slice(0, 20).join(" ");

  return {
    icon: service.icon,
    iconClassName: service.iconClassName,
    title: service.title,
    description: description20Words,
    accent: service.accent,
    href: `/services-details/${service.slug}`,
  };
});

export default function ServicesGridSection() {
  return (
    <ServicesGrid
      copy={servicesPageCopy}
      cards={servicesPageCards}
      loadMoreConfig={{ initialCount: 8, step: 4 }}
    />
  );
}
