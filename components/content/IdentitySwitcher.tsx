"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Code2, Palette, Users, BrainCircuit } from "lucide-react";

type Identity = "technologist" | "artist" | "mentor" | "thinker";

const identities = [
    {
        id: "technologist",
        label: "Technologist",
        icon: Code2,
        color: "text-blue-500",
        description: "Building systems, exploring AI, and designing the future.",
        content: (
            <div className="space-y-4">
                <p>
                    I have spent my career in the digital realm, architecting solutions and navigating the complexities of IT.
                    But code is more than logic to me; it is a medium for creation.
                </p>
                <p>
                    My focus is now on <strong>AI Agents</strong> and the future of work. I explore how technology can augment human potential rather than replace it.
                </p>
            </div>
        ),
    },
    {
        id: "artist",
        label: "Artist",
        icon: Palette,
        color: "text-purple-500",
        description: "Seeing the world through color, form, and emotion.",
        content: (
            <div className="space-y-4">
                <p>
                    Technology seeks answers, but Art asks questions. I believe that a true "builder" must understand beauty and emotion.
                </p>
                <p>
                    Whether through digital design, writing, or visual arts, I strive to express the ineffable parts of the human experience that code cannot capture.
                </p>
            </div>
        ),
    },
    {
        id: "mentor",
        label: "Mentor",
        icon: Users,
        color: "text-green-500",
        description: "Guiding others, sharing knowledge, and fostering growth.",
        content: (
            <div className="space-y-4">
                <p>
                    Knowledge unshared is knowledge wasted. I have realized that my journey is not just for me, but to help others navigate theirs.
                </p>
                <p>
                    I write to share frameworks, offer guidance on career and life, and build a community of thoughtful individuals who want to grow together.
                </p>
            </div>
        ),
    },
    {
        id: "thinker",
        label: "Thinker",
        icon: BrainCircuit,
        color: "text-amber-500",
        description: "Analyzing life, relationships, and human behavior.",
        content: (
            <div className="space-y-4">
                <p>
                    I am a student of life. I collect <strong>Mental Models</strong>—tools for thinking better.
                </p>
                <p>
                    From Finance to Relationships, I try to deconstruct the world into understandable patterns. This website is my notebook, open for you to read.
                </p>
            </div>
        ),
    },
];

export function IdentitySwitcher() {
    const [activeIdentity, setActiveIdentity] = useState<Identity>("technologist");

    const activeData = identities.find((i) => i.id === activeIdentity)!;

    return (
        <div className="w-full max-w-4xl mx-auto">
            {/* Tabs */}
            <div className="flex flex-wrap justify-center gap-2 mb-12">
                {identities.map((identity) => {
                    const Icon = identity.icon;
                    const isActive = activeIdentity === identity.id;
                    return (
                        <button
                            key={identity.id}
                            onClick={() => setActiveIdentity(identity.id as Identity)}
                            className={cn(
                                "flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300",
                                isActive
                                    ? "bg-foreground text-background shadow-lg scale-105"
                                    : "bg-muted/50 text-muted-foreground hover:bg-muted hover:text-foreground"
                            )}
                        >
                            <Icon size={16} />
                            {identity.label}
                        </button>
                    );
                })}
            </div>

            {/* Content Area */}
            <div className="relative min-h-[300px] md:min-h-[250px] p-1">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIdentity}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                        className="w-full bg-card border border-border/50 rounded-2xl p-8 md:p-12 shadow-sm"
                    >
                        <div className="flex flex-col md:flex-row gap-8 items-start">
                            <div className={cn("p-4 rounded-xl bg-muted/30", activeData.color)}>
                                <activeData.icon size={48} />
                            </div>
                            <div className="space-y-4 flex-1">
                                <h2 className="text-3xl font-serif font-bold">{activeData.label}</h2>
                                <p className="text-xl text-muted-foreground font-light italic">
                                    {activeData.description}
                                </p>
                                <div className="pt-4 text-lg leading-relaxed text-foreground/90">
                                    {activeData.content}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    );
}
