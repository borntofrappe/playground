<script>
  import getIcon from './icons.js';
  export let breadcrumbs = [];
  $: root = breadcrumbs.length === 0;
</script>

<nav class:root aria-label="Breadcrumb navigation">
  <a href="/">borntofrappe</a>
  {#each breadcrumbs as href, i}
  <a href="/{breadcrumbs.slice(0, i + 1).join("/")}">
    <span>/ {href}</span>
    {@html getIcon(href)}
  </a>
  {/each}
</nav>

<style>
  nav {
    width: 90vw;
    max-width: 40em;
    margin: 0 auto;
    padding: 1rem 0;
  }
  /* flow?! */
  nav.root {
      position: absolute;
      top: 0%;
      left: 50%;
      transform: translate(-50%, 0);
  }
  nav a {
    font-family: "Maven Pro", sans-serif;
    font-size: 0.9rem;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
    outline-color: var(--accent-5);
    display: inline-flex;
    align-items: center;
  }
  nav a :global(svg) {
    margin: 0 0.4rem;
    width: 1.5em;
    height: auto;
  }
  nav a:hover,
  nav a:focus {
    color: var(--accent-5);
  }
</style>
