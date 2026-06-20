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

| Act | Scenes | What happens |
|-----|--------|--------------|
| **A — Story** (concise) | كل مشروع يبدأ بفكرة → كل هوية تبدأ بحِرف → نبني متجرك → ثم نساعده على النمو | An idea ember grows; a brand forms; a glass store builds itself; sales/revenue rise. |
| **B — Transformation** | worlds operate → connect → merge → collapse to core → logo reveal | The four crafts fuse into a single core that becomes the Hiraf logo. |
| **Services** | حِرَفنا الأربع | The four services as the stars, surfaced right after the story. |
| **C — Conversion** | من أين تبدأ رحلتك؟ | Interactive gateways; selecting one reveals its packages in place — no reload. |
| **Proof** | Portfolio + trust | Generative tiles and count-up indicators. |
| **Finale** | كل صنعة لها حِرف | Teal close, massive logo, primary + secondary CTAs. |

Scene scroll lengths and section padding were tightened ~40–50% from the first concept to
remove empty space and reach the offerings faster.

## Customizing

- **Copy / packages / prices:** the `HEADS`, `MHEADS`, `PKG`, `WORK`, `COUNTERS` arrays
  near the bottom of `index.html`.
- **Colors:** the `:root` CSS variables (`--primary`, `--accent`, `--sand`, ...) — mirrored
  in JS as `ACCENT`, `TEAL`, `SAND`, etc. for the canvas scenes.
- **Pacing:** each act's scroll length is the `--len` on its `.scroller`; phase timing lives
  in the `win(p, start, end)` windows inside `drawStory` / `drawMerge`.
- **CTAs:** wire `ابدأ مشروعك الآن` / `تواصل معنا` to your real links / form.
