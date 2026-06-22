"use client";

import { motion } from "framer-motion";

export default function Landing() {
  return (
    <section
      className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-6 text-center"
      aria-label="حِرف"
    >
      <motion.h1
        initial={{ opacity: 0, y: 24, filter: "blur(8px)" }}
        animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
        className="font-display text-7xl leading-none text-[var(--color-ink)] sm:text-8xl md:text-9xl"
      >
        حِرف
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
        className="mt-6 text-2xl text-[var(--color-ink-soft)] sm:text-3xl md:text-4xl"
      >
        كل صنعة لها حِرفة
      </motion.p>

      {/* Scroll cue → من نحن */}
      <motion.a
        href="#about"
        aria-label="انزل إلى من نحن"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-10 flex flex-col items-center gap-2 text-[var(--color-ink-soft)]"
      >
        <span className="text-xs tracking-widest">انزل للأسفل</span>
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
          className="block h-8 w-px bg-[var(--color-ink-soft)]"
        />
      </motion.a>
    </section>
  );
}
