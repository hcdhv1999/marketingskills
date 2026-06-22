"use client";

import { motion } from "framer-motion";
import { WORKS } from "@/lib/content";

export default function Work() {
  return (
    <section id="work" className="relative px-6 py-28" aria-label="أعمالنا">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">أعمالنا</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <motion.article
              key={w.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="flex h-full flex-col justify-center rounded-3xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)] p-8 text-center shadow-[var(--shadow-soft)]"
            >
              <h3 className="font-display text-2xl text-[var(--color-ink)]">{w.name}</h3>
              <p className="mt-2 text-[var(--color-accent)]">{w.field}</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
