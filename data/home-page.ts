import type { CSSProperties } from "react";
import client1 from "@/assets/images/clients/Client1.webp";
import client2 from "@/assets/images/clients/Client2.webp";
import client3 from "@/assets/images/clients/Client3.webp";
import client4 from "@/assets/images/clients/Client4.webp";
import client5 from "@/assets/images/clients/Client5.webp";
import client6 from "@/assets/images/clients/Client6.webp";
import client7 from "@/assets/images/clients/Client7.webp";
import client8 from "@/assets/images/clients/Client8.webp";
import client9 from "@/assets/images/clients/Client9.webp";
import client10 from "@/assets/images/clients/Client10.webp";
import client11 from "@/assets/images/clients/Client11.webp";
import client12 from "@/assets/images/clients/Client12.webp";
import client13 from "@/assets/images/clients/Client13.webp";
import client14 from "@/assets/images/clients/Client14.webp";
import client15 from "@/assets/images/clients/Client15.webp";
import client16 from "@/assets/images/clients/Client16.webp";
import client17 from "@/assets/images/clients/Client17.webp";
import client18 from "@/assets/images/clients/Client18.webp";
import client19 from "@/assets/images/clients/Client19.webp";
import client20 from "@/assets/images/clients/Client20.webp";
import client21 from "@/assets/images/clients/Client21.webp";
import staircase1 from "@/assets/images/Staircase  1.svg";
import staircase2 from "@/assets/images/Staircase  2.svg";
import staircase3 from "@/assets/images/Staircase  3.svg";

// Home Hero section data
export type HeroStairLayer = {
  src: string;
  className: string;
};

export const heroClients = [
  client1.src,
  client2.src,
  client3.src,
  client4.src,
  client5.src,
  client6.src,
  client7.src,
  client8.src,
  client9.src,
  client10.src,
  client11.src,
  client12.src,
  client13.src,
  client14.src,
  client15.src,
  client16.src,
  client17.src,
  client18.src,
  client19.src,
  client20.src,
  client21.src,
] as const;

export const heroChipStyles = {
  green: {
    "--chip-gradient":
      "linear-gradient(90deg, #2424A6 16.648%, #17B45D 103.41%)",
  } as CSSProperties,
  pink: {
    "--chip-gradient":
      "linear-gradient(90deg, #2424A6 16.648%, #B4177A 103.41%)",
  } as CSSProperties,
  cyan: {
    "--chip-gradient":
      "linear-gradient(90deg, #2424A6 16.547%, #09FFB1 135.13%)",
  } as CSSProperties,
  yellow: {
    "--chip-gradient":
      "linear-gradient(90deg, #2424A6 2.0396%, #FFBB00 114.14%)",
  } as CSSProperties,
} as const;

export const heroDesktopStairs: readonly HeroStairLayer[] = [
  { src: staircase1.src, className: "left-0 top-0 h-[504px] w-[113px]" },
  {
    src: staircase2.src,
    className: "left-[110px] top-[127.93px] h-[376px] w-[123px]",
  },
  {
    src: staircase3.src,
    className: "left-[230px] top-[255px] h-[249px] w-[123px]",
  },
];

export const heroMobileStairs: readonly HeroStairLayer[] = [
  { src: staircase1.src, className: "bottom-0 left-0 h-[210px] w-[46px]" },
  { src: staircase2.src, className: "bottom-0 left-[42px] h-[157px] w-[50px]" },
  { src: staircase3.src, className: "bottom-0 left-[84px] h-[104px] w-[50px]" },
];

export const heroTabletStairs: readonly HeroStairLayer[] = [
  { src: staircase1.src, className: "bottom-0 left-0 h-[260px] w-[56px]" },
  { src: staircase2.src, className: "bottom-0 left-[52px] h-[194px] w-[60px]" },
  {
    src: staircase3.src,
    className: "bottom-0 left-[106px] h-[128px] w-[60px]",
  },
];

export const heroDesktopChips = [
  {
    label: "UX/UI design",
    className:
      "pointer-events-none absolute left-[106px] top-[442px] rotate-[26deg]",
    style: heroChipStyles.green,
  },
  {
    label: "web development",
    className:
      "pointer-events-none absolute left-[226px] top-[575px] rotate-[22deg]",
    style: heroChipStyles.pink,
  },
  {
    label: "Mobile app",
    className:
      "pointer-events-none absolute right-[106px] top-[443px] -rotate-[30deg]",
    style: heroChipStyles.cyan,
  },
  {
    label: "software development",
    className:
      "pointer-events-none absolute right-[220px] top-[576px] -rotate-[31deg]",
    style: heroChipStyles.yellow,
  },
] as const;

