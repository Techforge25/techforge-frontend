import type { CSSProperties } from "react";
import client1 from "@/assets/images/clients/Client1.png";
import client2 from "@/assets/images/clients/Client2.png";
import client3 from "@/assets/images/clients/Client3.png";
import client4 from "@/assets/images/clients/Client4.png";
import client5 from "@/assets/images/clients/Client5.png";
import client6 from "@/assets/images/clients/Client6.png";
import client7 from "@/assets/images/clients/Client7.png";
import client8 from "@/assets/images/clients/Client8.png";
import client9 from "@/assets/images/clients/Client9.png";    
import client10 from "@/assets/images/clients/Client10.png";    
import client11 from "@/assets/images/clients/Client11.png";    
import client12 from "@/assets/images/clients/Client12.png";    
import client13 from "@/assets/images/clients/Client13.png";    
import client14 from "@/assets/images/clients/Client14.png";    
import client15 from "@/assets/images/clients/Client15.png";    
import client16 from "@/assets/images/clients/Client16.png";    
import client17 from "@/assets/images/clients/Client17.png";    
import client18 from "@/assets/images/clients/Client18.png";    
import client19 from "@/assets/images/clients/Client19.png";    
import client20 from "@/assets/images/clients/Client20.png";        
import client21 from "@/assets/images/clients/Client21.png";        
import staircase1 from "@/assets/images/Staircase  1.svg";
import staircase2 from "@/assets/images/Staircase  2.svg";
import staircase3 from "@/assets/images/Staircase  3.svg";
import iconClipboard from "@/assets/images/home/services/icon-clipboard.svg";
import iconLogomark from "@/assets/images/home/services/icon-logomark.svg";
import iconDesign from "@/assets/images/home/services/icon-design.svg";
import portfolioCard1 from "@/assets/images/home/portfolio/card-1.png";
import portfolioCard2 from "@/assets/images/home/portfolio/card-2.png";
import portfolioCard3 from "@/assets/images/home/portfolio/card-3.png";
import portfolioCard4 from "@/assets/images/home/portfolio/card-4.png";
import portfolioCard5 from "@/assets/images/home/portfolio/card-5.png";
import portfolioCard6 from "@/assets/images/home/portfolio/card-6.png";
import portfolioArrowCircle from "@/assets/images/home/portfolio/arrow-circle.svg";
import testimonialAvatar1 from "@/assets/images/home/testimonials/avatar-1.png";
import testimonialAvatar2 from "@/assets/images/home/testimonials/avatar-2.png";
import testimonialAvatar3 from "@/assets/images/home/testimonials/avatar-3.png";
import testimonialAvatar4 from "@/assets/images/home/testimonials/avatar-4.png";
import testimonialAvatar5 from "@/assets/images/home/testimonials/avatar-5.png";
import testimonialAvatar6 from "@/assets/images/home/testimonials/avatar-6.png";
import testimonialAvatar7 from "@/assets/images/home/testimonials/avatar-7.png";
import testimonialAvatar8 from "@/assets/images/home/testimonials/avatar-8.png";
import testimonialAvatar9 from "@/assets/images/home/testimonials/avatar-9.png";
import testimonialAvatar10 from "@/assets/images/home/testimonials/avatar-10.png";
import testimonialAvatar11 from "@/assets/images/home/testimonials/avatar-11.png";
import testimonialAvatar12 from "@/assets/images/home/testimonials/avatar-12.png";

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
  // client6.src,
  // client7.src,
  // client8.src,
  // client9.src,
  // client10.src,
  // client11.src,
  // client12.src,
  // client13.src,
  // client14.src,
  // client15.src,
  // client16.src,
  // client17.src,
  // client18.src,
  // client19.src,
  // client20.src,
  // client21.src,
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

// Our Services section data
export const ourServicesCopy = {
  badgeLabel: "Our latest services",
  headingLine1: "Web development,",
  headingLine2Highlight: "Mobile App, SEO,",
  headingLine2After: "and Marketing Solutions",
  description:
    "Discover TechForge Innovations your trusted partner for cutting edge IT solutions, software development, and digital transformation services tailored to modern businesses.",
  ctaLabel: "view all services",
} as const;

export type OurServiceCard = {
  icon: string;
  iconClassName?: string;
  title: string;
  description: string;
};

export const ourServicesCards: readonly OurServiceCard[] = [
  {
    icon: iconClipboard.src,
    title: "Mobile App Development",
    description:
      "Build secure, high-performance iOS and Android apps with user-focused designs tailored to meet your business and customer needs.",
  },
  {
    icon: iconLogomark.src,
    iconClassName: "h-[24px] w-[24px]",
    title: "Website Development",
    description:
      "We create fast, SEO-optimized websites that are fully responsive and custom-built to reflect your brand and grow your business.",
  },
  {
    icon: iconDesign.src,
    title: "UUI/UX Design",
    description:
      "We craft intuitive, user-centered UI/UX designs that enhance experience, boost engagement, and drive conversions across all platforms.",
  },
];

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

// Portfolio section data
export const portfolioCopy = {
  badgeLabel: "some of our work",
  headingLine1: "Thousands of projects",
  headingLine2Before: "have been",
  headingLine2Highlight: "completed",
  ctaLabel: "view more",
} as const;

export const portfolioFilters = [
  { key: "all", label: "all" },
  { key: "websites", label: "websites" },
  { key: "app", label: "app" },
  { key: "dashboards", label: "dashboards" },
] as const;

