# usfanss.org SEO60 Progress

- Track: UVE — USFans Warehouse Visual Evidence
- Current cursor: C04
- Status: C01–C03 completed; C04 published but formal validation pending
- Last checked: 2026-09-13
- Production: C04 content is live; cursor not advanced because the required www-to-apex redirect failed

## Pending formal validation

- C04 — USFans Measurement Photos: Read Reference Points, Scale and Uncertainty
  - Production URLs are live for EN/DE/ES/FR/IT at `/articles/usfans-warehouse-measurement-photo-evidence`
  - Visible English article-body count: 1,293 words
  - Five localized routes, matching eight-section structure, localized evidence ladder, self-canonical, reciprocal hreflang plus x-default, Article and BreadcrumbList verified
  - Home and Articles discovery entries, 80-URL sitemap, robots, C03 and baseline QC article, core QC page, CSS/JavaScript and genuine random-path 404 verified
  - Formal gate failed on 2026-09-13 because `https://www.usfanss.org/` served the complete requested path with HTTP 200 instead of permanently redirecting it to the apex domain
  - The www/apex and Worker behavior are protected baseline and were not changed as part of this article-only cycle
  - Content commit chain: 4bde6a5a2e868e88c26d56c37e77bf664dc87f47, 59f64ddd5f30d57bde7037c84dcec6d44e21a421

## Completed

- C03 — USFans Warehouse Size Tags: Verify the Label Without Assuming Fit
  - Production URLs:
    - https://usfanss.org/en/articles/usfans-warehouse-size-tag-evidence
    - https://usfanss.org/de/articles/usfans-warehouse-size-tag-evidence
    - https://usfanss.org/es/articles/usfans-warehouse-size-tag-evidence
    - https://usfanss.org/fr/articles/usfans-warehouse-size-tag-evidence
    - https://usfanss.org/it/articles/usfans-warehouse-size-tag-evidence
  - Visible English article-body count on production: 1,528 words
  - Five localized routes, matching eight-section structure and localized four-row size-tag evidence ladder verified
  - Self-canonical, reciprocal hreflang plus x-default, Article and BreadcrumbList verified
  - Home and Articles discovery entries, 75-URL sitemap, robots, C01 and C02 articles, QC page, CSS and JavaScript verified
  - Random nonexistent path returned a genuine HTTP 404
  - Existing content, modules, layout, languages, products, categories, search, images, CTAs, CSS, mobile rules, deployment method and link targets remained unchanged
  - Content commit: d8f78c15426e75e6d651f92578c2ae6ffa11afcf

- C02 — USFans Warehouse Photo Angle Map: Check Coverage Before Condition
  - Production URLs:
    - https://usfanss.org/en/articles/usfans-warehouse-photo-angle-map
    - https://usfanss.org/de/articles/usfans-warehouse-photo-angle-map
    - https://usfanss.org/es/articles/usfans-warehouse-photo-angle-map
    - https://usfanss.org/fr/articles/usfans-warehouse-photo-angle-map
    - https://usfanss.org/it/articles/usfans-warehouse-photo-angle-map
  - Visible English article-body count on production: 1,340 words
  - Five localized routes, matching eight-section structure and localized angle-to-question map verified
  - Self-canonical, reciprocal hreflang plus x-default, Article and BreadcrumbList verified
  - Home and Articles discovery entries, 70-URL sitemap, robots, C01 article, QC page, Spreadsheet page, CSS and JavaScript verified
  - Random nonexistent path returned a genuine HTTP 404
  - Existing content, modules, layout, languages, products, categories, search, images, CTAs, CSS, mobile rules, deployment method and link targets remained unchanged
  - Content commit: d2c93af783edb4bbe2180c6ffb877fc111502170

- C01 — USFans Warehouse Evidence-Gap Map: Decide What Photos Can Prove
  - Production URLs:
    - https://usfanss.org/en/articles/usfans-warehouse-evidence-gap-map
    - https://usfanss.org/de/articles/usfans-warehouse-evidence-gap-map
    - https://usfanss.org/es/articles/usfans-warehouse-evidence-gap-map
    - https://usfanss.org/fr/articles/usfans-warehouse-evidence-gap-map
    - https://usfanss.org/it/articles/usfans-warehouse-evidence-gap-map
  - Visible English article-body count on production: 1,450 words
  - Five localized routes, matching eight-section structure, localized titles and evidence-gap map verified
  - Self-canonical, reciprocal hreflang plus x-default, Article and BreadcrumbList verified
  - Home and Articles discovery entries, sitemap, robots, baseline article, QC page, CSS, JavaScript and image asset verified
  - Random nonexistent path returned a genuine HTTP 404
  - Existing content, modules, layout, languages, products, categories, search, images, CTAs, CSS, mobile rules, deployment method and link targets remained unchanged
  - Content commit chain ended at b5dd61295b0946cd4141860f0c3ab78a2efd7f3b

## Next

C04 — Re-verify the required full-path www-to-apex redirect and all production baselines. Do not create C05 or advance the cursor until C04 passes every formal-domain check; permanently stopped sibling sites remain untouched.

This private file must not enter the static build, sitemap, robots, article hub, navigation, public links, structured data, or rendered output.
