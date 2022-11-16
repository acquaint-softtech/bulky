import type { PluginOptions, UIPlugin } from "@bulky/core";

type ReduxDevToolsOptions = PluginOptions;

declare class ReduxDevTools extends UIPlugin<ReduxDevToolsOptions> {}

export default ReduxDevTools;
