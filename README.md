# Gorbagana Website

Official website for Gorbagana.

## Development

```bash
npm install
npm run dev
```

## Checks

```bash
npm run lint
npm run typecheck
npm run build
```

## Deployment

This is a Next.js app deployed to Cloudflare as a **Worker** via [OpenNext](https://opennext.js.org/cloudflare).

Pushing (or merging) to `main` triggers the [Deploy workflow](.github/workflows/deploy.yml), which builds with OpenNext and deploys the Worker.

To preview the production Worker locally before deploying:

```bash
npm run preview
```

## Design reference

See [DESIGN.md](DESIGN.md) for the website style and [the original design system](design-system/gorbagana/readme.md) for assets, tokens, guidelines, and component examples.
