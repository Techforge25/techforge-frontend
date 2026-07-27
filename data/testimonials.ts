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
  badgeLabel: "who we work with",
  headingLine1: "We Work Best With Founders Who Want",
  headingLine2Highlight: "Honest Conversations",
  headingLine2After: "",
} as const;

export const testimonialColumns: readonly TestimonialItem[][] = [
  [
    {
      avatar: testimonialAvatar1.src,
      handle: "Founders with an idea",
      quote:
        "You know the problem is worth solving, but you need help deciding what should be tested before too much gets built.",
    },
    {
      avatar: testimonialAvatar1.src,
      handle: "First MVP teams",
      quote:
        "You are building Version 1 and want to protect runway while still getting something real in front of users.",
    },
    {
      avatar: testimonialAvatar2.src,
      handle: "Existing products",
      quote:
        "You already launched, and now you need clarity on what to improve next instead of building on instinct.",
    },
  ],
  [
    {
      avatar: testimonialAvatar3.src,
      handle: "Honest collaboration",
      quote:
        "We work best with founders who want questions, pushback, and real product conversations, not blind agreement.",
    },
    {
      avatar: testimonialAvatar4.src,
      handle: "Runway protection",
      quote:
        "We care about whether the first release creates useful learning without consuming the first version of the company.",
    },
    {
      avatar: testimonialAvatar5.src,
      handle: "Validation first",
      quote:
        "If the right answer is to slow down, simplify, or test before building, that is what we will say.",
    },
  ],
  [
    {
      avatar: testimonialAvatar6.src,
      handle: "Idea-stage founders",
      quote:
        "The right first step is not always code. Sometimes it is a sharper problem statement, clearer audience, or tighter scope.",
    },
    {
      avatar: testimonialAvatar7.src,
      handle: "MVP builders",
      quote:
        "Version 1 should help you learn from real users, not lock your budget into assumptions you cannot unwind later.",
    },
    {
      avatar: testimonialAvatar8.src,
      handle: "Product teams",
      quote:
        "After launch, evidence should decide what gets built next. That is the conversation we want to be part of.",
    },
  ],
  [
    {
      avatar: testimonialAvatar9.src,
      handle: "Straight answers",
      quote:
        "We do not pretend every idea is equally strong. We help founders separate exciting ideas from expensive distractions.",
    },
    {
      avatar: testimonialAvatar10.src,
      handle: "Decision quality",
      quote:
        "Good products are not just built faster. They are built after better decisions are made.",
    },
    {
      avatar: testimonialAvatar11.src,
      handle: "Execution with purpose",
      quote:
        "When it is time to build, we want every screen, workflow, and feature to have a reason to exist.",
    },
  ],
  [
    {
      avatar: testimonialAvatar12.src,
      handle: "Founder mindset",
      quote:
        "We work best with people who would rather hear the truth early than pay for the wrong product later.",
    },
    {
      avatar: testimonialAvatar1.src,
      handle: "Real conversations",
      quote:
        "The strongest founder relationships are built on clarity, challenge, and shared commitment to building what matters.",
    },
    {
      avatar: testimonialAvatar2.src,
      handle: "Purposeful products",
      quote:
        "The goal is not to ship the biggest Version 1. The goal is to ship the smartest one.",
    },
  ],
] as const;
