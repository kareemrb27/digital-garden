import Link from "next/link";
import { Github, Linkedin, Sparkles } from "lucide-react";

export function Footer() {
    return (
        <footer className="w-full bg-slate-50 border-t border-slate-200 pt-16 pb-8 overflow-hidden relative">
            {/* Subtle background glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-indigo-200 to-transparent"></div>
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/4 h-[100px] bg-indigo-100 blur-[80px] rounded-full"></div>

            <div className="container mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="md:col-span-2 space-y-6">
                        <Link href="/" className="flex items-center gap-2 group hover:opacity-90 transition-opacity">
                            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-indigo-500 to-cyan-500 flex items-center justify-center text-white shadow-lg">
                                <Sparkles className="w-4 h-4" />
                            </div>
                            <span className="font-heading text-xl font-bold tracking-tight text-slate-900">
                                Awareness
                            </span>
                        </Link>
                        <p className="text-slate-600 max-w-sm font-light text-base leading-relaxed">
                            A digital space where creativity meets performance. Exploring the bleeding edge of technology and human potential.
                        </p>
                    </div>
                    
                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Platform</h4>
                        <ul className="space-y-3">
                            <li><Link href="/journal" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Journal</Link></li>
                            <li><Link href="/thoughts" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Thoughts</Link></li>
                            <li><Link href="/frameworks" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Frameworks</Link></li>
                        </ul>
                    </div>

                    <div className="space-y-4">
                        <h4 className="font-semibold text-slate-900">Connect</h4>
                        <ul className="space-y-3">
                            <li><Link href="/about" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">About Me</Link></li>
                            <li><a href="/admin/index.html" className="text-slate-600 hover:text-indigo-600 transition-colors text-sm">Admin Portal</a></li>
                            <li className="pt-2 flex gap-4">
                                <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors group" aria-label="X (formerly Twitter)">
                                    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current group-hover:scale-110 transition-transform">
                                        <path d="M18.901 1.153h3.68l-8.04 9.19L24 22.846h-7.406l-5.8-7.584-6.638 7.584H.474l8.6-9.83L0 1.154h7.594l5.243 6.932ZM17.61 20.644h2.039L6.486 3.24H4.298Z" />
                                    </svg>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors group" aria-label="GitHub">
                                    <Github className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-slate-900 transition-colors group" aria-label="LinkedIn">
                                    <Linkedin className="h-5 w-5 group-hover:scale-110 transition-transform" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200">
                    <p className="text-sm text-slate-500" suppressHydrationWarning>
                        &copy; {new Date().getFullYear()} Awareness. All rights reserved. Built with Next.js.
                    </p>
                    <div className="flex gap-6 text-sm text-slate-500">
                        <Link href="/privacy" className="hover:text-slate-900 transition-colors">Privacy Policy</Link>
                        <Link href="/terms" className="hover:text-slate-900 transition-colors">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
