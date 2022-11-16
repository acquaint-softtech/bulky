import Vue from "vue";
import type { bulky, UIPlugin, BasePlugin } from "@bulky/core";
import type DashboardPlugin from "@bulky/dashboard";

interface Data {
  plugin: DashboardPlugin;
}
interface Props {
  bulky: bulky;
  props: Record<string, unknown>;
  plugins: Array<UIPlugin | BasePlugin>;
  open: boolean;
}
interface Methods {
  installPlugin(): void;
  uninstallPlugin(bulky: bulky): void;
}
declare const exports: import("vue/types/vue").ExtendedVue<
  Vue,
  Data,
  Methods,
  unknown,
  Props
>;
export default exports;
