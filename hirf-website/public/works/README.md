# Works assets (أعمالنا)

Each project's images live in `public/works/<project>/`.

For every work you want to show with a logo + banners:

1. Create a folder, e.g. `public/works/zod/`
2. Add the **logo** (transparent PNG/SVG preferred): `public/works/zod/logo.png`
3. Add the **banners** (any order), e.g. `public/works/zod/1.jpg`, `2.jpg`, `3.jpg`, `4.jpg`
4. Reference them in `lib/content.ts` → `WORKS`:

```ts
{
  name: "زود",
  field: "متجر إلكتروني",
  logo: "/works/zod/logo.png",
  banners: ["/works/zod/1.jpg", "/works/zod/2.jpg", "/works/zod/3.jpg", "/works/zod/4.jpg"],
}
```

Behavior: the closed card shows the **logo only** (no border, centered, original aspect).
Clicking the logo expands the banners stacked vertically below the card; click «إغلاق» to collapse.
If no `logo` is set, the card falls back to showing the project name + field.