export const heroCopy = {
  badgeLabel: "Techforge innovations",
  headingLine1: "Build Less.",
  headingLine2Before: "Learn Faster.",
  headingLine2Highlight: "Build What Matters.",
  description:
    "We help founders turn ideas into focused, validated products before they spend their entire budget building the wrong thing.",
} as const;

// About Us section data
export const aboutUsCopy = {
  badgeLabel: "why TechForge exists",
  headingLine1: "We Help Founders Avoid",
  headingLine2Highlight: "Expensive Product Decisions",
  headingLine2After: "",
  leadPrefix: "",
  leadText:
    "We've seen founders spend most of their budget building Version 1, only to discover after launch that the market wanted something different. We made mistakes ourselves too. Over time, we learned that successful products are created by making better decisions before building.",
  ctaLabel: "explore our approach",
} as const;

// Why Choose Us section data
export const whyChooseUsCopy = {
  badgeLabel: "the problem",
  headingLine1: "Most Products Don't Fail Because They Were Built",
  headingLine2Highlight: "Badly",
  description:
    "They fail because too much was built too early. Founders invest heavily in Version 1, launch with limited runway, and discover that real users want something different. By then, the budget is gone, the roadmap is locked, and there is little room left to adapt.",
  successRate: "Timing",
  successTitle: "Is The Real Risk",
  successDescription: "The software isn't always the problem. The timing of the decisions is.",
} as const;

// Our Work Process section timeline data
export const processSteps = [
  {
    id: "1",
    title: "Understand",
    description: "Learn who the founder is, what matters, and what constraints exist.",
    left: "5.5%",
    textClassName: "top-[228px] -translate-x-[14px]",
    numberClassName: "top-[56px] -translate-x-1/2",
    stemClassName: "top-[152px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0.95)_0%,rgba(80,95,251,0.18)_65%,rgba(80,95,251,0)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[62px] w-[110px]",
  },
  {
    id: "2",
    title: "Challenge",
    description: "Question assumptions before they become expensive product decisions.",
    left: "18%",
    textClassName: "top-[6px] -translate-x-[8px]",
    numberClassName: "top-[197px] -translate-x-1/2",
    stemClassName: "top-[98px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0)_0%,rgba(80,95,251,0.18)_35%,rgba(80,95,251,0.95)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[86px] w-[150px]",
  },
  {
    id: "3",
    title: "Validate",
    description: "Test the idea against customers, demand, and real-world signals.",
    left: "30.5%",
    textClassName: "top-[6px] -translate-x-[18px]",
    numberClassName: "top-[197px] -translate-x-1/2",
    stemClassName: "top-[98px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0)_0%,rgba(80,95,251,0.18)_35%,rgba(80,95,251,0.95)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[86px] w-[150px]",
  },
  {
    id: "4",
    title: "Define",
    description: "Reduce scope into the smallest product that can teach something useful.",
    left: "43%",
    textClassName: "top-[228px] -translate-x-[18px]",
    numberClassName: "top-[56px] -translate-x-1/2",
    stemClassName: "top-[152px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0.95)_0%,rgba(80,95,251,0.18)_65%,rgba(80,95,251,0)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[62px] w-[110px]",
  },
  {
    id: "5",
    title: "Build",
    description: "Start development only after the product has a clear purpose and direction.",
    left: "59%",
    textClassName: "top-[228px] -translate-x-[24px]",
    numberClassName: "top-[56px] -translate-x-1/2",
    stemClassName: "top-[152px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0.95)_0%,rgba(80,95,251,0.18)_65%,rgba(80,95,251,0)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[62px] w-[110px]",
  },
  {
    id: "6",
    title: "Launch",
    description: "Release deliberately so Version 1 creates signal, not just activity.",
    left: "75%",
    textClassName: "top-[6px] -translate-x-[24px]",
    numberClassName: "top-[197px] -translate-x-1/2",
    stemClassName: "top-[98px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0)_0%,rgba(80,95,251,0.18)_35%,rgba(80,95,251,0.95)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[86px] w-[150px]",
  },
  {
    id: "7",
    title: "Learn",
    description: "Use behavior and feedback to decide what deserves more investment.",
    left: "87%",
    textClassName: "top-[6px] -translate-x-[30px]",
    numberClassName: "top-[197px] -translate-x-1/2",
    stemClassName: "top-[98px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0)_0%,rgba(80,95,251,0.18)_35%,rgba(80,95,251,0.95)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[86px] w-[150px]",
  },
  {
    id: "8",
    title: "Improve",
    description: "Build what comes next with evidence instead of assumptions.",
    left: "98%",
    textClassName: "top-[228px] -translate-x-[72px]",
    numberClassName: "top-[56px] -translate-x-1/2",
    stemClassName: "top-[152px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0.95)_0%,rgba(80,95,251,0.18)_65%,rgba(80,95,251,0)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[62px] w-[110px]",
  },
] as const;
