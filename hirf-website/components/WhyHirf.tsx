"use client";

import { motion } from "framer-motion";
import { WHY_CARDS } from "@/lib/content";

export default function WhyHirf() {
  return (
    <section id="why" className="relative px-6 py-28" aria-label="لماذا حِرف؟">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">لماذا حِرف؟</h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {WHY_CARDS.map((card, i) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -8 }}
              className="glass rounded-3xl border border-[var(--color-ink)]/10 p-8"
            >
              <span className="text-4xl text-[var(--color-accent)]" aria-hidden>
                {card.glyph}
              </span>
              <h3 className="mt-5 font-display text-2xl text-[var(--color-ink)]">{card.title}</h3>
              <p className="mt-3 leading-relaxed text-[var(--color-ink-soft)]">{card.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
