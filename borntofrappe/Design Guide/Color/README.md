# Color Palette

`index.html` provides a demo for the colors picked in this section.

- consider updating the palette when the color is ultimately used in the design. For instance a variation of `+-5` on the lightness of the grey colors

- consider adding other scales. The website relies heavily on text and blog posts, so the need for additional scales is not pressing.

## Primary

Starting from the background of the Palenight theme in VSCode and incerasing lightness/saturation:

```css
body {
  --primary-0: hsl(205, 100%, 90%);
  --primary-1: hsl(205, 90%, 80%);
  --primary-2: hsl(210, 80%, 70%);
  --primary-3: hsl(220, 75%, 60%);
  --primary-4: hsl(222, 60%, 50%);
  --primary-5: hsl(225, 55%, 45%);
  --primary-6: hsl(225, 50%, 30%);
  --primary-7: hsl(225, 40%, 20%);
  --primary-8: hsl(230, 35%, 10%);
}
```

## Accent

Starting from the base color of `hsl(340, 90%, 55%)`.

```css
body {
  --accent-0: hsl(325, 100%, 90%);
  --accent-1: hsl(332, 95%, 80%);
  --accent-2: hsl(335, 95%, 70%);
  --accent-3: hsl(337, 92%, 65%);
  --accent-4: hsl(340, 90%, 55%);
  --accent-5: hsl(342, 80%, 50%);
  --accent-6: hsl(340, 75%, 45%);
  --accent-7: hsl(340, 70%, 30%);
  --accent-8: hsl(340, 65%, 20%);
}
```

## Grey

Without a base color, the scale changes the lightness around a value of `55`.

```css
body {
  --grey-0: hsl(0, 0%, 95%);
  --grey-1: hsl(0, 0%, 85%);
  --grey-2: hsl(0, 0%, 75%);
  --grey-3: hsl(0, 0%, 65%);
  --grey-4: hsl(0, 0%, 55%);
  --grey-5: hsl(0, 0%, 45%);
  --grey-6: hsl(0, 0%, 35%);
  --grey-7: hsl(0, 0%, 25%);
  --grey-8: hsl(0, 0%, 15%);
}
```
