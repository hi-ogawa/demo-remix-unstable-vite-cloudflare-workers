import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";

export default defineConfig({
  clearScreen: false,
  plugins: [
    remix(),
    {
      name: "local:exclude-remix-optimizeDeps",
      enforce: "post",
      config(config, _env) {
        // silence warning since Remix currently forces @remix-run/node https://github.com/remix-run/remix/blob/ee1f202be9163b59f2eb4ba09ecc2bf10f17d401/packages/remix-dev/vite/plugin.ts#L674
        //   Failed to resolve dependency: @remix-run/node, present in 'optimizeDeps.include'
        if (config.optimizeDeps?.include) {
          config.optimizeDeps.include = config.optimizeDeps.include.filter(
            (v) => v !== "@remix-run/node",
          );
        }
      },
    },
  ],
});
