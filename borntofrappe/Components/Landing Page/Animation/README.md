# Animation

These projects detail the animation of the logo introducing the website. The final design is actually the result of an iterative process detailing at least three attempts

- in the first animation I focused on animating the stroke of both the circle and the inner path element

- in the second animation I developed the concept further and opted to animate only the stroke of the `path` element, first removing and then adding the stroke itself.

In both projects I animated the stroke in the `[0, 1]` range, leveraging the `pathLength` attribute on the desired elements. There are browsers that do not support the attribute, and for those I decided to animate the entire `svg` element through its `transform` property.

- in the final project, I tried my luck again with stroke properties, but decided to go further with a custom icon, inspired by the name of the website itself. On top of this, I eventually decided to forgo the `pathLength` attribute and work with the actual length of the paths.
