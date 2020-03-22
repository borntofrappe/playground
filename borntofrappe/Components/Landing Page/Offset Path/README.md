# Offset Path

The idea is to use CSS properties to move the `rocket.svg` icon from side to side.

- use CSS animations and `offset-path` properties to follow the path designated by a curve. See the **CSS animation folder**

- incorporate the change in `offset-distance` using the intersection observer API, and making sure there is a fallback for unsupported browsers.

One important note: `offset-path: path()` doesn't allow to add a path relative to the window's own width. It's not responsive. I could use JavaScript to take the width and reformulate the path on runtime, but I chose instead to rely on CSS. With the following plan:

- use a fixed width path

- when the viewport is larger than the path's own width, change its opacity so that its resting state is `opacity: 0`. Change this default to `1` only when it is time to show the element

This also makes it easier to provide a fallback. Translate the shape horizontally using the same width value and the `transform` property.

On second thought, the change in opacity is superfluous, in the moment in which the shape is not translated out of sight. This is ultimately the decision I went with in the Svelte project.

```html
<svg viewBox="-400 -50 800 100">
  <g fill="none" stroke="currentColor" stroke-width="2">
    <path d="M -400 0 q 100 50 200 0 t 200 0 t 200 0 t 200 0" />
  </g>
</svg>
```

## Update

Considering the presence of the rocket in the sections, under the anchor link elements, I might deprecate this project and consider it simply good practice with Svelte, SVG and the intersection observer API.
