<script>
  import getIcon from "./icons.js";
  export let breadcrumbs = [];
  $: root = breadcrumbs.length === 0;
</script>

<nav class:root aria-label="Breadcrumb navigation">
  <a href="/">borntofrappe {@html getIcon("rocket")} </a>
  {#each breadcrumbs as href, i}
  <a href="/{breadcrumbs.slice(0, i + 1).join('/')}">
    <span>/ {href}</span>
    {@html getIcon(href)}
  </a>
  {/each}
</nav>

<style>
  nav {
    max-width: 40em;
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
  }
  nav a {
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
    font-size: 0.95rem;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
  }
  nav a :global(svg) {
    margin: 0 0.4rem;
    width: 1.5em;
    height: auto;
  }

  nav.root {
    position: absolute;
    top: 0%;
    left: 50%;
    transform: translate(-50%, 0);
  }
</style>
