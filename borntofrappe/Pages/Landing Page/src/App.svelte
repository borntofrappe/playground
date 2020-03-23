<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";
  import Navigation from "./Navigation.svelte";
  import Footer from "./Footer.svelte";
  import Illustration from "./Illustration.svelte";

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

      <!-- <p>{copy}</p> -->
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae itaque corporis aspernatur recusandae alias totam dolor magni. Totam dolor minus corporis! Officiis porro beatae aut! Sit asperiores rem voluptates cumque!</p>
      <a href="{link.href}">
        {link.copy}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42">
          <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
            <g transform="rotate({i % 2 === 0 ? -90 : 90})">
              <path stroke-width="0" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
              <g stroke-width="7">
                <path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
                <path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
                <path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" />
                <circle r="9" cy="-11" />
              </g>
              <path fill="none" stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
            </g>
          </g>
        </svg>
      </a>

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
    margin: 4rem auto;
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

  div section a {
    --transition-duration: 0.5s;
    font-family: "Maven Pro", sans-serif;
    font-weight: 600;
    font-size: 1.25rem;
    color: inherit;
    /* replace with pseudo element */
    outline: none;
    position: relative;
    /* margin-bottom: 2rem; */
  }

  div section a:after {
    outline: 0.1rem solid currentColor;
    position: absolute;
    top: 0%;
    left: 0%;
    width: 100%;
    height: 100%;
    content: "";
    opacity: 0;
  }
  div section a:focus:after {
    opacity: 1;
  }

  div section a svg {
    pointer-events: none;
    margin: 0.5em 0.5rem;
    position: absolute;
    top: 100%;
    left: 50%;
    width: 100%;
    height: 1.5em;
    transform: translate(-100%, -50%);
    transition: transform 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: transform var(--transition-duration) var(--transition-timing-function);
  }

  div section a:hover svg,
  div section a:focus svg {
    transform: translate(0%, -50%);
  }
  div section a svg > g {
    fill: hsl(0, 0%, 97%);
    fill: var(--body-background);
  }

  div section a:before {
    margin: 0.5em 0;
    position: absolute;
    top: 100%;
    left: 0%;
    height: 0.2rem;
    width: 100%;
    content: "";
    background: currentColor;
    transform-origin: 0% 50%;
    transform: translate(0%, -50%) scale(0);
    transition: transform 0.5s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    transition: transform var(--transition-duration) var(--transition-timing-function);

  }

  div section a:hover:before,
  div section a:focus:before {
      transform: translate(0%, -50%) scale(1);
  }

  @supports (shape-outside: circle()) {
    div :global(section > svg) {
      shape-outside: circle();
    }
    div:nth-of-type(even) {
      text-align: right;
    }
  }
  @media (min-width: 42rem) {
    div:nth-of-type(odd) section a svg {
      transform: translate(100%, -50%);
      right: 50%;
      left: initial;
    }

    div:nth-of-type(odd) section a:before {
        transform-origin: 100% 50%;
    }

    div:nth-of-type(odd) section a:hover svg,
    div:nth-of-type(odd) section a:focus svg {
      transform: translate(0%, -50%);
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