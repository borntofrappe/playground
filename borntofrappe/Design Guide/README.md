# Design Guide

## Color

Scales starting from a base color and describing 9 variants in saturation and lightness.

## Icons

SVG icons designed in VsCode, and processed through inkscape/svgomg only to remove `<defs>` elements. The original is kept in the **defs** folder, since for some icons the `defs` block is essential for their use and animation.

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

## global.css

`global.css` collects the different custom properties and global selectors meant to be available for every component, for every page.

- global reset

  ```css
  *,
  *:before,
  *:after {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  ```

- html

  ```css
  html {
    scroll-behavior: smooth;
  }
  ```

  Restore the default value if `prefers-reduced-motion` specifies the `reduce` option

  ```css
  @media (prefers-reduced-motion: reduce) {
    html {
      scroll-behavior: initial;
    }
  }
  ```

- selection

  ```css
  ::selection {
    color: hsl(0, 0%, 97%);
    background: hsl(340, 90%, 55%);
  }
  ```

- body

  ```css
  body {
    font-family: "Hind Madurai", sans-serif;
    color: hsl(230, 30%, 10%);
    background: hsl(0, 0%, 97%);
  }
  ```

- links

  ```css
  a {
    color: inherit;
    outline-color: hsl(342, 80%, 50%);
  }
  a:hover,
  a:focus {
    color: hsl(342, 80%, 50%);
  }
  ```

  When a more specific selector changes the color of the anchor link, be sure to specify the `hover` and `focus` state once more. This happens with the footer in `Footer.svelte`:

  ```css
  footer a {
    color: hsl(0, 0%, 97%);
  }
  ```

  Svelte styles through unique classes, and the hover/focus state from the global selector is no longer applied.

- scrollbar

  ```css
  body::-webkit-scrollbar {
    width: 0.8rem;
  }
  body::-webkit-scrollbar-track {
    background: currentColor;
  }
  body::-webkit-scrollbar-thumb {
    border: 0.2rem solid currentColor;
    border-radius: 0.5rem;
    background: hsl(342, 80%, 50%);
  }
  ```

- headings

  ```css
  h1,
  h2 {
    font-family: "Maven Pro", sans-serif;
    font-weight: 700;
  }
  ```

- code

  ```css
  code {
    font-family: "Fira Code", monospace;
  }
  ```
