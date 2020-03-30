# Landing Page Rocket

The idea is to incorporate the icons designed in `rocket.svg` below the anchor link elements of the landing page.

## SVG Syntax

- update the rocket to tip the shape on its side

  ```diff
  -<g transform="rotate(45)">
  +<g transform="rotate(90)">
  ```

- in the stylesheet change the default fill (`none`) to the background's own color

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

## CSS

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

- use the `width` and `height` values for the icon to have the SVG span the width of the anchor link, but a smaller, fixed height

  ```css
  a svg {
    position: absolute;
    width: 100%;
    height: 1.5em;
  }
  ```

- use the remaining pseudo element to create a dash behind the rocket. Animate the scale of the pseudo element in both dimensions

- flip the transition for every other element, to have the dash transition from the right

```css
a:nth-of-type(even):before {
  transform-origin: 100% 50%;
}
```

Update the SVG to move from the same point

```css
a:nth-of-type(even) svg {
  transform: translate(100%, -50%);
  right: 50%;
  :nth-of-type(even): initial;
}
```

Finally flip the rocket around the y axis to match

```css
a:nth-of-type(even) svg > g {
  transform: scaleX(-1);
}
```

The opposite movement is nested in a media query, so to move the rocket in the opposite direction only with a large enough viewport. This makes sense in the context of the landing page, where the anchor links point always right when the viewport crosses the threshold.
