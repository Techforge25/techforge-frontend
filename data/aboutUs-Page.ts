import sectionBg from "@/assets/images/about-us/mission-vision-history/section-bg.webp";
import missionImage from "@/assets/images/about-us/mission-vision-history/mission-image.webp";
import visionImage from "@/assets/images/about-us/mission-vision-history/vision-image.webp";
import historyImage from "@/assets/images/about-us/mission-vision-history/history-image.webp";
import funFactsSectionBg from "@/assets/images/about-us/fun-facts/section-bg.webp";
import funFactsTimelineBg from "@/assets/images/about-us/fun-facts/timeline-bg.webp";
import outstandingFeaturesBg from "@/assets/images/about-us/outstanding-features-bg.webp";
import outstandingFeaturesCenterImage from "@/assets/images/about-us/outstanding-features-center.webp";
import whyChooseVisual from "@/assets/images/left-side-whyChooseUs.webp";

export type AboutMissionVisionHistoryItem = {
  title: string;
  description: string;
  image: string;
  imageFirst?: boolean;
  cardClassName?: string;
};

export const aboutMissionVisionHistorySection = {
  backgroundImage: sectionBg.src,
  cards: [
    {
      title: "Our Mission",
      description:
        "Our mission is to empower businesses through innovative technology solutions that drive growth, efficiency, and long-term success. We are committed to delivering high-quality digital products, exceptional user experiences, and reliable support that help our clients thrive in an ever-evolving digital world.",
      image: missionImage.src,
    },
    {
      title: "Vision",
      description:
        "Our vision is to become a globally recognized technology partner known for transforming ideas into impactful digital solutions. We strive to lead innovation by creating scalable, future-ready products that help businesses adapt, compete, and succeed in the modern marketplace.",
      image: visionImage.src,
      imageFirst: true,
      cardClassName: "lg:translate-y-[42px]",
    },
    {
      title: "History",
      description:
        "TechForge Innovations was founded with a vision to help businesses grow through innovative digital solutions. Over the years, we have evolved into a trusted technology partner, delivering web, mobile, and custom software solutions across diverse industries. Our journey is driven by innovation, quality, and long-term client success. ",
      image: historyImage.src,
    },
  ] as const satisfies readonly AboutMissionVisionHistoryItem[],
} as const;

export type AboutWhyChooseProgressItem = {
  label: string;
  value: number;
};

export const aboutWhyChooseSection = {
  backgroundImage: sectionBg.src,
  badgeLabel: "why choose us",
  headingLine1: "Trusted Digital Experts",
  headingLine2Before: "10+ Years in",
  headingLine2Highlight: "Web, App &",
  headingLine2After: "Marketing",
  description:
    "Partner with TechForge Innovations for proven digital solutions. We bring 10+ years of expertise in web development, mobile apps, SEO, and digital marketing.",
  successRate: "94%",
  successTitle: "Success Rate",
  successDescription: "We help you achieve your goals",
  visualImage: whyChooseVisual.src,
  progressItems: [
    { label: "Mobile App Development", value: 90 },
    { label: "Web Development", value: 95 },
    { label: "Digital Marketing", value: 98 },
  ] as const satisfies readonly AboutWhyChooseProgressItem[],
} as const;

export type AboutFunFactItem = {
  value: string;
  label: string;
};

export const aboutFunFactsSection = {
  backgroundImage: funFactsSectionBg.src,
  timelineImage: funFactsTimelineBg.src,
  badgeLabel: "fun facts about our company",
  headingLine1Before: "Our Success",
  headingLine1Highlight: "Rate",
  headingLine1After: "is shown by numbers",
  // headingLine2: "numbers",
  items: [
    { value: "10", label: "Year of establishment" },
    { value: "1K", label: "Active client base" },
    { value: "4.8", label: "Success rate" },
  ] as const satisfies readonly AboutFunFactItem[],
} as const;

export type AboutOutstandingFeatureItem = {
  title: string;
  description: string;
};

export const aboutOutstandingFeaturesSection = {
  backgroundImage: outstandingFeaturesBg.src,
  badgeLabel: "outstanding it features",
  headingLine1: "What Sets Techforge",
  headingLine2Before: "Innovations",
  headingLine2Highlight: "Apart",
  centerImage: outstandingFeaturesCenterImage.src,
  leftItems: [
    {
      title: "Innovation-Driven Solutions",
      description:
        "We combine modern technologies, strategic thinking, and creative problem-solving to deliver innovative solutions that help businesses grow and stay competitive.",
    },
    {
      title: "Client-Centric Approach",
      description:
        "We take the time to understand your unique goals and challenges, ensuring every solution is tailored to your business needs.",
    },
  ] as const satisfies readonly AboutOutstandingFeatureItem[],
  rightItems: [
    {
      title: "Skilled & Experienced Team",
      description:
        "Our team of designers, developers, and digital specialists works collaboratively to build high-quality solutions that deliver real results.",
    },
    {
      title: "Quality & Long-Term Support",
      description:
        "From initial planning to ongoing maintenance, we focus on delivering reliable, scalable solutions backed by dedicated support.",
    },
  ] as const satisfies readonly AboutOutstandingFeatureItem[],
} as const;
