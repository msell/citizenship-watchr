const puppeteer = require('puppeteer')

puppeteer.launch().then(async browser => {
  const page = await browser.newPage();
  await page.setViewport({
    height: 1100,
    width: 1000
  })
  await page.goto('https://egov.uscis.gov/cris/processTimesDisplayInit.do');
  
  const dropdown = await page.waitForSelector('#officeSelect')
  await page.select('#officeSelect', '83')
    
  await page.click('input[name="displayLOProcTimes"]')
  await page.waitForSelector('#ptResults')
  await page.screenshot({path: 'output.png'});
  await browser.close();
});
