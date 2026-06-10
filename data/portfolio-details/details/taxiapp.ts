import banner from "@/assets/images/portfolio/taxi-247.png";
import codeStackIcon from "@/assets/images/stacks/code.svg";
import backendStackIcon from "@/assets/images/stacks/backend.svg";
import figmaStackIcon from "@/assets/images/stacks/figma.svg";
import dbStackIcon from "@/assets/images/stacks/db.svg";
import cloudStackIcon from "@/assets/images/stacks/cloud.svg";
import mapsIcon from "@/assets/images/stacks/maps.svg";
import type { PortfolioDetail } from "../types";

export const portfolioDetail: PortfolioDetail = {
    slug: "taxi247",
    projectName: "24/7 Taxi Drivers - Mobile App",
    category: "Mobile App",
    heroImage: banner.src,
    heroBadgeLabel: "24/7 Taxi Drivers - Mobile App",

    briefTitle: "Project Brief",
    briefDescription:
        "Taxi App is a modern on-demand ride-hailing platform designed to connect passengers and drivers through a seamless real-time transportation ecosystem. TechForge Innovations developed a scalable mobile solution that simplifies ride booking, driver matching, live trip tracking, digital payments, and route navigation. The platform delivers a fast, reliable, and user-friendly experience for both riders and drivers while optimizing transportation operations through intelligent automation.",

    challengeTitle: "The Challenge",
    challenges: [
        "Passengers needed a faster and more reliable way to book rides and track drivers in real time.",
        "Managing ride requests, driver availability, and trip assignments manually was inefficient and difficult to scale.",
        "Accurate fare calculations, route optimization, and real-time trip updates required advanced location-based services.",
        "Providing a secure and seamless payment experience while maintaining operational transparency was essential for user trust.",
    ],

    solutionTitle: "The Solution",
    solutionDescription:
        "TechForge Innovations engineered a comprehensive ride-hailing ecosystem that automates the entire transportation journey from booking to trip completion. The platform leverages real-time communication, location intelligence, and smart driver-passenger matching to deliver a reliable and efficient mobility experience.",

    solutionFeatures: [
        "Real-Time Ride Booking",
        "Smart Driver Matching",
        "Live GPS Tracking",
        "Instant Fare Estimation",
        "In-App Secure Payments",
        "Driver & Passenger Management",
        "Push Notifications & Ride Updates",
        "Trip History & Analytics",
    ],

    resultsHeading: "Results & Impact",
    results: [
        { value: "85%", label: "Faster ride allocation" },
        { value: "100k+", label: "Trips processed" },
        { value: "95%", label: "Customer satisfaction rate" },
    ],


    techStackHeading: "Technology Stack",
    techStacks: [
        { id: "frontend", label: "React", icon: codeStackIcon.src },
        { id: "backend", label: "Node.js", icon: backendStackIcon.src },
        { id: "figma", label: "Figma", icon: figmaStackIcon.src },
        { id: "db", label: "MongoDB", icon: dbStackIcon.src },
        { id: "maps", label: "Google Maps API", icon: mapsIcon.src },
        { id: "cloud", label: "AWS", icon: cloudStackIcon.src },
    ],
};
