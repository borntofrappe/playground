// the size of the particles is inversely proportional to the size of the `<svg>` element
const size = 500;

// number of particles in the first round
// each successive round considers n*round particles
const round = 5;
// number of rounds
const rounds = 10;

const particles = Array(rounds)
  .fill('')
  .map((v, indexRounds) => {
    const delay = indexRounds * 0.2;
    const translate = (size / 2.1 / rounds) * (indexRounds + 1);
    const scale = (indexRounds + 1) ** 0.3;

    const numberRounds = round * (indexRounds + 1);
    const rotate = Array(numberRounds)
      .fill('')
      .map((v, indexRound) =>
        round % 2 === 0
          ? 360 / round / 2 + (360 / numberRounds) * indexRound
          : (360 / numberRounds) * indexRound
      );

    return {
      delay,
      translate,
      scale,
      rotate,
    };
  });

const markup = `
  <svg viewBox="-${size / 2} -${size /
  2} ${size} ${size}" width="${size}" height="${size}">
  ${particles
    .map(
      ({ delay, translate, scale, rotate }) => `
    <g class="scale" style="animation-delay: ${delay}s">
      ${rotate
        .map(
          deg => `<g transform="rotate(${deg}) translate(0 ${translate}) rotate(-${deg})">
          <circle r="0.75" transform="scale(${scale})" />
      </g>`
        )
        .join('')}
    </g>
  `
    )
    .join('')}
  </svg>

`;

document.body.innerHTML = markup;
