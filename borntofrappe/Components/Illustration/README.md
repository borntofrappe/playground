# Illustration

Refer to the **intersection-observer** when replicating the component.

- **radialGradient** relates to a first attempt at creating the illustration. It is left aside because of browser inconsistencies with the `radialGradient` element and its attributes.

- **clipPath** replicates the single illustration with a cross-browser friendlier solution. It uses a series of overlapping ellipses and a `clipPath` to show only the shapes in the boundaries of the planet.

- **intersection-observer** takes the illustration, creates a Svelte component and animates the shapes using the intersection observer API.

## Remember To

- increase the duration of the animation. Currently, it is sped up just to show the property in action.
