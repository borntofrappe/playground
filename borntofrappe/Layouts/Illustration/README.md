# Illustration

A small note on the contents of this folder:

- **radialGradient**: first attempt at creating the illustration. It is left aside because of browser inconsistencies around the `radialGradient` element and its attributes.

- **clipPath**: cross browser friendlier solution, using a series of overlapping ellipses and a `clipPath` to show only the shapes in the boundaries of the planet. There

- **intersection-observer**: project re-creating the component with svelte and animating the illustration with the intersection observer API. This to have the orbit rotate only as the illustration is scrolled into view. The height is purposefully increased to allow for vertical scroll.
