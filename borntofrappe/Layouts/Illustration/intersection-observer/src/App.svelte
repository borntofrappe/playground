<script>
  import Filler from './Filler.svelte';
  import Illustration from "./Illustration.svelte";

  // to each planet associate a series of satellites
  const planets = [
    {
      name: "blog",
      satellites: ["search", "idea", "pencil", "copy", "share"]
    },
    {
      name: "freecodecamp",
      satellites: ["hat", "certificate", "book"]
    },
    {
      name: "codepen",
      satellites: ["html", "css", "js", "svg", "react", "d3"]
    },
    {
      name: "twitter",
      satellites: ["like", "comment", "retweet", "direct-message", "notification-bell", "bookmark"]
    },
    {
      name: "github",
      satellites: ["repository", "branch", "pull-request", "code"]
    }
  ];

</script>

{#each planets as {name, satellites}, i}
  <Filler />
  <Illustration planet="{name}" {satellites} index="{i}"  />
{/each}
