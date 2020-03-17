# Footer

Footer included at the bottom of each page. Currently, highlighting only a twitter handle.

>       ♥
>
> @borntofrappe

## Update

Instead of using the footer's bounding box as a background, which leads to a rectangular shape, I decided to include a background image with an SVG element describing a rather elongated ellipse.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -50 200 50" width="200" height="50">
  <ellipse fill="hsl(230, 30%, 10%)" rx="180" ry="50" />
</svg>
```

This complements the aesthetics of the landing page. The property value pairs specified in the stylesheet should position the image right behind the footer's content,

```css
footer {
  background-repeat: no-repeat;
  background-size: 300%;
  background-position-x: 50%;
}
```

To be safe, I decided to move the `color` and `background` property from the footer to the nested anchor link.

```css
footer a {
  color: hsl(0, 0%, 97%);
  color: var(--body-background);
  background: hsl(230, 30%, 10%);
  background: var(--body-color);
}
```
