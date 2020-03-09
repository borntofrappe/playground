const size = 200;
const ring = 10;
const rings = 10;

const rounds = Array(rings)
  .fill('')
  .map((v, indexRounds) => {
    const delay = indexRounds * 0.2;
    const translate = (size / 2.5 / rings) * (indexRounds + 1);
    const scale = (indexRounds + 1) ** 0.3;

    const round = ring * (indexRounds + 1);
    const rotate = Array(round)
      .fill('')
      .map((v, indexRound) =>
        indexRounds % 2 === 0
          ? 360 / round / 2 + (360 / round) * indexRound
          : (360 / round) * indexRound
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
  ${rounds
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
