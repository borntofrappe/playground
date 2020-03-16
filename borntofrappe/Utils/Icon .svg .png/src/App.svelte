<script>
  import Canvas from "./Canvas.svelte";

  let size = 200;
  $: download = `icon-${size}`;

  let href;
</script>

<style>
  :global(body) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  a {
    font-size: 3rem;
    display: block;
  }
</style>

<form on:submit|preventDefault>
  <label>
    Size
    <input type="number" bind:value="{size}" />
  </label>
</form>

<Canvas on:draw="{(e) => href = e.detail}" {size} />

{#if href}
<a {href} {download}>Download <strong>{download}</strong></a>
{/if}
