# Shinobi Portfolio

A dark, samurai-ninja themed portfolio built with Next.js (App Router), React, Tailwind CSS,
and anime.js for all animation/micro-interactions. No database — all content lives in
`data/content.js`.

## 1. Setup (run these in Termux or any terminal)

```bash
cd portfolio
npm install
npm run dev
```

Then open http://localhost:3000

## 2. Before you deploy — fill in the TODOs

Open `data/content.js` and replace:
- `email` — your real email
- `liveUrl` / `repoUrl` for each project (CollabBoard, Retroleaf, CodeSync)
- `period` (dates) for each experience entry

Drop your resume PDF at `public/resume.pdf` (the "Download Resume" button already points here).

## 3. Features

- Katana-slice hero text reveal, drifting ash-particle canvas background
- Scroll-triggered section reveals (Intersection Observer + anime.js)
- Custom katana-tip cursor that morphs into a target-lock over links/buttons
  (auto-disabled on touch devices)
- Polymorphic clip-path buttons with a fill-wipe hover
- Mission cards that "unsheathe" (a blade-edge slides in) on hover
- Scroll progress bar styled as a filling blade + belt-rank label (White → Black Belt)
- **Shinobi Terminal** — a CLI overlay (bottom-right button, or press `~`) with commands:
  `whoami`, `skills`, `projects`, `contact`, `sensei`, `sudo hire-me`, `clear`, `help`
- **Command palette** (`Cmd/Ctrl + K`) to jump to any section, project, or link
- Easter egg: type "ninja" anywhere on the page for a smoke-burst animation

## 4. Structure

```
app/
  layout.js      — fonts, metadata
  page.js         — composes all sections, global keyboard shortcuts, easter egg
  globals.css     — theme tokens, cursor, buttons, reduced-motion handling
components/       — one file per section/feature
data/content.js   — ALL editable content (profile, projects, skills, experience, CLI copy)
```

## 5. Deploy

Push to GitHub, then import the repo at https://vercel.com/new — zero config needed,
Vercel auto-detects Next.js.

## 6. Notes

- Fully responsive; custom cursor auto-disables on touch/coarse-pointer devices.
- Respects `prefers-reduced-motion`.
- No extra animation library beyond anime.js, no database, no backend — everything
  ships as a static-friendly Next.js app.
