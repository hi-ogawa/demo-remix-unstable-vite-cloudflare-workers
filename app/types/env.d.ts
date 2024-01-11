// `env` is injected in global by
// - "app/miniflare.ts" for development
// - "app/server.mjs" on production
declare const env: {
  kv: import("@cloudflare/workers-types").KVNamespace;
  SOME_VAR: string;
};

// TODO:
// `wrangler types` might be going to do something similar but currently it's unusable?
