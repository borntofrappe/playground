<script>
  import Breadcrumbs from "./Breadcrumbs.svelte";
  import Galaxy from "./Galaxy.svelte";
  import Planet from "./Planet.svelte";
  import Link from "./Link.svelte";
  import Footer from "./Footer.svelte";

  import { fade } from "svelte/transition";

  let loadingComplete = false;
  let breadcrumbs = [];

  const palette = {
    primary: ["hsl(230, 30%, 10%)", "hsl(225, 40%, 20%)", "hsl(225, 50%, 30%)", "hsl(225, 55%, 45%)", "hsl(222, 60%, 50%)", "hsl(220, 75%, 60%)", "hsl(210, 80%, 70%)", "hsl(205, 90%, 80%)", "hsl(205, 100%, 90%)"],
    accent: ["hsl(340, 65%, 20%)", "hsl(340, 70%, 30%)", "hsl(340, 75%, 45%)", "hsl(342, 80%, 50%)", "hsl(340, 90%, 55%)", "hsl(337, 92%, 65%)", "hsl(335, 95%, 70%)", "hsl(332, 95%, 80%)", "hsl(325, 100%, 90%)"]
  };

  const planets = [
    {
      name: "blog",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo illum voluptatum cumque similique laborum voluptate nostrum ut molestiae, unde praesentium excepturi et, quibusdam incidunt aliquid qui adipisci vitae. Possimus?",
      link: {
        href: '/blog',
        copy: 'Go to blog',
      },
      satellites: ["idea", "write", "edit", "review", "publish"]
    },
    {
      name: "freecodecamp",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo illum voluptatum cumque similique laborum voluptate nostrum ut molestiae, unde praesentium excepturi et, quibusdam incidunt aliquid qui adipisci vitae. Possimus?",
      link: {
        href: 'https://www.freecodecamp.org/borntofrappe',
        copy: 'Admire certifications',
      },
      satellites: ["abacus", "backpack", "hat", "certificate", "briefcase"]
    },
    {
      name: "codepen",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo illum voluptatum cumque similique laborum voluptate nostrum ut molestiae, unde praesentium excepturi et, quibusdam incidunt aliquid qui adipisci vitae. Possimus?",
      link: {
        href: 'https://codepen.io/borntofrappe',
        copy: 'Browse demos',
      },
      satellites: ["html", "css", "js", "react", "d3"]
    },
    {
      name: "twitter",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo illum voluptatum cumque similique laborum voluptate nostrum ut molestiae, unde praesentium excepturi et, quibusdam incidunt aliquid qui adipisci vitae. Possimus?",
      link: {
        href: 'https://twitter.com/borntofrappe',
        copy: 'Check profile',
      },
      satellites: ["like", "comment", "retweet", "directMessage", "notificationBell"]
    },
    {
      name: "github",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo illum voluptatum cumque similique laborum voluptate nostrum ut molestiae, unde praesentium excepturi et, quibusdam incidunt aliquid qui adipisci vitae. Possimus?",
      link: {
        href: 'https://github.com/borntofrappe',
        copy: 'Explore history',
      },
      satellites: ["code", "repository", "branch", "pullRequest", ""]
    },
    {
      name: "almost forgot",
      copy: "My name is Gabriele Corti.<br/>Born and raised in Italy, I enjoyed a year in Germany, where I developed a lasting appreciation of the French language. Outside of VsCode, you'll find me running, nursing a cup of tea, or completing a video game.<br/>In that order.",
      satellites: ["world", "running", "tea", "gaming", "puzzle"]
    }
  ].map(({ name, copy, link, satellites }, index) => ({
    name: name.split(' ').join('-'),
    copy,
    link,
    satellites,
    colors: index % 2 === 0 ? palette.accent : palette.primary,
    tilt: index % 2 === 0 ? 20 : -20,
    clockwise: index % 2 === 0,
    shade: index % 2 === 0,
  }));

  const names = planets.filter(({link}) => link).map(({name}) => name);
</script>

{#if loadingComplete}
  <Breadcrumbs {breadcrumbs} />
{/if}

<Galaxy {names} on:animationend="{() => {loadingComplete = true;}}"/>

{#if loadingComplete}
  {#each planets as {name, copy, link, satellites, colors, tilt, clockwise, shade}}
    <div in:fade id="{name}">
      <section>
        <h2>{name.split('-').join(' ')}</h2>

        <Planet {name} {satellites} {colors} {tilt} {clockwise} {shade} />

        <p>{@html copy}</p>

        {#if link}
          <Link href="{link.href}" copy="{link.copy}" left="{clockwise}"/>
        {/if}
      </section>
    </div>
  {/each}

  <Footer />
{/if}



<style>
  :global(body) {
    overflow-y: scroll;
  }
  div {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    position: relative;
    scroll-margin-top: 20px;
  }
  div:before {
    margin-bottom: -1px;
    background: inherit;
    content: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40' width='100' height='40'%3E%3Cg stroke='none' fill='none'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
    -webkit-mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40' width='100' height='40'%3E%3Cg stroke='none' fill='hsl(0, 0%25, 0%25)'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
    mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40' width='100' height='40'%3E%3Cg stroke='none' fill='hsl(0, 0%25, 0%25)'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
    -webkit-mask-repeat: repeat-x;
    mask-repeat: repeat-x;
    -webkit-mask-position: 50% 0%;
    mask-position: 50% 0%;
    position: absolute;
    left: 0%;
    bottom: 100%;
    width: 100%;
    height: 20px;
  }
  div:nth-last-of-type(even) {
    color: hsl(0, 0%, 97%);
    color: var(--grey-0);
    background: hsl(230, 30%, 10%);
    background: var(--primary-8);
  }
  /* update the fill of the rocket element */
  div:nth-last-of-type(even) :global(a svg > g) {
    fill: hsl(230, 30%, 10%);
    fill: var(--primary-8);
  }
  div:nth-last-of-type(odd) {
    color: hsl(230, 30%, 10%);
    color: var(--primary-8);
    background: hsl(0, 0%, 97%);
    background: var(--grey-0);

    --accent-color: var(--primary-4);
  }

  div section {
    max-width: 42em;
    width: 90vw;
    margin: 2.5rem auto;
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
    margin: 1.5rem 0 1rem;
    font-size: 1.1rem;
  }

  div section :global(a) {
    font-size: 1.2rem;
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