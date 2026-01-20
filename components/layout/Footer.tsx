export function Footer() {
    return (
        <footer className="w-full border-t border-border/40 bg-background py-6">
            <div className="container mx-auto flex flex-col items-center justify-between gap-4 px-4 md:flex-row md:px-6">
                <p className="text-center text-sm text-muted-foreground md:text-left">
                    &copy; {new Date().getFullYear()} Kareem. All rights reserved.
                </p>
                <div className="flex gap-4">
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        Twitter
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        GitHub
                    </a>
                    <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                        LinkedIn
                    </a>
                </div>
            </div>
        </footer>
    );
}
