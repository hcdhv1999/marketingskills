// Unified WhatsApp contact for all package / service / contact buttons.
export const HIRF_PHONE = "966506039366";

// Builds a wa.me link with the approved unified message, injecting the
// clicked service/package name (or a multi-line selection block).
export function whatsappLink(service: string): string {
  const message = `أهلًا حِرف 👋🏻\n\nأبي أطلب الخدمة التالية:\n\n${service}\n\nمستعد أبدأ معكم 🧡`;
  return `https://wa.me/${HIRF_PHONE}?text=${encodeURIComponent(message)}`;
}
