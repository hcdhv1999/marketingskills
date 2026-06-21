# حِرف — Hirf

تجربة رقمية عربية غامرة لوكالة رقمية سعودية. ليست موقع وكالة تقليدي، بل منتج رقمي
يقود الزائر في رحلة بناء مشروعه.

An Arabic-first, RTL, immersive digital experience built as a premium product —
not a conventional agency website (no hero → services → portfolio → contact pattern).

## التقنيات · Stack

- **Next.js 15** (App Router) + **React 19**
- **TypeScript** (strict)
- **Tailwind CSS v4**
- **Framer Motion** — choreography, reveals, micro-interactions
- **GSAP + ScrollTrigger** — the final typographic experience
- RTL, Arabic-first, SEO + accessibility, responsive, no images (abstract motion only)

## التجربة · The experience

The page is one immersive, adaptive journey:

1. **Landing** — sequenced intro: «كل مشروع عظيم بدأ بفكرة» → «لكن الفكرة وحدها لا تكفي» → «هنا تبدأ الحِرفة».
2. **Gateway** — «ماذا تريد أن تبني؟» (متجر / علامة / حملة / موقع). The choice reshapes the journey.
3. **Journey** — an adaptive, animated build path that changes per gateway choice.
4. **Hirf Advisor** — a 5-question flow that generates a personalized roadmap inside a premium dashboard (recommended package, timeline, focus, opportunities, next steps).
5. **Project Vault** (خزينة الإنجازات) — projects as protected files that open dramatically.
6. **Craft System** (نظام الحِرفة) — services as a connected, interactive ecosystem diagram.
7. **Tools Center** — six functional SaaS-style tools (profit, pricing, break-even, ads, name generator, idea generator).
8. **Trust** — animated counters.
9. **Final** — massive GSAP-driven typography + dual CTA.

## التشغيل · Run

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # static export -> ./out
```

The app is configured for **static export** (`output: "export"`), so `npm run build`
produces a fully static site in `hirf-website/out/` that can be hosted anywhere.

> Note: `npm run build` fetches Arabic web fonts (Tajawal, Reem Kufi) via `next/font`
> at build time, so the build step needs network access.

## النشر · Deployment (GitHub Pages)

A workflow at `.github/workflows/deploy-hirf.yml` builds and deploys the static
export to GitHub Pages on every push to the working branch.

**One-time setup** (repo admin): GitHub → **Settings → Pages → Build and deployment
→ Source: GitHub Actions**. The Actions token cannot enable Pages itself, so this
switch must be flipped once. After that, the workflow deploys automatically to:

```
https://<owner>.github.io/<repo>/
```

The deploy sets `PAGES_BASE_PATH=/<repo>` so assets resolve under the project
sub-path. For root/custom-domain hosting, leave `PAGES_BASE_PATH` unset.

## البنية · Structure

```
hirf-website/
├── app/                 # layout (RTL, fonts, SEO), globals, page
├── components/          # experience sections
│   └── tools/           # tools center + UI primitives
└── lib/                 # content (Arabic copy) + pure logic (advisor, calculators)
```

All Arabic copy lives in `lib/content.ts`; all business logic is pure and testable
in `lib/advisor.ts` and `lib/calculators.ts`.

## الألوان · Palette

| Token       | Value     |
|-------------|-----------|
| Background  | `#FCF6F6` |
| Primary     | `#2E4F4F` |
| Accent      | `#D88935` |
