# Frontmatter Markup

This project focuses on the front matter as theoretically received from the markdown parser, to produce the desired markup for the blog and blog post pages.

## Frontmatter

Looking at the output produced by the markdown parser, each article describes the following fields.

```js
{
  title,    // text
  date,     // dash separated values for year, month, day
  brief,    // text
  tags,     // comma separated values
}
```

Consider tags as optional.

## Blog

For each article:

```code
h2
  a href={{relative-path}}
    {{title}}
    {{icon for the first article only}}

time datetime={{date}}
  {{formatted-date}}

p
  {{brief}}
```

## Blog Post

For the single article:

```code
header
  h1
    {{title}}
  section
    svg (one for each tag)
```

I've include the icons in an `<svg>` element, so to access them with `<use>` elements. In the final project, these are included through a dedicated component.

The only challenge here is to take the string of comma separated tags and produce an array.

## Links

- [CSS Tricks on the Date object](https://css-tricks.com/everything-you-need-to-know-about-date-in-javascript/#creating-dates-with-arguments)

- [CSS Tricks on the time element](https://css-tricks.com/time-element/)
