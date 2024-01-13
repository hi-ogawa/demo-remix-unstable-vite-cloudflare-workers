> [!note]
> I'm currently experimenting with a different approach to run Remix directly on Workerd/Miniflare during development using [`vite-node`](https://github.com/vitest-dev/vitest/tree/main/packages/vite-node). If anyone is intersted, please feel free to take a look at [`@hiogawa/vite-node-miniflare`](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/vite-node-miniflare) and [Remix Vite example](https://github.com/hi-ogawa/vite-plugins/tree/main/packages/vite-node-miniflare/examples/remix).

Experiment to use remix unstable vite for Cloudflare Workers. See also [`./misc/cloudflare-pages`](./misc/cloudflare-pages) for Cloudflare Pages deployment.

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
# (upload build/server/esbuild-metafile.json to https://esbuild.github.io/analyze/)
pnpm build-metafile
```

## references

- https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare
- https://rakkasjs.org/guide/cloudflare-workers
- https://vike.dev/cloudflare-workers
- https://kit.svelte.dev/docs/adapter-cloudflare-workers
- https://github.com/honojs/vite-plugins/tree/main/packages/dev-server
- https://github.com/cloudflare/next-on-pages/tree/main/internal-packages/next-dev
- https://github.com/hi-ogawa/remix-vite-deployment-examples
