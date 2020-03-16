# Markup Frontmatter

This project focuses on creating the necessary markup for the blog and blog post layouts, using the data as received from the markdown parser and specifically the frontmatter.

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

Consider tags as optional.

## Blog Index

For each article, the idea is to produce the following markup:

```code
h2
  a href={{/slug}}
    {{title}}
    {{icon for the first article only}}

time datetime={{date}}
  {{formatted-date}}

p
  {{brief}}
```

In the frontmatter, the date is set to describe the year, month, day. The structure follows the convention detailed in the [living standard](https://html.spec.whatwg.org/multipage/text-level-semantics.html#the-time-element) and specifically [the part on a valid month string](https://html.spec.whatwg.org/multipage/common-microsyntaxes.html#valid-month-string). Following this convention, the month value starts at `1`. For instance:

```html
<time datetime="2020-2-25">The twenty-fifth of February</time>

<time datetime="2020-3-2">The second of March</time>
```

That takes care of the `datetime` attribute, but for the text of the `<time>` element, a bit of haggling is required. Provided an array describing the name of the months in full.

```js
const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
```

Destructure the necessary values, and display the date with the desired format.

```js
const [year, month, day] = date.split("-");

const markup = `
  <time datetime="${date}">
    ${months[month - 1]} ${day}, ${year}
  </time>
`;
```

Turns out though, I actually need a date object, and this to _sort_ the articles.

```js
articles
  .sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1)
  .forEach(article => {
    // continues
```

I sort the array in place, but given the solitary purpose, I see no issues in modifying the original array. Consider sorting the articles as they are created in the markdown parser.

## Blog Post Header

For the single article:

```code
header
  h1
    {{title}}
  section
    svg (one for each tag)
```

I've included the icons in `html` and through an `<svg>` element, but this is out of convenience. In the final project, they are included through a dedicated component, but here, I can then leverage the `<use>` element.
