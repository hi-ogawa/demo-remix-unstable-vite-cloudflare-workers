import { unstable_vitePlugin as remix } from "@remix-run/dev";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  clearScreen: false,
  build: {
    // to be fixed in https://github.com/remix-run/remix/pull/8039
    copyPublicDir: false
  },
  plugins: [remix(), tsconfigPaths()],
});
