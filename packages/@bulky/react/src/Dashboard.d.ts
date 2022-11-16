import * as React from "react";
import type { DashboardOptions } from "@bulky/dashboard";
import { Omit, WithBasebulkyProps } from "./CommonTypes";

// This type is mapped into `DashboardProps` below so IntelliSense doesn't display this big mess of nested types
type DashboardPropsInner = Omit<
  WithBasebulkyProps<DashboardOptions>,
  // Remove the modal-only props
  | "animateOpenClose"
  | "browserBackButtonClose"
  | "inline"
  | "onRequestCloseModal"
  | "trigger"
> &
  React.BaseHTMLAttributes<HTMLDivElement>;

export type DashboardProps = {
  [K in keyof DashboardPropsInner]: DashboardPropsInner[K];
};

/**
 * React Component that renders a Dashboard for an bulky instance. This component
 * renders the Dashboard inline so you can put it anywhere you want.
 */
declare const DashboardComponent: React.ComponentType<DashboardProps>;
export default DashboardComponent;
