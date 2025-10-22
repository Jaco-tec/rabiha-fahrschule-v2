# مدربة السواقة ربيعة — Praxis Training (Astro + Decap CMS + Netlify)
**نسخة v2** مع:
- تبديل لغات بالمسارات `/` للعربي و`/de` للألماني
- صفحات مستقلة لكل درس بالعربي `/lesson/[slug]` وبالألماني `/de/lesson/[slug]`
- دروس جاهزة بالمحتوى الذي طلبته

## النشر على Netlify
1) ارفعي هذا المجلد إلى GitHub (Create new repo).
2) Netlify → Add new site → Import from Git → اختاري المستودع.
3) Build: `npm run build`, Publish: `dist`.
4) **Identity**: Enable → Invite yourself → Enable Git Gateway.
5) لوحة الإدارة: `/admin`.

## تخصيص الخلفية
- ارفعي صورتك إلى `public/images/background.jpg`
- أضيفي في `src/styles/theme.css`:
  body { background: url("/images/background.jpg") no-repeat center center fixed; background-size: cover; }
