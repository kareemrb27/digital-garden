import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { IdentitySwitcher } from "@/components/content/IdentitySwitcher";

export default function AboutPage() {
    return (
        <div className="min-h-screen flex flex-col bg-background">
            <Navbar />
            <main className="flex-1 py-16 md:py-24 px-4 md:px-6">
                <div className="container mx-auto space-y-16">
                    {/* Header */}
                    <div className="max-w-3xl mx-auto text-center space-y-6">
                        <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight">
                            The Integrated Self
                        </h1>
                        <p className="text-xl text-muted-foreground leading-relaxed">
                            For a long time, I thought I had to be just one thing. An IT Professional.
                            But we are multitudes. This page is an exploration of the different masks I wear and the roles I play.
                        </p>
                    </div>

                    {/* Identity Switcher */}
                    <IdentitySwitcher />

                    {/* Philosophy Section */}
                    <div className="max-w-3xl mx-auto pt-16 border-t border-border/40">
                        <h3 className="text-2xl font-serif font-bold mb-6">Why this website?</h3>
                        <div className="prose prose-zinc dark:prose-invert max-w-none text-lg leading-relaxed text-muted-foreground">
                            <p>
                                I felt isolated, like a face in the crowd without a voice. I realized that to find purpose, I needed to
                                externalize my internal thoughts. I needed a place to "think out loud."
                            </p>
                            <p>
                                This digital garden is my commitment to:
                            </p>
                            <ul className="list-disc pl-6 space-y-2 mt-4 text-foreground/90">
                                <li><strong>Share</strong> the frameworks and mental models I use.</li>
                                <li><strong>Connect</strong> with others through ideas rather than just status updates.</li>
                                <li><strong>Create</strong> value by documenting my journey in AI, Finance, and Life.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
