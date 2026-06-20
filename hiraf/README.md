# حِرف — Hiraf Digital Experience

An immersive, scroll-driven brand journey for **حِرف (Hiraf)**, a premium Saudi digital
agency. Not a traditional agency website — the visitor *watches a business come to life*:
from a single ember of an idea, into a brand, into a live store, into growth — then the
four crafts merge into the Hiraf core and the logo is revealed.

**Tagline:** كل صنعة لها حِرف

## The four crafts (the stars)

1. تأسيس وتصميم المتاجر الإلكترونية
2. التصميم الجرافيكي
3. الحملات الممولة
4. إدارة الحسابات

They are surfaced early (a dedicated services band right after the story) and again as
interactive gateways, so visitors reach the offerings fast.

## Open it

```bash
open hiraf/index.html        # macOS
xdg-open hiraf/index.html    # Linux
# or drag index.html into any modern browser
```

Single self-contained file — no build step, no dependencies. Vanilla JS + HTML canvas +
CSS. RTL Arabic. Works offline.

## Brand identity

| Token | Value | Use |
|-------|-------|-----|
| Primary | `#2E4F4F` | Deep teal — base, depth |
| Secondary / accent | `#D88935` | Hiraf orange — ember, highlights, CTAs |
| Support | `#C9A36A` sand · `#4A7A78` / `#6FA39F` teal tints | Worlds, charts |

Warm teal-charcoal background, ambient orange/teal lighting — **premium, Saudi, digital**,
not cyberpunk/sci-fi. No blues, no neon green.

### Typography (Hiraf font system)

- **Brand / hero / headlines / titles / buttons:** **Abjad Howz** (Extra Bold hero, Bold
  headings, Medium buttons).
- **Body / long paragraphs:** **IBM Plex Sans Arabic**.

Abjad Howz is a licensed font. Drop the licensed files into `hiraf/fonts/` and uncomment
the `@font-face` slots at the top of the `<style>` block in `index.html`. Until then the
brand stack falls back to IBM Plex Sans Arabic. Generic SaaS fonts (Tajawal etc.) are
deliberately avoided.

## The journey

| Section | Arabic | What happens |
|---------|--------|--------------|
| **A — Story** (short) | كل مشروع يبدأ بفكرة → بحِرف → نبني متجرك → النمو | Idea ember grows into a brand, then a live store, then growth. The first screen leads with **نبني متاجر إلكترونية تبيع** + e-commerce chips (متاجر · منتجات · طلبات · مدفوعات · مبيعات). |
| **B — Transformation** (short) | التحوّل → الإتقان | The four crafts fuse into a core that becomes the Hiraf logo. |
| **Services + Packages** | خدماتنا | The **four services are the stars** — large interactive cards; selecting one reveals its packages **in place**, and store pricing is shown by default (no extra scrolls). |
| **Why Hiraf** | لماذا حِرف؟ | Premium cards (حلول متكاملة · تنفيذ احترافي · دعم ومتابعة · نتائج قابلة للقياس) + stats (+30 عميل · 98% رضا · +10 تصميم · +5 متاجر). |
| **Reviews** | آراء عملائنا | Auto-sliding glassmorphism testimonials, RTL. |
| **About** | من نحن | Compact agency statement. |
| **Portfolio** | أعمالنا | Generative work tiles. |
| **Finale** | كل صنعة لها حِرف | Teal close, massive logo, WhatsApp + contact CTAs. |

The two cinematic acts were halved and section spacing tightened to reach the offerings
fast and keep the page compact and conversion-focused.

## Conversion & contact

- **Floating WhatsApp** button on every page → `+966506039366` (official icon).
- Every package CTA opens a prefilled **WhatsApp** order message.
- Footer nav: الرئيسية · الخدمات · الباقات · أعمالنا · من نحن · سياسة الدفع · سياسة الخصوصية · تواصل معنا.
- Contact: `byhirf@gmail.com` · `+966506039366`.
- Standalone policy pages: `payment-policy.html`, `privacy-policy.html` (linked in footer).

## Customizing

- **Copy / packages / prices:** the `HEADS`, `MHEADS`, `PKG`, `WORK`, `COUNTERS` arrays
  near the bottom of `index.html`.
- **Colors:** the `:root` CSS variables (`--primary`, `--accent`, `--sand`, ...) — mirrored
  in JS as `ACCENT`, `TEAL`, `SAND`, etc. for the canvas scenes.
- **Pacing:** each act's scroll length is the `--len` on its `.scroller`; phase timing lives
  in the `win(p, start, end)` windows inside `drawStory` / `drawMerge`.
- **CTAs:** wire `ابدأ مشروعك الآن` / `تواصل معنا` to your real links / form.
