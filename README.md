# earn²keep — Landing Site

The marketing site at **earn2keep.com**. Static HTML/CSS — no build step, no framework. Pushed to GitHub, auto-deployed by Vercel.

**Tagline:** *Earn it. Keep it.*

---

## Files

- `index.html` — the page itself
- `styles.css` — all styling
- `favicon.svg` — browser tab icon

That's the whole site. No build step, no `node_modules`, no JavaScript framework. Drop the files in, push to `main`, Vercel handles the rest.

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

## What's currently on the page (Phase 6 / Slice 6.1)

This is the first cut of the Phase 6 rewrite. What ships in Slice 6.1:

- Top status ticker
- Sticky header with **Sign in** and **Sign up free** CTAs (both link to `app.earn2keep.com`)
- Hero with the "What is earn²keep?" framing — inclusive language for all 8 organizer roles
- "Three roles. One simple loop." value prop section (Organizers / Participants / Sponsors)
- Closing CTA strip
- Footer

The page is intentionally short while later slices fill it in.

---

## Phase 6 roadmap (planned slices)

| Slice | Description | Status |
|---|---|---|
| **6.1** | Hero + value prop + chrome | ✅ Done |
| 6.2 | "For organizers" section (8 roles in detail) | ⏳ Next |
| 6.3 | "For players / participants" section | ⏳ |
| 6.4 | "For sponsors" section | ⏳ |
| 6.5 | "How it works" — Camp + Tournament explained | ⏳ |
| 6.6 | Pricing | ⏳ |
| 6.7 | Sign-up CTAs throughout | ⏳ |
| 6.8 | SEO metadata, sitemap, OG images | ⏳ |
| 6.9 | "Sign in" link polish | ⏳ |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
