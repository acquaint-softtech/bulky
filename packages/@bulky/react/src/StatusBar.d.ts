import type { StatusBarOptions } from "@bulky/status-bar";
import { TobulkyProps } from "./CommonTypes";

export type StatusBarProps = TobulkyProps<StatusBarOptions> &
  React.BaseHTMLAttributes<HTMLDivElement>;

/**
 * React component that renders a status bar containing upload progress and speed,
 * processing progress and pause/resume/cancel controls.
 */
declare const StatusBarComponent: React.ComponentType<StatusBarProps>;
export default StatusBarComponent;
