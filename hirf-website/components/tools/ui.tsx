"use client";

import { type ReactNode } from "react";

export function NumberField({
  label,
  value,
  onChange,
  suffix,
}: {
  label: string;
  value: number;
  onChange: (n: number) => void;
  suffix?: string;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm text-[var(--color-ink-soft)]">{label}</span>
      <div className="flex items-center rounded-xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)]/60 px-4 focus-within:border-[var(--color-accent)]">
        <input
          type="number"
          inputMode="decimal"
          value={Number.isFinite(value) ? value : ""}
          onChange={(e) => onChange(parseFloat(e.target.value) || 0)}
          className="w-full bg-transparent py-3 text-[var(--color-ink)] outline-none"
        />
        {suffix && <span className="text-sm text-[var(--color-ink-soft)]">{suffix}</span>}
      </div>
    </label>
  );
}

export function Stat({ label, value, accent }: { label: string; value: string; accent?: boolean }) {
  return (
    <div className={`rounded-2xl p-4 ${accent ? "card-ink" : "bg-[var(--color-ink)]/5"}`}>
      <p className={`text-xs ${accent ? "text-[var(--color-canvas)]/60" : "text-[var(--color-ink-soft)]"}`}>{label}</p>
      <p className={`mt-1 font-display text-2xl tabular-nums ${accent ? "text-[var(--color-accent-soft)]" : "text-[var(--color-ink)]"}`}>
        {value}
      </p>
    </div>
  );
}

export function ToolShell({ children }: { children: ReactNode }) {
  return <div className="grid gap-6 md:grid-cols-2">{children}</div>;
}
