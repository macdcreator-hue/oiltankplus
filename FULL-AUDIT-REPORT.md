# Full SEO Audit Report — oiltanksplus.co.uk
*Generated: 2026-05-16*

---

## SEO Health Score: 67/100

| Category | Weight | Score | Weighted |
|----------|--------|-------|---------|
| Technical SEO | 22% | 6.5/10 | 14.3 |
| Content Quality | 23% | 7.0/10 | 16.1 |
| On-Page SEO | 20% | 7.0/10 | 14.0 |
| Schema / Structured Data | 10% | 7.0/10 | 7.0 |
| Performance (CWV) | 10% | 6.0/10 | 6.0 |
| AI Search Readiness | 10% | 5.5/10 | 5.5 |
| Images | 5% | 8.0/10 | 4.0 |
| **TOTAL** | **100%** | | **66.9 → 67** |

**Business type:** Service Area Business (SAB) — nationwide, no fixed address  
**Industry:** Home Services — Oil Tank Installation / Heating  
**Pages crawled:** 10 (all pages in sitemap)

---

## Executive Summary

The site has a solid structural foundation: correct doctype, `lang="en-GB"`, viewport meta, HTTPS, `robots.txt`, `sitemap.xml`, JSON-LD schema on all pages, OG/Twitter cards, and `loading="lazy"` on images. The recent schema and sitemap work has pushed this into a strong baseline.

**The five critical issues holding back rankings:**

1. **No canonical tags on any page** — without canonicals, Google must guess the preferred URL. WWW vs non-WWW, `.html` extension variants, and query-string parameters can all create duplicate-content signals.
2. **Hero image loaded as CSS background** — browser preload scanner cannot discover it, causing delayed LCP. Worst Core Web Vitals impact per page.
3. **News article cards have no `<a>` links** — 6 of 7 article cards are click-dead and have no URL to link to. Google cannot reach, index, or pass link equity to these articles.
4. **No individual article pages** — articles exist only as 2-line teasers. No full content = no indexable authority, no E-E-A-T signals, no long-tail keyword coverage.
5. **No favicon defined in HTML** — minor but affects SERP appearance and brand recognition.

**Top 5 quick wins (implementable today):**

1. Add `<link rel="canonical">` to all 10 pages (30 minutes)
2. Add `<link rel="preload" as="image">` for hero-home.jpg on index.html (5 minutes)
3. Fix about.html and contact.html title tags to include keywords (5 minutes)
4. Add Article/BlogPosting schema to news.html (20 minutes)
5. Add `SearchAction` to the WebSite schema on index.html (10 minutes)

---

## 1. Technical SEO — 6.5/10

### ✅ Passing
- `robots.txt` present: `Allow: /`, Sitemap referenced correctly
- `sitemap.xml`: 10 URLs, all HTTPS, no deprecated `<priority>`/`<changefreq>`, correct namespace
- `meta name="robots" content="index, follow"` on all pages
- `lang="en-GB"` on all pages
- `charset="UTF-8"` on all pages
- `<meta name="viewport" content="width=device-width, initial-scale=1.0">` on all pages
- No redirect chains detected (static site, all internal links use relative paths)
- Skip-to-main-content link on all pages (accessibility + crawl signal)

### ❌ Failing
| Issue | Severity | Pages Affected |
|-------|----------|---------------|
| No `<link rel="canonical">` on any page | **Critical** | All 10 |
| No `<link rel="preload" as="image">` for LCP hero image | **Critical** | index.html |
| No favicon `<link rel="icon">` in any page head | **High** | All 10 |
| No HTTP→HTTPS redirect verification possible (static HTML) | **High** | All |
| No `<link rel="preconnect" crossorigin>` for `fonts.gstatic.com` on all pages | **Medium** | Some pages missing |
| No `Content-Security-Policy` header (server-level, not in HTML) | **Medium** | All |
| `sitemap.xml` lastmod dates are all identical (2026-05-16) — should reflect real mod dates | **Low** | sitemap.xml |

---

## 2. Content Quality — 7.0/10

### ✅ Strengths
- Service pages (installations.html, commercial.html, tank-disposal.html) have substantive body copy covering regulations, process, inclusions, warranties
- FAQ section on homepage (10 Q&As) — strong for featured snippets and AI citation
- About page covers company history, accreditations (OFTEC/APHC), Made in Britain trust signals
- Contact page clearly displays phone, email, hours — prominent NAP
- Consistent, professional brand voice across all pages

