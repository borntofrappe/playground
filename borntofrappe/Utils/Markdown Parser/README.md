# Markdown parser

With this project I develop the script which reads through markdown documents and creates the data structure ultimately picked up by Sapper to create the relevant pages.

There are actually a multitude of scripts, as well as a **utils** folder with more helpful code. In increments, these are:

## script

Using `marked` and native modules like `path` and `fs`, this script reads the markdown documents in the **blog** folder and produces the necessary markup in the **pages** folder.

This script also uses the `checkDir` function, which creates the **pages** folder if need be.

## script-syntax

On top of `marked`, this script uses the `shiki` module to add syntax highlighting for the code snippets.

## script-renderer

The renderer from the shiki package is modified to further customize code snippets. Here I added a `<span>` element as well as an icon matching the snippet's own language.

## script-puppeteer

Building on top of the utils project for the meta tags, this script produces the necessary markup with `marked` and then creates the static assets for the open graph protocol.

## utils

This folder is home to a few scripts, primarily used by the `script-puppeteer` script.

- `icons` provide the SVG syntax for a limited set of icons. More are created for the website, but these will suffice for the smaller project

- `puppeteer` replicates the code developed in the **Meta Tags** utility, to take a screenshot tailored to to the blog post frontmatter

- `template` takes the markup/stylesheet created for the blog post and returns it with a template string. The title and icons are modified on the basis of the input arguments

- `utility`, for lack of a better word, describes the function which checks if a directory exist. If it doesn't, it creates the same container
