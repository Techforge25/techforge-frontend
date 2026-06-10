import banner from "@/assets/images/portfolio/real-estate-wp.png";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import wordpressIcon from "@/assets/images/stacks/wordpress.svg";
import elementorIcon from "@/assets/images/stacks/elementor.svg";
import formIcon from "@/assets/images/stacks/form.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "webirmingham",
    projectName: "We Birmingham - Real Estate",
    category: "Websites",
    heroImage: banner.src,
    heroBadgeLabel: "We Birmingham - Real Estate",

    briefTitle: "Project Brief",
    briefDescription:
        "we Birmingham is a hyper-local real estate and community discovery platform designed to help buyers, sellers, and residents explore Birmingham's neighborhoods with confidence. TechForge Innovations developed a content-rich WordPress solution that combines property discovery, neighborhood insights, local guides, and lead generation tools into a seamless digital experience. The platform empowers users to make informed property decisions while connecting them directly with local real estate opportunities.",

    challengeTitle: "The Challenge",
    challenges: [
        "Property buyers struggled to find localized information about neighborhoods alongside property listings.",
        "Real estate businesses needed a platform that could effectively showcase properties while generating qualified leads.",
        "Managing large volumes of content, area guides, blogs, and listings required a scalable and organized content structure.",
        "Traditional property websites lacked community-focused insights that help users make confident relocation and investment decisions.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a modern real estate ecosystem that blends property search, local community insights, and content marketing into a single platform. The solution provides an engaging user experience while helping property professionals attract, educate, and convert potential buyers and sellers through valuable hyper-local content.",

    solutionFeatures: [
        "Property Listings Management",
        "Neighborhood Discovery Pages",
        "Local Area Guides",
        "Lead Generation & Inquiry Forms",
        "Content-Rich Blog Ecosystem",
        "Responsive Property Search Experience",
        "SEO-Optimized Content Architecture",
        "Community-Focused User Journey",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "3.5x", label: "Increase in property inquiries" },
        { value: "120k+", label: "Neighborhood page visits" },
        { value: "88%", label: "Growth in user engagement" },
    ],

    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "wordpress", label: "Wordpress", icon: wordpressIcon.src },
        { id: "elementor", label: "Elementor", icon: elementorIcon.src },
        { id: "form", label: "WPForms", icon: formIcon.src },
        { id: "db", label: "MySQL", icon: dbStackIcon.src },
    ],
};
