<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";
  import Navigation from "./Navigation.svelte";
  import Footer from "./Footer.svelte";

  let breadcrumbs = [];

  const links = [
    {
      name: "blog",
      copy: "I enjoy writing code. I try my best to explain how.",
      link: {
        href: '#',
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

<Breadcrumbs {breadcrumbs} />

<Navigation {items} />

{#each links as {name, copy, link}}
    <section id="{name}">
      <h1>{name}</h1>
      <p>{copy}</p>
      <a href="{link.href}">
        {link.copy}
        <svg viewBox="-50 -50 100 100" width="30" height="30">
          <g stroke-width="15" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
              <path d="M 13 0 h -55" pathLength="1" stroke-dasharray="0.64 0.35" stroke-dashoffset="0.63" />
              <path d="M 42.5 0 l -22.5 -22.5 m 0 45 l 22.5 -22.5" />
          </g>
        </svg>
      </a>
    </section>
  {/each}

<Footer />

<style>
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    max-width: 40em;
    width: 90vw;
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
    font-weight: bold;
    font-size: 1rem;
    color: inherit;
    text-decoration: none;
    border-bottom: 0.2rem solid var(--accent-5);
    transition: color 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: color var(--link-transition-duration) var(--ease-in-out-sine);
    display: flex;
    align-items: flex-end;
  }
  section a:hover,
  section a:focus {
    color: var(--accent-5);
  }
  section a:focus {
    outline-color: var(--accent-5);
  }
  section a svg {
    width: auto;
    height: 1em;
    margin-left: 0.5rem;
  }
  section a svg path {
    transition: stroke-dashoffset 0.3s ease-in-out;
  }
  section a:hover svg path,
  section a:focus svg path {
    stroke-dashoffset: 0;
  }

</style>