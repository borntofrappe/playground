<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";
  import Navigation from "./Navigation.svelte";
  import Footer from "./Footer.svelte";
  import Illustration from "./Illustration.svelte";

  let breadcrumbs = [];

  const planets = [
    {
      name: "blog",
      copy: "I like to code. I'm making an effort to write about it.",
      link: {
        href: '/blog',
        copy: 'Go to blog',
      },
      satellites: ["experiment", "research", "idea", "writing", "rocket"]
    },
    {
      name: "freecodecamp",
      copy: "An amazing community, where I started to learn with HTML and CSS.",
      link: {
        href: 'https://www.freecodecamp.org/borntofrappe',
        copy: 'Admire certifications',
      },
      satellites: ["hat", "certificate", "briefcase", "backpack", "abacus"]
    },
    {
      name: "codepen",
      copy: "Think of something. Chances are, I made something similar on this amazing platform.",
      link: {
        href: 'https://codepen.io/borntofrappe',
        copy: 'Browse demos',
      },
      satellites: ["html", "css", "js", "react", "d3"]
    },
    {
      name: "twitter",
      copy: "People seem to appreciate my efforts. I try my best to respect expectations.",
      link: {
        href: 'https://twitter.com/borntofrappe',
        copy: 'Check profile',
      },
      satellites: ["like", "comment", "retweet", "directMessage", "notificationBell"]
    },
    {
      name: "github",
      copy: "In my endless quest to learn, I sort my notes and code in public repositories.",
      link: {
        href: 'https://github.com/borntofrappe',
        copy: 'Explore history',
      },
      satellites: ["repository", "branch", "pullRequest", "bug", "code"]
    }
  ];

  const links = planets.map(({name}) => name);

</script>

<Breadcrumbs {breadcrumbs} />
<Navigation {links} />

{#each planets as {name, copy, link, satellites}, i}
  <div id="{name}">
    <section>
      <h2>{name}</h2>

      <Illustration planet="{name}" {satellites} index="{i}" />

      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Exercitationem rerum quisquam vitae fugiat placeat a repellendus est tempora? Ipsam quaerat, ullam culpa voluptas debitis sed!</p>
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
  </div>

  {/each}

<Footer />

<style>

div {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
div:nth-of-type(even) {
  --accent-5: var(--primary-4);
}

div section {
  max-width: 42em;
  width: 90vw;
  margin: 4rem auto;
}

div section h2 {
  font-family: "Maven Pro", sans-serif;
  text-transform: capitalize;
  font-size: 3rem;
  text-align: center;
}

div :global(section > svg) {
  float: left;
  margin: 2rem 0;
  margin-right: 2.5rem;
  display: block;
  max-width: 28em;
  width: 100%;
  height: auto;
  color: var(--accent-5);
}
div:nth-of-type(even) :global(section > svg) {
  float: right;
  margin-right: initial;
  margin-left: 2.5rem;
}

div section p {
  line-height: 2;
  margin: 2rem 0 1rem;
  font-size: 1.1rem;
}

div section a {
  font-family: "Maven Pro", sans-serif;
  font-weight: 600;
  font-size: 1.1rem;
  color: inherit;
  text-decoration: none;
  border-bottom: 0.2rem solid var(--accent-5);
  transition: color 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: color var(--transition-duration) var(--ease-in-out-sine);

  display: inline-flex;
  flex-direction: row-reverse;
  align-items: center;
}
div section a:hover,
div section a:focus {
  color: var(--accent-5);
}
div section a:focus {
  outline-color: var(--accent-5);
}
div section a svg {
  display: block;
  width: auto;
  height: 1em;
  margin-right: 0.5rem;
  transform: scaleX(-1);
}

div:nth-of-type(even) a {
  flex-direction: row;
}
div:nth-of-type(even) a svg {
  margin-right: initial;
  margin-left: 0.5rem;
  transform: initial;
}

div section a svg path {
  transition: stroke-dashoffset 0.25s cubic-bezier(0.445, 0.05, 0.55, 0.95);
  transition: stroke-dashoffset var(--transition-duration) var(--ease-in-out-sine);
}
div section a:hover svg path,
div section a:focus svg path {
  stroke-dashoffset: 0;
}

@supports (shape-outside: circle()) {
  div :global(section > svg) {
    shape-outside: circle();
  }
  div:nth-of-type(even) {
    text-align: right;
  }
}

@media (max-width: 42rem) {
  div section {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    min-height: initial;
  }

  div section h2 {
    text-align: initial;
    font-size: 2.75rem;
  }
  div section p {
    text-align: initial;
    font-size: 1rem;
  }
  div section a {
    flex-direction: row;
    font-size: 1rem;
  }
  div section a svg {
    margin-right: initial;
    margin-left: 0.5rem;
    transform: initial;
  }
  div :global(section > svg) {
    order: 1;
    align-self: center;
    margin: initial;
    max-width: 25em;
  }
}





</style>