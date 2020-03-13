# Icons

The SVG icons for the website are designed in VScode. The exception to this rule is for graphics which are created with `<defs` element; these were processed through inkscape to remove the block and svgomg to make due without the unnecessary attributes added by the graphics editor. The original is kept in the folder bearing a fitting name, not just to be nostalgic, but because for some the `defs` block is essential for their design and animation (see `moon.svg`).

## Notes

- the icons designed for **Planets/twitter** are strikingly simple and in their full size don't match with the rest of the set. To this end, I decided to scale them down. The width of the stroke is also increased to compensate this change.

  ```html
  <!-- compensate stroke-width, from default stroke-width="8" -->
  <svg>
    <g transform="scale(0.9)" stroke="8.8">
  </svg>
  ```

  A similar measure is added for the `bug.svg` icon. but for different reasons.

- `d3.svg` has a bug as it relates to the mask. I still haven't figured out why it doesn't work

- git
