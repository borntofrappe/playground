# Loading Animation

Animation meant to introduce the landing page for **borntofrappe**.

- using CSS custom properties for the animation

- adding a fallback for browsers not supporting custom properties

```css
svg {
  animation: scale-back 5s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: scale-back var(--duration) var(--jump) var(--ease-out-bacK);
}
```

- modifying the scale of the SVG to have a small animation for browsers that do not understand, yet, the `pathLength` property. I feel the benefit of using `pathLength` outweigh the pain of showing a simpler animation for these browsers.

- setting the `stroke-dasharray` and `stroke-dashoffset` properties in the CSS. If CSS fails, for some reason, this means the strokes are shown still.
