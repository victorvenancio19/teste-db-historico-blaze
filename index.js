const puppeteer = require('puppeteer');



console.log("começou");

var i = 2
;

setTimeout(run,1000);

setInterval(run, 2880000);

async function run() {


  const browser = await puppeteer.launch();
    const page = await browser.newPage();
   
    await page.setViewport({
      width: 1366,
      height: 830,
      deviceScaleFactor: 1,
    });
  
    await page.goto('https://kitblaze.com/double/?visitante=home');
    
    
    
    
    await page.screenshot({ path: './imagens_Blaze/example' + i + '.png' });
    i++;
    
   
    
  
    await browser.close()

}


