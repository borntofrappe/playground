# Meta Tags

In the `<head>` of each document I plan to incorporate several `<meta>` tags. With this project I develop the markup for these tags, as well as the necessary static assets. Refer to the **static** folder for these.

## Head

`index.html` describes every possible meta tag. I separated them by topic, but here a few notes:

- for the icon, consider four assets

  - svg

  - png 16x16

  - png 32x32

  - png for apple devices 180x180

  I am aware that more icons are necessary for additional sizes/resolutions/platforms, but I made the decision to focus on these four exclusively. A weight off one's shoulder.

- once an RSS feed is developed, refer to it using the appropriate type

- `og:` tags refer to the opengraph protocol. For the image try to develop an asset with a 2:1 ratio. This satisfies the image for a large twitter card as well. More on this later

- `article:` tags are mostly pertinent for the blog post. The datetime for the published time is conveniently in the same format I've already specified in the frontmatter project

- `twitter:` tags are for twitter. There are fundamentally 2 types of cards, with a different requirement in terms of image size

  - `content="summary"`: 1:1 ratio

  - `content="summary_large_image"`: 2:1 ratio

  There is a range for both, but settle on a definite value of `500x500` and `1000x500`

### Values

While most value change according to the final URL and content, here a few pointers.

- **type**: use `website` or `article` for the blog posts

- **site_name**, `borntofrappe`

- author: Gabriele Corti

- handle: @borntofrappe

For the title and description, consider this table as a starting point.

| Pages     | Title                                      | Description                                                                                           |
| --------- | ------------------------------------------ | ----------------------------------------------------------------------------------------------------- |
| Root      | borntofrappe                               | Personal website for one Gabriele Corti. Aspiring developer, fledging designer, long distance runner. |
| Blog      | borntofrappe / blog                        | Verbose articles on HTML, CSS, SVG, and anything that might pique my interest.                        |
| Blog Post | borntofrappe / blog / css-animation-paused | A specific use case for a specific CSS property. SVG                                                  |

For the individual blog post, try to include the content received from the frontmatter object, both in the title/description and the different `:og` tags.

## Icons

These are produced with the utility project **PNG Icons**, in the specified three sizes.

## Images

In the three separate folder at this level you find a first version of the layout I intend to include in the `og:image` and `twitter:image` meta tags.

I tried to be consistent in the design of the three projects, but I also managed to include the same visuals I developed in the larger website. The aspect ratio is `2:1` and the grid is built to allocate the first SVG illustration in the middle of the wave-like pattern surrounding the `main` element. There is a bit of negative margin to push the text back to the left, but given the purpose of the project, it's more than acceptable to tolerate this one-off measure. There's also no need to test the layout on different browsers/configurations as the page is meant to be opened only through a puppeteer script.

### Puppeteer

[The official docs](https://github.com/puppeteer/puppeteer) already provide an example on how to take a screenshot. For instance and for `github.com`, here's how I went replicating the code.

```bash
npm i puppetteer
```

It installs a version of chromium, which might take a while.

Then in node-land.

```js
const puppeteer = require("puppeteer");

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({
    width: 1000,
    height: 500,
  });
  await page.goto("https://github.com");
  await page.screenshot({ path: "screenshot.png" });

  await browser.close();
})();
```

It's basically the same as in the docs, with the only difference being the url/path and the size of the image. Since I'm interested in capturing the meta assets with the `1000x500` size, I updated the viewport accordingly.

This takes care of taking a screenshot, but for an existing, live website. For local files, it requires more logic to serve the `html` making up the different assets.

Apparently, it works using the absolute path:

```js
await page.goto(".../playground/borntofrappe/Utils/Meta Tags/Blog/index.html");
```

However, looking at the docs for the node platform, the `path` module allows to retrieve the correct path with the [`resolve` function](https://nodejs.org/docs/latest/api/path.html#path_path_resolve_paths).

```js
await page.goto(path.resolve("../Blog/index.html"));
```

With an array of paths, I create a screenshot for the three different files using a `for of` loop.

```js
const paths = [
  {
    html: "../Blog/index.html",
    png: "../Static/blog.png",
  },
  // continues
];

(async () => {
  // previous code
  for (const { html, png } of paths) {
    await page.goto(path.resolve(html));
    await page.screenshot({ path: png });
  }
})();
```

It works, but sometimes it doesn't show the entire text. The docs do specify an option to wait until the page is shown completely. Refer to [this section](https://github.com/puppeteer/puppeteer/blob/v2.1.1/docs/api.md#framegotourl-options) of the docs.

```js
await page.goto(path.resolve(html), { waitUntil: "networkidle0" });
```

## Reference

Protocols/docs describing the different property and attributes.

- [Open Graph Protocol](https://ogp.me/)

- [Twitter Cards](https://developer.twitter.com/en/docs/tweets/optimize-with-cards/overview/abouts-cards)

A few website to see the implementation in practice.

- [CSS Tricks](https://css-tricks.com/)

- [Smashing Magazine](https://www.smashingmagazine.com/)

- [swyx](https://www.swyx.io/)

- [Piccalilli](http://piccalil.li/)
