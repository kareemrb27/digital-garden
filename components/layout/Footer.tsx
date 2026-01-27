import { Github, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Kareem. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group" aria-label="X (formerly Twitter)">
                        <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current group-hover:scale-110 transition-transform">
                            <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                        </svg>
                    </a>
                    <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group" aria-label="GitHub">
                        <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-foreground transition-colors group" aria-label="LinkedIn">
                        <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                    </a>
                </div>
            </div>
        </footer>
    );
}
