# Illustration

The navigation is choreographed to have the different anchor link elements spread around the center of the viewport.

I eventually decided to incorporate the anchor links inside a larger `<svg>` element, but here you find the first designs behind the concept. These also helped to develop the style of the individual icons, and the position of the text around the icons themselves.

## Notes

The `<path>` elements describing the curvature of the text have a different `id` attribute from one another.

```html
<path id="icon-circle-1" ... /> <path id="icon-circle-2" ... />
```

Using the same identifier would not change anything for the trivial project (the `<path>` elements have the same attributes), but does create conflict between successive `<svg>` elements. `id` are not scoped to the `<svg>` element in which they are defined, so that the `<textPath>` elements end up referring to the syntax of a single `<path>` (the first). This is perhaps obvious, but in the moment you use JavaScript to describe SVG syntax, it might pass by unnoticed. Be sure to keep `id` attributes unique.
