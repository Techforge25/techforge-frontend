import banner from "@/assets/images/portfolio/swimnest.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "swimnest",
    projectName: "Swimnest Web Platform",
    category: "Web Platform",
    heroImage: banner.src,
    heroBadgeLabel: "Swimnest Web Platform",

    briefTitle: "Project Brief",
    briefDescription:
        "SwimNest is a comprehensive swimming training, coaching, and e-commerce ecosystem designed to connect learners, coaches, and vendors through a single digital platform. TechForge Innovations developed a scalable multi-tenant solution that streamlines training management, session bookings, progress tracking, and swimming gear purchases. By combining learning, coaching, and commerce into one unified experience, SwimNest delivers a modern digital environment for the entire swimming community.",

    challengeTitle: "The Challenge",
    challenges: [
        "Swimming academies relied on disconnected systems to manage student enrollments, coaching schedules, and performance tracking.",
        "Learners lacked a centralized platform to monitor progress, manage family profiles, and book training sessions efficiently.",
        "Coaches faced difficulties tracking student development, managing schedules, and coordinating session bookings.",
        "Swimming equipment purchases were handled through separate channels, creating a fragmented user experience.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a unified sports and coaching ecosystem that centralizes learning, coaching operations, and e-commerce functionality. The platform empowers learners to manage their swimming journey, enables coaches to optimize training programs, and provides vendors with a dedicated marketplace for swimming products and accessories.",

    solutionFeatures: [
        "Learner & Family Profile Management",
        "Training Session Booking System",
        "Progress & Performance Tracking",
        "Coach Dashboard & Schedule Management",
        "Student Development Monitoring",
        "Multi-Vendor Swimming Marketplace",
        "Secure Online Shopping Experience",
        "Role-Based Multi-Tenant Architecture",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "70%", label: "Reduction in administrative workload" },
        { value: "25k+", label: "Training sessions managed" },
        { value: "92%", label: "User satisfaction rate" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "frontend", label: "Next.js", icon: codeStackIcon.src },
        { id: "backend", label: "Node.js", icon: backendStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
        { id: "db", label: "PostgreSQL", icon: dbStackIcon.src },
    ],
};
