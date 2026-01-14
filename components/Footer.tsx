"use client";

import { motion } from "framer-motion";

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const socialLinks = [
        {
            href: "mailto:dibyendumaji415@gmail.com",
            label: "Email",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
            ),
            hoverColor: "group-hover:text-white"
        },
        {
            href: "https://www.linkedin.com/in/dibyendumajiiimk/",
            label: "LinkedIn",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
                </svg>
            ),
            hoverColor: "group-hover:text-blue-400"
        },
        {
            href: "https://github.com/dibyendu415",
            label: "GitHub",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" /><path d="M9 18c-4.51 2-5-2-7-2" />
                </svg>
            ),
            hoverColor: "group-hover:text-purple-400"
        },
        {
            href: "https://www.instagram.com/dibyendu415/",
            label: "Instagram",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                </svg>
            ),
            hoverColor: "group-hover:text-pink-500"
        },
        {
            href: "https://www.facebook.com/dibyendu.maji.336",
            label: "Facebook",
            icon: (
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
            ),
            hoverColor: "group-hover:text-blue-600"
        },
    ];

    return (
        <footer className="py-12 text-center border-t border-white/10 bg-[#121212] relative">
            <div className="flex flex-col items-center justify-center space-y-8">

                {/* Social Icons */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-6">
                    {socialLinks.map((link, index) => (
                        <a
                            key={index}
                            href={link.href}
                            target={link.label === "Email" ? undefined : "_blank"}
                            rel={link.label === "Email" ? undefined : "noopener noreferrer"}
                            className="group flex items-center justify-center w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:scale-110 transition-all duration-300"
                            aria-label={link.label}
                        >
                            <span className={`text-gray-400 transition-colors duration-300 ${link.hoverColor}`}>
                                {link.icon}
                            </span>
                        </a>
                    ))}
                </div>

                {/* Scroll to Top Rocket */}
                <button
                    onClick={scrollToTop}
                    className="group flex flex-col items-center gap-2 text-gray-500 hover:text-white transition-colors duration-300"
                    aria-label="Scroll to top"
                >
                    <div className="p-3 rounded-full bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors animate-bounce">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-400 group-hover:text-blue-300">
                            <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z" />
                            <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z" />
                            <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0" />
                            <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                        </svg>
                    </div>
                    <span className="text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity">Back to Top</span>
                </button>

                <p className="text-gray-500 text-sm font-medium">
                    © {new Date().getFullYear()} Portfolio. Made with ❤️ by Dibyendu Maji.
                </p>
            </div>
        </footer>
    );
}
