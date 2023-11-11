Experiment to use miniflare for remix unstable vite dev

```sh
# run vite dev server on nodejs with miniflare to mimic cloudflare workers runtime
pnpm dev

# run production build locally with genuine workerd runtime by wrangler dev
pnpm build
pnpm preview

# release cloudflare workers
pnpm release
```

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