### ❌ Gaps
| Issue | Severity | Impact |
|-------|----------|--------|
| news.html articles are teasers only — no full article pages exist | **Critical** | Zero indexable blog content; huge E-E-A-T and long-tail coverage gap |
| News card articles have no `<a href>` links — click-dead | **Critical** | Google cannot crawl, index, or pass PageRank to articles |
| No author attribution on news articles (no `<address>` or byline) | **High** | E-E-A-T "Expertise" signal missing |
| No `datePublished` / `dateModified` on article cards | **High** | Freshness signal absent |
| Locations page county badges are static text — no geo-specific content | **High** | Cannot rank for "[county] oil tank installation" queries |
| oil-tank-range.html tank cards: minimal copy, no specs beyond name | **Medium** | Product detail pages could rank for model/capacity searches |

---

## 3. On-Page SEO — 7.0/10

### Title Tag Audit
| Page | Title | Length | Status |
|------|-------|--------|--------|
| index.html | Oil Tank Installation UK \| Oil Tanks Plus | 42 | ✅ |
| installations.html | Oil Tank Installation UK — OFTEC Registered \| Oil Tanks Plus | 62 | ✅ |
| tank-disposal.html | Oil Tank Disposal & Decommissioning UK \| Oil Tanks Plus | 55 | ✅ |
| commercial.html | Commercial Oil Tank Services UK \| Oil Tanks Plus | 48 | ✅ |
| oil-tank-range.html | Oil Tank Range — Bunded, Single-Skin & Steel \| Oil Tanks Plus | 62 | ✅ |
| locations.html | Oil Tank Installation Locations UK \| Oil Tanks Plus | 51 | ✅ |
| news.html | News & Advice — Oil Tank Guides \| Oil Tanks Plus | 49 | ✅ |
| quote.html | Get a Free Oil Tank Quote \| Oil Tanks Plus | 42 | ✅ |
| **about.html** | **About Us \| Oil Tanks Plus** | **26** | **❌ No keywords** |
| **contact.html** | **Contact Us \| Oil Tanks Plus** | **28** | **❌ No keywords** |

### Meta Description Audit
All 10 pages have unique, keyword-rich meta descriptions within the 120–155 character range. ✅

### Heading Structure
| Page | H1 | H2s | Notes |
|------|-----|-----|-------|
| index.html | "Professional Oil Tank Installation Across the UK" | 8 | ✅ |
| installations.html | Present | Present | ✅ |
| about.html | Present | Present | ✅ |
| news.html | "News & Expert Advice for Oil Tank Owners" | Present | ✅ |
| All others | Present | Present | ✅ |

No heading hierarchy violations detected. ✅

### Internal Linking
| Issue | Severity |
|-------|----------|
| News article cards not wrapped in `<a>` — zero internal link equity flowing to articles | **Critical** |
| No breadcrumb `<nav>` visible on homepage | Low |
| No "related articles" links on any service page to news content | Medium |
| Locations page county badges not linked to county service pages (none exist yet) | High |

---

## 4. Schema / Structured Data — 7.0/10

### Schema Inventory
| Page | Schema Type(s) | Status |
|------|---------------|--------|
| index.html | HomeAndConstructionBusiness + LocalBusiness + WebSite | ✅ Correct subtype |
| installations.html | Service + BreadcrumbList | ✅ |
| tank-disposal.html | Service + BreadcrumbList | ✅ |
| commercial.html | Service + BreadcrumbList | ✅ |
| about.html | Organization + BreadcrumbList | ✅ |
| oil-tank-range.html | ItemList + BreadcrumbList | ✅ |
| contact.html | ContactPage + BreadcrumbList | ✅ |
| locations.html | BreadcrumbList only | ⚠️ Missing ServiceArea schema |
| news.html | BreadcrumbList only | ❌ Missing Article/NewsArticle schema |
| quote.html | (not checked in detail) | ⚠️ |

