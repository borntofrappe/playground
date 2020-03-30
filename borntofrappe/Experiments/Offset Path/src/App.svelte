<script>
  import Section from "./Section.svelte";
  import Rocket from "./Rocket.svelte";
</script>
{#each Array(4) as item, i}
<Section />
<!-- change the transition of the rocket according to the index -->
<Rocket {i} />
{/each}
<Section />
