# Hadi Bakhshi — Portfolio

Personal portfolio site for [Hadi Bakhshi](https://hadibakhshi.dev), a senior software engineer focused on backend architecture, production systems, and practical AI features.

**Live:** [https://hadibakhshi.dev](https://hadibakhshi.dev)

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router)
- React 19 + TypeScript
- Tailwind CSS 4
- [shadcn/ui](https://ui.shadcn.com/) (Base UI primitives)
- [Biome](https://biomejs.dev/) (lint + format)
- [Hugeicons](https://hugeicons.com/)
- [Motion](https://motion.dev/)

## Getting started

Requires [pnpm](https://pnpm.io/) (lockfile is `pnpm-lock.yaml`).

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

| Script | Description |
| --- | --- |
| `pnpm dev` | Development server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run Biome checks |
| `pnpm format` | Format with Biome |

## Project structure

```
src/
  app/                 # Routes, root layout, globals, sitemap
  components/
    custom/            # Page sections (Hero, Work, Contact, …)
    ui/                # shadcn primitives
  data/
    resume.ts          # Profile, metrics, experience, stack, contact
    case-studies/      # Case study copy + architecture diagrams
  lib/                 # Shared utilities (layout tokens, cn)
public/                # Static assets, resume.pdf, theme-init.js
```

Home page sections live in `src/app/page.tsx`. Case studies are served at `/work/[slug]`.

## Editing content

- **Résumé-style copy** (hero, about, metrics, experience, stack, education, contact): [`src/data/resume.ts`](src/data/resume.ts)
- **Case studies** (problem, architecture, decisions, diagram nodes): [`src/data/case-studies/`](src/data/case-studies/)

After changing case study slugs or adding a study, ensure it is registered in the case-studies index and appears in the work section data.

## Theme

Light/dark mode is toggled in the header. A blocking script ([`public/theme-init.js`](public/theme-init.js)) runs early to apply the stored preference and avoid a flash of the wrong theme.

## Deploy

Standard Next.js app — deploy on [Vercel](https://vercel.com/) or any Node host that supports `next build` / `next start`.
