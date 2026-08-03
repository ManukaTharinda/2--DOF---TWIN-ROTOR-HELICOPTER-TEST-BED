# TRT-01 — 2-DOF Twin Rotor Helicopter Test Bed

Landing page for the project: overview, subsystems, specs, media, documentation
and team. Built with Next.js (App Router) + TypeScript + Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Where to edit things

| What                     | File                          |
|---------------------------|--------------------------------|
| Team members (5)          | `src/data/team.ts`             |
| Documentation / manual links | `src/data/docs.ts`          |
| Photos & video             | `src/data/media.ts`            |
| Nameplate specs table      | `src/components/specs.tsx`     |
| Copy / section text        | each file in `src/components/` |

## Where to put your files

- **Docs / user manual** → `public/docs/` (filenames listed in `public/docs/README.txt`)
- **Photos** → `public/media/photos/` (filenames listed in `public/media/photos/README.txt`)
- **Demo video** → `public/media/video/demo.mp4`, or set a YouTube ID in `src/data/media.ts`
- **Team headshots** → `public/team/`, then reference the path in `src/data/team.ts`

Until real files are added, photo/video/doc slots show a labeled placeholder
instead of a broken image — nothing looks broken during setup.

## Build for production

```bash
npm run build
npm start
```

## Deploy

Works out of the box on Vercel, or any Node host — it's a standard Next.js app.
