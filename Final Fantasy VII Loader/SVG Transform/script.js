const form = document.querySelector('form');
const square = document.querySelector('#square');

function handleInput() {
  const { value: translate } = this.translate;
  const { value: rotate } = this.rotate;
  const { checked } = this.offset;
  console.log(checked);

  const transform = checked ? `rotate(${rotate}) translate(0 ${translate}) rotate(${rotate * -1})` : `rotate(${rotate}) translate(0 ${translate})`;

  this.result.value = transform;
  square.setAttribute('transform', transform);
}

form.addEventListener('input', handleInput);