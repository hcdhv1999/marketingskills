"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  return (
    <section id="testimonials" className="relative px-6 py-28" aria-label="آراء العملاء">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">ثقة عملائنا</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">آراء العملاء</h2>
        </motion.div>

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="flex h-full flex-col rounded-3xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)] p-7 shadow-[var(--shadow-soft)]"
            >
              <span className="font-display text-4xl leading-none text-[var(--color-accent)]" aria-hidden>”</span>
              <blockquote className="mt-3 flex-1 leading-relaxed text-[var(--color-ink)]">{t.quote}</blockquote>
              <figcaption className="mt-5">
                <span className="block font-display text-[var(--color-ink)]">{t.name}</span>
                <span className="block text-sm text-[var(--color-ink-soft)]">{t.role}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
