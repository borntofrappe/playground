<script>
  import getIcon from "./icons.js";
  // for the blog the link is actually to a relative path
  export let links;

  const size = 480;
  const iconSize = 100;

  const { length } = links;

  const round = length + 1;
  const rounds = length + 1;
  const particles = Array(rounds)
    .fill("")
    .map((v, indexRounds) => {
      const delay = indexRounds * 0.1;
      const translate = (size / 2.1 / rounds) * (indexRounds + 1);
      const scale = (indexRounds + 1) ** 0.2;

      const numberRounds = round * (indexRounds + 1);
      const rotation = Array(numberRounds)
        .fill("")
        .map((v, indexRound) => (round % 2 == 0 ? 360 / round / 2 + (360 / numberRounds) * indexRound : (360 / numberRounds) * indexRound));

      return {
        delay,
        translate,
        scale,
        rotation
      };
    });
</script>

<nav aria-label="Page navigation">
  <!-- wrapping SVG -->
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{size / 2} -{size / 2} {size} {size}" width="{size}" height="{size}">
    <defs>
      <!-- path elements describing the circles
      path-c and path-cc are used to map the text around the smaller `path` element
      the difference between the two boils down to the clockwise, counter-clockwise direction
      -->
      <path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
      <path id="path-c" d="M 0 40 a 40 40 0 0 1 0 -80 40 40 0 0 1 0 80" />
      <path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

      <!-- mask to show the text only as it exceeds the path element encircling the icons -->
      <mask id="mask-text">
        <!-- <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" /> -->
        <use transform="scale(2)" href="#path" fill="hsl(0, 0%, 100%)" />
        <use href="#path" fill="hsl(0, 0%, 0%)" />
      </mask>

      <!-- mask to hide the particles that would coincide with the icons -->
      <mask id="mask-icons">
        <rect x="-{size / 2}" y="-{size / 2}" width="{size}" height="{size}" fill="hsl(0, 0%, 100%)" />
        <circle r="46" fill="hsl(0, 0%, 0%)" />

        {#each links as link, i}
        <g transform="rotate({360 / links.length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / links.length * i * -1})">
          <use href="#path" transform="scale(1.4)" fill="hsl(0, 0%, 0%)" />
        </g>
        {/each}
      </mask>
    </defs>

    <!-- group describing the particles as a backdrop -->
    <g mask="url(#mask-icons)">
      <g class="loaded">
        {#each particles as {delay, translate, scale, rotation}}
        <g class="loading">
          {#each rotation as rotate}
          <g transform="rotate({rotate}) translate(0 {translate}) rotate(-{rotate})">
            <circle r="1" transform="scale({scale})" />
          </g>
          {/each}
        </g>
        {/each}
      </g>
    </g>

    <g class="loading">
      <g fill="none" stroke="currentColor" stroke-width="10" stroke-linecap="round" stroke-linejoin="round">
        <circle transform="scale(-1 1) rotate(-90)" r="46" stroke-width="8" pathLength="1" />
        <path d="M -20 -0 l 15 15 25 -25" stroke-width="10" pathLength="1" />
      </g>
    </g>

    <!-- group wrapping the different icons
    by translating the icons away from the center and scaling this group, you show them as if moving from the center
    -->
    <g class="loaded">
      <!-- wrap each icon in an anchor link to make the shape click-able and focus-able -->
      {#each links as link, i}
      <g transform="rotate({360 / links.length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / links.length * i * -1})">
        <a href="#{link}" aria-label="{link}">
          <g transform="translate(-{size / 6} -{size / 6})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{iconSize / 2} -{iconSize / 2} {iconSize} {iconSize}" width="{size / 3}" height="{size / 3}">
              <g transform="scale(0.9)">
                <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
                <!-- rotate the text around the center -->
                <g transform="rotate({360 / links.length * i})" mask="url(#mask-text)">
                  <g class="text">
                    <text fill="currentColor" font-family="monospace" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12">
                      <textPath href="#{360 / links.length * i > 90 && 360 / links.length * i < 270 ? 'path-cc' : 'path-c'}" startOffset="50%">
                        {link}
                      </textPath>
                    </text>
                  </g>
                </g>

                <!-- re-scale the icon inside the wrapping path element -->
                <g transform="translate(-{iconSize / 6} -{iconSize / 6})">
                  {@html getIcon(link, iconSize / 3)}
                </g>

                <!-- overlapping circle to expand the click area -->
                <circle r="50" opacity="0" />
              </g>
            </svg>
          </g>
        </a>
      </g>
      {/each}
    </g>
  </svg>
</nav>

<style>
  nav {
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-links: center;
    --transition-duration: 0.35s;
  }
  svg {
    max-width: 40em;
    width: 100vmin;
    height: auto;
    display: block;
    margin: auto;
  }
  text {
    font-family: "Fira Code", monospace;
  }

  /* for the hover/focus transition, update the color and scale of the icon */
  a {
    color: inherit;
    transform: scale(0.85);
    transition: color 0.35s linear, transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: color var(--transition-duration) linear, transform var(--transition-duration) var(--ease-in-out-back);
    outline: none;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: hsl(340, 80%, 55%);
    color: var(--accent-4);
    transform: scale(1);
  }
  /* scale the group wrapping the text element to also show the label on hover/focus */
  a .text {
    transform: scale(0.5);
    transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform var(--transition-duration) var(--ease-out-back);
  }
  a:hover .text,
  a:focus .text {
    transform: scale(1);
  }
</style>
