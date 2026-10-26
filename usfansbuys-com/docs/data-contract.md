# cnfansge public data contract for USFans preview

Checked 2026-10-26. Read-only public HTTP inspection; no backend, account, database, third-party product source or fabricated data.

## Verified

- `https://cnfansge.com/AllProducts/` returns 200 and 60 product cards. Product cards use `.product-card`, `.product-name`, `.product-price`, and `a.product-image`. Real image source is `img[data-src]`; `src` is an SVG lazy-loading placeholder and must not be used as the product image.
- Text search: `https://cnfansge.com/search.html?keywords=hoodie&channelid=2` returns 200 and 60 first-page results (6182, 6181, 6180, 6179...). Next links preserve keywords/channelid and add `page=2`. The source does not expose a verified combined search+category+sort contract; show source relevance while searching instead of falsely claiming globally sorted results.
- Sorting uses links encoded inside `.sort-btn[onclick]`. Read `tid` from the selected category’s source page. `sort=new&sort_asc=desc` for latest; `sort=click&sort_asc=desc` for popularity; `sort=price&sort_asc=asc` / `desc` for price. `ZXljbXM=1` is present in source links and preserved.
- Shoes source category has `tid=4`. Do not apply global `tid=1` to all categories.
- Latest source page 4: `https://cnfansge.com/index.php?m=home&c=Lists&a=index&tid=1&sort=new&sort_asc=desc&ZXljbXM=1&page=4` returns 200, 60 distinct products, first IDs 6507, 6506, 6505, 6504, with previous=3 and next=5. Source UI 1–3 is a sliding window, NOT total catalog length.
- Source pagination is `.pagination .active` plus links named `上一页` and `下一页`. Pretty links on the initial route look like `/index.php/list_1_2/`; use the discovered dynamic `Lists` route and page parameter to avoid prior pretty-route failures.
- Price-ascending first IDs: 507,6063,519,3663,2418 with source numeric prices 0,0.1,7.5,9.9,9.9. Price-descending: 1149,3185,3201,5761,1638 with 2522,1980,1700,1500,1500. Zero is an unknown/unpriced source value, not a free-product claim.
- Source JS `/template/moban/pc/static/js/script.js?v=2.3.0` currently contains `CNY_TO_USD_RATE=7.26`, and its conversion function divides source CNY by this rate, then rounds to 2 decimals. Read the rate from the source script rather than hardcoding it as a live market FX quote. Source catalog script uses v2.2.0; product v2.3.0.
- Product sample `/AllProducts/6681.html` returns title Sweatshirts-1; product ID 7755101935; source price 169 CNY; 5 distinct gallery images. First image `/uploads/allimg/20260506/1-260506103535537.webp`.
- User’s exact USFans purchase link is already in source page: `https://www.usfans.com/product/3/7755101935?ref=SWD92F`. The `.platform-option` purchase modal is OUTSIDE `.product-detail`, so parse document-level `a.platform-option` and match the source product ID. `6681` is an internal content ID and must never replace `7755101935` in the USFans link.
- Categories visible in current public source: all, shoes, hoodies-sweaters, t-shirts, jackets, pants-shorts, headwear, accessories, short-sets, electronics, other-stuff, jersey. Current label for hoodies-sweaters is Sweatshirts.

## Not verified: QC / image search

Public homepage, catalog and sample product have no file upload control, reverse-image-search form, explicit QC data endpoint or QC-labelled image collection. Product source exposes a gallery, not evidence that each photo is warehouse QC. Main public JS is obfuscated; public named functions include regular text search, product detail, image swipe and gallery, but no named image-search/upload/QC function was found. This is a limited inspection, not proof that the owner has no such capability anywhere.

The previous Pikobuy adapter sets `qcVerified:false`. Do not relabel source gallery as verified QC, fabricate QC photos, substitute third-party APIs, build a local image matcher or display a fake upload-success result. Honest preview can offer the genuine source gallery/product lookup and QC reading guidance; the independent image-search/QC service needs an actual cnfansge contract before it can be claimed working.

## Reusable adapter

`source-adapter.mjs` exports `categories`, `readCatalog(options, signal)`, `readProduct(id, signal)`, `parseCatalog`, `parseProduct`, `readSourceRate`, and `SourceError`. Dependency: `cheerio`.

`readCatalog` options: category, query (or q), sort (latest/popular/price-asc/price-desc), page, pageSize (default 20). It discovers source page size from first page and slices upstream pages into 20-card display pages while preserving sequence, then advances to upstream page 2/3/4 etc. It is not capped to three display pages. HTTP responses only have a 60-second in-memory cache, capped at 40 entries; no durable product store.

Catalog shape:

- products: `{id,sourceRecordId,name,image,mainImage,sourceUrl,price:{cny,usd},rate}`
- page, pageSize, sourcePage, sourcePageSize, hasPrevious, hasNext
- query, category, sort, rate, fetchedAt, sourceUrl

Product shape adds images, marketplaceProductId, marketplace, channel, buy, category, qcImages:[], qcVerified:false, qcStatus:'not-identified-in-source'.

HTTP error handling: source non-200 throws; 429 becomes retryable 503 with Retry-After retained in SourceError. No unknown response becomes a successful empty catalog. Price rate unavailability gives USD null so UI can show price unavailable rather than an invented conversion.

## Limits

No browser visual inspection or source account use. No end-of-catalog enumeration (unnecessary whole-source crawl); page-4 continuation verifies it is not a three-page catalog. No payment/cart action. Sort and search HTTP checks use source HTML, not a copy of old site data.

## Adapter verification

- `node --check` passed.
- Stored source parses: 60 cards on first page, 60 on source page 4; page 4 recognized and next-page true.
- Stored product parse: ID 6681 → marketplace ID 7755101935; 5 source photos; 169 / 7.26 = USD 23.28; exact USFans purchase URL with SWD92F.
- Live Node `readCatalog({page:10,sort:'latest',pageSize:20})` passed: 20 rows, upstream page 4, first ID 6507, hasNext true, current rate 7.26. Live `readProduct('6681')` returned the correct marketplace ID and buy URL.
- Parser rejects unexpected noncatalog HTML rather than silently returning empty results.
