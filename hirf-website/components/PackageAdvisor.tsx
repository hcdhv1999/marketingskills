"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useExperience } from "./ExperienceContext";

type Need = "store" | "design" | "ads";
type Stage = "start" | "grow";

const NEEDS: { id: Need; label: string }[] = [
  { id: "store", label: "متجر إلكتروني" },
  { id: "design", label: "هوية وتصاميم" },
  { id: "ads", label: "إعلانات ممولة" },
];

const STAGES: { id: Stage; label: string }[] = [
  { id: "start", label: "في البداية" },
  { id: "grow", label: "أبحث عن التوسّع" },
];

const RESULT: Record<Need, Record<Stage, string>> = {
  store: { start: "باقة نواة", grow: "باقة نمو" },
  design: { start: "هوية بيسك", grow: "هوية أساسية" },
  ads: { start: "منصة واحدة", grow: "منصتان" },
};

export default function PackageAdvisor() {
  const { requestPackage } = useExperience();
  const [need, setNeed] = useState<Need | null>(null);
  const [stage, setStage] = useState<Stage | null>(null);

  const done = need && stage;
  const recommendation = done ? RESULT[need!][stage!] : null;

  const goToPackage = () => {
    if (!recommendation) return;
    // The packages showcase reacts to this and scrolls directly to the card.
    requestPackage(recommendation);
  };

  return (
    <section id="advisor" className="relative px-6 py-28" aria-label="اقترح الباقة المناسبة">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">اقترح الباقة المناسبة</h2>
        </motion.div>

        <div className="glass rounded-[2rem] border border-[var(--color-ink)]/10 p-6 shadow-[var(--shadow-soft)] sm:p-8">
          <p className="mb-3 font-display text-lg text-[var(--color-ink)]">ما الذي تحتاجه أكثر؟</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {NEEDS.map((n) => (
              <button
                key={n.id}
                onClick={() => setNeed(n.id)}
                aria-pressed={need === n.id}
                className={`rounded-2xl border px-4 py-3 text-right text-sm transition-colors ${
                  need === n.id
                    ? "card-ink border-[var(--color-ink)]"
                    : "border-[var(--color-ink)]/12 hover:bg-[var(--color-ink)]/5"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>

          <p className="mb-3 mt-6 font-display text-lg text-[var(--color-ink)]">أين أنت الآن؟</p>
          <div className="grid gap-2 sm:grid-cols-2">
            {STAGES.map((s) => (
              <button
                key={s.id}
                onClick={() => setStage(s.id)}
                aria-pressed={stage === s.id}
                className={`rounded-2xl border px-4 py-3 text-right text-sm transition-colors ${
                  stage === s.id
                    ? "card-ink border-[var(--color-ink)]"
                    : "border-[var(--color-ink)]/12 hover:bg-[var(--color-ink)]/5"
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>

          <AnimatePresence>
            {recommendation && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="mt-7 rounded-2xl bg-[var(--color-accent)]/10 p-6 text-center"
              >
                <p className="text-sm text-[var(--color-ink-soft)]">الباقة المقترحة لك</p>
                <p className="mt-1 font-display text-2xl text-[var(--color-ink)]">{recommendation}</p>
                <button
                  onClick={goToPackage}
                  className="mt-5 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-105"
                >
                  شاهد تفاصيل الباقة <span aria-hidden>←</span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
