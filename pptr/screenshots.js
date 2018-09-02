const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  page.setViewport({width:1000,height:1000});
  await page.goto('http://localhost:8080/');
  await page.screenshot({path: 'pptr/screenshots/home.png'});

  await browser.close();
})();