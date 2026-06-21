"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";

export default function Landing() {
  const ref = useRef<HTMLDivElement>(null);
  const [phase, setPhase] = useState(0); // 0: line1, 1: line2
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  // Time-based reveal of the first two lines while the visitor is at rest.
  useEffect(() => {
    const t = setTimeout(() => setPhase(1), 2000);
    return () => clearTimeout(t);
  }, []);

  // Scroll-driven choreography for the third line + handoff to the gateway.
  const introOpacity = useTransform(scrollYProgress, [0, 0.28, 0.4], [1, 1, 0]);
  const craftOpacity = useTransform(scrollYProgress, [0.32, 0.5, 0.78, 0.92], [0, 1, 1, 0]);
  const craftScale = useTransform(scrollYProgress, [0.32, 0.6], [0.8, 1]);
  const craftY = useTransform(scrollYProgress, [0.32, 0.92], [60, -40]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.15, 0.3], [1, 1, 0]);

  return (
    <section ref={ref} className="relative h-[260vh]" aria-label="مقدمة غامرة">
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden">
        {/* Intro lines */}
        <motion.div style={{ opacity: introOpacity }} className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <AnimatePresence mode="wait">
            {phase === 0 ? (
              <motion.h1
                key="l1"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                exit={{ opacity: 0, y: -20, filter: "blur(8px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-4xl leading-tight text-[var(--color-ink)] sm:text-6xl md:text-7xl"
              >
                كل مشروع عظيم بدأ بفكرة.
              </motion.h1>
            ) : (
              <motion.h2
                key="l2"
                initial={{ opacity: 0, y: 20, filter: "blur(8px)" }}
                animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="font-display text-3xl leading-tight text-[var(--color-ink-soft)] sm:text-5xl md:text-6xl"
              >
                لكن الفكرة وحدها لا تكفي.
              </motion.h2>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Third line — revealed on scroll */}
        <motion.div
          style={{ opacity: craftOpacity, scale: craftScale, y: craftY }}
          className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center"
        >
          <p className="mb-4 text-sm tracking-[0.4em] text-[var(--color-accent)]">حِرف</p>
          <h2 className="font-display text-5xl leading-tight text-[var(--color-ink)] sm:text-7xl md:text-8xl">
            هنا تبدأ الحِرفة.
          </h2>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 text-[var(--color-ink-soft)]"
        >
          <span className="text-xs tracking-widest">انزل للأسفل</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
            className="block h-8 w-px bg-[var(--color-ink-soft)]"
          />
        </motion.div>
      </div>
    </section>
  );
}
