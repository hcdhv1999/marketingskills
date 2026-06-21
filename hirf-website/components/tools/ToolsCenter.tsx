"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NumberField, Stat, ToolShell } from "./ui";
import {
  profit,
  pricing,
  breakEven,
  ads,
  generateNames,
  generateIdeas,
  fmt,
} from "@/lib/calculators";

type ToolId = "profit" | "pricing" | "breakeven" | "names" | "ideas" | "ads";

const TOOLS: { id: ToolId; title: string; tagline: string; glyph: string }[] = [
  { id: "profit", title: "حاسبة الأرباح", tagline: "اعرف صافي ربحك وهامشك", glyph: "％" },
  { id: "pricing", title: "حاسبة التسعير", tagline: "سعّر منتجك بهامش مستهدف", glyph: "₪" },
  { id: "breakeven", title: "حاسبة نقطة التعادل", tagline: "متى تغطي تكاليفك", glyph: "⚖" },
  { id: "ads", title: "حاسبة الإعلانات", tagline: "توقّع نتائج ميزانيتك", glyph: "✦" },
  { id: "names", title: "مولّد أسماء تجارية", tagline: "أسماء جاهزة لعلامتك", glyph: "✎" },
  { id: "ideas", title: "مولّد أفكار مشاريع", tagline: "أفكار قابلة للتنفيذ", glyph: "◈" },
];

