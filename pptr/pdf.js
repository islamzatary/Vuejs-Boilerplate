const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.goto('http://localhost:8080/', {waitUntil: 'networkidle2'});
  await page.pdf({path: 'pptr/screenshots/hn.pdf', format: 'A4'});

  await browser.close();
})();