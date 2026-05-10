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

---

## What's currently on the page (Phase 6 / Slice 6.9 — Phase 6 closed)

Slice 6.9 closes Phase 6 with three small but meaningful polishes:

1. **Sign in is visible on mobile.** Previously hidden below 640px, now visible at all viewport widths. Returning users can log in without scrolling to the footer. At small phone widths the logo and button are tightened to make room.

2. **External-link arrow (↗)** on Sign in (header + footer) and Sign up free (footer). The arrow shifts up-and-right on hover, signaling "this leaves the marketing site for the app."

3. **Keyboard focus states.** All interactive elements (buttons, header nav links, footer links, Sign in) now show a cyan focus ring when navigated by keyboard. Mouse users see no change.

---

## Phase 6 roadmap — closed

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
| 6.12 | Real pricing ($149 Camps / $299 Tournaments) | ✅ Done |
| **6.9** | **"Sign in" link polish** | ✅ **Done** |

**Phase 6 is closed.** The next slice resumes the main project sequence (Phase 7).

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
