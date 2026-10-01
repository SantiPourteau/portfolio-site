# Stack and hosting decision

Status: selected and deployed for the MVP on 2026-10-01. No paid resource or
custom domain has been added.

## Requirements driving the decision

- A content-led professional portfolio in English and Spanish.
- Stable `/en/` and `/es/` routes with equivalent content.
- Fast static delivery, strong accessibility, and minimal client-side JavaScript.
- GitHub-based deployment with preview URLs for branches and pull requests.
- Custom-domain and HTTPS support without requiring a backend.
- Low maintenance cost and no infrastructure that the current scope does not
  need.

## Selected application stack

- **Framework:** Astro, using its default static output.
- **Language:** TypeScript for components, content schemas, and configuration.
- **Localization:** Astro locale routing with shared facts separated from
  locale-specific prose.
- **Styling:** undecided until visual direction is established; do not add a CSS
  framework by default.
- **Runtime:** no server runtime, database, API, CMS, authentication, or contact
  form in the MVP.

Astro fits a small content-focused site better than a full-stack React framework:
it prerenders static pages by default, supports localized static routes, and can
add isolated client-side interactivity only where it is useful. This keeps the
site portable across hosts and avoids coupling the portfolio to a server
platform.

## Selected hosting direction

Use **Cloudflare Workers Static Assets**. The first release is deployed through
the checked-in Wrangler configuration, with Cloudflare's GitHub integration
connected to `SantiPourteau/portfolio-site` for automatic builds from `main`.

- Production builds deploy from `main`.
- Non-production branches and pull requests receive preview builds and URLs.
- The generated Astro `dist/` directory is served as static assets.
- Static-asset requests are free and unlimited under the current platform
  documentation; dynamic Worker code is unnecessary for this site.
- Connect the custom domain only after the preview is approved.
- Keep the deployment static so the repository remains portable if the host is
  changed later.

Cloudflare now identifies Workers as its primary platform for new applications,
so a new project should use Workers Static Assets rather than starting on the
older Pages path.

## Alternatives considered

| Option | Strength | Reason not selected first |
| --- | --- | --- |
| GitHub Pages | Very small vendor surface; custom domains and HTTPS; official Astro deployment action | Pull-request previews require extra workflow design and the repository URL needs subpath handling before a custom domain is attached |
| Vercel | Excellent GitHub integration and preview experience | More platform than the static site needs, and the free Hobby plan is restricted to personal, non-commercial use |
| Netlify | Mature previews, custom domains, and SSL | The current Free plan uses a monthly credit budget and new free public projects display Netlify branding |

GitHub Pages is the preferred fallback if minimizing external services becomes
more important than automatic previews.

## Evidence checked

- Astro internationalization and static content documentation:
  https://docs.astro.build/en/guides/internationalization/
- Astro deployment overview:
  https://docs.astro.build/en/guides/deploy/
- Cloudflare Workers framework guide for Astro:
  https://developers.cloudflare.com/workers/framework-guides/web-apps/astro/
- Cloudflare Workers Git builds and previews:
  https://developers.cloudflare.com/workers/ci-cd/builds/
- Cloudflare static-assets billing and limitations:
  https://developers.cloudflare.com/workers/static-assets/billing-and-limitations/
- GitHub Pages limits and Astro deployment guide:
  https://docs.github.com/en/pages/getting-started-with-github-pages/github-pages-limits
  and https://docs.astro.build/en/guides/deploy/github/
- Vercel Hobby plan:
  https://vercel.com/docs/plans/hobby
- Netlify pricing:
  https://www.netlify.com/pricing/

These service terms and limits can change. Recheck them immediately before the
first external deployment.

## Revisit this decision if

- the site gains authenticated or personalized behavior;
- a CMS or frequent non-technical editing becomes necessary;
- server-side forms, APIs, or data storage become real requirements;
- a host changes its free-plan terms materially; or
- the selected provider makes domain or preview management unnecessarily hard.

## Implementation sequence

1. Commit the approved planning changes. Completed.
2. Scaffold a minimal Astro project without optional integrations. Completed.
3. Define the bilingual content model and locale routing. Completed.
4. Implement and review the page structure and visual system. Completed.
5. Add build, accessibility, link, responsive, and SEO checks. Completed.
6. Create and audit the public Cloudflare preview. Completed.
7. Authorize Cloudflare's GitHub App and enable automatic builds from `main`.
   Completed.
8. Connect a custom domain after the public preview is approved.
