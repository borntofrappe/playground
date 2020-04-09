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

## Styling

Experimenting with different patterns, I've decided to:

- style every other container with a different background/color combination

- include the pattern created for the footer component right before each `div` element. A pixel margin is specified to make sure the pattern blends in the container.
