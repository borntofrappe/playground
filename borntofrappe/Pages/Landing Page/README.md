# Landing Page

Building on the project developed in the **Navigation** folder, this is meant to be a proof of concept for the landing page.

The `<nav>` element is paired with a series of sections describing my online presence.

## Update

The page incorporates an additional `<nav>` element, not for the individual page, but for the entire website. Think of it as breadcrumb navigation. It is positioned at the very top of the page, and this creates conflict with the idea od having the choreographed, SVG navigation smack in the center of the screen. To fix this, I used a bit of JavaScript to literally absolute position the element at the top of the page, conditional to the page describing the root path.

It works, but it does raise a few questions regarding the flow of the document. Since the link redirects to the same page however, it these questions might be unwarranted.
