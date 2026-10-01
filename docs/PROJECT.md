# Project brief

## Purpose

Help a technical recruiter, hiring manager, or potential collaborator quickly
understand who Santiago is, what he has built, how he reasons about ML/AI work,
and where to inspect further evidence.

## First-release outcome

A concise, truthful, fast, accessible site containing verified profile,
experience, education, selected work, and contact paths in English and Spanish.

The first content draft lives in `docs/CONTENT.md`. Its structure can guide the
initial implementation, but claims and localized public copy must be approved
before deployment.

The selected implementation direction is Astro with static output, hosted on
Cloudflare Workers Static Assets after a local production build is ready. See
`docs/STACK.md` for the rationale and alternatives.

## Non-goals for now

- Building a content platform before recurring writing exists.
- Adding a backend without a user-facing requirement.
- Filling the site with every academic assignment or repository.
- Tailoring the whole identity to one company or ML subfield.
- Selecting a framework based only on familiarity or trendiness.

## Language requirement

- English and Spanish are both part of the first public release.
- The language switch remains available throughout the site and preserves the
  visitor's current section or equivalent page.
- Both locales expose the same verified facts, evidence, links, and project
  status, with copy written naturally for each language.
- Prefer stable locale paths such as `/en/` and `/es/`; decide the root redirect
  and default locale during implementation.
- The content model should separate shared facts from localized prose to avoid
  maintaining two divergent versions of the portfolio.

## Open decisions

- First-release content and case studies.
- Visual direction and reusable content model.
- Analytics, domain, and contact approach.

## Success signals

- A visitor understands the profile and strongest evidence within a few minutes.
- Every material claim is verified.
- Featured projects link to inspectable evidence.
- The site is usable on mobile, accessible, fast, and inexpensive to maintain.
