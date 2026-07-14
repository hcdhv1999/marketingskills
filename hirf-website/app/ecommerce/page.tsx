import type { Metadata } from "next";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import FloatingWhatsApp from "@/components/FloatingWhatsApp";
import AbstractBackground from "@/components/AbstractBackground";
import { gk } from "@/lib/goldKasra";
import { whatsappLink } from "@/lib/whatsapp";

export const metadata: Metadata = {
  title: { absolute: "تصميم متاجر سلة وزد بتصميم مخصص | حِرف" },
  description:
    "نصمم متجرك على سلة أو زد بتصميم مخصص لا قالب جاهز, ونرافقك حتى أول طلب, ونعلّمك أساسيات تسويقه. باقات من 999 ر.س.",
  alternates: { canonical: "https://byhirf.com/ecommerce" },
  openGraph: {
    title: "تصميم متاجر سلة وزد بتصميم مخصص | حِرف",
    description:
      "نصمم متجرك على سلة أو زد بتصميم مخصص لا قالب جاهز, ونرافقك حتى أول طلب, ونعلّمك أساسيات تسويقه. باقات من 999 ر.س.",
    url: "https://byhirf.com/ecommerce",
    type: "website",
    locale: "ar_SA",
  },
};

const WA = whatsappLink("تصميم وتأسيس متجر إلكتروني (سلة أو زد)");

const INCLUDES: { title: string; items: string[] }[] = [
  {
    title: "التأسيس النظامي",
    items: [
      "إصدار شهادة العمل الحر (للسعوديين)",
      "فتح حساب بنكي تجاري",
      "توثيق المتجر رسميًا",
      "إعداد سياسات المتجر (الخصوصية، الاستبدال، الشحن)",
    ],
  },
  {
    title: "التجهيز التقني",
    items: [
      "تفعيل وسائل الدفع (مدى، Apple Pay، STC Pay، تمارا/تابي)",
      "ربط شركات الشحن والأسعار المخفّضة",
      "ربط تحليلات جوجل وحسابات التواصل",
      "ربط أداة التتبع (Pixel) لتجهيز المتجر للإعلانات",
      "اختبار عملية شراء كاملة قبل التسليم",
    ],
  },
  {
    title: "التصميم المخصص",
    items: [
      "تصميم واجهة المتجر بهويتك",
      "بنرات مصممة خصيصًا لنشاطك",
      "تنظيم الأقسام وتصنيف المنتجات",
      "إضافة المنتجات مع كتابة أوصاف بيعية",
      "تحسين صفحات المنتجات لرفع نسبة الشراء",
    ],
  },
  {
    title: "المرافقة والتعليم",
    items: [
      "تدريب على إدارة متجرك",
      "كُتيّب أساسيات تسويق متجرك",
      "خارطة طريق تسويقية للانطلاق",
      "مرافقة حتى أول طلب",
    ],
  },
];

const DIFFERENTIATORS: { title: string; body: string }[] = [
  {
    title: "1. تصميم مخصص، لا قالب معاد",
    body: "كل متجر نصممه من الصفر بما يناسب نشاطه. لا نأخذ قالبًا جاهزًا ونغيّر ألوانه ونسلّمه لك — لأن متجرك ليس نسخة من متجر غيرك، ولا يجب أن يبدو كذلك.",
  },
  {
    title: "2. نرافقك حتى أول طلب",
    body: "التسليم ليس نهاية العمل. أصعب مرحلة في حياة أي متجر هي الفجوة بين “المتجر جاهز” و“وصلني أول طلب”. نمشي معك فيها: نراجع، نصحّح، ونوجّه — حتى يصلك أول طلب فعلي.",
  },
  {
    title: "3. نعلّمك تسويق متجرك",
    body: "لا نريدك معتمدًا علينا في كل خطوة. نسلّمك مع متجرك كُتيّب أساسيات تسويق متجرك — دليل عملي يعلّمك كيف تصوّر منتجاتك، تكتب محتواك، وتصل لعميلك. تملك متجرك، وتملك مهارة تشغيله.",
  },
];

