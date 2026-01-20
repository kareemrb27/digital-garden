import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <section className="container mx-auto flex min-h-[80vh] flex-col justify-center px-4 md:px-6">
          <div className="mx-auto max-w-2xl space-y-8 text-center md:text-left">
            <h1 className="font-serif text-5xl font-bold tracking-tight md:text-7xl lg:text-8xl">
              Hello, I&apos;m Kareem.
            </h1>
            <p className="max-w-[42rem] leading-relaxed text-muted-foreground text-lg sm:text-xl sm:leading-8">
              I am an IT professional, but I am also an <span className="text-foreground font-medium">Artist</span>, a <span className="text-foreground font-medium">Mentor</span>, and a <span className="text-foreground font-medium">Thinker</span>.
            </p>
            <p className="max-w-[42rem] leading-relaxed text-muted-foreground text-lg sm:text-xl sm:leading-8">
              This is my digital garden—a space to explore the intersection of Technology, Life, and the Human Experience.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start">
              <LinkButton href="/journal" variant="outline">
                Read the Journal
              </LinkButton>
              <LinkButton href="/about" variant="default">
                More About Me
              </LinkButton>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

function LinkButton({ href, variant = "default", children }: { href: string; variant?: "default" | "outline"; children: React.ReactNode }) {
  const baseClass = "inline-flex items-center justify-center h-10 px-8 text-sm font-medium transition-colors rounded-md focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50";
  const variants = {
    default: "bg-foreground text-background hover:bg-foreground/90",
    outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground"
  };
  return (
    <a href={href} className={`${baseClass} ${variants[variant]}`}>
      {children}
    </a>
  )
}
