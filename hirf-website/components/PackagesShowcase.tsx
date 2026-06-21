"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES, type PackageCard, type ServiceInfoBlock } from "@/lib/services";

const EASE = [0.16, 1, 0.3, 1] as const;
const CONTACT = "https://wa.me/";

function gridCols(n: number) {
  if (n === 1) return "grid-cols-1 max-w-2xl mx-auto";
  if (n === 2) return "grid-cols-1 sm:grid-cols-2";
  if (n === 4) return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

function Card({ pkg }: { pkg: PackageCard }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`relative flex h-full flex-col rounded-3xl border bg-[var(--color-canvas)] p-7 ${
        pkg.popular
          ? "border-[var(--color-accent)] shadow-[var(--shadow-lift)]"
          : "border-[var(--color-ink)]/12 shadow-[var(--shadow-soft)]"
      }`}
    >
      {pkg.popular && (
        <span className="absolute -top-3 right-6 rounded-full bg-[var(--color-accent)] px-4 py-1 text-sm font-medium text-[var(--color-canvas)] shadow">
          الأكثر طلبًا
        </span>
      )}

      <h4 className="font-display text-2xl text-[var(--color-ink)]">{pkg.name}</h4>

      {(pkg.price || pkg.duration) && (
        <div className="mt-3 flex flex-wrap items-baseline gap-x-3 gap-y-1">
          {pkg.price && <span className="font-display text-3xl text-[var(--color-accent)]">{pkg.price}</span>}
          {pkg.duration && <span className="text-sm text-[var(--color-ink-soft)]">{pkg.duration}</span>}
        </div>
      )}

      {pkg.description && (
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{pkg.description}</p>
      )}

      {pkg.features?.length ? (
        <ul className="mt-5 space-y-2">
          {pkg.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm leading-relaxed text-[var(--color-ink)]">
              <span className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden>✓</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {pkg.guarantees?.length ? (
        <div className="mt-4 rounded-2xl bg-[var(--color-ink)]/5 p-3">
          <p className="mb-1 text-xs font-medium text-[var(--color-ink)]">الضمانات</p>
          {pkg.guarantees.map((g) => (
            <p key={g} className="text-xs leading-relaxed text-[var(--color-ink-soft)]">• {g}</p>
          ))}
        </div>
      ) : null}

      {pkg.notes?.length ? (
        <div className="mt-3">
          {pkg.notes.map((n) => (
            <p key={n} className="text-xs leading-relaxed text-[var(--color-ink-soft)]">ملاحظة: {n}</p>
          ))}
        </div>
      ) : null}

      <a
        href={CONTACT}
        className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-[1.03]"
      >
        اطلب الباقة <span aria-hidden>←</span>
      </a>
    </motion.div>
  );
}

function InfoPanel({ blocks }: { blocks: ServiceInfoBlock[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {blocks.map((b, i) => (
        <div key={i} className="glass rounded-2xl border border-[var(--color-ink)]/10 p-5">
          {b.title && <p className="font-display text-base text-[var(--color-ink)]">{b.title}</p>}
          {b.body && <p className="mt-1.5 text-sm leading-relaxed text-[var(--color-ink-soft)]">{b.body}</p>}
          {b.items && (
            <div className="mt-2 flex flex-wrap gap-2">
              {b.items.map((it) => (
                <span key={it} className="rounded-full bg-[var(--color-ink)]/5 px-3 py-1 text-xs text-[var(--color-ink-soft)]">
                  {it}
                </span>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function PackagesShowcase() {
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [subId, setSubId] = useState(SERVICES[0].subCategories[0].id);

  const service = SERVICES.find((s) => s.id === serviceId)!;
  const sub = service.subCategories.find((c) => c.id === subId) ?? service.subCategories[0];
  const hasTabs = service.subCategories.length > 1;

  const selectService = (id: string) => {
    const svc = SERVICES.find((s) => s.id === id)!;
    setServiceId(id);
    setSubId(svc.subCategories[0].id);
  };

  return (
    <section id="packages" className="relative px-6 py-28" aria-label="الباقات">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">خدماتنا وأسعارنا</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">الباقات</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-ink-soft)]">
            اختر الخدمة، ثم التصنيف، وشاهد الباقات والأسعار مباشرة.
          </p>
        </motion.div>

        {/* Level 1 — service cards */}
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {SERVICES.map((s) => {
            const active = s.id === serviceId;
            return (
              <button
                key={s.id}
                onClick={() => selectService(s.id)}
                aria-pressed={active}
                className={`group flex items-start gap-3 rounded-2xl border p-5 text-right transition-all ${
                  active
                    ? "card-ink border-[var(--color-ink)]"
                    : "glass border-[var(--color-ink)]/10 hover:border-[var(--color-accent)]/50"
                }`}
              >
                <span className={`text-2xl ${active ? "text-[var(--color-accent)]" : "text-[var(--color-accent)]"}`}>{s.glyph}</span>
                <span>
                  <span className={`block font-display text-lg leading-tight ${active ? "text-[var(--color-canvas)]" : "text-[var(--color-ink)]"}`}>
                    {s.title}
                  </span>
                  <span className={`mt-1 block text-xs ${active ? "text-[var(--color-canvas)]/60" : "text-[var(--color-ink-soft)]"}`}>
                    {s.tagline}
                  </span>
                </span>
              </button>
            );
          })}
        </div>

        {/* Level 2 — sub-category tabs */}
        {hasTabs && (
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {service.subCategories.map((c) => (
              <button
                key={c.id}
                onClick={() => setSubId(c.id)}
                aria-pressed={c.id === subId}
                className={`rounded-full px-5 py-2.5 text-sm transition-colors ${
                  c.id === subId
                    ? "bg-[var(--color-accent)] text-[var(--color-canvas)]"
                    : "border border-[var(--color-ink)]/15 text-[var(--color-ink-soft)] hover:bg-[var(--color-ink)]/5"
                }`}
              >
                {c.label}
              </button>
            ))}
          </div>
        )}

        {/* Service-level note */}
        {service.note && (
          <p className="mx-auto mt-6 max-w-3xl rounded-2xl bg-[var(--color-accent)]/8 px-5 py-3 text-center text-sm text-[var(--color-ink-soft)]">
            {service.note}
          </p>
        )}

        {/* Level 3 — packages grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${serviceId}-${subId}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mt-8"
          >
            <div className={`grid items-stretch gap-5 ${gridCols(sub.packages.length)}`}>
              {sub.packages.map((p) => (
                <Card key={p.name} pkg={p} />
              ))}
            </div>
            {sub.info?.length ? <InfoPanel blocks={sub.info} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