export default function ToolsCenter() {
  const [active, setActive] = useState<ToolId>("profit");

  return (
    <section id="tools" className="relative px-6 py-28" aria-label="مركز الأدوات المجانية">
      <div className="mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 text-center"
        >
          <p className="mb-3 text-sm tracking-[0.35em] text-[var(--color-accent)]">مجانية بالكامل</p>
          <h2 className="font-display text-4xl text-[var(--color-ink)] sm:text-5xl">مركز أدوات الأعمال</h2>
          <p className="mx-auto mt-4 max-w-xl text-balance text-[var(--color-ink-soft)]">
            ست أدوات احترافية تساعدك على اتخاذ قرارات أذكى — دون تسجيل.
          </p>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-[300px_1fr]">
          {/* Selector */}
          <div className="flex gap-3 overflow-x-auto pb-2 hide-scrollbar lg:flex-col lg:overflow-visible lg:pb-0">
            {TOOLS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActive(t.id)}
                aria-pressed={active === t.id}
                className={`flex min-w-[220px] items-center gap-3 rounded-2xl border p-4 text-right transition-all lg:min-w-0 ${
                  active === t.id
                    ? "card-ink border-[var(--color-ink)]"
                    : "glass border-[var(--color-ink)]/10 hover:border-[var(--color-accent)]/50"
                }`}
              >
                <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-lg ${active === t.id ? "bg-[var(--color-accent)] text-[var(--color-ink)]" : "bg-[var(--color-ink)]/8 text-[var(--color-accent)]"}`}>
                  {t.glyph}
                </span>
                <span>
                  <span className={`block font-display ${active === t.id ? "text-[var(--color-canvas)]" : "text-[var(--color-ink)]"}`}>{t.title}</span>
                  <span className={`block text-xs ${active === t.id ? "text-[var(--color-canvas)]/60" : "text-[var(--color-ink-soft)]"}`}>{t.tagline}</span>
                </span>
              </button>
            ))}
          </div>

          {/* Panel */}
          <div className="glass min-h-[420px] rounded-[2rem] border border-[var(--color-ink)]/10 p-6 shadow-[var(--shadow-soft)] sm:p-8">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35 }}
              >
                {active === "profit" && <ProfitTool />}
                {active === "pricing" && <PricingTool />}
                {active === "breakeven" && <BreakEvenTool />}
                {active === "ads" && <AdsTool />}
                {active === "names" && <NamesTool />}
                {active === "ideas" && <IdeasTool />}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}

function ProfitTool() {
  const [rev, setRev] = useState(50000);
  const [cost, setCost] = useState(20000);
  const [exp, setExp] = useState(8000);
  const r = profit(rev, cost, exp);
  return (
    <ToolShell>
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-[var(--color-ink)]">حاسبة الأرباح</h3>
        <NumberField label="الإيرادات" value={rev} onChange={setRev} suffix="﷼" />
        <NumberField label="تكلفة البضاعة" value={cost} onChange={setCost} suffix="﷼" />
        <NumberField label="المصاريف التشغيلية" value={exp} onChange={setExp} suffix="﷼" />
      </div>
      <div className="grid content-start gap-3">
        <Stat label="مجمل الربح" value={`${fmt(r.gross)} ﷼`} />
        <Stat label="صافي الربح" value={`${fmt(r.net)} ﷼`} accent />
        <Stat label="هامش الربح الصافي" value={`${fmt(r.margin, 1)}٪`} />
      </div>
    </ToolShell>
  );
}

function PricingTool() {
  const [cost, setCost] = useState(120);
  const [margin, setMargin] = useState(40);
  const r = pricing(cost, margin);
  return (
    <ToolShell>
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-[var(--color-ink)]">حاسبة التسعير</h3>
        <NumberField label="تكلفة المنتج" value={cost} onChange={setCost} suffix="﷼" />
        <NumberField label="هامش الربح المستهدف" value={margin} onChange={setMargin} suffix="٪" />
        <p className="text-xs text-[var(--color-ink-soft)]">نحسب السعر بطريقة الهامش على السعر النهائي.</p>
      </div>
      <div className="grid content-start gap-3">
        <Stat label="السعر المقترح" value={`${fmt(r.price, 1)} ﷼`} accent />
        <Stat label="الربح لكل وحدة" value={`${fmt(r.profitPerUnit, 1)} ﷼`} />
      </div>
    </ToolShell>
  );
}

function BreakEvenTool() {
  const [fixed, setFixed] = useState(15000);
  const [price, setPrice] = useState(150);
  const [variable, setVariable] = useState(60);
  const r = breakEven(fixed, price, variable);
  return (
    <ToolShell>
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-[var(--color-ink)]">حاسبة نقطة التعادل</h3>
        <NumberField label="التكاليف الثابتة الشهرية" value={fixed} onChange={setFixed} suffix="﷼" />
        <NumberField label="سعر بيع الوحدة" value={price} onChange={setPrice} suffix="﷼" />
        <NumberField label="التكلفة المتغيرة للوحدة" value={variable} onChange={setVariable} suffix="﷼" />
      </div>
      <div className="grid content-start gap-3">
        <Stat label="الوحدات للتعادل" value={Number.isFinite(r.units) ? `${fmt(Math.ceil(r.units))} وحدة` : "غير ممكن"} accent />
        <Stat label="إيرادات التعادل" value={Number.isFinite(r.revenue) ? `${fmt(r.revenue)} ﷼` : "—"} />
        <Stat label="هامش المساهمة للوحدة" value={`${fmt(r.contribution)} ﷼`} />
      </div>
    </ToolShell>
  );
}

function AdsTool() {
  const [budget, setBudget] = useState(10000);
  const [cpc, setCpc] = useState(2.5);
  const [cr, setCr] = useState(3);
  const [aov, setAov] = useState(250);
  const r = ads(budget, cpc, cr, aov);
  return (
    <ToolShell>
      <div className="space-y-4">
        <h3 className="font-display text-2xl text-[var(--color-ink)]">حاسبة الإعلانات</h3>
        <NumberField label="الميزانية" value={budget} onChange={setBudget} suffix="﷼" />
        <NumberField label="تكلفة النقرة (CPC)" value={cpc} onChange={setCpc} suffix="﷼" />
        <NumberField label="معدل التحويل" value={cr} onChange={setCr} suffix="٪" />
        <NumberField label="متوسط قيمة الطلب" value={aov} onChange={setAov} suffix="﷼" />
      </div>
      <div className="grid content-start gap-3">
        <Stat label="النقرات المتوقعة" value={fmt(r.clicks)} />
        <Stat label="الطلبات المتوقعة" value={fmt(r.orders)} />
        <Stat label="الإيرادات المتوقعة" value={`${fmt(r.revenue)} ﷼`} />
        <Stat label="العائد على الإنفاق (ROAS)" value={`${fmt(r.roas, 2)}×`} accent />
        <Stat label="تكلفة الطلب (CPA)" value={Number.isFinite(r.cpa) ? `${fmt(r.cpa, 1)} ﷼` : "—"} />
      </div>
    </ToolShell>
  );
}

function NamesTool() {
  const [kw, setKw] = useState("");
  const [names, setNames] = useState<string[]>(() => generateNames(""));
  return (
    <div className="space-y-5">
      <h3 className="font-display text-2xl text-[var(--color-ink)]">مولّد الأسماء التجارية</h3>
      <div className="flex flex-col gap-3 sm:flex-row">
        <input
          value={kw}
          onChange={(e) => setKw(e.target.value)}
          placeholder="كلمة مفتاحية (مثال: قهوة)"
          className="flex-1 rounded-xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)]/60 px-4 py-3 text-[var(--color-ink)] outline-none focus:border-[var(--color-accent)]"
        />
        <button
          onClick={() => setNames(generateNames(kw))}
          className="rounded-xl bg-[var(--color-ink)] px-6 py-3 font-medium text-[var(--color-canvas)] transition-transform hover:scale-105"
        >
          ولّد أسماء
        </button>
      </div>
      <div className="grid gap-3 sm:grid-cols-2">
        {names.map((n, i) => (
          <motion.div
            key={n + i}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.05 }}
            className="rounded-2xl border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/5 px-5 py-4 text-center font-display text-lg text-[var(--color-ink)]"
          >
            {n}
          </motion.div>
        ))}
      </div>
    </div>
  );
}

function IdeasTool() {
  const SECTORS = [
    { v: "fashion", l: "أزياء" },
    { v: "food", l: "أغذية" },
    { v: "tech", l: "تقنية" },
    { v: "services", l: "خدمات" },
    { v: "general", l: "عام" },
  ];
  const [sector, setSector] = useState("fashion");
  const ideas = generateIdeas(sector);
  return (
    <div className="space-y-5">
      <h3 className="font-display text-2xl text-[var(--color-ink)]">مولّد أفكار المشاريع</h3>
      <div className="flex flex-wrap gap-2">
        {SECTORS.map((s) => (
          <button
            key={s.v}
            onClick={() => setSector(s.v)}
            className={`rounded-full px-4 py-2 text-sm transition-colors ${
              sector === s.v ? "card-ink" : "border border-[var(--color-ink)]/12 text-[var(--color-ink-soft)] hover:bg-[var(--color-ink)]/5"
            }`}
          >
            {s.l}
          </button>
        ))}
      </div>
      <div className="space-y-3">
        {ideas.map((idea, i) => (
          <motion.div
            key={idea}
            initial={{ opacity: 0, x: -16 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.08 }}
            className="flex items-start gap-3 rounded-2xl border border-[var(--color-ink)]/10 bg-[var(--color-ink)]/5 px-5 py-4"
          >
            <span className="font-display text-[var(--color-accent)]">{i + 1}</span>
            <span className="text-[var(--color-ink)]">{idea}</span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
