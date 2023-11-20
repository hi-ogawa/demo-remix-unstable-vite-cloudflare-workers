import { createRequestHandler } from "@remix-run/server-runtime";
import * as remixBuild from "../build/index.js";

// wrangler will bundle server.mjs based on prebuilt remix build.

const remixHandler = createRequestHandler(remixBuild, process.env.NODE_ENV);

export default {
  fetch(request, env, _ctx) {
    Object.assign(globalThis, { env });
    return remixHandler(request);
  },
};
