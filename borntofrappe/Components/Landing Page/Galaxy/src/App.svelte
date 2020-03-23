<script>
  import getIcon from "./icons.js";

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

  const size = 500;
  const iconSize = 100;

  const { length } = links;

  // particles
  const round = length + 1;
  const rounds = length + 1;
  const particles = Array(rounds)
    .fill("")
    .map((v, indexRounds) => {
      const delay = indexRounds * 0.2;
      const translate = (size / 2.5 / rounds) * (indexRounds + 1);
      const scale = (indexRounds + 1) ** 0.3;

      const numberRounds = round * (indexRounds + 1);
      const rotation = Array(numberRounds)
        .fill("")
        .map((v, indexRound) => (round % 2 === 0 ? 360 / round / 2 + (360 / numberRounds) * indexRound : (360 / numberRounds) * indexRound));

      return {
        delay,
        translate,
        scale,
        rotation
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
      <path id="path-c" d="M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78" />
      <path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

      <!-- mask to show the text only as it exceeds the path element encircling the icons -->
      <mask id="mask-text">
        <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
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
        <g>
          {#each rotation as rotate}
          <g transform="rotate({rotate}) translate(0 {translate}) rotate(-{rotate})">
            <circle r="1" transform="scale({scale})" />
          </g>
          {/each}
        </g>
        {/each}
      </g>
    </g>

    <!-- custom logo
    see **Animation**
    -->
    <g class="loading">
      <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
        <circle r="46" />
        <g id="logo">
          <path id="accent" d="M -10 -15 q 0 -8 -8 -10" stroke-dasharray="14.01 18.5" stroke-dashoffset="-4.5" />
          <path id="b" d="M -10 -15 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36" stroke-dasharray="114.2 146.28" stroke-dashoffset="-9.145" />
        </g>
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
          <g transform="translate(-{size / 6} -{size / 6})">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="-{iconSize / 2} -{iconSize / 2} {iconSize} {iconSize}" width="{size / 3}" height="{size / 3}">
              <g transform="scale(0.9)">
                <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
                <!-- rotate the text around the center -->
                <g transform="rotate({360 / links.length * i})" mask="url(#mask-text)">
                  <g class="text">
                    <text fill="currentColor" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12" font-family="monospace">
                      <textPath href="#{360 / links.length * i > 90 && 360 / links.length * i < 270 ? 'path-cc' : 'path-c'}" startOffset="50%">
                        {name}
                      </textPath>
                    </text>
                  </g>
                </g>

                <!-- size the icon to cover a portion of the available viewBox
              translate negative half to center
              -->
                <g transform="translate(-{iconSize / 6} -{iconSize / 6})">
                  {@html getIcon(name, iconSize / 3)}
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
    align-items: center;
    /* see **Loading Animation** for the animation */
    --main-animation-duration: 4.5s;
    --main-animation-delay: 0.35s;
    --support-animation-duration: 0.5s;
    --support-animation-delay: var(--main-animation-duration);
  }
  svg {
    max-width: 600px;
    width: 100vmin;
    height: auto;
    display: block;
    margin: auto;
  }
  svg text {
    font-family: "Fira Code", monospace;
  }
  svg .loading {
    animation: transform-icon 4.5s 0.35s cubic-bezier(0.68, -0.5, 0.265, 1.55);
    animation: transform-icon var(--main-animation-duration) var(--main-animation-delay) var(--ease-in-out-back) both;
  }

  svg .loading #logo {
    animation: transform-logo 4.5s 0.35s cubic-bezier(0.68, -0.5, 0.265, 1.55);
    animation: transform-logo var(--main-animation-duration) var(--main-animation-delay) var(--ease-in-out-back) both;
  }

  svg .loading #b {
    animation: stroke-b 4.5s 0.35s cubic-bezier(0.445, 0.05, 0.55, 0.95);
    animation: stroke-b var(--main-animation-duration) var(--main-animation-delay) var(--ease-in-out-sine) both;
  }

  svg .loading #accent {
    animation: stroke-accent 4.5s 0.35s cubic-bezier(0.215, 0.61, 0.355, 1);
    animation: stroke-accent var(--main-animation-duration) var(--main-animation-delay) var(--ease-out-cubic) both;
  }

  svg .loaded {
    will-change: transform;
    animation: transform-icons 0.5s 4.5s cubic-bezier(0.175, 0.885, 0.32, 1.275) both;
    animation: transform-icons var(--support-animation-duration) var(--support-animation-delay) var(--ease-out-back) both;
  }

  /* for the hover/focus transition, update the color and scale of the icon */
  a {
    color: inherit;
    transform: scale(0.85);
    transition: color 0.35s linear, transform 0.35s cubic-bezier(0.68, -0.5, 0.265, 1.55);
    transition: color var(--transition-duration) linear, transform var(--transition-duration) var(--ease-in-out-back);
    outline: none;
    text-decoration: none;
  }
  a:hover,
  a:focus {
    color: hsl(342, 80%, 50%);
    color: var(--accent-color);
    transform: scale(1);
  }
  /* scale the group wrapping the text element to also show the label on hover/focus */
  a .text {
    transform: scale(0.5);
    transition: transform 0.35s cubic-bezier(0.68, -0.5, 0.265, 1.55);
    transition: transform var(--transition-duration) var(--ease-out-back);
  }
  a:hover .text,
  a:focus .text {
    transform: scale(1);
  }

  @keyframes transform-icons {
    0%,
    20% {
      transform: scale(0);
      opacity: 0;
      visibility: hidden;
    }
    100% {
      transform: scale(1);
      opacity: 1;
      visibility: visible;
    }
  }

  @keyframes transform-icon {
    90% {
      transform: scale(0.8) rotate(20deg);
    }
  }

  @keyframes transform-logo {
    90% {
      transform: scale(0.6) rotate(5deg);
    }
  }

  @keyframes stroke-b {
    0%,
    20% {
      stroke-dashoffset: 0;
    }
    92% {
      stroke-dashoffset: 114.2;
    }
    95%,
    100% {
      stroke-dashoffset: -9.142;
    }
  }

  @keyframes stroke-accent {
    0%,
    94.5% {
      stroke-dashoffset: 14.01;
    }
    98%,
    100% {
      stroke-dashoffset: -4.5;
    }
  }
</style>
