"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ADVISOR_QUESTIONS } from "@/lib/content";
import { buildRoadmap, type AdvisorAnswers } from "@/lib/advisor";

export default function Advisor() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<AdvisorAnswers>({});
  const [done, setDone] = useState(false);

  const q = ADVISOR_QUESTIONS[step];
  const total = ADVISOR_QUESTIONS.length;

  const answer = (value: string) => {
    const next = { ...answers, [q.id]: value };
    setAnswers(next);
    if (step + 1 < total) {
      setTimeout(() => setStep(step + 1), 240);
    } else {
      setTimeout(() => setDone(true), 240);
    }
  };

  const reset = () => {
    setAnswers({});
    setStep(0);
    setDone(false);
  };

  return (
    <section id="advisor" className="relative px-6 py-28" aria-label="مستشار حِرف">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">مستشار حِرف</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">دع الحِرفة ترسم طريقك</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-ink-soft)]">
            خمسة أسئلة فقط، ونمنحك خارطة طريق مخصصة لمشروعك.
          </p>
        </motion.div>

        <div className="glass relative overflow-hidden rounded-[2rem] border border-[var(--color-ink)]/10 p-6 shadow-[var(--shadow-soft)] sm:p-10">
          <AnimatePresence mode="wait">
            {!done ? (
              <motion.div key={`q-${step}`} initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: 24 }} transition={{ duration: 0.4 }}>
                {/* progress */}
                <div className="mb-8 flex items-center gap-3">
                  <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-[var(--color-ink)]/10">
                    <motion.div
                      className="h-full rounded-full bg-[var(--color-accent)]"
                      animate={{ width: `${((step + 1) / total) * 100}%` }}
                      transition={{ duration: 0.5 }}
                    />
                  </div>
                  <span className="text-sm tabular-nums text-[var(--color-ink-soft)]">
                    {step + 1} / {total}
                  </span>
                </div>

                <h3 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">{q.question}</h3>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">
                  {q.options?.map((opt) => (
                    <button
                      key={opt.value}
                      onClick={() => answer(opt.value)}
                      className="group flex items-center justify-between rounded-2xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)]/40 px-5 py-4 text-right transition-all hover:border-[var(--color-accent)] hover:bg-[var(--color-ink)] hover:text-[var(--color-canvas)]"
                    >
                      <span className="font-medium">{opt.label}</span>
                      <span className="text-[var(--color-accent)] opacity-0 transition-opacity group-hover:opacity-100" aria-hidden>
                        ←
                      </span>
                    </button>
                  ))}
                </div>

                {step > 0 && (
                  <button onClick={() => setStep(step - 1)} className="mt-6 text-sm text-[var(--color-ink-soft)] underline-offset-4 hover:underline">
                    رجوع
                  </button>
                )}
              </motion.div>
            ) : (
              <Dashboard key="dash" answers={answers} onReset={reset} />
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}

function Dashboard({ answers, onReset }: { answers: AdvisorAnswers; onReset: () => void }) {
  const r = buildRoadmap(answers);
  return (
    <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm text-[var(--color-ink-soft)]">خارطة طريقك المخصصة</p>
          <h3 className="font-display text-3xl text-[var(--color-ink)]">{r.packageName}</h3>
          <p className="mt-1 text-[var(--color-accent)]">{r.packageTagline}</p>
        </div>
        <button onClick={onReset} className="rounded-full border border-[var(--color-ink)]/15 px-4 py-2 text-sm text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-ink)]/5">
          إعادة التقييم
        </button>
      </div>

      <div className="grid gap-5 lg:grid-cols-3">
        {/* Timeline + phases */}
        <div className="card-ink rounded-3xl p-6 lg:col-span-2">
          <div className="flex items-center justify-between">
            <h4 className="font-display text-lg">المدة المتوقعة</h4>
            <span className="rounded-full bg-[var(--color-accent)] px-4 py-1 text-sm font-medium text-[var(--color-ink)]">{r.timeline}</span>
          </div>
          <ol className="mt-5 space-y-3">
            {r.phases.map((p, i) => (
              <motion.li
                key={p.title}
                initial={{ opacity: 0, x: -16 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + i * 0.1 }}
                className="flex items-center justify-between rounded-2xl bg-[var(--color-canvas)]/10 px-4 py-3"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm text-[var(--color-ink)]">{i + 1}</span>
                  {p.title}
                </span>
                <span className="text-sm text-[var(--color-canvas)]/60">{p.weeks}</span>
              </motion.li>
            ))}
          </ol>
        </div>

        {/* Focus radar (bars) */}
        <div className="glass rounded-3xl border border-[var(--color-ink)]/10 p-6">
          <h4 className="font-display text-lg text-[var(--color-ink)]">أين نركّز</h4>
          <div className="mt-5 space-y-4">
            {r.focusScore.map((f, i) => (
              <div key={f.label}>
                <div className="mb-1 flex justify-between text-sm text-[var(--color-ink-soft)]">
                  <span>{f.label}</span>
                  <span className="tabular-nums">{f.value}٪</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-[var(--color-ink)]/10">
                  <motion.div
                    className="h-full rounded-full bg-[var(--color-accent)]"
                    initial={{ width: 0 }}
                    animate={{ width: `${f.value}%` }}
                    transition={{ delay: 0.3 + i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Opportunities */}
        <div className="glass rounded-3xl border border-[var(--color-ink)]/10 p-6 lg:col-span-2">
          <h4 className="font-display text-lg text-[var(--color-ink)]">فرص النمو</h4>
          <ul className="mt-4 grid gap-3 sm:grid-cols-2">
            {r.opportunities.map((o) => (
              <li key={o} className="flex gap-3 text-sm text-[var(--color-ink-soft)]">
                <span className="mt-1 text-[var(--color-accent)]" aria-hidden>◆</span>
                <span>{o}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Next steps */}
        <div className="glass rounded-3xl border border-[var(--color-ink)]/10 p-6">
          <h4 className="font-display text-lg text-[var(--color-ink)]">خطواتك التالية</h4>
          <ol className="mt-4 space-y-3">
            {r.nextSteps.map((s, i) => (
              <li key={s} className="flex gap-3 text-sm text-[var(--color-ink-soft)]">
                <span className="font-display text-[var(--color-accent)]">{i + 1}.</span>
                <span>{s}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>

      <a href="#final" className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 font-medium text-[var(--color-canvas)] transition-transform hover:scale-105">
        لنبدأ التنفيذ <span aria-hidden>←</span>
      </a>
    </motion.div>
  );
}
