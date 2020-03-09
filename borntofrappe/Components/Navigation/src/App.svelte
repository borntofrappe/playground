<script>
  import Icons from "./Icons.svelte";
  // for the blog the link is actually to a relative path
  const links = [
    {
      name: "blog",
      href: "/blog"
    },
    {
      name: "codepen",
      href: "https://codepen.io/borntofrappe"
    },
    {
      name: "freecodecamp",
      href: "https://www.freecodecamp.org/borntofrappe"
    },
    {
      name: "twitter",
      href: "https://twitter.com/borntofrappe"
    },
    {
      name: "github",
      href: "https://github.com/borntofrappe"
    }
  ];

  const size = 470;
  const iconSize = 110;

  const { length } = links;

  const rings = length + 1;
  const ring = length + 1;
  const rounds = Array(rings)
    .fill("")
    .map((v, indexRings) => {
      const delay = indexRings * 0.1;
      const translate = (size / 2.5 / rings) * (indexRings + 1);
      const particles = ring * (indexRings + 1);

      const round = Array(particles)
        .fill("")
        .map((v, indexRing) => {
          const scale = (indexRings + 1) ** 0.4;
          const angle = 360 / particles;
          const rotate = indexRings % 2 === 0 ? angle / 2 + angle * indexRing : angle * indexRing;

          return {
            scale,
            rotate
          };
        });

      return {
        delay,
        translate,
        round
      };
    });
</script>

<nav>
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
        {#each rounds as {delay, translate, round, opacity}}
        <g class="loading" style="animation-delay: {delay}s;">
          {#each round as {scale, rotate}}
          <g transform="rotate({rotate}) translate(0 {translate}) rotate(-{rotate})">
            <circle r="1" transform="scale({scale})" />
          </g>
          {/each}
        </g>
        {/each}
      </g>
    </g>

    <!-- circle and check mark
    see **Loading Animation**
    -->
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
      {#each links as {name, href}, i}
      <g transform="rotate({360 / links.length * i}) translate(0 -{Math.floor(size / 3)}) rotate({360 / links.length * i * -1})">
        <a href="{href}" aria-label="{name}">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{iconSize / 2} -{iconSize / 2} {iconSize} {iconSize}" width="{Math.floor(size / 3)}" height="{Math.floor(size / 3)}" x="-{Math.floor(size / 6)}" y="-{Math.floor(size / 6)}">
            <g>
              <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
              <!-- rotate the text around the center -->
              <g transform="rotate({360 / links.length * i})" mask="url(#mask-text)">
                <g class="text">
                  <text fill="currentColor" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12">
                    <textPath href="#{360 / links.length * i > 90 && 360 / links.length * i < 270 ? 'path-cc' : 'path-c'}" startOffset="50%">
                      {name}
                    </textPath>
                  </text>
                </g>
              </g>

              <!-- re-scale the icon inside the wrapping path element -->
              <g transform="scale(0.35) translate(-{iconSize / 2} -{iconSize / 2})">
                <Icons icon="{name}" />
              </g>

              <!-- overlapping circle to expand the click area -->
              <circle r="50" opacity="0" />
            </g>
          </svg>
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
    align-items: center;
    /* see **Loading Animation** for the animation
    ease-in-out-back is added for the group showing the icons
    */
    --duration: 5s;
    --jump: 0.35s;
    --pop: 0.5s;
    --ease-out-back: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    --ease-in-out-back: cubic-bezier(0.68, -0.55, 0.265, 1.55);
    --ease-in-cubic: cubic-bezier(0.55, 0.055, 0.675, 0.19);
    --ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);
  }
  svg {
    max-width: 600px;
    width: 100vmin;
    height: auto;
    display: block;
    margin: auto;
  }
  svg .loading {
    animation: scale-back 5s 0.35s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    animation: scale-back var(--duration) var(--jump) var(--ease-out-back);
  }

  svg .loading circle,
  svg .loading path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }
  svg .loading circle {
    animation: remove-offset 5s cubic-bezier(0.55, 0.055, 0.675, 0.19) forwards;
    animation: remove-offset var(--duration) var(--ease-in-cubic) forwards;
  }
  svg .loading path {
    animation: remove-offset 0.35s 5s cubic-bezier(0.215, 0.61, 0.355, 1) forwards;
    animation: remove-offset var(--jump) var(--duration) var(--ease-out-cubic) forwards;
  }

  svg .loaded {
    animation: scale-up 0.5s 5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: scale-up var(--pop) var(--duration) var(--ease-out-back) both;
  }

  /* for the hover/focus transition, update the color and scale of the icon */
  a {
    color: inherit;
    transform: scale(0.85);
    transition: color 0.35s linear, transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: color var(--jump) linear, transform var(--jump) var(--ease-in-out-back);
    outline: none;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: hsl(340, 80%, 55%);
    transform: scale(1);
  }
  /* scale the group wrapping the text element to also show the label on hover/focus */
  a .text {
    transform: scale(0.5);
    transition: transform 0.35s cubic-bezier(0.68, -0.55, 0.265, 1.55);
    transition: transform var(--jump) var(--ease-out-back);
  }
  a:hover .text,
  a:focus .text {
    transform: scale(1);
  }

  @keyframes scale-up {
    from {
      transform: scale(0);
      opacity: 0;
      visibility: hidden;
    }
    to {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes scale-back {
    90%,
    92% {
      transform: scale(0.8);
    }
  }

  @keyframes remove-offset {
    to {
      stroke-dashoffset: 0;
    }
  }
</style>
