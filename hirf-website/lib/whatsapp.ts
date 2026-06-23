// Unified WhatsApp contact for all package / service / contact buttons.
export const HIRF_PHONE = "966506039366";

// Builds a wa.me link with the unified message, injecting the clicked
// service/package name (or a multi-line selection block). No emojis;
// encodeURIComponent handles line breaks (%0A) and UTF-8 percent-encoding
// for all platforms.
export function whatsappLink(service: string): string {
  const message =
    `أهلًا حِرف\n\n` +
    `مستعد أبدأ معكم وطلبي هو:\n\n` +
    `${service}`;
  return `https://wa.me/${HIRF_PHONE}?text=${encodeURIComponent(message)}`;
}
