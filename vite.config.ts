import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((env) => ({
  clearScreen: false,
  plugins: [
    remix({
      serverBuildEntry:
        env.command === "build"
          ? "./app/server-cloudflare-workers.ts"
          : undefined,
    }),
    tsconfigPaths(),
  ],
}));
