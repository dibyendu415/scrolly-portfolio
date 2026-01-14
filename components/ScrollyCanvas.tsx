"use client";

import { useScroll, useMotionValueEvent } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollyCanvasProps {
    containerRef: React.RefObject<HTMLDivElement | null>;
    onLoaded: () => void;
}

export default function ScrollyCanvas({ containerRef, onLoaded }: ScrollyCanvasProps) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const [images, setImages] = useState<HTMLImageElement[]>([]);
    const [isLoaded, setIsLoaded] = useState(false);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Load images
    useEffect(() => {
        let loadedCount = 0;
        const totalFrames = 169;
        const loadedImages: HTMLImageElement[] = [];

        for (let i = 0; i < totalFrames; i++) {
            const img = new Image();
            const filename = String(i).padStart(3, "0") + ".webp";
            img.src = `/sequence/${filename}`;
            img.onload = () => {
                loadedCount++;
                if (loadedCount === totalFrames) {
                    setIsLoaded(true);
                    onLoaded();
                }
            };
            loadedImages.push(img);
        }
        setImages(loadedImages);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Draw frame based on scroll
    const renderFrame = (progress: number) => {
        const canvas = canvasRef.current;
        if (!canvas || images.length === 0) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        const totalFrames = images.length - 1;
        const frameIndex = Math.min(
            totalFrames,
            Math.max(0, Math.round(progress * totalFrames))
        );

        const img = images[frameIndex];
        if (!img) return;

        // Responsive Object-Fit: Cover Logic
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const scale = Math.max(canvas.width / img.width, canvas.height / img.height);
        const x = (canvas.width / 2) - (img.width / 2) * scale;
        const y = (canvas.height / 2) - (img.height / 2) * scale;

        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    useMotionValueEvent(scrollYProgress, "change", (latest) => {
        if (isLoaded) {
            renderFrame(latest);
        }
    });

    // Initial render when loaded
    useEffect(() => {
        if (isLoaded) {
            renderFrame(scrollYProgress.get());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    // Handle resize
    useEffect(() => {
        const handleResize = () => {
            if (isLoaded) renderFrame(scrollYProgress.get());
        }
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isLoaded]);

    return (
        <>
            <div className="sticky top-0 h-screen w-full overflow-hidden">
                <canvas ref={canvasRef} className="w-full h-full block" />
            </div>
        </>
    );
}
