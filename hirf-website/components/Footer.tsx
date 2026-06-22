import { whatsappLink } from "@/lib/whatsapp";

const COLUMNS: { title: string; links: { label: string; href: string; external?: boolean }[] }[] = [
  {
    title: "الخدمات",
    links: [
      { label: "تأسيس وتصميم المتاجر", href: "#packages" },
      { label: "التصميم الجرافيكي", href: "#packages" },
      { label: "إدارة حسابات التواصل", href: "#packages" },
      { label: "الإعلانات الممولة", href: "#packages" },
    ],
  },
  {
    title: "حِرف",
    links: [
      { label: "من نحن", href: "#about" },
      { label: "أعمالنا", href: "#work" },
      { label: "الباقات", href: "#packages" },
      { label: "الأسئلة الشائعة", href: "#faq" },
    ],
  },
  {
    title: "التواصل",
    links: [
      { label: "تحدث معنا", href: whatsappLink("استشارة عامة"), external: true },
      { label: "Instagram — hirf_sa", href: "https://instagram.com/hirf_sa", external: true },
      { label: "TikTok — hirf_sa", href: "https://www.tiktok.com/@hirf_sa", external: true },
      { label: "X — hirf_sa", href: "https://x.com/hirf_sa", external: true },
    ],
  },
  {
    title: "السياسات",
    links: [
      { label: "سياسة الخصوصية", href: "/privacy" },
      { label: "سياسة الدفع والتسليم", href: "/payment-delivery" },
    ],
  },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-6 pb-12 pt-8" aria-label="تذييل الموقع">
      <div className="mx-auto max-w-6xl rounded-[2rem] card-ink p-10 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-1">
            <span className="font-display text-3xl text-[var(--color-canvas)]">حِرف</span>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-canvas)]/60">كل صنعة لها حِرفة.</p>
          </div>
          {COLUMNS.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="font-display text-base text-[var(--color-canvas)]">{col.title}</h3>
              <ul className="mt-4 space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a
                      href={l.href}
                      {...(l.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-sm text-[var(--color-canvas)]/60 transition-colors hover:text-[var(--color-accent-soft)]"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        <div className="mt-10 border-t border-[var(--color-canvas)]/15 pt-6 text-center text-sm text-[var(--color-canvas)]/50">
          © {year} حِرف — وكالة رقمية سعودية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
