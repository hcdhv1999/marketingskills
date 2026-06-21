// Pure calculation helpers for the free business tools center.

export const fmt = (n: number, digits = 0) =>
  Number.isFinite(n)
    ? n.toLocaleString("ar-SA", { maximumFractionDigits: digits, minimumFractionDigits: 0 })
    : "—";

// 1) Profit calculator
export function profit(revenue: number, cost: number, expenses: number) {
  const gross = revenue - cost;
  const net = gross - expenses;
  const margin = revenue > 0 ? (net / revenue) * 100 : 0;
  return { gross, net, margin };
}

// 2) Pricing calculator — cost-plus with target margin
export function pricing(cost: number, targetMarginPct: number) {
  const m = Math.min(Math.max(targetMarginPct, 0), 95) / 100;
  const price = m < 1 ? cost / (1 - m) : cost;
  const profitPerUnit = price - cost;
  return { price, profitPerUnit };
}

// 3) Break-even calculator
export function breakEven(fixedCosts: number, pricePerUnit: number, variableCost: number) {
  const contribution = pricePerUnit - variableCost;
  const units = contribution > 0 ? fixedCosts / contribution : Infinity;
  const revenue = units * pricePerUnit;
  return { units, revenue, contribution };
}

// 6) Ads calculator — funnel math
export function ads(budget: number, cpc: number, conversionRatePct: number, avgOrderValue: number) {
  const clicks = cpc > 0 ? budget / cpc : 0;
  const orders = clicks * (conversionRatePct / 100);
  const revenue = orders * avgOrderValue;
  const roas = budget > 0 ? revenue / budget : 0;
  const cpa = orders > 0 ? budget / orders : Infinity;
  return { clicks, orders, revenue, roas, cpa };
}

// 4) Business name generator
const NAME_PREFIXES = ["دار", "بيت", "سوق", "لمسة", "أصل", "نُخبة", "رواق", "صناعة", "حِرفة", "منصة"];
const NAME_SUFFIXES = ["الإبداع", "الفخامة", "الأناقة", "التميّز", "الجودة", "الريادة", "الأصالة", "النخبة", "الحرير", "الذهب"];
const NAME_MODERN = ["نوفا", "زِن", "أوج", "لُمى", "رَوِيّة", "وميض", "صدى", "مدى", "أُفق", "بريق"];

export function generateNames(keyword: string): string[] {
  const k = keyword.trim();
  const out = new Set<string>();
  const pick = <T,>(arr: T[]) => arr[Math.floor(Math.random() * arr.length)];
  for (let i = 0; i < 6; i++) {
    const style = i % 3;
    if (k && style === 0) out.add(`${pick(NAME_PREFIXES)} ${k}`);
    else if (k && style === 1) out.add(`${k} ${pick(NAME_SUFFIXES)}`);
    else out.add(`${pick(NAME_MODERN)} ${k || pick(NAME_SUFFIXES)}`);
  }
  while (out.size < 6) out.add(`${pick(NAME_PREFIXES)} ${pick(NAME_SUFFIXES)}`);
  return Array.from(out).slice(0, 6);
}

// 5) Project idea generator
const IDEA_BANK: Record<string, string[]> = {
  fashion: [
    "متجر أزياء مستدامة بخامات محلية.",
    "اشتراك شهري لتنسيق إطلالات جاهزة.",
    "علامة عبايات عصرية بتفصيل حسب الطلب.",
  ],
  food: [
    "صناديق وجبات صحية أسبوعية بالاشتراك.",
    "علامة قهوة مختصة مع تجربة تذوق منزلية.",
    "حلويات سعودية معاصرة بتغليف فاخر.",
  ],
  tech: [
    "أداة SaaS لإدارة متاجر صغيرة محليًا.",
    "تطبيق حجوزات للخدمات المنزلية.",
    "منصة محتوى تعليمي للمهارات الرقمية.",
  ],
  services: [
    "وكالة تصوير منتجات للمتاجر الإلكترونية.",
    "خدمة استشارات نمو للمتاجر الناشئة.",
    "استوديو محتوى قصير للعلامات التجارية.",
  ],
  general: [
    "سوق رقمي يجمع الحِرفيين المحليين.",
    "علامة هدايا مخصصة بطابع سعودي.",
    "متجر منتجات منزلية بتصاميم محلية.",
  ],
};

export function generateIdeas(sector: string): string[] {
  return IDEA_BANK[sector] ?? IDEA_BANK.general;
}
