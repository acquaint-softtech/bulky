import type { DragDropOptions } from "@bulky/drag-drop";
import { TobulkyProps } from "./CommonTypes";

export type DragDropProps = TobulkyProps<DragDropOptions> &
  React.BaseHTMLAttributes<HTMLDivElement>;

/**
 * React component that renders an area in which files can be dropped to be
 * uploaded.
 */
declare const DragDropComponent: React.ComponentType<DragDropProps>;
export default DragDropComponent;
