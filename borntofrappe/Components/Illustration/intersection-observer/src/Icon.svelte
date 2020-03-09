<script>
  import getIcon from "./icons.js";
  export let icon;
  export let size = 32;

  // the icons are stored in an object and in camelCase notation
  // this might change, but currently, it means I need a couple of methods to convert between
  $: camelCaseIcon =
    icon &&
    icon
      .split("-")
      .map((v, index) => (index === 0 ? v : `${v[0].toUpperCase()}${v.slice(1)}`))
      .join("");

  //  replace the default width and height with the input size
  $: svg = getIcon(camelCaseIcon) && getIcon(camelCaseIcon).replace(/width="\d+" height="\d+"/, `width="${size}" height="${size}"`);
</script>

{#if svg} {@html svg} {:else}

<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="{size}" height="{size}">
  <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round">
    <g transform="scale(0.7)">
      <g stroke-width="8" fill="currentColor">
        <path d="M -0 -18 h 9 a 15 15 0 0 1 15 15 v 15 a 24 24 0 0 1 -48 0 v -15 a 15 15 0 0 1 15 -15 h 9" />
        <path d="M -0 -31 h 12 q 5 0 5 -5 0 -10 -17 -10 -17 0 -17 10 0 5 5 5 h 12" />
      </g>
      <g stroke-width="10" fill="none">
        <path d="M -25 14 h -17" />
        <path d="M -22 0 a 17 17 0 0 1 -17 -17" />
        <path d="M -15 27 a 17 17 0 0 0 -17 17" />
        <g transform="scale(-1 1)">
          <path d="M -25 14 h -17" />
          <path d="M -22 0 a 17 17 0 0 1 -17 -17" />
          <path d="M -15 27 a 17 17 0 0 0 -17 17" />
        </g>
      </g>
    </g>
  </g>
</svg>

{/if}
