"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { CRAFT_MODULES } from "@/lib/content";

// Positions for the 6 nodes on a circle (percent of the square stage).
const POS = [
  { x: 50, y: 8 },
  { x: 88, y: 30 },
  { x: 82, y: 74 },
  { x: 50, y: 92 },
  { x: 18, y: 74 },
  { x: 12, y: 30 },
];

export default function CraftSystem() {
  const [active, setActive] = useState<string | null>(null);
  const idIndex = Object.fromEntries(CRAFT_MODULES.map((m, i) => [m.id, i]));

  const isConnected = (id: string) => {
    if (!active) return false;
    if (active === id) return true;
    const a = CRAFT_MODULES.find((m) => m.id === active);
    return a?.connects.includes(id) ?? false;
  };

  return (
    <section id="system" className="relative px-6 py-28" aria-label="نظام الحِرفة">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">منظومة متكاملة</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">نظام الحِرفة</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-ink-soft)]">
            لسنا خدمات منفصلة، بل منظومة مترابطة. مرّر على أي وحدة لترى كيف تتصل بالبقية.
          </p>
        </motion.div>

        {/* Interactive diagram — desktop */}
        <div className="relative mx-auto hidden aspect-square w-full max-w-2xl lg:block">
          <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
            {CRAFT_MODULES.map((m) =>
              m.connects.map((c) => {
                const a = POS[idIndex[m.id]];
                const b = POS[idIndex[c]];
                const lit = active && (active === m.id || active === c);
                return (
                  <line
                    key={`${m.id}-${c}`}
                    x1={a.x}
                    y1={a.y}
                    x2={b.x}
                    y2={b.y}
                    stroke={lit ? "#d88935" : "#2e4f4f"}
                    strokeWidth={lit ? 0.6 : 0.25}
                    strokeOpacity={lit ? 0.9 : 0.18}
                    className="transition-all duration-300"
                  />
                );
              })
            )}
          </svg>

          {/* center mark */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 text-center">
            <span className="font-display text-2xl text-[var(--color-ink)]/30">حِرف</span>
          </div>

          {CRAFT_MODULES.map((m, i) => {
            const p = POS[i];
            const lit = isConnected(m.id);
            const dim = active && !lit;
            return (
              <motion.div
                key={m.id}
                style={{ left: `${p.x}%`, top: `${p.y}%` }}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                animate={{ opacity: dim ? 0.35 : 1, scale: active === m.id ? 1.08 : 1 }}
                transition={{ duration: 0.3 }}
              >
                <button
                  onMouseEnter={() => setActive(m.id)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => setActive(m.id)}
                  onBlur={() => setActive(null)}
                  className={`flex w-40 flex-col items-center gap-1 rounded-2xl border p-4 text-center transition-colors duration-300 ${
                    active === m.id ? "card-ink border-[var(--color-ink)]" : "glass border-[var(--color-ink)]/12"
                  }`}
                >
                  <span className={`text-2xl ${active === m.id ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"}`}>{m.glyph}</span>
                  <span className={`font-display text-base ${active === m.id ? "text-[var(--color-canvas)]" : "text-[var(--color-ink)]"}`}>{m.title}</span>
                </button>
              </motion.div>
            );
          })}
        </div>

        {/* Active module detail (desktop) */}
        <div className="mt-6 hidden h-12 items-center justify-center lg:flex">
          <motion.p key={active ?? "none"} initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center text-[var(--color-ink-soft)]">
            {active ? CRAFT_MODULES.find((m) => m.id === active)?.desc : "مرّر فوق وحدة لاستكشافها."}
          </motion.p>
        </div>

        {/* Stacked cards — mobile/tablet */}
        <div className="grid gap-4 sm:grid-cols-2 lg:hidden">
          {CRAFT_MODULES.map((m, i) => (
            <motion.div
              key={m.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (i % 2) * 0.08 }}
              className="glass rounded-3xl border border-[var(--color-ink)]/10 p-6"
            >
              <span className="text-3xl text-[var(--color-accent)]">{m.glyph}</span>
              <h3 className="mt-3 font-display text-xl text-[var(--color-ink)]">{m.title}</h3>
              <p className="mt-1 text-sm text-[var(--color-ink-soft)]">{m.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
