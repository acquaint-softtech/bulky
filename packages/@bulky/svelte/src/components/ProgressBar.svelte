<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import type { bulky } from '@bulky/core';
  import ProgressBarPlugin from '@bulky/progress-bar'

  let container: HTMLElement;
  let plugin: ProgressBarPlugin; 

  export let bulky: bulky;
  export let props: Object | undefined = {};

  const installPlugin = () => {
    const options = {
      id: 'svelte:ProgressBar',
      inline: true,
      ...props,
      target: container
    }

    bulky.use(ProgressBarPlugin, options);
    plugin = bulky.getPlugin(options.id) as ProgressBarPlugin;
  }
  const uninstallPlugin = (bulkyInstance: bulky = bulky) => {
    bulkyInstance.removePlugin(plugin);
  }

  onMount(() => installPlugin())

  onDestroy(() => uninstallPlugin())
  $: {
    const options = {
      id: 'svelte:ProgressBar',
      ...props,
      target: container
    }
    bulky.setOptions(options)
  }
</script>
<div class="bulky-Container" bind:this={container} />