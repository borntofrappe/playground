# Blog Post Header

For each blog post the idea is to introduce the page with a header, boldly presenting the title and accompanying tags.

## Script

The script produces the necessary markup on the basis of the frontmatter received from the project built in the **Utils** folder.

For each article, the data is structured as follows:

```js
{
  title,    // text
  date,     // dash separated values for year, month, day
  brief,    // text
  tags,     // comma separated values
  slug,     // text
  html,     // markdown
}
```

And for each blog post, the desired markup is structured as follows:

```pug
header
  h1
    {title}
  section
    svg (one for each tag)
```

## Icons

The icons are included similarly to the final project, with an icons object and a getIcon function
