# Footer

Footer included at the bottom of each page. Currently, highlighting only a twitter handle.

>       ♥
>
> @borntofrappe

## Background

The stylesheet specifies the same repeating pattern created for the blog's header (more on the background size of `19.3px` and `-4.825px` soon.)

```css
footer {
  background: hsl(230, 30%, 10%);
  background: var(--body-color);
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='hsl(0, 0%25, 0%25)' opacity='0.3' width='20' height='20' viewBox='-5 -5 10 10'%3E%3Ccircle id='dot' r='1' /%3E%3Cuse href='%23dot' x='5' y='5' /%3E%3Cuse href='%23dot' x='-5' y='5' /%3E%3Cuse href='%23dot' x='5' y='-5' /%3E%3Cuse href='%23dot' x='-5' y='-5' /%3E%3C/svg%3E");
  background-size: 19.3px;
  background-position: -4.825px -4.825px;
}
```

With an additional pseudo element, the idea is to include an additional pattern atop the rectangle making up the footer. Using the following element

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 -19.3 100 38.6" width="100" height="38.6">
  <g stroke="none" fill="currentColor">
    <path d="M 0 -15 c 50 -15 50 15 100 0 c 50 -15 50 15 100 0 v 30 c -50 15 -50 -15 -100 0 c -50 15 -50 -15 -100 0" />
  </g>
</svg>
```

And the `mask-image` property.

```css
footer {
  position: relative;
}
footer:before {
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -19.3 100 38.6' width='100' height='38.6'%3E%3Cg stroke='none' fill='currentColor'%3E%3Cpath d='M 0 -15 c 50 -15 50 15 100 0 c 50 -15 50 15 100 0 v 30 c -50 15 -50 -15 -100 0 c -50 15 -50 -15 -100 0' /%3E%3C/g%3E%3C/svg%3E");
  mask-repeat: repeat-x;
  mask-position: 50% 0%;
}
```

Just remember to add a copy of the mask properties using the `-webkit` prefix (necessary for cross-browser support).

`mask-position` is set to `50%` so to have the path element create a valley where the heart icon lies (this also explains the `25` value in the `viewBox` attribute).

The size of the mask is `38.6` in height, replicated in the size of the pseudo element.

```css
footer:before {
  width: 100%;
  height: 38.6px;
}
```

Which leads to `19.3px` to guarantee at least 2 levels of the repeating pattern, and in turn `4.825px` to avoid cropping on the left.

## Update

To avoid having the edges of the path blurred, I update the syntax to have nice round numbers.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40" width="100" height="40">
  <g stroke="none" fill="currentColor">
    <path d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" />
  </g>
</svg>
```
