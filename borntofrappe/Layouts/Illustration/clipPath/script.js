// ! the width and height are essential to center the icons in the markup
const icons = [
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-.65 11.051H-14.3l.65 11.049H24.7l-1.95 33.15L0 32.5l-22.75-9.75-.65-11.051h11.051l.325 5.525L0 22.426l12.025-5.202L13 .65h-37.05L-26-32.5z"/></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M-40-50l5 85L0 50l35-15 5-85h-80zm14 17.5h52l-3.25 55.25L0 32.5l-22.75-9.75-.65-11.051h11.05l.325 5.525L0 22.426l12.025-5.202L12.999.65h-37.05L-24.7-10.4h38.35l.65-11.05h-39.65L-26-32.5z"/></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M-50-50V50h39c-8.777 0-16-7.223-16-16v-5h10v5c0 3.373 2.627 6 6 6s6-2.627 6-6V0H5v34c0 8.777-7.223 16-16 16h21V40h15c2.82 0 5-2.18 5-5s-2.18-5-5-5c-8.225 0-15-6.775-15-15S16.775 0 25 0h13v10H25c-2.82 0-5 2.18-5 5s2.18 5 5 5c8.225 0 15 6.775 15 15s-6.775 15-15 15h25V-50H-50z"/></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="8" fill="currentColor"><path d="M0 0v36a5 5 0 010 10 5 5 0 010-10v-72a5 5 0 010-10 5 5 0 010 10"/><path d="M0 0l-25.456 25.456a5 5 0 01-7.07 7.07 5 5 0 017.07-7.07l50.912-50.912a5 5 0 017.07-7.07 5 5 0 01-7.07 7.07"/><path d="M0 0h-36a5 5 0 01-10 0 5 5 0 0110 0h72a5 5 0 0110 0 5 5 0 01-10 0"/><path d="M0 0l-25.456-25.456a5 5 0 01-7.07-7.07 5 5 0 017.07 7.07l50.912 50.912a5 5 0 017.07 7.07 5 5 0 01-7.07-7.07"/></g></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" fill="none" stroke-width="8"><ellipse transform="rotate(30)" rx="18" ry="46"/><ellipse transform="rotate(-30)" rx="18" ry="46"/><ellipse transform="rotate(90)" rx="18" ry="46"/></g><circle r="8" fill="currentColor"/></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="10" stroke-linejoin="round" stroke-linecap="round" fill="none" transform="rotate(-30)"><path d="M30-10H0h8a21 21 0 010 42h-37a21 21 0 010-42"/><path d="M-30 10H0h-8a21 21 0 010-42h37a21 21 0 010 42"/></g></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M-.074-49.999a5 5 0 00-3.461 1.465L-15.09-36.98l12.487 12.486A7 7 0 010-25a7 7 0 017 7 7 7 0 01-.507 2.602l8.904 8.904A7 7 0 0118.001-7a7 7 0 017 7 7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 01.507-2.602L2.75-11.358v22.924A7 7 0 017 18a7 7 0 01-7 7 7 7 0 01-7-7 7 7 0 014.25-6.428v-23.137A7 7 0 01-7-17.999a7 7 0 01.508-2.602L-18.98-33.089-48.536-3.534a5 5 0 000 7.07l45.001 45a5 5 0 007.07 0l45.002-45a5 5 0 000-7.07l-45.001-45a5 5 0 00-3.61-1.465z"/></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke-width="8" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none"><path d="M-25 33l-18-9v-48L1-46l44 22v48L1 46l-7-3.5"/><path d="M-14-19v42.5a10 10 0 01-10 10M24-9A10 10 0 004-9 10 10 0 0014 1a10 10 0 0110 10 10 10 0 01-20 0"/></g></svg>',
  '<svg width="8" height="8" viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><g stroke="currentColor" stroke-width="10" fill="none"><path d="M-17.5-45a20 20 0 00-20 20v12.5A12.5 12.5 0 01-50 0a12.5 12.5 0 0112.5 12.5V25a20 20 0 0020 20M17.5-45a20 20 0 0120 20v12.5A12.5 12.5 0 0050 0a12.5 12.5 0 00-12.5 12.5V25a20 20 0 01-20 20"/></g><g fill="currentColor"><circle r="4"/><circle cx="-16" r="4"/><circle cx="16" r="4"/></g></svg>',
  '<svg width="8" height="8" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg"><path fill="currentColor" d="M38.461 5A54.67 54.67 0 0158.69 25h13.811c4.26 0 7.5 3.24 7.5 7.5s-3.24 7.5-7.5 7.5h-7.873a53.544 53.544 0 011.373 12c0 2.717-.207 5.388-.6 8h7.1c4.26 0 7.5 3.24 7.5 7.5s-3.24 7.5-7.5 7.5H60.81a54.598 54.598 0 01-16.268 20h27.959c15.069 0 27.5-12.431 27.5-27.5 0-6.656-2.52-12.717-6.527-17.5C97.48 45.217 100 39.156 100 32.5c0-15.069-12.431-27.5-27.5-27.5H38.462z" paint-order="stroke fill markers"/><path d="M0 15h10a35 35 0 010 70H0" fill="none" stroke="currentColor" stroke-width="20"/></svg>',
  '<svg width="8" height="8"  viewBox="-50 -50 100 100" xmlns="http://www.w3.org/2000/svg"><g fill="currentColor"><path d="M0-20h50v50H0z"/><circle cx="-15" cy="-25" r="15"/><path d="M-50 40l30-50 30 50"/></g></svg>',
];

