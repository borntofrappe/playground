<script>
  import getIcon from "./icons.js";

  export let id = "";
  export let satellites = [];
  export let colors = ["hsl(340, 65%, 20%)", "hsl(340, 70%, 30%)", "hsl(340, 75%, 45%)", "hsl(342, 80%, 50%)", "hsl(340, 90%, 55%)", "hsl(337, 92%, 65%)", "hsl(335, 95%, 70%)", "hsl(332, 95%, 80%)", "hsl(325, 100%, 90%)"];
  export let tilt = 0;
  export let clockwise = Math.random() > 0.5;
  export let dark = true;

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
  <defs>
    <clipPath id="clip-planet-{id}">
      <circle r="30" />
    </clipPath>

    <mask id="mask-satellites-{id}">
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
    <g clip-path="url(#clip-planet-{id})">
      <g transform="translate(0 -70)">
        {#each colors as color, index}
        <ellipse stroke="none" fill="{color}" cx="0" cy="70" rx="{35 + (15 / colors.length * index)}" ry="30" transform="scale({1 - (0.6 / colors.length * index)})" />
        {/each}
      </g>
    </g>
    <circle r="30" fill="none" stroke="{dark ? colors[0] : colors[colors.length - 1]}" stroke-width="0.2" />
  </g>

  <!-- orbit -->
  <g mask="url(#mask-satellites-{id})">
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
