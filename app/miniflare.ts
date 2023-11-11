//
// initialize miniflare to mimic cloudflare workers runtime on nodejs
//
// cf.
// https://github.com/cloudflare/miniflare/blob/master/packages/miniflare/README.md
// https://github.com/cloudflare/miniflare/pull/639
// https://github.com/honojs/vite-plugins/blob/main/packages/dev-server/src/dev-server.ts

import { Miniflare } from "miniflare";

const miniflare = new Miniflare({
  modules: true,
  script: `export default { fetch: () => new Response(null, { status: 404 }) }`,
  kvNamespaces: ["kv"],
});
const env = await miniflare.getBindings();
Object.assign(globalThis, { env });
