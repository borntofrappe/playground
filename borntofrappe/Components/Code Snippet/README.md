# Code Snippet

The idea is to update the default design of the code snippet as produced by shiki. Inspired by [this previous design](https://codepen.io/borntofrappe/pen/PooaQGv)

## Notes

- the code produced by shiki needs to be updated to incorporate an additional span element

```pug
span
  svg
    use(href=#{language})
  {language}
```

In this component the icons are made available with an `<svg>` element at the beginning of the markup's body.

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" style="display: none;">
  <!-- one symbol for each icon -->
  <symbol />
</svg>
```

In the final project, the assets are however included inline. No need to specify a `<symbol>` elements and lean on `<use>` elements later in the DOM.
