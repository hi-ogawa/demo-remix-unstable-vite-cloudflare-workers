import * as remixBuild from "@remix-run/dev/server-build";
import { createRequestHandler } from "@remix-run/server-runtime";

const remixHandler = createRequestHandler(remixBuild, process.env.NODE_ENV);

export default {
  async fetch(request: Request, env: unknown, _ctx: unknown) {
    Object.assign(globalThis, { env });
    return remixHandler(request);
  },
};
