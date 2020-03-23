<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";
  import Navigation from "./Navigation.svelte";
  import Footer from "./Footer.svelte";
  import Illustration from "./Illustration.svelte";
  import Link from "./Link.svelte";

  let breadcrumbs = [];

  const planets = [
    {
      name: "blog",
      copy: "Where I take a moment to save my journey as an aspiring developer, fledging designer, endless learner and long distance runner.",
      link: {
        href: '/blog',
        copy: 'Go to blog',
      },
      satellites: ["idea", "write", "erase", "review", "publish"]
    },
    {
      name: "freecodecamp",
      copy: "Where I started my journey as a self-taught web developer. With HTML, CSS, and gradually levelling up to JavaScript, React, and even a touch of back-end node.",
      link: {
        href: 'https://www.freecodecamp.org/borntofrappe',
        copy: 'Admire certifications',
      },
      satellites: ["abacus", "backpack", "hat", "certificate", "briefcase"]
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
      satellites: ["code", "repository", "branch", "pullRequest", ""]
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

      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque corporis aspernatur recusandae alias totam dolor magni. Totam dolor minus corporis! Officiis porro beatae aut! Sit asperiores rem voluptates cumque!</p>

      <Link href="{link.href}" copy="{link.copy}" linkLeft="{i % 2 === 0}"/>
    </section>
  </div>
{/each}

<Footer />

<style>
  :global(body) {
    overflow-x: hidden;
  }
  div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  div:nth-of-type(even) {
    --accent-color: var(--primary-4);
  }

  div section {
    max-width: 42em;
    width: 90vw;
    margin: 2rem auto;
  }

  div section h2 {
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
    color: hsl(342, 80%, 50%);
    color: var(--accent-color);
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

  div section :global(a) {
    font-size: 1.25rem;
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
      font-size: 2.5rem;
    }
    div section p {
      text-align: initial;
      font-size: 1rem;
      margin: 1rem 0;
    }
    div section :global(a) {
      font-size: 1rem;
    }
    div :global(section > svg),
    div:nth-of-type(even) :global(section > svg) {
      order: 1;
      align-self: center;
      margin: initial;
      max-width: 25em;
    }
  }

</style>