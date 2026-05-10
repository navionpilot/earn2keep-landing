# earn²keep — Landing Site

The marketing site at **earn2keep.com**. Static HTML/CSS — no build step, no framework. Pushed to GitHub, auto-deployed by Vercel.

**Tagline:** *Earn it. Keep it.*

---

## Files

- `index.html` — the page itself
- `styles.css` — all styling
- `favicon.svg` — browser tab icon
- `og-image.png` — social share preview (1200×630)
- `robots.txt` — search engine crawl directives
- `sitemap.xml` — URL index for search engines

---

## Brand (locked — Variation F: Teal & Coral)

| Token | Value |
|---|---|
| Background | `#041418` (dark teal) |
| Primary CTA | `#ff755f` (coral) |
| Accent | `#35d5df` (cyan) |
| Display font | Sora (700/800/900) |
| Body font | Plus Jakarta Sans (400/500/600/700) |

---

## What's currently on the page (Phase 6 / Slice 6.11)

Everything from 6.10 plus header navigation. The sticky header now has 5 jump-links across the top:

- **How it works** → `#how-it-works`
- **Organizers** → `#organizers`
- **Players** → `#players`
- **Sponsors** → `#sponsors`
- **Pricing** → `#pricing`

Click any of them and the page smoothly scrolls to that section. Sections have `scroll-margin-top: 90px` so the sticky header doesn't cover the section title when you land.

The "What is earn²keep?" section (the value prop with "Three roles, one simple loop") is intentionally not in the header nav — it sits right under the hero, so visitors will see it without needing a jump-link.

### Header layout

```
[ logo ] —— [ How it works · Organizers · Players · Sponsors · Pricing ] —— [ Sign in ] [ Sign up free → ]
```

Three zones using flex space-between: logo left, page nav center, auth actions right.

### Responsive behavior

- **> 980px** — full header (logo + nav + Sign in + Sign up free)
- **640–980px** — header nav links hidden, but Sign in + Sign up free still visible
- **< 640px** — header nav links + Sign in hidden, only logo + Sign up free remain

Mobile/tablet visitors navigate via the **footer link grid**, which has the same six section links plus more.

---

## Phase 6 roadmap

| Slice | Description | Status |
|---|---|---|
| 6.1 | Hero + value prop + chrome | ✅ Done |
| 6.1.1 | Header/footer polish + readability bumps | ✅ Done |
| 6.2 | "For Organizers" section | ✅ Done |
| 6.3 | "For Players" section | ✅ Done |
| 6.4 | "For Sponsors" section | ✅ Done |
| 6.5 | "How it works" — Camp + Tournament | ✅ Done |
| 6.6 | Pricing | ✅ Done |
| 6.7 | Sign-up CTAs throughout | ✅ Done |
| 6.8 | SEO metadata, sitemap, OG image | ✅ Done |
| 6.8.1 | Copy refinement: drop "not begged for" | ✅ Done |
| 6.10 | Visual refresh: bento hero, pill eyebrows, gradient badges, CTA box | ✅ Done |
| **6.11** | Header navigation links | ✅ Done |
| 6.9 | "Sign in" link polish | ⏳ Next (last in Phase 6) |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
