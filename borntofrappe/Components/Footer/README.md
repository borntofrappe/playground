# Footer

Footer included at the bottom of each page. Currently, highlighting only a twitter handle.

>       ♥
>
> @borntofrappe

## Background

The stylesheet specifies the same repeating pattern created for the blog's header.

```css
footer {
  background: hsl(230, 30%, 10%);
  background: var(--body-color);
  background-image: url("data:image/svg+xml,%3Csvg opacity='0.3' xmlns='http://www.w3.org/2000/svg' viewBox='-5 -5 10 10' width='20' height='20'%3E%3Cg stroke='none' fill='hsl(0, 0%25, 0%25)'%3E%3Ccircle r='1' /%3E%3Ccircle r='1' cx='5' cy='-5' /%3E%3Ccircle r='1' cx='5' cy='5' /%3E%3Ccircle r='1' cx='-5' cy='5' /%3E%3Ccircle r='1' cx='-5' cy='-5' /%3E%3C/g%3E%3C/svg%3E");
  background-size: 20px;
  background-position: -5px 5px;
}
```

With an pseudo element, the idea is to include a repeating pattern atop the rectangle making up the footer.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20 100 40" width="100" height="40">
  <g stroke="none" fill="hsl(0, 0%, 0%)">
    <path d="M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0" />
  </g>
</svg>
```

The pseudo element uses a solid background, and the SVG element in the `mask-image` property.

```css
footer {
  position: relative;
}
footer:before {
  background: inherit;
  mask-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='25 -20 100 40' width='100' height='40'%3E%3Cg stroke='none' fill='hsl(0, 0%25, 0%25)'%3E%3Cpath d='M 0 -15 c 50 -17.5 50 17.5 100 0 c 50 -17.5 50 17.5 100 0 v 30 c -50 17.5 -50 -17.5 -100 0 c -50 17.5 -50 -17.5 -100 0' /%3E%3C/g%3E%3C/svg%3E");
  mask-repeat: repeat-x;
  mask-position: 50% 0%;
}
```

Remember to add a copy of the mask properties using the `-webkit` prefix (necessary for cross-browser support).
