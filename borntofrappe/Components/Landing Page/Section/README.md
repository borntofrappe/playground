# Sections

Design for the `<section>` elements for the "planets" showcased on the landing page.

**Please note**: margin properties differ from the ones in Pages/Landing Page, as I updated the layout to consider the more complex illustration.

## Layouts

- use `float` properties to position the illustration to the side of the the `<p>` and `<a>` elements; this means the `<svg>` illustration needs to be positioned _before_ these elements in the markup

- use `shape-outside` on the illustration, with a value of `circle()` and a margin considerable enough to create a gap between the elements

- alternate between `float: right` and `float: left`, adjusting the `margin` accordingly. Adjust also the `text-align` property, but only if `shape-outside` is supported and the text can wrap on the left side of the illustration.

- for browsers thinner than an arbitrary measure use `flex` properties for a single column layout. Push the illustration at the bottom of the section with the `order` property. This should be okay given the decorative nature of the element.

## Wrapper

I couldn't find a way to center the section in a `100vh` container and still preserve `float` properties. Using a `flex` container, for instance, creates a new [flex formatting context](https://www.w3.org/TR/css-flexbox-1/#flex-formatting-context), stripping out the value of floats.

Rather painfully, I decided to wrap each section in a `div` container:

- the `div` sets the minimum height of `100vh` and centers the nested section with `flex` properties

- the `section` handles the float properties.

Most practically this means that the binary styling of odd/even illustrations needs to refer to the outer container.

```diff
- section:nth-of-type(even) ...{}
+ div:nth-of-type(even) section ...{}
```

## Pattern

I decided to experiment adding a frame at the top of each section. The idea is to have a path element repeated throughout the viewport's width:

```html
<svg xmlns="http://www.w3.org/2000/svg" viewBox="25 -20.75 100 41.5" width="100" height="41.5">
  <g stroke="none" fill="currentColor">
    <path d="M 0 -17.9 c 50 -10 50 10 100 0 c 50 -10 50 10 100 0 v 35.8 c -50 10 -50 -10 -100 0 c -50 10 -50 -10 -100 0" />
  </g>
</svg>
```

I am still figuring out the most appropriate shape, but the idea is to use the path element as a mask, for a background using the same pattern specified in the footer component, as well as blog and blog page headers.

The specific `viewBox` attribute is to have the curve provide the perfect peak and valley matching the footer.

```css
div:before {
  mask-position: 50% 0%;
  -webkit-mask-position: 50% 0%;
}
```

In this manner the heart icon included in the footer should be perfectly lulled in between the repeating pattern. See footer component for how that is going to look.
