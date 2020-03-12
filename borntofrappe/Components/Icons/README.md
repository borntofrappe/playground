# Icons

The goal of this project is showcase how the icons are incorporated in the website. I tinkered with a couple of approaches, like having a dedicated `.svelte` component with multiple `#if`, `:else if` statements, but ended up with the current solution where a JavaScript file describes an object, and each property is assigned a string for the SVG syntax making up the icon.

```js
const icons = {
  experiment: `<svg xmlns="http://www.w3.org/2000/svg" width="42" height"42" viewBox="-50 -50 100 100"><g stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="none"><g stroke-width="8"><path d="M -18 -46 h 36" /><path d="M 10 -42 v 28 l 20 30 c 8 10 15 30 0 30 h -60 c -15 0 -8 -20 0 -30 l 20 -30 v -28" /></g><path stroke-width="7" d="M -30 18 c 30 -18 30 18 60 0" /></g></svg>`,
  idea: `<svg ...`
};
```

See **Scripts/Icons Object** to see how this object is generated.

`icons.js` describes the `icons` object, **and** it exports a function which takes two input:

- the name of the icon

- the size of the icon

This last one is useful to specify a default value, were the CSS failed to intervene. It is also useful, and I daresay essential, in the choreographed navigation where `<svg>` elements are nested into one another; here changing the value of the size is essential to position the shapes where desired.

```js
export default (icon, size) => icons[icon].replace(/width="\d+"\s+height="\d+"/, `width="${size}" height="${size}"`);
```

To make the function slightly more robust, I decided to:

1. include a default size

1. check if the icon is available in the object

In this last instance I return the icon designed under the `bug` label.
