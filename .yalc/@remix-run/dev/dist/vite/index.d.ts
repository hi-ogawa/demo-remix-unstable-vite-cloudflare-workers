import type { ViteDevServer } from "vite";
import type { RemixVitePlugin } from "./plugin";
export declare const unstable_vitePlugin: RemixVitePlugin;
export declare const unstable_createViteServer: () => Promise<ViteDevServer>;
export declare const unstable_loadViteServerBuild: (vite: ViteDevServer) => Promise<Record<string, any>>;
