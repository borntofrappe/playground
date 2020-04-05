<script>
  import Filler from './Filler.svelte';
  import Planet from "./Planet.svelte";

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

  // to each planet associate a series of satellites
  const planets = [
    {
      name: "blog",
      satellites: ["idea", "write", "edit", "review", "publish"],
    },
    {
      name: "freecodecamp",
      satellites: ["abacus", "backpack", "hat", "certificate", "briefcase"],
    },
    {
      name: "codepen",
      satellites: ["html", "css", "js", "react", "d3"],
    },
    {
      name: "twitter",
      satellites: ["like", "comment", "retweet", "directMessage", "notificationBell"],
    },
    {
      name: "github",
      satellites: ["code", "repository", "branch", "pullRequest", ""],
    },
    {
      name: "extra",
      satellites: ["world", "running", "tea", "gaming", "puzzle"],
    }
  ].map(({ name, satellites }, index) => ({
    name,
    satellites,
    colors: index % 2 === 0 ? palette.accent : palette.primary,
    tilt: index % 2 === 0 ? -20 : 20,
    clockwise: index % 2,
    shade: index % 2 === 0,
  }));

</script>

<style>
  :global(section) {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
</style>

{#each planets as {name, satellites, colors, tilt, clockwise, shade}}
  <Filler />
  <Planet {name} {satellites} {colors} {tilt} {clockwise} {shade} />
{/each}