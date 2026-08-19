# Ahotosoɔ deployment guide

This repository is prepared for GitHub Pages using GitHub Actions. The website source remains on `main`; GitHub builds Jekyll and deploys the generated `_site` artifact automatically.

## 1. Create the GitHub repository

Create a new repository for the website, for example `ahotoso-website`. Do **not** initialize it with a README, `.gitignore`, or licence because this repository already contains those files.

Then connect the existing local repository:

```bash
git remote add origin git@github.com:YOUR_GITHUB_USERNAME/ahotoso-website.git
git push -u origin main
```

If you prefer HTTPS for Git:

```bash
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/ahotoso-website.git
git push -u origin main
```

## 2. Enable GitHub Pages

In the GitHub repository:

1. Open **Settings**.
2. Open **Pages** under **Code and automation**.
3. Under **Build and deployment**, set **Source** to **GitHub Actions**.
4. Push to `main` or run the workflow manually from the **Actions** tab.

The workflow is stored at:

```text
.github/workflows/pages.yml
```

Every push to `main` triggers a deployment. Pull requests do not deploy the production site.

## 3. Local development

The default configuration is intentionally set for the GitHub Pages staging path. For the normal local preview at the site root, use:

```bash
./serve-local.sh
```

Equivalent command:

```bash
bundle exec jekyll serve --livereload --config _config.yml,_config.local.yml
```

Then open:

```text
http://127.0.0.1:4000
```

If you run the plain `bundle exec jekyll serve --livereload` command instead, Jekyll will honour the staging `baseurl`, so the local site will be under `/ahotoso_website/`.

Normal HTML, Markdown, CSS, JavaScript and content edits do not require `bundle install` again unless the Gemfile or lockfile changes.

## 4. GitHub Pages staging

The current deployment configuration is:

```yaml
url: "https://law17.github.io"
baseurl: "/ahotoso_website"
```

This ensures Jekyll's `relative_url` filter generates links such as `/ahotoso_website/services/` instead of incorrectly pointing to `/services/` at the account root.

## 5. Custom domain later

When `ahotoso.com` is ready, change the configuration to:

```yaml
url: "https://ahotoso.com"
baseurl: ""
```

No header, footer, page, navigation, CSS or JavaScript paths need to be rewritten because the site templates already use Jekyll's `relative_url` filter.

Do not add a `CNAME` file or change DNS until the domain is actually under Ahotosoɔ's control and we are ready to publish it.

When the domain is ready:

1. Add `ahotoso.com` as the custom domain in **Repository → Settings → Pages**.
2. Configure the domain's DNS records for GitHub Pages.
3. Verify that GitHub's DNS check succeeds.
4. Enable **Enforce HTTPS**.
5. Test both `https://ahotoso.com` and the chosen `www` behaviour.

DNS values should be taken from GitHub's current Pages documentation at the time of go-live rather than copied permanently into this repository, because hosting guidance can change.

## 6. Domain and email are separate

Website hosting and business email should be configured independently. DNS records for email (MX, SPF, DKIM and DMARC) must not be overwritten when the website's Pages records are added.

Before changing DNS, export or record all existing DNS entries.

## 7. Production safety

Before a public launch:

- confirm all public contact details;
- activate and test the service-request form;
- confirm privacy and terms text with appropriate professional review;
- verify all links and mobile layouts;
- confirm no placeholder phone numbers or credentials are present;
- check the site's GitHub Actions deployment is green;
- enable HTTPS after custom-domain verification;
- submit one end-to-end test enquiry;
- verify analytics only after deciding on the privacy approach.

## 8. Rollback

Because the site is version-controlled, a bad deployment can be reversed by reverting the relevant commit and pushing `main` again:

```bash
git log --oneline
git revert <commit-sha>
git push origin main
```

Do not rewrite shared production history with `git reset --hard` and force-push unless there is a specific reason and the consequences are understood.
