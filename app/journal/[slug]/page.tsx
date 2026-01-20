import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { getPostBySlug } from "@/lib/mdx";
import { MDXRemote } from "next-mdx-remote/rsc";
import { notFound } from "next/navigation";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
    const resolvedParams = await params;
    const post = await getPostBySlug("journal", resolvedParams.slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 pb-24">
                {/* Article Header */}
                <header className="relative py-20 px-4 md:px-6 border-b border-border/40 bg-muted/10">
                    <div className="container mx-auto max-w-3xl space-y-8">
                        <Link href="/journal" className="inline-flex items-center text-sm font-medium text-muted-foreground hover:text-foreground transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4 mr-2" /> Back to Journal
                        </Link>

                        <div className="space-y-4">
                            <div className="flex items-center gap-3 text-sm font-medium">
                                <span className="px-3 py-1 rounded-full bg-foreground text-background text-xs uppercase tracking-wide">
                                    {post.category}
                                </span>
                            </div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight text-foreground">
                                {post.title}
                            </h1>
                            <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                                {post.excerpt}
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
            <Footer />
        </div>
    );
}
