# Heading

This is a considerably small component, but allows me to experiment with the markup and style of heading elements. More precisely, any `h{x}` element where `x = { 2, 3, 4, 5, 6 }`.

The markup is rather straightforward.

```pug
h2 title
  a (href={id}, aria-label=permalink)
    svg permalink
```

## Notes

The code in `script.js` produces five headings, to show how the icon might look next to the different elements. The code uses the number of each heading for the `id` and `href` attribute, but ultimately, this will be based on the headings own value.

A couple of things worth mentioning:

- the size of the heading elements is not definitive, and might change as I develop a more robust system and a scale for the website.

- the styles are applied with a class of `.permalink`. I originally intended to use the elements' selectors, but I like the convenience of having the class shared across elements.

- remember to specify `display: block` for the `<svg>` element. The default value of the property creates an annoying asymmetry with some whitespace at the bottom of the icon.

- repeat the change in color for the anchor link element. This change is introduced on the global selector `a`, and through `global.css`, but once you set the transition for the opacity, you override the previous value.
