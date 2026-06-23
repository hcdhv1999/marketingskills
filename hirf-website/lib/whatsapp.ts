// Unified WhatsApp contact for all package / service / contact buttons.
export const HIRF_PHONE = "966506039366";

// Builds a wa.me link with the approved unified message, injecting the
// clicked service/package name (or a multi-line selection block) where the
// "selected package" line is. Line breaks are URL-encoded as %0A.
export function whatsappLink(service: string): string {
  const message =
    `أهلًا حِرف 👋🏻\n\n` +
    `أبي أطلب الخدمة التالية:\n\n` +
    `${service}\n\n` +
    `مستعد أبدأ معكم 🧡\n\n` +
    `هذا ضمان حِرف\n\n` +
    `إذا لم تناسبك جميع المقترحات الأولية، نعيد تنفيذ اتجاه تصميمي جديد كليًا مرة واحدة مجانًا.`;
  return `https://wa.me/${HIRF_PHONE}?text=${encodeURIComponent(message)}`;
}