export type PortfolioFilterKey = (typeof portfolioFilters)[number]["key"];

export type PortfolioCardItem = {
  image: string;
  title: string;
  subtitle: string;
  arrowIcon: string;
  category: Exclude<PortfolioFilterKey, "all">;
};

export const portfolioCards: readonly PortfolioCardItem[] = [
  {
    image: portfolioCard1.src,
    title: "Neighbourly",
    subtitle: "Neighbourly website design",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard2.src,
    title: "Goat farming app",
    subtitle: "Goat farming app design",
    arrowIcon: portfolioArrowCircle.src,
    category: "app",
  },
  {
    image: portfolioCard3.src,
    title: "Admin dashboard",
    subtitle: "360 GMP admin dashboard",
    arrowIcon: portfolioArrowCircle.src,
    category: "dashboards",
  },
  {
    image: portfolioCard4.src,
    title: "E-SIM website",
    subtitle: "E-SIM website design",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
  {
    image: portfolioCard5.src,
    title: "Sass website",
    subtitle: "NextDB sass website design",
    arrowIcon: portfolioArrowCircle.src,
    category: "websites",
  },
] as const;

// FAQ section data
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
    id: "industries-1",
    question: "What industries do you serve?",
    answer:
      "We offer a wide range of digital services, including mobile app development, website development, SEO, digital marketing, graphic design, and more.",
  },
  {
    id: "services",
    question: "What services do you offer?",
    answer:
      "We offer a wide range of digital services, including mobile app development, website development, SEO, digital marketing, graphic design, and more.",
  },
  {
    id: "success",
    question: "How do you ensure project success?",
    answer:
      "We offer a wide range of digital services, including mobile app development, website development, SEO, digital marketing, graphic design, and more.",
  },
  {
    id: "industries-2",
    question: "What industries do you serve?",
    answer:
      "We offer a wide range of digital services, including mobile app development, website development, SEO, digital marketing, graphic design, and more.",
  },
  {
    id: "export",
    question: "Can I export my schema to SQL or other formats?",
    answer:
      "We offer a wide range of digital services, including mobile app development, website development, SEO, digital marketing, graphic design, and more.",
  },
] as const;

// Testimonials section data
export type TestimonialItem = {
  avatar: string;
  handle: string;
  quote: string;
};

export const testimonialsCopy = {
  badgeLabel: "Testimonials",
  headingLine1: "See what people are",
  headingLine2Highlight: "Saying",
  headingLine2After: "about us",
} as const;

export const testimonialColumns: readonly TestimonialItem[][] = [
  [
    {
      avatar: testimonialAvatar1.src,
      handle: "@cryptomaru",
      quote:
        "Hexora has completely simplified how I manage local databases. The visual builder is intuitive, and setup time is dramatically reduced",
    },
    {
      avatar: testimonialAvatar1.src,
      handle: "@blockdanny",
      quote:
        "Designing database schemas feels much clearer with Hexora. I can focus on structure without getting lost in configuration",
    },
    {
      avatar: testimonialAvatar2.src,
      handle: "@signalhunter",
      quote:
        "I appreciate how easy it is to export schemas and integrate them into my projects.",
    },
  ],
  [
    {
      avatar: testimonialAvatar3.src,
      handle: "@ethkaren",
      quote:
        "The UI is clean, well-structured, and actually enjoyable to use. Everything feels intentional.",
    },
    {
      avatar: testimonialAvatar4.src,
      handle: "@devtraderjoe",
      quote:
        "Designing database schemas feels much clearer with Hexora. I can focus on structure without getting lost in configuration",
    },
    {
      avatar: testimonialAvatar5.src,
      handle: "@noirnode",
      quote:
        "Hexora saves me hours every week. The workflow is simple, predictable, and reliable",
    },
  ],
  [
    {
      avatar: testimonialAvatar6.src,
      handle: "@btcbrenda",
      quote:
        "Managing multiple schemas used to be messy—Hexora makes it organized and easy to maintain.",
    },
    {
      avatar: testimonialAvatar7.src,
      handle: "@altcoinrookie",
      quote:
        "The visual schema builder alone makes Hexora worth it. It’s fast, clear, and flexible",
    },
    {
      avatar: testimonialAvatar8.src,
      handle: "@uxonchain",
      quote:
        "Hexora fits perfectly into my local development workflow. No unnecessary complexity",
    },
  ],
  [
    {
      avatar: testimonialAvatar9.src,
      handle: "@codetheblock",
      quote:
        "Everything feels thoughtfully designed, from the UI to the smallest interactions.",
    },
    {
      avatar: testimonialAvatar10.src,
      handle: "@fifi.rfqh",
      quote:
        "Hexora helps me move from idea to implementation much faster, especially for MVPs.",
    },
    {
      avatar: testimonialAvatar11.src,
      handle: "@eth_eli",
      quote:
        "Hexora makes local development far less painful. Switching between databases is fast and incredibly smooth.",
    },
  ],
  [
    {
      avatar: testimonialAvatar12.src,
      handle: "@codetheblock",
      quote:
        "The learning curve is minimal. I was productive within minutes of using Hexora.",
    },
    {
      avatar: testimonialAvatar1.src,
      handle: "@defidiego",
      quote:
        "Hexora gives me confidence when designing databases—I can actually see what I’m building.",
    },
    {
      avatar: testimonialAvatar2.src,
      handle: "@lunalurker",
      quote:
        "This is the kind of tool you don’t realize you need until you try it.",
    },
  ],
] as const;