const PACKAGES: { name: string; price: string; body: string; popular?: boolean }[] = [
  {
    name: "رقمية",
    price: "999 ر.س",
    body: "لصاحب المنتج الرقمي (كتب، دورات، قوالب). متجر يسلّم منتجك تلقائيًا لحظة الشراء.",
  },
  {
    name: "نواة",
    price: "1499 ر.س",
    popular: true,
    body: "الأساس الكامل: تأسيس نظامي، تجهيز تقني، تصميم مخصص، ومرافقة.",
  },
  {
    name: "نمو",
    price: "2199 ر.س",
    body: "كل ما سبق، مع تجهيز المتجر للإعلانات، تحسين تجربة المستخدم، جلسة استشارية، ومنتجات أكثر.",
  },
  {
    name: "ازدهار",
    price: "4499 ر.س",
    body: "الأشمل: هوية بصرية أوسع، برنامج ولاء، جلستان استشاريتان، ومتابعة ثلاثة أشهر.",
  },
];

const STEPS: { title: string; body: string }[] = [
  { title: "1. نفهم نشاطك", body: "جلسة نستمع فيها لمنتجاتك وجمهورك، قبل أي تصميم." },
  { title: "2. نؤسس", body: "التوثيق، الحساب البنكي، السياسات، وسائل الدفع والشحن." },
  { title: "3. نصمم مخصصًا", body: "واجهة وبنرات وأقسام مبنية لنشاطك أنت." },
  { title: "4. نختبر", body: "عملية شراء كاملة، نتأكد أن كل شيء يعمل." },
  { title: "5. نسلّم ونرافق", body: "تدريب، كُتيّب تسويق، ومرافقة حتى أول طلب." },
];

