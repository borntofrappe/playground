const path = require("path");
const fs = require("fs");
const marked = require('marked');
const shiki = require('shiki');
const getIcon = require('./icons.js');

const extname = '.md';

shiki.getHighlighter({
  theme: 'Material-Theme-Palenight-High-Contrast',
}).then(highlighter => {
  const files = fs.readdirSync('./blog', 'utf-8');
  const markdownFiles = files.filter((file) => path.extname(file) === extname);

  const renderer = new marked.Renderer();
  renderer.code = (code, lang) => {
    return `<pre><span class="language">${getIcon(lang, 32)}${lang}</span>${highlighter.codeToHtml(code, lang)}</pre>`;
  }

  const posts = markdownFiles.map(file => {
    const slug = path.basename(file, extname);
    const markdown = fs.readFileSync(`./blog/${file}`, { encoding: 'utf-8' });
    const frontmatter = markdown.match(/---\r\n(\w+:\s.+\r\n)+---\r\n/)[0];
    const keyValue = frontmatter.match(/\w+:\s.+/g).map(pair => pair.split(": ")).reduce((acc, curr) => {
      acc[curr[0]] = curr[1];
      return acc;
    }, {});
    const content = markdown.slice(frontmatter.length).trim();

    return Object.assign(keyValue, { slug, html: marked(content, { renderer }) });
  })
  posts.forEach(({ slug, html}) => {
    fs.writeFileSync(`./pages/${slug}.html`, html);
  })
});
