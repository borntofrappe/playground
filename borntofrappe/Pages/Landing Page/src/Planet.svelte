<script>
  import getIcon from "./icons.js";

  // svg appearance
  export let name;
  export let satellites = [];
  export let colors = ["hsl(0, 65%, 20%)", "hsl(0, 70%, 30%)", "hsl(0, 75%, 45%)", "hsl(2, 80%, 50%)", "hsl(0, 90%, 55%)", "hsl(-3, 92%, 65%)", "hsl(-5, 95%, 70%)", "hsl(-8, 95%, 80%)", "hsl(-15, 100%, 90%)"];
  export let tilt = 0;
  export let clockwise = Math.random() > 0.5;

  // intersection observer api
  // toggled a boolean according to whether or not the planet intersects with the window
  let planet;
  let observed = false;
  $: {
    if (window.IntersectionObserver && planet) {
      const observer = new IntersectionObserver(
        entries => {
          entries.forEach(entry => {
            observed = entry.isIntersecting;
          });
        },
        { threshold: 0 }
      );
      observer.observe(planet);
    }
  }
</script>

<svg bind:this="{planet}" class:clockwise class:observed style="color: {colors[4]};" viewBox="-50 -50 100 100" width="200" height="200">
  <!-- be sure to provide a unique id for the clipPath and mask element -->
  <defs>
    <clipPath id="clip-planet-{name}">
      <circle r="30" />
    </clipPath>

    <mask id="mask-satellites-{name}">
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
    <g clip-path="url(#clip-planet-{name})">
      <g transform="translate(0 -70)">
        {#each colors as color, index}
        <ellipse stroke="none" fill="{color}" cx="0" cy="70" rx="{35 + (15 / colors.length * index)}" ry="30" transform="scale({1 - (0.6 / colors.length * index)})" />
        {/each}
      </g>
    </g>
    <circle r="30" fill="none" stroke="{colors[colors.length - 1]}" stroke-width="0.2" />
  </g>

  <!-- orbit -->
  <g mask="url(#mask-satellites-{name})">
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

<style>
  svg {
    display: block;
    max-width: 28em;
    width: 100%;
    height: auto;
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
