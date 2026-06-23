"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SERVICES,
  SELECTED_DESIGNS,
  type PackageCard,
  type ServiceInfoBlock,
} from "@/lib/services";
import { whatsappLink } from "@/lib/whatsapp";
import { gk } from "@/lib/goldKasra";
import { useExperience } from "./ExperienceContext";

const EASE = [0.16, 1, 0.3, 1] as const;
const fmt = (n: number) => n.toLocaleString("en-US");

// Find which service/sub-category a package name belongs to.
function findLocation(name: string) {
  for (const s of SERVICES) {
    for (const c of s.subCategories) {
      if (c.packages.some((p) => p.name === name)) return { serviceId: s.id, subId: c.id };
    }
  }
  return null;
}

function NoteBox({ children }: { children: React.ReactNode }) {
  return <div className="alert-green rounded-2xl px-4 py-3 text-sm leading-relaxed">{children}</div>;
}

function Card({
  pkg,
  cta,
  highlighted,
  cardRef,
}: {
  pkg: PackageCard;
  cta: string;
  highlighted: boolean;
  cardRef?: (el: HTMLDivElement | null) => void;
}) {
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: EASE }}
      className={`relative flex h-full flex-col rounded-3xl border bg-[var(--color-canvas)] p-7 transition-shadow ${
        highlighted
          ? "border-[var(--color-accent)] ring-4 ring-[var(--color-accent)]/30"
          : pkg.popular
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
        <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{gk(pkg.description)}</p>
      )}

      {pkg.features?.length ? (
        <ul className="mt-5 space-y-2">
          {pkg.features.map((f) => (
            <li key={f} className="flex gap-2 text-sm leading-relaxed text-[var(--color-ink)]">
              <span className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden>✓</span>
              <span>{gk(f)}</span>
            </li>
          ))}
        </ul>
      ) : null}

      {pkg.guarantees?.length ? (
        <div className="mt-4 rounded-2xl bg-[var(--color-ink)]/5 p-3">
          <p className="mb-1 text-xs font-medium text-[var(--color-ink)]">الضمانات</p>
          {pkg.guarantees.map((g) => (
            <p key={g} className="text-xs leading-relaxed text-[var(--color-ink-soft)]">• {gk(g)}</p>
          ))}
        </div>
      ) : null}

      {pkg.notes?.length ? (
        <div className="mt-3 space-y-2">
          {pkg.notes.map((n) => (
            <NoteBox key={n}>{gk(n)}</NoteBox>
          ))}
        </div>
      ) : null}

      <div className="mt-auto pt-6">
        <a
          href={whatsappLink(pkg.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-[1.03]"
        >
          {cta} <span aria-hidden>←</span>
        </a>
      </div>
    </motion.div>
  );
}

function InfoPanel({ blocks }: { blocks: ServiceInfoBlock[] }) {
  return (
    <div className="mt-8 grid gap-4 sm:grid-cols-2">
      {blocks.map((b, i) => (
        <div key={i} className="alert-green rounded-2xl p-5">
          {b.title && <p className="font-display text-base">{b.title}</p>}
          {b.body && <p className="mt-1.5 text-sm leading-relaxed">{b.body}</p>}
          {b.items && (
            <div className="mt-2 flex flex-wrap gap-2">
              {b.items.map((it) => (
                <span key={it} className="rounded-full bg-white/60 px-3 py-1 text-xs">
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

// التصاميم المختارة — direct order tool with multi-select + live total.
function SelectedDesignsOrder() {
  const [selected, setSelected] = useState<Record<string, number>>({});

  const toggle = (label: string, price: number) =>
    setSelected((s) => {
      const next = { ...s };
      if (next[label] != null) delete next[label];
      else next[label] = price;
      return next;
    });

  const entries = Object.entries(selected);
  const subtotal = entries.reduce((sum, [, p]) => sum + p, 0);
  const discount = entries.length >= 3 ? Math.round(subtotal * 0.1) : 0;
  const total = subtotal - discount;

  const orderText = useMemo(() => {
    if (!entries.length) return "";
    const lines = entries.map(([label, price]) => `- ${label} (${fmt(price)} ر.س)`);
    if (discount) lines.push(`خصم 3 قطع فأكثر: -${fmt(discount)} ر.س`);
    lines.push(`الإجمالي: ${fmt(total)} ر.س`);
    return `تصاميم مختارة:\n${lines.join("\n")}`;
  }, [entries, discount, total]);

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_320px]">
      {/* Selectable items */}
      <div className="space-y-6">
        {SELECTED_DESIGNS.map((group) => (
          <div key={group.title}>
            <h4 className="mb-3 font-display text-xl text-[var(--color-ink)]">{group.title}</h4>
            <div className="grid gap-2 sm:grid-cols-2">
              {group.items.map((item) => {
                const active = selected[item.label] != null;
                return (
                  <button
                    key={item.label}
                    onClick={() => toggle(item.label, item.price)}
                    aria-pressed={active}
                    className={`flex items-center justify-between gap-2 rounded-2xl border px-4 py-3 text-right transition-colors ${
                      active
                        ? "card-ink border-[var(--color-ink)]"
                        : "border-[var(--color-ink)]/12 hover:bg-[var(--color-ink)]/5"
                    }`}
                  >
                    <span className="flex flex-col">
                      <span className="text-sm">{item.label}</span>
                      {item.note && (
                        <span className={`text-[11px] ${active ? "text-[var(--color-canvas)]/60" : "text-[var(--color-ink-soft)]"}`}>
                          {item.note}
                        </span>
                      )}
                    </span>
                    <span className={`shrink-0 text-sm font-medium ${active ? "text-[var(--color-accent-soft)]" : "text-[var(--color-accent)]"}`}>
                      {fmt(item.price)} ر.س
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      {/* Order summary */}
      <div className="lg:sticky lg:top-24 h-fit rounded-3xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)] p-6 shadow-[var(--shadow-soft)]">
        <h4 className="font-display text-xl text-[var(--color-ink)]">ملخص الطلب</h4>
        {entries.length === 0 ? (
          <p className="mt-4 text-sm text-[var(--color-ink-soft)]">اختر القطع التي تريدها وسيظهر الإجمالي هنا.</p>
        ) : (
          <div className="mt-4 space-y-2">
            {entries.map(([label, price]) => (
              <div key={label} className="flex items-center justify-between gap-2 text-sm">
                <span className="text-[var(--color-ink)]">{label}</span>
                <span className="text-[var(--color-ink-soft)]">{fmt(price)} ر.س</span>
              </div>
            ))}
            <div className="mt-3 border-t border-[var(--color-ink)]/10 pt-3 text-sm">
              <div className="flex justify-between text-[var(--color-ink-soft)]">
                <span>المجموع</span>
                <span>{fmt(subtotal)} ر.س</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-[var(--color-accent)]">
                  <span>خصم 3 قطع فأكثر (10%)</span>
                  <span>-{fmt(discount)} ر.س</span>
                </div>
              )}
              <div className="mt-1 flex justify-between font-display text-lg text-[var(--color-ink)]">
                <span>الإجمالي</span>
                <span>{fmt(total)} ر.س</span>
              </div>
            </div>
          </div>
        )}

        <a
          href={entries.length ? whatsappLink(orderText) : undefined}
          target="_blank"
          rel="noopener noreferrer"
          aria-disabled={entries.length === 0}
          className={`mt-5 flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-transform ${
            entries.length
              ? "bg-[var(--color-ink)] text-[var(--color-canvas)] hover:scale-[1.03]"
              : "pointer-events-none bg-[var(--color-ink)]/30 text-[var(--color-canvas)]"
          }`}
        >
          اطلب الخدمات المختارة <span aria-hidden>←</span>
        </a>
      </div>
    </div>
  );
}

function gridCols(n: number) {
  if (n === 1) return "grid-cols-1 max-w-2xl mx-auto";
  if (n === 2) return "grid-cols-1 sm:grid-cols-2";
  if (n === 4) return "grid-cols-1 sm:grid-cols-2 xl:grid-cols-4";
  return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
}

export default function PackagesShowcase() {
  const { requestedPackage } = useExperience();
  const [serviceId, setServiceId] = useState(SERVICES[0].id);
  const [subId, setSubId] = useState(SERVICES[0].subCategories[0].id);
  const [highlight, setHighlight] = useState<string | null>(null);

  const cardRefs = useRef<Record<string, HTMLDivElement | null>>({});

  const service = SERVICES.find((s) => s.id === serviceId)!;
  const sub = service.subCategories.find((c) => c.id === subId) ?? service.subCategories[0];
  const hasTabs = service.subCategories.length > 1;

  const selectService = (id: string) => {
    const svc = SERVICES.find((s) => s.id === id)!;
    setServiceId(id);
    setSubId(svc.subCategories[0].id);
  };

  // Jump straight to a package requested from the advisor — switch the
  // service/sub if needed, then scroll to the card and highlight it.
  // Uses a retry loop so it works whether or not the tab actually changed
  // (and waits for the new tab's cards to mount).
  useEffect(() => {
    if (!requestedPackage) return;
    const name = requestedPackage.name;
    const loc = findLocation(name);
    if (!loc) return;
    setServiceId(loc.serviceId);
    setSubId(loc.subId);

    let tries = 0;
    let timer: ReturnType<typeof setTimeout>;
    const tryScroll = () => {
      const el = cardRefs.current[name];
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "center" });
        setHighlight(name);
        setTimeout(() => setHighlight((h) => (h === name ? null : h)), 2600);
        return;
      }
      if (tries++ < 25) timer = setTimeout(tryScroll, 80);
    };
    timer = setTimeout(tryScroll, 80);
    return () => clearTimeout(timer);
  }, [requestedPackage]);

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
                <span className="text-2xl text-[var(--color-accent)]">{s.glyph}</span>
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

        {/* Service-level note (green alert) */}
        {service.note && (
          <div className="mx-auto mt-6 max-w-3xl">
            <NoteBox>{service.note}</NoteBox>
          </div>
        )}

        {/* ضمان حِرف — premium card, mobile-first */}
        {service.guarantee && (
          <div className="mx-auto mt-6 max-w-3xl rounded-3xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/8 p-6 text-right sm:p-8">
            <div className="flex items-center gap-2.5">
              <span className="text-2xl text-[var(--color-accent)]" aria-hidden>✦</span>
              <h3 className="font-display text-xl text-[var(--color-ink)] sm:text-2xl">{gk("ضمان حِرف")}</h3>
            </div>
            <p className="mt-4 text-base leading-loose text-[var(--color-ink-soft)]">{gk(service.guarantee)}</p>
          </div>
        )}

        {/* Level 3 — packages grid or order tool */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${serviceId}-${subId}`}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.35, ease: EASE }}
            className="mt-8"
          >
            {sub.selectable ? (
              <SelectedDesignsOrder />
            ) : (
              <div className={`grid items-stretch gap-5 ${gridCols(sub.packages.length)}`}>
                {sub.packages.map((p) => (
                  <Card
                    key={p.name}
                    pkg={p}
                    cta={sub.cta}
                    highlighted={highlight === p.name}
                    cardRef={(el) => {
                      cardRefs.current[p.name] = el;
                    }}
                  />
                ))}
              </div>
            )}

            {sub.info?.length ? <InfoPanel blocks={sub.info} /> : null}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
