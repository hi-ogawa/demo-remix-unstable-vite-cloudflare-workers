import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((env) => ({
  clearScreen: false,
  plugins: [
    remix({
      serverBuildEntry:
        env.command === "serve"
          ? "./app/server-miniflare.ts"
          : "./app/server-cloudflare-workers.ts",
    }),
    tsconfigPaths(),
  ],
}));
