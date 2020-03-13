# Navigation

As the entry point for the borntofrappe website, I want to showcase a `nav` element with a very choreographed navigation. The idea is to show anchor links as if orbiting around the center of the screen, where an icon representing the website itself is shown. I am considering animating the entire lot, but one thing at a time.

The project is complex enough to warrant a couple of smaller bits. You find this in the **res** folder, but their essence is condensed in the Svelte project right in this folder. Run `npm run dev` and you should see the result.

## Update

I decided to update the distance between the different particles, so to have the distance between "rings" _decrease_ with each additional ring.

```diff
-const translate = (size / 2.5 / rings) * (indexRings + 1);
+const translate = (size / 2.5 / rings) * (indexRings + 1) + ((size / 10) / rings * (rings - indexRings));
```
