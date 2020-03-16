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
