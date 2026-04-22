"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { Sparkles } from "lucide-react";

const navItems = [
    { name: "Journal", href: "/journal" },
    { name: "Thoughts", href: "/thoughts" },
    { name: "Frameworks", href: "/frameworks" },
    { name: "About", href: "/about" },
];

import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Navbar() {
    const pathname = usePathname();

    return (
        <nav className="sticky top-0 z-50 w-full glass border-b-0 border-border/40 transition-all duration-300">
            <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-8">
                <Link href="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:shadow-indigo-500/40 transition-shadow">
                        <Sparkles className="w-4 h-4" />
                    </div>
                    <span className="font-heading text-xl font-bold tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-700">
                        Awareness
                    </span>
                </Link>
                
                <div className="flex items-center gap-8">
                    <div className="hidden md:flex gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className={cn(
                                    "text-sm font-semibold transition-all hover:text-indigo-600 relative group",
                                    pathname === item.href
                                        ? "text-foreground"
                                        : "text-muted-foreground/80"
                                )}
                            >
                                {item.name}
                                {pathname === item.href && (
                                    <span className="absolute -bottom-1.5 left-0 w-full h-[2px] bg-indigo-500 rounded-full blur-[1px]"></span>
                                )}
                            </Link>
                        ))}
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <ThemeToggle />
                        <Link href="/about" className="hidden sm:inline-flex items-center justify-center h-10 px-6 text-sm font-semibold transition-all rounded-full bg-slate-900 text-white hover:bg-indigo-600 hover:scale-105 active:scale-95 shadow-lg shadow-indigo-500/10">
                            Let's Connect
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
}
