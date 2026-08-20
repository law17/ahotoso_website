# Ahotosoɔ Care Website Update

This package adds **Ahotosoɔ Care** to the existing website without introducing new CSS or changing the approved visual design.

## Changes made

### `_pages/services.md`
- Added **Ahotosoɔ Care** as a fourth core service card.
- Used the site's existing `grid-4` class so all four service cards align cleanly on desktop and retain the site's existing responsive behaviour.
- Added a dedicated Ahotosoɔ Care section using the same existing `statement`, `check-list`, and `statement-box` components used by Quote Verification & Cost Check.
- Added the professional-boundary note that specialist work remains the responsibility of the appropriately qualified service provider.

### `_pages/request-a-service.md`
- Added `Ahotosoɔ Care / repairs & maintenance` to the service selector.

## Not changed
- No new CSS.
- No changes to colours, typography, navigation, header, footer, pricing, homepage, Terms, Privacy, or other approved pages.

## Local preview

From the website repository root:

```bash
bundle exec jekyll serve --livereload
```

Then open:

```text
http://127.0.0.1:4000/services/
```

Also check:

```text
http://127.0.0.1:4000/request-a-service/
```
