"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { VAULT_PROJECTS, type VaultProject } from "@/lib/content";

export default function Vault() {
  const [open, setOpen] = useState<VaultProject | null>(null);

  return (
    <section id="vault" className="relative px-6 py-28" aria-label="خزينة الإنجازات">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">ملفات محمية</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">خزينة الإنجازات</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-ink-soft)]">
            كل مشروع ملف مغلق. افتحه لتكتشف التحدي والحل والنتيجة.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {VAULT_PROJECTS.map((p, i) => (
            <motion.button
              key={p.id}
              onClick={() => setOpen(p)}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-[var(--color-ink)]/12 bg-[var(--color-ink)] p-6 text-right text-[var(--color-canvas)]"
            >
              <div className="grain absolute inset-0 opacity-20" />
              <div className="relative">
                <div className="flex items-center justify-between text-xs text-[var(--color-canvas)]/50">
                  <span className="tracking-widest">{p.id}</span>
                  <span className="flex items-center gap-1">
                    <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent)]" /> مُؤمّن
                  </span>
                </div>
                <h3 className="mt-8 font-display text-2xl">{p.name}</h3>
                <p className="mt-1 text-sm text-[var(--color-canvas)]/60">{p.field}</p>
                <div className="mt-8 flex items-center justify-between">
                  <span className="rounded-full bg-[var(--color-accent)] px-3 py-1 text-sm font-medium text-[var(--color-ink)]">{p.metric}</span>
                  <span className="text-sm text-[var(--color-canvas)]/70 transition-transform group-hover:-translate-x-1">
                    افتح الملف ←
                  </span>
                </div>
              </div>
            </motion.button>
          ))}
        </div>
      </div>

      {/* Dramatic file reveal */}
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[60] flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="absolute inset-0 bg-[var(--color-ink)]/60 backdrop-blur-sm" onClick={() => setOpen(null)} />
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-label={open.name}
              initial={{ scale: 0.85, y: 40, rotateX: 12, opacity: 0 }}
              animate={{ scale: 1, y: 0, rotateX: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="relative z-10 w-full max-w-2xl overflow-hidden rounded-[2rem] bg-[var(--color-canvas)] p-8 shadow-[var(--shadow-lift)]"
            >
              <div className="flex items-center justify-between">
                <span className="text-xs tracking-widest text-[var(--color-ink-soft)]">{open.id}</span>
                <button onClick={() => setOpen(null)} aria-label="إغلاق" className="rounded-full border border-[var(--color-ink)]/15 px-3 py-1 text-sm text-[var(--color-ink-soft)] hover:bg-[var(--color-ink)]/5">
                  إغلاق ✕
                </button>
              </div>
              <h3 className="mt-4 font-display text-3xl text-[var(--color-ink)]">{open.name}</h3>
              <p className="text-[var(--color-accent)]">{open.field}</p>

              <dl className="mt-7 space-y-5">
                {[
                  { t: "التحدي", v: open.challenge },
                  { t: "الحل", v: open.solution },
                  { t: "النتيجة", v: open.result },
                ].map((row, i) => (
                  <motion.div
                    key={row.t}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.15 + i * 0.1 }}
                    className="border-r-2 border-[var(--color-accent)] pr-4"
                  >
                    <dt className="text-sm font-medium text-[var(--color-ink-soft)]">{row.t}</dt>
                    <dd className="mt-1 text-[var(--color-ink)]">{row.v}</dd>
                  </motion.div>
                ))}
              </dl>

              <div className="mt-7 rounded-2xl card-ink p-5 text-center">
                <span className="font-display text-3xl text-[var(--color-accent-soft)]">{open.metric}</span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
