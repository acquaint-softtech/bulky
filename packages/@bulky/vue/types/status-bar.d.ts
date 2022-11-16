import Vue from "vue";
import type { bulky, UIPlugin, BasePlugin } from "@bulky/core";

interface Data {
  plugin: UIPlugin | BasePlugin;
}
interface Props {
  bulky: bulky;
  props: Record<string, unknown>;
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
