import testimonialAvatar1 from "@/assets/images/home/testimonials/avatar-1.webp";
import testimonialAvatar2 from "@/assets/images/home/testimonials/avatar-2.webp";
import testimonialAvatar3 from "@/assets/images/home/testimonials/avatar-3.webp";
import testimonialAvatar4 from "@/assets/images/home/testimonials/avatar-4.webp";
import testimonialAvatar5 from "@/assets/images/home/testimonials/avatar-5.webp";
import testimonialAvatar6 from "@/assets/images/home/testimonials/avatar-6.webp";
import testimonialAvatar7 from "@/assets/images/home/testimonials/avatar-7.webp";
import testimonialAvatar8 from "@/assets/images/home/testimonials/avatar-8.webp";
import testimonialAvatar9 from "@/assets/images/home/testimonials/avatar-9.webp";
import testimonialAvatar10 from "@/assets/images/home/testimonials/avatar-10.webp";
import testimonialAvatar11 from "@/assets/images/home/testimonials/avatar-11.webp";
import testimonialAvatar12 from "@/assets/images/home/testimonials/avatar-12.webp";

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
        "Managing multiple schemas used to be messyâ€”Hexora makes it organized and easy to maintain.",
    },
    {
      avatar: testimonialAvatar7.src,
      handle: "@altcoinrookie",
      quote:
        "The visual schema builder alone makes Hexora worth it. Itâ€™s fast, clear, and flexible",
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
        "Hexora gives me confidence when designing databasesâ€”I can actually see what Iâ€™m building.",
    },
    {
      avatar: testimonialAvatar2.src,
      handle: "@lunalurker",
      quote:
        "This is the kind of tool you donâ€™t realize you need until you try it.",
    },
  ],
] as const;
