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

That's the whole site. No build step, no `node_modules`, no JavaScript framework.

---

## Brand (locked — Variation F: Teal & Coral)

Matches the app at `app.earn2keep.com`.

| Token | Value |
|---|---|
| Background | `#041418` (dark teal) |
| Primary CTA | `#ff755f` (coral) |
| Accent | `#35d5df` (cyan) |
| Display font | Sora (700/800/900) |
| Body font | Plus Jakarta Sans (400/500/600/700) |

Brand tokens live in `styles.css` under `:root`. Change them there if the brand ever updates and the whole site follows.

---

## What's currently on the page (Phase 6 / Slice 6.8.1)

Page layout and design unchanged from 6.8 — the only changes here are copy:

- The phrase **"Fundraising that's earned, not begged for."** has been replaced everywhere with **"Fundraising you actually earn."**
- Affected places: hero H1, page title, meta description, OG title, OG image alt text, Twitter title, JSON-LD WebSite description, and the OG image itself
- The italic coral accent word in the hero shifts from **earned** → **actually** (which is the differentiator word in the new phrase)

The brand tagline ("Earn it. Keep it.") is unchanged — that's the locked slogan.

---

## Phase 6 roadmap (planned slices)

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
| **6.8.1** | Copy refinement: drop "not begged for" framing | ✅ Done |
| 6.9 | "Sign in" link polish | ⏳ Next (last in Phase 6) |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
