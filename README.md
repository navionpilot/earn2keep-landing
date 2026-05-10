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

## What's currently on the page (Phase 6 / Slice 6.4)

What ships in Slice 6.4 (For Sponsors section, on top of 6.1 + 6.1.1 + 6.2 + 6.3):

- Top status ticker
- Sticky header with **Sign in** and **Sign up free** CTAs
- Hero with the "What is earn²keep?" framing
- "Three roles. One simple loop." value prop section (Organizers / Participants / Sponsors)
- For Organizers section — 8-role grid + organizer playbook
- For Players section — 4 benefit cards + "Your day" flow
- **NEW: For Sponsors section** — 4 benefit cards + "How sponsoring works" flow
- Closing CTA strip
- 4-column footer

The For Sponsors section now has `id="sponsors"`, so the **For Sponsors** link in the footer activates and smoothly scrolls to it. All three "For You" footer column links are now live.

### Footer link status

| Link | Anchor | Status |
|---|---|---|
| What is earn²keep? | `#what-is-earn2keep` | ✅ Active (shipped 6.1) |
| For Organizers | `#organizers` | ✅ Active (shipped 6.2) |
| For Players | `#players` | ✅ Active (shipped 6.3) |
| **For Sponsors** | `#sponsors` | ✅ **Active (shipped 6.4)** |
| How it works | `#how-it-works` | ⏳ Activates in Slice 6.5 |
| Pricing | `#pricing` | ⏳ Activates in Slice 6.6 |

---

## Phase 6 roadmap (planned slices)

| Slice | Description | Status |
|---|---|---|
| 6.1 | Hero + value prop + chrome | ✅ Done |
| 6.1.1 | Header/footer polish + readability bumps | ✅ Done |
| 6.2 | "For Organizers" section (8 roles + playbook) | ✅ Done |
| 6.3 | "For Players" section (benefits + your day) | ✅ Done |
| **6.4** | "For Sponsors" section (benefits + how it works) | ✅ Done |
| 6.5 | "How it works" — Camp + Tournament explained | ⏳ Next |
| 6.6 | Pricing | ⏳ |
| 6.7 | Sign-up CTAs throughout | ⏳ |
| 6.8 | SEO metadata, sitemap, OG images | ⏳ |
| 6.9 | "Sign in" link polish | ⏳ |

---

## Deploy

Push to `main`. Vercel rebuilds automatically (usually under 60 seconds). Hard-refresh `earn2keep.com` to see changes.
