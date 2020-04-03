# Meta Tags

In the `<head>` of each document I plan to incorporate several `<meta>` tags.

## Reference

Protocols/docs describing the different property and attributes

- [Open Graph Protocol](https://ogp.me/)

- [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

A few website to see the implementation in practice.

- [CSS Tricks](https://css-tricks.com/)

- [Smashing Magazine](https://www.smashingmagazine.com/)

- [swyx](https://www.swyx.io/)

- [Piccalilli](http://piccalil.li/)

## Notes

`index.html` describes every possible meta tag I plan to incorporate in the website. I separated them by topic, but here a few notes:

- for the icon, consider four tags

  - svg

  - png 16x16

  - png 32x32

  - png for apple devices 180x180

  I am aware that more icons are necessary for additional sizes/resolutions/platforms, but I made the decision to focus on the most important ones. A weight off one's shoulder.

- once an RSS feed is developed, refer to it using the appropriate type

- `og:` tags refer to the opengraph protocol. For the image try to develop an asset with a 2:1 ratio. This satisfies the image for a large twitter card as well. More on this later

- `article:` tags are mostly pertinent for the blog post. The datetime for the published time is conveniently in the same format I've already specified in the frontmatter project

- `twitter:` tags are for twitter. There are fundamentally 2 types of cards, with a different requirement in terms of image size

  - `content="summary"`: 1:1 ratio

  - `content="summary_large_image"`: 2:1 ratio

  There is a range for both, but settle on a definite value of `500x500` and `1000x500`

## Values

While most value change according to the final URL and content, here a few pointers.

- **type**: use `website` or `article`.

- **site_name**, `borntofrappe`

- author: Gabriele Corti

- handle: @borntofrappe

For the title and description, consider this table as a starting point.

| Pages     | Title                                      | Description                                                                                           |
| --------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Root      | borntofrappe                               | Personal website for one Gabriele Corti. Aspiring developer, fledging designer, long distance runner. |
| Blog      | borntofrappe / blog                        | Verbose articles on HTML, CSS, SVG, and anything that might pique the author's interest.              |
| Blog Post | borntofrappe / blog / css-animation-paused | A specific use case for a specific CSS property. SVG                                                  |

For the individual blog post, try to include the content received from the frontmatter object, both in the title/description and the different tags for og:, twitter: and most interestingly :article
