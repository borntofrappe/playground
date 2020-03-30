<script>
  import Galaxy from "./Galaxy.svelte";
  import { fade } from "svelte/transition";

  let loadingComplete = false;

  const names = [
    {
      name: "blog",
      href: "#"
    },
    {
      name: "codepen",
      href: "#"
    },
    {
      name: "freecodecamp",
      href: "#"
    },
    {
      name: "twitter",
      href: "#"
    },
    {
      name: "github",
      href: "#"
    }
  ];

</script>


<Galaxy {names} on:animationend="{() => {loadingComplete = true;}}" />

{#if loadingComplete}
  <section in:fade>
    <h2>
      Filler
    </h2>
    <p>The page should continue with the rest of the content</p>
  </section>

  <section in:fade>
    <h2>Most important</h2>
    <p>Provide a way to show the elements in a situation where the animation doesn't take place</p>
    <code>prefers-reduced-motion</code>
  </section>

  <section in:fade>
    <h2>Less important, but still</h2>
    <p>Ease the introduction of new elements by</p>
    <ul>
      <li>showing the vertical scrollbar by default</li>
      <li>adding a fade in transition for the sections</li>
    </ul>
  </section>
{/if}


<style>
  /* show the scrollbar by default to avoid the jump as the sections are introduced */
  :global(body) {
    overflow-y: scroll;
  }
  section {
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  section > * + * {
    margin-top: 1rem;
  }
</style>