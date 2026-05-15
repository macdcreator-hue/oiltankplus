# Local SEO Analysis — oiltanksplus.co.uk
*Generated: 2026-05-16*

---

## Local SEO Score: 41/100

| Dimension | Weight | Score | Notes |
|-----------|--------|-------|-------|
| GBP Signals | 25% | 4/25 | No GBP embed, maps, or reviews widget on site |
| Reviews & Reputation | 20% | 2/20 | No aggregateRating in schema, no visible review count |
| Local On-Page SEO | 20% | 12/20 | Service pages exist; no geo-modified titles/H1s |
| NAP Consistency & Citations | 15% | 10/15 | NAP consistent across page + schema; no address (SAB correct) |
| Local Schema Markup | 10% | 8/10 | HomeAndConstructionBusiness correct; missing geo, aggregateRating, sameAs |
| Local Link & Authority Signals | 10% | 5/10 | OFTEC/APHC accreditations signal authority; no chamber/BBB/press detectable |

**Business Type:** Service Area Business (SAB) — no fixed address, 40+ engineer locations nationwide
**Industry Vertical:** Home Services — Oil Tank Installation

---

## 1. GBP Signals — 4/25 ⚠️ CRITICAL GAP

### What's detectable on-site
- ❌ No Google Maps embed on any page
- ❌ No GBP place ID referenced
- ❌ No reviews widget (Trustpilot present on old site but missing from current build)
- ❌ No GBP posts visible
- ✅ Phone number in header/footer as `tel:` link
- ✅ Business hours in contact page and schema
- ✅ OFTEC/APHC accreditation badges (strong trust signals)

### Actions required (off-site)
- Claim/verify GBP listing if not already done. Category recommendation: **"Oil Tank Supplier"** + **"Heating Contractor"** + **"Plumbing Supply Store"** as secondary
- Add 4 secondary GBP categories (optimal per BrightLocal)
- Upload minimum 10 photos to GBP (45% more direction requests)
- **Do NOT** link GBP primary URL to homepage — Sterling Sky Diversity Update risk. Link to a deep service page (installations.html or quote.html)
- GBP Q&A was deprecated Dec 2025 — recreate as FAQ content on website instead (already have accordion on about.html)
- Google Verified badge eligibility (replaced Screened/Guaranteed Oct 2025) — apply if eligible

---

## 2. Reviews & Reputation — 2/20 ⚠️ CRITICAL GAP

### Findings
- ❌ No `aggregateRating` in schema on any page (missed rich result opportunity)
- ❌ No visible review count or star rating anywhere on current site
- ❌ Previous Trustpilot widget (present on old WordPress site) not carried over to new build
- ❌ Review velocity: unknown — 18-day rule (Sterling Sky) means rankings drop without regular new reviews

### Actions required
1. **Re-embed Trustpilot widget** — was present on old site (contact page), must be restored. Add to homepage and contact.html
2. **Add `aggregateRating` to schema** — pull real rating + count from Trustpilot or Google. Example:
```json
"aggregateRating": {
  "@type": "AggregateRating",
  "ratingValue": "4.8",
  "reviewCount": "127",
  "bestRating": "5"
}
```
3. Maintain minimum 1 new Google review every 18 days to avoid ranking cliff
4. Register on: **Checkatrade**, **Which? Trusted Traders**, **TrustATrader** — all high-authority for UK home services
5. 31% of consumers only use 4.5+ rated businesses — prioritise rating maintenance

---

## 3. Local On-Page SEO — 12/20 ⚠️

### What's good
- ✅ Dedicated service pages exist (installations, commercial, tank-disposal, oil-tank-range)
- ✅ Contact page with phone, email, hours prominently displayed
- ✅ Click-to-call `tel:` links in header, footer, and contact page
- ✅ locations.html lists 12 UK regions and 39 counties
- ✅ Internal linking from homepage to all service pages

### What's missing
- ❌ **No geo-modified title tags** — "Oil Tank Installation UK" is generic; "Oil Tank Installation Kent | Oil Tanks Plus" would rank for county searches
- ❌ **No geo-modified H1s** on service pages — H1s say "Expert Oil Tank Installation Across the UK" with no county specificity
- ❌ **No individual crawlable county/region pages** — locations.html is one consolidated page; county badges are static text, not links to unique content pages
- ❌ No embedded Google Map anywhere (geographic signal reinforcement)
- ❌ "Doorway test" on locations page: county badges can have the county name swapped with no content change = thin for geo ranking

### Impact
The locations page lists every county served but Google cannot index individual location signals because there's only one URL. "Oil tank installation Devon" has no dedicated page to rank.

---

## 4. NAP Consistency — 10/15 ✅ (with gaps)

| Source | Name | Address | Phone |
|--------|------|---------|-------|
| Page HTML (footer, contact) | Oil Tanks Plus | None (SAB correct) | 0333 222 4037 |
| JSON-LD schema (index.html) | Oil Tanks Plus | None (areaServed: UK) | +443332224037 |
| GBP (unknown — cannot verify) | Unknown | Unknown | Unknown |