### Schema Gaps
| Issue | Severity | Fix |
|-------|----------|-----|
| `aggregateRating` missing from LocalBusiness (all pages) | **Critical** | Add once Trustpilot/Google data confirmed |
| `sameAs` array in index.html has generic placeholder URLs | **High** | Replace with real verified profile URLs |
| news.html has no `Article`/`BlogPosting` schema | **High** | Add per-article schema with headline, datePublished, author |
| WebSite schema on index.html missing `potentialAction` (SearchAction) | **High** | Add sitelinks search box signal |
| locations.html missing `ServiceArea` with named cities/counties | **High** | Whitespark #1 AI visibility factor |
| Footer LocalBusiness schema in main.js: `areaServed: "GB"` instead of full Country object | **Medium** | Align with homepage schema pattern |
| Service schemas: `areaServed` is single Country, not named regions | **Medium** | Expand to match homepage areaServed array |
| `geo` coordinates absent from LocalBusiness (even optional SAB coords help proximity signals) | **Low** | Add primary operating area coordinates |

---

## 5. Performance (Core Web Vitals) — 6.0/10

*Lab estimates only — no CrUX field data available without Google API credentials.*

### LCP (Largest Contentful Paint) — ⚠️ At Risk
The hero image (`hero-home.jpg`) is loaded via inline CSS `background-image`, not an `<img>` tag. The browser preload scanner **cannot discover CSS background images** — they are only discovered after the CSS is parsed and applied. This typically adds 300–600ms to LCP.

**Fix:** Add `<link rel="preload" as="image" href="assets/images/hero-home.jpg" fetchpriority="high">` to `<head>` on index.html.

### INP (Interaction to Next Paint)
JavaScript is deferred to end of `<body>` (single `main.js` file). No heavy third-party scripts detected. INP risk is low. ✅

### CLS (Cumulative Layout Shift)
Images use `loading="lazy"` but lack explicit `width` and `height` attributes on several instances. Missing dimensions can cause layout shift as images load. **Check `<img>` tags for missing `width`/`height` attributes.**

### Resource Loading
- Google Fonts: `preconnect` to `fonts.googleapis.com` ✅ | `preconnect` to `fonts.gstatic.com` present on some pages
- `main.js` is a single unminified file — no code splitting. Acceptable for a small static site.
- No inline critical CSS (full CSS file blocks rendering)

---

## 6. AI Search Readiness — 5.5/10

| Signal | Status |
|--------|--------|
| Structured data on all service pages | ✅ |
| FAQ section on homepage (AI citation source) | ✅ |
| `areaServed` with named UK regions | ✅ (just added) |
| OFTEC/APHC authority signals in copy | ✅ |
| Bing Places claimed and optimised | ❌ Critical — powers ChatGPT, Copilot, Alexa |
| Trustpilot widget + `aggregateRating` schema | ❌ Critical |
| Checkatrade / Which? Trusted Traders listings | ❌ |
| `llms.txt` file | ❌ Not present (minor — not yet indexed by AI crawlers) |
| Brand mentions on third-party sites | ❌ Unknown — no backlink data available |
| Wikipedia/Wikidata entry | ❌ Not detectable |

---

## 7. Images — 8.0/10

### ✅ Passing
- `alt` text present on all `<img>` tags reviewed
- `loading="lazy"` on all non-hero images
- Images referenced from local `assets/images/` directory (fast load, no external dependency)

### ❌ Issues
| Issue | Severity |
|-------|----------|
| Hero background image (`hero-home.jpg`) has no alt text — it's a CSS background, not an `<img>` | Low (decorative — acceptable) |
| Some `<img>` tags missing `width` and `height` attributes (CLS risk) | Medium |
| All pages share the same OG image (`hero-home.jpg`) — no page-specific social images | Low |
| Image formats: cannot verify WebP usage without file access — JPEGs may be unoptimised | Medium |

---

## What This Audit Could NOT Assess

| Gap | Why | Tool Needed |
|-----|-----|-------------|
| Live Core Web Vitals (CrUX field data) | Requires Google API credentials | Google Search Console / PageSpeed Insights |
| GSC indexation status | No GSC access | Google Search Console |
| Organic traffic trends | No GA4 access | Google Analytics 4 |
| Backlink profile (DA, referring domains) | No Moz/Ahrefs access | Ahrefs / Moz / Majestic |
| Real SERP positions | No DataForSEO / SERP API | DataForSEO / SERPWatcher |
| HTTP→HTTPS redirect verification | Cannot make live HTTP requests | Browser / curl |
| Server security headers (HSTS, CSP, X-Frame) | Requires live HTTP response headers | SecurityHeaders.com |
| Image file sizes and formats | No filesystem access | Browser DevTools / Lighthouse |