const FAQS: { q: string; a: string }[] = [
  { q: "كم يستغرق التأسيس؟", a: "من 3 إلى 14 يوم عمل حسب الباقة. نحدد المدة بدقة عند الاتفاق." },
  {
    q: "ما معنى “تصميم مخصص”؟",
    a: "أننا لا نأخذ قالبًا جاهزًا ونغيّر ألوانه. نصمم واجهتك وبنراتك وترتيب أقسامك بما يناسب نشاطك تحديدًا.",
  },
  {
    q: "ماذا تعني “مرافقة حتى أول طلب”؟",
    a: "بعد التسليم لا نتركك. نراجع معك خطواتك الأولى، نصحّح ما يحتاج تصحيحًا، ونوجّهك — حتى يصلك أول طلب فعلي من عميل حقيقي.",
  },
  {
    q: "هل أحتاج سجلًا تجاريًا؟",
    a: "للسعوديين، شهادة العمل الحر تكفي للبدء — ونصدرها لك ضمن الباقة.",
  },
  {
    q: "هل تضيفون المنتجات؟",
    a: "نعم، كل باقة تشمل عددًا من المنتجات مع كتابة أوصافها. الصور والمعلومات تُستلم منك.",
  },
  {
    q: "هل تديرون الإعلانات؟",
    a: "نعم، كخدمة منفصلة — إدارة حملات على سناب وتيك توك وإنستغرام.",
  },
  {
    q: "متجري على منصة أخرى، تنقلونه؟",
    a: "تواصل معنا ونناقش الحالة.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "تصميم وتأسيس متاجر سلة وزد",
  serviceType: "تصميم وتأسيس المتاجر الإلكترونية",
  provider: { "@type": "Organization", name: "حِرف", url: "https://byhirf.com" },
  areaServed: { "@type": "Country", name: "المملكة العربية السعودية" },
  url: "https://byhirf.com/ecommerce",
  description:
    "نصمم متجرك على سلة أو زد بتصميم مخصص لا قالب جاهز, ونرافقك حتى أول طلب, ونعلّمك أساسيات تسويقه. باقات من 999 ر.س.",
  offers: PACKAGES.map((p) => ({
    "@type": "Offer",
    name: p.name,
    price: p.price.replace(/[^0-9]/g, ""),
    priceCurrency: "SAR",
  })),
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: FAQS.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

function Check() {
  return (
    <span className="mt-0.5 shrink-0 text-[var(--color-accent)]" aria-hidden>
      ✓
    </span>
  );
}

export default function EcommercePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <AbstractBackground />
      <Nav />
      <main id="main" className="relative">
        {/* Hero + intro */}
        <section className="px-6 pt-36 pb-16 sm:pt-40">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="font-display text-4xl leading-tight text-[var(--color-ink)] sm:text-5xl">
              تصميم وتأسيس متاجر سلة وزد
            </h1>
            <div className="mt-8 space-y-4 text-right text-lg leading-loose text-[var(--color-ink-soft)]">
              <p>معظم من يقدّم لك “تصميم متجر سلة” يعطيك قالبًا جاهزًا، يغيّر ألوانه، ويسلّمك.</p>
              <p className="font-display text-[var(--color-ink)]">نحن لا نعمل هكذا.</p>
              <p>
                نصمم متجرك من الصفر — تصميم مخصص لنشاطك ومنتجاتك وجمهورك. ثم لا نختفي عند التسليم:
                نرافقك حتى <span className="font-display text-[var(--color-ink)]">يصلك أول طلب</span>،
                ونعلّمك كيف تسوّق متجرك بنفسك.
              </p>
              <p className="text-[var(--color-accent)]">لأن المتجر الذي لا يبيع، لا قيمة لجماله.</p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#packages"
                className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-[1.03]"
              >
                أسّس متجرك
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                واتساب
              </a>
            </div>
          </div>
        </section>

        {/* ثلاثة أشياء تفرّقنا */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              ثلاثة أشياء تفرّقنا (وهي ما ستجده هنا فقط)
            </h2>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {DIFFERENTIATORS.map((d) => (
                <div
                  key={d.title}
                  className="rounded-3xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)] p-7 text-right shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-lg text-[var(--color-ink)]">{d.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{d.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ماذا يشمل تأسيس متجرك؟ */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              ماذا يشمل تأسيس متجرك؟
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              {INCLUDES.map((g) => (
                <div
                  key={g.title}
                  className="rounded-3xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)] p-7 text-right shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-lg text-[var(--color-ink)]">{g.title}</h3>
                  <ul className="mt-4 space-y-2">
                    {g.items.map((it) => (
                      <li key={it} className="flex gap-2 text-sm leading-relaxed text-[var(--color-ink)]">
                        <Check />
                        <span>{it}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* سلة أم زد؟ */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-3xl text-right">
            <h2 className="text-center font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              سلة أم زد؟
            </h2>
            <div className="mt-8 space-y-4 text-lg leading-loose text-[var(--color-ink-soft)]">
              <p>كلتاهما منصة سعودية قوية. الفرق العملي:</p>
              <p>
                <span className="font-display text-[var(--color-ink)]">سلة</span> — الأوسع انتشارًا،
                ومنظومة تطبيقاتها أكبر. مناسبة لأغلب الأنشطة.
              </p>
              <p>
                <span className="font-display text-[var(--color-ink)]">زد</span> — مرونة أعلى في تخصيص
                التصميم.
              </p>
              <p>
                الحقيقة التي لا يقولها كثيرون:{" "}
                <span className="font-display text-[var(--color-ink)]">
                  المنصة ليست ما يحدد نجاح متجرك.
                </span>{" "}
                كلتاهما تكفي. ما يحدد النجاح هو التصميم والتجربة والتسويق. نساعدك في الاختيار بناءً على
                نشاطك، لا بناءً على عمولة.
              </p>
            </div>
          </div>
        </section>

        {/* عندك متجر قائم لا يبيع؟ */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-3xl rounded-3xl border border-[var(--color-accent)]/40 bg-[var(--color-accent)]/8 p-8 text-right">
            <h2 className="font-display text-2xl text-[var(--color-ink)] sm:text-3xl">
              عندك متجر قائم لا يبيع؟
            </h2>
            <p className="mt-4 text-lg leading-loose text-[var(--color-ink-soft)]">
              إن كان متجرك يستقبل زوارًا ولا يستقبل طلبات، فالمشكلة غالبًا في واحد من ثلاثة: التصميم لا
              يبني ثقة، الأقسام مربكة، أو صفحات المنتجات لا تقنع.
            </p>
            <p className="mt-4 text-lg leading-loose text-[var(--color-ink-soft)]">
              نعاين متجرك، ونقول لك بصراحة أين الخلل — قبل أن تدفع شيئًا.
            </p>
            <p className="mt-4 text-lg leading-loose text-[var(--color-ink)]">
              <span className="font-display">تطوير المتاجر القائمة يبدأ من 349 ر.س.</span> المعاينة
              مجانية وبلا التزام.
            </p>
          </div>
        </section>

        {/* الباقات */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-5xl">
            <h2 className="text-center font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              الباقات
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
              {PACKAGES.map((p) => (
                <div
                  key={p.name}
                  className={`relative rounded-3xl border p-7 text-right ${
                    p.popular
                      ? "border-[var(--color-accent)] shadow-[var(--shadow-lift)]"
                      : "border-[var(--color-ink)]/12 shadow-[var(--shadow-soft)]"
                  } bg-[var(--color-canvas)]`}
                >
                  {p.popular && (
                    <span className="absolute -top-3 right-6 rounded-full bg-[var(--color-accent)] px-4 py-1 text-sm font-medium text-[var(--color-canvas)] shadow">
                      الأكثر طلبًا
                    </span>
                  )}
                  <h3 className="font-display text-xl text-[var(--color-ink)]">{p.name}</h3>
                  <p className="mt-2 font-display text-2xl text-[var(--color-accent)]">{p.price}</p>
                  <p className="mt-3 text-sm leading-relaxed text-[var(--color-ink-soft)]">{p.body}</p>
                </div>
              ))}
            </div>
            <div className="mt-8 text-center">
              <a
                href="/#packages"
                className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-[1.03]"
              >
                تفاصيل الباقات
              </a>
            </div>
          </div>
        </section>

        {/* كيف نعمل؟ */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-center font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              كيف نعمل؟
            </h2>
            <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
              {STEPS.map((s) => (
                <div
                  key={s.title}
                  className="rounded-3xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)] p-6 text-right shadow-[var(--shadow-soft)]"
                >
                  <h3 className="font-display text-base text-[var(--color-ink)]">{s.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--color-ink-soft)]">{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* أسئلة شائعة */}
        <section className="px-6 py-12">
          <div className="mx-auto max-w-3xl">
            <h2 className="text-center font-display text-3xl text-[var(--color-ink)] sm:text-4xl">
              أسئلة شائعة
            </h2>
            <div className="mt-10 space-y-4">
              {FAQS.map((f) => (
                <div
                  key={f.q}
                  className="rounded-2xl border border-[var(--color-ink)]/12 bg-[var(--color-canvas)] p-6 text-right"
                >
                  <h3 className="font-display text-lg text-[var(--color-ink)]">{f.q}</h3>
                  <p className="mt-2 leading-loose text-[var(--color-ink-soft)]">
                    {f.a}
                    {f.q === "هل تديرون الإعلانات؟" && (
                      <>
                        {" "}
                        <a href="/#packages" className="text-[var(--color-accent)] hover:underline">
                          اطّلع على صفحة الحملات
                        </a>
                        .
                      </>
                    )}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* الخاتمة */}
        <section className="px-6 pb-20 pt-6">
          <div className="mx-auto max-w-3xl text-center">
            <div className="space-y-4 text-lg leading-loose text-[var(--color-ink-soft)]">
              <p>
                متجرك جميل لكنه لا يبيع؟ إذًا هو ليس جميلًا بما يكفي — الجمال الذي لا يبيع زينة، لا
                تصميم.
              </p>
              <p className="font-display text-[var(--color-ink)]">
                نبني متجرًا يبيع، ونمشي معك حتى يبيع فعلًا.
              </p>
            </div>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href="/#packages"
                className="rounded-full bg-[var(--color-ink)] px-6 py-3 text-sm font-medium text-[var(--color-canvas)] transition-transform hover:scale-[1.03]"
              >
                أسّس متجرك
              </a>
              <a
                href={WA}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full bg-[#25D366] px-6 py-3 text-sm font-medium text-white transition-transform hover:scale-[1.03]"
              >
                واتساب
              </a>
            </div>
            <p className="mt-10 text-sm text-[var(--color-ink-soft)]">
              <a href="/" className="text-[var(--color-accent)] hover:underline">
                {gk("العودة إلى الصفحة الرئيسية لِحِرف")}
              </a>
            </p>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
