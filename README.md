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

## What's currently on the page (Phase 6 / Slice 6.6)

What ships in Slice 6.6 (Pricing section, on top of 6.1 + 6.1.1 + 6.2 + 6.3 + 6.4 + 6.5):

- Top status ticker
- Sticky header with **Sign in** and **Sign up free** CTAs
- Hero with the "What is earn²keep?" framing
- "Three roles. One simple loop." value prop section
- For Organizers section
- For Players section
- For Sponsors section
- How it works section (Camp + Tournament)
- **NEW: Pricing section** — Free setup vs. small percentage when sponsors pay
- Closing CTA strip
- 4-column footer

The Pricing section now has `id="pricing"`, so the **Pricing** link in the footer activates. **All footer links are now live.** No placeholder anchors remain.

### Footer link status

| Link | Anchor | Status |
|---|---|---|
| What is earn²keep? | `#what-is-earn2keep` | ✅ Active |
| How it works | `#how-it-works` | ✅ Active |
| **Pricing** | `#pricing` | ✅ **Active (shipped 6.6)** |
| For Organizers | `#organizers` | ✅ Active |
| For Players | `#players` | ✅ Active |
| For Sponsors | `#sponsors` | ✅ Active |

### Note on the pricing percentage

The exact platform percentage is intentionally not shown — it ships when Phase 8 (Stripe payments) ships and the percentage is locked in. The pricing card explicitly notes "Exact percentage announced before public launch." When the percentage is decided, a small follow-up slice will drop the number in.

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
| **6.6** | Pricing | ✅ Done |
| 6.7 | Sign-up CTAs throughout | ⏳ Next |
| 6.8 | SEO metadata, sitemap, OG images | ⏳ |
| 6.9 | "Sign in" link polish | ⏳ |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
