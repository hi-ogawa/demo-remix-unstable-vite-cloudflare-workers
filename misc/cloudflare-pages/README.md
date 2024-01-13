# cloudflare-pages

(copied from https://github.com/hi-ogawa/remix-vite-deployment-examples/tree/main/misc/cloudflare-pages)

script for cloudflare pages deployment

```sh
# initial setup
npx wrangler pages project create remix-vite-example-hiro18181 --production-branch main

# during local preview, wranger will use bindings in wrangler.toml
pnpm pages-preview

# before release, bindings must be setup manually from dashbaord
# https://developers.cloudflare.com/pages/functions/bindings
pnpm pages-release
```
