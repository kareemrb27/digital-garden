'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Share2, Check } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Post } from '@/lib/mdx';

interface ThoughtInteractionsProps {
    post: Post;
    slug: string;
}

export function ThoughtInteractions({ post, slug }: ThoughtInteractionsProps) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(0);
    const [copied, setCopied] = useState(false);

    const handleLike = () => {
        setLikes((prev) => (liked ? prev - 1 : prev + 1));
        setLiked(!liked);
    };

    const handleShare = async () => {
        const url = `${window.location.origin}/thoughts/${slug}`;
        if (navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this thought',
                    text: post.excerpt,
                    url,
                });
            } catch {
                // user cancelled share — no action needed
            }
        } else {
            await navigator.clipboard.writeText(url);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        }
    };

    return (
        <div className="flex gap-6 mt-4 border-t border-border/50 pt-4">
            <button
                onClick={handleLike}
                className={cn(
                    "flex items-center gap-2 text-sm transition-colors hover:text-red-500",
                    liked ? "text-red-500" : "text-muted-foreground"
                )}
            >
                <Heart className={cn("h-4 w-4", liked && "fill-current")} />
                <span>{likes}</span>
            </button>

            <Link
                href={`/thoughts/${slug}`}
                className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
                <MessageCircle className="h-4 w-4" />
                <span>Comment</span>
            </Link>

            <button
                onClick={handleShare}
                className={cn(
                    "ml-auto flex items-center gap-1.5 text-xs font-medium px-2 py-1 rounded-md transition-colors",
                    copied
                        ? "text-green-600 bg-green-50"
                        : "text-muted-foreground hover:text-primary hover:bg-muted"
                )}
                aria-label="Share"
            >
                {copied ? (
                    <>
                        <Check className="h-4 w-4" />
                        Copied
                    </>
                ) : (
                    <Share2 className="h-4 w-4" />
                )}
            </button>
        </div>
    );
}
