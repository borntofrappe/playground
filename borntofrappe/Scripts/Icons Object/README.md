# Icons Object

## Run

```bash
node script
```

## What

> run does

- read every `.svg` starting from the current folder;

- create an object where each icon is assigned to a key, and its syntax is included as a matching value

  ```js
  const icons = {
    html: `...`,
    css: `...`,
    js: `...`
  };
  ```

- write the object to a local file

- **update**: check if the object already contains an icon with the same name

## Why

> does what

I'm experimenting with different ways to include icons in the Sapper website, and starting with an object, I can create a function which exports only the icon required in the project.
