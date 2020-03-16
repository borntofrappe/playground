const path = require('path');
const fs = require('fs');

const icons = {};
const extname = '.svg';

function readFiles(folder = '.') {
  const files = fs.readdirSync(folder, { withFileTypes: true });

  files.forEach(file => {
    const { name } = file;
    if (file.isDirectory()) {
      readFiles(`${folder}/${name}`);
    } else {

      if (path.extname(name) === extname) {
        const key = path
          .basename(name, extname)
          .split('-')
          .map((v, i) => (i === 0 ? v : `${v[0].toUpperCase()}${v.slice(1)}`))
          .join('');

        const value = fs.readFileSync(`${folder}/${name}`, {
          encoding: 'utf-8',
        });

        if (!icons[key]) {
          const syntax = value.replace(/[\r\n]/g, '').replace(/\>\s+\</g, '><');
          const location = `${folder}/${name}`;

          icons[key] = {
            syntax,
            location,
          };
        } else {
          console.log(
            `Duplicate icon: \x1b[33m${
              icons[key].location
            }\x1b[0m and \x1b[33m${folder}/${name}\x1b[0m`
          );
        }
      }
    }
  });
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
