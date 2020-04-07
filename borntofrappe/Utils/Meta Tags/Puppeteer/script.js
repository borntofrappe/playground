const puppeteer = require('puppeteer');
const path = require('path');

const paths = [
  {
    html: '../Blog/index.html',
    png: '../Static/blog.png'
  },
  {
    html: '../Blog Post/index.html',
    png: '../Static/blog-post.png'
  },
  {
    html: '../Landing Page/index.html',
    png: '../Static/landing-page.png'
  },
];

(async () => {
  // toggle to false to see the program in action :p
  const browser = await puppeteer.launch({headless: true});
  const page = await browser.newPage();
    await page.setViewport({
    width: 1000,
    height: 500
  });

  for(const { html, png } of paths) {
    await page.goto(path.resolve(html), { waitUntil: 'networkidle0'});
    await page.screenshot({path: png});
  }
  await browser.close();
})();