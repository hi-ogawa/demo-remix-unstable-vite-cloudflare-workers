# cloudflare-pages

https://remix-vite-example-hiro18181.pages.dev

script for cloudflare pages deployment

```sh
# initial setup
npx wrangler pages project create remix-vite-example-hiro18181 --production-branch main

# during local preview, wranger will use bindings in wrangler.toml
pnpm pages-preview

# before release, bindings must be setup manually from dashbaord
# https://developers.cloudflare.com/pages/functions/bindings
npx wrangler kv:namespace create kv_pages  # => remix-unstable-vite-cloudflare-workers-kv_pages
pnpm pages-release
```

## references

mostly copied from https://github.com/hi-ogawa/remix-vite-deployment-examples/tree/main/misc/cloudflare-pages
