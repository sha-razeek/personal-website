# Sha Razeek — Mid-Century Jet Age Website

A personal website and digital portfolio built with a "Mid-Century Jet Age" aesthetic. This project serves as a hub for professional work, editorial experiments, and creative side projects, reflecting a passion for hypermedia, UI/UX, and retro-futuristic design.

## Design Ethos: Mid-Century Modern

The site's visual language is inspired by the optimistic futurism of the 1950s and 60s—the "Jet Age." This is characterized by:

- **Palette:** A curated selection of Cream, Teal, Coral, Mustard, and Charcoal.
- **Typography:** Geometric sans-serifs (Figtree) paired with technical mono-spaced fonts (IBM Plex Mono).
- **Motifs:** Atomic starbursts, jet-age decorative lines, and subtle "springy" animations.
- **Layout:** A flexible sidebar-driven navigation that prioritizes content clarity and editorial flow.

## Tech Stack

- **Framework:** [Astro 6.x](https://astro.build/) (Static Output)
- **Runtime:** Node.js (>=22.12.0)
- **Deployment:** [Cloudflare Pages](https://pages.cloudflare.com/) via `@astrojs/cloudflare`
- **Styling:** Vanilla CSS with custom properties for tokens
- **Type Safety:** TypeScript

## Project Structure

```text
/
├── public/          # Static assets (images, icons)
├── src/
│   ├── components/  # Shared Astro components (Sidebar, etc.)
│   ├── data/        # TypeScript data files (Portfolio, Quizzes, Music)
│   ├── layouts/     # Page layouts (Layout.astro)
│   ├── pages/       # Route-based pages (Portfolio, Blog, Trivia, etc.)
│   └── styles/      # Global CSS and mid-century tokens
├── astro.config.mjs # Astro configuration
└── wrangler.jsonc   # Cloudflare Pages configuration
```

## Key Features

- **Portfolio:** Showcasing projects like SLIFA Magazine, Transistor Radio, and the Mid-Century Design System.
- **Articles:** A blog platform featuring experiments in AI augmentation, culture (City Pop, Enka), and technical explorations.
- **Trivia:** Weekly interactive quizzes with a custom retro-styled quiz engine.
- **Chronos Tracker:** A personal time-tracking utility integrated into the dashboard.
- **Music:** A curated section for music-related projects and playlists.

## Commands

All commands are run from the root of the project, from a terminal:

| Command           | Action                                           |
| :---------------- | :----------------------------------------------- |
| `npm install`     | Installs dependencies                            |
| `npm run dev`     | Starts local dev server at `localhost:4321`      |
| `npm run build`   | Build your production site to `./dist/`          |
| `npm run preview` | Preview your build locally, before deploying     |
| `npm run astro`   | Run Astro CLI commands                           |

## Deployment

The site is automatically deployed to **Cloudflare Pages** on push. 

To generate wrangler types for development:
```bash
npm run generate-types
```

---

*Designed and Developed by [Sha Razeek](https://github.com/sha-razeek)*
