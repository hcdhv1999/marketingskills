"use client";

import { motion } from "framer-motion";
import { VAULT_PROJECTS } from "@/lib/content";

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
          {VAULT_PROJECTS.map((p, i) => (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className="flex h-full flex-col rounded-3xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)] p-6 shadow-[var(--shadow-soft)]"
            >
              <div className="flex items-center justify-between">
                <h3 className="font-display text-xl text-[var(--color-ink)]">{p.name}</h3>
                <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-xs font-medium text-[var(--color-canvas)]">
                  {p.metric}
                </span>
              </div>
              <p className="mt-1 text-sm text-[var(--color-accent)]">{p.field}</p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="font-medium text-[var(--color-ink)]">التحدي</dt>
                  <dd className="text-[var(--color-ink-soft)]">{p.challenge}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--color-ink)]">الحل</dt>
                  <dd className="text-[var(--color-ink-soft)]">{p.solution}</dd>
                </div>
                <div>
                  <dt className="font-medium text-[var(--color-ink)]">النتيجة</dt>
                  <dd className="text-[var(--color-ink-soft)]">{p.result}</dd>
                </div>
              </dl>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
