# Blog Index

In the `/blog` route, the idea is to introduce a series of articles in a list. With this project I experiment with a grid layout, and particularly `subgrid`, to present the output of a script in the desired format.

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

And for the blog route, the desired markup is structured as follows:

```pug
h2
  a href={slug}
    {title}
    {icon for the first article only}

time datetime={date}
  {formatted-date}

p
  {brief}
```

### Date

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

Ultimately, I actually need a date object, to sort the articles. This might be unnecessary depending on the final script parsing the markdown files.

```js
articles
  .sort((a, b) => new Date(a.date) > new Date(b.date) ? -1 : 1)
  .forEach(article => {
    // continues
```

I sort the array in place, but given the solitary purpose, I see no issues in modifying the original array. Consider sorting the articles as they are created in the markdown parser.

## CSS Grid

The idea is to show the first article with a particular accent, and stretching across the entirety of the wrapping container.

```css
article:first-of-type {
  grid-column: 1/-1;
}
```

Following the first article, the grid is split in two to display the rest of the content.

```css
main {
  max-width: 40em;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(15em, 1fr));
  grid-gap: 2rem 1.75rem;
}
```

If subgrid is supported, and at the time of writing it is only on Firefox, the article elements use the particular value to lay the nested elements side by side.

```css
@supports (grid-template-columns: subgrid) {
  article {
    grid-gap: 0;
    display: grid;
    grid-row: span 3;
    grid-template-rows: subgrid;
    justify-items: start;
  }
}
```

Regardless of content, the heading, time and paragraph elements are vertically aligned. I need to research subgrid more (using `span 3` seems arbitrary), but it works.

## Icons

The icons are included similarly to the final project, with an icons object and a getIcon function
