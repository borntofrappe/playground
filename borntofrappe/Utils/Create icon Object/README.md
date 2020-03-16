# Create icons Object

## Run

```bash
node script
```

## What

> run does

- read every `.svg` starting from the current folder;

- create an object where each icon is assigned to a key, and its syntax is included as a matching value

  ```js
  const icons = {
    html: `...`,
    css: `...`,
    js: `...`
  };
  ```

- notify if the object already contains an icon with the same name

- write the object locally to `icons.js`

## Why

> does what

I'm experimenting with different ways to include icons in the Sapper website, and starting with an object, I can create a function which exports only the icon required in the project.

## \x1b[?

The characters beginning with `\x1b[` are used to color the message displayed in the console. `33m` paints the text yellow(ish), `0m` resets the appearance of the logs.

To know more:

- [Stack Overflow Question](https://stackoverflow.com/questions/9781218/how-to-change-node-jss-console-font-color)

- [Color Reference](https://en.wikipedia.org/wiki/ANSI_escape_code#Colors).

For a more robust solution consider a dependency like [colors.js](https://www.npmjs.com/package/colors).

```js
const colors = require("colors");

console.log("Warning message".green);
```
