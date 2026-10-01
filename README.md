# Portfolio site

Public website for Santiago Pourteau's professional profile, experience,
education, and selected ML/AI work.

## Current phase

The bilingual MVP is live on Cloudflare Workers Static Assets:

- [English](https://santiago-pourteau.santiago-pourteau-portfolio.workers.dev/en/)
- [Español](https://santiago-pourteau.santiago-pourteau-portfolio.workers.dev/es/)

The current release has been checked in production mode with Lighthouse for
performance, accessibility, best practices, and SEO. Automatic Cloudflare builds
run from pushes to `main`; a custom domain remains open.

The stack rationale and alternatives live in `docs/STACK.md`. Project planning
lives in `docs/PROJECT.md`; cross-project facts and decisions live in Portfolio
HQ.

## Local development

```sh
npm install
npm run dev
```

The site is available at `/en/` and `/es/`; `/` redirects to `/en/` in the
static build.

Before handing off a change, run:

```sh
npm run check
npm run build
```

## Deployment

Cloudflare configuration lives in `wrangler.jsonc`. After authenticating with
Wrangler, publish a verified build with:

```sh
npm run check
npm run deploy
```
