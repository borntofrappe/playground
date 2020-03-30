<script>
  import Filler from './Filler.svelte';
  import Planet from "./Planet.svelte";

  const palette = {
    primary: ["hsl(230, 30%, 10%)", "hsl(225, 40%, 20%)", "hsl(225, 50%, 30%)", "hsl(225, 55%, 45%)", "hsl(222, 60%, 50%)", "hsl(220, 75%, 60%)", "hsl(210, 80%, 70%)", "hsl(205, 90%, 80%)", "hsl(205, 100%, 90%)"],
    accent: ["hsl(340, 65%, 20%)", "hsl(340, 70%, 30%)", "hsl(340, 75%, 45%)", "hsl(342, 80%, 50%)", "hsl(340, 90%, 55%)", "hsl(337, 92%, 65%)", "hsl(335, 95%, 70%)", "hsl(332, 95%, 80%)", "hsl(325, 100%, 90%)"]
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
    colors: index === 0 ? palette.accent : palette.primary,
    tilt: index % 2 === 0 ? 20 : -20,
    clockwise: index % 2,
    shade: index % 2 === 0,
  }));

</script>

{#each planets as {name, satellites, colors, tilt, clockwise}}
  <Filler />
  <Planet {name} {satellites} {colors} {tilt} {clockwise} {shade} />
{/each}

<!-- <Planet  /> -->