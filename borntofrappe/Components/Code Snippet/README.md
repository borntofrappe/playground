# Code Snippet

The idea is to update the default design of the code snippet as produced by shiki. Inspired by [this previous design](https://codepen.io/borntofrappe/pen/PooaQGv)

## Notes

- the `border-radius` is temporary, but might make it to production considering the less serious tone of the blog

- the code produced by shiki needs to be updated to incorporate an additional span element

```pug
span
  svg
    use(href=#{language})
  {language}
```

Since the icon relies on a reference, be sure to create a `defs` block at the head of the document, with the necessary icons.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="display: none;">
  <!-- icons -->
</svg>
```

The `getIcon` function built in `icons.js` is able to provide the correct syntax. Just be sure to provide a default `width` and `height` attribute of `100`, matching the size of the viewbox of the wrapping svg

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="100" height="100">
  <path fill="currentColor" d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z" stroke-width=".42" />
</svg>
```

Since a reference is required, specify an `id` attribute as well. Instead of modifying the `getIcon` function however, wrap the syntax in an additional element, itself with the appropriate value.

```html
<symbol id="css">
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="-50 -50 100 100" width="auto" height="auto">
    <path fill="currentColor" d="M-40.002-50l5.005 85.002 35 15.002 35.001-15.002L40.01-50h-80.002zM-26-32.5h52.002l-3.25 55.263L0 32.516l-22.75-9.753-.651-11.05h11.05l.325 5.524 12.027 5.2 12.026-5.2.977-16.574h-37.049l-.646-11.05h38.358l.65-11.055h-39.643l-.65-11.05z" stroke-width=".42" />
  </svg>
</symbol>
```

Leading to the following implementation in the `pre` element

```html
<span class="language">
  <svg viewBox="0 0 100 100" width="20" height="20">
    <use href="#html" />
  </svg>
  html
</span>
```

## Update

Instead of creating the SVG element at the head of the document, try to add the SVG icons directly in the markup, importing the `getIcon` function and injecting the SVG syntax within the span element. The "defs" block tends to be less reliable than inlining the SVG icons directly, especially across browsers and when specifying the `viewBox` attribute on the SVG/use/symbol elements.