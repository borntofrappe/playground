// icon for the first article
const icon = `
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="32" height="32">
  <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4" fill="currentColor">
      <path id="sparkle" d="M -10 0 a 10 10 0 0 0 10 -10 10 10 0 0 0 10 10 10 10 0 0 0 -10 10 10 10 0 0 0 -10 -10" />
      <use href="#sparkle" transform="translate(-20 -20) scale(0.9)"/>
      <use href="#sparkle" transform="translate(20 -25) scale(0.5)"/>
      <use href="#sparkle" transform="translate(15 25) scale(0.8)"/>
      <use href="#sparkle" transform="translate(-15 20) scale(0.4)"/>
    </g>
  </g>
</svg>
`;

const articles = [
  {
    title: 'From markdown to HTML',
    date: '2020-01-24',
    brief: 'A rambling explanation behind a script that could have used a few more packages.',
    tags: 'html, js'
  },
  {
    title: 'Syntax Highlighting',
    date: '2020-02-01',
    brief: 'Adding syntax highlighting with shiki and async syntax.',
    tags: 'css, js'
  },
  {
    title: 'Up and Running',
    date: '2020-01-20',
    brief: 'The first article of this very website, and hopefully not the last.'
  }
];