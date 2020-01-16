const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // network상태가 여유로운 상태가 될때까지 기다린다.
  await page.goto('https://google.com', { waitUntil: 'networkidle2' });
  await page.pdf({ path: 'test.pdf', format: 'A4' });
  await browser.close();
};

main();
