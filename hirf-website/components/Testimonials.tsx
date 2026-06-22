"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/content";

export default function Testimonials() {
  const trackRef = useRef<HTMLDivElement>(null);
  const drag = useRef({ active: false, startX: 0, startScroll: 0, moved: false });

  const scrollByCards = (dir: number) => {
    const el = trackRef.current;
    if (!el) return;
    el.scrollBy({ left: dir * (el.clientWidth * 0.85), behavior: "smooth" });
  };

  // Mouse drag-to-scroll for desktop.
  const onPointerDown = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el) return;
    drag.current = { active: true, startX: e.clientX, startScroll: el.scrollLeft, moved: false };
  };
  const onPointerMove = (e: React.PointerEvent) => {
    const el = trackRef.current;
    if (!el || !drag.current.active) return;
    const dx = e.clientX - drag.current.startX;
    if (Math.abs(dx) > 4) drag.current.moved = true;
    // RTL: dragging right should reveal earlier cards — scrollLeft is negative in RTL.
    el.scrollLeft = drag.current.startScroll - dx;
  };
  const endDrag = () => {
    drag.current.active = false;
  };

  return (
    <section id="testimonials" className="relative px-6 py-28" aria-label="آراء العملاء">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-end justify-between gap-4">
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl"
          >
            آراء العملاء
          </motion.h2>
          <div className="hidden gap-2 sm:flex">
            <button
              onClick={() => scrollByCards(-1)}
              aria-label="السابق"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)]/5"
            >
              ›
            </button>
            <button
              onClick={() => scrollByCards(1)}
              aria-label="التالي"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-ink)]/15 text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)]/5"
            >
              ‹
            </button>
          </div>
        </div>

        <div
          ref={trackRef}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          className="flex cursor-grab snap-x snap-mandatory gap-5 overflow-x-auto pb-4 hide-scrollbar active:cursor-grabbing"
        >
          {TESTIMONIALS.map((t, i) => (
            <figure
              key={i}
              className="flex w-[300px] shrink-0 snap-start flex-col rounded-3xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)] p-7 shadow-[var(--shadow-soft)] sm:w-[360px]"
              onClickCapture={(e) => {
                // prevent accidental link clicks after a drag
                if (drag.current.moved) e.preventDefault();
              }}
            >
              <div className="text-[var(--color-accent)]" aria-label={`${t.rating} من 5`}>
                {"★".repeat(t.rating)}
              </div>
              <blockquote className="mt-3 flex-1 leading-relaxed text-[var(--color-ink)]">{t.quote}</blockquote>
              <figcaption className="mt-5">
                <span className="block font-display text-[var(--color-ink)]">{t.name}</span>
                <span className="block text-sm text-[var(--color-ink-soft)]">{t.role}</span>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
