"use client"

import Image from "next/image"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 py-20">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="mb-8 flex justify-center"
        >
          <div className="relative w-32 h-32 overflow-hidden border-4 border-foreground brutal-shadow">
            <Image src="/professional-headshot.png" alt="Cody Robertson" fill className="object-cover" priority />
          </div>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-5xl md:text-7xl font-black uppercase mb-4 text-balance tracking-tighter"
        >
          Cody Robertson
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-xl md:text-2xl font-black text-accent mb-6 text-balance uppercase"
        >
          Vibe Coding Expert
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="text-lg md:text-xl text-muted-foreground mb-8 text-balance font-bold"
        >
          Designer & Startup Specialist
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="flex gap-4 justify-center flex-wrap"
        >
          <a
            href="#portfolio"
            className="inline-flex items-center justify-center bg-primary px-8 py-4 text-sm font-black uppercase tracking-wider text-primary-foreground border-4 border-primary brutal-shadow hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_currentColor] transition-all duration-100"
          >
            View Work
          </a>
          <a
            href="#contact"
            className="inline-flex items-center justify-center border-4 border-foreground bg-background px-8 py-4 text-sm font-black uppercase tracking-wider brutal-shadow hover:bg-accent hover:text-accent-foreground hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_currentColor] transition-all duration-100"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  )
}
