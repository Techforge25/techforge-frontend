import ServicesGrid from "@/components/services/services-grid";
import type { ServiceCardItem } from "@/data/services";
import { serviceDetails } from "@/data/services";

const homeServicesCopy = {
  badgeLabel: "What we do",
  headingLine1: "When It's Time to Build,",
  headingLine2Highlight: "We Build With Purpose.",
  headingLine2After: "",
  description:
    "We keep Home focused on philosophy first. When it's time to build, we bring product strategy, MVP development, design, software engineering, SaaS systems, mobile apps, and AI automation into one focused execution process.",
  ctaLabel: "explore our services",
  ctaHref: "/services",
} as const;

const homeRecentServicesCards: readonly ServiceCardItem[] = serviceDetails
  .map((service) => {
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
  })
  .slice(0, 9);

export default function OurServicesSection() {
  return (
    <ServicesGrid copy={homeServicesCopy} cards={homeRecentServicesCards} desktopScrollGroupSize={3} />
  );
}
