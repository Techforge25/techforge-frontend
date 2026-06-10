import banner from "@/assets/images/portfolio/non-profit.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import wordpressIcon from "@/assets/images/stacks/wordpress.svg";
import elementorIcon from "@/assets/images/stacks/elementor.svg";
import formIcon from "@/assets/images/stacks/form.svg";
import stripeIcon from "@/assets/images/stacks/stripe.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "nonprofit",
    projectName: "DCCCWI Non-Profit Website",
    category: "websites",
    heroImage: banner.src,
    heroBadgeLabel: "DCCCWI Non-Profit Website",

    briefTitle: "Project Brief",
    briefDescription:
        "The Dane County Cancer Coalition (DCC-CWI) Website is a community-focused digital platform designed to support cancer patients, survivors, caregivers, and families throughout their journey. TechForge Innovations developed a centralized web experience that connects individuals with educational resources, community programs, financial assistance opportunities, volunteer initiatives, and secure donation channels. The platform empowers the organization to expand its outreach while making support services more accessible to those who need them most.",

    challengeTitle: "The Challenge",
    challenges: [
        "Critical support resources were scattered across multiple channels, making it difficult for patients and families to find assistance quickly.",
        "The organization needed a simple way to manage donations, volunteer applications, and community engagement online.",
        "Raising awareness about cancer-related programs and available support services required a more accessible digital presence.",
        "The existing process for connecting community members with resources and assistance programs lacked efficiency and scalability.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations designed and developed a modern nonprofit platform that serves as a central hub for education, awareness, fundraising, and community support. The website enables visitors to access valuable information, apply for assistance programs, volunteer for local initiatives, and contribute securely through integrated donation systems.",

    solutionFeatures: [
        "Cancer Awareness & Educational Resources",
        "Community Support Information Hub",
        "Online Donation System",
        "Volunteer Registration & Management",
        "Financial Assistance Request Forms",
        "Events & Community Engagement",
        "Responsive Accessibility-Focused Design",
        "Content Management for Ongoing Outreach",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "3x", label: "Increase in community engagement" },
        { value: "5k+", label: "Individuals reached through resources" },
        { value: "90%", label: "Faster support request processing" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "wordpress", label: "Wordpress", icon: wordpressIcon.src },
        { id: "elementor", label: "Elementor", icon: elementorIcon.src },
        { id: "form", label: "WPForms", icon: formIcon.src },
        { id: "db", label: "MySQL", icon: dbStackIcon.src },
        { id: "stripe", label: "Stripe", icon: stripeIcon.src },
    ],
};
