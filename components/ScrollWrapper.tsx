"use client";

import { useRef, useState } from "react";
import ScrollyCanvas from "./ScrollyCanvas";
import Overlay from "./Overlay";

export default function ScrollWrapper() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <div ref={containerRef} className="relative h-[700vh]">
            <ScrollyCanvas containerRef={containerRef} onLoaded={() => setIsLoaded(true)} />
            <Overlay containerRef={containerRef} isLoaded={isLoaded} />
        </div>
    );
}
