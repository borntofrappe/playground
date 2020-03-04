# Illustration

I intend to include SVG syntax between the different sections of the landing page, and this is a proof of concept for a solution fitting the overall vibe of the landing page.

Ultimately, it is meant to be replicated in Svelte, but here I relied on JavaScript instead.

**Be sure to** specify a `width` and `height` attribute for the nested SVG icons. This guarantees you can center the icons by translating them back by half the width, half the height.

Browser support for the `radialGradient` element is quite finnicky, but the current syntax seems to work on chrome, firefox and edge as well.
