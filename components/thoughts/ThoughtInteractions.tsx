'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Post } from '@/lib/mdx';

interface ThoughtInteractionsProps {
    post: Post;
    slug: string;
}

export function ThoughtInteractions({ post, slug }: ThoughtInteractionsProps) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(Math.floor(Math.random() * 10)); // Placeholder

    const handleLike = () => {
        if (liked) {
            setLikes(prev => prev - 1);
        } else {
            setLikes(prev => prev + 1);
        }
        setLiked(!liked);
    };

    const handleShare = async () => {
        if (typeof navigator !== 'undefined' && navigator.share) {
            try {
                await navigator.share({
                    title: 'Check out this thought',
                    text: post.excerpt,
                    url: window.location.origin + `/thoughts/${slug}`,
                });
            } catch (err) {
                console.error('Error sharing:', err);
            }
        } else {
            if (typeof navigator !== 'undefined') {
                navigator.clipboard.writeText(window.location.origin + `/thoughts/${slug}`);
                alert('Link copied to clipboard!');
            }
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
                className="ml-auto p-1 rounded-full hover:bg-muted transition-colors text-muted-foreground hover:text-primary"
            >
                <Share2 className="h-4 w-4" />
            </button>
        </div>
    );
}
