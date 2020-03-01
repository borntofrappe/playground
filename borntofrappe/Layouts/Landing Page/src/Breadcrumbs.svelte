<script>
  import Icon from './Icons.svelte';
  export let breadcrumbs = [];
</script>

<nav aria-label="Site navigation">
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
    margin-bottom: -2rem;
  }
  nav a {
    font-family: "Catamaran", sans-serif;
    text-decoration: none;
    color: inherit;
    font-size: 1rem;
    display: inline-flex;
    align-items: center;
    transition: color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--link-transition-duration) var(--ease-in-out-sine);
  }
  nav a span {
    margin-right: 0.4rem;
  }

  nav a:hover,
  nav a:focus {
    color: hsl(340, 80%, 55%);
    color: var(--accent-4);
  }
</style>
