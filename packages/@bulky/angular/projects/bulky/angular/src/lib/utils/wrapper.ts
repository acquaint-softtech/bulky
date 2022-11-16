import type { bulky, UIPlugin } from '@bulky/core';
import type { ElementRef, SimpleChanges } from '@angular/core';
import type { DragDropOptions } from '@bulky/drag-drop';
import type { StatusBarOptions } from '@bulky/status-bar';
import type { ProgressBarOptions } from '@bulky/progress-bar';

export abstract class bulkyAngularWrapper<
  PluginType extends UIPlugin = UIPlugin
> {
  abstract props: DragDropOptions | StatusBarOptions | ProgressBarOptions;
  abstract el: ElementRef;
  abstract bulky: bulky;
  private options: any;
  plugin: PluginType | undefined;

  onMount(
    defaultOptions: Record<string, unknown>,
    plugin: new (bulky: bulky, opts?: Record<string, unknown>) => UIPlugin
  ) {
    this.options = {
      ...defaultOptions,
      ...this.props,
    };

    this.bulky.use(plugin, this.options);
    this.plugin = this.bulky.getPlugin(this.options.id) as PluginType;
  }

  handleChanges(changes: SimpleChanges, plugin: any): void {
    // Without the last part of this conditional, it tries to uninstall before the plugin is mounted
    if (
      changes['bulky'] &&
      this.bulky !== changes['bulky'].previousValue &&
      changes['bulky'].previousValue !== undefined
    ) {
      this.uninstall(changes['bulky'].previousValue);
      this.bulky.use(plugin, this.options);
    }
    this.options = { ...this.options, ...this.props };
    this.plugin = this.bulky.getPlugin(this.options.id) as PluginType;
    if (
      changes['props'] &&
      this.props !== changes['props'].previousValue &&
      changes['props'].previousValue !== undefined
    ) {
      this.plugin.setOptions({ ...this.options });
    }
  }

  uninstall(bulky = this.bulky): void {
    bulky.removePlugin(this.plugin!);
  }
}
