import banner from "@/assets/images/portfolio/goat-farming.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "goatfarming",
    projectName: "Goat Farming Mobile App",
    category: "Mobile App",
    heroImage: banner.src,
    heroBadgeLabel: "Goat Farming Mobile App",

    briefTitle: "Project Brief",
    briefDescription:
        "Goat Farm Manager is a comprehensive livestock management platform built to modernize and digitize goat farming operations. TechForge Innovations developed a powerful mobile-first ecosystem that enables farmers and livestock managers to monitor herd health, breeding cycles, vaccinations, feeding schedules, and operational costs from a single centralized platform. By combining real-time field data collection with intelligent farm management tools, the platform helps improve productivity, animal welfare, and overall farm efficiency.",

    challengeTitle: "The Challenge",
    challenges: [
        "Farm records were maintained manually, making data retrieval and reporting time-consuming.",
        "Tracking animal health, vaccinations, and breeding cycles across large herds was difficult and prone to errors.",
        "Farmers lacked real-time visibility into livestock performance and operational costs.",
        "Managing herd growth, feeding expenses, and treatment history without a centralized system reduced efficiency.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered an end-to-end digital farm management solution that centralizes every aspect of livestock operations. The platform empowers farmers with real-time access to herd data, health monitoring tools, breeding management, and performance analytics, enabling smarter decisions and more efficient farm operations.",

    solutionFeatures: [
        "Livestock Profile Management",
        "Health & Vaccination Tracking",
        "Breeding Cycle Management",
        "Weight & Growth Monitoring",
        "Feed & Expense Management",
        "Farm Performance Analytics",
        "Real-Time Mobile Data Entry",
        "Centralized Reporting Dashboard",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "65%", label: "Reduction in manual record keeping" },
        { value: "20k+", label: "Livestock records managed" },
        { value: "92%", label: "Improvement in farm data accuracy" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "mobile", label: "Flutter", icon: codeStackIcon.src },
        { id: "backend", label: "Node.js", icon: backendStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
        { id: "db", label: "MongoDB", icon: dbStackIcon.src },
    ],
};
