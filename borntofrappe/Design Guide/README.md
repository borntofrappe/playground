# Design Guide

`global.css` collects the different custom properties and global selectors which are available for every component, for every page.

On top of this stylesheet, refer to this markdown for the design system behind the website.

## Color

Scales starting from a base color and describing 9 variants in saturation and lightness.

## Icons

SVG icons designed in VScode, and processed through inkscape/svgomg only to remove the `defs` block. The original is kept in the **defs** folder, since for some icons the `defs` block is essential for their use and animation (see `moon.svg`).

## Static

Images and icons designed for the website head and manifest.

## Fonts

| Section                      | Typeface                 | Variants       |
| ---------------------------- | ------------------------ | -------------- |
| Headings, Nav & Footer Links | Maven Pro, sans-serif    | 500, 600, 700  |
| Body                         | Hind Madurai, sans-serif | 400, 400i, 700 |
| Code                         | Fira Code, monospace     | 400            |

For testing, use one of the following embeds. For the website, consider a more robust/efficient solution.

```html
<link href="https://fonts.googleapis.com/css?family=Maven+Pro:500,600,700|Fira+Code|Hind+Madurai:400,400i,700&display=swap" rel="stylesheet" />
```

```css
@import url("https://fonts.googleapis.com/css?family=Maven+Pro:500,600,700|Fira+Code|Hind+Madurai:400,400i,700&display=swap");
```
