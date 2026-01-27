import { getAllPosts } from "@/lib/mdx";
import { ThoughtCard } from "@/components/thoughts/ThoughtCard";

export const metadata = {
    title: "Running Thoughts | Kareem's Digital Garden",
    description: "A stream of consciousness, micro-blog posts, and random musings.",
};

export default async function ThoughtsPage() {
    const thoughts = await getAllPosts("thoughts");

    return (
        <div className="container mx-auto px-4 py-12 max-w-2xl">
            <div className="mb-10 text-center">
                <h1 className="text-3xl font-bold tracking-tight mb-4">Running Thoughts</h1>
                <p className="text-muted-foreground">
                    Snippets of ideas, quick updates, and things I find interesting.
                </p>
            </div>

            <div className="space-y-6">
                {thoughts.length > 0 ? (
                    thoughts.map((thought) => (
                        <ThoughtCard key={thought.slug} post={thought} />
                    ))
                ) : (
                    <div className="text-center py-10 border border-dashed rounded-lg">
                        <p className="text-muted-foreground">No thoughts published yet.</p>
                    </div>
                )}
            </div>
        </div>
    );
}
