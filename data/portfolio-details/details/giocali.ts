import banner from "@/assets/images/portfolio/giocali.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "giocali",
    projectName: "Giocali - Mobile App",
    category: "Mobile App",
    heroImage: banner.src,
    heroBadgeLabel: "Giocali - Mobile App",

    briefTitle: "Project Brief",
    briefDescription:
        "Giocali is an all-in-one sports and tournament management ecosystem designed to transform how players, teams, and organizers manage competitive sports events. TechForge Innovations developed a scalable mobile and web platform that simplifies tournament creation, scheduling, team management, live event tracking, and premium membership experiences through a centralized digital solution.",

    challengeTitle: "The Challenge",
    challenges: [
        "Tournament organizers relied on multiple disconnected tools for registrations, scheduling, and communication.",
        "Managing teams, players, fixtures, and match results manually led to operational inefficiencies.",
        "Lack of a centralized platform made it difficult for participants to track tournaments and upcoming matches.",
        "Coordinating event schedules and tournament updates across multiple channels created confusion for users.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a comprehensive sports management ecosystem that streamlines tournament operations from registration to final results. The platform combines powerful organizer tools with an intuitive player experience, enabling seamless tournament administration, real-time scheduling, and centralized sports community engagement.",

    solutionFeatures: [
        "Tournament Creation & Management",
        "Multiple Tournament Formats",
        "Interactive Match Scheduling",
        "Live Sports Calendar",
        "Player & Team Profiles",
        "Subscription & Premium Features",
        "Real-Time Tournament Updates",
        "Mobile & Web Synchronization",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "75%", label: "Faster tournament management" },
        { value: "50k+", label: "Athletes & participants engaged" },
        { value: "90%", label: "Reduction in manual coordination" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "mobile", label: "Flutter", icon: codeStackIcon.src },
        { id: "backend", label: "Node.js", icon: backendStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
        { id: "db", label: "MongoDB", icon: dbStackIcon.src },
        { id: "cloud", label: "AWS", icon: cloudStackIcon.src },
    ],
};
