# Blockquote

Design for `blockquote` elements as provided in a blog post. The markup is picked up from what is ultimately produced by `marked.js` and through the script parsing markdown to markup.

```md
> there's no better time than now
```

```html
<blockquote>
  <p>there&#39;s no better time than now</p>
</blockquote>
```

For multi-line quotes, it seems marked wraps each line in a paragraph element.

```md
> there's no better time than now
>
> there was, but it was yesterday
```

```html
<blockquote>
  <p>there&#39;s no better time than now</p>
  <p>there was, but it was yesterday</p>
</blockquote>
```

## Accent

The variant using the `.primary` class is included just to experiment with a different color palette. Ultimately, I'll pick one variant between the two.

## SVG

The following syntax is included in a pseudo element to highlight the blockquote.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="42" height="42">
  <g stroke-width="10" stroke="currentColor" stroke-linejoin="round" stroke-linecap="round" fill="currentColor">
    <path d="M -23 -27 c -20 8 -37.5 72 0 72 a 16 16 0 0 0 0 -32 c -20 0 -15 -35 0 -40" />
    <path opacity="0.8" d="M 29 -45 c -20 8 -37.5 72 0 72 a 16 16 0 0 0 0 -32 c -20 0 -15 -35 0 -40" />
  </g>
</svg>
```

It's actually included in the `mask-image` property so to use the color of the blockquote and carve out the desired shape.
