<script>
  export let breadcrumbs = [];
</script>

<nav>
  <a href="/">borntofrappe</a>
  {#each breadcrumbs as href}
  <a {href}>/{href}</a>
  {/each}
</nav>

<style>
  nav {
    max-width: 40em;
    width: 90vw;
    margin: 0 auto;
    padding: 1rem 0;
    margin-bottom: -2rem;
    display: flex;
    align-items: center;
  }
  nav a {
    font-family: "Catamaran", sans-serif;
    text-decoration: none;
    color: inherit;
    transition: color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--link-transition-duration) var(--ease-in-out-sine);
  }
  nav a:hover,
  nav a:focus {
    color: hsl(340, 80%, 55%);
    color: var(--accent-4);
  }
</style>
