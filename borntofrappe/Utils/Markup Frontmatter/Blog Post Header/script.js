const icons = {
  html: `<svg  xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><path fill="currentColor" d="M-40.002-50l5.004 85L.001 50.001l34.998-15.003L40.003-50h-80.007zm14.003 17.5h52l-.65 11.049h-39.649l.651 11.054H24.7L22.751 22.75 0 32.503l-22.75-9.752-.65-11.05h11.049l.325 5.525 12.026 5.2 12.026-5.2.977-16.574H-24.05L-25.998-32.5z"/></svg>`,
	css: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><path fill="currentColor" d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z" stroke-width=".42"/></svg>`,
	js: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42"><path fill="currentColor" d="M-50-50V50.8h38.4c-8.88 0-16.08-7.2-16.08-16.08v-5.04h10.08v5.04c0 3.36 2.64 6 6 6s6-2.64 6-6V.88H4.48v33.84c0 8.88-7.2 16.08-16.08 16.08H9.52V40.72H24.64c2.88 0 5.04-2.208 5.04-5.04s-2.184-5.04-5.04-5.04c-8.4 0-15.12-6.72-15.12-15.12S16.24.4 24.64.4h13.2v10.08h-13.2c-2.88 0-5.04 2.208-5.04 5.04s2.184 5.04 5.04 5.04c8.4 0 15.12 6.72 15.12 15.12S33.04 50.8 24.64 50.8h24V-50h-100.8z"/></svg>`,
}

const getIcon = (icon, size = 42) => icons[icon] ? icons[icon].replace(/width="\d+"\s+height="\d+"/, `width="${size}" height="${size}"`) : icons["bug"].replace(/width="\d+"\s+height="\d+"/, `width="${size}" height="${size}"`);


// the page would receive one object, but here I use multiple to show the generated markup for different setups
const articles = [
  {
    title: 'From markdown to HTML',
    date: '2020-2-24',
    brief: 'A rambling explanation behind a script that could have used a few more packages.',
    tags: 'html, js',
    slug: 'from-markdown-to-html'
  },
  {
    title: 'Syntax Highlighting',
    date: '2020-3-1',
    brief: 'Adding syntax highlighting with shiki and async syntax.',
    tags: 'css, js',
    slug: 'syntax-highlighting'
  },
  {
    title: 'Up and Running',
    date: '2020-2-20',
    brief: 'The first article of this very website, and hopefully not the last.',
    slug: 'up-and-running'
  }
];

articles.forEach(article => {
  const { title, tags } = article;
  // ! if tags are made available generate an array out of the individual tags
  const icons = tags ? tags.split(",").map(tag => tag.trim()) : null;

  const markup = `
    <header>
      <h1>
        ${title}
      </h1>
      ${icons ?
      `<section>
        ${icons.map(icon => `
          <span>
            ${getIcon(icon, 32)}
          </span>`).join("")}
      </section>`
      :
      ''
      }

    </header>
  `;

  document.body.innerHTML += markup;
});