// Pure logic that turns advisor answers into a personalized roadmap.
// No AI calls — deterministic, explainable recommendations.

export interface AdvisorAnswers {
  businessType?: string;
  products?: string;
  hasBrand?: string;
  adBudget?: string;
  goal?: string;
}

export interface Roadmap {
  packageName: string;
  packageTagline: string;
  timeline: string;
  phases: { title: string; weeks: string }[];
  opportunities: string[];
  nextSteps: string[];
  focusScore: { label: string; value: number }[];
}

export function buildRoadmap(a: AdvisorAnswers): Roadmap {
  const needsBrand = a.hasBrand === "no" || a.hasBrand === "partial";
  const heavyCatalog = a.products === "51-200" || a.products === "200+";
  const hasAds = a.adBudget && a.adBudget !== "none";
  const wantsScale = a.goal === "scale" || a.goal === "sales";

  // Pick a package based on the overall ambition signal.
  let packageName = "باقة الانطلاق";
  let packageTagline = "كل ما تحتاجه لتبدأ بثقة.";
  if (needsBrand && (hasAds || wantsScale)) {
    packageName = "باقة الحِرفة المتكاملة";
    packageTagline = "هوية + متجر + نمو في مسار واحد.";
  } else if (hasAds && wantsScale) {
    packageName = "باقة النمو";
    packageTagline = "ضاعف نتائجك عبر تحسين وتسويق مدروس.";
  } else if (needsBrand) {
    packageName = "باقة التأسيس";
    packageTagline = "ابنِ هويتك وحضورك من أساس متين.";
  }

  // Timeline scales with catalog size and brand needs.
  let baseWeeks = 4;
  if (needsBrand) baseWeeks += 2;
  if (heavyCatalog) baseWeeks += 2;
  if (hasAds) baseWeeks += 1;
  const timeline = `${baseWeeks}–${baseWeeks + 2} أسابيع`;

  const phases: { title: string; weeks: string }[] = [];
  if (needsBrand) phases.push({ title: "الهوية البصرية", weeks: "أسبوع ١–٢" });
  phases.push({ title: heavyCatalog ? "بناء المتجر والكتالوج" : "بناء المتجر", weeks: needsBrand ? "أسبوع ٢–٤" : "أسبوع ١–٣" });
  phases.push({ title: "التهيئة والإطلاق", weeks: `أسبوع ${baseWeeks - 1}` });
  if (hasAds) phases.push({ title: "التسويق والنمو", weeks: `أسبوع ${baseWeeks}+` });

  const opportunities: string[] = [];
  if (heavyCatalog) opportunities.push("تنظيم الكتالوج وتصنيف ذكي يرفع متوسط قيمة الطلب.");
  if (!hasAds) opportunities.push("بدء حملات مدروسة بميزانية صغيرة لاختبار السوق.");
  if (hasAds) opportunities.push("إعادة الاستهداف لاسترجاع الزوار غير المشترين.");
  if (a.goal === "awareness") opportunities.push("محتوى منتظم يبني وعيًا عضويًا منخفض التكلفة.");
  if (a.businessType === "fashion" || a.businessType === "food") opportunities.push("تصوير منتج وتجربة بصرية تميّزك عن المنافسين.");
  opportunities.push("أتمتة استرجاع السلات المهجورة لزيادة المبيعات دون تكلفة إعلانية.");

  const nextSteps = [
    "حجز جلسة اكتشاف مجانية لمراجعة وضعك الحالي.",
    needsBrand ? "تجهيز ملف العلامة: القيم، الجمهور، والمنافسون." : "تجهيز أصول علامتك الحالية للمراجعة.",
    "تحديد قائمة المنتجات والأولويات للإطلاق الأول.",
    hasAds ? "ربط حسابات الإعلانات والتحليلات للمتابعة." : "تحديد ميزانية اختبارية أولى للتسويق.",
  ];

  const focusScore = [
    { label: "الهوية", value: needsBrand ? 90 : 35 },
    { label: "المتجر", value: heavyCatalog ? 95 : 75 },
    { label: "التسويق", value: hasAds ? 85 : 45 },
    { label: "النمو", value: wantsScale ? 90 : 55 },
  ];

  return { packageName, packageTagline, timeline, phases, opportunities: opportunities.slice(0, 4), nextSteps, focusScore };
}
