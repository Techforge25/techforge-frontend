import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import type { PortfolioDetail } from "../types";
import testimg from "@/assets/images/left-side-whyChooseUs.webp";

export const portfolioDetail: PortfolioDetail = {
  slug: "test",
  projectName: "Test",
  category: "Test",
  heroImage: testimg.src,
  heroBadgeLabel: "Test",
  
  briefTitle: "Project Brief",
  briefDescription:
    "Creating a seamless digital ecosystem for local neighborhoods to thrive. Neighbourly was designed to bridge the gap between physical proximity and digital collaboration, fostering stronger, safer, and more connected communities through intuitive design.",
  
    challengeTitle: "The Challenge",
  challenges: [
    "Fragmented communication across multiple social platforms.",
    "Lack of verification leading to safety concerns in local groups.",
    "Cluttered UI hindering elderly residents from participating.",
  ],

  solutionTitle: "The Solution",
  solutionDescription:
    "TechForge Innovations engineered a hyper-local social infrastructure that prioritizes trust and clarity. We built a unified platform that replaces friction with flow.",
  solutionFeatures: [
    "Interactive Map Interface",
    "Real-time Community Alerts",
    "Verified User Profiles",
    "Local Governance Tools",
  ],

  resultsHeading: "Results & Impact",
  results: [
    { value: "40%", label: "Engagement increase" },
    { value: "85k", label: "Active Neighbors" },
    { value: "98%", label: "Trust Rating" },
  ],
  techStackHeading: "Technology Stack",
  techStacks: [
    { id: "frontend", label: "React", icon: codeStackIcon.src },
    { id: "backend", label: "Node.js", icon: backendStackIcon.src },
    { id: "figma", label: "Figma", icon: figmaStackIcon.src },
    { id: "db", label: "MongoDB", icon: dbStackIcon.src },
    { id: "cloud", label: "AWS", icon: cloudStackIcon.src },
  ],
};