### Issues
- ⚠️ **Phone format inconsistency**: HTML uses `0333 222 4037`, schema uses `+443332224037`. Both are valid but should be consistent across all schema blocks — standardise to `+443332224037` (E.164 format preferred for schema)
- ❌ `sameAs` array in schema is empty — no links to GBP, Trustpilot, Checkatrade, LinkedIn, or Facebook

### Industry-specific citations to claim (UK Home Services)
| Directory | Priority | Notes |
|-----------|----------|-------|
| OFTEC Registered Installer Directory | **Critical** | They're OFTEC-registered — must be listed |
| APHC Member Directory | **Critical** | Already APHC members — confirm listing |
| Checkatrade | High | #1 UK trade directory |
| Which? Trusted Traders | High | High consumer trust |
| TrustATrader | High | UK home services |
| Yell.com | Medium | High DA, easy to claim |
| Bing Places | **Critical** | Powers ChatGPT, Copilot, Alexa |
| Apple Business Connect | High | Usage doubled to 27% in 2026 |
| Data Axle / Foursquare / Neustar | Medium | Data aggregators — downstream distribution |

---

## 5. Local Schema — 8/10 ✅ (mostly correct)

### What's correct
- ✅ `HomeAndConstructionBusiness` + `LocalBusiness` dual type (correct for home services)
- ✅ `areaServed: Country (United Kingdom)` with Wikidata sameAs
- ✅ `openingHoursSpecification` with Mon-Fri and Saturday specs
- ✅ `telephone`, `email`, `logo`, `image`, `foundingDate`
- ✅ `hasOfferCatalog` with 3 service offerings
- ✅ BreadcrumbList on all inner pages

### What's missing
- ❌ `geo` coordinates (not required for SAB but helps with proximity signals — use registered address or primary operating area)
- ❌ `aggregateRating` (add once Trustpilot/Google data is available)
- ❌ `sameAs` array empty — should include GBP URL, Trustpilot, Checkatrade, LinkedIn
- ❌ `areaServed` only at Country level — should also list named regions for AI search visibility
- ❌ No `ServiceArea` with named cities/counties (Whitespark: top AI visibility factor)

---

## 6. Authority Signals — 5/10 ⚠️

### Detectable
- ✅ OFTEC registered (strong industry authority signal)
- ✅ APHC member (strong industry authority signal)
- ✅ "Made in Britain" marque (trust signal)
- ✅ "25+ years experience" claim (longevity signal)
- ❌ No chamber of commerce mention
- ❌ No BBB or equivalent UK accreditation (Trading Standards, etc.)
- ❌ No press/media mentions visible
- ❌ No "best of" list mentions (top AI visibility factor per Whitespark 2026)

---

## Top 10 Prioritised Actions

### 🔴 Critical
1. **Restore Trustpilot widget** — was on old site, missing from new build. Add to homepage hero section and contact page. Include real rating + review count in schema `aggregateRating`.
2. **Claim and fully optimise GBP** — set primary category, add 4 secondary categories, upload 10+ photos, set business hours. Do NOT link to homepage (Diversity Update risk).
3. **Claim Bing Places** — directly powers ChatGPT, Copilot, and Alexa local answers. Costs nothing.
4. **Confirm OFTEC and APHC directory listings** — being registered doesn't guarantee being listed. Verify and update.

### 🟠 High
5. **Create individual county/region landing pages** — one URL per major area served (e.g., `/oil-tank-installation-kent`, `/oil-tank-installation-devon`). Each needs >60% unique content including local testimonials, local regulations context, area-specific photos. This is the single biggest local organic ranking opportunity.
6. **Add geo-modifiers to title tags and H1s** — service pages need county variants or at minimum a locations hub with properly targeted anchor text.
7. **Claim Checkatrade + Which? Trusted Traders** — both are high-authority for UK home services and feed into AI recommendation engines.
8. **Claim Apple Business Connect** — usage doubled to 27% in 2026.

### 🟡 Medium
9. **Expand `areaServed` in schema** — add named UK regions alongside the country entry. Improves AI search visibility (top factor per Whitespark 2026).
10. **Add `sameAs` links to schema** — once GBP, Trustpilot, Checkatrade are claimed, add their URLs to the `sameAs` array on the homepage schema.

---

## What This Analysis Could NOT Assess

| Gap | Why | Tool Needed |
|-----|-----|-------------|
| Geo-grid local pack ranking | Requires live API queries from multiple UK geolocations | BrightLocal / Local Falcon |
| GBP Insights data | Requires GBP account access | Google Business Profile dashboard |
| Comprehensive backlink profile | Requires index crawl | Ahrefs / Moz / Majestic |
| Citation audit across 100+ directories | Requires automated scraping | BrightLocal / Whitespark |
| Live local pack position | Requires real-time SERP query | DataForSEO / SERPWatcher |
| Competitor local pack analysis | Requires live SERP data | BrightLocal / Whitespark |
