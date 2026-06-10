import banner from "@/assets/images/portfolio/golf-game.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "birdie-game",
    projectName: "Birdie Game",
    category: "Mobile App",
    heroImage: banner.src,
    heroBadgeLabel: "Birdie Game",

    briefTitle: "Project Brief",
    briefDescription:
        "Birdie Game is a comprehensive sports and match management ecosystem designed to simplify how clubs, teams, and players organize, manage, and track competitive games. TechForge Innovations developed a scalable role-based platform that enables Super Admins, Club Admins, Captains, and Players to collaborate seamlessly through a centralized digital environment. The platform combines real-time score tracking, team management, match organization, and club administration into a unified experience across mobile and web devices.",

    challengeTitle: "The Challenge",
    challenges: [
        "Sports clubs relied on spreadsheets, messaging apps, and manual processes to manage games and player participation.",
        "Tracking match progress, team performance, and player contributions across multiple clubs was inefficient.",
        "Managing permissions and responsibilities for administrators, captains, and players required a structured role-based system.",
        "Players lacked a centralized platform to monitor scores, upcoming matches, and team standings in real time.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a multi-role sports management platform that centralizes club operations, match management, and score tracking. The system provides powerful administrative controls for organizers while delivering a seamless and engaging experience for captains and players through real-time updates and mobile accessibility.",

    solutionFeatures: [
        "Role-Based Access Management",
        "Club & Team Administration",
        "Match Creation & Scheduling",
        "Real-Time Score Tracking",
        "Player & Captain Dashboards",
        "Live Match Monitoring",
        "Leaderboard & Performance Insights",
        "Cross-Platform Mobile & Web Experience",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "80%", label: "Faster match administration" },
        { value: "25k+", label: "Games and scores managed" },
        { value: "95%", label: "Improvement in operational efficiency" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "mobile", label: "Flutter", icon: codeStackIcon.src },
        { id: "backend", label: "Node.js", icon: backendStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
        { id: "db", label: "MongoDB", icon: dbStackIcon.src },
    ],
};
