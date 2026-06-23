"use client";

import { motion, useScroll, useSpring } from "framer-motion";

const LINKS = [
  { href: "#about", label: "من نحن" },
  { href: "#packages", label: "الباقات" },
  { href: "#work", label: "أعمالنا" },
  { href: "#testimonials", label: "آراء العملاء" },
  { href: "#faq", label: "الأسئلة" },
];

export default function Nav() {
  const { scrollYProgress } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 });

  return (
    <>
      <motion.div
        className="fixed inset-x-0 top-0 z-50 h-[3px] origin-right bg-[var(--color-accent)]"
        style={{ scaleX: progress }}
      />
      <header className="fixed inset-x-0 top-4 z-40 flex justify-center px-4">
        <nav className="glass flex w-full max-w-5xl items-center justify-between rounded-full px-5 py-2.5 shadow-[var(--shadow-soft)]">
          <a href="#main" className="flex shrink-0 items-center gap-2" aria-label="حِرف — الصفحة الرئيسية">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/hirf-logo.png?v=2"
              alt="حِرف"
              width={164}
              height={176}
              className="block h-8 w-8 shrink-0 object-contain sm:h-10 sm:w-10"
            />
          </a>
          <ul className="hidden items-center gap-1 md:flex">
            {LINKS.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="rounded-full px-3.5 py-1.5 text-sm text-[var(--color-ink-soft)] transition-colors hover:bg-[var(--color-ink)]/8 hover:text-[var(--color-ink)]"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="#packages"
            className="rounded-full bg-[var(--color-ink)] px-4 py-2 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-105"
          >
            ابدأ مشروعك
          </a>
        </nav>
      </header>
    </>
  );
}
