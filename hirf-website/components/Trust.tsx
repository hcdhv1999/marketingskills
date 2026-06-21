"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { TRUST_STATS, type TrustStat } from "@/lib/content";

function Counter({ stat, start }: { stat: TrustStat; start: boolean }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    if (!start) return;
    let raf = 0;
    const dur = 1600;
    const t0 = performance.now();
    const tick = (t: number) => {
      const p = Math.min((t - t0) / dur, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setN(Math.round(stat.value * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [start, stat.value]);

  return (
    <span className="font-display text-5xl tabular-nums text-[var(--color-canvas)] sm:text-6xl">
      {stat.prefix ?? ""}
      {n.toLocaleString("ar-SA")}
      {stat.suffix ?? ""}
    </span>
  );
}

export default function Trust() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="relative px-6 py-28" aria-label="إنجازاتنا بالأرقام">
      <div ref={ref} className="mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] card-ink p-10 sm:p-16">
        <div className="grain absolute inset-0 opacity-15" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent-soft)]">الثقة بالأرقام</p>
          <h2 className="font-display text-3xl text-[var(--color-canvas)] sm:text-4xl">نتائج تتحدث عن نفسها</h2>
        </motion.div>

        <div className="relative grid grid-cols-2 gap-8 text-center md:grid-cols-5">
          {TRUST_STATS.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex flex-col items-center gap-2"
            >
              <Counter stat={s} start={inView} />
              <span className="text-sm text-[var(--color-canvas)]/60">{s.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
