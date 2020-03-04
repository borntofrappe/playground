# Design Guide

Systems for the design of borntofrappe.

## Color

Scales starting from a base color and describing 9 variants in saturation and lightness.

## Icons

SVG icons designed for the website. The syntax is improved with inkscape and svgomg, but the original design created in VSCode is preserved in a separate folder.

## Fonts

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
