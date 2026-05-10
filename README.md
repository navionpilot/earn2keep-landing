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

## Pricing (locked — Slice 6.12)

| Event type | Per-event fee | Plus |
|---|---|---|
| Camp (single team) | **$149** | 3.5% transaction & hosting fee on funds raised |
| Tournament (multi-team) | **$299** | 3.5% transaction & hosting fee on funds raised |

Account setup, event drafting, and exploring the platform are free. The flat fee is charged at event launch; the 3.5% covers payment processing on funds that flow through the platform.

### Camps include
Registration · Challenge tracking · Sponsor pages · Leaderboards · Messaging · Live progress tracking · 30-day event hosting

### Tournaments include
Team registration · Event dashboards · Challenge tracking · Fundraising tools · Sponsor visibility · Leaderboards · 30-day event hosting

---

## What's currently on the page (Phase 6 / Slice 6.12)

Page structure unchanged from 6.11. Slice 6.12 updates:

1. **Pricing section** rewritten with the locked $149 / $299 pricing structure. Camps card has cyan accents (matches the Camp event-card in How it works); Tournaments card has coral. Features use checkmark bullets (the SaaS pricing-page convention) instead of dot bullets.

2. **Closing CTA copy** updated — old line *"Free to set up. Free to run. Pay only when sponsors come through."* was inaccurate now that there's a per-event fee. New line: *"Set up your account free. $149 to launch your first Camp."*

3. **Hero "Sign up free" CTAs unchanged.** Account creation is still genuinely free; the per-event fee only kicks in at event launch. Header, hero, and inline CTAs all keep the "Sign up free" button text.

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
| 6.6 | Pricing (placeholder) | ✅ Done |
| 6.7 | Sign-up CTAs throughout | ✅ Done |
| 6.8 | SEO metadata, sitemap, OG image | ✅ Done |
| 6.8.1 | Copy refinement: drop "not begged for" | ✅ Done |
| 6.10 | Visual refresh: bento hero, pill eyebrows, gradient badges, CTA box | ✅ Done |
| 6.11 | Header navigation links | ✅ Done |
| **6.12** | Real pricing ($149 Camps / $299 Tournaments) | ✅ Done |
| 6.9 | "Sign in" link polish | ⏳ Last slice in Phase 6 |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
