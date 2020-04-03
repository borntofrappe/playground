<!--  update to meta tags and include every useful tag meant to reside in the head of the document  -->

# OpenGraph Protocol

In this project I research the opengraph protocol and summarize my efforts to add appropriate `meta` tags.

## Metadata

The following fields seem to be the most pertinent for my situation.

- og:title
- og:description
- og:type
- og:url
- og:image
- og:site_name

Look at the [opengraph docs](https://ogp.me/#metadata) for detailed information. For the individual tag, it seems the field is specified in the `property` attribute, while its value in the `content` attribute.

```html
<meta property="" content="" />
```

Every page will share the same type, `website` and site_name, `borntofrappe`. The url for the different pages will be decided once the website is live. For the remaining fields refer to this table.

| Pages     | Title                                      | Description                                                                                           |
| --------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Root      | borntofrappe                               | Personal website for one Gabriele Corti. Aspiring developer, fledging designer, long distance runner. |
| Blog      | borntofrappe / blog                        | Verbose articles on HTML, CSS, SVG, and anything that might pique the author's interest.              |
| Blog Post | borntofrappe / blog / css-animation-paused | An article on CSS animation paused: a specific use case for a specific CSS property. SVG              |

For the individual blog post, try to include the content received from the frontmatter object: `frontmatter.title + frontmatter.brief`.

## Image

This requires a bit more effort, to actually create the images.

- use the same color palette created for the project

- use the pattern created for the footer and header components

- try and incorporate the SVG icons for the different routes. This requires a script or two to actually produce the images. Also and for each blog post, the script should account for a variety of topic (different title or tags).
