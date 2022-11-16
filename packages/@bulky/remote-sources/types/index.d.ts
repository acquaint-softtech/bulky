import type { PluginOptions, BasePlugin, PluginTarget } from "@bulky/core";
import type { RequestClientOptions } from "@bulky/companion-client";

interface RemoteTargetOptions extends PluginOptions, RequestClientOptions {
  target?: PluginTarget;
  sources?: Array<string>;
  title?: string;
  companionUrl: string;
}

declare class RemoteTarget extends BasePlugin<RemoteTargetOptions> {}

export default RemoteTarget;
