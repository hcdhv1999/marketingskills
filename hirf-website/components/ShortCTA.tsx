"use client";

import { motion } from "framer-motion";

export default function ShortCTA() {
  return (
    <section className="relative px-6 py-14" aria-label="ابدأ مشروعك">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto flex max-w-4xl flex-col items-center gap-5 rounded-3xl card-ink px-8 py-10 text-center sm:flex-row sm:justify-between sm:text-right"
      >
        <p className="font-display text-2xl text-[var(--color-canvas)] sm:text-3xl">
          جاهز تبدأ؟ خلّنا نبني مشروعك القادم.
        </p>
        <a
          href="#packages"
          className="shrink-0 rounded-full bg-[var(--color-accent)] px-8 py-3.5 font-medium text-[var(--color-ink)] transition-transform hover:scale-105"
        >
          ابدأ مشروعك الآن
        </a>
      </motion.div>
    </section>
  );
}
