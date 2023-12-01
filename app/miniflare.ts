import { Miniflare } from "miniflare";

// cf. https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare
const miniflare = new Miniflare({
  modules: true,
  script: `export default { fetch: () => new Response(null, { status: 404 }) }`,
  // mimic what `wranger dev` does, so that `pnpm preview` and `pnpm dev` shares same persistence
  //   readConfig https://github.com/cloudflare/workers-sdk/blob/04a2d0ed6fca1c366cd891b54026c34e1c1a5701/packages/wrangler/src/config/index.ts#L28-L32
  //   getBindings https://github.com/cloudflare/workers-sdk/blob/04a2d0ed6fca1c366cd891b54026c34e1c1a5701/packages/wrangler/src/dev.tsx#L856-L861
  //   buildMiniflareOptions https://github.com/cloudflare/workers-sdk/blob/3b5407a968189e60974233c5db8615162db37fd2/packages/wrangler/src/dev/miniflare.ts#L497-L500
  kvNamespaces: { kv: "583c3ad45f3c4baeb48e901e1cd8ad12" },
  kvPersist: ".wrangler/state/v3/kv",
});

const env = await miniflare.getBindings();
Object.assign(globalThis, { env });

/*

Quick and dirty exploration of binding API

$ pnpm repl
> await env.kv.list()
{
  keys: [ { name: 'counter' } ],
  list_complete: true,
  cacheStatus: null
}
> await env.kv.get("counter")
'4'

*/