const palette = [
  [
    'hsl(205, 100%, 90%)',
    'hsl(205, 90%, 80%)',
    'hsl(210, 80%, 70%)',
    'hsl(220, 75%, 60%)',
    'hsl(222, 60%, 50%)',
    'hsl(225, 55%, 45%)',
    'hsl(225, 50%, 30%)',
    'hsl(225, 40%, 20%)',
    'hsl(230, 30%, 10%)',
  ],
  [
    'hsl(325, 100%, 90%)',
    'hsl(332, 95%, 80%)',
    'hsl(335, 95%, 70%)',
    'hsl(337, 92%, 65%)',
    'hsl(340, 90%, 55%)',
    'hsl(342, 80%, 50%)',
    'hsl(340, 75%, 45%)',
    'hsl(340, 70%, 30%)',
    'hsl(340, 65%, 20%)',
  ],
];

// pick a color
const colors = [...palette[0]].reverse();
// pick a selection of icons
const satellites = icons.slice();
// decide to tilt the planet right or not
const tiltRight = false;

const markup = `
<svg style="color: ${
  colors[4]
}" xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="200" height="200">
      <clipPath id="clip-planet">
        <circle r="28"/>
      </clipPath>
      <mask id="mask-satellites">
        <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
        <g fill="hsl(0, 0%, 0%)">
          <g class="rotate">
            ${satellites
              .map(
                (satellite, index, { length }) => `<g transform="rotate(${(360 /
                  length) *
                  index}) translate(0 -42.5) rotate(${(360 / length) *
                  index *
                  -1})">
                <circle r="7" />
          </g>`
          )
          .join('')}
          </g>
        </g>
      </mask>

      <!-- planet -->
      <g transform="rotate(${tiltRight ? 20 : -20})">
        <g clip-path="url(#clip-planet)">
          <g transform="translate(0 -70)">
            ${colors
              .map(
                (color, index, { length }) =>
                  `<ellipse stroke="none" transform="scale(${1 -
                    (0.6 / length) * index})" cx="-0" cy="70" rx="${35 +
                    (15 / length) * index}" ry="30" fill="${color}"/>`
              )
              .join('')}
          </g>
        </g>

        <!-- hide pixel rendering -->
        <circle r="28" fill="none" stroke="${colors[colors.length - 1]}" stroke-width="0.1"/>
      </g>

      <!-- planet -->
      <g mask="url(#mask-satellites)">
        <circle class="rotate" r="42.5" stroke-dasharray="1 2" stroke-linecap="round" fill="none" stroke="currentColor" stroke-width="0.5" />
      </g>

      <!-- satellites -->
      <g class="rotate">
            ${satellites
              .map(
                (satellite, index, { length }) => `<g transform="rotate(${(360 /
                  length) *
                  index}) translate(0 -42) rotate(${(360 / length) *
                  index *
                  -1})">
                <g transform="scale(-1 1)">
                  <g class="rotate">
                    <g transform="scale(-1 1)">

                          <circle r="7.5" fill="none" stroke-width="1" stroke="currentColor" />
                          <g transform="translate(-4 -4)">
                            ${satellite}
                          </g>
                    </g>
                  </g>
                </g>
            </g>`
              )
              .join('')}
      </g>
</svg>
`;

document.body.innerHTML = markup;
