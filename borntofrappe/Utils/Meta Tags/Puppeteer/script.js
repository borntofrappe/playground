const puppeteer = require('puppeteer');
const path = require('path');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
    await page.setViewport({
    width: 1000,
    height: 500
  });

  await page.goto(path.resolve('../Blog/index.html'), { waitUntil: 'networkidle0'});
  await page.screenshot({path: '../Static/blog.png'});

  await page.goto(path.resolve('../Blog Post/index.html'), { waitUntil: 'networkidle0'});
  await page.screenshot({path: '../Static/blog-post.png'});

  await page.goto(path.resolve('../Landing Page/index.html'), { waitUntil: 'networkidle0'});
  await page.screenshot({path: '../Static/landing-page.png'});

  await browser.close();
})();