import Link from 'next/link';
import { Post } from '@/lib/mdx';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { ThoughtInteractions } from './ThoughtInteractions';

interface ThoughtCardProps {
    post: Post;
}

export function ThoughtCard({ post }: ThoughtCardProps) {
    return (
        <div className="border border-border rounded-lg p-6 bg-card text-card-foreground shadow-sm hover:shadow-md transition-shadow">
            <div className="flex justify-between items-start mb-4">
                <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                        K
                    </div>
                    <div>
                        <p className="font-semibold text-sm">Kareem</p>
                        <p className="text-xs text-muted-foreground">{new Date(post.date).toLocaleDateString()}</p>
                    </div>
                </div>
            </div>

            <div className="prose dark:prose-invert max-w-none mb-6 text-sm">
                <MDXRemote source={post.content} />
            </div>

            <ThoughtInteractions post={post} slug={post.slug} />
        </div>
    );
}
