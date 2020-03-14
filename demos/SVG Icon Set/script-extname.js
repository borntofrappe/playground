const path = require('path');
const fs = require('fs');

const extname = '.svg';
const icons = {};

function readFiles(folder = './icons') {
  const files = fs.readdirSync(folder, 'utf8');

  const svg = files.filter(file => path.extname(file) === '.svg');
  svg.forEach(file => {
    const key = file
      .slice(0, -extname.length)
      .split('-')
      .map((v, i) => (i === 0 ? v : `${v[0].toUpperCase()}${v.slice(1)}`))
      .join('');
    const value = fs.readFileSync(`${folder}/${file}`, { encoding: 'utf-8' });
    if (!icons[key]) {
      const syntax = value.replace(/[\r\n]/g, '').replace(/\>\s+\</g, '><');

      const location = `${folder}/${file}`;

      icons[key] = {
        syntax,
        location,
      };
    } else {
      console.log(
        `Duplicate icon: \x1b[33m${
          icons[key].location
        }\x1b[0m and \x1b[33m${folder}/${file}\x1b[0m`
      );
    }
  });

  const folders = files.filter(file => !path.extname(file));
  if (folders.length > 0) {
    folders.forEach(file => {
      readFiles(`${folder}/${file}`);
    });
  }
}
readFiles();

const entries = Object.entries(icons);
fs.writeFileSync(
  'icons.js',
  `const icons = {${entries
    .map(([key, value]) => `\n\t${key}: \`${value.syntax}\`,`)
    .join('')}\n}`,
  'utf-8'
);
