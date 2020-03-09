# Icons

The SVG icons for the website are designed in VScode, and potentially optimized with inkscape and svgomg. The former to make due without a `<defs>` block and specifically clip and masks. The latter being a handy tool to reduce the size of the file.

## Notice

The icons designed for **Planets/twitter** are strikingly simple and in their full size don't match with the rest of the set. To this end, I decided to scale them down. The width of the stroke is also increased to compensate this change.

```html
<!-- compensate stroke-width, from default stroke-width="8" -->
<svg>
  <g transform="scale(0.9)" stroke="8.8">
</svg>
```
