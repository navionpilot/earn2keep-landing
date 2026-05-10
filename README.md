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

## What's currently on the page (Phase 6 / Slice 6.7)

What ships in Slice 6.7 (inline CTAs, on top of all prior 6.x slices):

- Top status ticker
- Sticky header with **Sign in** and **Sign up free** CTAs
- Hero with **Sign up free** + "What is earn²keep?" CTAs
- "Three roles. One simple loop." value prop section
- For Organizers section + **inline Sign up free CTA**
- For Players section
- For Sponsors section
- How it works section + **inline Sign up free CTA**
- Pricing section
- Closing CTA strip
- 4-column footer

### CTA inventory (everything pointing to `app.earn2keep.com/signup`)

| Location | Style | Tagline / context |
|---|---|---|
| Sticky header | `.btn-sm` (small) | "Sign up free →" |
| Hero | `.btn-lg` (large) | "Sign up free →" + "What is earn²keep?" secondary |
| **End of For Organizers (NEW)** | `.btn` (default) | *"Ready to run your first event?"* |
| **End of How it works (NEW)** | `.btn` (default) | *"Pick your format and start."* |
| Closing CTA strip | `.btn-lg` (large) | "Ready to run your first Camp?" + "Sign up free →" |
| Footer | text link | "Sign up free" in Get Started column |

The inline CTAs are deliberately quieter than the closing strip (no card, no background, just a centered tagline + button) so they read as "convert here if you're ready" rather than competing with the closing strip's main act.

### Why no inline CTA on For Players, For Sponsors, or Pricing

- **For Players:** players don't sign up themselves; they're invited by an organizer
- **For Sponsors:** sponsors arrive via QR code / share link, not signup
- **Pricing:** the closing CTA strip is right after — would be two CTAs back-to-back

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
| **6.7** | Sign-up CTAs throughout | ✅ Done |
| 6.8 | SEO metadata, sitemap, OG images | ⏳ Next |
| 6.9 | "Sign in" link polish | ⏳ |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
