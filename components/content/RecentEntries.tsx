import Link from "next/link";
import { ArrowRight, CalendarDays, BookOpen } from "lucide-react";
import { getAllPosts, Post } from "@/lib/mdx";

export async function RecentEntries() {
  // Fetch from all categories
  const journalPosts = await getAllPosts("journal");
  const thoughtsPosts = await getAllPosts("thoughts");
  const mentalModelPosts = await getAllPosts("mental-models");

  // Format array and append root directory so we can link properly
  const formatPostType = (posts: Post[], directory: string) => 
    posts.map(post => ({ ...post, directory }));

  const allPosts = [
    ...formatPostType(journalPosts, "journal"),
    ...formatPostType(thoughtsPosts, "thoughts"),
    ...formatPostType(mentalModelPosts, "mental-models")
  ].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
   .slice(0, 3); // Get 3 most recent

  if (allPosts.length === 0) return null;

  return (
    <section className="py-24 bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-xl space-y-3">
            <h2 className="font-serif text-4xl md:text-5xl font-bold tracking-tight">Recent Cultivations</h2>
            <p className="text-muted-foreground text-lg">
              The latest thoughts, essays, and notes added to the digital garden.
            </p>
          </div>
          <Link 
            href="/journal" 
            className="group inline-flex items-center text-sm font-medium text-foreground hover:text-muted-foreground transition-colors"
          >
            View all entries 
            <ArrowRight className="ml-1 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allPosts.map((post) => (
            <Link 
              key={`${post.directory}-${post.slug}`} 
              href={`/${post.directory}/${post.slug}`}
              className="group flex flex-col h-full bg-background/50 backdrop-blur-sm border border-border/50 rounded-2xl p-6 transition-all hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1 hover:border-foreground/20"
            >
              <div className="flex items-center gap-3 text-xs font-medium text-muted-foreground mb-4">
                <span className="flex items-center bg-muted px-2.5 py-1 rounded-full text-foreground/80 capitalize">
                  {post.directory.replace("-", " ")}
                </span>
                <span className="flex items-center gap-1.5" suppressHydrationWarning>
                  <CalendarDays className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", { 
                    month: "short", day: "numeric", year: "numeric" 
                  })}
                </span>
              </div>
              
              <h3 className="font-serif text-2xl font-bold mb-3 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground leading-relaxed mb-6 line-clamp-3 flex-1">
                {post.excerpt}
              </p>

              <div className="flex items-center text-sm font-medium text-foreground/80 mt-auto group-hover:text-foreground transition-colors">
                <BookOpen className="w-4 h-4 mr-2 opacity-50 group-hover:opacity-100 transition-opacity" />
                Read more
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
