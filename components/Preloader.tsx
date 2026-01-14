"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Preloader() {
    return (
        <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black"
        >
            <div className="relative w-64 h-64 md:w-96 md:h-96">
                <object
                    type="image/svg+xml"
                    data="https://cdn.svgator.com/images/2023/06/generative-ai-preloader.svg"
                    className="w-full h-full"
                >
                    {/* Fallback for browsers that don't support object */}
                    <img
                        src="https://cdn.svgator.com/images/2023/06/generative-ai-preloader.svg"
                        alt="Loading..."
                        className="w-full h-full object-contain"
                    />
                </object>
            </div>
        </motion.div>
    );
}
