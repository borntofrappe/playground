# Parse Markdown

With this project I develop the script which reads through markdown documents and creates the data structure ultimately picked up by Sapper to create the relevant pages.

```bash
node script
```

Running the script should read the markdown files in the `blog` folder and create an `html` document in the `pages` folder. These `.html` files are however just a proof of concept more than the final result. The goal of the script is first and foremost creating an object with the markup and frontmatter.

## Syntax Highlighting

```bash
node script-syntax
```

With this script I tried my luck including syntax highlighting with the `shiki` package. It is asynchronous, and I am unsure as how to fit this with the synchronous nature of Sapper.

## Marked Renderer

```bash
node script-renderer
```

With this script I modify the markdown produced for code snippets, using a custom `renderer`. The idea is to include the syntax analyzed in the **Code Snippet** component.

Including the following `span` element

```pug
span
  svg
    use(href=#{language})
  {language}
```

Right before the code describing the snippet.

### module.exports

In the Svelte projects I export the `getIcon` function with ES6 modules.

```js
export default (icon, size = 42) => (...);
```

In the script however, I use the `module.exports` syntax.

```js
module.exports = (icon, size = 42) => (...);
```

This is because node doesn't support natively the ES6 features. The hope is that using a module bundler like Rollup (used by Sapper), there would be no need to switch to the second syntax.

## Puppeteer Images

```bash
node script-puppeteer
```

With this script I try not only to create markdown files, but to produce the images for opengraph `og:` tags. For this project I also created a utility function to check if a directory exist, and create one if required. I might use this function in the previous scripts to ensure the code works sans existing folder.
