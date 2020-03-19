<script>
  import Filler from './Filler.svelte';
  import Illustration from "./Illustration.svelte";

  // to each planet associate a series of satellites
  const planets = [
    {
      planet: "blog",
      satellites: ["experiment", "research", "idea", "writing", "rocket"]
    },
    {
      planet: "freecodecamp",
      satellites: ["hat", "certificate", "briefcase", "backpack", "abacus"]
    },
    {
      planet: "codepen",
      satellites: ["html", "css", "js", "react", "d3"]
    },
    {
      planet: "twitter",
      satellites: ["like", "comment", "retweet", "directMessage", "notificationBell"]
    },
    {
      planet: "github",
      satellites: ["repository", "branch", "pullRequest", "bug", "code"]
    }
  ];

</script>

<!-- filler component just to add whitespace around the illustrations -->
{#each planets as {planet, satellites}, i}
  <Filler />
  <!-- index changes the appearance of the illustration (color, tilt, rotation) -->
  <Illustration {planet} {satellites} index="{i}"  />
{/each}
