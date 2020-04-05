# Color Palette

**Modify the color scale instead of using one-off values**

`index.html` provides a demo for the colors picked in this section.

I picked 11 to have one variant for each "decade", for each ten increase in lightness.

One for each decade and starting from a base color:

- primary: `hsl(220, 100%, 5%)`

- accent: `hsl(340, 90%, 55%)`

For neutral, or grey colors, I used a low saturation with a hue similar to the primary colors.

## Primary

```css
:root {
  --primary-0: hsl(220, 100%, 8%);
  --primary-1: hsl(218, 100%, 15%);
  --primary-2: hsl(215, 97%, 25%);
  --primary-3: hsl(215, 96%, 32%);
  --primary-4: hsl(213, 95%, 38%);
  --primary-5: hsl(212, 92%, 45%);
  --primary-6: hsl(210, 85%, 55%);
  --primary-7: hsl(210, 90%, 62%);
  --primary-8: hsl(208, 95%, 75%);
  --primary-9: hsl(205, 100%, 85%);
  --primary-10: hsl(205, 100%, 95%);
}
```

## Accent

```css
:root {
  --accent-0: hsl(350, 100%, 8%);
  --accent-1: hsl(347, 100%, 19%);
  --accent-2: hsl(345, 95%, 27%);
  --accent-3: hsl(345, 96%, 33%);
  --accent-4: hsl(342, 92%, 39%);
  --accent-5: hsl(340, 85%, 46%);
  --accent-6: hsl(340, 90%, 55%);
  --accent-7: hsl(339, 90%, 67%);
  --accent-8: hsl(336, 93%, 77%);
  --accent-9: hsl(335, 100%, 86%);
  --accent-10: hsl(330, 100%, 95%);
}
```

## Grey

```css
:root {
  --grey-0: hsl(215, 22%, 5%);
  --grey-1: hsl(210, 20%, 15%);
  --grey-2: hsl(210, 18%, 25%);
  --grey-3: hsl(210, 16%, 32%);
  --grey-4: hsl(208, 14%, 39%);
  --grey-5: hsl(212, 12%, 45%);
  --grey-6: hsl(212, 10%, 54%);
  --grey-7: hsl(212, 15%, 65%);
  --grey-8: hsl(213, 16%, 79%);
  --grey-9: hsl(214, 15%, 88%);
  --grey-10: hsl(215, 10%, 97%);
}
```
