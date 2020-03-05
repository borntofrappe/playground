# Illustration

In the **radialGradient** folder you find the first attempt at creating the illustration displaying a planet, a dashed line for the orbit and a series of icons around the shape. Testing the solution on different browsers I discovered inconsistencies regarding the radial gradient and its attributes, so I decided to draw a series of overlapping ellipses instead, and clip the visible area to the circle.

## Important Notice

Be sure to specify a `width` and `height` attribute for the nested SVG icons. This guarantees you can center the icons by translating them back by half the width, half the height.

Less than important notices:

1. this circle is added after the shapes describing the planet to hide the small, yet annoying pixel differences around the globe:

   ```js
   <circle r="28" fill="none" stroke="${colors[colors.length - 1]}" stroke-width="0.1" />
   ```

1. the array of colors is actually reversed, to show lighter hues on top of previous ones. It might be easier to just reverse the order of the hard-coded array in the first place, since it's only purpose its coloring the illustration.
