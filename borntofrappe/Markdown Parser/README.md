# Markdown Parser

With this smaller project I develop the script which reads through markdown documents and creates the data structure ultimately picked up by Sapper to create the relevant pages.

Bonus points to add syntax highlighting with [`shiki`](https://github.com/octref/shiki)

```
node script
```

Running the script should read the markdown files in the `blog` folder and create an `html` document in the `pages` folder. These `.html` files are however just a proof of concept more than the final result (which will differ in the static site generator.
