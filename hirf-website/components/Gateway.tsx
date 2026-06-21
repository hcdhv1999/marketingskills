"use client";

import { motion } from "framer-motion";
import { GATEWAY_OPTIONS } from "@/lib/content";
import { useExperience } from "./ExperienceContext";

export default function Gateway() {
  const { buildType, setBuildType } = useExperience();

  const choose = (id: typeof GATEWAY_OPTIONS[number]["id"]) => {
    setBuildType(id);
    // Smoothly carry the visitor into the adapted journey.
    requestAnimationFrame(() => {
      document.getElementById("journey")?.scrollIntoView({ behavior: "smooth", block: "start" });
    });
  };

  return (
    <section id="gateway" className="relative flex min-h-screen items-center justify-center px-6 py-28" aria-label="بوابة البناء">
      <div className="mx-auto w-full max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
          className="mb-14 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">البوابة</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-6xl">ماذا تريد أن تبني؟</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-ink-soft)]">
            اختر وجهتك، وستتشكّل التجربة بأكملها حولها.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {GATEWAY_OPTIONS.map((opt, i) => {
            const active = buildType === opt.id;
            return (
              <motion.button
                key={opt.id}
                onClick={() => choose(opt.id)}
                aria-pressed={active}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8 }}
                whileTap={{ scale: 0.98 }}
                className={`group relative overflow-hidden rounded-3xl border p-7 text-right transition-colors duration-500 ${
                  active
                    ? "card-ink border-[var(--color-ink)]"
                    : "glass border-[var(--color-ink)]/10 hover:border-[var(--color-accent)]/50"
                }`}
              >
                <div
                  className={`pointer-events-none absolute -left-8 -top-8 text-8xl transition-all duration-700 group-hover:scale-125 ${
                    active ? "text-[var(--color-accent)]" : "text-[var(--color-ink)]/8"
                  }`}
                >
                  {opt.glyph}
                </div>
                <div className="relative">
                  <h3 className={`font-display text-2xl ${active ? "text-[var(--color-canvas)]" : "text-[var(--color-ink)]"}`}>
                    {opt.title}
                  </h3>
                  <p className={`mt-2 text-sm ${active ? "text-[var(--color-canvas)]/70" : "text-[var(--color-ink-soft)]"}`}>
                    {opt.subtitle}
                  </p>
                  <span
                    className={`mt-8 inline-flex items-center gap-2 text-sm font-medium ${
                      active ? "text-[var(--color-accent-soft)]" : "text-[var(--color-accent)]"
                    }`}
                  >
                    {active ? "تم الاختيار" : "ابدأ من هنا"}
                    <span aria-hidden>←</span>
                  </span>
                </div>
              </motion.button>
            );
          })}
        </div>
      </div>
    </section>
  );
}
