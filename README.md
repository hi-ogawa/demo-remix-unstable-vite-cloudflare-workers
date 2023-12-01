Experiment to use remix unstable vite for cloudflare workers.

~This demo requires `serverBuildEntry` option from this PR https://github.com/remix-run/remix/pull/7975~ (it turns out this is not necessary)

```sh
# run vite dev server with miniflare to mimic cloudflare workers runtime
# (see app/miniflare.ts imported by app/entry.server.tsx)
pnpm dev

# run production build locally with genuine workerd runtime provided by wrangler dev
# (see app/server.mjs)
pnpm build
pnpm preview

# deploy cloudflare workers
pnpm release

# analyze bundle
# upload build/esbuild-metafile.json to https://esbuild.github.io/analyze/
esbuild build/server/index.js --minify --outfile=build/index-bundle.js --metafile=build/esbuild-metafile.json --bundle --format=esm --platform=browser
```

## references

- https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare
- https://rakkasjs.org/guide/cloudflare-workers
- https://vike.dev/cloudflare-workers
- https://kit.svelte.dev/docs/adapter-cloudflare-workers
- https://github.com/honojs/vite-plugins/tree/main/packages/dev-server
- https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev
- https://github.com/hi-ogawa/remix-vite-deployment-examples

---

(original README.md from https://github.com/remix-run/remix/blob/bf2feb9bdb292ac6560964d6749b0fcf9a8c784e/templates/unstable-vite-express/README.md)

# templates/unstable-vite-express

⚠️ Remix support for Vite is unstable and not recommended for production.

📖 See the [Remix Vite docs][remix-vite-docs] for details on supported features.

## Setup

```shellscript
npx create-remix@latest --template remix-run/remix/templates/unstable-vite-express
```

## Run

Spin up the Express server as a dev server:

```shellscript
npm run dev
```

Or build your app for production and run it:

```shellscript
npm run build
npm run start
```

## Customize

Remix exposes APIs for integrating Vite with a custom server:

```ts
import {
  unstable_createViteServer,
  unstable_loadViteServerBuild,
} from "@remix-run/dev";
```

In this template, we'll use Express but remember that these APIs can be used with _any_ Node-compatible server setup that supports standard middleware.

[remix-vite-docs]: https://remix.run/docs/en/main/future/vite
