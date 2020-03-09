# Loading Animation

Notice that each animation has two property-value pairs, for browsers not supporting custom properties.

```css
svg {
  animation: scale-back 5s 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  animation: scale-back var(--duration) var(--jump) var(--ease-out-bacK);
}
```

In terms of design, the scale animation is introduced for browsers not supporting the `pathLength` attribute. Using JavaScript it is possible to retrieve the actual length of the paths, but it's easier to provide a different animation. In browsers supporting the features, this makes for a secondary, supporting animation.
