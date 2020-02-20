# Markdown Parser

With this smaller project I develop the script which reads through markdown documents and creates the data structure ultimately picked up by Sapper to create the relevant pages.

```
node script
```

Running the script should read the markdown files in the `blog` folder and create an `html` document in the `pages` folder. These `.html` files are however just a proof of concept more than the final result (which will differ in the static site generator.

```
node script-syntax
```

With this script I tried my luck including syntax highlighting with the `shiki` package. It takes a bit, but it works as desired.
