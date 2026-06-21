"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { JOURNEYS, GATEWAY_OPTIONS } from "@/lib/content";
import { useExperience } from "./ExperienceContext";

export default function Journey() {
  const { buildType } = useExperience();
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const lineHeight = useTransform(scrollYProgress, [0.1, 0.85], ["0%", "100%"]);

  if (!buildType) {
    return (
      <section id="journey" className="flex min-h-[60vh] items-center justify-center px-6 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass mx-auto max-w-lg rounded-3xl border border-[var(--color-ink)]/10 p-10 text-center"
        >
          <p className="font-display text-2xl text-[var(--color-ink)]">اختر وجهتك أولًا</p>
          <p className="mt-3 text-[var(--color-ink-soft)]">
            عُد إلى البوابة واختر ما تريد بناءه لتتشكّل رحلتك الخاصة.
          </p>
          <a
            href="#gateway"
            className="mt-6 inline-flex rounded-full bg-[var(--color-ink)] px-6 py-2.5 text-sm text-[var(--color-canvas)]"
          >
            إلى البوابة
          </a>
        </motion.div>
      </section>
    );
  }

  const journey = JOURNEYS[buildType];
  const label = GATEWAY_OPTIONS.find((o) => o.id === buildType)?.title;

  return (
    <section id="journey" ref={ref} className="relative px-6 py-28" aria-label="رحلة البناء">
      <div className="mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">{label}</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">{journey.headline}</h2>
        </motion.div>

        <div className="relative">
          {/* Progress spine */}
          <div className="absolute right-[27px] top-0 h-full w-px bg-[var(--color-ink)]/10 md:right-1/2 md:translate-x-1/2">
            <motion.div style={{ height: lineHeight }} className="w-full bg-[var(--color-accent)]" />
          </div>

          <ol className="space-y-10">
            {journey.stages.map((stage, i) => (
              <motion.li
                key={stage.key}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className={`relative flex items-start gap-6 md:w-1/2 ${
                  i % 2 === 0 ? "md:mr-auto md:pl-12 md:text-left" : "md:ml-auto md:flex-row-reverse md:pr-12"
                }`}
              >
                <div className="relative z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl card-ink font-display text-xl shadow-[var(--shadow-soft)]">
                  {i + 1}
                </div>
                <div className="glass flex-1 rounded-3xl border border-[var(--color-ink)]/10 p-6">
                  <h3 className="font-display text-xl text-[var(--color-ink)]">{stage.title}</h3>
                  <p className="mt-1 font-medium text-[var(--color-accent)]">{stage.value}</p>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{stage.detail}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
