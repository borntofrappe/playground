# Homapage Scroll

After debating about the navigation page and its purpose, I decided to accompany the `<nav>` with at least an additional section, detailing the blog portion of the website. The idea is to have, underneath the navigation and hopefully following the navigation's animation, a section forwarding toward the actual blog (and hopefully, showcasing the latest post(s)). By clicking on the anchor link for the blog, I'd like the section to smoothly scroll into view.

This is achieve with surprisingly little CSS:

```css
:global(html) {
  scroll-behavior: smooth;
}
```

## Update

To try things out, I decided to expanded the logic of the blog to every link in the navigation. I also added an additional anchor link to scroll back to the top.

Perhaps I should display only a section for the blog. At the very least, I should consider adding more than plain text to the different sections.

- most recent posts
- a selection of pens
- freeCodeCamp certifications
- latest tweets
- github repos
