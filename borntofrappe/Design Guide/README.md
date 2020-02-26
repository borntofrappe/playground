# Design Guide

Systems for the design of borntofrappe.

## Color

Scales starting from a base color and describing 9 variants in saturation and lightness

## Icons

SVG icons designed for the website.

## TODOS

- [ ] read the following posts on fonts and web fonts

  - https://css-tricks.com/snippets/css/using-font-face/
  - https://css-tricks.com/understanding-web-fonts-getting/
  - https://www.zachleat.com/web/comprehensive-webfonts/

- [ ] read up on scales and sizing systems. Look at [Typography.js](https://kyleamathews.github.io/typography.js/) for a reference on how this affects the page.

- [ ] build an HTML-CSS-JS demo showcasing the different choices in terms of layout and sizing scales

## Font

| Section  | Typeface                    | Variants       |
| -------- | --------------------------- | -------------- |
| Headings | Catamaran, sans-serif       | 700, 800       |
| Body     | Source Sans Pro, sans-serif | 400, 400i, 700 |
| Code     | Fira Code, monospace        | 400            |

For testing, use one of the following embeds. For the website, consider a more robust/efficient solution.

```html
<link href="https://fonts.googleapis.com/css?family=Catamaran:700|Fira+Code|Source+Sans+Pro:400,400i,700&display=swap" rel="stylesheet" />
```

```css
@import url("https://fonts.googleapis.com/css?family=Catamaran:700,800|Fira+Code|Source+Sans+Pro:400,400i,700&display=swap");
```
