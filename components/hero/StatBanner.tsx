"use client";

import { motion } from "framer-motion";

export function StatBanner() {
  const stats = [
    { label: "Articles", value: "100+" },
    { label: "Projects", value: "25+" },
    { label: "Years Experience", value: "10+" },
    { label: "Lines of Code", value: "1M+" },
  ];

  return (
    <section className="relative z-10 -mt-10 mb-20">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="max-w-5xl mx-auto glass rounded-2xl overflow-hidden shadow-2xl relative"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/5 via-transparent to-cyan-500/5 mix-blend-overlay"></div>
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-y md:divide-y-0 divide-border border border-border/50">
            {stats.map((stat, i) => (
              <div key={i} className="p-8 text-center flex flex-col items-center justify-center backdrop-blur-md bg-background/30 hover:bg-white/5 transition-colors duration-300">
                <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-br from-foreground to-foreground/60 mb-1">
                  {stat.value}
                </span>
                <span className="text-sm font-medium text-muted-foreground uppercase tracking-widest">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
