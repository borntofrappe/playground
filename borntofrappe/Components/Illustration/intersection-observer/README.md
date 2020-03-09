# Intersection Observer

A couple of notes on the project, especially given my lack of practice with the API. In the **res** folder you find a first implementation using vanilla JS. I found this one to be the a great starting point.

## res

A series of `section` elements are sized to cover the entirety of the viewport. A particular class is then added to highlight when each element is observed by the API.

```css
section.observed {
  background: purple;
  color: blanchedalmond;
}
```

In the script, and assuming the API is available.

```js
if (window.IntersectionObserver) {
}
```

1. set up the options.

   Here I was purely interested in having the section highlighted when halfway through the screen, so I skipped the root element and margin to focus on the threshold, but give a read to [the other values](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

   ```js
   const options = {
     threshold: 0.5
   };
   ```

1. create an instance of the intersection observer object. This one accepts as two arguments a callback function, more on that soon, and the options' object.

   ```js
   const observer = new IntersectionObserver(callback, options);
   ```

   The function could be very well included inline, as the object, but I decided to separate the syntax just to be clear.

   ```js
   function callback(entries, observer) {}
   ```

   `entries`, being the elements being observed by the API, and the observer itself. This is actually a collection of the elements being observed, so I'll pause the body of the function for a moment.

1. observe the desired elements using the `observer.observe()` function. For instance:

   ```js
   const sections = document.querySelectorAll("section");
   sections.forEach(section => observer.observe(section));
   ```

   Once you "assign" the elements to the observer, the callback function receives them in the `entries` argument

1. describe what to do with the entries being observed.

   In the trivial example, a class is added if the entry is halfway shown.

   ```js
   entries.forEach(entry => {
     if (entry.intersectionRatio > 0.5) {
       entry.target.classList.add("observed");
     } else {
       entry.target.classList.remove("observed");
     }
   });
   ```

## threshold && isIntersecting

You can actually decipher if the element is in sight with the `isIntersecting` boolean, made available on each entry.

```js
entry.target.className = entry.isIntersecting ? "observed" : "";
```

Paired with a threshold of `0`, this makes it possible to customize the element immediately, as it is intersected.

For the trivial example, I left a value of `0.5`. While more jarring, it shows better the purpose of the script.

## Svelte

The idea is to assign a class to the illustrations as they are in the range of the viewport. Since I need a reference to the `<svg>` elements, I can use the binding detailing [in this section of the tutorial](https://svelte.dev/tutorial/bind-this).

Initialize a variable.

```js
let illustration;
```

Bind the element to said variable.

```html
<svg bind:this="{illustration}"></svg>
```

Since the variable is `undefined` at first, I used [declarative statements](https://svelte.dev/tutorial/reactive-statements) to make sure the intersection logic works if the api is available and if the element is bound.

```js
$: {
  if (window.IntersectionObserver && illustration) {
  }
}
```

Since I plan to play/pause the CSS animation with a class, I can actually use a boolean.

```js
let observed = false;
```

Conditionally add a class with Svelte's [class syntax](https://svelte.dev/tutorial/class-shorthand)

```html
<svg class:observed></svg>
```

And focus with the intersection observer to just toggle the boolean.

I'll rewrite the syntax to be more concise, but to reiterate the API's logic.

1. options

   ```js
   const options = {
     threshold: 0.5
   };
   ```

1. observing

   ```js
   const observer = new IntersectionObserver(callback, options);
   observer.observe(illustration);
   ```

1. callback

   ```js
   function callback(entries, observer) {
     entries.forEach(entry => {
       observed = entry.isIntersecting;
     });
   }
   ```

And it seems to work. Using a threshold of `0` as well, although it is more difficult to see the animation stop (look at the DOM tree to see the class being removed).

I've decreased the duration of the animation to also make it more obvious. Scroll back, and it will start from the previous point.
