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

Brand tokens live in `styles.css` under `:root`.

---

## What's currently on the page (Phase 6 / Slice 6.10)

This slice is a **visual refresh**. All the page's content (audience sections, How it works, Pricing, inline CTAs, footer) is unchanged from 6.8.1 — what changed is how it looks.

### Visual changes in 6.10

1. **Eyebrow pills** — every `<span class="eyebrow">` across the page now renders as a small rounded chip with a cyan tint background and a thin cyan border, instead of plain letter-spaced text. Applies everywhere eyebrows are used: hero, every audience-section header, How it works, Pricing, the closing CTA box.

2. **Hero is now a 2-column bento layout.** Left column has the existing eyebrow + headline + subhead + CTAs. Right column has a 4-card bento grid showing what an active Camp looks like — a "Sample Camp" progress card, a participants count, a weekly challenges count, and a live activity feed. Stacks to a single column on mobile (under 980px) and the bento goes 1-up under 640px.

3. **Numbered card badges, gradient-treated.** All the `01/02/03/04` numbers in the For Organizers playbook, For Players "Your day" flow, and For Sponsors "How sponsoring works" are now rounded-square badges (56px) with a cyan→teal gradient and a soft glow. Replaces the previous flat coral-text numbering.

4. **Closing CTA, box treatment.** The flat full-width closing CTA strip is now a centered rounded card with a radial cyan glow at the top, "READY TO START?" eyebrow chip, headline ("Run your first Camp."), supporting line, and the Sign up free button. Sits on a transparent section so the background flows through.

### What's deliberately the same

- All copy is unchanged (just refined in 6.8.1)
- All inline CTAs from 6.7 still in place (end of For Organizers, end of How it works)
- All anchor links / footer links still work
- Brand colors and fonts unchanged
- SEO metadata, OG image, sitemap, robots.txt all unchanged from 6.8.1

### Sample Camp data in the hero

The numbers in the hero bento (`$8,250`, `42 participants`, `7 challenges`, etc.) are **illustrative**, not real. The lead card is labeled "SAMPLE CAMP" so it reads as a preview. When the platform has real campaign data, this section can become live data — or stay illustrative, your call.

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
| **6.10** | Visual refresh: bento hero, pill eyebrows, gradient badges, CTA box | ✅ Done |
| 6.9 | "Sign in" link polish | ⏳ Next (last in Phase 6) |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
