# Samiksha Tripathy — Portfolio

Personal portfolio site for Samiksha Tripathy, a Computer Science & Engineering
(AI & ML) student at SRM Institute of Science and Technology.

Built with [TanStack Start](https://tanstack.com/start), React 19, and
Tailwind CSS v4.

## Development

Requires [Bun](https://bun.sh) (or Node.js + npm).

```sh
bun install
bun dev
```

The site runs at `http://localhost:8080`.

## Build

```sh
bun run build
bun run preview
```

## Project structure

- `src/routes/` — file-based routes (`/`, `/resume`, `/projects`). See
  `src/routes/README.md`-style conventions in the TanStack Router docs.
- `src/components/SiteLayout.tsx` — shared header/nav/footer wrapper.
- `src/assets/` — photos, sketches, and the resume PDF.
- `src/styles.css` — Tailwind theme and design tokens.
