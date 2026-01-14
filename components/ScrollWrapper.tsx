"use client";

import { useRef, useState } from "react";
import { AnimatePresence } from "framer-motion";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";
import Preloader from "./Preloader";

export default function ScrollWrapper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div ref={containerRef} className="relative h-[700vh]">
            <AnimatePresence>
                {!isLoaded && <Preloader key="preloader" />}
            </AnimatePresence>

            <ScrollyCanvas containerRef={containerRef} onLoaded={() => setIsLoaded(true)} />
            <Overlay containerRef={containerRef} isLoaded={isLoaded} />
        </div>
    );
}
