import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar, Brain, ArrowUpRight, Scale, Search, Target, HelpCircle } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

function getIconComponent(iconName: string | undefined) {
    if (!iconName) return HelpCircle;
    const icons: Record<string, any> = {
        Brain,
        ArrowUpRight,
        Scale,
        Search,
        Target
    };
    return icons[iconName] || HelpCircle;
}

export default async function FrameworkDetail({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getPostBySlug("frameworks", resolvedParams.slug);

    if (!post) {
        notFound();
    }

    const IconComponent = getIconComponent(post.icon);

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <main className="flex-1 pb-24">
                {/* Article Header */}
                <header className="relative py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
                    <div className="container mx-auto max-w-3xl space-y-8">
                        <Link href="/frameworks" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Frameworks
                        </Link>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <span className={cn("p-2 rounded-lg flex items-center justify-center", post.color || "bg-indigo-500/10 text-indigo-500")}>
                                    <IconComponent size={20} />
                                </span>
                                <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs uppercase tracking-wide">
                                    {post.category || "General"}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-foreground">
                                {post.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                {post.description || post.excerpt}
                            </p>
                            <div className="flex items-center gap-6 text-sm text-muted-foreground pt-4 border-t border-border/40">
                                <span className="flex items-center gap-2">
                                    <Calendar className="w-4 h-4" /> {post.date}
                                </span>
                                <span className="flex items-center gap-2">
                                    <Clock className="w-4 h-4" /> {post.readTime}
                                </span>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Article Content */}
                <article className="container mx-auto max-w-3xl px-4 md:px-6 py-12">
                    <div className="prose prose-zinc dark:prose-invert prose-lg max-w-none 
                prose-headings:font-serif prose-headings:font-bold 
                prose-p:leading-relaxed prose-p:text-muted-foreground prose-p:text-lg
                prose-strong:text-foreground prose-strong:font-semibold
                prose-a:text-foreground prose-a:decoration-1 prose-a:underline-offset-4 hover:prose-a:decoration-2
                prose-li:text-muted-foreground">
                        <MDXRemote source={post.content} />
                    </div>
                </article>
            </main>
        </div>
    );
}
