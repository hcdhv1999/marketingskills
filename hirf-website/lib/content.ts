// Central content store for حِرف — all Arabic copy lives here so the
// experience stays consistent and easy to evolve.

export type BuildType = "store" | "brand" | "campaign" | "website";

export interface GatewayOption {
  id: BuildType;
  title: string;
  subtitle: string;
  glyph: string; // abstract mark
}

export const GATEWAY_OPTIONS: GatewayOption[] = [
  {
    id: "store",
    title: "متجر إلكتروني",
    subtitle: "ابنِ تجربة بيع تتحول إلى أرباح",
    glyph: "◉",
  },
  {
    id: "brand",
    title: "علامة تجارية",
    subtitle: "هوية تُحفر في الذاكرة",
    glyph: "❖",
  },
  {
    id: "campaign",
    title: "حملة إعلانية",
    subtitle: "وصول مدروس يصنع طلبًا",
    glyph: "✦",
  },
  {
    id: "website",
    title: "موقع إلكتروني",
    subtitle: "حضور رقمي يليق بطموحك",
    glyph: "▣",
  },
];

export interface JourneyStage {
  key: string;
  title: string;
  value: string;
  detail: string;
}

// Each build path has its own narrative arc.
export const JOURNEYS: Record<BuildType, { headline: string; stages: JourneyStage[] }> = {
  store: {
    headline: "رحلة بناء متجرك الإلكتروني",
    stages: [
      { key: "idea", title: "مرحلة الفكرة", value: "نحوّل الفكرة إلى نموذج عمل واضح", detail: "دراسة السوق، تحديد الجمهور، واختيار المنتجات التي تبيع." },
      { key: "identity", title: "الهوية", value: "نمنح متجرك شخصية لا تُنسى", detail: "شعار، ألوان، ونبرة صوت تبني الثقة من النظرة الأولى." },
      { key: "store", title: "المتجر", value: "نبني تجربة شراء سلسة تبيع بدلًا عنك", detail: "تصميم صفحات منتجات تحوّل الزائر إلى عميل." },
      { key: "launch", title: "الإطلاق", value: "ندخل السوق بقوة ولفت انتباه", detail: "خطة إطلاق، محتوى تشويقي، وأول حملة مدروسة." },
      { key: "growth", title: "النمو", value: "نحوّل أول عملية بيع إلى نمو متصاعد", detail: "تحليل، تحسين، وإعادة استهداف لمضاعفة الأرباح." },
    ],
  },
  brand: {
    headline: "رحلة بناء علامتك التجارية",
    stages: [
      { key: "discover", title: "الاكتشاف", value: "نفهم جوهر علامتك قبل أي تصميم", detail: "جلسات عمل لاستخراج القصة والقيمة والوعد." },
      { key: "strategy", title: "الاستراتيجية", value: "نرسم موقعك في ذهن العميل", detail: "تحديد الجمهور، الرسائل، والتمايز عن المنافسين." },
      { key: "identity", title: "الهوية البصرية", value: "نترجم القصة إلى لغة بصرية", detail: "شعار، نظام ألوان، خطوط، وعناصر متكاملة." },
      { key: "system", title: "نظام العلامة", value: "نضمن اتساقك في كل نقطة تماس", detail: "دليل استخدام شامل يحافظ على هيبة العلامة." },
      { key: "launch", title: "الإطلاق", value: "نقدّم علامتك للعالم بثقة", detail: "حملة كشف الهوية وتفعيلها عبر القنوات." },
    ],
  },
  campaign: {
    headline: "رحلة حملتك الإعلانية",
    stages: [
      { key: "goal", title: "الهدف", value: "نبدأ من رقم واضح نريد تحقيقه", detail: "تحديد الهدف، الميزانية، ومؤشرات النجاح." },
      { key: "audience", title: "الجمهور", value: "نصل لمن يهمه عرضك فعلًا", detail: "بناء شرائح دقيقة بالبيانات والسلوك." },
      { key: "creative", title: "المحتوى الإبداعي", value: "نصنع إعلانًا يوقف التمرير", detail: "زوايا، نصوص، وتصاميم تُختبر وتتطور." },
      { key: "launch", title: "الإطلاق", value: "نطلق ونراقب لحظة بلحظة", detail: "إطلاق متعدد المنصات مع متابعة حية." },
      { key: "optimize", title: "التحسين", value: "نضاعف العائد على كل ريال", detail: "تحسين مستمر يخفض التكلفة ويرفع النتيجة." },
    ],
  },
  website: {
    headline: "رحلة موقعك الإلكتروني",
    stages: [
      { key: "plan", title: "التخطيط", value: "نحدد هدف الموقع ورحلة الزائر", detail: "خريطة محتوى ووظائف مبنية على الهدف." },
      { key: "design", title: "التصميم", value: "نصمم تجربة تترك انطباعًا فوريًا", detail: "واجهات أنيقة وسريعة ومتجاوبة." },
      { key: "build", title: "التطوير", value: "نبني موقعًا سريعًا وآمنًا", detail: "كود نظيف، أداء عالٍ، وتوافق كامل." },
      { key: "launch", title: "الإطلاق", value: "نطلق موقعك للعالم", detail: "اختبارات، تحسين سرعة، ونشر احترافي." },
      { key: "grow", title: "النمو", value: "نحوّل الزيارات إلى نتائج", detail: "تحسين محركات البحث وتجربة الاستخدام." },
    ],
  },
};

