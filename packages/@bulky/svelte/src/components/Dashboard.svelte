<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import type { bulky } from '@bulky/core';
  import DashboardPlugin from '@bulky/dashboard'

  let container: HTMLElement;
  let plugin: DashboardPlugin;

  export let bulky: bulky;
  export let props: Object | undefined = {};
  export let plugins: string[] = [];

  const installPlugin = () => {
    const options = {
      id: 'svelte:Dashboard',
      inline: true,
      plugins,
      ...props,
      target: container
    }

    bulky.use(DashboardPlugin, options);
    plugin = bulky.getPlugin(options.id) as DashboardPlugin;
  }
  const uninstallPlugin = (bulkyInstance: bulky = bulky) => {
    bulkyInstance.removePlugin(plugin);
  }

  onMount(() => installPlugin())

  onDestroy(() => uninstallPlugin())
  $: {
    const options = {
      id: 'svelte:Dashboard',
      inline: true,
      plugins,
      ...props,
      target: container
    }
    bulky.setOptions(options)
  }
</script>
<div class="bulky-Container" bind:this={container} />