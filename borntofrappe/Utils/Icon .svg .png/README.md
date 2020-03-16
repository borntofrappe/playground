# Icon .svg .png

This is less of a script and more of a utility. The goal is to create a PNG icon, starting with SVG syntax and using the Canvas API. In the **res** folder you find a first version of this concept, using vanilla JS. From that starting point, I decided to expand the scope of the project with Svelte, so to fabricate the logo in different sizes.

In terms of design, I decided to skip styling altogether, and rely instead of the default provided by the svelte template.

## Worth noting

As the canvas changes in size, the existing drawing is removed. This means that using `context.clearRect`, `save()` and `restore()` is unnecessary. In the particular case, and perhaps this is idiosyncratic to Svelte, it also means that the updated drawing does not appear. I believe this is because the canvas is drawn, and then resized. Hence the timeout to switch the order of operations.
