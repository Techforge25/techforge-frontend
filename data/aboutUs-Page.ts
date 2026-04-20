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
        "New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
      image: missionImage.src,
    },
    {
      title: "Vision",
      description:
        "At New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
      image: visionImage.src,
      imageFirst: true,
      cardClassName: "lg:translate-y-[42px]",
    },
    {
      title: "History",
      description:
        "At New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
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
  headingLine2Before: "15+ Years in",
  headingLine2Highlight: "Web, App &",
  headingLine2After: "Marketing",
  description:
    "Partner with TechForge Innovations for proven digital solutions. We bring 15+ years of expertise in web development, mobile apps, SEO, and digital marketing.",
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
    { value: "15", label: "Year of establishment" },
    { value: "10K", label: "Active client base" },
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
      title: "15+ Years Of Experience",
      description:
        "At New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
    },
    {
      title: "History",
      description:
        "At New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
    },
  ] as const satisfies readonly AboutOutstandingFeatureItem[],
  rightItems: [
    {
      title: "History",
      description:
        "At New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
    },
    {
      title: "History",
      description:
        "At New Media Services, we aim to conquer the impossible. We pledge a commitment to teamwork between our staff and valued clients to ensure the growth and success of everyone.",
    },
  ] as const satisfies readonly AboutOutstandingFeatureItem[],
} as const;
