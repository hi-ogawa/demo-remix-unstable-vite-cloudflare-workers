import { createRequestHandler } from "@remix-run/server-runtime";
import * as remixBuild from "../build/server/index.js";

// wrangler will bundle this "server.mjs" with prebuilt `remixBuild`

const remixHandler = createRequestHandler(remixBuild, process.env.NODE_ENV);

export default {
  fetch(request, env, _ctx) {
    // TODO: should be isolated per request? (e.g. via AsyncLocalStorage)
    Object.assign(globalThis, { env });
    return remixHandler(request);
  },
};
