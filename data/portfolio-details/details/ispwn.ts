import banner from "@/assets/images/portfolio/ispwn.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "ispwn",
    projectName: "ISP Wholesale Network",
    category: "Websites",
    heroImage: banner.src,
    heroBadgeLabel: "ISP Wholesale Network",

    briefTitle: "Project Brief",
    briefDescription:
        "ISP-Wholesale Network Portal is an enterprise-grade digital platform built to help telecommunications providers and Internet Service Providers streamline wholesale network services, infrastructure partnerships, and customer engagement. TechForge Innovations designed and developed a modern web platform that combines a professional public-facing website with a scalable service-focused ecosystem, enabling telecom businesses to showcase solutions, share resources, and strengthen industry partnerships through a centralized digital presence.",

    challengeTitle: "The Challenge",
    challenges: [
        "Telecommunication providers lacked a modern digital platform to effectively present wholesale network services and infrastructure solutions.",
        "Complex service offerings and technical information were difficult for potential partners to navigate and understand.",
        "Managing industry resources, service documentation, and company updates through disconnected systems reduced operational efficiency.",
        "The existing digital experience did not effectively support business growth, lead generation, and partner engagement.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a high-performance telecommunications platform that delivers a seamless experience for wholesale network partners and service providers. The solution combines modern web design, structured service presentation, content management capabilities, and scalable architecture to support business expansion and industry collaboration.",

    solutionFeatures: [
        "Enterprise Website Experience",
        "Wholesale Service Showcase",
        "Industry Resources Hub",
        "Dynamic Blog & Content Management",
        "Service & Infrastructure Information Portal",
        "Partner Engagement Framework",
        "SEO-Optimized Content Architecture",
        "Responsive Cross-Device Experience",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "65%", label: "Increase in partner inquiries" },
        { value: "3x", label: "Growth in service visibility" },
        { value: "99.9%", label: "Platform availability" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "frontend", label: "Next.js", icon: codeStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
    ],
};
