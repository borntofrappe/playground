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
