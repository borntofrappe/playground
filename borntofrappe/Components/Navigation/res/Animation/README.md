# Animation

I've always wanted a loading screen to introduced my website, and here I experiment with SVG syntax, CSS animation properties to realize just that.

The final animation is actually my third attempt, but I decided to keep the previous efforts for posterity's sake. Moreover, each project influences the one coming after it.

- in the first animation I focused on animating the stroke of both the circle and the inner path element

- in the second animation I developed the concept further and opted to animate only the stroke of the `path` element, first removing and then adding the stroke itself.

In both projects I animated the stroke in the `[0, 1]` range, leveraging the `pathLength` attribute on the desired elements. There are browsers that do not support the attribute, and for those I decided to animate the entire `svg` element through its `transform` property.

- in the final project, I tried my luck again with stroke properties, but decided to go further with a custom icon, inspired by the name of the website itself. On top of this, I eventually decided to forgo the `pathLength` attribute and work with the actual length of the paths.

## Remember to

Provide the desired graphic in the markup, untouched by CSS properties. This guarantees that the visual is preserved were CSS to fail or not load. For the same reason add a default value to the `width` and `height` attributes. Also known as _presentational attributes_.
