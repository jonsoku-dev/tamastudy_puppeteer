const puppeteer = require('puppeteer');

const main = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  // goto : 보통 스크린샷의 전 단계
  await page.goto('https://google.com');
  await page.screenshot({ path: 'screenshot.png' });
  await browser.close();
};

main();
