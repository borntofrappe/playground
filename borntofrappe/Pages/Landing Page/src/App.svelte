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
    primary: [
      "hsl(220, 100%, 5%)",
      "hsl(218, 100%, 17%)",
      "hsl(216, 98%, 25%)",
      "hsl(215, 96%, 32%)",
      "hsl(214, 95%, 36%)",
      "hsl(212, 92%, 43%)",
      "hsl(210, 83%, 53%)",
      "hsl(208, 88%, 62%)",
      "hsl(206, 93%, 73%)",
      "hsl(204, 100%, 86%)",
      "hsl(202, 100%, 95%)"
    ],
    accent: [
      "hsl(350, 100%, 8%)",
      "hsl(347, 100%, 19%)",
      "hsl(345, 95%, 27%)",
      "hsl(345, 96%, 33%)",
      "hsl(342, 92%, 39%)",
      "hsl(340, 85%, 46%)",
      "hsl(340, 90%, 55%)",
      "hsl(339, 90%, 67%)",
      "hsl(336, 93%, 77%)",
      "hsl(335, 100%, 86%)",
      "hsl(330, 100%, 95%)"
    ]
  };

  const planets = [
    {
      name: "blog",
      copy: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque quo illum voluptatum cumque similique laborum voluptate nostrum ut molestiae, unde praesentium excepturi et, quibusdam incidunt aliquid qui adipisci vitae. Possimus?",
      link: {
        href: '/blog',
        copy: 'Look for articles',
      },
      satellites: ["idea", "write", "edit", "review", "publish"]
    },
    {
      name: "freecodecamp",
      copy: "HTML, CSS, JavaScript, React, D3, even a touch of Node, Express and back-end development; these challenges lit a fire that burns to this day.<br/>Looking forward, I now hope to contribute back to the ever helpful curriculum as I learn the Python language.",
      link: {
        href: 'https://www.freecodecamp.org/borntofrappe',
        copy: 'Admire certifications',
      },
      satellites: ["abacus", "backpack", "hat", "certificate", "briefcase"]
    },
    {
      name: "codepen",
      copy: "Practice, practice, practice.",
      link: {
        href: 'https://codepen.io/borntofrappe',
        copy: 'Browse demos',
      },
      satellites: ["html", "css", "js", "react", "d3"]
    },
    {
      name: "twitter",
      copy: "I share my progress almost daily.<br/>It started as a way to keep myself accountable, but with time, I realized people would actually appreciate my continuous efforts.<br/>I try to keep up with expectations, and that has certainly helped me to write more and better code.",
      link: {
        href: 'https://twitter.com/borntofrappe',
        copy: 'Be sure to follow me',
      },
      satellites: ["like", "comment", "retweet", "directMessage", "notificationBell"]
    },
    {
      name: "github",
      copy: "Most of the code I produce is public and available for all to review, fork and improve.<br/>I take joy when I have the chance to participate in open source projects, and with similar pride, I show off the stickers, shirts and general swag awarded for these contributions.",
      link: {
        href: 'https://github.com/borntofrappe',
        copy: 'Double-check history',
      },
      satellites: ["code", "repository", "branch", "pullRequest", ""]
    },
    {
      name: "almost forgot",
      copy: "My name is Gabriele Corti.<br/>Born and raised in Italy, I enjoyed a year in Germany, where I developed a lasting appreciation of the French language. Outside of VsCode, you'll find me running, nursing a cup of tea, or enjoying a dated video game.<br/>In that order.",
      satellites: ["world", "running", "tea", "gaming", "puzzle"]
    }
  ].map(({ name, copy, link, satellites }, index) => ({
    id: name.split(' ').join('-'),
    name,
    copy,
    link,
    satellites,
    colors: index % 2 === 0 ? palette.accent : palette.primary,
    tilt: index % 2 === 0 ? 20 : -20,
    clockwise: index % 2 === 0,
    dark: index % 2 === 0,
  }));

  const names = planets.filter(({link}) => link).map(({name}) => name.toLowerCase());
</script>

{#if loadingComplete}
  <Breadcrumbs {breadcrumbs} />
{/if}

<Galaxy {names} on:animationend="{() => {loadingComplete = true;}}"/>

{#if loadingComplete}
  {#each planets as {id, name, copy, link, satellites, colors, tilt, clockwise, dark}}
    <div in:fade id="{name}" class:dark>
      <section>
        <h2>{name}</h2>

        <Planet {id} {satellites} {colors} {tilt} {clockwise} {dark} />

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
  div {
    color: hsl(215, 22%, 5%);
    color: var(--grey-0);
    background: hsl(215, 10%, 97%);
    background: var(--grey-10);
  }

  div:not(.dark) :global(::selection) {
    color: hsl(215, 10%, 97%);
    color: var(--grey-10);
    background-color: hsl(222, 60%, 50%);
    background-color: var(--primary-4);
  }

  div:not(.dark) :global(a),
  div:not(.dark) :global(a) {
    outline-color: hsl(222, 60%, 50%);
    outline-color: var(--primary-4);
  }

  div:not(.dark) :global(a:hover),
  div:not(.dark) :global(a:focus) {
    color: hsl(222, 60%, 50%);
    color:  var(--primary-4);
  }

  div.dark {
    color: hsl(215, 10%, 97%);
    color: var(--grey-10);
    background: hsl(215, 22%, 5%);
    background: var(--grey-0);
  }

  div.dark :global(a svg > g) {
    fill: hsl(215, 22%, 5%);
    fill: var(--grey-0);
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
    float: right;
    margin: 2.5rem 0;
    margin-left: 2rem;
    display: block;
    max-width: 28em;
    width: 100%;
    height: auto;
    color: hsl(342, 80%, 50%);
    color: var(--accent-color);
  }
  div.dark :global(section > svg) {
    float: left;
    margin-left: initial;
    margin-right: 2.5rem;
  }

  div section p {
    line-height: 2;
    margin: 3rem 0 1rem;
    font-size: 1.1rem;
  }

  div section :global(a) {
    font-size: 1.2rem;
  }

  @supports (shape-outside: circle()) {
    div :global(section > svg) {
      shape-outside: circle();
    }
    div {
      text-align: right;
    }
    div.dark {
      text-align: initial;
    }
  }

  @media (max-width: 48rem) {
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
    div.dark :global(section > svg) {
      order: 1;
      align-self: center;
      margin: initial;
      max-width: 25em;
    }
  }

</style>