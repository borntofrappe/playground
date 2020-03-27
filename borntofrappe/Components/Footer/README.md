# Footer

Footer included at the bottom of each page. Currently, highlighting only a twitter handle.

>       ♥
>
> @borntofrappe

## Update

Instead of using the footer's bounding box as a background, which leads to a rectangular shape, I decided to include a background image with an SVG element describing a rather elongated ellipse.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -50 200 50" width="200" height="50">
  <defs>
  <pattern id="pattern-background" viewBox="-1 -1 12 12" width="0.055" height="0.2">
    <g fill="hsl(0, 0%, 100%)">
      <circle r="2">
      <circle r="2" cx="10">
      <circle r="2" cy="10">
      <circle r="2" cx="10" cy="10">
    </g>
  </pattern>
  </defs>
  <ellipse fill="hsl(230, 30%, 10%)" rx="180" ry="50" />
  <ellipse fill="url(#pattern-background)" opacity="0.2" rx="180" ry="50" />
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

## Pattern

I am still experimenting with patterns, and how to "fill" the void left around the pages. For the footer's background, I took inspiration from the pattern in the Blog and Blog post pages to repeat a series of circles. The background is therefore updated to the following.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-100 -50 200 50">
  <defs>
    <pattern id="pattern-background" patternUnits="userSpaceOnUse" viewBox="-5 -5 10 10" width="5" height="5">
      <g fill="hsl(0, 0%, 0%)">
        <circle r="1" />
        <circle r="1" cx="5" cy="5" />
        <circle r="1" cx="-5" cy="5" />
        <circle r="1" cx="5" cy="-5" />
        <circle r="1" cx="-5" cy="-5" />
      </g>
    </pattern>
  </defs>
  <ellipse fill="hsl(230, 30%, 10%)" rx="180" ry="50" />
  <ellipse fill="url(#pattern-background)" opacity="0.3" rx="180" ry="50" />
</svg>
```

`userSpaceOnUse` as the size of the pattern would fluctuate excessively as the `<svg>` element changes in size.

### Update

Experimenting with the Section component, I ultimately decided to create a path element that is repeated horizontally to create a wave-like figure. Since it matches the footer rather nicely, I decided to try and incorporate the same above the footer.