export interface VaultProject {
  id: string;
  name: string;
  field: string; // النشاط
  challenge: string; // التحدي
  solution: string; // الحل
  result: string; // النتيجة
  metric: string;
}

export const VAULT_PROJECTS: VaultProject[] = [
  {
    id: "PRJ-001",
    name: "متجر أزياء راقية",
    field: "تجارة إلكترونية — أزياء",
    challenge: "حضور ضعيف ومبيعات متذبذبة رغم جودة المنتج.",
    solution: "إعادة بناء المتجر وهويته مع قمع تحويل مدروس وحملة إطلاق.",
    result: "مضاعفة معدل التحويل وثبات في المبيعات الشهرية.",
    metric: "+%180 مبيعات",
  },
  {
    id: "PRJ-002",
    name: "علامة قهوة مختصة",
    field: "هوية بصرية — أغذية ومشروبات",
    challenge: "علامة بلا شخصية واضحة وسط سوق مزدحم.",
    solution: "بناء قصة العلامة ونظام بصري متكامل من الكوب إلى المتجر.",
    result: "تمايز قوي وولاء عملاء وانتشار عضوي.",
    metric: "×3 تفاعل",
  },
  {
    id: "PRJ-003",
    name: "حملة إطلاق تطبيق",
    field: "إعلانات ممولة — تقنية",
    challenge: "إطلاق منتج جديد بميزانية محدودة ووقت ضيق.",
    solution: "زوايا إبداعية متعددة واختبار سريع وإعادة استهداف ذكي.",
    result: "خفض تكلفة التحميل مع تجاوز هدف التسجيلات.",
    metric: "−%42 تكلفة",
  },
  {
    id: "PRJ-004",
    name: "موقع شركة استشارات",
    field: "مواقع إلكترونية — خدمات",
    challenge: "موقع قديم لا يعكس مكانة الشركة ولا يجلب عملاء.",
    solution: "تصميم وتطوير موقع سريع يركز على توليد الطلبات.",
    result: "زيادة طلبات التواصل المؤهلة بشكل ملحوظ.",
    metric: "+%220 طلبات",
  },
  {
    id: "PRJ-005",
    name: "متجر منتجات أطفال",
    field: "تجارة إلكترونية — أطفال",
    challenge: "سلة مهجورة عالية وتجربة شراء معقدة.",
    solution: "تبسيط رحلة الشراء وأتمتة استرجاع السلات.",
    result: "استرجاع جزء كبير من السلات المهجورة.",
    metric: "+%65 استرجاع",
  },
  {
    id: "PRJ-006",
    name: "علامة عطور فاخرة",
    field: "هوية + متجر — تجزئة فاخرة",
    challenge: "الحاجة لتجربة رقمية تليق بمنتج فاخر.",
    solution: "هوية متكاملة ومتجر بتجربة بصرية غامرة.",
    result: "متوسط قيمة طلب أعلى وصورة علامة أرقى.",
    metric: "+%48 متوسط الطلب",
  },
];

