# List

Style for `<ul>` and `<ol>` elements.

After much experimentation, I decided to consider the shape of a badge. See `badge.svg` and `badge-outline.svg` for the not-filled version.

## ul

The outline of the badge is updated to include a check mark. See `badge-check.svg`. The visual is included with the `mask-image` property so to pick up the color specified in the `background` property.

## ol

The outline of the badge is included as is. On top of this visual however, a pseudo element includes a counter to replicate the numbering of `<ol>` elements.
