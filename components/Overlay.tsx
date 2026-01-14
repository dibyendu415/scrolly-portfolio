"use client";

import { useScroll, useTransform, motion } from "framer-motion";

interface OverlayProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    isLoaded: boolean;
}

export default function Overlay({ containerRef, isLoaded }: OverlayProps) {
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // 1. Name Section (0% - 15%)
    // Visible start, fades out by 20%
    const opacity1 = useTransform(scrollYProgress, [0, 0.15, 0.2], [1, 1, 0]);
    const y1 = useTransform(scrollYProgress, [0, 0.2], [0, -50]);

    // 2. "I plan and build" (25% - 40%)
    const opacity2 = useTransform(scrollYProgress, [0.25, 0.3, 0.35, 0.4], [0, 1, 1, 0]);
    const y2 = useTransform(scrollYProgress, [0.25, 0.4], [50, -50]);

    // 3. "Bridging problem" (45% - 60%)
    const opacity3 = useTransform(scrollYProgress, [0.45, 0.5, 0.55, 0.6], [0, 1, 1, 0]);
    const y3 = useTransform(scrollYProgress, [0.45, 0.6], [50, -50]);

    // 4. RBS Experience (65% - 85%)
    // Left side (Role/Company)
    const opacity4Left = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
    const y4Left = useTransform(scrollYProgress, [0.65, 0.85], [20, -20]);

    // Right side (Date/Desc)
    const opacity4Right = useTransform(scrollYProgress, [0.65, 0.7, 0.8, 0.85], [0, 1, 1, 0]);
    const y4Right = useTransform(scrollYProgress, [0.65, 0.85], [60, -60]);

    // 5. "Look at my projects" (90% - 100%)
    const opacity5 = useTransform(scrollYProgress, [0.9, 0.95, 0.98, 1], [0, 1, 1, 0]);
    const scale5 = useTransform(scrollYProgress, [0.9, 1], [0.8, 1.2]);

    return (
        <>
            <div className="sticky top-0 w-full h-screen flex flex-col justify-center items-center pointer-events-none z-10">

                {/* Section 1: Intro - Fixed Position & Simple Entrance */}
                <motion.div
                    style={{ opacity: opacity1, y: y1 }}
                    className="absolute text-center p-4 mt-[-140vh]" // Center + offset
                >
                    <h1 className="text-4xl md:text-7xl font-bold tracking-tighter text-white mb-4">
                        Dibyendu Maji
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-400 font-light">
                        MBA - IIM Kozhikode
                    </p>
                </motion.div>

                {/* Section 2: Tagline 1 */}
                <motion.div style={{ opacity: opacity2, y: y2 }} className="absolute w-full px-8 md:px-20 left-0">
                    <div className="max-w-2xl text-left">
                        <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                            I plan and build <br />
                            <span className="text-blue-500">experiences.</span>
                        </h2>
                    </div>
                </motion.div>

                {/* Section 3: Tagline 2 */}
                <motion.div style={{ opacity: opacity3, y: y3 }} className="absolute w-full px-8 md:px-20 right-0 flex justify-end">
                    <div className="max-w-2xl text-right">
                        <h2 className="text-3xl md:text-6xl font-bold text-white leading-tight">
                            Bridging <span className="text-purple-500">problem</span><br />
                            and solution.
                        </h2>
                    </div>
                </motion.div>

                {/* Section 4: Experience - Split Layout */}
                <div className="absolute w-full h-full flex flex-col md:flex-row items-center justify-between px-8 md:px-20 pointer-events-none">
                    {/* Left: Role & Company */}
                    <motion.div style={{ opacity: opacity4Left, y: y4Left }} className="max-w-xl text-left md:w-1/2">
                        <h3 className="text-2xl md:text-3xl font-medium text-indigo-400 mb-2">
                            Software Developer
                        </h3>
                        <h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter leading-none">
                            Royal Bank <br /> of Scotland.
                        </h2>
                    </motion.div>

                    {/* Right: Details */}
                    <motion.div style={{ opacity: opacity4Right, y: y4Right }} className="max-w-xl text-right md:w-1/2 mt-12 md:mt-0">
                        <p className="text-xl md:text-2xl text-white font-medium mb-4">
                            July 2021 — May 2024
                        </p>
                        <p className="text-lg md:text-xl text-gray-400 leading-relaxed">
                            Architected scalable financial systems and <br />
                            optimized core banking algorithms.
                        </p>
                    </motion.div>
                </div>

                {/* Section 5: Transition & Resume */}
                <motion.div style={{ opacity: opacity5, scale: scale5 }} className="absolute text-center z-20 pointer-events-auto">
                    <h2 className="text-4xl md:text-7xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 mb-8">
                        Let&apos;s build the future together.
                    </h2>
                    <a
                        href="https://drive.google.com/file/d/1zDrO_lFGAVL31yMcQG0OlBZb6eqMOBxt"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-4 bg-white text-black font-bold text-lg rounded-full hover:bg-gray-200 transition-colors shadow-lg"
                    >
                        Download Resume
                    </a>
                </motion.div>

            </div>
        </>
    );
}
