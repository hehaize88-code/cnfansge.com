# LitBuy SEO60 Progress

- Cursor: LB C01
- Status: pending
- Last checked: 2026-09-01
- Article: not created
- Production: not advanced

## Current blocker

The production site uses same-URL client-side language switching, while the root layout statically emits `html lang="en"` and the article routes do not expose language-specific canonical/hreflang states. The LB control file requires complete EN/DE/ES/FR/IT parity with matching HTML lang, canonical, reciprocal hreflang plus x-default, but also forbids changing the existing language, canonical, or hreflang baseline. C01 therefore remains pending until those control requirements are reconciled or the immutable baseline already satisfies them on production.

## Research checked on 2026-09-01

- LitBuy homepage, including Fill&buy, Forwarding Orders, service and policy navigation
- Current public service descriptions for direct purchasing, forwarding, QC/inspection and storage
- Current storage statement: up to 120 days, first 90 days free
- LitBuy Fill&buy and current order-entry interface
- LitBuy refund, returns/exchanges, prohibited-items and shipping-policy links

The official public interface exposed enough current operational context for a future C01 order-record article, but the mandatory multilingual production gate remains incompatible with the immutable language/canonical baseline. No public article was created.

This private file must not enter the static build, sitemap, robots, article hub, public links, or rendered output.
