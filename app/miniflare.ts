import { Miniflare } from "miniflare";

// cf. https://github.com/cloudflare/workers-sdk/tree/main/packages/miniflare
const miniflare = new Miniflare({
  modules: true,
  script: `export default { fetch: () => new Response(null, { status: 404 }) }`,
  kvNamespaces: ["kv"],
});

const env = await miniflare.getBindings();
Object.assign(globalThis, { env });
