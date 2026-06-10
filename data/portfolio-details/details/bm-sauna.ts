import banner from "@/assets/images/portfolio/b&m-sauna.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "bmsauna",
    projectName: "B&M Sauna",
    category: "Websites",
    heroImage: banner.src,
    heroBadgeLabel: "B&M Sauna",

    briefTitle: "Project Brief",
    briefDescription:
        "B&M Sauna is a modern wellness booking platform designed to simplify the entire sauna reservation experience. TechForge Innovations developed a seamless website and smart booking system that enables customers to schedule sessions, manage reservations, cancel bookings when needed, and receive secure access codes for hassle-free entry. The platform combines convenience, automation, and security to deliver a premium customer experience.",

    challengeTitle: "The Challenge",
    challenges: [
        "Manual booking processes created scheduling conflicts and increased administrative workload.",
        "Customers lacked a convenient way to modify or cancel reservations without contacting staff.",
        "Traditional key-based access management created operational inefficiencies and security concerns.",
        "Limited automation resulted in slower booking confirmations and customer communication.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a fully automated sauna booking ecosystem that streamlines reservations from start to finish. The platform empowers customers with complete control over their bookings while reducing operational overhead through automation and secure digital access management.",

    solutionFeatures: [
        "Real-time Booking Management",
        "Instant Reservation Confirmation",
        "Secure Digital Access Codes",
        "Booking Modification & Cancellation",
        "Automated Customer Notifications",
        "Mobile-Friendly User Experience",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "70%", label: "Reduction in manual booking tasks" },
        { value: "95%", label: "Successful self-service bookings" },
        { value: "24/7", label: "Automated customer access" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "frontend", label: "Next.js", icon: codeStackIcon.src },
        { id: "backend", label: "Node.js", icon: backendStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
        { id: "db", label: "MongoDB", icon: dbStackIcon.src },
        { id: "cloud", label: "AWS", icon: cloudStackIcon.src },
    ],
};
