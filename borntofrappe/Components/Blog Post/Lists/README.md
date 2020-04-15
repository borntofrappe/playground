# List

Style for `<ul>` and `<li>` elements.

## Marker

After much experimentation, I decided to consider the shape of a badge as in `badge.svg` and finally its outline as in `badge-outline.svg`.

### Unordered

The outline of the badge is updated to include a check mark. See `badge-check.svg`. The visual is included with the `mask-image` property so to pick up the color specified in the `background` property.

### Ordered

The outline of the badge is included as is. On top of this visual however, a pseudo element includes a counter to replicate the numbering of `<ol>` elements.

## Spacing

The space introduced with `margin` and `line-height` properties might be subject to change.
