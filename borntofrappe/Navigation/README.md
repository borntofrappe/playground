# Navigation

Landing page for **borntofrappe**. The idea is to use SVG syntax to draw a very choreographed navigation. Icons describing the different items are wrapped in anchor link elements, to make them click-able and focus-able. The icons also include a label in a `<text>` element, which can be used for assistive technologies.

## Update

While providing a nice visual, displaying only the icons left a lot to be desired in terms of design. To fill in the white space, I decided to include a few particles all around the center. You can find a proof of concept in the **res** folder.

## TODO

- [ ] `Icons.svelte` specifies a plain circle in the moment the input attribute doesn't match a known icon. Design a more appealing icon. Look at the emoji for the [running shoe](https://emojipedia.org/running-shoe/) as a reference. That embodies me pretty well. Alternatively consider a question mark.

- [x] create separate `.svg` files describing the individual icons. Easier to store and reuse.
