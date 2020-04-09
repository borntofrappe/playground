const headings = Array(5).fill().map((d, i) => i + 2);

const main = document.querySelector('main');

main.innerHTML += headings.map(num => `
  <h${num} id="heading-${num}" class="permalink">
    h${num} Heading
    <a href="#heading-${num}" aria-label="permalink">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42">
        <g transform="rotate(-53)" stroke-width="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none">
          <path stroke-dasharray="145 26" stroke-dashoffset="-16" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />
          <path transform="scale(-1 -1)" stroke-dasharray="145 26" stroke-dashoffset="-16" d="M -24 9 a 21 21 0 0 1 0 -42 h 26 a 21 21 0 0 1 0 42 h -26" />
        </g>
      </svg>
    </a>
  </h${num}>
`).join('');