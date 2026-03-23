"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function HomeHero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8 },
    },
  };

  return (
    <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 w-full h-full bg-background -z-20" />
      <div className="absolute -top-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-indigo-500/10 to-purple-500/10 blur-[120px] -z-10 animate-pulse-slow" />
      <div className="absolute top-[40%] -right-[10%] w-[40%] h-[60%] rounded-full bg-gradient-to-br from-emerald-500/10 to-teal-500/10 blur-[120px] -z-10" />

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          className="mx-auto max-w-4xl space-y-10 text-center md:text-left"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="font-serif text-5xl font-bold tracking-tight sm:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">
              Hello, I&apos;m Kareem.
            </h1>
            <p className="max-w-[48rem] mx-auto md:mx-0 leading-relaxed text-muted-foreground text-xl sm:text-2xl font-light">
              I am an IT professional, but I am also an <span className="text-foreground font-medium">Artist</span>, a <span className="text-foreground font-medium">Mentor</span>, and a <span className="text-foreground font-medium">Thinker</span>.
            </p>
          </motion.div>

          <motion.p variants={itemVariants} className="max-w-[42rem] mx-auto md:mx-0 leading-relaxed text-muted-foreground text-lg sm:text-xl">
            This is my digital garden—a fluid space to explore the intersections of Technology, Life, and the Human Experience.
          </motion.p>

          <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row sm:justify-center md:justify-start pt-4">
            <Link
              href="/journal"
              className="group relative inline-flex items-center justify-center h-12 px-8 text-sm font-medium transition-all rounded-full bg-foreground text-background hover:scale-105 active:scale-95 shadow-lg shadow-foreground/20"
            >
              Read the Journal
              <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center h-12 px-8 text-sm font-medium transition-all rounded-full border border-border bg-background/50 backdrop-blur-sm hover:bg-accent hover:text-accent-foreground hover:scale-105 active:scale-95"
            >
              More About Me
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
