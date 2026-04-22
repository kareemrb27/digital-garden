"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Sparkles } from "lucide-react";

export function HomeHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1, y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center overflow-hidden pt-20 pb-16">
      {/* SaaS Light Ambient Background */}
      <div className="absolute inset-0 w-full h-full bg-background -z-20" />
      <motion.div 
        animate={{ scale: [1, 1.05, 1], opacity: [0.1, 0.15, 0.1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-[10%] left-[-10%] w-[50rem] h-[50rem] rounded-full bg-indigo-500/20 blur-[120px] -z-10 mix-blend-multiply" 
      />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            className="flex flex-col items-center xl:items-start text-center xl:text-left space-y-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center rounded-full border border-indigo-200 bg-indigo-50 px-4 py-1.5 text-sm font-medium text-indigo-700 backdrop-blur-sm">
                <Sparkles className="mr-2 h-4 w-4" />
                Where technology meets the human experience
              </div>
            </motion.div>
            
            <motion.div variants={itemVariants} className="space-y-6">
              <h1 className="font-heading text-5xl font-extrabold tracking-tight sm:text-6xl lg:text-[4.5rem] leading-[1.1]">
                <span className="block text-foreground mb-2">Welcome to</span>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 pb-2">
                  Navigate Systems, Tech and Human Impact
                </span>
              </h1>
              <p className="max-w-[38rem] mx-auto xl:mx-0 leading-relaxed text-muted-foreground text-lg sm:text-xl font-light">
                Humanity’s greatest gift is the ability to reason, experience, and create a lasting impact. By bringing deliberate consciousness to the forefront and understanding the systems we inhabit, we can nurture our minds to better navigate our surroundings. This project is an exploration of those areas—an attempt to bring my own consciousness into full awareness while inviting you to join me on the journey.
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="flex flex-col gap-4 sm:flex-row pt-4">
              <Link
                href="/journal"
                className="group relative inline-flex items-center justify-center h-14 px-8 text-base font-semibold transition-all rounded-full bg-slate-900 text-white hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(0,0,0,0.3)] duration-300"
              >
                Explore the Journal
                <ArrowRight className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center h-14 px-8 text-base font-medium transition-all rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:text-slate-900 hover:scale-105 duration-300 shadow-sm"
              >
                More About Me
              </Link>
            </motion.div>
          </motion.div>

          {/* Right Column: Large Vertical Profile Format with Geometric Background */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
            className="w-full max-w-lg mx-auto xl:mr-0 relative group"
          >
            {/* The Vertical Container: 3/4 Aspect Ratio */}
            <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl bg-cyan-200 transition-transform duration-700 group-hover:scale-[1.02]">
              
              {/* Accent elements to look 'Pixis' style (moved under the top matte) */}
              <div className="absolute top-10 right-10 w-40 h-40 bg-white/20 rounded-full blur-2xl z-0"></div>
              <div className="absolute bottom-20 left-10 w-8 h-8 rounded bg-white/20 rotate-45 z-0"></div>

              {/* The Profile Image */}
              <Image 
                src="/images/Profile_1.jpeg" 
                alt="Kareem's Profile Image" 
                fill 
                priority
                className="object-cover relative z-10 mix-blend-multiply contrast-125 saturate-50 group-hover:saturate-100 transition-all duration-700" 
              />

              {/* Solid Non-Transparent Orange Overlays (z-20, resting ABOVE the image) */}
              {/* Top Diagonal Orange Matte covering the underlying trees perfectly */}
              <div 
                className="absolute inset-0 bg-[#F47F39] z-20 pointer-events-none shadow-xl" 
                style={{ clipPath: 'polygon(0 0, 100% 0, 100% 20%, 0 36%)' }}
              ></div>
              
              {/* Bottom Diagonal Orange Matte */}
              <div 
                className="absolute inset-0 bg-[#F47F39] z-20 pointer-events-none shadow-xl" 
                style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 84%)' }}
              ></div>
              
              {/* Overlay styling for extra polish */}
              <div className="absolute inset-0 rounded-3xl border border-white/20 z-20 pointer-events-none"></div>
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
