const puppeteer = require('puppeteer');
const { getHtml } = require('./template.js');
const { checkDir } = require('./utility.js');

module.exports.makeImages = async (posts) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
    await page.setViewport({
    width: 1000,
    height: 500
  });

  for(const { title, tags } of posts) {
    const icons = tags ? tags.split(',').map(tag => tag.trim().toLowerCase()) : [];
    await page.setContent(getHtml(title, icons), { waitUntil: 'networkidle0'});
    const filePath = `./static/${title.split(' ').map(word => word.toLowerCase()).join('-')}.png`
    checkDir(filePath);
    await page.screenshot({path: filePath});
  }
  await browser.close();
};