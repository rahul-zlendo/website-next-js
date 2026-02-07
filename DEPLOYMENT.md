# Next.js Deployment Guide

This app is built with **Next.js 15** (App Router). Use the steps below to run and deploy.

## Local development

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). Root `/` redirects to `/in` (or your geo/cookie country).

## Production build (local)

```bash
npm run build
npm run start
```

Serves the production build on port 3000.

## Environment variables

Copy `.env.example` to `.env.local` and set:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_ENV` | `dev` or `prod` |
| `NEXT_PUBLIC_FRONTEND_URL` | (Optional) Frontend base URL |
| `NEXT_PUBLIC_BACKEND_URL` | (Optional) Backend API base URL |
| `NEXT_PUBLIC_BLOB_URL` | (Optional) Azure Blob base URL |
| `NEXT_PUBLIC_ENCRYPTION_KEY` | (Optional) Encryption key for project IDs |

All `NEXT_PUBLIC_*` vars are baked into the client bundle; do not put secrets there.

## Deploy to Vercel (recommended)

1. Push the repo to GitHub/GitLab/Bitbucket.
2. In [Vercel](https://vercel.com), import the project and link the repo.
3. Add the same env vars in **Project → Settings → Environment Variables**.
4. Deploy. Vercel will run `next build` and serve with their edge runtime.

**Geo detection:** On Vercel, `request.geo` is set automatically in middleware, so country-based redirects from `/` work without extra config.

## Deploy to other platforms

- **Node (VPS, Railway, Render, etc.):** Run `npm run build` then `npm run start`. Set `PORT` if needed (default 3000).
- **Static export:** This app uses middleware and dynamic routes; use a Node/edge runtime (e.g. Vercel or a Node server), not `output: 'export'`.
- **Docker:** Use a Node image, copy the app, run `npm run build && npm run start` (or use the official Next.js Docker example).

## Routes

- **Root:** `/` → middleware redirects to `/{country}` (e.g. `/in`).
- **Country segment:** All main routes live under `/[country]`, e.g. `/in/contact`, `/us/plans`.
- **Sitemap / robots:** `/sitemap.xml` and `/robots.txt` are generated in `app/sitemap.ts` and `app/robots.ts`.

## Build notes

- **TypeScript:** `vite.config.ts` is excluded from `tsconfig.json` so the Next build does not require Vite types.
- **Middleware:** `request.geo` is typed via a local extension; it is populated at runtime on Vercel.
- **Template detail:** The template-detail page uses `useSearchParams()` and is wrapped in `<Suspense>` so the build can prerender correctly.
