"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { WORKS, type Work } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function WorkCard({ work }: { work: Work }) {
  const [open, setOpen] = useState(false);
  const hasLogo = !!work.logo;
  const hasBanners = !!work.banners?.length;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-3xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)] shadow-[var(--shadow-soft)]">
      <button
        onClick={() => hasBanners && setOpen((v) => !v)}
        aria-expanded={open}
        className={`flex aspect-[3/2] w-full items-center justify-center p-8 ${hasBanners ? "cursor-pointer" : "cursor-default"}`}
      >
        {hasLogo ? (
          // Logo only — no border, original aspect preserved, centered.
          // eslint-disable-next-line @next/next/no-img-element
          <img src={work.logo} alt={work.name} className="max-h-full max-w-full object-contain" />
        ) : (
          <span className="text-center">
            <span className="block font-display text-2xl text-[var(--color-ink)]">{work.name}</span>
            <span className="mt-2 block text-[var(--color-accent)]">{work.field}</span>
          </span>
        )}
      </button>

      <AnimatePresence initial={false}>
        {open && hasBanners && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-3 p-3">
              {hasLogo && (
                <p className="px-2 text-center text-sm text-[var(--color-ink-soft)]">
                  <span className="font-display text-[var(--color-ink)]">{work.name}</span> — {work.field}
                </p>
              )}
              {work.banners!.map((src, i) => (
                // eslint-disable-next-line @next/next/no-img-element
                <img key={i} src={src} alt={`${work.name} ${i + 1}`} className="w-full rounded-xl" />
              ))}
              <button
                onClick={() => setOpen(false)}
                className="mx-auto mt-1 rounded-full border border-[var(--color-ink)]/15 px-5 py-1.5 text-sm text-[var(--color-ink-soft)] hover:bg-[var(--color-ink)]/5"
              >
                إغلاق
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </article>
  );
}

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

        <div className="grid items-start gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {WORKS.map((w, i) => (
            <motion.div
              key={w.name + i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
            >
              <WorkCard work={w} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