export interface CraftModule {
  id: string;
  title: string;
  desc: string;
  glyph: string;
  connects: string[]; // ids of connected modules
}

export const CRAFT_MODULES: CraftModule[] = [
  { id: "store-setup", title: "تأسيس المتاجر", desc: "نطلق متجرك من الصفر بأساس متين.", glyph: "◐", connects: ["store-dev", "branding"] },
  { id: "store-dev", title: "تطوير المتاجر", desc: "نحسّن الأداء والتحويل باستمرار.", glyph: "◑", connects: ["ads", "websites"] },
  { id: "ads", title: "الإعلانات الممولة", desc: "وصول مدروس يصنع طلبًا حقيقيًا.", glyph: "✦", connects: ["content", "store-dev"] },
  { id: "branding", title: "الهوية البصرية", desc: "شخصية بصرية لا تُنسى.", glyph: "❖", connects: ["content", "store-setup"] },
  { id: "content", title: "المحتوى", desc: "كلمات وصور تبني الثقة والطلب.", glyph: "✎", connects: ["ads", "branding"] },
  { id: "websites", title: "المواقع الإلكترونية", desc: "حضور رقمي سريع وأنيق.", glyph: "▣", connects: ["store-dev", "branding"] },
];

export interface TrustStat {
  label: string;
  value: number;
  prefix?: string;
  suffix?: string;
}

export const TRUST_STATS: TrustStat[] = [
  { label: "عميل", value: 30, prefix: "+" },
  { label: "رضا العملاء", value: 98, suffix: "٪" },
  { label: "متاجر إلكترونية", value: 5, prefix: "+" },
  { label: "مشاريع تصميم", value: 10, prefix: "+" },
  { label: "حملات إعلانية", value: 5, prefix: "+" },
  { label: "حسابات تمت إدارتها", value: 5, prefix: "+" },
];

// "الباقات" — nested accordion structure with full package details.
export interface PackageDetails {
  price?: string;
  duration?: string;
  description?: string;
  features?: string[];
  guarantees?: string[];
  notes?: string[];
}

// Category-level rich content (e.g. graphic-design callout + pricing list).
export interface InfoBlock {
  title?: string;
  body?: string;
  items?: string[];
}

export interface PackageNode {
  title: string;
  children?: PackageNode[];
  details?: PackageDetails;
  blocks?: InfoBlock[];
}

export const PACKAGES: PackageNode[] = [
  {
    title: "تأسيس وتصميم المتاجر الإلكترونية",
    children: [
      {
        title: "تأسيس المتاجر الإلكترونية",
        children: [
          { title: "باقة رقمية" },
          { title: "باقة نواة" },
          { title: "باقة نمو" },
          { title: "باقة ازدهار" },
        ],
      },
      {
        title: "تصميم متجرك الإلكتروني",
        children: [{ title: "تصميم متجر فعال" }],
      },
    ],
  },
  {
    title: "التصميم الجرافيكي",
    blocks: [
      {
        title: "ما عندك هوية جاهزة؟",
        body: "نجهّز مرجعًا بصريًا مصغرًا بـ 199 ر.س — أساس يضبط شغلك ويوحّد مظهرك قبل أي تصميم.",
      },
      {
        title: "تفاصيل الأسعار:",
        items: [
          "الأسعار تشمل تعديلين",
          "التعديل الإضافي 49 ر.س",
          "التسليم بكل الصيغ المفتوحة",
          "3 قطع فأكثر خصم 10%",
        ],
      },
    ],
    children: [
      { title: "الشعارات" },
      { title: "الهويات البصرية" },
      { title: "تصاميم مختارة" },
    ],
  },
  {
    title: "إدارة حسابات التواصل الاجتماعي",
    children: [{ title: "تيك توك" }, { title: "إنستقرام" }, { title: "منصتين" }],
  },
  {
    title: "الإعلانات الممولة",
    children: [{ title: "منصة واحدة" }, { title: "منصتان" }, { title: "ثلاث منصات" }],
  },
];

