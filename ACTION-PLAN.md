# SEO Action Plan — oiltanksplus.co.uk
*Generated: 2026-05-16 | Health Score: 67/100*

---

## 🔴 Critical (Fix Immediately)

### 1. Add canonical tags to all 10 pages
**Why:** Without canonicals, Google must guess the preferred URL. WWW vs non-WWW, `.html` extension, and any query strings can all create duplicate content signals and split link equity.  
**Fix:** Add `<link rel="canonical" href="https://www.oiltanksplus.co.uk/[page]">` to every page `<head>`.  
**Effort:** 30 minutes | **Impact:** High

### 2. Add hero image preload on index.html
**Why:** Hero image is a CSS `background-image` — invisible to the browser preload scanner. This delays LCP by 300–600ms, likely pushing it into "Needs Improvement" territory.  
**Fix:** `<link rel="preload" as="image" href="assets/images/hero-home.jpg" fetchpriority="high">`  
**Effort:** 5 minutes | **Impact:** High (Core Web Vitals)

### 3. Create individual article pages for news content
**Why:** 6 articles exist only as teaser cards with no `<a>` links and no destination pages. Google cannot index, rank, or pass link equity to content that has no URL. This is the single biggest organic content gap.  
**Fix:** Create `news/bunded-vs-single-skin.html`, `news/uk-oil-tank-regulations-2025.html` etc. Each with full 800–1200 word article, Article schema, author, datePublished.  
**Effort:** 2–3 days | **Impact:** Very High (long-tail keyword coverage, E-E-A-T)

### 4. Claim Bing Places listing
**Why:** Bing Places directly powers ChatGPT local results, Microsoft Copilot, and Alexa. Free to claim. Costs nothing. AI local conversion rate is 15.9% vs 1.76% Google organic.  
**Fix:** https://www.bingplaces.com — claim using existing NAP data.  
**Effort:** 1 hour | **Impact:** Very High (AI search)

---

## 🟠 High (Fix Within 1 Week)

### 5. Fix about.html title tag
**Current:** "About Us | Oil Tanks Plus" (26 chars — no keywords)  
**Fix:** "About Oil Tanks Plus — UK's Largest Family Oil Tank Installer" (62 chars)  
**Effort:** 2 minutes

### 6. Fix contact.html title tag
**Current:** "Contact Us | Oil Tanks Plus" (28 chars — no keywords)  
**Fix:** "Contact Oil Tanks Plus — Free Quote 0333 222 4037" (49 chars)  
**Effort:** 2 minutes

### 7. Add Article/BlogPosting schema to news.html
**Why:** BreadcrumbList alone on news.html misses rich result eligibility for article cards.  
**Fix:** Add `NewsArticle` schema blocks with headline, datePublished, author (Organization fallback), image.  
**Effort:** 20 minutes

### 8. Add SearchAction to WebSite schema (index.html)
**Why:** Enables Google Sitelinks Search Box in SERP — increases CTR and brand visibility.  
**Fix:** Add `"potentialAction": {"@type": "SearchAction", "target": {"@type": "EntryPoint", "urlTemplate": "https://www.oiltanksplus.co.uk/locations.html?q={search_term_string}"}, "query-input": "required name=search_term_string"}` to the WebSite schema.  
**Effort:** 10 minutes

### 9. Add favicon
**Why:** Missing `<link rel="icon">` means browsers and SERP result snippets show a blank icon.  
**Fix:** Add `<link rel="icon" href="assets/images/favicon.ico" type="image/x-icon">` or use SVG favicon. Create a simple 32×32 icon from the logo.  
**Effort:** 30 minutes (create + add)

### 10. Restore Trustpilot widget + add aggregateRating to schema
**Why:** No reviews visible on site. No aggregateRating in schema = no star rich results. 31% of consumers only use 4.5+ rated businesses.  
**Fix:** Embed Trustpilot widget on homepage and contact page. Add aggregateRating to LocalBusiness schema.  
**Effort:** 2 hours | **Impact:** Very High (CTR, conversions, local rankings)

### 11. Claim and fully optimise Google Business Profile
**Why:** GBP is the #1 local pack ranking factor (Whitespark 2026, score 193). No GBP embed detected on site.  
**Fix:** Verify GBP, set primary category "Oil Tank Supplier", add 4 secondary categories, upload 10+ photos. Link to installations.html (NOT homepage — Diversity Update risk).  
**Effort:** 2–3 hours | **Impact:** Very High (local pack)

