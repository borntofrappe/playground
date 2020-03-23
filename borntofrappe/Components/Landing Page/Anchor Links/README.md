# Landing Page Rocket

A couple of projects centered on the `rocket.svg` icon. The idea is to repeat the shape throughout the landing page:

- in the breadcrumbs next to the link to the website's own homepage

- in the sections below the anchor link elements redirecting toward the different planets

- in between the sections moving from side to side and if possible `offset-path` properties

## Anchor links

In terms of the SVG syntax:

- update the rocket to tip the shape on its side

```diff
-<g transform="rotate(45)">
+<g transform="rotate(90)">
```

- in the stylesheet change the default fill (none) to the background's own color

```css
a svg g {
  fill: var(--body-background);
}
```

- repeat the body of the rocket (first `path` element) at the bottom of the markup to avoid having the fill hide portions of the stroke

```html
<path fill="none" stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
```

- remove the stroke of the first `path` element as the overlap would create an annoying blur on the stroke

```diff
-<path stroke-width="8" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
+<path stroke-width="0" d="M -0 -46 q 23 15 23 52 v 10 a 8 8 0 0 1 -8 8 h -30 a 8 8 0 0 1 -8 -8 v -10 q 0 -37 23 -52" />
```

For the CSS property value pairs:

- include a pseudo element to repeat the default outline. Leaving the outline on the anchor link would create a weird shape to cover both the link and the accompanying elements

```css
a {
  /* remove outline */
  outline: none;
}
a:after {
  /* recreate outline */
  ...;
}
```

- use the `width` and `height` values for the icon to have the SVG span the width of the anchor link, but scale the icon only to a smaller, fixed amount

```css
a svg {
  position: absolute;
  width: 100%;
  height: 1.5em;
}
```

- use the remaining pseudo element to create a dash behind the rocket. Animate the scale of the pseudo element in both dimensions

- flip the transition for even (or odd) elements to have the dash transition from the right

```css
a:nth-of-type(even):before {
  transform-origin: 100% 50%;
}
```

And the SVG translated from the same point

```css
a:nth-of-type(even) svg {
  transform: translate(100%, -50%);
  right: 50%;
  left: initial;
}
```

Flip the shapes around the y axis accordingly

```css
a:nth-of-type(even) svg > g {
  transform: scaleX(-1);
}
```

## Update

Considering the implementation on the landing page website, I decided to update the design as follows:

- a class dictates whether the rocket moves westwards (left to right by default)

- a media query allows the rocket to move westwards only with a large enough width

Consider aligning the anchor link to the right, even on thinner viewports.
