<script lang="ts">
  import { onMount, onDestroy } from 'svelte'
  import type { bulky } from '@bulky/core';
  import DragDropPlugin from '@bulky/drag-drop'

  let container: HTMLElement;
  let plugin: DragDropPlugin; 

  export let bulky: bulky;
  export let props: Object | undefined = {};

  const installPlugin = () => {
    const options = {
      id: 'svelte:DragDrop',
      inline: true,
      ...props,
      target: container
    }

    bulky.use(DragDropPlugin, options);
    plugin = bulky.getPlugin(options.id) as DragDropPlugin;
  }
  const uninstallPlugin = (bulkyInstance: bulky = bulky) => {
    bulkyInstance.removePlugin(plugin);
  }

  onMount(() => installPlugin())

  onDestroy(() => uninstallPlugin())
  $: {
    const options = {
      id: 'svelte:DragDrop',
      ...props,
      target: container
    }
    bulky.setOptions(options)
  }
</script>
<div class="bulky-Container" bind:this={container} />
