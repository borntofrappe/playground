const path = require("path");
const fs = require("fs");

const extname = '.svg';
const icons = {};

function readFiles(folder = '.') {
  const files = fs.readdirSync(folder, 'utf8');

  const svg = files.filter(file => path.extname(file) === '.svg');
  svg.forEach(file => {
    const key = file.slice(0, -extname.length).split("-").map((v, i) => i === 0 ? v : `${v[0].toUpperCase()}${v.slice(1)}`).join("");
    const value = fs.readFileSync(`${folder}/${file}`, { encoding: 'utf-8'});
    // remove unnecessary spaces to inline the syntax
    icons[key] = value
    .replace(/[\r\n]/g, "")
    .replace(/\>\s+\</g, "><");
  });

  const folders = files.filter(file => !path.extname(file));
  if(folders.length > 0) {
    folders.forEach(file => {
      readFiles(`${folder}/${file}`);
    });
  }
}
readFiles();

const entries = Object.entries(icons);
fs.writeFileSync('icons.js', `const icons = {${entries.map(([key, value]) => `\n\t${key}: \`${value}\`,`).join("")}\n}`,  'utf-8');