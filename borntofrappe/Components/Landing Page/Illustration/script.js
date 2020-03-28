const icons = {
	blog: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" fill="none"><g stroke-width="8"><path d="M -26 -19 h -20 v -6 a 12 12 0 0 1 24 0 v 50 a 12 12 0 0 0 24 0 v -5 h 44 v 5 a 12 12 0 0 1 -12 12 h -44 a 12 12 0 0 1 -12 -12" /><path d="M -34 -37 h 44 a 12 12 0 0 1 12 12 v 45 h -20 v 5 a 12 12 0 0 1 -24 0 v -50 a 12 12 0 0 0 -12 -12" /></g><g stroke-width="6"><path d="M -10 -20 h 20" /><path d="M -10 -8 h 10" /><path d="M -10 4 h 15" /><path d="M -10 16 h 5" /></g></g></svg>`,
	codepen: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="8" fill="none"><path d="M 0 -40 l -46 25 46 25 46 -25 z" /><path d="M 0 -40 v 30" /><path transform="translate(0 50)" d="M 0 -40 v 30" /><path transform="translate(46 25)" d="M 0 -40 v 30" /><path transform="translate(-46 25)" d="M 0 -40 v 30" /><path transform="translate(0 30)" d="M 0 -40 l -46 25 46 25 46 -25 z" /></g></svg>`,
	freecodecamp: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round"><path d="M 30 -35 c 21 20 21 50 0 70" /><path transform="scale(-1 1)" d="M 30 -35 c 21 20 21 50 0 70" /><g transform="translate(0 30)" stroke-linejoin="round"><path d="M 20 -20 a 20 20 0 0 1 -40 0 q 0 -10 10 -20 t 0 -20 q 15 17 12.5 35 q 10 0 12.5 -15 q 5 11.25 5 20" /></g></g></svg>`,
	github: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round"><path stroke-width="8" d="M 0 11 h -17 a 18 18 0 0 1 -18 -18 q 0 -8 5 -16 q -6 -10 0 -18 q 12 0 18 6 a 24 24 0 0 1 24 0 q 6 -6 18 -6 q 6 8 0 18 q 5 8 5 16 a 18 18 0 0 1 -18 18 h -17" /><path stroke-width="6" d="M -12 11 q -10 0 -10 14 q 0 8 -8 14 q 20 0 20 -16 v 4 q 0 10 -6 16 q 16 0 16 -15 v -4 v 4 q 0 15 16 15 q -6 0 -6 -16 v -4 q 0 16 20 16 q -8 0 -8 -14 q 0 -14 -10 -14" /></g></svg>`,
	twitter: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round"><path d="M -39 30.5 c 40 20 75 0 75 -48 l 8 -8 -12 -2 a 10 10 0 0 0 -32.5 12 q -20 5 -40 -15" /><path stroke-width="7" d="M -40.5 -30.5 q -5 20 14 26 -9 0 -18 -5 0 20 23 18 -10 4 -22 0 0 12 28 14 -10 6 -23.5 8" /></g></svg>`,
};

const getIcon = (icon, size = 42) => icons[icon] ? icons[icon].replace(/width="\d+"\s+height="\d+"/, `width="${size}" height="${size}"`) : icons["bug"].replace(/width="\d+"\s+height="\d+"/, `width="${size}" height="${size}"`);
const names = Object.keys(icons);

const size = 500;
const iconSize = 100;

const { length } = names;

// particles
const round = length + 1;
const rounds = length + 1;
const particles = Array(rounds)
  .fill("")
  .map((v, indexRounds) => {
    const translate = (size / 2.5 / rounds) * (indexRounds + 1);
    const scale = (indexRounds + 1) ** 0.2;

    const numberRounds = round * (indexRounds + 1);
    const rotation = Array(numberRounds)
      .fill("")
      .map((v, indexRound) => (round % 2 === 0 ? 360 / round / 2 + (360 / numberRounds) * indexRound : (360 / numberRounds) * indexRound));

    return {
      translate,
      scale,
      rotation
    };
  });


document.body.innerHTML = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-${size / 2} -${size / 2} ${size} ${size}" width="${size}" height="${size}">
  <defs>
    <path id="path" d="M 0 -32 a 32 32 0 0 1 0 64 32 32 0 0 1 0 -64" />
    <path id="path-c" d="M 0 39 a 39 39 0 0 1 0 -78 39 39 0 0 1 0 78" />
    <path id="path-cc" d="M 0 47 a 47 47 0 0 0 0 -94 47 47 0 0 0 0 94" />

    <mask id="mask-text">
      <rect x="-50" y="-50" width="100" height="100" fill="hsl(0, 0%, 100%)" />
      <use href="#path" fill="hsl(0, 0%, 0%)" />
    </mask>

    <mask id="mask-icons">
      <rect x="-${size / 2}" y="-${size / 2}" width="${size}" height="${size}" fill="hsl(0, 0%, 100%)" />
      <circle r="46" fill="hsl(0, 0%, 0%)" />

      ${names.map((name, index) => `
        <g transform="rotate(${360 / names.length * index}) translate(0 -${Math.floor(size / 3)}) rotate(${360 / names.length * index * -1})">
          <use href="#path" transform="scale(1.4)" fill="hsl(0, 0%, 0%)" />
        </g>
      `).join("")}
    </mask>
  </defs>



    <g mask="url(#mask-icons)">
      ${particles.map(({translate, scale, rotation}) => rotation.map((rotate) => `
      <g transform="rotate(${rotate}) translate(0 ${translate}) rotate(-${rotate})">
      <circle r="1" transform="scale(${scale})" />
        </g>
        `).join("")).join("")}
    </g>


    <g fill="none" stroke="currentColor" stroke-width="8" stroke-linecap="round" stroke-linejoin="round">
    <circle r="46" />
      <path d="M -10 -15 q 0 -8 -8 -10" stroke-dasharray="14.01 18.5" stroke-dashoffset="-4.5" />
      <path d="M -10 -15 h 15 a 8 8 0 0 1 0 16 h -4 h 4 a 10 10 0 0 1 0 20 h -15 v -36" stroke-dasharray="114.2 146.28" stroke-dashoffset="-9.145" />
  </g>

  ${names.map((name, index) => `

    <g transform="rotate(${360 / names.length * index}) translate(0 -${Math.floor(size / 3)}) rotate(${360 / names.length * index * -1})">
      <a href="#" aria-label="{name}">
        <g transform="translate(-${size / 6} -${size / 6})">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="-${iconSize / 2} -${iconSize / 2} ${iconSize} ${iconSize}" width="${size / 3}" height="${size / 3}">
            <g transform="scale(0.9)">
              <use href="#path" stroke="currentColor" stroke-width="6" fill="none" />
              <!-- rotate the text around the center -->
              <g transform="rotate(${360 / names.length * index})" mask="url(#mask-text)">
                <g class="text">
                  <text fill="currentColor" font-weight="bold" letter-spacing="1" text-anchor="middle" font-size="12" font-family="monospace">
                    <textPath href="${360 / names.length * index > 90 && 360 / names.length * index < 270 ? '#path-cc' : '#path-c'}" startOffset="50%">
                      ${name}
                    </textPath>
                  </text>
                </g>
              </g>

              <g transform="translate(-${iconSize / 6} -${iconSize / 6})">
                ${getIcon(name, iconSize / 3)}
              </g>

              <circle r="50" opacity="0" />
            </g>
          </svg>
        </g>
      </a>
    </g>

  `).join("")}

</svg>

`;