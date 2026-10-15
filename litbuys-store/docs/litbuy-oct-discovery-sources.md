# LitBuy discovery and QC content review — 2026-10-15

## Scope

Content asset: `app/content-oct/core-discovery.json`.

Rewritten existing articles:

- `litbuy-spreadsheet-2026`: a beginner's end-to-end path from a purchase brief and three-item shortlist to variant selection, total-budget planning, purchase confirmation, warehouse evidence and delivery review. The older `litbuy-spreadsheet-guide` remains the place for source-record and link-maintenance guidance.
- `litbuy-qc-photos-guide`: locating the user's own order photographs, matching records, requesting specific views or reproducible measurements, handling missing or unclear images and documenting the next action. The older `litbuy-qc-photo-checklist` remains the detailed visual-inspection checklist.

Every article has complete EN, DE, ES, FR and IT content: eight corresponding sections and two paragraphs per section. Translations preserve the numerical examples, limitations, decision sequence and distinction between public examples and the user's own order. There is no English-content fallback in this asset.

## Sources actually checked

1. **LitBuy official homepage** — https://litbuy.com/
   - Checked through web search and direct page opening on 2026-10-15.
   - The indexed official snippet states that inspection photos are provided after arrival. This supports only the narrow statement in the articles that LitBuy publicly advertises arrival/inspection photographs.
   - Direct extraction returned a loading shell. No signed-in account interface was inspected. Button names, locations, image counts, completion times and service pricing are therefore not asserted.
   - Search evidence reference from this task: `turn10search0`; direct loading-shell result: `turn10view1`.

2. **LitBuy official Refund Terms** — https://litbuy.com/notice/2018994272731774978
   - Checked through official-domain search and direct page opening on 2026-10-15.
   - The indexed official excerpt describes basic inspection of quantity, visible appearance and obvious external defects. The QC article uses a short paraphrase to establish the limited scope of visible inspection.
   - Direct extraction returned a loading shell. No refund deadline, eligibility guarantee, return price, free service count or promised remedy is taken from this page.
   - Search evidence reference: `turn10search1`; direct result: `turn12view0`.

3. **LitBuy official Help Center** — https://litbuy.com/help
   - Official-domain search identifies a beginner user guide. Direct opening exposed only a loading shell.
   - This supports referring users to the current official help route, without inventing the contents of a tutorial or the labels of account controls.
   - Evidence references: `turn10search3`, `turn10view0`.

4. **LitBuy official announcements index** — https://www.litbuy.com/notice
   - The search excerpt mentions a Custom QC Photo topic. Direct extraction of the equivalent non-www index failed.
   - No operational detail is taken from this excerpt. Both articles condition extra photographs/measurements on current availability, terms and any displayed charges.
   - Evidence reference: `turn10search7`; attempted index opening: `turn12view1`.

## Editorial boundaries

- The remaining content is explicitly practical purchasing and evidence-handling guidance, not a report of a test order or an account inspection.
- Measurements of 58 cm, 54 cm and the 57–59 cm interval are labeled examples. They are not asserted measurements of catalog goods and are not universal sizing advice.
- No statement promises authenticity, fiber composition, comfort, durability, seller behavior, refund acceptance, warehouse turnaround or a shipping price.
- No public competitor QC image is represented as evidence for the reader's own item.
- The articles do not contain external body links. The owning implementation supplies relevant internal article/catalog links and retains the verified cnfansge.com catalog handoff.
- Brand-spelling variants associated with another domain, including the old keyword-stuffed `litbuysheets` sentence, were not retained as target-copy filler.
- No Q&A or FAQ block is included.

## Validation

- English body word counts: spreadsheet article 1,334; QC article 1,347 (whitespace-separated words, excluding title, deck and headings).
- Each of 10 language/article records has exactly 8 sections and 16 nonempty paragraphs.
- All five language keys are present for both slugs; each translation has distinct prose and preserves chapter/paragraph correspondence.
- JSON parses successfully. No body URLs or FAQ blocks are present.
- No application routing, metadata, deployment configuration or other article files were changed by this content task.
