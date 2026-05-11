# earn²keep Landing — Slice 6.13 Deploy Guide

**Slice 6.13 — Site expansion (footer redesign, About, Help, Sitemap, Legal docs)**

Big landing-site update. **9 files** total — 3 modified, 6 new. Includes draft legal documents that must be reviewed by an attorney before launch.

---

## What's in this slice

### Modified files

1. **`index.html`**
   - Fixed the activity feed copy-paste/screen-reader bug (added trailing space inside the `<span>` for each `<li>` so the text reads naturally when copied)
   - Replaced the 4-column footer with a 5-column redesigned footer:
     - Brand column now includes social media icons (X, Facebook, Instagram, Pinterest, LinkedIn) — all currently `href="#"` placeholders for you to fill in when you have accounts
     - New "Support" column linking to Help, Contact, and Sitemap
     - Footer bottom row now includes legal links (Terms, Privacy, Acceptable Use)

2. **`styles.css`**
   - Footer social icons + legal link styles
   - Subpage layout system (used by all new pages): `.subpage-main`, `.subpage-title`, `.subpage-section`, etc.
   - Legal "Lawyer Review Required" banner styles
   - FAQ accordion styles using `<details>`/`<summary>`
   - Sitemap grid layout
   - Brace count: 230 → 232 (+2 only? actually +many new selectors but no broken rules) — balanced

3. **`sitemap.xml`**
   - Now lists all 4 public pages (home, about, help, sitemap.html)
   - Legal pages intentionally **excluded** while in draft form (they have `noindex` meta tags too)

### New files

4. **`about.html`** — Tells the story of earn²keep: why we built it, what we do, who we're for, what makes us different. Draft written from my understanding of the project; **edit freely** — this is "your voice" copy and you may want to tweak.

5. **`help.html`** — FAQ accordion organized into three groups: For Organizers, For Players, For Sponsors. Plus a final "still stuck?" contact section. 13 questions covered.

6. **`sitemap.html`** — Human-readable index of every public page and major section. Organized into 6 grouped cards (Main, Home sections, Support, App, Legal, Other).

7. **`terms.html`** — Terms of Service draft with 14 sections covering acceptance, eligibility, roles, fees, payments/refunds (separate `#refunds` anchor for the FAQ to link to), user content, prohibited activities, termination, disclaimers, liability, indemnification, governing law placeholder, change procedure, contact.

8. **`privacy.html`** — Privacy Policy draft with 11 sections, including a comprehensive **Children's Privacy (COPPA)** section at `#childrens-privacy` covering parental consent flow, limited data collection, no behavioral advertising for under-13s, parent rights, no marketing-purpose sharing.

9. **`aup.html`** — Acceptable Use Policy draft with 9 sections covering general principles, prohibited content, prohibited conduct, special rules for content involving minors, reporting violations, consequences, **DMCA copyright notice procedure** at `#dmca` (with placeholder for the USCO-registered designated agent), policy changes, contact.

---

## Critical: Legal documents require review

Every legal page (`terms.html`, `privacy.html`, `aup.html`) opens with a prominent coral banner:

> **⚠️ Lawyer Review Required Before Launch**  
> This is a starter draft generated for development purposes. It covers the patterns common to online fundraising platforms but **must be reviewed by an attorney** familiar with both online platforms and youth services before going live with real users or processing real money...

**These pages are also marked `noindex, follow`** in their `<meta name="robots">` tags so search engines don't index them while they're in draft. Once they've been lawyered-up and finalized, the `noindex` should be removed and the pages added to `sitemap.xml`.

Specific items that need legal attention:

- **Jurisdiction & governing law** in `terms.html` §12 — currently bracketed placeholder
- **Arbitration/court venue** in `terms.html` §12 — to be decided by counsel
- **Effective date** on all three legal pages — `[TO BE SET AT LAUNCH]`
- **DMCA designated agent registration** — requires separate registration with the U.S. Copyright Office (USCO) for DMCA safe-harbor protection; physical address needs to be added once registered. `dmca@earn2keep.com` is currently set as the contact email
- **COPPA verifiable parental consent flow** — `privacy.html` describes the flow as "typically handled through the organizer's invitation flow." Counsel should confirm whether the current app flow actually meets COPPA's "verifiable parental consent" bar, and if not, what needs to change.
- **State fundraising registration** — some states require platforms or organizations facilitating charitable solicitation to register. Whether earn²keep falls under that (it may be transactional rather than charitable, depending on framing) needs legal analysis.
- **Stripe agreement compliance** — the refund mechanics and payment timing need to align with whatever your Stripe terms require

---

## Things you'll need to do BEYOND deploying this slice

1. **Email setup**
   - `support@earn2keep.com` — referenced throughout. Set this up as an alias forwarding to `waylon.hdd@comcast.net` (or wherever you read mail) via your email provider's settings.
   - `dmca@earn2keep.com` — referenced in `aup.html`. Same as above — alias to your main inbox.

