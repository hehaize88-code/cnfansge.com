# Existing article improvements — 30 October 2026

## Scope

`src/data/editorial/growth-updates.json` contains 15 bounded article patches: three existing articles in English, German, Spanish, French and Italian. All patches use `dateModified: 2026-10-30`. The date follows the parent task's 30 October 2026 verification; no specific checking time or timezone is asserted in the published text.

The source articles were read in `discovery.json`, `links.json` and `beginner.json` before drafting. These changes improve the immediate answer, descriptive title and next useful action while retaining the existing detailed sections. They do not assert measured traffic gains or invent keyword volume. Search and performance prioritization belongs to the parent research record.

## Source and evidence limits

Primary status source: [official AllChinaBuy homepage](https://www.allchinabuy.com/). The parent agent verified this page during the current task on 30 October 2026 and supplied the observation used here. This editorial subtask did not independently audit the platform or access private order information.

The verified notice described maintenance, attributed the interruption to an unresolved hacker attack and upgrade/maintenance process, directed order questions to support, and did not provide a confirmed restoration date. The updated maintenance introduction attributes the explanation to the platform. It does not present the explanation as an independently established security finding or infer the state of any particular order, stored item or parcel.

The directory is independent of the official service. A working directory, saved product entry or old tutorial cannot establish that account services, ordering or shipment submission have resumed. All three revised introductions distinguish product research from current official service availability.

No current prices, fees, delivery schedules, recovery dates, refunds or policy promises have been introduced. Photographs are distinguished by source; seller gallery images are not presented as QC photographs of a visitor's order. Sorting is described conditionally where available and does not imply a quality ranking.

## Editorial decisions

| Existing article | Immediate answer | Added useful output |
| --- | --- | --- |
| `allchinabuy-spreadsheet-guide` | Treat a spreadsheet as a searchable product directory; search/category/option checks and image provenance determine whether candidates are comparable. | A six-field comparison record that preserves the exact option, original link, price context, photo source, open question and checking date. |
| `allchinabuy-shortlist-checklist` | Verify six decision-changing facts before keeping a candidate. | A continue/clarify/pause decision with a specific required piece of missing evidence and separated cost fields. |
| `allchinabuy-maintenance-link-troubleshooting` | State what the dated official notice establishes, then identify the failing website/account/link/shipment step. | A four-column status log and a focused support request tied to the correct order or parcel reference. |

The five language versions match in substance and structure. Localized body paragraphs carry the full advice and dated observation rather than summarizing the English or leaving English text beneath translated headings. No FAQ or Q&A blocks were added.

## Validation

The JSON parses successfully. Validation checked exactly five locale keys; the same three slug keys in each locale; required title, description, date, opening and appendix fields; two nonempty opening paragraphs; one appended section with two nonempty paragraphs; and the same modification date in all 15 patches.

Word counts below simulate replacing each original first section with `opening` and appending `appendSections`. They count paragraph and bullet text with whitespace tokenization, excluding headings, metadata and references. Retained source sections are included. All English articles remain within the requested 1,200–1,800-word range.

| Language | Spreadsheet guide | Buying checklist | Maintenance/support |
| --- | ---: | ---: | ---: |
| English | 1,519 | 1,569 | 1,485 |
| German | 1,373 | 1,324 | 1,241 |
| Spanish | 1,540 | 1,568 | 1,496 |
| French | 1,606 | 1,541 | 1,498 |
| Italian | 1,472 | 1,464 | 1,375 |

English replacement openings contain 170, 164 and 166 words respectively; appended sections contain 157, 159 and 165 words. Existing content has not been padded to achieve the range.

## Integration

For each locale and slug, replace the article title and description, replace only its first section with `opening`, append `appendSections`, and set `dateModified`. Existing categories, remaining sections and source arrays are retained by the assembler. This patch should be applied once, not appended again on each runtime load.

The source articles still include older checking-date labels and some published-site references to “this preview”, with localized equivalents. The parent agent was notified to refresh those labels and wording during its global cleanup; this bounded patch intentionally does not alter source arrays or retained sections. Final build validation should run after that integration and cleanup.
