# حِرفة — Hiraf Cinematic Digital Experience

An immersive, scroll-driven brand journey for **Hiraf** (حِرفة), a Saudi digital agency.
Not a traditional agency website — the visitor *watches a business come to life*: from a
single glowing idea, into a brand, into a live digital store, into growth — then the four
service worlds merge into the Hiraf core and the logo is revealed.

**Tagline:** كل صنعة لها حِرفة · *Every craft has its master.*

## Open it

```bash
open hiraf/index.html        # macOS
xdg-open hiraf/index.html    # Linux
# or just drag index.html into any modern browser
```

Single self-contained file — no build step, no dependencies, no frameworks.
Vanilla JS + HTML canvas + CSS. RTL Arabic. Works offline (web font is progressive
enhancement with a system-font fallback).

## The journey

| Act | Scenes | What happens |
|-----|--------|--------------|
| **A — Story** | كل مشروع يبدأ بفكرة → كل هوية تبدأ بحِرفة → نبني متجرك → ثم نساعده على النمو | An idea grows; a brand forms; a glass store builds itself; sales notifications, revenue, and analytics rise. |
| **B — Transformation** | 5 phases: worlds operate → connect → merge → collapse to core → logo reveal | The four worlds (متجر · تصميم · إعلانات · إدارة) fuse into a single energy core that becomes the Hiraf logo. The most memorable moment. |
| **C — Conversion** | من أين تبدأ رحلتك؟ | Four giant interactive **gateways** (not "services"). Selecting one reveals its packages in place — no reload, others fade back. |
| **Proof** | Portfolio + trust counters | Generative portfolio tiles and count-up trust indicators. |
| **Finale** | كل صنعة لها حِرفة | Dark-green close, massive logo, primary + secondary CTAs. |

## Design language

Premium · futuristic · Saudi · cinematic · immersive. Glassmorphism floating
interfaces, ambient lighting, particle systems, scroll storytelling, 3D depth via
layered canvas. No stock photos, no generic illustrations, no template sections.

## Customizing

- **Copy / packages / prices:** edit the `HEADS`, `MHEADS`, `PKG`, `WORK`, and
  `COUNTERS` arrays near the bottom of `index.html`.
- **Colors:** the `:root` CSS variables (`--green`, `--green-bright`, `--green-deep`, `--gold`).
- **Pacing:** each act's scroll length is the `--len` on its `.scroller`; phase
  timing lives in the `win(p, start, end)` windows inside `drawStory` / `drawMerge`.
- **CTAs:** wire `ابدأ مشروعك الآن` / `تواصل معنا` to your real links / form.
