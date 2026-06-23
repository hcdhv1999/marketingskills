// Unified WhatsApp contact for all package / service / contact buttons.
export const HIRF_PHONE = "966506039366";

// Builds a wa.me link with the unified message, injecting the clicked
// service/package name (or a multi-line selection block). Emojis use \u{}
// escapes so their UTF-8 bytes are always correct; encodeURIComponent
// handles line breaks (%0A) and UTF-8 percent-encoding for all platforms.
export function whatsappLink(service: string): string {
  const wave = "\u{1F44B}\u{1F3FB}"; // 👋🏻
  const heart = "\u{1F9E1}"; // 🧡
  const message =
    `أهلًا حِرف ${wave}\n\n` +
    `أبي أطلب الخدمة التالية:\n\n` +
    `${service}\n\n` +
    `مستعد أبدأ معكم ${heart}`;
  return `https://wa.me/${HIRF_PHONE}?text=${encodeURIComponent(message)}`;
}
