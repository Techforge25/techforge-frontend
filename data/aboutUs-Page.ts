import sectionBg from "@/assets/images/about-us/mission-vision-history/section-bg.webp";
import missionImage from "@/assets/images/about-us/mission-vision-history/mission-image.webp";
import visionImage from "@/assets/images/about-us/mission-vision-history/vision-image.webp";
import historyImage from "@/assets/images/about-us/mission-vision-history/history-image.webp";
import funFactsSectionBg from "@/assets/images/about-us/fun-facts/section-bg.webp";
import funFactsTimelineBg from "@/assets/images/about-us/fun-facts/timeline-bg.webp";
import outstandingFeaturesBg from "@/assets/images/about-us/outstanding-features-bg.webp";
import outstandingFeaturesCenterImage from "@/assets/images/about-us/outstanding-features-center.webp";
import whyChooseVisual from "@/assets/images/left-side-whyChooseUs.webp";

export const aboutPageHeroCopy = {
  badgeLabel: "about TechForge",
  headingLine1: "We're Not Just Here to Build",
  headingLine2Highlight: "Your Product",
  headingLine2After: "",
  leadPrefix: "",
  leadText:
    "We're here to help you make better decisions about what to build.",
  ctaLabel: "let's talk about your product",
} as const;

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
      title: "Why We Started",
      description:
        "TechForge wasn't built because we wanted another software company. It was built because we kept seeing founders invest heavily in Version 1 before they had enough evidence to know what really mattered.",
      image: missionImage.src,
    },
    {
      title: "What Founders Face",
      description:
        "Too many products launch after most of the budget is already spent. Then real users show up, the market responds differently, and the team has very little runway left to adapt.",
      image: visionImage.src,
      imageFirst: true,
      cardClassName: "lg:translate-y-[42px]",
    },
    {
      title: "What We Learned",
      description:
        "Over time, we learned that good product work is not about building more by default. It is about helping founders make stronger decisions before development momentum locks in the wrong ones.",
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
  badgeLabel: "what we believe",
  headingLine1: "Better Decisions Before Better",
  headingLine2Before: "",
  headingLine2Highlight: "Software",
  headingLine2After: "",
  description:
    "This is the lens we use when we think about early products, founder risk, and what a responsible partner should actually optimize for.",
  successRate: "Rule",
  successTitle: "Challenge Assumptions",
  successDescription: "Good partners ask hard questions before they write more code.",
  visualImage: whyChooseVisual.src,
  progressItems: [
    { label: "Bigger isn't always better", value: 88 },
    { label: "Validation comes before expansion", value: 92 },
    { label: "Your MVP should help you learn", value: 95 },
    { label: "Evidence should drive Version 2", value: 91 },
    { label: "Good partners challenge assumptions", value: 96 },
  ] as const satisfies readonly AboutWhyChooseProgressItem[],
} as const;

export type AboutFunFactItem = {
  value: string;
  label: string;
};

export const aboutFunFactsSection = {
  backgroundImage: funFactsSectionBg.src,
  timelineImage: funFactsTimelineBg.src,
  badgeLabel: "our philosophy",
  headingLine1Before: "The first version of your product",
  headingLine1Highlight: "shouldn't consume",
  headingLine1After: "the first version of your company.",
  items: [] as readonly AboutFunFactItem[],
} as const;

export type AboutOutstandingFeatureItem = {
  title: string;
  description: string;
};

export const aboutOutstandingFeaturesSection = {
  backgroundImage: outstandingFeaturesBg.src,
  badgeLabel: "our rule",
  headingLine1: "Is This Helping The Founder Build",
  headingLine2Before: "A Better Company, Or Are We Simply Building",
  headingLine2Highlight: "More Software?",
  centerImage: outstandingFeaturesCenterImage.src,
  leftItems: [
    {
      title: "Decision First",
      description:
        "That question shapes how we scope products, challenge requests, and decide what deserves time, budget, and engineering effort.",
    },
    {
      title: "Founder Context",
      description:
        "If the answer is no, then the right move may be to simplify, delay, test, or rethink before more gets built.",
    },
  ] as const satisfies readonly AboutOutstandingFeatureItem[],
  rightItems: [
    {
      title: "Better Companies",
      description:
        "We are not trying to maximize feature count. We are trying to help founders build stronger companies through better product decisions.",
    },
    {
      title: "Purposeful Execution",
      description:
        "When we do build, the goal is clarity, learning, and purposeful progress, not software for its own sake.",
    },
  ] as const satisfies readonly AboutOutstandingFeatureItem[],
} as const;
