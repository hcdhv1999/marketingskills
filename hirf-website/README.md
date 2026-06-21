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

> Note: `npm run build` fetches Arabic web fonts (Tajawal, Reem Kufi) via `next/font`
> at build time, so the build step needs network access.

## النشر · Deployment (Vercel)

This is a standard Next.js app — Vercel builds and hosts it natively. Import the
repo at **[vercel.com/new](https://vercel.com/new)** and set:

| Setting           | Value                          |
|-------------------|--------------------------------|
| Framework Preset  | Next.js (auto-detected)        |
| **Root Directory**| `hirf-website`                 |
| Build Command     | `next build` (default)         |
| Install Command   | `npm install` (default)        |
| Branch            | your working branch            |

No environment variables are required. Vercel then redeploys automatically on
every push and provides the production URL.

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
