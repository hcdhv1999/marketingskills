"use client";

import { motion } from "framer-motion";

const WORKS_DRIVE_URL =
  "https://drive.google.com/drive/folders/1Si4t-OLSsuLwj7HGxRwUfSim2NzUdSER?usp=sharing";

export default function Work() {
  return (
    <section id="work" className="relative px-6 py-28" aria-label="أعمالنا">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">أعمالنا</h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="mx-auto flex max-w-xl flex-col items-center gap-5 rounded-3xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)] p-10 text-center shadow-[var(--shadow-soft)]"
        >
          <span className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#1f7a46]/12 text-[#1f7a46]">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" className="h-8 w-8" aria-hidden>
              <rect x="3" y="3" width="18" height="18" rx="3" />
              <circle cx="8.5" cy="8.5" r="1.5" />
              <path d="m21 15-5-5L5 21" />
            </svg>
          </span>
          <p className="text-lg leading-relaxed text-[var(--color-ink)]">
            لمشاهدة الأعمال بكامل الجودة{" "}
            <a
              href={WORKS_DRIVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="font-display text-[var(--color-accent)] underline underline-offset-4 transition-colors hover:text-[var(--color-ink)]"
            >
              اضغط هنا
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
