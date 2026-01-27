import { getPostBySlug, getAllPosts } from "@/lib/mdx";
import { notFound } from "next/navigation";
import { MDXRemote } from "next-mdx-remote/rsc";
import { ThoughtInteractions } from "@/components/thoughts/ThoughtInteractions";
import Comments from "@/components/comments/Giscus";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    const posts = await getAllPosts("thoughts");
    return posts.map((post) => ({
        slug: post.slug,
    }));
}

export async function generateMetadata({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug("thoughts", slug);
    if (!post) {
        return {
            title: "Thought Not Found",
        };
    }

    return {
        title: `${post.excerpt?.slice(0, 50) || "Thought"} | Kareem's Digital Garden`,
        description: post.excerpt,
    };
}

export default async function ThoughtPage({ params }: PageProps) {
    const { slug } = await params;
    const post = await getPostBySlug("thoughts", slug);

    if (!post) {
        notFound();
    }

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <Link
                href="/thoughts"
                className="inline-flex items-center text-sm text-muted-foreground hover:text-primary mb-8 transition-colors"
            >
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to Thoughts
            </Link>

            <div className="border border-border rounded-lg p-8 bg-card text-card-foreground shadow-sm">
                <div className="flex items-center gap-3 mb-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-lg">
                        K
                    </div>
                    <div>
                        <p className="font-semibold">Kareem</p>
                        <p className="text-sm text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                </div>

                <div className="prose dark:prose-invert max-w-none text-base">
                    <MDXRemote source={post.content} />
                </div>

                <div className="mt-8 pt-6 border-t border-border/50">
                    <ThoughtInteractions post={post} slug={post.slug} />
                </div>
            </div>

            <div className="mt-12">
                <h3 className="text-xl font-semibold mb-4">Comments</h3>
                <Comments />
            </div>
        </div>
    );
}
