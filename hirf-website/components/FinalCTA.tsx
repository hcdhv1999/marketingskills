"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function FinalCTA() {
  const root = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      const words = wordsRef.current?.querySelectorAll<HTMLElement>("[data-word]");
      if (words?.length) {
        gsap.from(words, {
          scrollTrigger: { trigger: root.current, start: "top 70%" },
          yPercent: 120,
          opacity: 0,
          rotateX: -40,
          stagger: 0.12,
          duration: 1,
          ease: "power4.out",
        });
      }
      // Subtle parallax on the giant backdrop word.
      gsap.to(".final-ghost", {
        scrollTrigger: { trigger: root.current, start: "top bottom", end: "bottom top", scrub: 0.6 },
        yPercent: -18,
        scale: 1.1,
      });
    }, root);

    return () => ctx.revert();
  }, []);

  const headline = ["الفرق", "بين", "الفكرة", "والمشروع", "الناجح", "هو", "التنفيذ."];

  return (
    <section id="final" ref={root} className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 py-32" aria-label="ابدأ مشروعك">
      {/* Giant ghost word backdrop */}
      <span aria-hidden className="final-ghost pointer-events-none absolute select-none font-display text-[28vw] leading-none text-[var(--color-ink)]/5">
        حِرف
      </span>

      <div className="relative mx-auto max-w-4xl text-center">
        <div ref={wordsRef} className="font-display text-4xl leading-[1.15] text-[var(--color-ink)] [perspective:800px] sm:text-6xl md:text-7xl">
          {headline.map((w, i) => (
            <span key={i} data-word className="mx-1 inline-block">
              {w}
            </span>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-6 font-display text-2xl text-[var(--color-accent)] sm:text-3xl"
        >
          وهنا تبدأ الحِرفة.
        </motion.p>

        <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <a
            href="#gateway"
            className="group inline-flex items-center gap-2 rounded-full bg-[var(--color-ink)] px-8 py-4 text-lg font-medium text-[var(--color-canvas)] shadow-[var(--shadow-soft)] transition-transform hover:scale-105"
          >
            ابدأ مشروعك
            <span className="transition-transform group-hover:-translate-x-1" aria-hidden>←</span>
          </a>
          <a
            href="https://wa.me/"
            className="inline-flex items-center gap-2 rounded-full border border-[var(--color-ink)]/20 px-8 py-4 text-lg font-medium text-[var(--color-ink)] transition-colors hover:bg-[var(--color-ink)]/5"
          >
            تحدث معنا
          </a>
        </div>
      </div>

      <footer className="absolute bottom-6 inset-x-0 text-center text-sm text-[var(--color-ink-soft)]">
        <span className="font-display text-base text-[var(--color-ink)]">حِرف</span> — وكالة رقمية سعودية · صُنع بحِرفة
      </footer>
    </section>
  );
}
