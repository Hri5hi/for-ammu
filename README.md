# If I Could Give You My World, Ammu

A personal, interactive love letter from Nandu to Ammu. Built with React, TypeScript, and Vite. Everything runs in the browser; there is no account, database, tracking, or notification service.

## Run locally

```bash
npm install
npm run dev
```

Open the local address printed by Vite. For a production check, run `npm run check`; for a local production preview, run `npm run preview` after `npm run build`.

This project includes a local `.npmrc` setting to avoid an npm 10 peer-resolution crash involving optional Vite/Vitest packages. A local `node_modules` copy is available in this workspace, so `npm run dev` can run here without reinstalling first. Fresh checkouts should use `npm install`.

## Make it truly yours

All editable writing, labels, jokes, reasons, anniversary text, letter text, and hopes live in **`src/content.ts`**. Search for the section name and change the quoted text. The scrapbook currently shows four real photos with short notes you can edit.

The opening's clickable photo and centered note are set in `opening.featuredPhoto` and `opening.featuredNote` in the same file.

### Add photographs and memories

1. Put your photos in `public/photos/`. A compressed `.webp` image is best for fast loading on phones.
2. In `src/content.ts`, find `scrapbook.memories`.
3. Give an item a `caption`, a short `note` shown when clicked, an optional `date`, and a `photo` path such as `/photos/us-at-the-park.webp`.
4. Add a new memory item when you have another photo and story to share. Remove an item from the array to hide it from the scrapbook.

Example:

```ts
{ prompt: 'A memory that always makes me smile', date: 'A real date', caption: 'A memory that always makes me smile', note: 'Your own short note about this moment.', photo: '/photos/real-photo.webp' }
```

### Add personal jokes, details, and a voice recording

Edit `funny.cards`, `funny.reports`, `reasons.cards`, and `reasons.extra` in `src/content.ts`. To add a recording, put an audio file in `public/audio/` and set `voiceRecording` to a path such as `/audio/for-ammu.mp3`. The audio player appears only when a path is set and never autoplays.

## Deploy with GitHub Pages

The [GitHub Actions workflow](.github/workflows/deploy.yml) checks and builds the site, then publishes `dist/` whenever you push to `main`. Vite uses relative asset paths, so the site works at a GitHub Pages address such as `https://YOUR-USERNAME.github.io/for-ammu/`. The photos and optional audio resolve under that address too.

1. Create a GitHub repository and push this project to its `main` branch. Commit `package-lock.json` and `.npmrc` with the source. Do not commit `node_modules/` or `dist/`.
2. In the repository, open **Settings → Pages → Build and deployment** and set **Source** to **GitHub Actions**.
3. Open the **Actions** tab and wait for **Deploy to GitHub Pages** to finish. The deployed address appears in the deployment summary and in **Settings → Pages**.

GitHub Free supports Pages from a public repository. A public repository and its live site make the four personal photos accessible to anyone with the link, so review `src/content.ts` and `public/photos/` before publishing. The site uses no server routes or environment secrets.

## Accessibility and motion

All interactive elements are buttons or links and support keyboard focus. The site includes a skip link, labeled navigation, live announcements for revealed messages, readable text contrast, and reduced-motion styling. It is designed for phones first and scales up for larger screens.
