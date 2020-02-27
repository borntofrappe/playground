<script>
  import Navigation from "./Navigation.svelte";
  const links = [
    {
      name: "blog",
      copy: "I enjoy writing code. I try my best to explain how.",
      link: {
        href: '/blog',
        copy: 'Go to blog',
      }
    },
    {
      name: "freecodecamp",
      copy: "Where it all started, with HTML and CSS.",
      link: {
        href: 'https://www.freecodecamp.org/borntofrappe',
        copy: 'Verify certifications',
      }
    },
    {
      name: "codepen",
      copy: "Think of something. Chances are, I made something similar on this amazing platform.",
      link: {
        href: 'https://codepen.io/borntofrappe',
        copy: 'Browse demos',
      }
    },
    {
      name: "twitter",
      copy: "People seem to appreciate my efforts. I strive to keep up with the demand.",
      link: {
        href: 'https://twitter.com/borntofrappe',
        copy: 'Check profile',
      }
    },
    {
      name: "github",
      copy: "In my endless quest to learn, I sort my notes and code in public repositories.",
      link: {
        href: 'https://github.com/borntofrappe',
        copy: 'Explore history',
      }
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


  {#each links as {name, copy, link}}
    <section id="{name}">
      <h1>{name}</h1>
      <p>{copy}</p>
      <a href="{link.href}">{link.copy}</a>
    </section>
  {/each}
</div>

<style>
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 35em;
    margin: 1rem auto;
  }
  section > * + * {
    margin-top: 1rem;
  }
  section h1 {
    text-transform: capitalize;
    font-size: 3.5rem;
    font-family: "Catamaran", sans-serif;
  }
  section p {
    font-size: 1.5rem;
  }
  section a {
    font-size: 1.2rem;
    color: inherit;
    text-decoration: none;
    border-bottom: 0.2rem solid var(--accent-5);
  }

  section a:hover {
    color: var(--accent-5);
  }
  section a:focus {
    outline-color: var(--accent-5);
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
    width: 7rem;
    display: inline-block;
    color: inherit;
    outline: none;
    transition: color 0.35s ease-in-out, transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: color var(--link-transition-duration) var(--ease-out-cubic), transform var(--link-transition-duration) var(--ease-in-out-back);
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
    color: var(--accent-4);
  }
  div > a:hover svg .text,
  div > a:focus svg .text {
    transform: scale(1);
  }

</style>