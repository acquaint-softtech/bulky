import type { ProgressBarOptions } from "@bulky/progress-bar";
import { TobulkyProps } from "./CommonTypes";

export type ProgressBarProps = TobulkyProps<ProgressBarOptions> &
  React.BaseHTMLAttributes<HTMLDivElement>;

/**
 * React component that renders a progress bar at the top of the page.
 */
declare const ProgressBarComponent: React.ComponentType<ProgressBarProps>;
export default ProgressBarComponent;
