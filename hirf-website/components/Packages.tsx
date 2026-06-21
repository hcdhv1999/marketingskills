"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PACKAGES, type PackageNode } from "@/lib/content";

const EASE = [0.16, 1, 0.3, 1] as const;

function AccordionNode({ node, depth }: { node: PackageNode; depth: number }) {
  const [open, setOpen] = useState(false);
  const hasChildren = !!node.children?.length;

  // Visual scale steps down with depth, reusing the existing palette.
  const headSize = depth === 0 ? "text-xl sm:text-2xl" : depth === 1 ? "text-lg" : "text-base";

  return (
    <div
      className={
        depth === 0
          ? "glass overflow-hidden rounded-2xl border border-[var(--color-ink)]/10"
          : "overflow-hidden rounded-xl border border-[var(--color-ink)]/10 bg-[var(--color-canvas)]/40"
      }
    >
      <button
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        className="flex w-full items-center justify-between gap-4 px-5 py-4 text-right transition-colors hover:bg-[var(--color-ink)]/5"
      >
        <span className={`font-display ${headSize} text-[var(--color-ink)]`}>{node.title}</span>
        <motion.span
          animate={{ rotate: open ? 90 : 0 }}
          transition={{ duration: 0.4, ease: EASE }}
          className="shrink-0 text-[var(--color-accent)]"
          aria-hidden
        >
          ‹
        </motion.span>
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="body"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.45, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="space-y-3 border-r-2 border-[var(--color-accent)]/30 px-5 pb-5 pr-5">
              {hasChildren ? (
                node.children!.map((child) => (
                  <AccordionNode key={child.title} node={child} depth={depth + 1} />
                ))
              ) : (
                <p className="pt-1 text-sm text-[var(--color-ink-soft)]">التفاصيل قريبًا</p>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function Packages() {
  return (
    <section id="packages" className="relative px-6 py-28" aria-label="الباقات">
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">خدماتنا وأسعارنا</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">الباقات</h2>
        </motion.div>

        <div className="space-y-4">
          {PACKAGES.map((node, i) => (
            <motion.div
              key={node.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.08, ease: EASE }}
            >
              <AccordionNode node={node} depth={0} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
