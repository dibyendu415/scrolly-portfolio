"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface Project {
    title: string;
    techStack: string[];
    description: string[];
    image: string;
    year: string;
}

const projects: Project[] = [
    {
        title: "SMS-Based Information Access Platform",
        techStack: ["Node.Js", "Express", "Twilio", "Webhooks"],
        description: [
            "Designed an offline-first information access system enabling users to fetch nearby hospitals and restaurants via SMS.",
            "Defined SMS-based request–response flows & API handling using Node.js and Express integrated with Twilio webhooks.",
            "Addressed accessibility and reliability constraints by prioritizing SMS over internet-dependent solutions."
        ],
        image: "/project/sms.png",
        year: "2021",
    },
    {
        title: "Automatic Cypress Test Script Generator",
        techStack: ["JavaScript", "Cypress", "Gherkin", "Teamcity"],
        description: [
            "Identified bottlenecks in manual Cypress script writing that slowed releases and increased reliance on specialized testers.",
            "Built a middleware that auto-generates Cypress test files enabling non-technical users to execute end-to-end tests.",
            "Integrated automation testing into TeamCity CI pipelines to validate every build and improve release reliability."
        ],
        image: "/project/cypress.png",
        year: "2023",
    },
    {
        title: "AI-Driven Market Intelligence Platform",
        techStack: ["Python", "Selenium", "OpenCV", "NLP", "Machine Learning"],
        description: [
            "Analyzed 15+ product parameters using Agentic AI for competitive pricing analysis reducing research time by 85%.",
            "Automated pricing, review, and ad data collection across 10 brands using Python, Selenium, and BeautifulSoup.",
            "Applied ML-based keyword clustering and visibility heatmaps to identify SKU gaps and long-tail opportunities."
        ],
        image: "/project/AI.png",
        year: "2025",
    },
    {
        title: "Round Up Fintech App",
        techStack: ["Spring Boot", "Microservices", "Angular"],
        description: [
            "The platform automatically rounds up purchases done and saves extra money in the wallet in form of savings.",
            "Provides flexibility to choose how much to save.",
            "Developed using Spring boot running different microservices and having an interactive Angular frontend."
        ],
        image: "/project/Round Up.png",
        year: "2022",
    },
];

export default function Projects() {
    return (
        <section className="relative z-10 w-full min-h-screen bg-[#121212] px-4 md:px-12 py-24 border-t border-white/10">
            <div className="max-w-6xl mx-auto">
                <motion.h2
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-4xl md:text-6xl font-bold text-white mb-16 tracking-tight"
                >
                    Projects
                </motion.h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group relative flex flex-col overflow-hidden rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 transition-colors duration-300"
                        >
                            {/* Image Section (16:9 Aspect Ratio) */}
                            <div className="relative w-full aspect-video overflow-hidden">
                                <Image
                                    src={project.image}
                                    alt={project.title}
                                    fill
                                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                                />

                                {/* Description Overlay */}
                                <div className="absolute inset-0 bg-black/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-6">
                                    <div className="space-y-2 text-sm text-gray-200">
                                        {project.description.map((desc, i) => (
                                            <p key={i} className="leading-relaxed">
                                                • {desc}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* Content Section (Below Image) */}
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex justify-between items-start mb-3">
                                    <h3 className="text-xl md:text-2xl font-bold text-white leading-tight group-hover:text-blue-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <span className="text-gray-500 font-mono text-xs border border-white/10 px-2 py-1 rounded">
                                        {project.year}
                                    </span>
                                </div>

                                <div className="flex flex-wrap gap-2">
                                    {project.techStack.map((tech, i) => (
                                        <span key={i} className="text-[10px] sm:text-xs font-medium text-blue-300 bg-blue-900/20 px-2 py-1 rounded">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
