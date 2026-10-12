# STEAM & FROST — takeaway beverage concept

> ⚠️ **Concept demo, not a real business.** "STEAM & FROST / بخار وصقيع" is a temporary identity.
> The menu, copy and Unsplash photos are illustrative. There are **no** real prices, offers, hours, address,
> phone or WhatsApp details. Replace everything listed in the [checklist](#before-publishing) before going live.
> The page also ships with `noindex` so it is kept out of search engines.

An Arabic-first, right-to-left landing page for a **takeaway-only** hot & cold drinks shop. There is no seating,
lounge or table service. The art direction plays heat against cold: warm espresso, caramel, cream and ember tones
cool into glacier blue, silver and citrus as visitors move from hot drinks to iced ones.

## Run it

```bash
npm install
npm run dev        # http://localhost:5173 (development)
npm run build      # typecheck + client build + prerender → dist/
npm run preview    # http://localhost:4173 (serves the production build)
npm test           # Vitest: content rules, languages, interactions, SSR markup, axe structural checks
npm run build:share  # ONE self-contained file → share/steam-and-frost.html (send it, open it on a phone)
```

## Languages

Eleven languages, picked from the globe button in the header (a native `<select>`, so phones show their own picker):
Arabic (default) · English · کوردی (Central Kurdish / Sorani) · ܣܘܪܝܬ (Sureth, Assyrian Neo-Aramaic, East Syriac
script) · سورث (لفظ عربي) — the same Sureth written in Arabic letters as pronounced (ܐܣܝܐ → أسيا) · Türkçe · Français · Español · Deutsch · Italiano · 中文 (Simplified Chinese). The choice is remembered and can
be forced with `?lang=ar|en|ku|syr|sar|tr|fr|es|de|it|zh`. Arabic, Kurdish and both Sureth scripts (Syriac, Arabic letters) are right-to-left, the others
left-to-right: the Split Pour, arrow keys, thermometer, arrows and gradients mirror automatically. Every string lives
in `src/i18n/<lang>.ts` (TypeScript refuses a language file that misses a string). Small bilingual accents show
English on RTL pages and Arabic on LTR pages. Sureth uses a self-hosted Noto Sans Syriac Eastern subset; Chinese uses
the device's own CJK font. **Translations other than Arabic should be reviewed by native speakers before publication
— both Sureth versions and Kurdish in particular.**

## Live demo (GitHub Pages)

`.github/workflows/deploy.yml` runs the tests, builds and deploys `dist/` to GitHub Pages on every push to `main`.
One-time setup in the repository: **Settings → Pages → Build and deployment → Source: GitHub Actions**. Asset URLs are
relative (`base: './'`), so the site works under `https://<user>.github.io/<repo>/`.

## Phone-ready single file

`npm run build:share` inlines all JavaScript, CSS and the (subset) fonts into `share/steam-and-frost.html`
(~0.8 MB). The page is prerendered, so even a viewer that blocks scripts (e.g. some in-app previews) shows the full
content; opened in a real browser it is fully interactive. Photos still load from the internet.

## Signature moments

| Moment | Where | How |
|---|---|---|
| **The Thermostat** | whole page | One number, `--temp` (0 hot → 1 iced), drives the palette through `color-mix(in oklab, …)` in `src/styles/tokens.css`. It is scrubbed by a single ScrollTrigger over the Signature section and quantised to 1% steps (`src/App.tsx`). The menu overrides it locally (`--mt`, an animatable `@property`). The nav thermometer mirrors it. Colour is not motion, so it also runs for reduced-motion users. |
| **Split Pour** | hero | `src/components/SplitPour.tsx`. Clip-path comparison of a hot and an iced latte. Works by mouse or touch drag (horizontal only; vertical swipes still scroll the page), by keyboard (`role="slider"`, arrows, Home/End, PageUp/PageDown) and by two one-tap buttons. The server renders a 50/50 static frame, so it still looks right without JavaScript. |
| **Steam Identity** | hero | `src/components/SteamMark.tsx`. Steam curls draw upward with CSS `stroke-dashoffset` on `pathLength="1"`, then the Latin wordmark condenses from blur. GSAP DrawSVG would have been allowed by the audited license, but pure CSS is lighter, needs no measuring, avoids a hydration flash and survives a failed script. Arabic is never split into letters. |
| **Hot / Iced switch** | menu | `TempSwitch.tsx` is a radiogroup with roving tabindex and arrow keys in RTL order. `Menu.tsx` filters with plain React state (fully usable without animation). GSAP **Flip** animates the re-layout only in the full-motion tier. |
| **Signature drinks** | 4 editorial cards | Restrained photo parallax and word-level heading reveals (GSAP SplitText, `type: 'words'`). React Bits **SloshGauge** liquid meters fill once in view. They are decorative (`aria-hidden`); the real values are text. |
| **Takeaway moment** | closing | A full-bleed iced shot with a cool colour grade, the line "خذه وامشِ.", and a CTA back to the menu. No coupon, no codes, no offers. |

## Engineering notes

- **Stack:** Vite 8 + React 19 + TypeScript, plain CSS with design tokens. Production HTML is **prerendered**
  (`scripts/prerender.mjs`), so the full page, menu included, is readable before any JavaScript runs.
- **Motion:** `src/lib/motion.ts` registers ScrollTrigger, Flip and SplitText once and wraps every animation in a
  scoped `gsap.matchMedia()` context. A reduced-motion preference therefore skips all GSAP motion, and unmounting
  reverts only that component's own triggers. There is no global `ScrollTrigger.getAll().kill()`, and an animation
  error is caught and leaves the content static.
- **Smooth scroll:** `src/lib/smoothScroll.ts` runs Lenis for **wheel input only**, on fine pointers, and never
  under reduced motion. Touch scrolling stays native. Lenis is synced through `gsap.ticker` and is not paired with
  ScrollSmoother or `normalizeScroll`. In-page anchors are handled in JavaScript so focus moves to the target. CSS
  `scroll-behavior: smooth` is deliberately absent because ScrollTrigger writes it back inline after each refresh.
- **Arabic:** Reem Kufi for display, Alexandria for text (Arabic and Latin), Fraunces for English accents. There is
  no letter-spacing on Arabic. Text splits are words only: SplitText in `type: 'words'`, plus the hero's own word
  spans. Numerals are Arabic-Indic. English fragments carry `lang="en"`, and `dir="ltr"` where punctuation matters.
- **No fabricated business data:** `src/content/site.ts` holds every real-world field as `null`. `Visit.tsx`
  renders contact, hours and ordering only when that data exists. Until then it shows a clearly labelled
  placeholder.
- **Images:** served by Unsplash's CDN with `srcset`, `auto=format` (AVIF/WebP), intrinsic sizes (no CLS),
  dominant-colour placeholders and lazy loading. React hoists preloads for the two hero photos into `<head>`.

### Audited reference reuse

| Reference | Used | Notes |
|---|---|---|
| GSAP 3.15 | ScrollTrigger, Flip, SplitText, matchMedia, context | Standard no-charge license. Not used: ScrollSmoother, normalizeScroll, DrawSVG (CSS alternative chosen). |
| Lenis 1.3.26 | core | MIT |
| React Bits `Micro/SloshGauge` | vendored, 1 bug fix | MIT + Commons Clause |
| React Bits `Animations/Noise` | vendored, used as static grain (`fps={0}`) | MIT + Commons Clause |
| React Bits ScrollReveal, ScrollFloat, SplashCursor, LiquidEther, ScrollStack | **not used** | They were rejected in the audit for global trigger kills, leaks, mobile scroll blocking and a conflict with Lenis. |

See `THIRD_PARTY_NOTICES.md` for licenses. React Bits' Commons Clause means **this site must not be resold as
a template** that includes those components.

## Project structure

```
src/
  content/   site.ts (business info: all null), drinks.ts (concept menu), photos.ts (Unsplash + credits)
  lib/       motion.ts (GSAP tiers), smoothScroll.ts (Lenis), menu.ts (filter helpers)
  styles/    tokens.css (palette, Thermostat, type scale), base.css
  components/
    Nav, Hero, SteamMark, SplitPour, TempSwitch, Menu, Signature, Story, Takeaway, Visit, Footer, Photo, Icons
  i18n/      types.ts (locales + string contract), I18nProvider.tsx, one dictionary per language
  assets/    iq-group-logo.webp (studio credit in the footer)
    vendor/react-bits/  SloshGauge, Noise (+ LICENSE.md)
  test/      Vitest suites
scripts/prerender.mjs
```

## Before publishing

- [ ] Real shop **name, logo and wordmark**. Replace `business.name`, `SteamMark`, the nav glyph and `public/favicon.svg`.
- [ ] Set `business.isConcept = false`. This removes the concept banner and notices.
- [ ] Real **menu**: drink names, descriptions, hot/iced split, sizes and **prices** (in `src/content/drinks.ts`).
- [ ] Real **signature drinks** and taste-profile values (or remove the meters).
- [ ] Own **photography** for every drink plus a matched hot/iced pair for Split Pour, self-hosted (in `src/content/photos.ts`).
- [ ] **Address and map link**, **opening hours**, **phone / WhatsApp**, **order or delivery link**, **Instagram** (in `src/content/site.ts`).
- [ ] Copy review by the owner, including the brand voice and the light Iraqi colloquial.
- [ ] Remove `noindex` from `index.html`, then add real meta description and social images.
- [ ] Domain, hosting and analytics or consent decisions.
