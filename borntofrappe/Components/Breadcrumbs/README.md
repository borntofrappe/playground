# Breadcrumbs

Navigation at the top of every page, highlighting the current position on the website and allowing to move back to previous routes.

## Layout

> borntofrappe / blog / blog-post

- show **borntofrappe** by default

- for each additional route add a slash `/` followed by the route's name

- if available, provide a matching icon _after_ the route's name. Default size `22`

## Svelte

Once the project is included with a Svelte component, the SVG icon is nested through a specific function. To target the asset from the `a` selector, be sure to use the `:global(selector)` command.

```css
nav a :global(svg) {
  margin: 0 0.4rem;
  width: 1.5em;
  height: auto;
}
```
