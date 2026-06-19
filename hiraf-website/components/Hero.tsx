"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowLeft, Layers } from "lucide-react";
import Particles from "./Particles";
import AbstractShapes from "./AbstractShapes";

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const container = {
    hidden: {},
    show: { transition: { staggerChildren: 0.12, delayChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative flex min-h-screen items-center overflow-hidden bg-beige pt-28 dark:bg-teal-deep"
    >
      {/* Gradient wash + decoration (brand colors only) */}
      <div className="absolute inset-0 bg-gradient-to-br from-beige via-beige to-gold/10 dark:from-teal-deep dark:via-teal-dark dark:to-teal" />
      <AbstractShapes dense />
      <Particles count={30} />

      <motion.div
        style={{ y, opacity }}
        className="relative z-10 mx-auto w-full max-w-5xl px-6 text-center"
      >
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.span
            variants={item}
            className="mb-6 inline-block rounded-full border border-gold/40 bg-gold/10 px-5 py-2 text-sm font-semibold gold-text"
          >
            وكالة حِرف الرقمية
          </motion.span>

          <motion.h1
            variants={item}
            className="font-heading text-4xl font-black leading-[1.15] sm:text-6xl md:text-7xl"
          >
            <span className="block">نبني</span>
            <span className="gradient-text">حضورك الرقمي</span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mx-auto mt-7 max-w-2xl text-base leading-relaxed opacity-80 sm:text-xl"
          >
            كل صنعة لها حِرفة. نحوّل الأفكار إلى هويات بصرية ومتاجر إلكترونية
            وتجارب رقمية تساعد مشروعك على النمو وبناء حضور قوي في السوق.
          </motion.p>

          <motion.div
            variants={item}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <a
              href="#contact"
              className="group flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-8 py-4 text-base font-bold text-teal shadow-gold transition-all duration-300 hover:scale-105 hover:shadow-gold-lg sm:w-auto"
            >
              ابدأ مشروعك
              <ArrowLeft className="h-5 w-5 transition-transform duration-300 group-hover:-translate-x-1" />
            </a>
            <a
              href="#logo-pricing"
              className="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-teal bg-transparent px-8 py-4 text-base font-bold text-teal transition-all duration-300 hover:bg-teal hover:text-beige dark:border-beige dark:text-beige dark:hover:bg-beige dark:hover:text-teal sm:w-auto"
            >
              <Layers className="h-5 w-5" />
              تصفح الباقات
            </a>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll cue */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
      >
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-gold/60 pt-2">
          <div className="h-2 w-1 rounded-full bg-gold" />
        </div>
      </motion.div>
    </section>
  );
}
