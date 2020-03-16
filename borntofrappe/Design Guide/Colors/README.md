# Color Palette

**Modify the color scale instead of using one-off values**

`index.html` provides a demo for the colors picked in this section.

## Colors

### Primary

Starting from the background of the Palenight theme in VSCode and modifying the lightness and saturation values.

```css
:root {
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

### Accent

Starting from a base color of `hsl(340, 90%, 55%)`.

```css
:root {
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

### Grey

Without a base color, the scale changes the lightness around a value of `55`.

```css
:root {
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

Consider an change of `+-5` depending on the impact the color has on the final design.

## CSS

In the CSS, additional custom properties describe different parts of the design. Try and be consistent about the implementation in the different components/pages.

```css
:root {
  --body-color: var(--primary-8);
  --body-background: var(--grey-0);
  --accent-color: var(--accent-5);
  --selection-color: var(--grey-0);
  --selection-background: var(--accent-4);
}
```

### Selectors

- selection

```css
::selection {
  color: hsl(0, 0%, 97%);
  color: var(--selection-color);
  background: hsl(340, 90%, 55%);
  background: var(--selection-background);
}
```

- body

```css
body {
  color: hsl(230, 30%, 10%);
  color: var(--body-color);
  background: hsl(0, 0%, 97%);
  background: var(--body-background);
}
```

- links

```css
a {
  color: inherit;
  outline-color: hsl(342, 80%, 50%);
  outline-color: var(--accent-color);
}
a:hover,
a:focus {
  color: hsl(342, 80%, 50%);
  color: var(--accent-color);
}
```

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
  color: hsl(342, 80%, 50%);
  background: var(--accent-color);
}
```
