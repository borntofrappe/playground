# Table

Design for `table` elements as provided in a blog post. The markup is picked up from what is ultimately produced by `marked.js` and through the script parsing markdown to markup.

```md
| Key          | Value | isRandom |
| ------------ | ----: | -------: |
| Grapes       |  1.28 |     true |
| Oranges      |  2.55 |    false |
| Apples       |  0.98 |    false |
| Peaches      |  1.85 |     true |
| Strawberries |  3.12 |     true |
```

I've changed the alignment just to see how marked would consider the left/right change, and it seems it does so with an `align` attribute.

```html
<table>
  <thead>
    <tr>
      <th>Key</th>
      <th align="right">Value</th>
      <th align="right">isRandom</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Grapes</td>
      <td align="right">1.28</td>
      <td align="right">true</td>
    </tr>

    <!-- ...continues -->
  </tbody>
</table>
```

This attribute already takes care of positioning the values horizontally.

## Style

I took inspiration from the UI of the component making up the code snippet. This meant picking the same background color, and the same value for the border radius. More on this border radius in a second.

Consider adding a custom property for the particular hue `hsl(229, 20%, 20%)`.

## border-radius

For the first row, I specify a darker background.

Using a border-radius on `tr` elements seems to do little good.

```css
/* does not work */
tr {
  background: tomato;
  border-radius: 0.5rem;
}
```

To this end, I've used a `:before` pseudo element to include a rounded box above the table.

```css
table:before {
  content: "";
  position: absolute;
  bottom: 100%;
  left: 0%;
  width: 100%;
  height: 0.8rem;
  border-radius: 0.5rem;
  border-bottom-left-radius: 0;
  border-bottom-right-radius: 0;
  background: var(--grey-0);
}
```

Just make sure to allocate appropriate spacing. For the first row, this means a padding of `0.4rem` at the bottom, to center the text.

```css
table thead tr th {
  padding: 0 1rem 0.4rem;
}
```

For the table as a whole, this means using a margin of `0.8rem` at the top, to distance from the preceding content.

```css
table {
  margin-top: 0.8rem;
}
```

## Zebra stripes

Style the rows of the `tbody` element with an alternated background.

I chose the `nth-last-of-type()` selector to target the even rows from the bottom. This to make sure the background is applied from the penultimate row upwards.

```css
table tbody tr:nth-last-of-type(even) td {
  background: tomato;
}
```

Targeting the last row would annoyingly override the `border-radius` set on the wrapping table.

## Further considerations

The style is elementary and presumes the use of table elements with a limited number of columns. For more complex markup, I will have to revisit the UI to consider a more responsive layout, but for basic usage it seems enough to get started.
