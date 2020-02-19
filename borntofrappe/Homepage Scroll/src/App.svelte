<script>
  import Navigation from "./Navigation.svelte";
  const links = [
    {
      name: "blog",
      copy: "I enjoy writing code. Here, I try my best explaining how.",
      href: "/blog",
    },
    {
      name: "codepen",
      copy: "Demo or it didn't happen.",
      href: "https://codepen.io/borntofrappe"
    },
    {
      name: "freecodecamp",
      copy: "Where it all started, with HTML and CSS.",
      href: "https://www.freecodecamp.org/borntofrappe"
    },
    {
      name: "twitter",
      copy: "People seem to appreciate my coding efforts. I try to keep up.",
      href: "https://twitter.com/borntofrappe"
    },
    {
      name: "github",
      copy: "Public by default.",
      href: "https://github.com/borntofrappe"
    }
  ];

  const items = links.map(({name}) => name);

</script>

<Navigation id="navigation" {items} />

<div>
  <a href="#navigation">
    <svg viewBox="-50 -50 100 100" width="30" height="30">
      <g fill="none" stroke="currentColor" stroke-width="10">
        <circle r="45"  />
        <path d="M 0 -20 l 15 15 m -30 0 l 15 -15 v 40" stroke-linecap="round" stroke-linejoin="round"/>
      </g>
    </svg>
  </a>


  {#each links as {name, copy, href}}
    <section id="{name}">
      <h1>{name}</h1>
      <p>{copy}</p>
      <a {href}>More</a>
    </section>
  {/each}
</div>

<style>
  :global(html) {
    scroll-behavior: smooth;
  }
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  div > a {
    position: sticky;
    top: 1rem;
    left: 100%;
    text-align: right;
    display: inline-block;
    width: 45px;
    margin: 1rem;
  }
  div > a svg {
    display: block;
    width: 100%;
    height: auto;
  }
</style>