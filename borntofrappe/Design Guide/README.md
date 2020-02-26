# Design Guide

Systems for the design of borntofrappe.

## TODOS

- [ ] read the following posts on fonts and web fonts

  - https://css-tricks.com/snippets/css/using-font-face/
  - https://css-tricks.com/understanding-web-fonts-getting/
  - https://www.zachleat.com/web/comprehensive-webfonts/

- [ ] read the following and pick colors for primary, accent, neutral values

  - https://refactoringui.com/previews/building-your-color-palette/

- [ ] read up on scales and sizing systems. Look at [Typography.js](https://kyleamathews.github.io/typography.js/) for a reference on how this affects the page.

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

## Color

The palette is built starting from the following colors:

- primary `hsl(220, 20%, 20%)`

- accent `hsl(340, 80%, 45%)`

- neutral `hsl(210, 25%, 10%)`

Primary is picked looking at the background for the palenight theme used in the code snippet.

Neutral relates to a darker variant of primary.
