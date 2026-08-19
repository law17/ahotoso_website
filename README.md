# Ahotosoɔ Services Ltd Website

Git-first Jekyll website for **Ahotosoɔ Services Ltd**.

## Brand

- Public brand: **AHOTOSOƆ**
- Legal name: **Ahotosoɔ Services Ltd**
- Digital spelling: **ahotoso**
- Primary domain target: `ahotoso.com`
- Tagline: **Your trusted presence in Ghana.**
- Client-facing currency: **Ghana cedis (GH₵) only**
- Ahotosoɔ Verify includes **Quote Verification & Cost Check** for independent review of contractor/supplier quotations; specialist cost work is referred to appropriately qualified professionals.

## Local development

```bash
bundle install
bundle exec jekyll serve --livereload
```

Open `http://127.0.0.1:4000`.

## Git workflow

```bash
git status
git add .
git commit -m "Build Ahotoso website foundation"
git remote add origin <YOUR_REPOSITORY_URL>
git push -u origin main
```

## Structure

- `_layouts/` shared page layouts
- `_includes/` header/footer
- `_data/navigation.yml` primary navigation
- `_pages/` internal pages
- `assets/css/main.scss` complete visual system
- `assets/js/main.js` mobile navigation and small UI behaviour
- `index.html` homepage

## Pre-launch work still required

1. Formal ORC/trademark/domain clearance for Ahotosoɔ / ahotoso.
2. Add actual company registration and regulatory credentials only after obtained.
3. Connect the service-request form to secure backend processing.
4. Add business WhatsApp number.
5. Replace provisional pricing with approved launch pricing.
6. Have Ghana counsel/accountant review legal, tax, privacy and service terms.
7. Configure production analytics, security headers and backups.
8. Add real case studies only after client permission.

## Design principle

The site intentionally avoids generic estate-agent imagery and exaggerated trust claims. The visual system is based on clarity, evidence, control and professional oversight.

## Service-request form integration

The form is wired for a static-site form backend without changing the approved visual design.

1. Create a dedicated **Ahotosoɔ Service Request** form in Formspree.
2. Set its notification destination to the approved Ahotosoɔ business inbox.
3. Copy the unique Formspree endpoint into `_config.yml`:

```yml
forms:
  service_request_endpoint: "https://formspree.io/f/YOUR_FORM_ID"
```

4. In Formspree, set the successful-submission redirect to:

```text
https://ahotoso.com/request-received/
```

5. Configure `company_website` as a honeypot/spam field in the form rules if desired.
6. Rebuild the site and submit a test request before launch.

Until an endpoint is configured, the form deliberately blocks submission and shows a clear message instead of losing client data silently. Each request receives a browser-generated reference such as `WEB-20260819-ABC123`, plus source and submission timestamp metadata.

## Contact configuration

Business contact details are centralised in `_config.yml` under `contact:`.

- `email` is the public general enquiries mailbox.
- Additional mailboxes are reserved for support, projects, property and accounts.
- `whatsapp_number` should use international digits only (for example `233XXXXXXXXX`).
- Leave `whatsapp_number` blank until the business number is ready to publish; the site will not show a fake or placeholder WhatsApp link.
- `whatsapp_message` controls the prefilled message used by WhatsApp links.

After changing `_config.yml`, restart the local Jekyll server so the configuration is reloaded.

## GitHub Pages deployment

The repository includes a GitHub Actions workflow at `.github/workflows/pages.yml` for production deployment. Deployment and go-live instructions are in:

- `docs/DEPLOYMENT.md`
- `docs/GO-LIVE-CHECKLIST.md`

The custom domain is intentionally **not** activated in the repository yet. Keep the site on its GitHub Pages URL until `ahotoso.com` is under the company's control and DNS/HTTPS are ready.
