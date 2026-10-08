# Qingyu Chen Lab website

Source for [qingyuchen-lab.com](https://www.qingyuchen-lab.com), rebuilt from the original Google Sites page as a static
[Astro](https://astro.build) site. It reproduces the Google Sites "Impression" theme (Oswald + Open Sans) and keeps the
original URLs: `/home`, `/research`, `/team`, `/join`, `/contact_1`.

## Run locally

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static site in dist/
npm run preview  # serve the built site
```

## Editing content

| Page | File |
| --- | --- |
| Home (photo, intro, research themes, highlights) | `src/components/HomeContent.astro` |
| Research | `src/pages/research.md` |
| Team | `src/pages/team.md` |
| Join | `src/pages/join.md` |
| Contact | `src/pages/contact_1.md` |
| Navigation tabs | `src/components/Header.astro` |
| Fonts, colors, shared spacing | `src/styles/theme.css` |
| Images | `public/images/` |

The Markdown pages use plain Markdown inside `<section class="section">…</section>` blocks (one block per Google Sites
section). Keep a blank line after the opening tag and before the closing tag so the Markdown inside is rendered.
External links open in a new tab automatically. The small `<style>` block at the end of some pages reproduces spacing
quirks of the original page; it can be simplified if pixel-exact matching is no longer needed.

## Deployment (GitHub Pages)

`.github/workflows/deploy.yml` builds the site and publishes it with GitHub Pages on every push to `main`.

One-time setup:

1. Repository **Settings → Pages → Build and deployment → Source**: choose **GitHub Actions**.
2. **Settings → Pages → Custom domain**: enter `www.qingyuchen-lab.com` and enable **Enforce HTTPS** once the
   certificate is issued. (Optionally verify the domain under the organization's **Settings → Pages** first.)
3. At the domain's DNS provider (requires the domain admin), replace the Google Sites records with:
   - `www` → `CNAME` → `yale-bids-chen-lab.github.io`
   - apex `qingyuchen-lab.com` → `A` records `185.199.108.153`, `185.199.109.153`, `185.199.110.153`,
     `185.199.111.153` (GitHub redirects the apex to `www`)
4. In Google Sites, unpublish or remove the custom-domain mapping so the domain is no longer claimed there.

The site is built for the root of the custom domain. Before the domain is switched, the default project URL
(`yale-bids-chen-lab.github.io/Lab-Website/`) would not load styles and links correctly, so preview locally until then.
