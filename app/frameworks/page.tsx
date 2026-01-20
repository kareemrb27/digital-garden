import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Brain, ArrowUpRight, Scale, Search, Target } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

const frameworks = [
    {
        title: "First Principles",
        description: "Boil things down to the most fundamental truths and reason up from there.",
        category: "Thinking",
        icon: Brain, // Represents core thinking
        color: "bg-blue-500/10 text-blue-500",
        slug: "first-principles",
    },
    {
        title: "Opportunity Cost",
        description: "The value of the next best alternative that you give up when making a choice.",
        category: "Decision Making",
        icon: Scale, // Represents trade-offs
        color: "bg-emerald-500/10 text-emerald-500",
        slug: "opportunity-cost",
    },
    {
        title: "Inversion",
        description: "Avoid stupidity rather than seeking brilliance. Turn problems upside down.",
        category: "Problem Solving",
        icon: ArrowUpRight, // Represents a different angle
        color: "bg-amber-500/10 text-amber-500",
        slug: "inversion",
    },
    {
        title: "Pareto Principle",
        description: "80% of consequences come from 20% of the causes. Focus on the vital few.",
        category: "Productivity",
        icon: Target, // Represents focus
        color: "bg-purple-500/10 text-purple-500",
        slug: "pareto-principle",
    },
    {
        title: "Second-Order Thinking",
        description: "Ask 'And then what?' to understand the long-term consequences of a decision.",
        category: "Decision Making",
        icon: Search, // Represents looking deeper
        color: "bg-rose-500/10 text-rose-500",
        slug: "second-order-thinking",
    },
];

export default function FrameworksPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto max-w-6xl space-y-16">

                    {/* Header */}
                    <div className="max-w-2xl space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/50 text-xs font-semibold uppercase tracking-wider text-accent-foreground w-fit">
                            <Brain className="w-3 h-3" /> The Library
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">
                            Mental Models
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            A curated collection of "Tools for Thought." These are the timeless frameworks I use to decipher the world, make decisions, and solve problems.
                        </p>
                    </div>

                    {/* Frameworks Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {frameworks.map((fw) => (
                            <div key={fw.slug} className="group relative flex flex-col p-8 rounded-2xl border border-border/50 bg-card hover:border-foreground/20 hover:shadow-lg transition-all duration-300">
                                <div className="flex items-start justify-between mb-6">
                                    <div className={cn("p-3 rounded-xl", fw.color)}>
                                        <fw.icon size={24} />
                                    </div>
                                    <span className="text-xs font-medium text-muted-foreground/80 px-2 py-1 rounded-md bg-muted/50">
                                        {fw.category}
                                    </span>
                                </div>

                                <h3 className="text-2xl font-serif font-bold mb-3 group-hover:text-foreground transition-colors">
                                    {fw.title}
                                </h3>
                                <p className="text-muted-foreground leading-relaxed mb-8 flex-1">
                                    {fw.description}
                                </p>

                                <Link
                                    href={`/frameworks/${fw.slug}`} // Assuming we reuse the MDX system or create a specific one
                                    className="inline-flex items-center text-sm font-semibold text-foreground/80 hover:text-foreground mt-auto"
                                >
                                    Explore Model <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                </Link>
                            </div>
                        ))}
                    </div>

                </div>
            </main>
            <Footer />
        </div>
    );
}

import { ArrowRight } from "lucide-react";
