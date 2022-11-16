import type { PluginOptions, BasePlugin } from "@bulky/core";

interface DropTargetOptions extends PluginOptions {
  target: string | Element;
  onDragOver?: (event: MouseEvent) => void;
  onDrop?: (event: MouseEvent) => void;
  onDragLeave?: (event: MouseEvent) => void;
}

declare class DropTarget extends BasePlugin<DropTargetOptions> {}

export default DropTarget;
