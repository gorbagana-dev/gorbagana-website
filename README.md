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

## Deploy to Cloudflare (gorbagana.wtf)

This is a Next.js app. Cloudflare hosts it as a **Worker** via [OpenNext](https://opennext.js.org/cloudflare), not as a static Pages upload. The live domain is already on Cloudflare; this repo had no adapter or CI, so deploys were manual and not repeatable.

### 1. One-time Cloudflare setup

1. In [Cloudflare dashboard](https://dash.cloudflare.com/) → **Workers & Pages**, note the **Account ID**.
2. Create an API token: **My Profile** → **API Tokens** → **Create Token** → use the **Edit Cloudflare Workers** template. Scope it to this account.
3. In the GitHub repo: **Settings** → **Secrets and variables** → **Actions**, add:
   - `CLOUDFLARE_ACCOUNT_ID`
   - `CLOUDFLARE_API_TOKEN`
4. If an older **Pages** project still owns `gorbagana.wtf` / `www.gorbagana.wtf`, remove those custom domains from that project first. A domain can only be attached to one Pages project or Worker.

### 2. Ship it

**Automatic:** push (or merge) to `main`. The [Deploy workflow](.github/workflows/deploy.yml) builds with OpenNext and deploys the `gorbagana-website` Worker.

**Manual, from this machine:**

```bash
npx wrangler login
npm run deploy
```

The first deploy is live on `*.workers.dev`. Then attach the real domain:

1. Cloudflare → **Workers & Pages** → **gorbagana-website** → **Settings** → **Domains & Routes**
2. Add `gorbagana.wtf` and `www.gorbagana.wtf`

Or uncomment the `routes` block in `wrangler.jsonc` and deploy again.

**Dashboard Git (no GitHub Actions):** Workers & Pages → **Create** → connect `gorbagana-dev/gorbagana-website`. Set the build command to `npx opennextjs-cloudflare build` (not `next build`). You still need the Wrangler files in this repo.

```bash
npm run preview
```

runs the production Worker locally before you deploy.


## Design reference

See [DESIGN.md](DESIGN.md) for the website style and [the original design system](design-system/gorbagana/readme.md) for assets, tokens, guidelines, and component examples.
