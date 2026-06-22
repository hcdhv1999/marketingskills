import { whatsappLink } from "@/lib/whatsapp";
import { gk } from "@/lib/goldKasra";

function IconWhatsApp() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51l-.57-.01c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
function IconMail() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 7 9 6 9-6" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="h-5 w-5" aria-hidden>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M16.5 3c.3 2.1 1.6 3.7 3.7 4v2.4c-1.3.1-2.6-.3-3.7-1v6.1c0 3.3-2.5 5.5-5.4 5.5-3 0-5.1-2.4-5.1-5.1 0-3 2.4-5.2 5.6-4.9v2.5c-.4-.1-.8-.2-1.2-.2-1.3 0-2.3 1.1-2.3 2.5 0 1.4 1 2.5 2.4 2.5 1.5 0 2.5-1.1 2.5-2.9V3h3.5z" />
    </svg>
  );
}
function IconX() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5" aria-hidden>
      <path d="M18.244 2H21.5l-7.1 8.114L22.75 22h-6.59l-5.16-6.74L4.99 22H1.73l7.6-8.68L1.25 2h6.76l4.66 6.16L18.244 2Zm-1.156 18h1.83L7.01 3.88H5.05L17.088 20Z" />
    </svg>
  );
}

const CONTACTS: { icon: React.ReactNode; label: string; href: string }[] = [
  { icon: <IconWhatsApp />, label: "+966 50 603 9366", href: whatsappLink("استشارة عامة") },
  { icon: <IconMail />, label: "byhirf@gmail.com", href: "mailto:byhirf@gmail.com" },
  { icon: <IconInstagram />, label: "hirf_sa", href: "https://instagram.com/hirf_sa" },
  { icon: <IconTikTok />, label: "hirf_sa", href: "https://www.tiktok.com/@hirf_sa" },
  { icon: <IconX />, label: "hirf_sa", href: "https://x.com/hirf_sa" },
];

const POLICIES = [
  { label: "سياسة الخصوصية", href: "/privacy" },
  { label: "سياسة الدفع والتسليم", href: "/payment-delivery" },
];

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative px-6 pb-12 pt-8" aria-label="تذييل الموقع">
      <div className="mx-auto max-w-6xl rounded-[2rem] card-ink p-10 sm:p-12">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <span className="font-display text-3xl text-[var(--color-canvas)]">{gk("حِرف")}</span>
            <p className="mt-3 text-sm leading-relaxed text-[var(--color-canvas)]/60">{gk("كل صنعة لها حِرفة.")}</p>
          </div>

          <nav aria-label="التواصل">
            <h3 className="font-display text-base text-[var(--color-canvas)]">التواصل</h3>
            <ul className="mt-4 space-y-3">
              {CONTACTS.map((c) => (
                <li key={c.label + c.href}>
                  <a
                    href={c.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-[var(--color-canvas)]/70 transition-colors hover:text-[var(--color-accent-soft)]"
                  >
                    <span className="text-[var(--color-accent-soft)]">{c.icon}</span>
                    <span dir="ltr">{c.label}</span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="السياسات">
            <h3 className="font-display text-base text-[var(--color-canvas)]">السياسات</h3>
            <ul className="mt-4 space-y-2.5">
              {POLICIES.map((p) => (
                <li key={p.href}>
                  <a href={p.href} className="text-sm text-[var(--color-canvas)]/60 transition-colors hover:text-[var(--color-accent-soft)]">
                    {p.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-10 border-t border-[var(--color-canvas)]/15 pt-6 text-center text-sm text-[var(--color-canvas)]/50">
          © {year} حِرف — وكالة رقمية سعودية. جميع الحقوق محفوظة.
        </div>
      </div>
    </footer>
  );
}
