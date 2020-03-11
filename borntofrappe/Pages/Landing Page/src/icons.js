// create the object with a script, using the name of each file in camelCase
const icons = {
  blog: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none">
    <g stroke-width="8">
      <path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" />
      <path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" />
    </g>
    <g stroke-width="6">
      <path d="M -10 -20 h 20" />
      <path d="M -10 -8 h 10" />
      <path d="M -10 4 h 15" />
      <path d="M -10 16 h 5" />
    </g>
  </g>
</svg>`,
freecodecamp: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
<g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round">
  <path d="M 30 -35 c 21 20 21 50 0 70" />
  <path transform="scale(-1 1)" d="M 30 -35 c 21 20 21 50 0 70" />
  <g transform="translate(0 30)" stroke-linejoin="round">
    <path d="M 20 -20 a 20 20 0 0 1 -40 0 q 0 -10 10 -20 t 0 -20 q 15 17 12.5 35 q 10 0 12.5 -15 q 5 11.25 5 20" />
  </g>
</g>
</svg>`,
codepen: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
<g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" fill="none">
  <path d="M 0 -40 l -46 25 46 25 46 -25 z" />
  <path d="M 0 -40 v 30" />
  <path transform="translate(0 50)" d="M 0 -40 v 30" />
  <path transform="translate(46 25)" d="M 0 -40 v 30" />
  <path transform="translate(-46 25)" d="M 0 -40 v 30" />
  <path transform="translate(0 30)" d="M 0 -40 l -46 25 46 25 46 -25 z" />
</g>
</svg>`,
twitter: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
<g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
  <path d="M -39 30.5 c 40 20 75 0 75 -48 l 8 -8 -12 -2 a 10 10 0 0 0 -32.5 12 q -20 5 -40 -15" />
  <path stroke-width="7" d="M -40.5 -30.5 q -5 20 14 26 -9 0 -18 -5 0 20 23 18 -10 4 -22 0 0 12 28 14 -10 6 -23.5 8" />
</g>
</svg>`,
github: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
<g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
  <path stroke-width="8" d="M 0 11 h -17 a 18 18 0 0 1 -18 -18 q 0 -8 5 -16 q -6 -10 0 -18 q 12 0 18 6 a 24 24 0 0 1 24 0 q 6 -6 18 -6 q 6 8 0 18 q 5 8 5 16 a 18 18 0 0 1 -18 18 h -17" />
  <path stroke-width="6" d="M -12 11 q -10 0 -10 14 q 0 8 -8 14 q 20 0 20 -16 v 4 q 0 10 -6 16 q 16 0 16 -15 v -4 v 4 q 0 15 16 15 q -6 0 -6 -16 v -4 q 0 16 20 16 q -8 0 -8 -14 q 0 -14 -10 -14" />
</g>
</svg>`,
  research: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <g stroke-width="8">
        <path d="M 36 -42 h -25 m -39 59 v 19 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -68 a 10 10 0 0 0 -10 -10" />
        <circle r="25" cx="-21" cy="-21" />
        <path d="M 22 22 l -18 -18" />
      </g>
      <path stroke-width="4" d="M 5 5 l -5 -5" />
      <g stroke-width="7">
        <path d="M -12 -20 h 4 m 24 0 h 12" />
        <path d="M 18 0 h 10" />
        <path d="M -12 20 h 15" />
      </g>
    </g>
  </svg>`,
  experiment: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <g stroke-width="8">
        <path d="M -18 -46 h 36" />
        <path d="M 10 -42 v 28 l 20 30 c 8 10 15 30 0 30 h -60 c -15 0 -8 -20 0 -30 l 20 -30 v -28" />
      </g>
      <path stroke-width="7" d="M -30 18 c 30 -18 30 18 60 0" />
    </g>
  </svg>`,
  idea: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M -16 14 a 32 32 0 1 1 32 0 v 3 a 8 8 0 0 1 -8 8 h -16 a 8 8 0 0 1 -8 -8 z" />
      <g stroke-width="7">
        <path d="M -12 28 h 24" />
        <path fill="currentColor" d="M -12 37.5 h 24 m -3 0 a 9 9 0 0 1 -18 0" />
      </g>
    </g>
  </svg>`,
  rocket: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <g transform="rotate(45)">
        <path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />

        <g stroke-width="7">
          <path d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path transform="scale(-1 1)" d="M 23 6 h 2 a 12 12 0 0 1 12 12 v 6 h -21" />
          <path d="M 0 24 c -10 5 -12 16 0 22.5 c 12 -6.5 10 -17.5 0 -22.5" />
          <circle r="9" cy="-11" />
        </g>
      </g>
    </g>
  </svg>`,
  writing: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <g stroke-width="8">
        <path d="M 16.5 -42 h -52.5 a 10 10 0 0 0 -10 10 v 68 a 10 10 0 0 0 10 10 h 54 a 10 10 0 0 0 10 -10 v -17.5" />
        <path d="M 29 -35.5 l 17 17 -38 38 h -17 v -17 l 38 -38" />
      </g>
      <g stroke-width="7">
        <path d="M -30 -20 h 25" />
        <path d="M -30 0 h 10" />
        <path d="M -30 20 h 10" />
      </g>
    </g>
  </svg>`,

  hat: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path stroke-width="8" d="M 0 -26 l -46 16 46 16 46 -16 z" />
      <g stroke-width="7">
        <path d="M -26 -1 v 20 a 52 52 0 0 0 52 0 v -20" />
        <path fill="currentColor" d="M 40 -4 v 25 l 5 5 a 10 10 0 0 1 -10 0 l 5 -5" />
      </g>
    </g>
  </svg>`,
  certificate: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path stroke-width="8" d="M -46 -32 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -16 m -44 0 h -16 a 8 8 0 0 1 -8 -8 v -54" />
      <g stroke-width="7">
        <path d="M -25 -18 h 50" />
        <circle cx="0" cy="13" r="15" />
        <path d="M -10 26 v 16.5 l 10 -5 10 5 v -16.5" />
      </g>
    </g>
    <g fill="currentColor" stroke="none">
      <circle r="8" cx="-40" cy="-34" />
      <circle transform="scale(-1 1)" r="8" cx="-40" cy="-34" />
      <circle r="8" cx="-40" cy="24" />
      <circle transform="scale(-1 1)" r="8" cx="-40" cy="24" />
    </g>
  </svg>`,

  briefcase: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path stroke-width="8" d="M -46 -20 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 z" />
      <g stroke-width="7">
        <path d="M -46 -8 a 80 80 0 0 0 92 0" />
        <path d="M -20 -28 v -8 a 8 8 0 0 1 8 -8 h 24 a 8 8 0 0 1 8 8 v 8" />
        <path d="M -8 4 h 16 v 16 h -16 z" />
      </g>
    </g>
  </svg>`,

  abacus: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <g stroke-width="8">
        <path d="M -42 30 h 84 a 4 4 0 0 1 0 8 h -84 a 4 4 0 0 1 0 -8" />
        <path d="M -38 30 v -64" />
        <path transform="scale(-1 1)" d="M -38 30 v -64" />
      </g>
      <g stroke-width="6">
        <g>
          <circle cx="-4" cy="-18" r="7" />
          <circle cx="17" cy="-18" r="7" />
          <path d="M -38 -18 h 25 m 18 0 h 3 m 18 0 h 10" />
        </g>
        <g transform="translate(0 25) scale(-1 1)">
          <circle cx="-4" cy="-18" r="7" />
          <circle cx="17" cy="-18" r="7" />
          <path d="M -38 -18 h 25 m 18 0 h 3 m 18 0 h 10" />
        </g>
      </g>
    </g>
  </svg>`,
  backpack: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round">
      <path stroke-width="8" d="M -33 0 a 33 33 0 0 1 66 0 v 38 a 8 8 0 0 1 -8 8 h -50 a 8 8 0 0 1 -8 -8 z" />
      <g stroke-width="7">
        <path d="M -11 -35.5 a 11 11 0 0 1 22 0" />
        <path d="M -17 -2 h 34 v 30 h -34 z m 0 18 h 30" />
        <path d="M -33 5 h -5 q -8 0 -8 20 a 8 8 0 0 0 8 8 h 5" />
        <path transform="scale(-1 1)" d="M -33 5 h -5 q -8 0 -8 20 a 8 8 0 0 0 8 8 h 5" />
      </g>
    </g>
  </svg>`,
  html: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-.65 11.051H-14.3l.65 11.049H24.7l-1.95 33.15L0 32.5l-22.75-9.75-.65-11.051h11.051l.325 5.525L0 22.426l12.025-5.202L13 .65h-37.05L-26-32.5z" />
  </svg>`,
  css: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-3.25 55.25L0 32.5l-22.75-9.75-.65-11.051h11.05l.325 5.525L0 22.426l12.025-5.202L12.999.65h-37.05L-24.7-10.4h38.35l.65-11.05h-39.65L-26-32.5z" />
  </svg>`,
  js: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <path
      fill="currentColor"
      d="M-50-50V50h39c-8.777 0-16-7.223-16-16v-5h10v5c0 3.373 2.627 6 6 6s6-2.627 6-6V0H5v34c0 8.777-7.223 16-16 16h21V40h15c2.82 0 5-2.18 5-5s-2.18-5-5-5c-8.225 0-15-6.775-15-15S16.775 0 25 0h13v10H25c-2.82 0-5 2.18-5 5s2.18 5 5 5c8.225 0 15 6.775 15 15s-6.775 15-15 15h25V-50H-50z"
    />
  </svg>`,
  react: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g stroke="currentColor" fill="none" stroke-width="8">
      <ellipse transform="rotate(30)" rx="18" ry="46" />
      <ellipse transform="rotate(-30)" rx="18" ry="46" />
      <ellipse transform="rotate(90)" rx="18" ry="46" />
    </g>
    <circle r="8" fill="currentColor" />
  </svg>`,
  d3: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 100 100">
    <path
      d="M38.461 5A54.67 54.67 0 0158.69 25h13.811c4.26 0 7.5 3.24 7.5 7.5s-3.24 7.5-7.5 7.5h-7.873a53.544 53.544 0 011.373 12c0 2.717-.207 5.388-.6 8h7.1c4.26 0 7.5 3.24 7.5 7.5s-3.24 7.5-7.5 7.5H60.81a54.598 54.598 0 01-16.268 20h27.959c15.069 0 27.5-12.431 27.5-27.5 0-6.656-2.52-12.717-6.527-17.5C97.48 45.217 100 39.156 100 32.5c0-15.069-12.431-27.5-27.5-27.5H38.462z"
      fill="currentColor"
    />
    <path d="M0 15h10a35 35 0 010 70H0" fill="none" stroke="currentColor" stroke-width="20" />
  </svg>`,

  like: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g transform="scale(0.9)" stroke-width="8.8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path d="M 0 -15 c 5 -30 45 -30 45 0 q 0 25 -45 55 q -45 -30 -45 -55 c 0 -30 40 -30 45 0" />
    </g>
  </svg>`,
  comment: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g transform="scale(0.9)" stroke-width="8.8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path d="M -9.5 25 a 35.5 35.5 0 0 1 0 -71 h 15 a 40 40 0 0 1 40 40 q 0 25 -54.5 52 v -20z" />
    </g>
  </svg>`,
  retweet: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g transform="scale(0.9)" stroke-width="8.8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path d="M -10 -30 h 34 a 10 10 0 0 1 10 10 v 45 l 12 -12 m -12 12 l -12 -12" />
      <path transform="rotate(180)" d="M -10 -30 h 34 a 10 10 0 0 1 10 10 v 45 l 12 -12 m -12 12 l -12 -12" />
    </g>
  </svg>`,
  directMessage: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g transform="scale(0.9)" stroke-width="8.8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path d="M -46 -27 a 8 8 0 0 1 8 -8 h 76 a 8 8 0 0 1 8 8 v 54 a 8 8 0 0 1 -8 8 h -76 a 8 8 0 0 1 -8 -8 z" />
      <path d="M -46 -20 l 46 23 46 -23" />
    </g>
  </svg>`,
  notificationBell: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g transform="scale(0.9)" stroke-width="8.8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
      <path d="M 0 -46 a 30 30 0 0 1 30 30 v 20 a 13 13 0 0 1 0 25 h -60 a 13 13 0 0 1 0 -25 v -20 a 30 30 0 0 1 30 -30" />
      <path d="M 15 31 a 15 15 0 0 1 -30 0" />
    </g>
  </svg>`,
  repository: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M -30 -46 h 60 a 8 8 0 0 1 8 8 v 70 a 8 8 0 0 1 -8 8 h -21 m -27 0 h -12 a 8 8 0 0 1 -8 -8 v -70 a 8 8 0 0 1 8 -8 v 65 h 68" />
      <path d="M -15 -30 h 2" />
      <path d="M -15 -15 h 2" />
      <path d="M -15 0 h 2" />
      <path stroke-width="7" d="M -15 30 v 16.5 l 10 -5 10 5 v -16.5 z" />
    </g>
  </svg>`,
  branch: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <circle r="15" cx="-14" cy="-31" />
      <circle r="15" cx="-14" cy="31" />
      <circle stroke-width="7" r="12" cx="30" cy="-23" />
      <path d="M -14 16 V -16" />
      <path d="M -14 16 a 12 12 0 0 1 12 -12 h 18 a 14 14 0 0 0 14 -14" />
    </g>
  </svg>`,

  pullRequest: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <circle r="15" cx="-24" cy="-31" />
      <circle r="15" cx="-24" cy="31" />
      <circle r="15" cx="24" cy="31" />
      <path d="M -24 16 V -16" />
      <path d="M 24 16 V -16 q 0 -15 -20 -20" />
      <path transform="translate(4 -36) rotate(-20)" d="M 0 0 h 18" />
      <path transform="translate(4 -36) rotate(70)" d="M 0 0 h 18" />
    </g>
  </svg>`,

  code: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="-50 -50 100 100">
    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
      <path d="M -24 -22 l -22 22 22 22" />
      <path d="M 10 -30 L -10 30" />
      <path transform="rotate(180)" d="M -24 -22 l -22 22 22 22" />
    </g>
  </svg>`,
  };

  // export a function which picks a specific icon
  export default (icon) => icons[icon];