2. **Social media accounts** (or remove the icons)
   - All five social icons in the footer currently point to `href="#"`. When you create real accounts on X, Facebook, Instagram, Pinterest, LinkedIn, swap the `href="#"` with the real URLs. Find them in `index.html`, `about.html`, `help.html`, `sitemap.html`, `terms.html`, `privacy.html`, `aup.html` (the footer is duplicated across all 7 pages since this is static HTML).
   - **Alternative:** if you decide not to do social yet, delete the `<ul class="footer-social">` block from each page entirely. Dead links look worse than no links.

3. **DELETE the orphan `script.js`** on GitHub (the leftover from before Phase 6). Navigate to the file on GitHub, click the trash icon, commit. Doesn't need to be in this slice.

4. **Legal review** (per warnings above)

---

## Files in this ZIP

```
about.html                     ← NEW
aup.html                       ← NEW (Acceptable Use + DMCA)
help.html                      ← NEW (FAQ)
index.html                     ← MODIFIED (activity feed + footer)
privacy.html                   ← NEW (Privacy + COPPA)
sitemap.html                   ← NEW (human-readable)
sitemap.xml                    ← MODIFIED (added new URLs)
styles.css                     ← MODIFIED (footer + subpage styles)
terms.html                     ← NEW
```

---

## Deploy steps

Repo: `https://github.com/navionpilot/earn2keep-landing/tree/main`

This is a flat directory structure — all files go at the repo root.

**Method:** drag-and-drop upload everything at once.

1. Open the repo URL above
2. Click **Add file** → **Upload files**
3. From the extracted ZIP, drag **all 9 files** into the GitHub upload area at once
4. GitHub will show "X new files" and "Y replacing existing files"
5. Commit message: `slice 6.13 — site expansion (footer, About, Help, Sitemap, Legal drafts)`
6. **Commit directly to the main branch**
7. Click **Commit changes**

Vercel auto-rebuilds. Wait ~60 seconds.

---

## Verification

1. **`earn2keep.com`** — hard refresh. Activity feed renders unchanged visually, but copy-paste a row and you should get a proper space. Footer should have 5 columns now (Brand+Social, Explore, For You, Support, Get Started). Bottom row should show legal links.

2. **`earn2keep.com/about.html`** — full About page, branded styling, all sections rendered.

3. **`earn2keep.com/help.html`** — FAQ page with three expandable groups. Click any question — it expands. Click again — collapses.

4. **`earn2keep.com/sitemap.html`** — grid of 6 cards listing all pages.

5. **`earn2keep.com/terms.html`**, **`/privacy.html`**, **`/aup.html`** — each has a prominent coral "Lawyer Review Required" banner at the top.

6. **`earn2keep.com/sitemap.xml`** — XML file with 4 URLs.

7. **Mobile check** — visit any page on your phone. Footer should stack to single column on narrow screens. Subpages should be readable without horizontal scroll.

8. **Internal links** — click around. Every page's footer links should work (no 404s). The FAQ on `help.html` links to `/terms.html#refunds`, `/privacy.html#childrens-privacy` — those anchors are real and should jump to the right sections.

---

## Validation

- ✅ All 7 HTML pages pass structural validation (no unclosed/mismatched tags)
- ✅ CSS brace count balanced
- ✅ `sitemap.xml` well-formed (parses cleanly with `xml.etree`)
- ✅ Activity feed fix verified — `<span>Campaign reached 65% </span>` has the trailing space
- ✅ All 7 pages reference `styles.css`
- ✅ Internal subpage links present and consistent across pages
- ✅ Legal pages marked `noindex, follow` so search engines don't surface drafts
- ✅ Social icons use accessible `aria-label` and `title` attributes
- ✅ SVG icons inline (no external dependencies)
- ✅ Mobile-responsive (existing footer breakpoints at 900px and 640px still work with new 5-col layout)

---

## Rollback

The slice replaces 3 files and adds 6 new ones. To roll back:
- Revert the GitHub commit (single commit per the deploy instructions)
- This restores the old 4-column footer and removes all new pages
- No DB/SQL impact

---

## What's next

After this slice, the landing site has the structure of a real product site:
- Hero + features (home)
- About story
- Help/FAQ
- Visible sitemap
- Legal pages (in draft, ready for legal review)
- Working social icons (when you fill in the URLs)

Natural next steps when you're ready:
- **Set up the email aliases** (support@, dmca@)
- **Engage legal counsel** for the three legal docs before going live with real money
- **Create real social accounts** and swap the `#` placeholders
- **Delete orphan `script.js`** on GitHub
- **Maybe Phase 9** in the broader project: analytics (Plausible or similar), error monitoring (Sentry)
