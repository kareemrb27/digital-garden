import { getAllPosts } from "@/lib/mdx";
import Link from "next/link";
import { ArrowLeft, ArrowRight, SearchX } from "lucide-react";

export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
    const resolvedParams = await params;
    // Decode URI component because slugs might have spaces built in from the categories array mapping
    const categorySlug = decodeURIComponent(resolvedParams.category).toLowerCase();
    
    // Fetch all journal posts
    const allPosts = await getAllPosts("journal");
    
    // Filter posts by comparing the sanitized category
    const categoryPosts = allPosts.filter(
        (post) => post.category?.toLowerCase() === categorySlug
    );

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="flex-1 py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto space-y-16 max-w-3xl">
                    {/* Header */}
                    <div className="space-y-6">
                        <Link href="/journal" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
                        </Link>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold tracking-tight capitalize border-b border-border/40 pb-6">
                            Topic: <span className="text-transparent bg-clip-text bg-[var(--gradient-primary)]">{decodeURIComponent(resolvedParams.category)}</span>
                        </h1>
                    </div>

                    {/* Posts List or Empty State */}
                    <section>
                        {categoryPosts.length === 0 ? (
                            <div className="flex flex-col items-center justify-center p-12 mt-12 bg-muted/20 border border-border/50 rounded-2xl text-center space-y-4">
                                <div className="p-4 bg-muted/30 rounded-full mb-2">
                                    <SearchX className="w-8 h-8 text-muted-foreground/50" />
                                </div>
                                <h3 className="text-xl font-bold font-serif">No entries found</h3>
                                <p className="text-muted-foreground max-w-sm">
                                    I haven't published any thoughts under the "{decodeURIComponent(resolvedParams.category)}" category yet. Check back soon!
                                </p>
                            </div>
                        ) : (
                            <div className="space-y-8">
                                <p className="text-sm font-medium uppercase tracking-wider text-muted-foreground mb-8">
                                    Exploring {categoryPosts.length} entries matching this category
                                </p>
                                {categoryPosts.map((post) => (
                                    <article key={post.slug} className="group flex flex-col gap-2 relative pl-8 border-l border-border/40 hover:border-foreground/30 transition-colors">
                                        <div className="absolute -left-[5px] top-2 w-2.5 h-2.5 rounded-full bg-border group-hover:bg-foreground transition-colors" />
                                        <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground">
                                            <span>{new Date(post.date).toLocaleDateString("en-US", { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                                        </div>
                                        <Link href={`/journal/${post.slug}`} className="block group-hover:underline decoration-1 underline-offset-4">
                                            <h3 className="text-2xl font-serif font-bold leading-tight">{post.title}</h3>
                                        </Link>
                                        <p className="text-muted-foreground leading-relaxed mt-2">
                                            {post.excerpt}
                                        </p>
                                        <Link href={`/journal/${post.slug}`} className="hidden group-hover:inline-flex items-center text-sm font-medium mt-3 text-indigo-600 transition-colors">
                                            Read more <ArrowRight className="ml-1 w-4 h-4" />
                                        </Link>
                                    </article>
                                ))}
                            </div>
                        )}
                    </section>
                </div>
            </main>
        </div>
    );
}
