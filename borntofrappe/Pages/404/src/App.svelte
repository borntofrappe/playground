<script>
  import Planet from "./Planet.svelte";
  import Breadcrumbs from "./Breadcrumbs.svelte";
</script>

<Breadcrumbs />
<main>
	<Planet />
</main>


<style>
	main {
		min-height: 100vh;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
</style>