export interface WhyCard {
  glyph: string;
  title: string;
  desc: string;
}

// "لماذا حِرف؟" — three value cards.
export const WHY_CARDS: WhyCard[] = [
  {
    glyph: "◆",
    title: "خبرة متكاملة",
    desc: "من تأسيس المتجر إلى الهوية والإعلانات وإدارة الحسابات — كل ما يحتاجه مشروعك تحت سقف واحد.",
  },
  {
    glyph: "✦",
    title: "نتائج تتحدث",
    desc: "نقيس كل خطوة بالأرقام ونحسّن باستمرار لنحوّل الزيارات إلى مبيعات ونموٍّ حقيقي.",
  },
  {
    glyph: "❖",
    title: "شراكة حقيقية",
    desc: "نعمل بروح الفريق الواحد، نفهم نشاطك ونرافقك في كل مرحلة من رحلة مشروعك.",
  },
];

// Advisor question flow
export interface AdvisorQuestion {
  id: string;
  question: string;
  type: "choice" | "number";
  options?: { value: string; label: string }[];
  placeholder?: string;
}

export const ADVISOR_QUESTIONS: AdvisorQuestion[] = [
  {
    id: "businessType",
    question: "ما نوع نشاطك؟",
    type: "choice",
    options: [
      { value: "retail", label: "تجارة تجزئة" },
      { value: "fashion", label: "أزياء وموضة" },
      { value: "food", label: "أغذية ومشروبات" },
      { value: "services", label: "خدمات" },
      { value: "tech", label: "تقنية" },
    ],
  },
  {
    id: "products",
    question: "كم عدد المنتجات لديك؟",
    type: "choice",
    options: [
      { value: "1-10", label: "١ — ١٠" },
      { value: "11-50", label: "١١ — ٥٠" },
      { value: "51-200", label: "٥١ — ٢٠٠" },
      { value: "200+", label: "أكثر من ٢٠٠" },
    ],
  },
  {
    id: "hasBrand",
    question: "هل لديك هوية بصرية؟",
    type: "choice",
    options: [
      { value: "yes", label: "نعم، متكاملة" },
      { value: "partial", label: "جزئية" },
      { value: "no", label: "لا، أبدأ من الصفر" },
    ],
  },
  {
    id: "adBudget",
    question: "هل لديك ميزانية إعلانية شهرية؟",
    type: "choice",
    options: [
      { value: "none", label: "لا يوجد بعد" },
      { value: "low", label: "أقل من ٥٬٠٠٠ ﷼" },
      { value: "mid", label: "٥٬٠٠٠ — ٢٠٬٠٠٠ ﷼" },
      { value: "high", label: "أكثر من ٢٠٬٠٠٠ ﷼" },
    ],
  },
  {
    id: "goal",
    question: "ما هدفك الشهري؟",
    type: "choice",
    options: [
      { value: "launch", label: "الإطلاق بنجاح" },
      { value: "sales", label: "زيادة المبيعات" },
      { value: "awareness", label: "بناء الوعي" },
      { value: "scale", label: "التوسّع والنمو" },
    ],
  },
];
