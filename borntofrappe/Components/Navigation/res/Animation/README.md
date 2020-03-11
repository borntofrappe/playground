# Animation

I've always wanted a loading screen to introduced my website, and here I experiment with SVG syntax, CSS animation properties to realize just that.

The first animation I developed is saved in the **Animation Strokes** folder, where I focused on animating the stroke of both the circle and the inner path element.

I developed the concept further and opted to animate only the stroke of the `path` element, first removing and then adding the stroke itself. The entire icon is then animated in scale and rotation. I believe this makes for a more novel animation.

It is worth noting that in both projects the stroke is animated in the `[0, 1]` range, leveraging the `pathLength` attribute on the desired elements. There are browsers that do not support the attribute, and for those I decided to animate the entire `svg` element through its `transform` property. For browsers supporting the feature, I believe it makes for a supporting animation as well.

## Remember to

- hide the strokes in the stylesheet, and not in the markup.

  This

  ```css
  path {
    stroke-dasharray: 1;
    stroke-dashoffset: 1;
  }
  ```

  And **not** this:

  ```html
  <path stroke-dasharray="1" stroke-dashoffset="1" />
  ```

  In case CSS is not included, the stroke is still shown.
