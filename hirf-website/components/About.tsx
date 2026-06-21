"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-28" aria-label="من نحن">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">من نحن</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">من نحن</h2>
          <p className="mx-auto mt-6 max-w-3xl text-balance text-lg leading-loose text-[var(--color-ink-soft)] sm:text-xl">
            حِرف وكالة رقمية متخصصة في بناء الحضور الرقمي للمشاريع والعلامات التجارية عبر تأسيس
            المتاجر الإلكترونية، التصميم الجرافيكي، إدارة الحملات الإعلانية، وإدارة حسابات التواصل
            الاجتماعي.
          </p>
          <a
            href="#gateway"
            className="mt-9 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-8 py-3.5 text-base font-medium text-[var(--color-canvas)] shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            ابدأ معنا
            <span aria-hidden>←</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
