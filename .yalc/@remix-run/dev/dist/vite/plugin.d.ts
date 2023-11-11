import { type Plugin as VitePlugin } from "vite";
import { type AppConfig as RemixUserConfig } from "../config";
declare const supportedRemixConfigKeys: readonly ["appDirectory", "assetsBuildDirectory", "future", "ignoredRouteFiles", "publicPath", "routes", "serverBuildPath", "serverModuleFormat"];
type SupportedRemixConfigKey = typeof supportedRemixConfigKeys[number];
export type RemixVitePluginOptions = Pick<RemixUserConfig, SupportedRemixConfigKey> & {
    legacyCssImports?: boolean;
    serverBuildEntry?: string;
};
export type RemixVitePlugin = (options?: RemixVitePluginOptions) => VitePlugin[];
export declare const remixVitePlugin: RemixVitePlugin;
export {};
