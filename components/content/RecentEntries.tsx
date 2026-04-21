import Link from "next/link";
import { ArrowRight, CalendarDays, BookOpen, Layers } from "lucide-react";
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
    <section className="py-24 relative overflow-hidden">
      {/* Background subtleties */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-indigo-900/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl space-y-4">
            <div className="inline-flex items-center rounded-full border border-cyan-200 bg-cyan-50 px-3 py-1 text-sm font-medium text-cyan-700 backdrop-blur-sm mb-2">
              <Layers className="mr-2 h-4 w-4" />
              Intelligence Hub
            </div>
            <h2 className="font-heading text-4xl md:text-5xl font-extrabold tracking-tight">Recent Cultivations</h2>
            <p className="text-muted-foreground text-lg md:text-xl font-light">
              The latest essays, notes, and frameworks processed in the digital garden.
            </p>
          </div>
          <Link 
            href="/journal" 
            className="group inline-flex items-center justify-center px-6 py-3 text-sm font-semibold rounded-full bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors text-slate-900"
          >
            View all entries 
            <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {allPosts.map((post, i) => (
            <Link 
              key={`${post.directory}-${post.slug}`} 
              href={`/${post.directory}/${post.slug}`}
              className={`group flex flex-col h-full glass rounded-3xl p-8 transition-all duration-500 hover:shadow-[0_0_30px_-5px_rgba(99,102,241,0.2)] hover:-translate-y-2 relative overflow-hidden ${i === 0 ? "md:col-span-2 lg:col-span-1" : ""}`}
            >
              {/* Dynamic hover gradient border effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-indigo-200 rounded-3xl transition-colors duration-500 pointer-events-none" />
              <div className="absolute -right-20 -top-20 w-40 h-40 bg-indigo-50 blur-[50px] group-hover:bg-indigo-100 transition-colors duration-500" />
              
              <div className="flex items-center gap-3 text-xs font-semibold text-muted-foreground mb-6 uppercase tracking-wider relative z-10">
                <span className="flex items-center bg-indigo-50 text-indigo-600 border border-indigo-100 px-3 py-1 rounded-full">
                  {post.directory.replace("-", " ")}
                </span>
                <span className="flex items-center gap-1.5 opacity-70">
                  <CalendarDays className="w-3.5 h-3.5" />
                  {new Date(post.date).toLocaleDateString("en-US", { 
                    month: "short", day: "numeric", year: "numeric" 
                  })}
                </span>
              </div>
              
              <h3 className="font-heading text-2xl lg:text-3xl font-bold mb-4 text-foreground group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-indigo-600 group-hover:to-cyan-600 transition-all duration-300 line-clamp-3 relative z-10">
                {post.title}
              </h3>
              
              <p className="text-muted-foreground/80 leading-relaxed mb-8 line-clamp-3 flex-1 text-base relative z-10">
                {post.excerpt}
              </p>

              <div className="flex items-center text-sm font-semibold text-indigo-600 mt-auto group-hover:text-indigo-800 transition-colors relative z-10">
                <BookOpen className="w-4 h-4 mr-2" />
                Read more
                <ArrowRight className="w-4 h-4 ml-1 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
