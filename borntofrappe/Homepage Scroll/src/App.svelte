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
    <svg viewBox="-65 -65 130 130" width="100" height="100">
      <defs>
        <path id="path-navigation" d="M 0 30 a 30 30 0 0 1 0 -60 30 30 0 0 1 0 60" />
        <mask id="mask-navigation">
          <rect x="-60" y="-60" width="120" height="120" fill="hsl(0, 0%, 100%)" />
          <use href="#path-navigation" fill="hsl(0, 0%, 0%)" />
        </mask>
      </defs>
      <g mask="url(#mask-navigation)">
        <g class="text">
          <text fill="currentColor" transform="scale(1.3)">
            <textPath href="#path-navigation" startOffset="50%" text-anchor="middle" font-family="monospace" font-size="18">
              back up
            </textPath>
          </text>
        </g>
      </g>
      <g fill="none" stroke="currentColor" stroke-width="6">
        <use href="#path-navigation" />
        <path d="M 0 -12.5 l 10 10 m -20 0 l 10 -10 v 25" stroke-linecap="round" stroke-linejoin="round" />
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
  div {
    position: relative;
  }

  div > a {
    text-decoration: none;
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    left: initial;
    width: 100px;
    display: inline-block;
    color: inherit;
    outline: none;
    transition: color 0.4s ease-in-out, transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transform: scale(0.9);
  }
  @supports (position: sticky) {
    div > a {
      position: sticky;
      top: 1rem;
      left: 100%;
    }
  }

  div > a svg {
    display: block;
    width: 100%;
    height: auto;
  }

  div > a svg .text {
    transform: scale(0);
    transition: transform 0.4s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  }
  div > a:hover,
  div > a:focus {
    transform: scale(1);
    color: hsl(340, 80%, 55%);
  }
  div > a:hover svg .text,
  div > a:focus svg .text {
    transform: scale(1);
  }

</style>