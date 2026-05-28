# portfolio

Personal portfolio site — [milwil-2.github.io/portfolio](https://milwil-2.github.io/portfolio)

Built with Astro. Dark, monospace, minimal. Lists projects with links to GitHub and live demos where available.

## dev

```sh
npm install
npm run dev      # localhost:4321/portfolio
npm run build    # output to dist/
```

## adding projects

Edit `src/data/projects.ts`. Include a `live` URL for hosted projects to get the live badge.

Deploys automatically to GitHub Pages on push to `main`.