---

## 🟡 Medium (Fix Within 1 Month)

### 12. Add `width` and `height` attributes to `<img>` tags
**Why:** Missing dimensions cause Cumulative Layout Shift (CLS) as images load, harming Core Web Vitals.  
**Fix:** Add explicit pixel dimensions to all `<img>` elements.  
**Effort:** 1–2 hours

### 13. Expand Service schemas: areaServed to named regions
**Why:** installations.html, commercial.html, tank-disposal.html schemas have `areaServed: Country`. Named regions improve AI search visibility.  
**Fix:** Match the expanded areaServed array from index.html.  
**Effort:** 30 minutes

### 14. Fix footer LocalBusiness schema in main.js
**Why:** Footer schema uses `"areaServed": "GB"` (ISO code string) which is less descriptive than the full Country object used in index.html.  
**Fix:** Replace with `{"@type": "Country", "name": "United Kingdom", "sameAs": "https://www.wikidata.org/wiki/Q145"}`.  
**Effort:** 5 minutes

### 15. Add `ServiceArea` schema with named cities/counties to locations.html
**Why:** Top AI visibility factor per Whitespark 2026. Named city/county ServiceArea schema helps AI systems cite Oil Tanks Plus for local queries.  
**Fix:** Add `ServiceArea` schema with named UK cities and counties.  
**Effort:** 30 minutes

### 16. Claim Checkatrade + Which? Trusted Traders
**Why:** Both feed into AI recommendation engines. High-authority for UK home services.  
**Effort:** 2–3 hours

### 17. Claim Apple Business Connect
**Why:** Usage doubled to 27% in 2026. Free to claim. Reaches iOS Siri + Maps users.  
**Fix:** https://businessconnect.apple.com  
**Effort:** 1 hour

### 18. Confirm OFTEC and APHC directory listings
**Why:** Being registered ≠ being listed. Unverified directory listings are a missed high-authority citation.  
**Fix:** Check OFTEC installer directory and APHC member directory for Oil Tanks Plus listing. Update if missing or incorrect.  
**Effort:** 30 minutes

### 19. Add news article internal links from service pages
**Why:** Service pages (installations, tank-disposal) cover the same topics as news articles but don't link to them. Internal links pass authority and improve topical relevance.  
**Example:** installations.html → link to "How Long Does an Oil Tank Installation Take?" article  
**Effort:** 1 hour (when article pages exist)

---

## 🟢 Low / Backlog

### 20. Create individual county/region landing pages
**Why:** Biggest local organic ranking opportunity. "Oil tank installation Devon" has no page to rank on the current site.  
**Fix:** Create `/oil-tank-installation-kent.html`, `/oil-tank-installation-devon.html` etc. Minimum 60% unique content per page including local testimonials, local regulations context, area photos.  
**Effort:** 1 week+ | **Impact:** Very High (long-term)

### 21. Add geo coordinates to LocalBusiness schema
**Low priority for SAB** but optional coordinates (primary operating area) can help proximity signals.

### 22. Update sameAs array with real verified URLs
**When:** Once GBP, Trustpilot, Checkatrade, LinkedIn profiles are confirmed.  
**Fix:** Replace placeholder `facebook.com/oiltanksplus` etc. with actual verified profile URLs.

### 23. Add `llms.txt` file
**Why:** Emerging standard for AI crawler permission control. Low adoption currently but worth adding for future-proofing.  
**Fix:** Create `/llms.txt` at site root listing permitted AI crawlers and contact info.  
**Effort:** 15 minutes

### 24. Optimise images to WebP format
**Why:** WebP typically 25–35% smaller than JPEG at equivalent quality. Improves LCP and bandwidth.  
**Fix:** Convert `assets/images/` to WebP with JPEG fallback. Use `<picture>` element.  
**Effort:** 2 hours

---

## Implementation Roadmap

| Week | Priority | Tasks |
|------|----------|-------|
| This week | Critical + High | Canonicals, preload, title tags, Article schema, favicon |
| Week 2 | High | GBP optimisation, Trustpilot restoration, Bing Places |
| Week 3 | High + Medium | Checkatrade, Apple Business Connect, OFTEC/APHC directory check |
| Month 2 | Medium | Individual article pages, ServiceArea schema, img width/height |
| Month 3+ | Low | County landing pages, WebP images, llms.txt |

---

*Prepared from local file analysis. Validate with live Lighthouse audit and Google Search Console for field data.*
