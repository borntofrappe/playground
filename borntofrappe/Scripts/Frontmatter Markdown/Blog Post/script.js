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
          <svg viewBox="0 0 100 100" width="32" height="32">
            <use href="#${icon}"/>
          </svg>
        `).join("")}
      </section>`
      :
      ''
      }

    </header>
  `;

  document.body.innerHTML += markup;
});