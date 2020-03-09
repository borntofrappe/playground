<script>
  import Icon from './Icons.svelte';
  export let breadcrumbs = [];
</script>

<nav aria-label="Breadcrumb navigation">
  <a href="/">borntofrappe</a>
  {#each breadcrumbs as href}
  <a {href}>
    <span>/ {href}</span>
    <Icon icon="{href}" size="1.5em"/>
  </a>
  {/each}
</nav>

<style>
 nav {
    max-width: 40em;
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
    /* offset to have the following elements relative to the beginning of the page */
    margin-bottom: -2rem;
  }
  nav a {
    font-family: "Catamaran", sans-serif;
    font-size: 1rem;
    font-weight: 700;
    color: inherit;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--transition-duration) var(--ease-in-out-sine);
    outline-color: var(--accent-5);
  }
  nav a * {
    margin-left: 0.4rem;
  }
  nav a svg {
    width: 1.5em;
    height: auto;
  }
  nav a:hover,
  nav a:focus {
    color: var(--accent-5);
  }
</style>
