# Sport News — Next.js

A pixel-close rebuild of the "Sport News" landing page design, built with Next.js 14 (App Router) and Tailwind CSS.

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm start
```

## About the images

Every photo in the original design (the basketball player, the runners, the
cycling shot, the club crests, the author headshots, etc.) is a licensed
stock photo or trademarked club logo that I don't have rights to redistribute
in your codebase. So instead of hot-linking to random photos with unclear
licensing, every image slot in this project is a small self-contained
placeholder: a gradient tile with a simple line-icon, generated locally with
no external requests and no licensing risk.

This means the project runs immediately with **zero image dependencies** —
nothing to download, nothing that can break.

**To swap in your own photography**, the easiest path is to replace the
`PlaceholderImage` usage in each component with a real `<img>` /
`next/image` pointing at a file in `/public/images/`. Every placeholder call
already tells you exactly what it's standing in for (hero athlete, category
tiles, trending thumbnails, the cycling/Messi feature banners, article
covers, the newsletter photo). The club crests and author avatars use
colored initials for the same reason — swap those for real badges/photos
once you have the rights to use them.

## Structure

```
app/
  layout.js         Root layout, fonts, metadata
  page.js            Composes all sections
  globals.css        Tailwind + base styles
components/
  Header.js          Nav + mobile menu
  Hero.js            Headline, athlete art, "Today" sidebar
  CategoryGrid.js     Football / Basketball / Car Sport / Table Tennis tiles
  TrendingCycling.js Trending list + cycling feature card
  FeatureBanner.js   Full-width feature banner + pagination
  RecentRanking.js   Recent news + clubs ranking table
  SportsArticles.js  3-up article cards
  Newsletter.js      Email capture
  Footer.js          Social links + pagination
  PlaceholderImage.js, OverlayCard.js, Pagination.js, icons.js  Shared UI
```

## Notes

- Fonts (Archivo Black, Inter, Yellowtail) load from Google Fonts at
  runtime via a `<link>` tag, so no build-time network access is required.
- Styling uses Tailwind utility classes plus a few design tokens in
  `tailwind.config.js` (`ink`, `ink-soft`, `muted`, `line`, `surface`).
- The newsletter form and mobile nav are functional client components;
  wire the newsletter `onSubmit` up to your actual email provider.
- Run `npm audit` before shipping to production and keep Next.js patched.

## Managing posts locally

Set a private `ADMIN_KEY` in `.env.local`, then restart the development server. Open `/admin`, enter that key, and use the form to create, edit, or delete portfolio posts. Saved posts are stored in `content/posts.json` and are rendered by `/portfolio/[slug]`.

The contact form uses the SMTP variables in `.env.local` and sends enquiries to `ADMIN_EMAIL`. For Gmail, `SMTP_USER` must be the sending Gmail account and `SMTP_PASSWORD` must be a Gmail app password, not the normal account password.

The JSON store is suitable for local development or a traditional server with writable disk. Serverless deployments often use ephemeral filesystems, so use a database or CMS before deploying the admin workflow there. Never commit `.env.local` or expose `ADMIN_KEY` to the browser.

## Deploying to Vercel

Import the repository into Vercel and use the default build command, `npm run build`. Add these variables in Vercel Project Settings under Environment Variables for Production, Preview, and Development as needed: `ADMIN_EMAIL`, `SMTP_HOST`, `SMTP_PORT`, `SMTP_USER`, `SMTP_PASSWORD`, and a long random `ADMIN_KEY`. Redeploy after changing variables.

Contact email delivery works through the SMTP route on Vercel. The local JSON post editor is intentionally disabled on Vercel because function filesystems are not persistent; connect a database or CMS before enabling production post editing. Existing posts remain available from the deployed build.

Use Node.js 20 or newer in Vercel. Never commit `.env.local`, and rotate any SMTP app password that has been exposed outside your private machine.
