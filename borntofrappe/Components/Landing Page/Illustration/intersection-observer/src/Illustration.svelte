<script>
  import getIcon from "./icons.js";

  // hard coded color palette
  const palette = {
    primary: ["hsl(230, 30%, 10%)", "hsl(225, 40%, 20%)", "hsl(225, 50%, 30%)", "hsl(225, 55%, 45%)", "hsl(222, 60%, 50%)", "hsl(220, 75%, 60%)", "hsl(210, 80%, 70%)", "hsl(205, 90%, 80%)", "hsl(205, 100%, 90%)"],
    accent: ["hsl(340, 65%, 20%)", "hsl(340, 70%, 30%)", "hsl(340, 75%, 45%)", "hsl(342, 80%, 50%)", "hsl(340, 90%, 55%)", "hsl(337, 92%, 65%)", "hsl(335, 95%, 70%)", "hsl(332, 95%, 80%)", "hsl(325, 100%, 90%)"]
  };

  // svg appearance
  export let planet;
  export let satellites = [];

  // based on the index, switch between the two color palette, two tilt, two rotations
  export let index;
  const colors = index % 2 !== 0 ? palette.primary : palette.accent;
  const tilt = index % 2 === 0 ? 20 : -20;
  const clockwise = index % 2 === 0;

  // intersection observer api
  // toggled a boolean according to whether or not the illustration intersects with the window
  let illustration;
  let observed = false;
  $: {
    if (window.IntersectionObserver && illustration) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            observed = entry.isIntersecting;
          });
        },
        { threshold: 0 }
      );
      observer.observe(illustration);
    }
  }
</script>

<style>
  svg {
    display: block;
    width: 100vmin;
    height: auto;
    max-width: 30em;
  }

  svg.observed .rotate {
    animation-play-state: running;
  }
  svg.clockwise .rotate {
    animation-direction: reverse;
  }
  .rotate {
    animation: rotate 100s linear infinite;
    animation-play-state: paused;
  }

  @keyframes rotate {
    to {
      transform: rotate(-1turn);
    }
  }
</style>

<section>
  <svg bind:this="{illustration}" class:clockwise class:observed style="color: {colors[4]};" viewBox="-50 -50 100 100" width="200" height="200">
    <!-- be sure to provide a unique id for the clipPath and mask element -->
    <defs>
      <clipPath id="clip-planet-{planet}">
        <circle r="30" />
      </clipPath>

      <mask id="mask-satellites-{planet}">
        <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
        <g fill="hsl(0, 0%, 0%)">
          <g class="rotate">
            {#each satellites as satellite, index}
            <g transform="rotate({360 / satellites.length * index}) translate(0 -42) rotate({360 / satellites.length * index * -1})">
              <circle r="7.5" />
            </g>
            {/each}
          </g>
        </g>
      </mask>
    </defs>

    <!-- planet -->
    <g transform="rotate({tilt})">
      <g clip-path="url(#clip-planet-{planet})">
        <g transform="translate(0 -70)">
          {#each colors as color, index}
          <ellipse stroke="none" fill="{color}" cx="0" cy="70" rx="{35 + (15 / colors.length * index)}" ry="30" transform="scale({1 - (0.6 / colors.length * index)})" />
          {/each}
        </g>
      </g>
      <circle r="30" fill="none" stroke="{colors[colors.length - 1]}" stroke-width="0.2" />
    </g>

    <!-- orbit -->
    <g mask="url(#mask-satellites-{planet})">
      <circle class="rotate" r="42" stroke-dasharray="1 2" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="0.5" />
    </g>

    <!-- satellites -->
    <g class="rotate">
      {#each satellites as satellite, index}
      <g transform="rotate({360 / satellites.length * index}) translate(0 -42) rotate({360 / satellites.length * index * -1})">
        <g transform="scale(-1 1)">
          <g class="rotate">
            <g transform="scale(-1 1)">
              <circle r="7.5" fill="none" stroke-width="1" stroke="currentColor" />
              <g transform="translate(-4 -4)">
                {@html getIcon(satellite, 8)}
              </g>
            </g>
          </g>
        </g>
      </g>
      {/each}
    </g>
  </svg>
</section>
