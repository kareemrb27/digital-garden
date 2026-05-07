import { Brain, ArrowUpRight, Scale, Search, Target, HelpCircle, ArrowRight, type LucideIcon } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { getAllPosts } from "@/lib/mdx";

const ICON_MAP: Record<string, LucideIcon> = {
    Brain,
    ArrowUpRight,
    Scale,
    Search,
    Target,
};

function getIconComponent(iconName: string | undefined): LucideIcon {
    if (!iconName) return HelpCircle;
    return ICON_MAP[iconName] ?? HelpCircle;
}

export default async function FrameworksPage() {
    const frameworks = await getAllPosts("frameworks");

    return (
        <div className="min-h-screen flex flex-col bg-background">
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
                                    <div className={cn("p-3 rounded-xl", fw.color || "bg-indigo-500/10 text-indigo-500")}>
                                        {(() => {
                                            const IconComponent = getIconComponent(fw.icon);
                                            return <IconComponent size={24} />;
                                        })()}
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
        </div>
    );
}
