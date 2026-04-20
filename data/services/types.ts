export type ServiceCardItem = {
  icon: string;
  iconClassName?: string;
  title: string;
  description: string;
  accent?: "pink" | "blue";
  href: string;
};

export type ServiceDetailSection = {
  heading: string;
  content: string;
};

export type ServiceDetail = {
  slug: string;
  icon: string;
  iconClassName?: string;
  title: string;
  description?: string;
  accent?: "pink" | "blue";
  sections?: ServiceDetailSection[];
  badgeLabel?: string;
  mainVisual?: string;
  overviewHeading?: string;
  overviewContent?: string;
  benefitsHeading?: string;
  benefitsContent?: string;
  benefits?: string[];
  goalHeading?: string;
  goalContent?: string;
  ctaLabel?: string;
};
