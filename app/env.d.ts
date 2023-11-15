// `env` is injected in global by
// - "app/miniflare.ts" for development
// - "app/server.mjs" on production
declare const env: {
  kv: import("@cloudflare/workers-types").KVNamespace;
};
