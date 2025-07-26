"use client";

import { ThemeProvider } from "next-themes";
import { ThemeToggle } from "@/components/theme-toggle";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { useState } from "react";

export default function Portfolio() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    return (
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
            <div className="min-h-screen bg-white dark:bg-black text-gray-900 dark:text-white relative overflow-hidden transition-colors duration-300">
                {/* Background effects */}
                <div className="fixed inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-black dark:via-gray-900 dark:to-black transition-colors duration-300" />
                <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.05),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(6,182,212,0.1),transparent_50%)]" />

                {/* Navigation */}
                <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 dark:bg-black/20 backdrop-blur-md border-b border-gray-200/50 dark:border-gray-800/50 transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
                        <div className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-purple-600 dark:from-cyan-400 dark:to-purple-400 bg-clip-text text-transparent">
                            Dr. Sarah Chen
                        </div>
                        <div className="flex items-center gap-6">
                            {/* Desktop nav */}
                            <div className="hidden md:flex items-center gap-6 text-sm">
                                <a
                                    href="#about"
                                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                >
                                    About
                                </a>
                                <a
                                    href="#experience"
                                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                >
                                    Experience
                                </a>
                                <a
                                    href="#skills"
                                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                >
                                    Skills
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-600 dark:text-gray-300 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                >
                                    Contact
                                </a>
                            </div>
                            {/* Burger button */}
                            <button
                                className="md:hidden flex items-center justify-center w-10 h-10 rounded focus:outline-none focus:ring-2 focus:ring-cyan-500"
                                aria-label="Open menu"
                                onClick={() =>
                                    setMobileMenuOpen(!mobileMenuOpen)
                                }
                            >
                                <span className="sr-only">Open menu</span>
                                <svg
                                    className="w-6 h-6 text-gray-700 dark:text-gray-200"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth={2}
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d={
                                            mobileMenuOpen
                                                ? "M6 18L18 6M6 6l12 12"
                                                : "M4 6h16M4 12h16M4 18h16"
                                        }
                                    />
                                </svg>
                            </button>
                            <ThemeToggle />
                        </div>
                    </div>
                    {/* Mobile menu */}
                    {mobileMenuOpen && (
                        <div className="md:hidden absolute top-full left-0 w-full bg-white dark:bg-black border-b border-gray-200/50 dark:border-gray-800/50 shadow-lg z-50 animate-fade-in-down">
                            <div className="flex flex-col gap-4 px-6 py-4 text-sm">
                                <a
                                    href="#about"
                                    className="text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    About
                                </a>
                                <a
                                    href="#experience"
                                    className="text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Experience
                                </a>
                                <a
                                    href="#skills"
                                    className="text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Skills
                                </a>
                                <a
                                    href="#contact"
                                    className="text-gray-700 dark:text-gray-200 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    Contact
                                </a>
                            </div>
                        </div>
                    )}
                </nav>

                {/* Main content */}
                <main className="relative z-10">
                    <HeroSection />
                    <div id="about">
                        <AboutSection />
                    </div>
                    <div id="experience">
                        <ExperienceSection />
                    </div>
                    <div id="skills">
                        <SkillsSection />
                    </div>
                    <div id="contact">
                        <ContactSection />
                    </div>
                </main>

                {/* Footer */}
                <footer className="relative z-10 border-t border-gray-200/50 dark:border-gray-800/50 bg-white/80 dark:bg-black/40 backdrop-blur-sm transition-colors duration-300">
                    <div className="max-w-6xl mx-auto px-4 py-8 text-center">
                        <p className="text-gray-600 dark:text-gray-400">
                            © 2024 Dr. Sarah Chen. Advancing healthcare through
                            pharmaceutical innovation.
                        </p>
                    </div>
                </footer>
            </div>
        </ThemeProvider>
    );
}
