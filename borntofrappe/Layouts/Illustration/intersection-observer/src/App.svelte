<script>
  import Filler from './Filler.svelte';
  import Illustration from "./Illustration.svelte";

  // to each planet associate a series of satellites
  const planets = [
    {
      name: "blog",
      satellites: ["experiment", "research", "idea", "writing", "rocket"]
    },
    {
      name: "freecodecamp",
      satellites: ["hat", "certificate", "briefcase", "backpack", "abacus"]
    },
    {
      name: "codepen",
      satellites: ["html", "css", "js", "react", "d3"]
    },
    {
      name: "twitter",
      satellites: ["like", "comment", "retweet", "direct-message", "notification-bell"]
    },
    {
      name: "github",
      satellites: ["repository", "branch", "pull-request", "bug", "code"]
    }
  ];

</script>

{#each planets as {name, satellites}, i}
  <Filler />
  <Illustration planet="{name}" {satellites} index="{i}"  />
{/each}
