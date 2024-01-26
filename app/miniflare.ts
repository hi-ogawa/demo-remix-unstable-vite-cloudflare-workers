import { getBindingsProxy } from "wrangler";

const { bindings } = await getBindingsProxy();
Object.assign(globalThis, { env: bindings });

/*

test bindings via repl

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
