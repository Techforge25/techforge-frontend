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
  badgeLabel: "tecnforge innovations",
  headingLine1: "Future ready it solution",
  headingLine2Before: "and digital",
  headingLine2Highlight: "services",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
} as const;

// About Us section data
export const aboutUsCopy = {
  badgeLabel: "about us",
  headingLine1: "Expert Digital Solutions &",
  headingLine2Highlight: "Creative Tech",
  headingLine2After: "Team",
  leadPrefix: "Discover TechForge Innovations",
  leadText:
    "a team of creative developers, marketers, and designers with 15+ years of experience delivering websites, mobile apps, SEO, and digital solutions that drive success.",
  ctaLabel: "learn more",
} as const;

// Why Choose Us section data
export const whyChooseUsCopy = {
  badgeLabel: "why choose us",
  headingLine1: "Trusted Digital Experts",
  headingLine2Before: "15+ Years in",
  headingLine2Highlight: "Web, App",
  headingLine2After: "& Marketing",
  description:
    "Partner with TechForge Innovations for proven digital solutions. We bring 15+ years of expertise in web development, mobile apps, SEO, and digital marketing.",
  successRate: "94%",
  successTitle: "Success Rate",
  successDescription: "We help you achieve your goals",
} as const;

// Our Work Process section timeline data
export const processSteps = [
  {
    id: "1",
    title: "Discovery & Strategy",
    description: "Understanding your goals to create a tailored pla",
    left: "10.28%",
    textClassName: "top-[220px] -translate-x-[42px]",
    numberClassName: "top-[56px] -translate-x-1/2",
    stemClassName: "top-[152px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0.95)_0%,rgba(80,95,251,0.18)_65%,rgba(80,95,251,0)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[62px] w-[110px]",
  },
  {
    id: "2",
    title: "Discovery & Strategy",
    description: "Understanding your goals to create a tailored pla",
    left: "35.42%",
    textClassName: "top-[20px] -translate-x-[40px]",
    numberClassName: "top-[197px] -translate-x-1/2",
    stemClassName: "top-[98px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0)_0%,rgba(80,95,251,0.18)_35%,rgba(80,95,251,0.95)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[86px] w-[150px]",
  },
  {
    id: "3",
    title: "Discovery & Strategy",
    description: "Understanding your goals to create a tailored pla",
    left: "63.01%",
    textClassName: "top-[20px] -translate-x-[40px]",
    numberClassName: "top-[197px] -translate-x-1/2",
    stemClassName: "top-[98px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0)_0%,rgba(80,95,251,0.18)_35%,rgba(80,95,251,0.95)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[86px] w-[150px]",
  },
  {
    id: "4",
    title: "Discovery & Strategy",
    description: "Understanding your goals to create a tailored pla",
    left: "86.11%",
    textClassName: "top-[220px] -translate-x-[48px]",
    numberClassName: "top-[56px] -translate-x-1/2",
    stemClassName: "top-[152px]",
    stemGradient:
      "bg-[linear-gradient(180deg,rgba(80,95,251,0.95)_0%,rgba(80,95,251,0.18)_65%,rgba(80,95,251,0)_100%)]",
    glowClassName: "left-1/2 top-[152px] h-[62px] w-[110px]",
  },
] as const;


