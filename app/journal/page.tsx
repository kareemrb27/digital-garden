import Link from "next/link";
import { ArrowRight, Sparkles, Brain, DollarSign, Heart } from "lucide-react";
import { getAllPosts } from "@/lib/mdx";

const categories = [
    {
        name: "AI & Agents",
        slug: "AI",
        description: "The future of intelligence and automation.",
        icon: Sparkles,
    },
    {
        name: "Finance",
        slug: "Finance",
        description: "Wealth, opportunity, and economic systems.",
        icon: DollarSign,
    },
    {
        name: "Mental Models",
        slug: "Mental Models",
        description: "Frameworks for better thinking.",
        icon: Brain,
    },
    {
        name: "Life & Relationships",
        slug: "Life",
        description: "Navigating the human experience.",
        icon: Heart,
    },
];

export default async function JournalPage() {
    // Fetch real posts from CMS directory
    const recentPosts = await getAllPosts("journal");

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="flex-1 py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto space-y-16">

                    {/* Header */}
                    <div className="space-y-4 max-w-3xl">
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight">The Journal</h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            Thoughts, essays, and explorations. A collection of what I am learning and what I am thinking.
                        </p>
                    </div>

                    {/* Categories Grid */}
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-6">Explore by Topic</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                            {categories.map((cat) => (
                                <Link
                                    key={cat.slug}
                                    href={`/journal/category/${cat.slug}`}
                                    className="group block p-6 rounded-xl border border-border/50 bg-card hover:bg-accent/50 transition-colors"
                                >
                                    <cat.icon className="w-8 h-8 mb-4 text-foreground/80 group-hover:text-foreground transition-colors" />
                                    <h3 className="font-serif font-bold text-lg mb-1">{cat.name}</h3>
                                    <p className="text-sm text-muted-foreground">{cat.description}</p>
                                </Link>
                            ))}
                        </div>
                    </section>

                    {/* Recent Posts */}
                    <section>
                        <h2 className="text-sm font-bold uppercase tracking-wider text-muted-foreground mb-8">Recent Entries</h2>
                        <div className="space-y-8 max-w-3xl">
                            {recentPosts.map((post) => (
                                <article key={post.slug} className="group flex flex-col gap-2 relative pl-8 border-l border-border/40 hover:border-foreground/30 transition-colors">
                                    <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-foreground transition-colors" />
                                    <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                                        <span>{new Date(post.date).toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" })}</span>
                                        <span className="w-1 h-1 rounded-full bg-current" />
                                        <span className="text-foreground">{post.category}</span>
                                    </div>
                                    <Link href={`/journal/${post.slug}`} className="block group-hover:underline decoration-1 underline-offset-4">
                                        <h3 className="text-2xl font-serif font-bold leading-tight">{post.title}</h3>
                                    </Link>
                                    <p className="text-muted-foreground leading-relaxed">
                                        {post.excerpt}
                                    </p>
                                    <Link href={`/journal/${post.slug}`} className="hidden group-hover:inline-flex items-center text-sm font-medium mt-2 text-foreground/80">
                                        Read more <ArrowRight className="ml-1 w-4 h-4" />
                                    </Link>
                                </article>
                            ))}
                        </div>
                    </section>

                </div>
            </main>
        </div>
    );
}
